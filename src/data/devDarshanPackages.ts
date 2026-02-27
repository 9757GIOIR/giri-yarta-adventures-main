export type DevDarshanPackage = {
  id: string;
  title: string;
  route: string;
  duration: string;
  startDate: string;
  price: string;
  badge: string;
  cardClass: string;
  to: string;
};

export const devDarshanPackages: DevDarshanPackage[] = [
  {
    id: "jyotirlinga-special",
    title: "Balaji - Rameshwaram - Kanyakumari",
    route: "Balaji - Rameshwaram - Kanyakumari",
    duration: "Travel Days: 15",
    startDate: "15/03/2026",
    price: "20,000",
    badge: "Most Popular",
    cardClass: "from-red-500 to-orange-400 border-red-700",
    to: "/tours/dev-darshan-maha-yatra",
  },
  {
    id: "north-divine",
    title: "Haridwar - Rishikesh - Kedarnath - Badrinath",
    route: "Haridwar - Rishikesh - Kedarnath - Badrinath",
    duration: "Travel Days: 10",
    startDate: "22/04/2026",
    price: "24,500",
    badge: "Family Choice",
    cardClass: "from-blue-500 to-cyan-400 border-blue-700",
    to: "/tours/1",
  },
  {
    id: "ma-narmada-parikrama",
    title: "Ma Narmada Parikrama-Ek Dham Dwaraka Tour",
    route: "Maharashtra - Madhya Pradesh - Gujarat",
    duration: "Travel Days: 9",
    startDate: "05/05/2026",
    price: "19,900",
    badge: "New Package",
    cardClass: "from-emerald-500 to-lime-400 border-emerald-700",
    to: "/tours/ma-narmada-parikrama",
  },
  {
    id: "kashi-nepal",
    title: "Kashi To Pashupatinath",
    route: "Kashi - Gokul - Vrundavan - Nepal",
    duration: "Travel Days: 9",
    startDate: "05/05/2026",
    price: "19,900",
    badge: "New Package",
    cardClass: "from-emerald-500 to-lime-400 border-emerald-700",
    to: "/tours/1",
  },
];
