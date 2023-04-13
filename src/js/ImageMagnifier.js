import React from 'react'

function ImageMagnifier(
  src,
  width,
  height,
  magnifierHeight = 150,
  magnifieWidth = 150,
  zoomLevel = 2
) {
  const [[x, y], setXY] = React.useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = React.useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = React.useState(false);
  return (
    <div
      className="main__product-magnifier"
      style={{
        position: "relative",
        height: height,
        width: width,
      }}
    >
      <img
        src={src.src}
        style={{ height: height, width: width }}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
        alt={"img"}
      />

      <div
        className="main__product-zoom"
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifieWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1",
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src.src}')`,
          backgroundRepeat: "no-repeat",

          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,

          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      ></div>
    </div>
  );
}

export default ImageMagnifier