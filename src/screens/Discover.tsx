import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { ProfileCard } from "../components/ProfileCard";
import { mockProfiles, type Profile } from "../data/mockProfiles";
import { Pressable } from "react-native";

const BUTTONS = [
  { label: "Nope", color: "#EF4444", action: "left" as const },
  { label: "Superlike", color: "#38BDF8", action: "top" as const },
  { label: "Like", color: "#22C55E", action: "right" as const },
];

const Discover = () => {
  const swiperRef = useRef<Swiper<Profile>>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Descubre vibes</Text>
        <View style={styles.swiperWrapper}>
          <Swiper
            ref={swiperRef}
            cards={mockProfiles}
            renderCard={(card) => (card ? <ProfileCard profile={card} /> : null)}
            backgroundColor="transparent"
            stackSize={3}
            cardVerticalMargin={24}
            stackSeparation={18}
            animateCardOpacity
            disableBottomSwipe
            onSwiped={(index) => {
              const profile = mockProfiles[index];
              if (profile) {
                console.log(`Swiped on ${profile.name}`);
              }
            }}
            onSwipedAll={() => {
              console.log("No hay más perfiles");
            }}
            overlayLabels={{
              left: {
                title: "NOPE",
                style: { label: styles.overlayLabel, wrapper: styles.overlayWrapper },
              },
              right: {
                title: "LIKE",
                style: { label: styles.overlayLabel, wrapper: styles.overlayWrapper },
              },
              top: {
                title: "SUPERLIKE",
                style: { label: styles.overlayLabel, wrapper: styles.overlayWrapper },
              },
            }}
          />
        </View>
        <View style={styles.actions}>
          {BUTTONS.map((button) => (
            <Pressable
              key={button.label}
              style={[styles.actionButton, { borderColor: button.color }]}
              onPress={() => {
                if (!swiperRef.current) return;
                if (button.action === "left") {
                  swiperRef.current.swipeLeft();
                }
                if (button.action === "right") {
                  swiperRef.current.swipeRight();
                }
                if (button.action === "top") {
                  swiperRef.current.swipeTop();
                }
              }}
            >
              <Text style={[styles.actionLabel, { color: button.color }]}>
                {button.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B1220",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#F9FAFB",
    marginBottom: 12,
  },
  swiperWrapper: {
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: "#111827",
    alignItems: "center",
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: "700",
  },
  overlayWrapper: {
    position: "absolute",
    top: 24,
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  overlayLabel: {
    fontSize: 18,
    fontWeight: "800",
    color: "#F9FAFB",
  },
});

export default Discover;
