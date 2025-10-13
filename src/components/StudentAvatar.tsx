import { User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StudentAvatarProps {
  gender: "male" | "female";
  name: string;
  profile: string;
  onClick: () => void;
}

export const StudentAvatar = ({ gender, name, profile, onClick }: StudentAvatarProps) => {
  const colors = {
    cm: "bg-gradient-to-br from-purple-500 to-pink-500",
    em: "bg-gradient-to-br from-blue-500 to-cyan-500",
    ng: "bg-gradient-to-br from-green-500 to-emerald-500",
    nt: "bg-gradient-to-br from-orange-500 to-red-500"
  };

  const color = colors[profile as keyof typeof colors] || colors.cm;

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      <CardHeader className="text-center">
        <div className={`w-24 h-24 ${color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
          <User className="h-12 w-12 text-white" />
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>
          {gender === "male" ? "Student" : "Studente"} • Klik om te chatten
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-center text-muted-foreground">
          Chat met {name} over het studentenleven, kosten, en de opleiding!
        </p>
      </CardContent>
    </Card>
  );
};

interface ChatWindowProps {
  studentName: string;
  profile: string;
  gender: "male" | "female";
  onClose: () => void;
}

export const ChatWindow = ({ studentName, profile, gender, onClose }: ChatWindowProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <div>
            <CardTitle>{studentName}</CardTitle>
            <CardDescription>Student chat</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          {/* Chat interface will be added here */}
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Chat interface coming soon...
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
