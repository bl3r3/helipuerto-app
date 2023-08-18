import { gamingphotos, unsplashPhotos } from "./photo";

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const slides = unsplashPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

const slidesGaming = gamingphotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;
  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const breakpointHeight = Math.round((height / width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, breakpointHeight),
        width: breakpoint,
        height: breakpointHeight,
      };
    }),
  };
});

export { slides, slidesGaming };
