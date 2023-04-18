const LoadingPage = () => {
  return (
    <div
      className="globload"
      style={{
        filter:
          "drop-shadow(0 90 190px url(#myGradient) color-interpolation-filters=sRGB) opacity(1)",
      }}
      
    >
      <div id="logo-loading" className="spinner animated fadeIn">
        {/* LOGO */}
        <svg
  width="95"
  height="95"
  viewBox="0 0 40 40"
  style={{
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  }}
>
  <svg width="0" height="0">
    <defs>
      <linearGradient
        id="myGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="10%" stopColor="#ff8547" />
        <stop offset="100%" stopColor="#763219" />
      </linearGradient>
      <filter id="reflection">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
  <polygon
    points="0 0 0 40 40 40 40 0"
    className="rect"
    style={{
      fill: "none",
      strokeWidth: "8px",
      stroke: "url(#myGradient)",
      strokeDasharray: "40",
      strokeDashoffset: "50%",
      WebkitAnimation: "movedash 1.5s forwards 0s infinite",
      animation: "movedash 1.5s forwards 0s infinite",
      filter: "url(#reflection)",
    }}
  ></polygon>
</svg>

        {/* <h6>LOADING</h6> */}
      </div>
    </div>
  );
};

export default LoadingPage;
