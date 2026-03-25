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
      title: "Consultician",
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
      `For centuries it’s been known that there’s a connection between mathematical and musical talent. Albert Einstein used music to help him process complex scientific problems, and William Herschel was both a renowned astronomer, mathematician and a professional composer. Following in their footsteps, meet Dr. Beach, whose life journey has taken him from a PhD in mathematics to becoming an EDM producer and artist. As he puts it: “I’m a mathematician, consultician and musician.”`,
      `Hailing from Hamburg, Germany, Dr. Beach grew up on an eclectic musical diet starting with early 80s pioneers such as Kraftwerk, Simple Minds, New Order, Madness and Anne Clark. His love of electronic music kept growing with the years as he discovered Moby and Faithless in the 90s and added Diplo, Calvin Harris and Disclosure to his sonic palette in the 21st century.`,
      `“Music was always my passion - but from my social background, it was an unthinkable option to actively engage with,” he says. “So I decided on the classic career path and studied something really serious: mathematics. This subject has to do with structures, relationships, and it requires good problem-solving skills. You see a lot of parallels to music, but music has much more emotion – and most people can digest the end result much better.”`,
      `Dr. Beach spent decades as a top management consultant and chief executive, leading innovation and helping companies become digital. His path even crossed the music industry at times, as he helped drive the music industry into the digital ecosystems via music recognition, digital distribution, ringtones and music downloading services.`,
      `“Life is a journey,” says Dr. Beach, and after years of building a successful career, he decided to take a left turn and finally follow his passion for music.`,
      `He did not just leave his career behind, but all that reminded him of the business world, including laptops, which is why his debut album, “Caneiros”, was completely produced on an iPad. Looking back, he says, he sees it more as a “proof-of-work” for himself, and that what followed is his first “real” album.`,
      `He had realised that the setup he used to create “Caneiros” was not powerful enough to execute his musical vision, so he migrated to his son’s old MacBook. “(These days) the only limit is your own creativity and no longer the access to money, studios and labels,” says Dr. Beach.`,
      `By now he was splitting his time between Algarve, Portugal, and Hamburg, Germany. Both places provided him ample access to beautiful beaches, which did not just inspire his name, but also the sound of his music, which straddles Iberian beats and ambient and progressive house – in other words, it would make a perfect soundtrack to an Ibiza sunset session that turns into a full-on party.`,
      `His second album, “Övelgönne”, is named after one of his favourite beaches, close to his Hamburg home, and is a perfect progression from the first album – a powerful, euphoric and a bit mystical collection of songs with uplifting, life-affirming themes. It channels artists who have accompanied him throughout his life’s journey, such as Moby and Faithless, and has a sound that feels both timeless and of the moment.`,
      `“All the music is completely made by myself on my laptop at home. No AI involved. And I am still surprised about what can be done with enough passion and creativity,” he says.`,
      `“I have already lost some good friends of mine, and I want to share the joy of life with people around the world. The songs basically say ‘Life is beautiful, enjoy every day!’”`,
    ],
  },
};
