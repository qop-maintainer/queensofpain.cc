import { z } from "zod/mini";

const Menu = z.readonly(
  z.array(
    z.object({
      href: z.string(),
      label: z.string(),
    }),
  ),
);

export const MENU_ITEMS = Menu.parse([
  { href: "/about/", label: "About" },
  { href: "/rides/", label: "Rides" },
  { href: "/locations/", label: "Locations" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/faqs/", label: "FAQs" },
]);

export type MenuItem = z.infer<typeof Menu>[number];
