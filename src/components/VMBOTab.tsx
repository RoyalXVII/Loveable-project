import { ProfileCard } from "./ProfileCard";
import { OpenDayCard } from "./OpenDayCard";
import { Wrench, Users, Heart, Laptop, Download } from "lucide-react";
import { StudentAvatar } from "./StudentAvatar";
import { StudentChat } from "./StudentChat";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import mikeImage from "@/assets/students/mike-tech-male.jpg";
import annaImage from "@/assets/students/anna-care-female.jpg";
import kevinImage from "@/assets/students/kevin-business-male.jpg";
import juliaImage from "@/assets/students/julia-ict-female.jpg";

export const VMBOTab = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{
    name: string;
    profile: string;
    gender: "male" | "female";
  } | null>(null);

  const openChat = (name: string, profile: string, gender: "male" | "female") => {
    setSelectedStudent({ name, profile, gender });
    setChatOpen(true);
  };

  const mboSectors = [
    {
      title: "Techniek",
      description: "Voor leerlingen die graag praktisch bezig zijn en technische oplossingen bedenken.",
      icon: <Wrench className="h-6 w-6 text-primary" />,
      subjects: ["Natuurkunde", "Wiskunde", "Techniek"],
      careers: ["Elektricien", "Monteur", "Installateur", "Mechatronica"]
    },
    {
      title: "Zorg & Welzijn",
      description: "Voor leerlingen die graag met mensen werken en anderen willen helpen.",
      icon: <Heart className="h-6 w-6 text-primary" />,
      subjects: ["Biologie", "Verzorging", "Maatschappijleer"],
      careers: ["Verpleegkundige", "Verzorgende", "Pedagogisch medewerker", "Sociaal werker"]
    },
    {
      title: "Economie & Handel",
      description: "Voor leerlingen met interesse in handel, verkoop en bedrijfsvoering.",
      icon: <Users className="h-6 w-6 text-primary" />,
      subjects: ["Economie", "Handel", "Wiskunde"],
      careers: ["Verkoper", "Ondernemer", "Administratief medewerker", "Logistiek medewerker"]
    },
    {
      title: "ICT & Media",
      description: "Voor leerlingen met passie voor computers, apps en digitale media.",
      icon: <Laptop className="h-6 w-6 text-primary" />,
      subjects: ["Informatica", "Media", "Engels"],
      careers: ["ICT-medewerker", "Webdesigner", "Mediavormgever", "Applicatiebeheerder"]
    }
  ];

  const mboOpenDays = [
    {
      institution: "ROC Midden Nederland",
      type: "MBO" as const,
      date: "15 maart 2025",
      location: "Utrecht, Amersfoort, Nieuwegein",
      description: "Ontdek onze diverse opleidingen in techniek, zorg, ICT en economie.",
      link: "https://www.rocmn.nl"
    },
    {
      institution: "MBO Utrecht",
      type: "MBO" as const,
      date: "22 maart 2025",
      location: "Utrecht",
      description: "Kom kennismaken met praktijkgerichte opleidingen en moderne faciliteiten.",
      link: "https://www.mboutrecht.nl"
    },
    {
      institution: "Landstede MBO",
      type: "MBO" as const,
      date: "29 maart 2025",
      location: "Zwolle",
      description: "Informatie over techniek, zorg, sport en veiligheidsopleidingen.",
      link: "https://www.landstede.nl"
    },
    {
      institution: "ROC van Amsterdam",
      type: "MBO" as const,
      date: "5 april 2025",
      location: "Amsterdam",
      description: "Breed aanbod van beroepsopleidingen in het hart van Amsterdam.",
      link: "https://www.rocva.nl"
    },
    {
      institution: "ROC Flevoland",
      type: "MBO" as const,
      date: "12 april 2025",
      location: "Almere",
      description: "Moderne leeromgeving met focus op praktijk en innovatie.",
      link: "https://www.rocflevoland.nl"
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-primary">MBO Sectoren</h2>
        <p className="text-muted-foreground mb-6">
          Na het VMBO kun je kiezen uit verschillende MBO-sectoren. Ontdek welke richting bij jou past!
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {mboSectors.map((sector, index) => (
            <ProfileCard key={index} {...sector} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4 text-secondary text-center">Chat met MBO studenten</h2>
        <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
          Praat met echte MBO studenten over hun studie, dagelijkse leven en toekomstplannen!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StudentAvatar
            gender="male"
            name="Mike"
            profile="Techniek"
            image={mikeImage}
            onClick={() => openChat("Mike", "tech", "male")}
          />
          <StudentAvatar
            gender="female"
            name="Anna"
            profile="Zorg & Welzijn"
            image={annaImage}
            onClick={() => openChat("Anna", "care", "female")}
          />
          <StudentAvatar
            gender="male"
            name="Kevin"
            profile="Economie"
            image={kevinImage}
            onClick={() => openChat("Kevin", "business", "male")}
          />
          <StudentAvatar
            gender="female"
            name="Julia"
            profile="ICT & Media"
            image={juliaImage}
            onClick={() => openChat("Julia", "ict", "female")}
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-secondary">Open Dagen MBO</h2>
        <p className="text-muted-foreground mb-6">
          Bezoek een open dag om de opleiding en school echt te leren kennen.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mboOpenDays.map((openDay, index) => (
            <OpenDayCard key={index} {...openDay} />
          ))}
        </div>
      </section>

      <section className="mt-12 bg-muted/30 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">📄 LOB-verlofaanvraagformulier</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Download hier het formulier om verlof aan te vragen voor open dagen en meeloopdagen.
        </p>
        <Button asChild size="lg" className="gap-2">
          <a href="/downloads/LOB-Verlofaanvraagformulier-mavo.docx" download>
            <Download className="h-5 w-5" />
            🔵 Download VMBO/MAVO formulier
          </a>
        </Button>
      </section>

      {chatOpen && selectedStudent && (
        <StudentChat
          studentName={selectedStudent.name}
          profile={selectedStudent.profile as any}
          gender={selectedStudent.gender}
          onClose={() => setChatOpen(false)}
        />
      )}
    </div>
  );
};
