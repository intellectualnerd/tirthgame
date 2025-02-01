import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gamesData = [
  {
    title: "SKIER",
    heroImg: "/Skier/hero.png",
    description:
      "Developed a skiing game where players navigate snowy terrain, collecting red flags and avoiding obstacles. Simulated realistic physics and controls for an authentic skiing experience. Introduced power-ups and bonuses to increase gameplay variety and excitement.",
    images: ["/Skier/1.png", "/Skier/2.png", "/Skier/3.png", "/Skier/4.png"],
    playLink: "./games",
  },
  {
    title: "SKIER",
    heroImg: "/Skier/hero.png",
    description:
      "Developed a skiing game where players navigate snowy terrain, collecting red flags and avoiding obstacles. Simulated realistic physics and controls for an authentic skiing experience. Introduced power-ups and bonuses to increase gameplay variety and excitement.",
    images: ["/Skier/1.png", "/Skier/2.png", "/Skier/3.png", "/Skier/4.png"],
    playLink: "./games",
  },
  {
    title: "SKIER",
    heroImg: "/Skier/hero.png",
    description:
      "Developed a skiing game where players navigate snowy terrain, collecting red flags and avoiding obstacles. Simulated realistic physics and controls for an authentic skiing experience. Introduced power-ups and bonuses to increase gameplay variety and excitement.",
    images: ["/Skier/1.png", "/Skier/2.png", "/Skier/3.png", "/Skier/4.png"],
    playLink: "./games",
  },
  {
    title: "SKIER",
    heroImg: "/Skier/hero.png",
    description:
      "Developed a skiing game where players navigate snowy terrain, collecting red flags and avoiding obstacles. Simulated realistic physics and controls for an authentic skiing experience. Introduced power-ups and bonuses to increase gameplay variety and excitement.",
    images: ["/Skier/1.png", "/Skier/2.png", "/Skier/3.png", "/Skier/4.png"],
    playLink: "./games",
  },
  {
    title: "SKIER",
    heroImg: "/Skier/hero.png",
    description:
      "Developed a skiing game where players navigate snowy terrain, collecting red flags and avoiding obstacles. Simulated realistic physics and controls for an authentic skiing experience. Introduced power-ups and bonuses to increase gameplay variety and excitement.",
    images: ["/Skier/1.png", "/Skier/2.png", "/Skier/3.png", "/Skier/4.png"],
    playLink: "./games",
  },
];

const Games = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ marginBottom: "150px", paddingBottom: "1000px" }}>
      <div className="container" style={{ marginBottom: "100px" }}>
        <p className="headline">Games :</p>
        <Slider {...settings}>
          {gamesData.map((game, index) => (
            <div key={index} className="my-slider">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="my-slider-img">
                    <img src={game.heroImg} alt="Game" />
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 col-sm-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p className="my-slider-title">{game.title}</p>
                    <p className="my-slider-about">{game.description}</p>
                    <div>
                      {game.images.map((imgSrc, imgIndex) => (
                        <div key={imgIndex} className="icon-container">
                          <div className="mt-3 slider-about-icon">
                            <img src={imgSrc} alt={`Game ${imgIndex}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="hero-button mt-4 mb-5"
                      onClick={() => {
                        window.open(game.playLink, "_blank");
                      }}
                    >
                      Play{" "}
                      <svg
                        viewBox="0 0 35 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.6154 3L32 16.5L18.6154 30M3 3L16.3846 16.5L3 30"
                          stroke="white"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <svg
        width="100%"
        className="red-slope"
        viewBox="0 0 1512 2850"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-676.048"
          y="469.016"
          width="662.037"
          height="3366.64"
          transform="rotate(-45 -676.048 469.016)"
          fill="#9D0109"
        />
      </svg>

      <div className="games-container">
        <div className="all-games">
          <div className="row">
            {gamesData.map((game, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card h-100">
                  <img
                    src={game.heroImg}
                    className="card-img-top"
                    alt={game.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.description}</p>
                    <button
                      onClick={() => {
                        window.open(game.playLink, "_blank");
                      }}
                      className="hero-button mt-2"
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
