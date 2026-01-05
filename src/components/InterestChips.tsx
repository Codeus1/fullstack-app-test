import React from "react";

const defaultInterests = [
  "anime",
  "gaming",
  "manga",
  "cosplay",
  "k-pop",
  "comics",
  "streaming",
  "art",
  "tech",
];

type InterestChipsProps = {
  selected: string[];
  onChange: (nextSelected: string[]) => void;
  interests?: string[];
};

export const InterestChips = ({
  selected,
  onChange,
  interests = defaultInterests,
}: InterestChipsProps) => {
  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      onChange(selected.filter((item) => item !== interest));
      return;
    }

    onChange([...selected, interest]);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {interests.map((interest) => {
        const isSelected = selected.includes(interest);

        return (
          <button
            key={interest}
            type="button"
            onClick={() => toggleInterest(interest)}
            style={{
              padding: "0.35rem 0.75rem",
              borderRadius: "999px",
              border: "1px solid",
              borderColor: isSelected ? "#3b82f6" : "#d1d5db",
              backgroundColor: isSelected ? "#dbeafe" : "#ffffff",
              color: "#111827",
              cursor: "pointer",
            }}
          >
            {interest}
          </button>
        );
      })}
    </div>
  );
};
