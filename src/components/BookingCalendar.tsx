import { useState } from "react";
import { TimeSlot } from "@/data/clinics";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BookingCalendarProps {
  availableSlots: TimeSlot[];
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

export const BookingCalendar = ({
  availableSlots,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: BookingCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 11, 1)); // December 2024

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const availableDates = availableSlots.map(slot => slot.date);

  const isDateAvailable = (day: number) => {
    const dateString = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return availableDates.includes(dateString);
  };

  const formatDateString = (day: number) => {
    return `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const selectedSlot = availableSlots.find(slot => slot.date === selectedDate);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <h3 className="font-display text-xl">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs text-muted-foreground font-medium py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const dateString = formatDateString(day);
          const isAvailable = isDateAvailable(day);
          const isSelected = selectedDate === dateString;

          return (
            <button
              key={day}
              disabled={!isAvailable}
              onClick={() => isAvailable && onSelectDate(dateString)}
              className={cn(
                "aspect-square rounded-lg text-sm font-medium transition-all duration-200",
                isAvailable
                  ? isSelected
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-secondary hover:bg-primary/10 text-foreground"
                  : "text-muted-foreground/30 cursor-not-allowed"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Time Slots */}
      {selectedDate && selectedSlot && (
        <div className="animate-fade-in">
          <h4 className="font-display text-lg mb-3">Available Times</h4>
          <div className="grid grid-cols-4 gap-2">
            {selectedSlot.times.map(time => (
              <button
                key={time}
                onClick={() => onSelectTime(time)}
                className={cn(
                  "py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200",
                  selectedTime === time
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-secondary hover:bg-primary/10 text-foreground"
                )}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
