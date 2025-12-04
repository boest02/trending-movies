import { useState } from "react";

import "../css/imageLoader.css";

const ImageLoader = ({ src, alt, height }: { src: string; alt: string, height: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-wrapper">
      {!loaded && <div className="image-skeleton"></div>}

      <img
        src={src}
        alt={alt}
        height={height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={loaded ? "fade-in" : "hidden-img"}
      />
    </div>
  );
};

export default ImageLoader;
