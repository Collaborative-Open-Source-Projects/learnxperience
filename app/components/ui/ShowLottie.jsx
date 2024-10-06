"use client"
import { Player } from '@lottiefiles/react-lottie-player';

const ShowLottie = ({ path }) => {
  return (
    <div className={`max-w-sm md:max-w-md `}>
      <Player autoplay loop src={path}></Player>
    </div>
  );
};

export default ShowLottie;
