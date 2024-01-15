export type AppIcon = {
  label: string;
  lottie?: string;
  image?: ConstructorOfATypedSvelteComponent;
  handleClick: () => void;
};

export type Work = {
  name: string;
  images: string[];
  hoverImage: string;
  details: string[][];
  textColor: "light" | "dark";
};

export type WorkGroup = {
  type: string;
  data: Work[];
};
