import React, { useRef, useMemo, useEffect } from "react";
import {
  extend,
  useThree,
  useLoader,
  useFrame,
  Canvas,
} from "@react-three/fiber";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water.js";
import { OrbitControls, Sky, Text } from "@react-three/drei";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(30000, 30000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xcc8800, // Softer sun color
      waterColor: 0x000000, // Darker water color
      distortionScale: 3.7, // Adjusted distortion scale
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
}

const CustomText = ({ children, ...props }) => {
  const font = useLoader(FontLoader, "/fonts/Anton_Regular.json");
  const meshRef = useRef();

  useEffect(() => {
    if (font && meshRef.current) {
      // Compute the bounding box
      const textGeometry = new TextGeometry(children, {
        font,
        size: 20,
        depth: 1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.3,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      textGeometry.computeBoundingBox();
      const boundingBox = textGeometry.boundingBox;
      const offset = boundingBox.getCenter(new THREE.Vector3()).negate();

      // Set the mesh position to the offset to center it
      meshRef.current.position.set(offset.x, 15, -20);
    }
  }, [font, children]);

  const geometry = new TextGeometry(children, {
    font,
    size: 20,
    depth: 1,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.2,
    bevelOffset: 0,
    bevelSegments: 5,
  });

  return (
    <mesh {...props} ref={meshRef}>
      <bufferGeometry attach='geometry' {...geometry} />
      <meshLambertMaterial attach='material' color={"#1A3636"} />
    </mesh>
  );
};

const OceanScene = () => {
  const minY = 15;
  return (
    <div className='absolute w-screen h-screen z-0'>
      <Canvas camera={{ position: [30, 30, 100], fov: 55 }}>
        <Sky
          distance={450000}
          turbidity={10}
          rayleigh={2}
          mieCoefficient={0.005}
          mieDirectionalG={0.8}
          sunPosition={[100, 10, 100]} // Sun position adjusted
        />
        <ambientLight position={[100, 10, 100]} intensity={5} />
        <directionalLight position={[100, 10, 100]} intensity={15} />
        <spotLight position={[10, 0, 0]} intensity={10} />
        <CustomText position={[0, 30, 0]} color='#ffffff'>
          Innovatia 3.0
        </CustomText>
        <Ocean />
        <OrbitControls
          maxPolarAngle={Math.PI * 0.495}
          target={[0, 10, 0]}
          minDistance={40}
          maxDistance={200}
          onUpdate={(controls) => {
            if (controls.object.position.y < minY) {
              controls.object.position.y = minY;
            }
          }}
        />
      </Canvas>
    </div>
  );
};

export default OceanScene;
