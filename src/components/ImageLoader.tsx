import { useState } from "react";

import "../css/imageLoader.css";

// props for image loader component
type ImageLoaderProps = {
  src: string;
  alt: string;
  height?: string;
};

//**
//  * ImageLoader Component
//  *
//  * This component loads an image with a skeleton placeholder until the image
//  * has fully loaded.  It accepts the image source, alt text, and optional height.
//  */
const ImageLoader = ({ src, alt, height }: ImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {!loaded && (
        <div className="image-skeleton" data-testid="skeleton-test"></div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? "fade-in" : "hidden-img"}
        style={{ height: height ? height : "auto" }}
      />
    </div>
  );
};

export default ImageLoader;
