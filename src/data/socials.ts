import {
  facebookIcon,
  githubIcon,
  linkedinIcon,
  whatsappIcon,
} from "@/asserts/icons/Icons";
import { TElement } from "@/helpers/types";
import { profile } from "./profile";

export type Social = {
  name: string;
  href: string;
  icon: TElement;
};

const whatsappMessage = encodeURIComponent(
  "Hello Alif, I'm interested in your backend development services."
);

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/HasanAlif",
    icon: githubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mehedihasanalif",
    icon: linkedinIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/almehedihasan.alif.54",
    icon: facebookIcon,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}?text=${whatsappMessage}`,
    icon: whatsappIcon,
  },
];
