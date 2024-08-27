import OceanScene from "@/components/Ocean";
import Wheel from "@/components/Wheel";
import { motion as m } from "framer-motion";

function Home() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className='bg-cyan-900 relative h-screen overflow-hidden'>
      <OceanScene />
      <Wheel />
    </m.div>
  );
}

export default Home;
