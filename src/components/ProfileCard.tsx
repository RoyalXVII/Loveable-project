import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ProfileCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  subjects: string[];
  careers: string[];
}

export const ProfileCard = ({ title, description, icon, subjects, careers }: ProfileCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1 bg-[var(--gradient-card)]">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2 text-primary">Belangrijkste vakken:</h4>
          <ul className="space-y-1">
            {subjects.map((subject, index) => (
              <li key={index} className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                {subject}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-secondary">Mogelijke beroepen:</h4>
          <div className="flex flex-wrap gap-2">
            {careers.map((career, index) => (
              <span
                key={index}
                className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium"
              >
                {career}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
