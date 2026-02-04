export interface Store {
  id: string;
  name: string;
  address: string;
  image: string;
  hours: string;
}

export interface Bike {
  id: string;
  name: string;
  series: string;
}

export const stores: Store[] = [
  // {
  //   id: "phnom-penh",
  //   name: "Grood Phnom Penh Flagship",
  //   address: "123 Norodom Blvd, Phnom Penh",
  //   image:
  //     "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
  //   hours: "9:00 AM - 7:00 PM",
  // },
  {
    id: "siem-reap",
    name: "Grood Siem Reap",
    address: "456 Pub Street, Siem Reap",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    hours: "8:00 AM - 8:00 PM",
  },
];

export const bikes: Bike[] = [
  {
    id: "s1",
    name: "Grood Siem Reap",
    series: "Sport Series",
  },
  {
    id: "c1",
    name: "Grood Cargo",
    series: "City Series",
  },
  {
    id: "cdd1",
    name: "Grood Cargo Doek Doek",
    series: "Cargo Series",
  },
];

export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];
