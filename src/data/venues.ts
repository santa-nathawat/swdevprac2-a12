export type Venue = {
  vid: string;
  venueName: string;
  imgSrc: string;
  description: string;
  location: string;
};

export const venues: Venue[] = [
  {
    vid: "001",
    venueName: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
    description: "A light-filled garden pavilion for celebrations, receptions, and memorable gatherings.",
    location: "Sukhumvit, Bangkok",
  },
  {
    vid: "002",
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
    description: "A flexible modern space for workshops, launches, and creative events.",
    location: "Ari, Bangkok",
  },
  {
    vid: "003",
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
    description: "An intimate dining venue with a warm atmosphere for special occasions.",
    location: "Silom, Bangkok",
  },
];

export const venueById = new Map(venues.map((venue) => [venue.vid, venue]));
