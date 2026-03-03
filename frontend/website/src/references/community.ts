import { z } from "zod/mini";

const Community = z.readonly(
  z.object({
    SHORT_NAME: z.string(),
    PURPOSE: z.string(),
    TAGLINE: z.string(),
    WEBSITE: z.url(),
    CONTACT: z.object({
      COMMUNITY: z.email(),
      MAINTAINER: z.email(),
      SECURITY: z.email(),
    }),
    SOCIALS: z.object({
      INSTAGRAM: z.url(),
    }),
    FOUNDING: z.string(),
  }),
);

export const COMMUNITY = Community.parse({
  SHORT_NAME: "Queens of Pain",
  PURPOSE:
    "Inclusive Edinburgh cycling community. Open to all women & non-binary folks. 7pm every Wed, ride for 1hr, go home happy. Repeat!.",
  TAGLINE: "All bodies, all abilities, all bikes. Just show up and ride.",
  WEBSITE: "https://queens-of-pain.cc",
  CONTACT: {
    COMMUNITY: "qop-community@gmail.com",
    MAINTAINER: "qop-maintainer@gmail.com",
    SECURITY: "qop-maintainer@gmail.com",
  },
  SOCIALS: {
    INSTAGRAM: "https://www.instagram.com/queens.of.pain.cc/",
  },
  FOUNDING: "2022",
});

export type Community = z.infer<typeof Community>;
