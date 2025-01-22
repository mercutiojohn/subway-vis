export type SubwayLine = {
  id: string;
  name: string;
  number?: number;
  color: SubwayLineColor;
};

export type SubwayLineColor = {
  hsl: string;
  cmyk: string;
  rgb: string;
};

export const subwayLine: SubwayLine[] = [
  {
    id: "1",
    name: "1号线",
    number: 1,
    color: {
      hsl: "10, 70%, 40%",
      cmyk: "C25 M90 Y85 K0",
      rgb: "#a14641",
    },
  },
  {
    id: "2",
    name: "2号线",
    number: 2,
    color: {
      hsl: "210, 70%, 40%",
      cmyk: "C90 M60 Y20 K0",
      rgb: "#375d84",
    },
  },
  {
    id: "3",
    name: "3号线",
    number: 3,
    color: {
      hsl: "30, 70%, 40%",
      cmyk: "C0 M100 Y75 K0",
      rgb: "#c73644",
    },
  },
  {
    id: "4",
    name: "4号线",
    number: 4,
    color: {
      hsl: "40, 70%, 40%",
      cmyk: "C85 M0 Y30 K25",
      rgb: "#218387",
    },
  },
  {
    id: "5",
    name: "5号线",
    number: 5,
    color: {
      hsl: "50, 70%, 40%",
      cmyk: "C40 M95 Y10 K0",
      rgb: "#883873",
    },
  },
];