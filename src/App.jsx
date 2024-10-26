import {Canvas} from "@react-three/fiber";
import React from 'react';
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";

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
    intensity={25.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0.5} // smoothness of the luminance threshold. Range is [0, 1]
    />
   </EffectComposer>
    </Canvas>
  );  
};
 

export default App