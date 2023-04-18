
const LoadingPage = () => {

  return (
    <div className="globload">
      <div id="logo-loading" className="spinner animated fadeIn">
        {/* LOGO */}
        <svg
          width="80"
          height="80"
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
                <stop offset="10%" stopColor="#FFF6B7" />
                <stop offset="100%" stopColor="#F6416C" />
              </linearGradient>
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
            }}
          ></polygon>
        </svg>
        {/* <h6>LOADING</h6> */}
      </div>
    </div>
  );
};

export default LoadingPage;
