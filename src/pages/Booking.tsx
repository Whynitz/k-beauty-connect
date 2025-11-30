import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PersonalInfoForm, PersonalInfo } from "@/components/PersonalInfoForm";
import { Button } from "@/components/ui/button";
import { Clinic, Treatment } from "@/data/clinics";
import { MapPin, Calendar, Clock, Sparkles, Shield, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface BookingState {
  clinic: Clinic;
  treatment: Treatment;
  date: string;
  time: string;
}

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as BookingState | null;

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    gender: "",
    passportNumber: "",
    phone: "",
    email: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!state) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">No booking information found</p>
      </div>
    );
  }

  const { clinic, treatment, date, time } = state;

  const isFormValid = 
    personalInfo.fullName.trim() !== "" &&
    personalInfo.gender !== "" &&
    personalInfo.passportNumber.trim() !== "" &&
    personalInfo.phone.trim() !== "" &&
    personalInfo.email.trim() !== "" &&
    personalInfo.country !== "";

  const handleSubmit = async () => {
    if (!isFormValid) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to submit your reservation.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    navigate("/confirmation", {
      state: {
        clinic,
        treatment,
        date,
        time,
        personalInfo,
      },
    });
  };

  return (
    <main className="min-h-screen pt-20 pb-8">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
            Complete Your Reservation
          </h1>
          <p className="text-muted-foreground">
            Please provide your information to confirm your booking
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 animate-slide-up">
            <div className="bg-card rounded-2xl shadow-soft p-6 md:p-8">
              <h2 className="font-display text-xl mb-6">Personal Information</h2>
              <PersonalInfoForm data={personalInfo} onChange={setPersonalInfo} />
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-start gap-3 text-sm text-muted-foreground mb-6">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p>
                    Your personal information is encrypted and securely stored. 
                    We only share necessary details with the clinic for your appointment.
                  </p>
                </div>

                <Button
                  variant="premium"
                  size="xl"
                  className="w-full gap-2"
                  disabled={!isFormValid || isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Reservation Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-2xl shadow-soft p-6 sticky top-24">
              <h2 className="font-display text-xl mb-6">Booking Summary</h2>
              
              <div className="space-y-5">
                {/* Clinic */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Clinic</p>
                    <p className="font-display text-lg">{clinic.name}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />
                      {clinic.location}
                    </div>
                  </div>
                </div>

                {/* Treatment */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">✨</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Treatment</p>
                    <p className="font-display text-lg">{treatment.name}</p>
                    <p className="text-sm text-primary">{treatment.price}</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-display text-lg">{date}</p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <Clock className="w-3 h-3" />
                      {time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span>{treatment.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
