import { Clinic } from "@/data/clinics";
import { MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ClinicCardProps {
  clinic: Clinic;
  index?: number;
}

export const ClinicCard = ({ clinic, index = 0 }: ClinicCardProps) => {
  return (
    <Link
      to={`/clinic/${clinic.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <article className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center">
            <span className="font-display text-3xl text-muted-foreground/30">{clinic.nameKorean}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                {clinic.name}
              </h3>
              <p className="text-sm text-muted-foreground font-body">{clinic.nameKorean}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 text-muted-foreground mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{clinic.location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {clinic.specialties.slice(0, 3).map((specialty) => (
              <span
                key={specialty}
                className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
              >
                <Sparkles className="w-3 h-3" />
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
