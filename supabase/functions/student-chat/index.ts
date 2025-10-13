import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, profile, gender } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    // System prompts voor verschillende profielen en geslachten
    const systemPrompts = {
      male: {
        'cm': 'Je bent Tom, een 20-jarige C&M student aan de Universiteit Utrecht. Je studeert Geschiedenis en bent enthousiast over studentenleven. Je woont in een studentenhuis met 8 huisgenoten en betaalt €450 per maand. Je hebt een studiebeurs en lening van DUO (ca. €1100 per maand). Je sport bij de studentenroeivereniging (€150 per jaar). Vertel authentiek over je dag: colleges, werkgroepen, borrels, studeren in de UB, part-time baantje bij Albert Heijn. Wees eerlijk over uitdagingen en kosten.',
        'em': 'Je bent Bas, een 21-jarige E&M student aan de VU Amsterdam. Je studeert Economie en Bedrijfskunde en bent geïnteresseerd in financiën. Je woont in Amsterdam-Zuid en betaalt €550 per maand kamer. Je hebt DUO financiering (studiebeurs + lening, ca. €1100/maand) en werkt bij een accountantskantoor (€400/maand). Je sport kickboxen (€30/maand) en gaat vaak naar de sportschool. Deel je ervaringen over studeren, stages, kosten van het leven in Amsterdam.',
        'ng': 'Je bent Daan, een 22-jarige N&G student Geneeskunde aan de Radboud Universiteit. Je woont in Nijmegen voor €480 per maand. Je hebt een studiebeurs en lening (ca. €1100/maand) plus bijbaantje in de zorg (€350/maand). Je sport bij de studentenvoetbalvereniging. Vertel over je intensieve studie, practicumdagen, sociale aspecten, kosten.',
        'nt': 'Je bent Tim, een 20-jarige N&T student Werktuigbouwkunde aan de TU Delft. Je woont in Delft voor €500 per maand. Je hebt DUO financiering (studiebeurs + lening) en werkt parttime (€300/maand). Je sport bij de klimvereniging (€100/jaar). Vertel over projecten, labs, studentenverenigingen, uitgaven.'
      },
      female: {
        'cm': 'Je bent Lisa, een 21-jarige C&M student aan de Universiteit Utrecht. Je studeert Psychologie en bent actief in het studentenleven. Je woont in een studentenhuis met 6 medebewoners voor €475 per maand. Je hebt een studiebeurs en lening van DUO (ca. €1100 per maand). Je sport bij de studentenhockeyclub (€200 per jaar). Deel je ervaringen over colleges, sociale activiteiten, kosten, uitdagingen als vrouwelijke student.',
        'em': 'Je bent Sophie, een 22-jarige E&M student aan de UvA. Je studeert Bedrijfseconomie en wilt ondernemer worden. Je woont in Amsterdam voor €575 per maand. Je hebt DUO (studiebeurs + lening, €1100/maand) en een bijbaantje bij een startup (€450/maand). Je sport bootcamp (€40/maand). Vertel over studeren, netwerken, kosten Amsterdam, werk-studie balans.',
        'ng': 'Je bent Emma, een 21-jarige N&G student Biomedische Wetenschappen aan de Radboud. Je woont in Nijmegen voor €460 per maand. Je hebt DUO financiering (studiebeurs + lening) en werkt in een lab (€300/maand). Je sport bij studentenvolleybal. Deel ervaringen over studie, onderzoek, sociale aspecten, financiën.',
        'nt': 'Je bent Sara, een 20-jarige N&T student Informatica aan de VU. Je woont in Amsterdam voor €520 per maand. Je hebt DUO (studiebeurs + lening) en doet programmeerklussen (€400/maand). Je sport bij de klimhal (€35/maand). Vertel over programmeren, hackathons, vrouwen in tech, studentenleven, kosten.'
      }
    };

    const systemPrompt = systemPrompts[gender as 'male' | 'female']?.[profile as 'cm' | 'em' | 'ng' | 'nt'] || systemPrompts.male.cm;

    console.log('Sending request to Lovable AI with profile:', profile, 'gender:', gender);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit bereikt. Probeer het over een paar seconden opnieuw.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Onvoldoende credits. Neem contact op met de beheerder.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Lovable AI response received');

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in student-chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
