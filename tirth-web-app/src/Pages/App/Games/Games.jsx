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
    title: "METEOR",
    heroImg: "/Meteor/hero.png",
    description:
      "I developed an innovative multiplayer game where players work together to destroy incoming meteors and protect their spaceships. To keep the gameplay engaging, I designed diverse levels with increasing difficulty, ensuring a dynamic challenge for players. Additionally, I implemented a leaderboard system to track and showcase top scores, encouraging competition and motivating players to improve their performance.",
    images: ["/Meteor/1.png", "/Meteor/2.png", "/Meteor/3.png"],
    playLink: "./games",
  },
  {
    title: "Puzzle",
    heroImg: "/Puzzle/hero.jpg",
    description:
      "I designed an interactive puzzle game where players rearrange scrambled pieces of an image to restore it to its original form. The game board consists of an image divided into a grid of tiles (3x3, 4x4, or 6x6), with one tile always left blank. Players can slide adjacent tiles into the empty space using arrow keys or WASD controls, strategically shifting pieces to reassemble the image. The challenge lies in efficiently moving the tiles to solve the puzzle in the shortest time possible, providing an engaging and rewarding experience for players.",
    images: ["/Puzzle/1.jpg", "/Puzzle/3.jpg", "/Puzzle/4.jpg"],
    playLink: "./games",
  },
  {
    title: "Happy Garden",
    heroImg: "/Happy_Garden/logo.webp",
    description:
      "I created an interactive game where players nurture a virtual garden by watering flowers while strategically avoiding dangerous mutant fangflowers. To enhance engagement, I implemented character selection and dynamic game elements, including timed events that introduce new challenges as the game progresses. The game features vibrant visuals and collision-based interactions, ensuring an immersive and visually appealing experience for players.",
    images: [
      "/Happy_Garden/1.png",
      "/Happy_Garden/2.png",
      "/Happy_Garden/3.png",
      "/Happy_Garden/4.png",
    ],
    playLink: "./games",
  },
  {
    title: "Hitman Bunny",
    heroImg: "/Hitman_Bunny/logo.png",
    description:
      "I designed an engaging game where players defend their carrots from invading rats using interactive gameplay mechanics. To create a visually appealing experience, I developed detailed game assets, including well-crafted characters and immersive environments. Additionally, I optimized performance across various devices, ensuring smooth and consistent gameplay for all players.",
    images: [
      "/Hitman_Bunny/1.png",
      "/Hitman_Bunny/2.png",
      "/Hitman_Bunny/3.png",
    ],
    playLink: "./games",
  },
  {
    title: "Catch Cookie",
    heroImg: "/Catch_Cookie/hero.png",
    description:
      "I designed a time-based game where players collect cookies while earning extra points for apples. With intuitive controls and a user-friendly interface, the gameplay remains engaging and satisfying. To enhance immersion, I incorporated dynamic sound effects and background music, creating a captivating gaming experience.",
    images: [
      "/Catch_Cookie/1.png",
      "/Catch_Cookie/2.png",
      "/Catch_Cookie/3.png",
    ],
    playLink: "./games",
  },
  {
    title: "Flappy Bird",
    heroImg: "/Flappy_Bird/hero.png",
    description:
      "I developed a challenging game where players guide a bird through obstacles, striving for high scores. The game features realistic physics-based controls for smooth and authentic movement. Additionally, I integrated social sharing features, enabling players to share their achievements with friends and compete for the top spot.",
    images: ["/Flappy_Bird/1.png", "/Flappy_Bird/2.png", "/Flappy_Bird/3.png"],
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
          {gamesData.slice(0, 5).map((game, index) => (
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
