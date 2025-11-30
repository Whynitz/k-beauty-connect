import { Treatment, getCategoryLabel, getCategoryColor } from "@/data/clinics";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  treatment: Treatment;
  selected?: boolean;
  onSelect: (treatment: Treatment) => void;
}

export const TreatmentCard = ({ treatment, selected, onSelect }: TreatmentCardProps) => {
  return (
    <button
      onClick={() => onSelect(treatment)}
      className={cn(
        "w-full text-left p-5 rounded-xl border-2 transition-all duration-300",
        selected
          ? "border-primary bg-primary/5 shadow-gold"
          : "border-border bg-card hover:border-primary/30 hover:shadow-soft"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <span className={cn("inline-block px-2.5 py-1 rounded-md text-xs font-medium mb-2", getCategoryColor(treatment.category))}>
            {getCategoryLabel(treatment.category)}
          </span>
          <h4 className="font-display text-lg text-foreground">{treatment.name}</h4>
        </div>
        <div className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
          selected ? "border-primary bg-primary" : "border-muted-foreground/30"
        )}>
          {selected && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{treatment.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{treatment.duration}</span>
        </div>
        <span className="font-display text-lg text-foreground">{treatment.price}</span>
      </div>
    </button>
  );
};
