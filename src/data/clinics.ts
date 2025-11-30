export interface Clinic {
  id: string;
  name: string;
  nameKorean: string;
  location: string;
  district: string;
  image: string;
  specialties: string[];
  rating: number;
  description: string;
  treatments: Treatment[];
  availableSlots: TimeSlot[];
}

export interface Treatment {
  id: string;
  name: string;
  category: 'skin' | 'injection' | 'laser' | 'consultation';
  duration: string;
  price: string;
  description: string;
}

export interface TimeSlot {
  date: string;
  times: string[];
}

export const clinics: Clinic[] = [
  {
    id: "derma-seoul",
    name: "Derma Seoul Clinic",
    nameKorean: "더마 서울 클리닉",
    location: "Gangnam-gu, Seoul",
    district: "Gangnam",
    image: "/clinic-1.jpg",
    specialties: ["Skin Rejuvenation", "Anti-Aging", "Laser Treatment"],
    rating: 4.9,
    description: "A premium aesthetic clinic specializing in advanced skin treatments and non-invasive procedures. Our board-certified dermatologists use the latest technology to deliver natural, beautiful results.",
    treatments: [
      { id: "t1", name: "Hydra Facial Premium", category: "skin", duration: "60 min", price: "₩180,000", description: "Deep cleansing and hydration treatment" },
      { id: "t2", name: "Botox - Forehead", category: "injection", duration: "30 min", price: "₩250,000", description: "Premium botulinum toxin for wrinkle reduction" },
      { id: "t3", name: "Pico Laser Toning", category: "laser", duration: "45 min", price: "₩200,000", description: "Advanced laser for skin brightening and texture" },
      { id: "t4", name: "Skin Consultation", category: "consultation", duration: "20 min", price: "₩50,000", description: "Comprehensive skin analysis and treatment plan" },
    ],
    availableSlots: [
      { date: "2024-12-02", times: ["10:00", "11:00", "14:00", "15:30", "16:00"] },
      { date: "2024-12-03", times: ["09:30", "10:30", "13:00", "14:30", "17:00"] },
      { date: "2024-12-04", times: ["10:00", "11:30", "14:00", "16:30"] },
      { date: "2024-12-05", times: ["09:00", "10:00", "13:30", "15:00", "16:00"] },
    ],
  },
  {
    id: "glow-beauty",
    name: "Glow Beauty Medical",
    nameKorean: "글로우 뷰티 메디컬",
    location: "Sinsa-dong, Seoul",
    district: "Sinsa",
    image: "/clinic-2.jpg",
    specialties: ["Filler", "Thread Lifting", "Skin Boosters"],
    rating: 4.8,
    description: "Renowned for natural-looking injectable treatments and facial contouring. Our experienced practitioners focus on enhancing your natural beauty with minimal downtime.",
    treatments: [
      { id: "t5", name: "Dermal Filler - Lips", category: "injection", duration: "30 min", price: "₩350,000", description: "Natural lip enhancement with premium filler" },
      { id: "t6", name: "Skin Booster Injection", category: "injection", duration: "45 min", price: "₩280,000", description: "Hyaluronic acid for deep skin hydration" },
      { id: "t7", name: "V-Line Thread Lift", category: "injection", duration: "60 min", price: "₩800,000", description: "Non-surgical facial contouring" },
      { id: "t8", name: "Beauty Consultation", category: "consultation", duration: "30 min", price: "Free", description: "Personalized treatment recommendations" },
    ],
    availableSlots: [
      { date: "2024-12-02", times: ["11:00", "13:00", "15:00", "17:00"] },
      { date: "2024-12-03", times: ["10:00", "12:00", "14:00", "16:00"] },
      { date: "2024-12-04", times: ["09:30", "11:30", "14:30", "16:30"] },
    ],
  },
  {
    id: "aura-skin",
    name: "Aura Skin Institute",
    nameKorean: "아우라 스킨 인스티튜트",
    location: "Cheongdam-dong, Seoul",
    district: "Cheongdam",
    image: "/clinic-3.jpg",
    specialties: ["Medical Peeling", "LED Therapy", "Acne Treatment"],
    rating: 4.7,
    description: "A state-of-the-art facility dedicated to solving complex skin concerns. We combine Korean medical expertise with cutting-edge technology for transformative results.",
    treatments: [
      { id: "t9", name: "Chemical Peel Premium", category: "skin", duration: "45 min", price: "₩150,000", description: "Medical-grade exfoliation for renewed skin" },
      { id: "t10", name: "LED Light Therapy", category: "skin", duration: "30 min", price: "₩80,000", description: "Collagen stimulation and skin healing" },
      { id: "t11", name: "Acne Laser Treatment", category: "laser", duration: "40 min", price: "₩220,000", description: "Targeted treatment for active acne" },
      { id: "t12", name: "Scar Revision Laser", category: "laser", duration: "50 min", price: "₩300,000", description: "Advanced laser for acne scar improvement" },
    ],
    availableSlots: [
      { date: "2024-12-02", times: ["10:30", "12:00", "14:00", "15:30"] },
      { date: "2024-12-03", times: ["09:00", "11:00", "13:30", "16:00"] },
      { date: "2024-12-05", times: ["10:00", "13:00", "15:00", "17:30"] },
    ],
  },
];

export const getCategoryLabel = (category: Treatment['category']) => {
  const labels = {
    skin: 'Skin Care',
    injection: 'Injection',
    laser: 'Laser',
    consultation: 'Consultation',
  };
  return labels[category];
};

export const getCategoryColor = (category: Treatment['category']) => {
  const colors = {
    skin: 'bg-cream-200 text-foreground',
    injection: 'bg-gold-100 text-gold-600',
    laser: 'bg-surgical-50 text-surgical-600',
    consultation: 'bg-secondary text-muted-foreground',
  };
  return colors[category];
};
