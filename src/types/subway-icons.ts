export enum ArrowDirections {
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
  RIGHT_BACK = "right_back"
}

export const arrowDirectionsMap: Record<ArrowDirections, string> = {
  [ArrowDirections.LEFT]: "左",
  [ArrowDirections.RIGHT]: "右",
  [ArrowDirections.UP]: "上",
  [ArrowDirections.DOWN]: "下",
  [ArrowDirections.LEFT_UP]: "左上",
  [ArrowDirections.RIGHT_UP]: "右上",
  [ArrowDirections.LEFT_DOWN]: "左下",
  [ArrowDirections.RIGHT_DOWN]: "右下",
  [ArrowDirections.LEFT_TURN]: "左掉头",
  [ArrowDirections.RIGHT_TURN]: "右掉头",
  [ArrowDirections.LEFT_BACK]: "左后方",
  [ArrowDirections.RIGHT_BACK]: "右后方",
}

export enum ExitIcons {
  // 出口
  EXIT_ONE_CHARACTER = "exit_one_character",
  EXIT_ONE_CHARACTER_ZH = "exit_one_character_zh",
  EXIT_ONE_CHARACTER_EN = "exit_one_character_en",
  EXIT_TWO_CHARACTERS = "exit_two_characters",
  // EXIT_TWO_CHARACTERS_ZH = "exit_two_characters_zh",
  // EXIT_TWO_CHARACTERS_EN = "exit_two_characters_en",
  // EXIT_SPECIAL_A = "exit_special_a",
  // EXIT_SPECIAL_B = "exit_special_b",
  // EXIT_SPECIAL_C = "exit_special_c",
  // EXIT_EMERGENCY = "exit_emergency",
}

export const exitIconsMap: Record<ExitIcons, string> = {
  // 出口
  [ExitIcons.EXIT_ONE_CHARACTER]: "出口 单字符",
  [ExitIcons.EXIT_ONE_CHARACTER_ZH]: "出口 单字符 中文",
  [ExitIcons.EXIT_ONE_CHARACTER_EN]: "出口 单字符 英文",
  [ExitIcons.EXIT_TWO_CHARACTERS]: "出口 双字符",
  // [ExitIcons.EXIT_TWO_CHARACTERS_ZH]: "出口 双字符 中文",
  // [ExitIcons.EXIT_TWO_CHARACTERS_EN]: "出口 双字符 英文",
  // [ExitIcons.EXIT_SPECIAL_A]: "出口 特殊 A",
  // [ExitIcons.EXIT_SPECIAL_B]: "出口 特殊 B",
  // [ExitIcons.EXIT_SPECIAL_C]: "出口 特殊 C",
  // [ExitIcons.EXIT_EMERGENCY]: "紧急出口",
};

export enum SpecialIcons {
  // 禁止通行
  NO_ENTRY = "no_entry",
  // 闸机
  GATE_ENTER = "gate_enter",
  GATE_FORBIDDEN = "gate_forbidden",
}

export const specialIconsMap: Record<SpecialIcons, string> = {
  // 禁止通行
  [SpecialIcons.NO_ENTRY]: "禁止通行",
  // 闸机
  [SpecialIcons.GATE_ENTER]: "闸机 进入",
  [SpecialIcons.GATE_FORBIDDEN]: "闸机 禁止",
}

export enum FacilityAndServicesIcons {
  // 扶梯和楼梯
  ESCALATOR_TO_LEFT_BLUE = "escalator_to_left_blue",
  STAIRS_TO_LEFT_BLUE = "stairs_to_left_blue",
  ESCALATOR_TO_RIGHT = "escalator_to_right",
  ESCALATOR_TO_RIGHT_BORDER = "escalator_to_right_border",
  STAIRS_TO_RIGHT = "stairs_to_right",
  STAIRS_TO_RIGHT_BORDER = "stairs_to_right_border",
  
  // 卫生间
  TOILET_COLORED = "toilet_colored",
  TOILET_ACCESSIBLE_COLORED = "toilet_accessible_colored",
  TOILET_MALE_BLUE = "toilet_male_blue",
  TOILET_FEMALE_COLORED = "toilet_female_colored",
  
  // 电梯
  ELEVATOR_BLUE = "elevator_blue",
  ELEVATOR_ACCESSIBLE_BLUE = "elevator_accessible_blue",
  
  // 无障碍设施
  ACCESSIBLE = "accessible",
  ACCESSIBLE_BLUE = "accessible_blue",
  ACCESSIBLE_BORDER = "accessible_border",
  ACCESSIBLE_RAMP = "accessible_ramp",
  ACCESSIBLE_RAMP_BORDER = "accessible_ramp_border",
  ACCESSIBLE_ESCALATOR = "accessible_escalator",
  ACCESSIBLE_ESCALATOR_BORDER = "accessible_escalator_border",
  GUIDE_DOG_BLUE = "guide_dog_blue",
  
  // 特殊人群
  ELDERLY = "elderly",
  ELDERLY_BORDER = "elderly_border",
  BABY_CARRIAGE = "baby_carriage",
  PREGNANT = "pregnant",
  PREGNANT_BORDER = "pregnant_border",
  WITH_LUGGAGE = "with_luggage",
  WITH_LUGGAGE_BORDER = "with_luggage_border",
  
  // 服务设施
  BABY_CARE_BLUE = "baby_care_blue",
  // AED_COLORED = "aed_colored",
  TICKET_MACHINE = "ticket_machine",
  TICKET_MACHINE_BORDER = "ticket_machine_border",  
  TICKET_OFFICE = "ticket_office",
  TICKET_OFFICE_BORDER = "ticket_office_border",
  INQUIRY = "inquiry",
  INQUIRY_BORDER = "inquiry_border",
  SERVICE_CENTER = "service_center",
  SERVICE_CENTER_BORDER = "service_center_border",
  SECURITY_OFFICE = "security_office",
  SECURITY_OFFICE_BORDER = "security_office_border",
  
  // 安全设施
  EMERGENCY_BUTTON = "emergency_button",
  EMERGENCY_BUTTON_BORDER = "emergency_button_border",
  SECURITY_CHECK_PASSENGER = "security_check_passenger",
  SECURITY_CHECK_PASSENGER_BORDER = "security_check_passenger_border",
  SECURITY_CHECK_LUGGAGE = "security_check_luggage",
  SECURITY_CHECK_LUGGAGE_BORDER = "security_check_luggage_border"
}

export const facilityAndServicesIconsMap: Record<FacilityAndServicesIcons, string> = {
  // 扶梯和楼梯
  [FacilityAndServicesIcons.ESCALATOR_TO_LEFT_BLUE]: "左向蓝扶梯",
  [FacilityAndServicesIcons.STAIRS_TO_LEFT_BLUE]: "左向蓝楼梯",
  [FacilityAndServicesIcons.ESCALATOR_TO_RIGHT]: "右向扶梯",
  [FacilityAndServicesIcons.ESCALATOR_TO_RIGHT_BORDER]: "右向扶梯 边框",
  [FacilityAndServicesIcons.STAIRS_TO_RIGHT]: "右向楼梯",
  [FacilityAndServicesIcons.STAIRS_TO_RIGHT_BORDER]: "右向楼梯 边框",
  
  // 卫生间
  [FacilityAndServicesIcons.TOILET_COLORED]: "卫生间 彩色",
  [FacilityAndServicesIcons.TOILET_ACCESSIBLE_COLORED]: "无障碍卫生间 彩色",
  [FacilityAndServicesIcons.TOILET_MALE_BLUE]: "男卫生间 蓝色",
  [FacilityAndServicesIcons.TOILET_FEMALE_COLORED]: "女卫生间 彩色",
  
  // 电梯
  [FacilityAndServicesIcons.ELEVATOR_BLUE]: "直梯 蓝色",
  [FacilityAndServicesIcons.ELEVATOR_ACCESSIBLE_BLUE]: "无障碍直梯 蓝色",
  
  // 无障碍设施
  [FacilityAndServicesIcons.ACCESSIBLE]: "无障碍",
  [FacilityAndServicesIcons.ACCESSIBLE_BLUE]: "无障碍蓝色",
  [FacilityAndServicesIcons.ACCESSIBLE_BORDER]: "无障碍边框",
  [FacilityAndServicesIcons.ACCESSIBLE_RAMP]: "无障碍坡道",
  [FacilityAndServicesIcons.ACCESSIBLE_RAMP_BORDER]: "无障碍坡道 边框",
  [FacilityAndServicesIcons.ACCESSIBLE_ESCALATOR]: "无障碍扶梯",
  [FacilityAndServicesIcons.ACCESSIBLE_ESCALATOR_BORDER]: "无障碍扶梯 边框",
  [FacilityAndServicesIcons.GUIDE_DOG_BLUE]: "欢迎导盲犬 蓝色",
  
  // 特殊人群
  [FacilityAndServicesIcons.ELDERLY]: "老年人",
  [FacilityAndServicesIcons.ELDERLY_BORDER]: "老年人 边框",
  [FacilityAndServicesIcons.BABY_CARRIAGE]: "携带婴儿车",
  [FacilityAndServicesIcons.PREGNANT]: "孕妇",
  [FacilityAndServicesIcons.PREGNANT_BORDER]: "孕妇 边框",
  [FacilityAndServicesIcons.WITH_LUGGAGE]: "携带行李",
  [FacilityAndServicesIcons.WITH_LUGGAGE_BORDER]: "携带行李 边框",
  
  // 服务设施
  [FacilityAndServicesIcons.BABY_CARE_BLUE]: "母婴室 蓝色",
  // [FacilityAndServices.AED]: "AED",
  [FacilityAndServicesIcons.TICKET_MACHINE]: "自助售票",
  [FacilityAndServicesIcons.TICKET_MACHINE_BORDER]: "自助售票 边框",
  [FacilityAndServicesIcons.TICKET_OFFICE]: "售票 / 补票",
  [FacilityAndServicesIcons.TICKET_OFFICE_BORDER]: "售票 / 补票 边框",
  [FacilityAndServicesIcons.INQUIRY]: "问讯",
  [FacilityAndServicesIcons.INQUIRY_BORDER]: "问讯 边框",
  [FacilityAndServicesIcons.SERVICE_CENTER]: "客服中心",
  [FacilityAndServicesIcons.SECURITY_OFFICE]: "警卫室",
  
  // 安全设施
  [FacilityAndServicesIcons.EMERGENCY_BUTTON]: "招援按钮",
  [FacilityAndServicesIcons.EMERGENCY_BUTTON_BORDER]: "招援按钮 边框",
  [FacilityAndServicesIcons.SECURITY_CHECK_PASSENGER]: "乘客安检",
  [FacilityAndServicesIcons.SECURITY_CHECK_PASSENGER_BORDER]: "乘客安检 边框",
  [FacilityAndServicesIcons.SECURITY_CHECK_LUGGAGE]: "物品安检",
  [FacilityAndServicesIcons.SECURITY_CHECK_LUGGAGE_BORDER]: "物品安检 边框",
  [FacilityAndServicesIcons.SERVICE_CENTER_BORDER]: "客服中心 边框",
  [FacilityAndServicesIcons.SECURITY_OFFICE_BORDER]: "警卫室 边框"
};
