export enum SubwayVisualBoardTemplatesCategory {
  // 站点名称指示
  STATION_NAME_INDICATION = "station_name_indication",
  // 横向标志牌
  HORIZONTAL_SIGNAGE = "horizontal_signage",
  // 四倍
  FOUR_TIMES = "four_times",
  // 五倍
  FIVE_TIMES = "five_times",
  // 六倍
  SIX_TIMES = "six_times",
  // 八倍
  EIGHT_TIMES = "eight_times",
  // 十倍
  TEN_TIMES = "ten_times",
  // 竖向标志牌
  VERTICAL_SIGNAGE = "vertical_signage",
  // 竖向线路图
  VERTICAL_LINE_MAP = "vertical_line_map",
}

export enum HorizontalSignageComponents {
  // 方向
  DIRECTION = "direction",
  // 卫生间
  TOILET = "toilet",
  // 电梯
  ELEVATOR = "elevator",
  // 扶梯
  ESCALATOR = "escalator",
  // 楼梯
  STAIRS = "stairs",
  // 无障碍电梯
  ACCESSIBLE_ELEVATOR = "accessible_elevator",
  // 换乘指示
  TRANSFER_INSTRUCTION = "transfer_instruction",
  // 出口
  EXIT = "exit",
  // 出口+出口编号
  EXIT_WITH_CODE = "exit_with_code",
  // 去往目的地
  TO_DESTINATION = "to_destination",
  // 禁止通行
  NO_ENTRY = "no_entry",
}

export enum SubwayVisualBoardTemplates {
  // --站点名称指示--
  // 本站与下一站
  THIS_STATION_WITH_NEXT_STATION = "this_station_with_next_station",
  // 本站与终点站
  THIS_STATION_WITH_TERMINAL_SIGN = "this_station_with_terminal_sign",
  // --横向标志牌--
  HORIZONTAL_SIGNAGE_X4 = "horizontal_signage_x4",
  HORIZONTAL_SIGNAGE_X5 = "horizontal_signage_x5",
  HORIZONTAL_SIGNAGE_X8 = "horizontal_signage_x8",
  HORIZONTAL_SIGNAGE_X10 = "horizontal_signage_x10",
}

// 横向标识牌布局
export enum HorizontalSignageLayout {
  // 单行
  SINGLE_LINE = "single_line",
  // 双行
  DOUBLE_LINE = "double_line",
  // 左右
  LEFT_RIGHT = "left_right",
  // 左中右
  LEFT_CENTER_RIGHT = "left_center_right",
  // 居中
  CENTERED = "centered",
}
