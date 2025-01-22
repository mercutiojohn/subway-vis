import { Info, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusDisplayProps {
  type: "loading" | "error" | "empty";
  message?: string;
  className?: string;
}

export function StatusDisplay({ 
  type, 
  message, 
  className 
}: StatusDisplayProps) {
  const icons = {
    loading: <Loader2 className="h-5 w-5 animate-spin" />,
    error: <AlertCircle className="h-5 w-5 text-destructive" />,
    empty: <Info className="h-5 w-5" />
  };

  const defaultMessages = {
    loading: "Loading...",
    error: "Unknown Error",
    empty: "No Content"
  };

  return (
    <div className={cn(
      "flex justify-center items-center gap-2 text-muted-foreground p-4",
      className
    )}>
      {icons[type]}
      <span>{message || defaultMessages[type]}</span>
    </div>
  );
} 