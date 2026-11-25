export * from "./shared";
import { IconDef } from "./shared";
import { CORE_ICONS } from "./packs/core";
import { CORE2_ICONS } from "./packs/core2";
import { COMMS_ICONS } from "./packs/comms";
import { COMMS2_ICONS } from "./packs/comms2";
import { MEDIA_ICONS } from "./packs/media";
import { MEDIA2_ICONS } from "./packs/media2";
import { TOOLS_ICONS } from "./packs/tools";
import { TOOLS2_ICONS } from "./packs/tools2";
import { WORLD_ICONS } from "./packs/world";
import { WORLD2_ICONS } from "./packs/world2";
import { NATURE_ICONS } from "./packs/nature";
import { NATURE2_ICONS } from "./packs/nature2";
import { COMMERCE_ICONS } from "./packs/commerce";
import { COMMERCE2_ICONS } from "./packs/commerce2";
import { TECH_ICONS } from "./packs/tech";
import { TECH2_ICONS } from "./packs/tech2";
import { OBJECTS_ICONS } from "./packs/objects";
import { OBJECTS2_ICONS } from "./packs/objects2";
import { TRAVEL_ICONS } from "./packs/travel";
import { TRAVEL2_ICONS } from "./packs/travel2";
import { MUSIC_ICONS } from "./packs/music";
import { MUSIC2_ICONS } from "./packs/music2";
import { EVERYDAY_ICONS } from "./packs/everyday";
import { EVERYDAY2_ICONS } from "./packs/everyday2";

export const ICONS: IconDef[] = [
  ...CORE_ICONS,
  ...CORE2_ICONS,
  ...COMMS_ICONS,
  ...COMMS2_ICONS,
  ...MEDIA_ICONS,
  ...MEDIA2_ICONS,
  ...TOOLS_ICONS,
  ...TOOLS2_ICONS,
  ...WORLD_ICONS,
  ...WORLD2_ICONS,
  ...NATURE_ICONS,
  ...NATURE2_ICONS,
  ...COMMERCE_ICONS,
  ...COMMERCE2_ICONS,
  ...TECH_ICONS,
  ...TECH2_ICONS,
  ...OBJECTS_ICONS,
  ...OBJECTS2_ICONS,
  ...TRAVEL_ICONS,
  ...TRAVEL2_ICONS,
  ...MUSIC_ICONS,
  ...MUSIC2_ICONS,
  ...EVERYDAY_ICONS,
  ...EVERYDAY2_ICONS,
];

export const ICON_CATEGORIES = [
  "All",
  "Core UI",
  "Comms & Files",
  "Media & Audio",
  "Kinetic Tools",
  "World & Energy",
  "Weather & Nature",
  "Commerce & Finance",
  "Tech & Controls",
  "Time & Everyday",
  "Travel & Play",
  "Studio & Sound",
  "Home & Lab",
] as const;
