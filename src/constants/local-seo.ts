export type ServiceArea = {
  district: string;
  city: string;
  slug: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  { district: "Balod", city: "Balod", slug: "balod" },
  { district: "Baloda Bazar-Bhatapara", city: "Baloda Bazar", slug: "baloda-bazar" },
  { district: "Balrampur-Ramanujganj", city: "Balrampur", slug: "balrampur" },
  { district: "Bastar", city: "Jagdalpur", slug: "jagdalpur" },
  { district: "Bemetara", city: "Bemetara", slug: "bemetara" },
  { district: "Bijapur", city: "Bijapur", slug: "bijapur" },
  { district: "Bilaspur", city: "Bilaspur", slug: "bilaspur" },
  { district: "Dantewada", city: "Dantewada", slug: "dantewada" },
  { district: "Dhamtari", city: "Dhamtari", slug: "dhamtari" },
  { district: "Durg", city: "Durg", slug: "durg" },
  { district: "Gariaband", city: "Gariaband", slug: "gariaband" },
  { district: "Gaurela-Pendra-Marwahi", city: "Gaurela", slug: "gaurela" },
  { district: "Janjgir-Champa", city: "Janjgir", slug: "janjgir" },
  { district: "Jashpur", city: "Jashpur Nagar", slug: "jashpur-nagar" },
  { district: "Kabirdham", city: "Kawardha", slug: "kawardha" },
  { district: "Kanker", city: "Kanker", slug: "kanker" },
  { district: "Khairagarh-Chhuikhadan-Gandai", city: "Khairagarh", slug: "khairagarh" },
  { district: "Kondagaon", city: "Kondagaon", slug: "kondagaon" },
  { district: "Korba", city: "Korba", slug: "korba" },
  { district: "Koriya", city: "Baikunthpur", slug: "baikunthpur" },
  { district: "Mahasamund", city: "Mahasamund", slug: "mahasamund" },
  { district: "Manendragarh-Chirmiri-Bharatpur", city: "Manendragarh", slug: "manendragarh" },
  { district: "Mohla-Manpur-Ambagarh Chowki", city: "Mohla", slug: "mohla" },
  { district: "Mungeli", city: "Mungeli", slug: "mungeli" },
  { district: "Narayanpur", city: "Narayanpur", slug: "narayanpur" },
  { district: "Raigarh", city: "Raigarh", slug: "raigarh" },
  { district: "Raipur", city: "Raipur", slug: "raipur" },
  { district: "Rajnandgaon", city: "Rajnandgaon", slug: "rajnandgaon" },
  { district: "Sakti", city: "Sakti", slug: "sakti" },
  { district: "Sarangarh-Bilaigarh", city: "Sarangarh", slug: "sarangarh" },
  { district: "Sukma", city: "Sukma", slug: "sukma" },
  { district: "Surajpur", city: "Surajpur", slug: "surajpur" },
  { district: "Surguja", city: "Ambikapur", slug: "ambikapur" },
];

export function getServiceAreaBySlug(slug: string) {
  return SERVICE_AREAS.find((area) => area.slug === slug);
}
