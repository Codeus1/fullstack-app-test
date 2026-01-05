export type Profile = {
  id: string;
  name: string;
  age: number;
  avatar: string;
  interests: string[];
  vibe: "spicy" | "para pasarlo bien";
};

export const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Mika",
    age: 24,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    interests: ["anime", "cosplay", "gacha"],
    vibe: "spicy",
  },
  {
    id: "2",
    name: "Leo",
    age: 27,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    interests: ["gaming", "MMORPG", "streaming"],
    vibe: "para pasarlo bien",
  },
  {
    id: "3",
    name: "Sora",
    age: 22,
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    interests: ["manga", "isekai", "fanart"],
    vibe: "spicy",
  },
  {
    id: "4",
    name: "Nina",
    age: 25,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    interests: ["JRPG", "anime", "retro games"],
    vibe: "para pasarlo bien",
  },
];
