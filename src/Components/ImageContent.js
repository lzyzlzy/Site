import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { ConfigContext } from "../Contexts/ConfigContexts.js";
import { useContext } from "react";

export default function ImageContent() {
  let [, data] = useContext(ConfigContext);

  const images = data.resource.map((i) => {
    return {
      original: i.src,
      thumbnail: i.src,
      thumbnailClass: "",
    };
  });
  return (
    <div>
      <ImageGallery
        items={images}
        thumbnailPosition={"bottom"}
        showFullscreenButton={false}
        showPlayButton={false}
        showIndex={true}
        disableThumbnailScroll={false}
      />
    </div>
  );
}
