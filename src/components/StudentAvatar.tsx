import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StudentAvatarProps {
  gender: "male" | "female";
  name: string;
  profile: string;
  image: string;
  onClick: () => void;
}

export const StudentAvatar = ({ gender, name, profile, image, onClick }: StudentAvatarProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
      onClick={onClick}
    >
      <CardHeader className="text-center pb-3">
        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-3 shadow-lg ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-sm">
          {gender === "male" ? "Student" : "Studente"} • {profile.toUpperCase()}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button variant="outline" className="w-full" size="sm">
          Start chat
        </Button>
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
