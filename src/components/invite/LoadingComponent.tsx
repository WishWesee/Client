import { Container } from "@styles/invite/LoadingComponentStyle";
import LoadingIcon1 from "@assets/images/Loading/Loading1.svg?react";
import LoadingIcon2 from "@assets/images/Loading/Loading2.svg?react";
import LoadingIcon3 from "@assets/images/Loading/Loading3.svg?react";
import { useEffect, useState } from "react";

const LoadingComponent = ({ text }: { text: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const RESULT_IMAGES = [LoadingIcon1, LoadingIcon2, LoadingIcon3];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((prev) => {
        if (direction === "up") {
          if (prev + 1 < RESULT_IMAGES.length) {
            return prev + 1;
          } else {
            setDirection("down");
            return prev - 1;
          }
        } else {
          if (prev - 1 >= 0) {
            return prev - 1;
          } else {
            setDirection("up");
            return prev + 1;
          }
        }
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [direction, currentImageIndex, RESULT_IMAGES.length]);

  const CurrentIcon = RESULT_IMAGES[currentImageIndex];

  return (
    <Container>
      <CurrentIcon />
      <span>{text}</span>
    </Container>
  );
};

export default LoadingComponent;
