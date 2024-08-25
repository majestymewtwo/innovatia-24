import React from "react";
import oceanWaves from "@/assets/animations/ocean-waves-1.json";
import Lottie from "lottie-react";

const WavyFooter = () => {
  return (
    <div className="absolute -bottom-24 lg:-bottom-1/2" >
      <Lottie
        className="w-full"
        animationData={oceanWaves}
      />
    </div>
  );
};

export default WavyFooter;
