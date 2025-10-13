import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileCard } from "./ProfileCard";
import { OpenDayCard } from "./OpenDayCard";
import { Briefcase, BarChart, FlaskConical, Atom } from "lucide-react";

export const VWOTab = () => {
  const profiles = {
    cm: {
      title: "Cultuur & Maatschappij",
      description: "Voor leerlingen die geïnteresseerd zijn in menselijk gedrag, cultuur en maatschappelijke vraagstukken.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      subjects: ["Geschiedenis", "Aardrijkskunde", "Maatschappijleer", "Economie", "Filosofie"],
      careers: ["Advocaat", "Rechter", "Psycholoog", "Journalist", "Docent", "Diplomaat"]
    },
    em: {
      title: "Economie & Maatschappij",
      description: "Voor leerlingen met interesse in economie, bedrijfskunde en maatschappelijke vraagstukken.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      subjects: ["Economie", "Wiskunde A", "Geschiedenis", "Aardrijkskunde"],
      careers: ["Econoom", "Accountant", "Consultant", "Ondernemer", "Financieel adviseur"]
    },
    ng: {
      title: "Natuur & Gezondheid",
      description: "Voor leerlingen die geïnteresseerd zijn in geneeskunde en levenswetenschappen.",
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      subjects: ["Biologie", "Scheikunde", "Natuurkunde", "Wiskunde B"],
      careers: ["Arts", "Tandarts", "Apotheker", "Biomedisch onderzoeker", "Dierenarts"]
    },
    nt: {
      title: "Natuur & Techniek",
      description: "Voor leerlingen met interesse in wiskunde, natuurkunde en technische toepassingen.",
      icon: <Atom className="h-6 w-6 text-primary" />,
      subjects: ["Natuurkunde", "Scheikunde", "Wiskunde B", "Informatica"],
      careers: ["Ingenieur", "Architect", "Onderzoeker", "Data scientist", "Software engineer"]
    }
  };

  const universityOpenDays = [
    {
      institution: "Universiteit Utrecht",
      type: "Universiteit" as const,
      date: "1 maart 2025",
      location: "Utrecht",
      description: "Open dag met informatie over alle bachelor opleidingen en het studentenleven.",
      link: "https://www.uu.nl"
    },
    {
      institution: "Universiteit van Amsterdam",
      type: "Universiteit" as const,
      date: "8 maart 2025",
      location: "Amsterdam",
      description: "Ontdek de UvA en haar brede aanbod aan wetenschappelijke opleidingen.",
      link: "https://www.uva.nl"
    },
    {
      institution: "VU Amsterdam",
      type: "Universiteit" as const,
      date: "15 maart 2025",
      location: "Amsterdam",
      description: "Kennismaken met de VU en haar interdisciplinaire aanpak.",
      link: "https://www.vu.nl"
    },
    {
      institution: "Universiteit Twente",
      type: "Universiteit" as const,
      date: "22 maart 2025",
      location: "Enschede",
      description: "Tech-universiteit met focus op innovatie en ondernemerschap.",
      link: "https://www.utwente.nl"
    },
    {
      institution: "TU Delft",
      type: "Universiteit" as const,
      date: "29 maart 2025",
      location: "Delft",
      description: "Topuniversiteit voor techniek en toegepaste wetenschappen.",
      link: "https://www.tudelft.nl"
    },
    {
      institution: "Radboud Universiteit",
      type: "Universiteit" as const,
      date: "5 april 2025",
      location: "Nijmegen",
      description: "Persoonlijke universiteit met aandacht voor student en samenleving.",
      link: "https://www.ru.nl"
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">VWO Profielen</h2>
        <p className="text-muted-foreground mb-6">
          Kies het profiel dat aansluit bij jouw ambities en universitaire studie.
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
        <h2 className="text-3xl font-bold mb-4 text-secondary">Open Dagen Universiteiten</h2>
        <p className="text-muted-foreground mb-6">
          Met een VWO-diploma ga je naar de universiteit. Plan een bezoek aan een open dag!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universityOpenDays.map((openDay, index) => (
            <OpenDayCard key={index} {...openDay} />
          ))}
        </div>
      </section>
    </div>
  );
};
