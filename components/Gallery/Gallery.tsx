import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";

type GalleryProp = {
  data: any;
};

export const Gallery = ({ data }: GalleryProp) => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div className="w-full px-12 z-40">
        <PhotoAlbum
          layout="rows"
          photos={data}
          targetRowHeight={150}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          index={index}
          slides={data}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};
