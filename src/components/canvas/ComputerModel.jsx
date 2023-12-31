import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/model.gltf");
    const meshRef = React.useRef();
    useFrame(({ clock }) => {
      // Rotate the mesh here
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;  // Adjust the speed as you like
      }
    });
  
    return (
      <mesh ref={meshRef}>
        {/* Hemisphere light for soft global illumination */}
        <hemisphereLight intensity={0.55} groundColor='black' />
        
        {/* Directional light for brighter illumination and shadows */}
        <directionalLight 
          position={[5, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Ambient light for subtle fill light */}
        <ambientLight intensity={0.5} />
        
        {/* MacBook model */}
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.9}
          position={isMobile ? [-0.5, -2, -1] : [-1, -3.2, -1.5]} // Position adjusted
          rotation={[0.8, -0.3, -0.6]}  // Tilted more to the left and adjusted rotation
        />
      </mesh>
    );
  };
  


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
     style={{ pointerEvents: 'none' }}
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
            enableZoom={false}
            enablePan={false}  // Disable panning
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
