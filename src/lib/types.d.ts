declare module "@lottiefiles/svelte-lottie-player";
declare module "grained";

interface Window {
  grained: (selector: string, options: GrainedOptions) => void;
}

interface GrainedOptions {
  animate: boolean;
  patternWidth: number;
  patternHeight: number;
  grainOpacity: number;
  grainDensity: number;
  grainWidth: number;
  grainHeight: number;
}
