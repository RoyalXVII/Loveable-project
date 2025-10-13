import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface OpenDayCardProps {
  institution: string;
  type: "Universiteit" | "HBO" | "MBO";
  date: string;
  location: string;
  description: string;
  link: string;
}

export const OpenDayCard = ({ institution, type, date, location, description, link }: OpenDayCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{institution}</CardTitle>
            <CardDescription className="mt-1">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                {type}
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-sm">{description}</p>
        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Meer informatie
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};
