
import React, { Suspense, useStat, useRef } from 'react'
import {
    Canvas,
    useLoader,
    useFrame,
    extend,
    useThree
  } from "react-three-fiber";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import DuckModel from '../models/duck-model.glb';

extend({ OrbitControls });

function Duck() {
    const gltf = useLoader(GLTFLoader, DuckModel)
    return <primitive object={gltf.scene} position={[0, 0, 0]} />
  }


function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
    )
  }

  const CameraControls = () => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls class.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
  
    const {
      camera,
      gl: { domElement }
    } = useThree();
  
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame(state => controls.current.update());
    return (
      <orbitControls
        autoRotate
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
        maxAzimuthAngle={Math.PI1}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Math.PI}
        minPolarAngle={0}
      />
    );
  };
  
  

function Model() {
    return (
        <div style={{ position: "relative", padding: '25%', width: "100%", height: "500px" }}>
            <Canvas >
                {/* <OrbitControls/> */}
                <CameraControls />
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.9} />
                <Suspense fallback={<Box />}><Duck rotation={[Math.PI / 2, 0, 0]}/></Suspense>
            </Canvas>
        </div>
    );
  }

export default Model;

