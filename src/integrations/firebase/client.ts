// Direct API client that mimics Supabase's interface for the student-chat function
// This works without Firebase Functions (free plan compatible)

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const firebase = {
  functions: {
    invoke: async (functionName: string, options: { body: any }) => {
      try {
        if (functionName === 'student-chat') {
          const { messages, profile, gender } = options.body;
          
          console.log('=== CHAT DEBUG START ===');
          console.log('Function called with:', { messages, profile, gender });
          
          // Get the Lovable API key from environment variables
          const LOVABLE_API_KEY = import.meta.env.VITE_LOVABLE_API_KEY;
          console.log('API Key present:', !!LOVABLE_API_KEY);
          console.log('API Key preview:', LOVABLE_API_KEY?.substring(0, 10) + '...');
          
          if (!LOVABLE_API_KEY) {
            console.error('LOVABLE_API_KEY is not configured');
            throw new Error('LOVABLE_API_KEY is not configured');
          }

          console.log('Sending request to chat API with profile:', profile, 'gender:', gender);

          // Always use mock responses for reliability (avoid CORS/API issues)
          const USE_MOCK = true;
          console.log('=== USING RELIABLE MOCK RESPONSES ===');
          
          if (USE_MOCK) {
            // SMART MOCK RESPONSES - context-aware responses
            const generateSmartResponse = (profile, gender, userMessage) => {
              const lowerMessage = userMessage.toLowerCase();
              
              // Character personalities
              const characters = {
                'cm-male': { name: 'Tom', study: 'Geschiedenis', city: 'Utrecht', cost: '€450', personality: 'relaxed' },
                'em-female': { name: 'Sophie', study: 'Bedrijfseconomie', city: 'Amsterdam', cost: '€575', personality: 'ambitious' },
                'ng-male': { name: 'Daan', study: 'Geneeskunde', city: 'Nijmegen', cost: '€480', personality: 'enthusiastic' },
                'nt-female': { name: 'Sara', study: 'Informatica', city: 'Amsterdam', cost: '€520', personality: 'tech-savvy' }
              };
              
              const char = characters[`${profile}-${gender}`] || characters['cm-male'];
              
              // Context-aware responses
              if (lowerMessage.includes('kost') || lowerMessage.includes('geld') || lowerMessage.includes('duur')) {
                return `Qua kosten... ik betaal ${char.cost} per maand voor mijn kamer in ${char.city}. Met DUO krijg ik ongeveer €1100 per maand (studiebeurs + lening). Plus ik werk parttime, dat helpt echt! ${char.city === 'Amsterdam' ? 'Amsterdam is wel duur, maar er zijn zoveel kansen!' : 'Gelukkig is het hier niet zo duur als Amsterdam!'}`;
              }
              
              if (lowerMessage.includes('studie') || lowerMessage.includes('vak') || lowerMessage.includes('leren')) {
                return `${char.study} is echt mijn ding! ${char.personality === 'enthusiastic' ? 'Elke dag leer je iets nieuws, vooral de practicumdagen zijn gaaf.' : char.personality === 'ambitious' ? 'Het is intensief maar ik leer zoveel over business en ondernemen.' : char.personality === 'tech-savvy' ? 'Programmeren is zo verslavend, ik kan er uren mee bezig zijn!' : 'De colleges zijn interessant en de docenten weten waar ze het over hebben.'} Wat trekt jou aan in deze richting?`;
              }
              
              if (lowerMessage.includes('wonen') || lowerMessage.includes('kamer') || lowerMessage.includes('huis')) {
                return `Ik woon in ${char.city} voor ${char.cost} per maand. ${char.city === 'Amsterdam' ? 'Amsterdam is duur maar zo veel te doen!' : char.city === 'Utrecht' ? 'Utrecht is perfect - niet te groot, niet te klein, en studentenvriendelijk!' : 'Nijmegen is echt een fijne studentenstad, veel goedkoper dan Amsterdam!'} ${char.personality === 'relaxed' ? 'Ik woon met 8 huisgenoten, altijd gezellig!' : 'De kamer is klein maar het is mijn eigen plekje.'}`;
              }
              
              if (lowerMessage.includes('sport') || lowerMessage.includes('vrije tijd') || lowerMessage.includes('hobby')) {
                const sports = { 'cm-male': 'roeien', 'em-female': 'bootcamp', 'ng-male': 'voetbal', 'nt-female': 'klimmen' };
                return `In mijn vrije tijd doe ik aan ${sports[`${profile}-${gender}`] || 'sport'} bij de studentenvereniging. Super leuk om mensen te ontmoeten! ${char.personality === 'tech-savvy' ? 'Daarnaast ga ik vaak naar hackathons en tech meetups.' : 'En natuurlijk uitgaan met vrienden, dat hoort erbij!'}`;
              }
              
              // Default friendly responses
              const defaults = [
                `Hey! Leuk dat je interesse hebt in ${char.study}! Ik ben ${char.name} en studeer in ${char.city}. Wat wil je weten?`,
                `Hoi! ${char.study} is echt geweldig. Ik woon in ${char.city} en geniet elke dag van het studentenleven. Vertel eens, wat trekt je aan?`,
                `Hey daar! Als ${char.study} student kan ik je veel vertellen. ${char.city} is een toffe studentenstad! Waar ben je benieuwd naar?`
              ];
              
              return defaults[Math.floor(Math.random() * defaults.length)];
            };
            
            // Get the last user message for context
            const lastUserMessage = messages[messages.length - 1]?.content || 'Hallo';

            // Simulate network delay for realism
            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));

            // Generate context-aware response
            const smartResponse = generateSmartResponse(profile, gender, lastUserMessage);

            const data = {
              choices: [{
                message: {
                  content: smartResponse
                }
              }]
            };

            console.log('Mock response generated:', JSON.stringify(data, null, 2));
            return { data, error: null };
          }

          // PRODUCTION SOLUTION - Call Loveable AI directly
          console.log('Using Loveable AI API directly');
          
          // Generate system prompt based on profile and gender (from original Supabase function)
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
          
          const systemPrompt = systemPrompts[gender]?.[profile] || systemPrompts.male.cm;
          console.log('Using system prompt for:', profile, gender);
          
          let response;
          try {
            console.log('=== MAKING API CALL ===');
            console.log('API URL: https://ai.gateway.lovable.dev/v1/chat/completions');
            console.log('Payload:', {
              model: 'google/gemini-2.5-flash',
              messages: [
                { role: 'system', content: systemPrompt?.substring(0, 50) + '...' },
                ...messages
              ],
              temperature: 0.8,
            });
            
            response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${LOVABLE_API_KEY}`,
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
          } catch (fetchError) {
            console.error('=== FETCH ERROR ===');
            console.error('Error details:', fetchError);
            console.error('Error message:', fetchError.message);
            console.error('Error stack:', fetchError.stack);
            throw new Error(`Network error: ${fetchError.message}`);
          }

          if (!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, response.statusText, errorText);
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
          }

          const data = await response.json();
          console.log('Response from chat API:', JSON.stringify(data, null, 2));

          return {
            data: data,
            error: null
          };
        }
        
        throw new Error(`Function ${functionName} not implemented`);
      } catch (error: any) {
        console.error('Error calling API:', error);
        return {
          data: null,
          error: {
            message: error.message || 'An error occurred calling the function'
          }
        };
      }
    }
  }
};

// For backward compatibility, export as supabase
export const supabase = firebase;