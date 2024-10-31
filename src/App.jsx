import React, { useRef } from 'react'
import {Canvas , useFrame , useLoader} from "@react-three/fiber";
import "./style.css";
import { OrbitControls , useTexture } from "@react-three/drei";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import * as THREE from "three";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function Cyl() {
  let cyl = useRef(null);
  const tex = useLoader(
    TextureLoader,
    './images.png'
  );


  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.5, 0.5]}>
    <mesh ref={cyl} >
  
    <cylinderGeometry args={[1,1,1,60,60,true]} />

    <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />

  </mesh>
  </group>
  );
}



const App = () => {
  
  return ( 
  <Canvas flat camera={{fov : 35}}>

     <OrbitControls />
  
    <ambientLight  />
    {/* <pointLight position={[0, 0, 10]} intensity={10} /> */}
    <Cyl />
    <EffectComposer>
    <Bloom
    mipmapBlur // Enables or disables mipmap blur.
    intensity={8.0} // The bloom intensity.
    luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.7} // smoothness of the luminance threshold. Range is [0, 1]
    />
   </EffectComposer>
    </Canvas>
  );  
};
 

export default App