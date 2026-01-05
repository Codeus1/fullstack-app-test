import React from "react";

import { InterestChips } from "../components/InterestChips";
import { useProfileStore } from "../store/profile";

const interestOptions = [
  "anime",
  "gaming",
  "manga",
  "cosplay",
  "k-pop",
  "comics",
  "streaming",
  "art",
  "tech",
  "boardgames",
];

export const Profile = () => {
  const { interests, setInterests } = useProfileStore();

  return (
    <section style={{ maxWidth: "640px", margin: "0 auto" }}>
      <h1>Perfil</h1>
      <p>Selecciona tus intereses para que podamos recomendarte planes.</p>
      <InterestChips
        selected={interests}
        onChange={setInterests}
        interests={interestOptions}
      />
    </section>
  );
};
