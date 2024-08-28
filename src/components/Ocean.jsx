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
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"; // Import GLTFLoader
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "/textures/ocean.jpg");

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
    [waterNormals, gl.encoding]
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
  const font = useLoader(
    FontLoader,
    "/fonts/Sandy Toes Star Fish_Regular.json"
  );
  const texture = useLoader(THREE.TextureLoader, "/textures/wood.avif");
  const meshRef = useRef();

  useEffect(() => {
    if (texture) {
      texture.wrapT = THREE.RepeatWrapping;
      texture.wrapS = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
    }
  }, [texture]);

  useEffect(() => {
    if (font && meshRef.current) {
      // Compute the bounding box
      const textGeometry = new TextGeometry(children, {
        font,
        size: 20,
        depth: 1,
        curveSegments: 24,
        bevelEnabled: true,
        bevelThickness: 0.3,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 5,
      });
      textGeometry.computeBoundingBox();
      const boundingBox = textGeometry.boundingBox;
      const offset = boundingBox.getCenter(new THREE.Vector3()).negate();
      meshRef.current.position.set(offset.x, 15, -20);
    }
  }, [font, texture, children]);

  const geometry = new TextGeometry(children, {
    font,
    size: 20,
    depth: 1,
    curveSegments: 20,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 0.4,
    bevelOffset: 0,
    bevelSegments: 10,
  });

  return (
    <mesh {...props} ref={meshRef}>
      <bufferGeometry attach='geometry' {...geometry} />
      <meshBasicMaterial attach='material' metalness={0.9} map={texture} />
    </mesh>
  );
};

const ShipModel = () => {
  const gltf = useLoader(
    GLTFLoader,
    "../src/assets/pirate_ship_rigged/scene.gltf"
  );
  return (
    <primitive object={gltf.scene} position={[0, 0, -50]} scale={[2, 2, 2]} />
  );
};

const OctopusModel = () => {
  const gltf = useLoader(
    GLTFLoader,
    "../src/assets/greedy_octopuss_treasure_chest/scene.gltf"
  );

  return (
    <primitive object={gltf.scene} position={[0, 3, 20]} scale={[2, 2, 2]} />
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
        <ambientLight position={[1, 30, 1]} intensity={10} />
        <ShipModel />
        <OctopusModel />
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
