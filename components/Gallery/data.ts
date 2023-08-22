import { gamingphotos, heliImages, unsplashPhotos } from "./photo";

const breakpoints = [4320, 2160, 1080, 640, 384, 256, 128];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

export const slides = unsplashPhotos.map((photo) => {
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

export const slidesGaming = gamingphotos.map((photo) => {
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

const galleryTab = [
  // you can add more image if you want
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli1.jpeg",
    type: "Helipuerto",
    title: "Heli1",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli2.jpeg",
    type: "Paintball",
    title: "Heli2",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli3.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli4.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli5.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli6.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli7.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli8.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli9.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/bl3r3/helipuerto-app/main/pages/services/heli-img/heli10.jpeg",
    type: "Nature",
    title: "Beautiful Work",
  },
];

export const slidesTest = galleryTab.map((item) => ({
  src: item.imageUrl,
  width: 1080,
  height: 1080,
}));
