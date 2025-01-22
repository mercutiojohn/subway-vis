export enum ArrowsAndDirections {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
  LEFT_UP = "left_up",
  RIGHT_UP = "right_up",
  LEFT_DOWN = "left_down",
  RIGHT_DOWN = "right_down",
  LEFT_TURN = "left_turn",
  RIGHT_TURN = "right_turn",
  LEFT_BACK = "left_back",
  RIGHT_BACK = "right_back",
  NO_ENTRY = "no_entry",
  GATE_ENTER = "gate_enter",
  GATE_FORBIDDEN = "gate_forbidden",
  FORBIDDEN = "forbidden",
  // 暗色
  NEXT_STATION_A = "next_station_a",
  NEXT_STATION_B = "next_station_b",
  LEFT_DARK = "left_dark",
  RIGHT_DARK = "right_dark",
  UP_DARK = "up_dark",
  DOWN_DARK = "down_dark",
  LEFT_UP_DARK = "left_up_dark",
  RIGHT_UP_DARK = "right_up_dark",
  LEFT_DOWN_DARK = "left_down_dark",
  RIGHT_DOWN_DARK = "right_down_dark",
  LEFT_TURN_DARK = "left_turn_dark",
  RIGHT_TURN_DARK = "right_turn_dark",
  LEFT_BACK_DARK = "left_back_dark",
  RIGHT_BACK_DARK = "right_back_dark",
  NO_ENTRY_DARK = "no_entry_dark",
  GATE_ENTER_DARK = "gate_enter_dark",
  GATE_FORBIDDEN_DARK = "gate_forbidden_dark",
  FORBIDDEN_DARK = "forbidden_dark",
  // 特殊
  GATE_ENTER_SPECIAL = "gate_enter_special",
  GATE_FORBIDDEN_SPECIAL = "gate_forbidden_special",
  // 出口
  EXIT_A = "exit_a",
  EXIT_B = "exit_b",
  EXIT_SMALL = "exit_small",
  EXIT_SPECIAL_A = "exit_special_a",
  EXIT_SPECIAL_B = "exit_special_b",
  EXIT_SPECIAL_C = "exit_special_c",
  EXIT_EMERGENCY = "exit_emergency",
}

export const arrowsAndDirectionsMap: Record<ArrowsAndDirections, string> = {
  [ArrowsAndDirections.LEFT]: "左",
  [ArrowsAndDirections.RIGHT]: "右",
  [ArrowsAndDirections.UP]: "上",
  [ArrowsAndDirections.DOWN]: "下",
  [ArrowsAndDirections.LEFT_UP]: "左上",
  [ArrowsAndDirections.RIGHT_UP]: "右上",
  [ArrowsAndDirections.LEFT_DOWN]: "左下",
  [ArrowsAndDirections.RIGHT_DOWN]: "右下",
  [ArrowsAndDirections.LEFT_TURN]: "左掉头",
  [ArrowsAndDirections.RIGHT_TURN]: "右掉头",
  [ArrowsAndDirections.LEFT_BACK]: "左后方",
  [ArrowsAndDirections.RIGHT_BACK]: "右后方",
  [ArrowsAndDirections.NO_ENTRY]: "禁止通行",
  [ArrowsAndDirections.GATE_ENTER]: "闸机 进入",
  [ArrowsAndDirections.GATE_FORBIDDEN]: "闸机 禁止",
  [ArrowsAndDirections.FORBIDDEN]: "禁止",
  // 暗色
  [ArrowsAndDirections.NEXT_STATION_A]: "下一站 A 暗",
  [ArrowsAndDirections.NEXT_STATION_B]: "下一站 B 暗",
  [ArrowsAndDirections.LEFT_DARK]: "左 暗",
  [ArrowsAndDirections.RIGHT_DARK]: "右 暗",
  [ArrowsAndDirections.UP_DARK]: "上 暗",
  [ArrowsAndDirections.DOWN_DARK]: "下 暗",
  [ArrowsAndDirections.LEFT_UP_DARK]: "左上 暗",
  [ArrowsAndDirections.RIGHT_UP_DARK]: "右上 暗",
  [ArrowsAndDirections.LEFT_DOWN_DARK]: "左下 暗",
  [ArrowsAndDirections.RIGHT_DOWN_DARK]: "右下 暗",
  [ArrowsAndDirections.LEFT_TURN_DARK]: "左掉头 暗",
  [ArrowsAndDirections.RIGHT_TURN_DARK]: "右掉头 暗",
  [ArrowsAndDirections.LEFT_BACK_DARK]: "左后方 暗",
  [ArrowsAndDirections.RIGHT_BACK_DARK]: "右后方 暗",
  [ArrowsAndDirections.NO_ENTRY_DARK]: "禁止通行 暗",
  [ArrowsAndDirections.GATE_ENTER_DARK]: "闸机 进入 暗",
  [ArrowsAndDirections.GATE_FORBIDDEN_DARK]: "闸机 禁止 暗",
  [ArrowsAndDirections.FORBIDDEN_DARK]: "禁止 暗",
  // 特殊
  [ArrowsAndDirections.GATE_ENTER_SPECIAL]: "闸机 进入 特殊",
  [ArrowsAndDirections.GATE_FORBIDDEN_SPECIAL]: "闸机 禁止 特殊",
  // 出口
  [ArrowsAndDirections.EXIT_A]: "出口 A",
  [ArrowsAndDirections.EXIT_B]: "出口 B",
  [ArrowsAndDirections.EXIT_SMALL]: "出口 小",
  [ArrowsAndDirections.EXIT_SPECIAL_A]: "出口 特殊 A",
  [ArrowsAndDirections.EXIT_SPECIAL_B]: "出口 特殊 B",
  [ArrowsAndDirections.EXIT_SPECIAL_C]: "出口 特殊 C",
  [ArrowsAndDirections.EXIT_EMERGENCY]: "紧急出口",
};

export enum FacilityAndServices {
  // 扶梯和楼梯
  ESCALATOR_LEFT_BLUE = "escalator_left_blue",
  STAIRS_LEFT_BLUE = "stairs_left_blue",
  ESCALATOR_RIGHT_WHITE = "escalator_right_white",
  STAIRS_RIGHT_WHITE = "stairs_right_white",
  
  // 卫生间
  TOILET = "toilet",
  TOILET_ACCESSIBLE = "toilet_accessible",
  TOILET_MEN = "toilet_men",
  TOILET_WOMEN = "toilet_women",
  TOILET_THIRD = "toilet_third",
  
  // 电梯
  ELEVATOR = "elevator",
  ELEVATOR_ACCESSIBLE = "elevator_accessible",
  
  // 无障碍设施
  ACCESSIBLE_BLUE = "accessible_blue",
  ACCESSIBLE_WHITE = "accessible_white",
  ACCESSIBLE_RAMP = "accessible_ramp",
  ACCESSIBLE_PLATFORM = "accessible_platform",
  GUIDE_DOG = "guide_dog",
  
  // 特殊人群
  ELDERLY = "elderly",
  BABY_CARRIAGE = "baby_carriage",
  PREGNANT = "pregnant",
  LUGGAGE = "luggage",
  
  // 服务设施
  BABY_CARE = "baby_care",
  AED = "aed",
  TICKET_MACHINE = "ticket_machine",
  TICKET_OFFICE = "ticket_office",
  INFORMATION = "information",
  SERVICE_CENTER = "service_center",
  SECURITY_OFFICE = "security_office",
  
  // 安全设施
  EMERGENCY_BUTTON = "emergency_button",
  SECURITY_CHECK_PASSENGER = "security_check_passenger",
  SECURITY_CHECK_LUGGAGE = "security_check_luggage"
}

export const facilityAndServicesMap: Record<FacilityAndServices, string> = {
  // 扶梯和楼梯
  [FacilityAndServices.ESCALATOR_LEFT_BLUE]: "左向蓝扶梯",
  [FacilityAndServices.STAIRS_LEFT_BLUE]: "左向蓝楼梯",
  [FacilityAndServices.ESCALATOR_RIGHT_WHITE]: "右向白扶梯",
  [FacilityAndServices.STAIRS_RIGHT_WHITE]: "右向白楼梯",
  
  // 卫生间
  [FacilityAndServices.TOILET]: "卫生间",
  [FacilityAndServices.TOILET_ACCESSIBLE]: "无障碍卫生间",
  [FacilityAndServices.TOILET_MEN]: "男卫生间",
  [FacilityAndServices.TOILET_WOMEN]: "女卫生间",
  [FacilityAndServices.TOILET_THIRD]: "第三卫生间",
  
  // 电梯
  [FacilityAndServices.ELEVATOR]: "直梯",
  [FacilityAndServices.ELEVATOR_ACCESSIBLE]: "无障碍直梯",
  
  // 无障碍设施
  [FacilityAndServices.ACCESSIBLE_BLUE]: "无障碍蓝色",
  [FacilityAndServices.ACCESSIBLE_WHITE]: "无障碍白色",
  [FacilityAndServices.ACCESSIBLE_RAMP]: "无障碍坡道",
  [FacilityAndServices.ACCESSIBLE_PLATFORM]: "无障碍平台",
  [FacilityAndServices.GUIDE_DOG]: "欢迎导盲犬",
  
  // 特殊人群
  [FacilityAndServices.ELDERLY]: "老年人",
  [FacilityAndServices.BABY_CARRIAGE]: "携带婴儿车",
  [FacilityAndServices.PREGNANT]: "孕妇",
  [FacilityAndServices.LUGGAGE]: "携带行李",
  
  // 服务设施
  [FacilityAndServices.BABY_CARE]: "母婴室",
  [FacilityAndServices.AED]: "AED",
  [FacilityAndServices.TICKET_MACHINE]: "自助售票",
  [FacilityAndServices.TICKET_OFFICE]: "售票 / 补票",
  [FacilityAndServices.INFORMATION]: "问讯",
  [FacilityAndServices.SERVICE_CENTER]: "客服中心",
  [FacilityAndServices.SECURITY_OFFICE]: "警卫室",
  
  // 安全设施
  [FacilityAndServices.EMERGENCY_BUTTON]: "招援按钮",
  [FacilityAndServices.SECURITY_CHECK_PASSENGER]: "乘客安检",
  [FacilityAndServices.SECURITY_CHECK_LUGGAGE]: "物品安检"
};
