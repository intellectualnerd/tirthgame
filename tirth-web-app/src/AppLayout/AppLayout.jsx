import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import LoaderAnimation from "./Loader/LoaderAnimation";
import Nav from "../Pages/App/Components/Nav";
import Footer from "../Pages/App/Components/Footer";
import { LoaderProvider } from "../Context/Loader/LoaderContext";
import heroimg from "../Pages/App/Home/controller.png";

const AppLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [preloadedImage, setPreloadedImage] = useState(null);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const preloadHeroImage = () => {
      const img = new Image();
      img.src = heroimg;
      img.onload = () => {
        setPreloadedImage(img.src);
        setAnimation("animationStart");
        setTimeout(() => setIsLoading(false), 1000);
      };
      img.onerror = () => {
        console.error("Failed to load hero image");
        setIsLoading(false);
      };
    };

    if (isLoading) {
      preloadHeroImage();
    }
  }, [isLoading, setPreloadedImage]);

  useEffect(() => {
    if (location.state && location.state.action === "loading") {
      setAnimation("");
      setIsLoading(true);
    }
  }, [location, setIsLoading]);

  return (
    <>
      <LoaderProvider
        value={{
          isLoading: isLoading,
          setIsLoading: setIsLoading,
          preloadedImage: preloadedImage,
        }}
      >
        <main
          style={{
            overflowY: isLoading ? "hidden" : "auto",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
          className={animation}
        >
          {isLoading && <LoaderAnimation />}
          {!isLoading && (
            <>
              <Nav />
              <Outlet setIsLoading={setIsLoading} />
              <Footer />
            </>
          )}
        </main>
      </LoaderProvider>
    </>
  );
};

export default AppLayout;
