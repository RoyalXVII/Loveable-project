import { GraduationCap } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-[var(--gradient-hero)] text-primary-foreground py-6 px-4 shadow-[var(--shadow-soft)]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">Studiekeuze Gids</h1>
            <p className="text-sm opacity-90">Jouw school, jouw toekomst</p>
          </div>
        </div>
      </div>
    </header>
  );
};
