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
  { lat: 55.9406042, lng: -3.1949203, label: "Meadows Pavilion Cafe" },
  { lat: 55.9729468, lng: -3.1684968, label: "Leith Links" },
  { lat: 55.9563238, lng: -3.1874762, label: "St James Quarter" },
  { lat: 55.9644509, lng: -3.2152919, label: "Botanics West Gate" },
  { lat: 55.9530896, lng: -3.1152064, label: "Portobello Town Hall" },
  { lat: 55.9427654, lng: -3.2106826, label: "Lochrin Basin at Fountainbridge" },
  { lat: 55.9457176, lng: -3.1892556, label: "Bristo Square" },
  { lat: 55.9809949, lng: -3.1978104, label: "Newhaven Fishmarket" },
]);

export type Venues = z.infer<typeof Venue>[number];
