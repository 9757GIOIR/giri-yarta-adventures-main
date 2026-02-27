export type TourPackage = {
  id: string;
  name: string;
  price: string;
  duration: string;
  stay: string;
  idealFor: string;
  highlights: string[];
};

export type Tour = {
  id: number;
  title: string;
  destination: string;
  subDestinations?: string[];
  date: string;
  duration: string;
  price: string;
  spots: number;
  busType?: string;
  tag: string;
  isMaharashtra?: boolean;
  overview: string;
  packages: TourPackage[];
};

export const tours: Tour[] = [
  {
    id: 1,
    title: "Haridwar - Rishikesh - Kedarnath - Badrinath",
    destination: "Balaji - Rameshwaram - Kanyakumari",
    date: "Starts: 15/03/2026",
    duration: "15 Days",
    price: "20,000",
    spots: 40,
    busType: "AC sleeper coach",
    tag: "Pilgrimage Special",
    overview:
      "15-day devotional pilgrimage tour covering Balaji, Rameshwaram, and Kanyakumari. Advance amount is Rs.10,000.",
    packages: [
      {
        id: "luxury-bus",
        name: "2x2 Pushback Luxury Bus",
        price: "1,80,000",
        duration: "15 Days",
        stay: "Luxury bus travel package",
        idealFor: "Group travel booking",
        highlights: [
          "Full package fare: Rs.1,80,000",
          "Tour start date: 15/03/2026",
          "Advance amount: Rs.10,000",
        ],
      },
      {
        id: "ac-sleeper",
        name: "AC Sleeper Coach",
        price: "20,000",
        duration: "15 Days",
        stay: "AC sleeper coach travel package",
        idealFor: "Per person pilgrimage seat",
        highlights: [
          "Per person fare: Rs.20,000",
          "Tour start date: 15/03/2026",
          "Advance amount: Rs.10,000",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Haridwar - Rishikesh - Kedarnath - Badrinath",
    destination: "Haridwar - Rishikesh - Kedarnath - Badrinath",
    date: "Starts: 22/04/2026",
    duration: "10 Days",
    price: "24,500",
    spots: 28,
    tag: "Family Choice",
    overview:
      "Divine Himalayan route with temple darshan and scenic mountain travel.",
    packages: [
      {
        id: "standard",
        name: "Comfort Yatra",
        price: "24,500",
        duration: "10 Days",
        stay: "Comfort hotels and dharamshalas",
        idealFor: "Family pilgrimage",
        highlights: [
          "Haridwar and Rishikesh darshan",
          "Kedarnath and Badrinath route support",
          "Meal plan and coordination",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Kashi To Pashupatinath",
    destination: "Kashi - Gokul - Vrundavan - Nepal",
    date: "Starts: 05/05/2026",
    duration: "9 Days",
    price: "19,900",
    spots: 30,
    tag: "New Package",
    overview:
      "A spiritual circuit connecting Kashi, Vrundavan, and Pashupatinath.",
    packages: [
      {
        id: "standard",
        name: "Devotional Circuit",
        price: "19,900",
        duration: "9 Days",
        stay: "Standard hotel package",
        idealFor: "Devotional group travel",
        highlights: [
          "Kashi Vishwanath darshan",
          "Mathura and Vrundavan visits",
          "Pashupatinath temple darshan",
        ],
      },
    ],
  },
];
