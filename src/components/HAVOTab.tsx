import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "./ProfileCard";
import { OpenDayCard } from "./OpenDayCard";
import { Briefcase, BarChart, FlaskConical, Atom } from "lucide-react";

export const HAVOTab = () => {
  const profiles = {
    cm: {
      title: "Cultuur & Maatschappij",
      description: "Voor leerlingen met interesse in gedrag, samenleving en cultuur.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      subjects: ["Geschiedenis", "Aardrijkskunde", "Maatschappijleer", "Economie"],
      careers: ["Leraar", "Journalist", "HR-adviseur", "Sociaal werker", "Advocaat"]
    },
    em: {
      title: "Economie & Maatschappij",
      description: "Voor leerlingen met interesse in economie, handel en bedrijfskunde.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      subjects: ["Economie", "Wiskunde", "Aardrijkskunde", "Geschiedenis"],
      careers: ["Accountant", "Marketing manager", "Ondernemer", "Financieel adviseur"]
    },
    ng: {
      title: "Natuur & Gezondheid",
      description: "Voor leerlingen met interesse in gezondheidszorg en levenswetenschappen.",
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      subjects: ["Biologie", "Scheikunde", "Natuurkunde", "Wiskunde"],
      careers: ["Verpleegkundige", "Fysiotherapeut", "Apotheker", "Medisch analist"]
    },
    nt: {
      title: "Natuur & Techniek",
      description: "Voor leerlingen met interesse in techniek, technologie en natuurwetenschappen.",
      icon: <Atom className="h-6 w-6 text-primary" />,
      subjects: ["Natuurkunde", "Scheikunde", "Wiskunde", "Informatica"],
      careers: ["Ingenieur", "ICT'er", "Onderzoeker", "Architect", "Programmeur"]
    }
  };

  const hboOpenDays = [
    {
      institution: "Hogeschool Utrecht",
      type: "HBO" as const,
      date: "8 maart 2025",
      location: "Utrecht",
      description: "Kennismaken met HBO-opleidingen in economie, techniek, zorg en meer.",
      link: "https://www.hu.nl"
    },
    {
      institution: "Hogeschool van Amsterdam",
      type: "HBO" as const,
      date: "15 maart 2025",
      location: "Amsterdam",
      description: "Ontdek het brede aanbod aan HBO-opleidingen in Amsterdam.",
      link: "https://www.hva.nl"
    },
    {
      institution: "Windesheim",
      type: "HBO" as const,
      date: "22 maart 2025",
      location: "Zwolle",
      description: "HBO-opleidingen met focus op praktijk en innovatie.",
      link: "https://www.windesheim.nl"
    },
    {
      institution: "Hogeschool Inholland",
      type: "HBO" as const,
      date: "29 maart 2025",
      location: "Amsterdam, Almere",
      description: "Breed aanbod HBO-opleidingen met praktijkervaring.",
      link: "https://www.inholland.nl"
    },
    {
      institution: "Fontys Hogescholen",
      type: "HBO" as const,
      date: "5 april 2025",
      location: "Diverse locaties",
      description: "Een van de grootste hogescholen van Nederland.",
      link: "https://www.fontys.nl"
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">HAVO Profielen</h2>
        <p className="text-muted-foreground mb-6">
          Kies het profiel dat past bij jouw interesses en toekomstplannen.
        </p>
        
        <Tabs defaultValue="cm" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="cm">C&M</TabsTrigger>
            <TabsTrigger value="em">E&M</TabsTrigger>
            <TabsTrigger value="ng">N&G</TabsTrigger>
            <TabsTrigger value="nt">N&T</TabsTrigger>
          </TabsList>

          <TabsContent value="cm">
            <ProfileCard {...profiles.cm} />
          </TabsContent>
          <TabsContent value="em">
            <ProfileCard {...profiles.em} />
          </TabsContent>
          <TabsContent value="ng">
            <ProfileCard {...profiles.ng} />
          </TabsContent>
          <TabsContent value="nt">
            <ProfileCard {...profiles.nt} />
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-secondary">Open Dagen HBO</h2>
        <p className="text-muted-foreground mb-6">
          Met een HAVO-diploma kun je doorstromen naar het HBO. Bekijk hier de open dagen.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hboOpenDays.map((openDay, index) => (
            <OpenDayCard key={index} {...openDay} />
          ))}
        </div>
      </section>
    </div>
  );
};
