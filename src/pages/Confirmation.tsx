import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clinic, Treatment } from "@/data/clinics";
import { PersonalInfo } from "@/components/PersonalInfoForm";
import { CheckCircle, MapPin, Calendar, Clock, Mail, Phone, Home } from "lucide-react";

interface ConfirmationState {
  clinic: Clinic;
  treatment: Treatment;
  date: string;
  time: string;
  personalInfo: PersonalInfo;
}

const Confirmation = () => {
  const location = useLocation();
  const state = location.state as ConfirmationState | null;

  if (!state) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No confirmation data found</p>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const { clinic, treatment, date, time, personalInfo } = state;

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-10 animate-scale-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-gold">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground mb-3">
            Reservation Submitted!
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your reservation request has been sent to {clinic.name}. 
            You will receive a confirmation within 12 hours.
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-card rounded-2xl shadow-elevated overflow-hidden animate-slide-up">
          {/* Clinic Header */}
          <div className="bg-secondary/50 p-6 border-b border-border">
            <h2 className="font-display text-2xl text-foreground">{clinic.name}</h2>
            <p className="text-muted-foreground">{clinic.nameKorean}</p>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
              <MapPin className="w-4 h-4" />
              {clinic.location}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 space-y-6">
            {/* Appointment */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Appointment Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Date</span>
                  </div>
                  <p className="font-display text-lg">{date}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Time</span>
                  </div>
                  <p className="font-display text-lg">{time}</p>
                </div>
              </div>
            </div>

            {/* Treatment */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Treatment
              </h3>
              <div className="bg-secondary rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg">{treatment.name}</p>
                    <p className="text-sm text-muted-foreground">{treatment.duration}</p>
                  </div>
                  <p className="font-display text-xl text-primary">{treatment.price}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Confirmation Will Be Sent To
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="p-6 bg-primary/5 border-t border-primary/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              <div>
                <p className="font-medium text-foreground">Awaiting Clinic Confirmation</p>
                <p className="text-sm text-muted-foreground">
                  The clinic will review your request and respond soon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="elegant" size="lg" className="gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Info */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Need help? Contact us at support@kbeautyabroad.com</p>
        </div>
      </div>
    </main>
  );
};

export default Confirmation;
