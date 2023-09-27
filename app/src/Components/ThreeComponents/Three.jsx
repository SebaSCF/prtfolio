import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
const Three = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default Three;
