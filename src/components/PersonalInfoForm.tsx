import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface PersonalInfo {
  fullName: string;
  gender: string;
  passportNumber: string;
  phone: string;
  email: string;
  country: string;
}

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Japan",
  "China", "Singapore", "Thailand", "Vietnam", "Indonesia",
  "Philippines", "Malaysia", "Germany", "France", "Netherlands",
  "Other"
];

export const PersonalInfoForm = ({ data, onChange }: PersonalInfoFormProps) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium">Full Name (as on passport)</Label>
        <Input
          id="fullName"
          placeholder="Enter your full name"
          value={data.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender" className="text-sm font-medium">Gender</Label>
        <Select value={data.gender} onValueChange={(value) => handleChange("gender", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="passportNumber" className="text-sm font-medium">Passport Number</Label>
        <Input
          id="passportNumber"
          placeholder="Enter passport number"
          value={data.passportNumber}
          onChange={(e) => handleChange("passportNumber", e.target.value)}
        />
        <p className="text-xs text-muted-foreground">Required for identity verification at the clinic</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 234 567 8900"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country" className="text-sm font-medium">Country of Origin</Label>
        <Select value={data.country} onValueChange={(value) => handleChange("country", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
