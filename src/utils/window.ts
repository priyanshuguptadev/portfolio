type WindowWithGtag = Window & {
  gtag?: (...args: any[]) => void;
};

declare const window: WindowWithGtag;

export default window;
