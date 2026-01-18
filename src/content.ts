export type RoleCard = {
  title: string;
  imageUrl: string;
  alt: string;
};

export type StoryContent = {
  title: string;
  paragraphs: string[];
};

export type SiteContent = {
  siteTitle: string;
  tagline: string;
  cta: {
    label: string;
    href: string;
  };
  logoUrl: string;
  backgroundUrl: string;
  roles: RoleCard[];
  story: StoryContent;
};

export const content: SiteContent = {
  siteTitle: "DJ DR. BEACH",
  tagline: "Emergency! Paging Dr. Beach! Emergency Doctor!",
  cta: {
    label: "Tune in! Click here for latest release!",
    href: "https://artists.landr.com/dr-beach",
  },
  logoUrl:
    "https://dj-dr-beach.weebly.com/uploads/2/0/4/5/20451859/logo-1500x1500-tranz_orig.png",
  backgroundUrl:
    "https://dj-dr-beach.weebly.com/uploads/2/0/4/5/20451859/background-images/1836985025.jpeg",
  roles: [
    {
      title: "Mathematician",
      imageUrl:
        "https://dj-dr-beach.weebly.com/uploads/2/0/4/5/20451859/published/p33.jpeg?1700729289",
      alt: "Portrait representing a mathematician",
    },
    {
      title: "Consultian",
      imageUrl: "https://dj-dr-beach.weebly.com/uploads/2/0/4/5/20451859/p32_orig.jpeg",
      alt: "Portrait representing a consultant",
    },
    {
      title: "Musician",
      imageUrl:
        "https://dj-dr-beach.weebly.com/uploads/2/0/4/5/20451859/published/p31.jpeg?1700729295",
      alt: "Portrait representing a musician",
    },
  ],
  story: {
    title: "From Math to Music: The Harmonious Journey of Dr. Beach",
    paragraphs: [
      "Hailing from the vibrant city of Hamburg, Germany, and basking in the serene coastal beauty of the Algarve, Portugal, the enigmatic artist known as Dr. Beach seamlessly bridges the realms of mathematics, management consulting, and music production. Dr. Beach holds a prestigious Ph.D. degree in mathematics, which laid the foundation for his remarkable journey into the world of music.",
      "Dr. Beach's musical odyssey began as a whisper in the depths of his soul, a passion that had long simmered beneath the surface of his career as a successful management consultant. But when the time was right, he boldly embarked on a second career, unleashing his profound talent and boundless creativity as a music producer.",
      "At the heart of Dr. Beach's artistic vision lies a deep-rooted love for music that has been nurtured for years. His unique blend of soothing and entrancing melodies gives birth to captivating, chill-house compositions that transport listeners to a realm of pure relaxation and euphoria. It's as if he's harnessed the precision of mathematics and fused it with the soulful rhythms of life to create music that resonates with the heart and mind.",
      "Dr. Beach's debut album, \"Caneiros,\" is a testament to his passion for music and his deep connection to the Algarve's breathtaking beauty. Inspired by the tranquil shores of a pristine beach, \"Caneiros\" captures the essence of that idyllic place - a small beachfront bar, mesmerizing sunsets, flawless weather, powdery sand underfoot, and crystal-clear blue waters stretching to the horizon. Through each track, Dr. Beach invites his audience to experience the essence of this coastal paradise, offering an auditory escape that is nothing short of sublime.",
      "His music embodies the very spirit of the Algarve - a place where time slows down, worries fade away, and all that remains is the harmony of the moment. It's a reflection of Dr. Beach's own dual life, oscillating between the bustling cityscape of Hamburg and the tranquil retreat of the Algarve, where he finds the inspiration to craft his sonic masterpieces.",
      "Dr. Beach's journey is a testament to the limitless potential that comes with following one's passion, even if it means stepping out of a successful career to pursue a dream. His unique blend of mathematical precision, artistic vision, and boundless creativity has gifted the world with a musical experience like no other.",
      "So, close your eyes, press play, and allow Dr. Beach's music to wash over you like the gentle ebb and flow of the tide, carrying you away to the sun-kissed shores of his musical paradise.",
    ],
  },
};
