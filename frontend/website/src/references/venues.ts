import { z } from "zod/mini";

const Venue = z.readonly(
  z.array(
    z.object({
      lat: z.number(),
      lng: z.number(),
      label: z.string(),
    }),
  ),
);

export const VENUES = Venue.parse([
  { lat: 55.9644953, lng: -3.2149189, label: "Botanics West Gate" },
  { lat: 55.9455572, lng: -3.1937966, label: "Bristo Square" },
  { lat: 55.9435164, lng: -3.2184992, label: "Fountainbridge" },
  { lat: 55.9553898, lng: -3.1923276, label: "John Lewis" },
  { lat: 55.9815837, lng: -3.1974861, label: "Newhaven Fishmarket" },
]);

export type Venues = z.infer<typeof Venue>[number];
