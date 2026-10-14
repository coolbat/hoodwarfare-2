export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

const credit = "Steam store screenshot. Trapstar Games.";

export const shots = {
  header: {
    src: "/media/header.jpg",
    alt: "Hood Warfare 2 key art with two armed players running under a streetlight in front of wooden houses.",
    width: 1600,
    height: 748,
    caption: `Store header used as the page image. ${credit}`,
  },
  blockNight: {
    src: "/media/block-night.jpg",
    alt: "First-person shotgun view on a night residential street, with a glowing red house marker on a brick house.",
    width: 1600,
    height: 900,
    caption: `Night street and a house marker. This page does not claim which mode that marker belongs to. ${credit}`,
  },
  downtown: {
    src: "/media/downtown-pistol.jpg",
    alt: "First-person view of a red and black pistol on a downtown street at dusk, with another player ahead.",
    width: 1600,
    height: 900,
    caption: `Downtown block at dusk. The store names downtown as one of the launch maps. ${credit}`,
  },
  stripMall: {
    src: "/media/strip-mall.jpg",
    alt: "A player in a red hoodie takes cover behind a blue pickup outside a strip mall.",
    width: 1600,
    height: 862,
    caption: `Strip-mall parking lot. Useful as a picture of the longer sightlines, not as a ranked position guide. ${credit}`,
  },
  squad: {
    src: "/media/block-squad.jpg",
    alt: "Three armed players hold a weedy residential block at night beside a glowing red house marker.",
    width: 1600,
    height: 862,
    caption: `A block with more than one player in frame. The private-lobby button labels are not in this shot. ${credit}`,
  },
  mall: {
    src: "/media/mall-floor.jpg",
    alt: "Players fight across a bright multi-level mall atrium with a jewelry store and an escalator.",
    width: 1600,
    height: 862,
    caption: `Chicago Mall interior from the store page. Routes and callouts are not marked. ${credit}`,
  },
  suppressor: {
    src: "/media/yard-suppressor.jpg",
    alt: "A player in a red durag aims a suppressed light-colored submachine gun from behind a blue hatchback.",
    width: 1600,
    height: 862,
    caption: `A suppressor is visible. The store lists suppressors as an attachment slot and does not name this gun. ${credit}`,
  },
  supermarket: {
    src: "/media/supermarket.jpg",
    alt: "First-person pistol view inside a supermarket, with cash piled on a wooden pallet.",
    width: 1600,
    height: 900,
    caption: `Interior retail floor. Patch 1.0.10 names Supermarket as a small map. The cash pile is not labeled as a mode objective. ${credit}`,
  },
  gold: {
    src: "/media/mall-gold.jpg",
    alt: "First-person view of a gold-colored rifle on an upper mall walkway, looking down at another player.",
    width: 1600,
    height: 900,
    caption: `A gold-colored gun in Chicago Mall. The store says kills unlock skins. This shot is not labeled with a skin name. ${credit}`,
  },
  scope: {
    src: "/media/lot-scope.jpg",
    alt: "A sniper scope looks across a parking lot toward a strip mall, a truck, and a blue pickup.",
    width: 1600,
    height: 900,
    caption: `A sight picture across a parking lot. The store lists sights as a slot and publishes no zoom or damage figures. ${credit}`,
  },
} as const satisfies Record<string, Shot>;
