export type SourceKind = "developer" | "steam" | "steam-client" | "unverified";

export type GuideStep = {
  id: string;
  title: string;
  check: string;
  where: string;
  next: string;
  source: SourceKind;
  sourceNote: string;
};

export type GuideLane = {
  id: string;
  label: string;
  query: string;
  lede: string;
  steps: GuideStep[];
};

export const sourceLabel: Record<SourceKind, string> = {
  developer: "Developer post",
  steam: "Steam store",
  "steam-client": "Steam client",
  unverified: "Not confirmed in-game",
};

const versionStep: GuideStep = {
  id: "version",
  title: "Both players are on 1.0.1.4",
  check: "The main menu shows 1.0.1.4 in the bottom-right corner, on the host and on the joining PC.",
  where: "Main menu, bottom right. That placement is the developer’s own instruction for patch 1.0.1.4.",
  next: "If either menu shows an older number, or no number, stop and update before anyone shares a password.",
  source: "developer",
  sourceNote: "Patch 1.0.1.4 post, 14 October 2026, 01:03 UTC.",
};

const quitSteamStep: GuideStep = {
  id: "exit-steam",
  title: "Quit Steam completely if the build is old",
  check: "Steam was closed from its own menu, then opened again, then Hood Warfare 2 was launched.",
  where: "Top left of the Steam window: Steam, then Exit Steam. The developer named that path, not a dock or tray shortcut.",
  next: "Read the bottom-right version again. Do not treat a still-open Steam client as updated.",
  source: "developer",
  sourceNote: "Same 1.0.1.4 post. Trapstar signed it Trap$tar.",
};

const createLobbyStep: GuideStep = {
  id: "create-lobby",
  title: "Host a password-only private lobby",
  check: "The host has a private lobby that requires a password, on build 1.0.1.4.",
  where: "The patch says private matches are in the game. It does not name the button. Look in match setup for a private or password lobby. If your labels differ, this click path is unverified.",
  next: "Set a password you can read aloud. Avoid 0 and O, and 1 and l.",
  source: "unverified",
  sourceNote: "The lobby’s existence is from the developer. The menu labels are not.",
};

const sharePasswordStep: GuideStep = {
  id: "share-password",
  title: "Send the password outside the game",
  check: "The joining player has the exact password.",
  where: "A text, a call, or a Discord message. The patch does not describe an in-game invite button.",
  next: "The joiner uses the password field. A pre-patch guide that only says to click a public lobby is the wrong path for this update.",
  source: "unverified",
  sourceNote: "Password lobbies are confirmed. An invite button is not.",
};

export const friendLanes: GuideLane[] = [
  {
    id: "host",
    label: "I’m hosting",
    query: "private match",
    lede: "You are creating the Hood Warfare 2 private match. Finish the version check before you hunt for a button.",
    steps: [
      versionStep,
      quitSteamStep,
      createLobbyStep,
      sharePasswordStep,
      {
        id: "confirm-join",
        title: "Wait until the friend is actually in",
        check: "The second player is in the lobby with you, not just “trying to join.”",
        where: "The password lobby on the same build.",
        next: "If they cannot see a room, the join errors, they get kicked, or the audio dies, switch lanes. Repeating “create lobby” does not answer those.",
        source: "unverified",
        sourceNote: "Lane routing is this site’s checklist, tied to the fixes named in the patch.",
      },
    ],
  },
  {
    id: "join",
    label: "I’m joining",
    query: "invite friends",
    lede: "You are entering someone else’s password lobby. Match their build first, then the password.",
    steps: [
      versionStep,
      quitSteamStep,
      {
        id: "get-password",
        title: "Get the password from the host",
        check: "You have a password the host just set on 1.0.1.4, not a room code from an older afternoon.",
        where: "Ask them directly. This site has not confirmed an in-game invite.",
        next: "Enter that password in the private-lobby join. Do not scroll a public list and assume their room is posted there.",
        source: "unverified",
        sourceNote: "The developer said the lobby is password only. They did not say it appears in a public browser.",
      },
      {
        id: "same-build",
        title: "Join on the same build",
        check: "Your menu and the host’s menu both read 1.0.1.4.",
        where: "Bottom right of each main menu.",
        next: "If the join fails, you get kicked, or you load into silence, open the matching fix lane.",
        source: "developer",
        sourceNote: "Version placement is from the patch. The join result still has to be checked live.",
      },
    ],
  },
  {
    id: "hidden",
    label: "I can’t see the room",
    query: "can't see lobby",
    lede: "A missing room is not automatically a dead server. Private and public are different questions on this patch.",
    steps: [
      versionStep,
      {
        id: "host-confirmed",
        title: "Confirm the host finished creating it",
        check: "The host says the password lobby is up on 1.0.1.4, and reads the password again.",
        where: "Ask the host. Typos and a lobby that was never started both look like an empty browser.",
        next: "Use the password join if that control is on your screen.",
        source: "unverified",
        sourceNote: "Checklist step. The patch does not describe the browser layout.",
      },
      {
        id: "not-public",
        title: "Do not trust a public-room guide",
        check: "You stopped using a tutorial that assumes every friend lobby is listed in public matchmaking.",
        where: "Older posts from launch week, before 14 October 2026.",
        next: "If a password join exists and still errors, move to the join-failed lane.",
        source: "developer",
        sourceNote: "Private password lobbies were added in 1.0.1.4. Launch-week friend advice predates that.",
      },
    ],
  },
  {
    id: "failed",
    label: "Join fails",
    query: "can't join",
    lede: "Patch 1.0.1.4 says it fixed various join failures and crashes. That only helps if you are actually on that build.",
    steps: [
      versionStep,
      quitSteamStep,
      {
        id: "verify-files",
        title: "Verify the game files if 1.0.1.4 still fails",
        check: "Steam finished an integrity check and you launched the game again.",
        where: "Steam Library, right-click Hood Warfare 2, Properties, Installed Files, Verify integrity of game files.",
        next: "Try the password lobby once more. If it still dies, report it instead of cycling random settings.",
        source: "steam-client",
        sourceNote: "Standard Steam repair. It is not a sentence in the patch note.",
      },
      {
        id: "report-join",
        title: "Report a join that still fails on 1.0.1.4",
        check: "You told the developer the menu version, the map or mode if you got that far, and whether a friend could join.",
        where: `Steam discussions, or ${"trapstargames@protonmail.com"}. Patch 1.0.10 also points bug reports at the developer’s Discord. This site does not have a verified invite link.`,
        next: "Stop installing unofficial repair tools. They are not part of this fix.",
        source: "steam",
        sourceNote: "Support email is the address on the Steam store page, checked 14 October 2026.",
      },
    ],
  },
  {
    id: "kicked",
    label: "I get kicked",
    query: "kicked",
    lede: "A kick after the 1.0.1.4 patch is a different case from a kick on an older build.",
    steps: [
      versionStep,
      {
        id: "false-kick",
        title: "Treat an old build as the known false-kick bug",
        check: "You updated to 1.0.1.4 before deciding the anti-cheat is still broken.",
        where: "Bottom right of the main menu, then a full Steam exit if the number will not change.",
        next: "Launch again and rejoin the password lobby.",
        source: "developer",
        sourceNote: "The post says false anti-cheat kicks were fixed. It does not publish error codes.",
      },
      {
        id: "not-a-ban-tool",
        title: "Do not confuse a ban review with the false kick",
        check: "You are not installing a bypass. A report review is a different system from the false-kick bug.",
        where: "Patch 1.0.10 added a Report control in the pause menu. The developer said they review reports and ban players they decide are cheating.",
        next: "If 1.0.1.4 still kicks you instantly, write the developer with the version on screen. This site cannot see your account.",
        source: "developer",
        sourceNote: "Report and bans are from the 1.0.10 post on 12 October 2026. The store page also lists Easy Anti-Cheat.",
      },
    ],
  },
  {
    id: "audio",
    label: "Audio is wrong",
    query: "no sound",
    lede: "No game audio and a dead microphone are different fixes. Pick one lane on the troubleshooting page instead of mixing them here.",
    steps: [
      versionStep,
      {
        id: "split-audio",
        title: "Split the symptom before you change settings",
        check: "You know whether the guns and menu are silent, or whether people cannot hear you.",
        where: "Silent guns and menu: no-sound lane. You hear the match but voice does not work: voice-chat lane.",
        next: "Open the troubleshooting page on that lane. The output-device fix will not repair a microphone, and push-to-talk will not repair silent guns.",
        source: "developer",
        sourceNote: "1.0.1.4 covers the missing-audio output device. 1.0.10 covers voice chat.",
      },
    ],
  },
];

export function friendLane(id: string): GuideLane {
  return friendLanes.find((lane) => lane.id === id) ?? friendLanes[0];
}
