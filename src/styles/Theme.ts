export type Theme = {
  background: string;
  textColor: string;
  inputColor: string;
  elements: string;
};

export const lightTheme: Theme = {
  background: "hsl(0, 0%, 98%)",
  textColor: "hsl(200, 15%, 8%)",
  inputColor: "hsl(0, 0%, 52%)",
  elements: "hsl(0, 0%, 100%)",
};

export const darkTheme: Theme = {
  background: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 52%)",
  elements: "hsl(209, 23%, 22%)",
};
