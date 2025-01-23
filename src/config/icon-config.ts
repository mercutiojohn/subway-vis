import type { IconGridProps } from '@/components/IconGrid'
import { ArrowDirections, arrowDirectionsMap, ExitIcons, exitIconsMap, SpecialIcons, specialIconsMap } from "@/types/subway-icons"

export const iconGridConfigs: IconGridProps[] = [
  {
    title: "方向图标",
    icons: Object.values(ArrowDirections),
    iconMap: arrowDirectionsMap,
    basePath: "/directions",
    iconClassName: "[&_.directions-fill-color]:fill-white",
    iconBgClassName: "bg-[#081e30] text-white"
  },
  {
    title: "方向图标-暗色",
    icons: Object.values(ArrowDirections),
    iconMap: arrowDirectionsMap,
    basePath: "/directions",
    iconClassName: "[&_.directions-fill-color]:fill-[#081e30]",
  },
  {
    title: "特殊图标",
    icons: Object.values(SpecialIcons),
    iconMap: specialIconsMap,
    basePath: "/special"
  },
  {
    title: "出口图标",
    icons: Object.values(ExitIcons),
    iconMap: exitIconsMap,
    basePath: "/exit"
  }
] 