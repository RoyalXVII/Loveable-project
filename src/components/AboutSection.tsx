import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="over" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-[var(--gradient-hero)] bg-clip-text text-transparent">
            Over Ons
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ons decanaat staat voor je klaar om je te begeleiden bij jouw studiekeuze
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>De rol van de decaan</CardTitle>
            <CardDescription>
              Jouw partner in studiekeuze en loopbaanbegeleiding
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              De decaan organiseert de keuzebegeleiding en bouwt samen met mentoren aan de LOB-leerlijn. 
              Centraal staat dat leerlingen zich bewust worden van hun eigen mogelijkheden, wensen en interesses.
            </p>

            <div>
              <h3 className="font-semibold mb-3">Wij ondersteunen je met:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Het stappenplan van Qompas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Persoonlijke gesprekken</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keuzelessen in 2/3 mavo, 3 havo en 3 vwo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Voorlichtingslessen voor leerlingen en voorlichtingsavonden voor ouders/verzorgers</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Loopbaanoriëntatie en begeleiding (LOB)</h3>
              <p className="text-muted-foreground mb-4">
                Het doel is dat leerlingen:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Een duidelijk beeld van zichzelf ontwikkelen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Een passende opleiding en/of beroep vinden</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Leren eigen keuzes te maken op basis van kwaliteiten en beperkingen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Verantwoordelijkheid nemen voor deze keuzes</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Contact met het decanaat</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>035-6098 214 of 215</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:decaan@griftland.nl" className="hover:text-primary transition-colors">
                    decaan@griftland.nl
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Je kunt de decaan vinden in kamer 9a, in de gang van LO. 
                Voor een gesprek is het handig om vooraf een afspraak te maken per mail.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
