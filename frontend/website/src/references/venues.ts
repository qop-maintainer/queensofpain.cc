import { z } from "zod/mini";

const Venue = z.readonly(
  z.array(
    z.object({
      lat: z.number(),
      lng: z.number(),
      label: z.string(),
      what3words: z.string(),
    }),
  ),
);

export const VENUES = Venue.parse([
  { lat: 55.940586, lng: -3.194966, label: "Meadows Pavilion Cafe", what3words: "///vanish.swept.clips" }, 
  { lat: 55.972954, lng: -3.165919, label: "Leith Links", what3words: "///pound.dent.cost" },
  { lat: 55.956218, lng: -3.187163, label: "St James Quarter", what3words: "///once.square.feared" },
  { lat: 55.964438, lng: -3.212842, label: "Botanics West Gate", what3words: "///sleep.orange.poet" },
  { lat: 55.953172, lng: -3.114957, label: "Portobello Town Hall", what3words: "///region.actor.mouth" },
  { lat: 55.942823, lng: -3.208068, label: "Lochrin Basin at Fountainbridge", what3words: "///soap.acute.focus" },
  { lat: 55.945653, lng: -3.189330, label: "Bristo Square", what3words: "///museum.spicy.horns" },
  { lat: 55.980932, lng: -3.195240, label: "Newhaven Fishmarket", what3words: "///chat.slate.report" },
]);

export type Venues = z.infer<typeof Venue>[number];
