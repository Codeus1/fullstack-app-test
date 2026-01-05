import React from "react";

import { useProfileStore } from "../store/profile";

export const Onboarding = () => {
  const { name, age, city, bio, intentionHaveFun, updateProfile } = useProfileStore();

  return (
    <section style={{ maxWidth: "520px", margin: "0 auto" }}>
      <h1>Cuéntanos sobre ti</h1>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Nombre
        <input
          value={name}
          onChange={(event) => updateProfile({ name: event.target.value })}
          placeholder="Tu nombre"
          style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Edad
        <input
          value={age}
          onChange={(event) => updateProfile({ age: event.target.value })}
          placeholder="Tu edad"
          type="number"
          min={18}
          style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Ciudad
        <input
          value={city}
          onChange={(event) => updateProfile({ city: event.target.value })}
          placeholder="¿Dónde vives?"
          style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
        />
      </label>
      <label style={{ display: "block", marginBottom: "1rem" }}>
        Bio corta
        <textarea
          value={bio}
          onChange={(event) => updateProfile({ bio: event.target.value })}
          placeholder="Algo breve sobre ti"
          rows={3}
          style={{ display: "block", width: "100%", marginTop: "0.5rem" }}
        />
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="checkbox"
          checked={intentionHaveFun}
          onChange={(event) => updateProfile({ intentionHaveFun: event.target.checked })}
        />
        Intención: pasarlo bien
      </label>
    </section>
  );
};
