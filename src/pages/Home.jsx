import OceanScene from "@/components/Ocean";
import WavyFooter from "@/components/WavyFooter";
import Wheel from "@/components/Wheel";
import { motion as m } from "framer-motion";

function Home() {
  return (
    <m.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ x: "-100%" }}
      className='bg-cyan-900 relative h-screen overflow-hidden'>
      <OceanScene />
      <Wheel />
    </m.div>
  );
}

export default Home;
