import type { GuideLane, GuideStep } from "@/lib/friend";

const version: GuideStep = {
  id: "version",
  title: "Read the build before you change settings",
  check: "The main menu shows 1.0.1.4 in the bottom-right corner.",
  where: "Main menu, bottom right.",
  next: "If it does not, use Steam’s own menu: top left, Steam, Exit Steam. Relaunch and read the number again.",
  source: "developer",
  sourceNote: "Patch 1.0.1.4, 14 October 2026, 01:03 UTC.",
};

export const troubleLanes: GuideLane[] = [
  {
    id: "no-sound",
    label: "No game sound",
    query: "no sound",
    lede: "Guns, menu, and music are silent. This is the output-device bug from patch 1.0.1.4. It is not the microphone.",
    steps: [
      version,
      {
        id: "output-device",
        title: "Select an audio output device in settings",
        check: "Hood Warfare 2 is set to the speakers or headset you expect, not a dead output.",
        where: "The developer said to open settings and select an audio output device. They did not name the tab. Look for sound or audio output.",
        next: "If you can hear the game and only voice is dead, leave this lane. You are in the voice-chat problem.",
        source: "developer",
        sourceNote: "Quoted fix from patch 1.0.1.4. Menu art on this site is not a settings screenshot.",
      },
      {
        id: "windows-output",
        title: "Match the Windows output, then reselect it in game",
        check: "Windows is already playing sound through that same device, and you picked it again inside the game.",
        where: "Windows sound settings, then the game’s audio output list.",
        next: "Still silent on 1.0.1.4 after a full Steam restart: verify the game files, then email the developer with the version number.",
        source: "unverified",
        sourceNote: "Windows device choice is general PC advice. The in-game selection is the developer’s fix.",
      },
    ],
  },
  {
    id: "voice",
    label: "Voice chat",
    query: "voice chat",
    lede: "You hear the match, but lobby or team voice does not. Voice chat arrived in patch 1.0.10. Push-to-talk will not cure silent guns.",
    steps: [
      {
        id: "voice-build",
        title: "Be on a build that includes voice chat",
        check: "The menu shows 1.0.1.4, which was posted after 1.0.10. Voice chat was added on 12 October 2026.",
        where: "Bottom right of the main menu. This site has not re-opened the voice menu after 1.0.1.4, so treat the later build as the public update, not as a fresh lab test.",
        next: "If the menu is older than 1.0.10, update before you debug the mic.",
        source: "developer",
        sourceNote: "1.0.10 post, 12 October 2026, 16:35 UTC. 1.0.1.4 followed on 14 October.",
      },
      {
        id: "ptt",
        title: "Hold the default talk key, or turn on open mic",
        check: "You are holding T, or you switched to open mic on purpose.",
        where: "Voice settings. The developer said push-to-talk is the default, on T, and open mic is in settings.",
        next: "Confirm you are talking to the lobby or only to the team. Those are both options they named.",
        source: "developer",
        sourceNote: "Patch 1.0.10. The key is T unless a later patch changes it. 1.0.1.4 does not mention a voice-key change.",
      },
      {
        id: "mic-input",
        title: "Check the input device separately from the speakers",
        check: "Windows is using the microphone you think it is, and the game is allowed to use it.",
        where: "Windows input device and microphone privacy. This is not the output-device menu from the no-sound fix.",
        next: "If the whole game is silent, switch to the no-sound lane.",
        source: "unverified",
        sourceNote: "Operating-system input advice. The developer did not publish a mic-device click path.",
      },
    ],
  },
  {
    id: "cant-join",
    label: "Can’t join",
    query: "can't join",
    lede: "Join failures and crashes are on the 1.0.1.4 fix list. Start with the build, then the files, then a report.",
    steps: [
      version,
      {
        id: "password-path",
        title: "Use the private-lobby path if you are joining a friend",
        check: "You have the host’s current password and you are not hunting their name in a public list from a launch-week guide.",
        where: "Password join. The button name was not published.",
        next: "Public matchmaking is a different door. A missing friend room does not mean the whole game is offline.",
        source: "developer",
        sourceNote: "Password lobbies are from 1.0.1.4. The public-list behavior is not documented in that post.",
      },
      {
        id: "verify",
        title: "Verify files when the current build still fails",
        check: "An integrity check completed and you launched once more.",
        where: "Steam Library, right-click Hood Warfare 2, Properties, Installed Files, Verify integrity of game files.",
        next: "Still failing: send the version number to trapstargames@protonmail.com or the Steam discussions.",
        source: "steam-client",
        sourceNote: "Steam’s own verify command. The support email is on the store page.",
      },
    ],
  },
  {
    id: "kicked",
    label: "Kicked",
    query: "anti cheat",
    lede: "False anti-cheat kicks are a 1.0.1.4 fix. A reviewed ban is a 1.0.10 system. Update first so you know which one you are looking at.",
    steps: [
      version,
      {
        id: "eac",
        title: "Leave Easy Anti-Cheat installed",
        check: "You updated the game instead of removing the anti-cheat.",
        where: "The Steam store page lists kernel-level Easy Anti-Cheat. Patch 1.0.10 says the anti-cheat and a pause-menu Report control were added.",
        next: "Rejoin after the menu reads 1.0.1.4.",
        source: "steam",
        sourceNote: "Store page checked 14 October 2026, plus the 1.0.10 post.",
      },
      {
        id: "still-kicked",
        title: "If 1.0.1.4 still kicks you, report the version",
        check: "Your note includes 1.0.1.4 and whether it happens in a private lobby, a public match, or at the menu.",
        where: "trapstargames@protonmail.com or Steam discussions. This site cannot read bans.",
        next: "Do not download a kick fixer. That is outside the game and outside this guide.",
        source: "developer",
        sourceNote: "The false-kick fix is the developer’s claim. It is not a promise that every kick is gone.",
      },
    ],
  },
  {
    id: "crash",
    label: "Crash",
    query: "crash",
    lede: "Various crashes were on the 1.0.1.4 list. The minimum PC on the store page still matters if the game never stays open.",
    steps: [
      version,
      {
        id: "specs",
        title: "Check the machine against the store minimum",
        check: "64-bit Windows 10 version 1909 or newer, 8 GB RAM, a GTX 1660 or RX 5600 XT class GPU, DirectX 12, and 25 GB free.",
        where: "Steam store system requirements, retrieved 14 October 2026. Recommended is Windows 11, 16 GB, and an RTX 3060 Ti or RTX 4060.",
        next: "If the PC clears that bar and 1.0.1.4 still crashes, verify files, then report it.",
        source: "steam",
        sourceNote: "Store requirements. Not a benchmark run by this site.",
      },
      {
        id: "verify-crash",
        title: "Verify files, then report the build",
        check: "Integrity check done, and the report names 1.0.1.4.",
        where: "Steam verify path, then trapstargames@protonmail.com. Patch 1.0.10 asked for bug reports in Discord without printing an invite.",
        next: "A crash on an older build is not evidence that 1.0.1.4 still has that crash.",
        source: "steam-client",
        sourceNote: "Verify is a Steam client step. The crash fix claim is the developer’s.",
      },
    ],
  },
];

export function troubleLane(id: string): GuideLane {
  return troubleLanes.find((lane) => lane.id === id) ?? troubleLanes[0];
}

export function laneText(lane: GuideLane): string {
  return lane.steps
    .map((step) => `${step.title} ${step.check} ${step.where} ${step.next}`)
    .join(" ");
}
