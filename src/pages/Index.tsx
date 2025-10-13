import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { VMBOTab } from "@/components/VMBOTab";
import { HAVOTab } from "@/components/HAVOTab";
import { VWOTab } from "@/components/VWOTab";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-[var(--gradient-hero)] bg-clip-text text-transparent">
            Welkom bij jouw Studiekeuze Gids
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ontdek welke vervolgopleiding bij jou past! Of je nu VMBO, HAVO of VWO doet, 
            hier vind je alle informatie over profielen, opleidingen en open dagen.
          </p>
        </section>

        <Tabs defaultValue="vmbo" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 h-auto">
            <TabsTrigger value="vmbo" className="text-base">VMBO</TabsTrigger>
            <TabsTrigger value="havo" className="text-base">HAVO</TabsTrigger>
            <TabsTrigger value="vwo" className="text-base">VWO</TabsTrigger>
          </TabsList>

          <TabsContent value="vmbo" id="vmbo" className="mt-0">
            <VMBOTab />
          </TabsContent>

          <TabsContent value="havo" id="havo" className="mt-0">
            <HAVOTab />
          </TabsContent>

          <TabsContent value="vwo" id="vwo" className="mt-0">
            <VWOTab />
          </TabsContent>
        </Tabs>

        <div id="over">
          <AboutSection />
        </div>
      </main>

      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Studiekeuze Gids - Onderdeel van Griftland College</p>
          <p className="text-sm mt-2">
            Voor persoonlijk advies, neem contact op met je decaan.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
