import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clinics, Treatment } from "@/data/clinics";
import { TreatmentCard } from "@/components/TreatmentCard";
import { BookingCalendar } from "@/components/BookingCalendar";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const ClinicDetail = () => {
  const { clinicId } = useParams();
  const navigate = useNavigate();
  const clinic = clinics.find(c => c.id === clinicId);

  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!clinic) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Clinic not found</p>
      </div>
    );
  }

  const handleContinue = () => {
    if (selectedTreatment && selectedDate && selectedTime) {
      navigate(`/booking/${clinic.id}`, {
        state: {
          clinic,
          treatment: selectedTreatment,
          date: selectedDate,
          time: selectedTime,
        },
      });
    }
  };

  const canContinue = selectedTreatment && selectedDate && selectedTime;

  return (
    <main className="min-h-screen pt-20 pb-32">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-300 flex items-center justify-center">
          <span className="font-display text-5xl text-muted-foreground/20">{clinic.nameKorean}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      <div className="container -mt-16 relative z-10">
        {/* Clinic Info */}
        <div className="bg-card rounded-2xl shadow-elevated p-8 mb-8 animate-slide-up">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">{clinic.name}</h1>
          <p className="text-lg text-muted-foreground font-display mb-4">{clinic.nameKorean}</p>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{clinic.location}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">{clinic.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Treatments */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-display text-2xl text-foreground mb-6">Select Treatment</h2>
            <div className="space-y-4">
              {clinic.treatments.map((treatment) => (
                <TreatmentCard
                  key={treatment.id}
                  treatment={treatment}
                  selected={selectedTreatment?.id === treatment.id}
                  onSelect={setSelectedTreatment}
                />
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-display text-2xl text-foreground mb-6">Select Date & Time</h2>
            <div className="bg-card rounded-2xl shadow-soft p-6">
              <BookingCalendar
                availableSlots={clinic.availableSlots}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectDate={(date) => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                onSelectTime={setSelectedTime}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 p-4">
        <div className="container flex items-center justify-between">
          <div>
            {selectedTreatment && (
              <div className="animate-fade-in">
                <p className="text-sm text-muted-foreground">Selected</p>
                <p className="font-display text-lg">{selectedTreatment.name}</p>
                {selectedDate && selectedTime && (
                  <p className="text-sm text-primary flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {selectedDate} at {selectedTime}
                  </p>
                )}
              </div>
            )}
          </div>
          <Button
            variant="premium"
            size="lg"
            disabled={!canContinue}
            onClick={handleContinue}
            className="gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ClinicDetail;
