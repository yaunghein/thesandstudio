export type AppIcon = {
  label: string;
  lottie?: string;
  image?: ConstructorOfATypedSvelteComponent;
  handleClick: () => void;
};

export type Work = {
  name: string;
  images: string[];
  categories: string[];
  meta: string[];
};

export type WorkGroup = {
  type: string;
  data: Work[];
};
