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
      institution: "TU Delft",
      type: "Universiteit" as const,
      date: "14 maart 2025",
      location: "Delft",
      description: "Bachelor Open Campus Day - topuniversiteit voor techniek en toegepaste wetenschappen.",
      link: "https://www.tudelft.nl/en/education/study-programme-orientation/preparing-for-a-bachelor/bsc-online-open-days"
    },
    {
      institution: "Universiteit Twente",
      type: "Universiteit" as const,
      date: "21 maart 2025",
      location: "Enschede",
      description: "Bachelor Open Dag - tech-universiteit met focus op innovatie en ondernemerschap op de campus.",
      link: "https://www.utwente.nl/onderwijs/studiekeuzekalender/bachelor-open-dagen/"
    },
    {
      institution: "Radboud Universiteit",
      type: "Universiteit" as const,
      date: "29 maart 2025",
      location: "Nijmegen",
      description: "Bachelor Open Dag - persoonlijke universiteit met aandacht voor student en samenleving.",
      link: "https://www.ru.nl/opleidingen/bachelors/voorlichtingsactiviteiten"
    },
    {
      institution: "Universiteit van Amsterdam",
      type: "Universiteit" as const,
      date: "27-31 oktober 2025",
      location: "Amsterdam",
      description: "UvA Bachelorweek met online informatierondes en Open Campus Day op 31 oktober.",
      link: "https://www.uva.nl/onderwijs/bachelor/open-dagen/uva-bachelorweek/uva-bachelorweek.html"
    },
    {
      institution: "VU Amsterdam",
      type: "Universiteit" as const,
      date: "7-8 november 2025",
      location: "Amsterdam",
      description: "VU Bachelor's Days - vrijdag en zaterdag kennismaken met de VU en haar opleidingen.",
      link: "https://vu.nl/en/education/more-about/vu-bachelor-s-day"
    },
    {
      institution: "Universiteit Utrecht",
      type: "Universiteit" as const,
      date: "22 november 2025",
      location: "Utrecht",
      description: "Bachelor Open Dag met informatie over alle bacheloropleidingen.",
      link: "https://www.uu.nl/bachelors/general-information/how-to-choose-a-degree/bachelors-open-days"
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
