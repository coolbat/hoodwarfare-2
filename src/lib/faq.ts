export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What is Hood Warfare 2?",
    answer:
      "Hood Warfare 2 is a multiplayer first-person shooter from Trapstar Games, released on Steam for Windows on 8 October 2026. The store app id is 5155360. Rival gangs fight over a fictional Chicago. Searching hoodwarfare2 leads to the same game.",
  },
  {
    question: "Is Hood Warfare 2 on PS5, Xbox, Mac, or mobile?",
    answer:
      "The Steam store page lists Windows only. Mac and Linux are off. No PlayStation, Xbox, or phone build is listed there. A controller is supported on PC. This site does not publish a console page that only says unconfirmed.",
  },
  {
    question: "How do you play Hood Warfare 2 with friends?",
    answer:
      "Patch 1.0.1.4, posted 14 October 2026, added a password-only private lobby. Both players need build 1.0.1.4 in the bottom-right of the main menu. The developer did not name the button, so the friend checklist says that instead of inventing a click path.",
  },
  {
    question: "Why is there no sound in Hood Warfare 2?",
    answer:
      "If the guns and menu are silent, patch 1.0.1.4 says to open settings and select an audio output device. If you can hear the game but voice chat is dead, that is a different fix: voice chat came in patch 1.0.10, with push-to-talk on T by default.",
  },
  {
    question: "Why does Hood Warfare 2 kick me?",
    answer:
      "Patch 1.0.1.4 says false anti-cheat kicks were fixed. Update until the menu shows 1.0.1.4. The Steam page lists Easy Anti-Cheat. A ban review from the report button added in patch 1.0.10 is a separate system. This site cannot see your account.",
  },
  {
    question: "How do Hood Warfare 2 weapons, attachments, and skins unlock?",
    answer:
      "The store describes three tracks. Playing matches and leveling reputation unlocks weapons and equipment. Weapon challenges unlock attachments. Kills with a gun unlock its skins. Account level does not finish all three.",
  },
  {
    question: "Can you play Hood Warfare 2 against bots?",
    answer:
      "Yes. The store says you can set up a match against bots, choose the map, mode, and match settings, and add bots to fill the teams. It does not say bot matches grant every unlock. Check the progress in game.",
  },
  {
    question: "How much does Hood Warfare 2 cost?",
    answer:
      "On 14 October 2026 the US Steam price was $5.99, shown at $5.39 with a 10 percent discount. Regional prices and sales change. Confirm the live price on Steam before you pay.",
  },
  {
    question: "Does the player count mean I can find a public lobby?",
    answer:
      "No. Steam’s player number counts people running the app, not open rooms or free slots. A read of that API while this guide was written returned 2,948 players at 14:42 UTC on 14 October 2026. The number goes stale immediately. For friends, use the password lobby.",
  },
  {
    question: "Is hoodwarfare-2.com the official Hood Warfare 2 site?",
    answer:
      "No. Trapstar Games develops and publishes the game. This is an unofficial fan guide. Buy the game on Steam. Do not send this site your Steam password.",
  },
];

export function faqLd(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
