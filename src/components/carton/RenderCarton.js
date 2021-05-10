import React, {useState, useRef, useEffect} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import styled from 'styled-components'


extend({OrbitControls})




const OatSide = () => {
    const [model, setModel] = useState()

    useEffect(() => {
        new GLTFLoader().load("/OatSideCarton.gltf", setModel)
    },[])



    return model? <primitive object={model.scene} position={[0, -0.29, 0]} rotation={[0.2,1,0]} /> : null
    
}

const Controls = () => {
    const orbitRef = useRef()
    const {camera, gl } = useThree()

    useFrame(()=> { orbitRef.current.update() })


    return(
        <orbitControls 
            autoRotate
            autoRotateSpeed={6}
            enableZoom={false}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            args={[camera, gl.domElement]}
            ref={orbitRef}
        />
    )
}




const RenderCarton = ({data}) => (
    <Container>
        <Canvas
        camera={{ position: [0, 0, 0.42] }}
        onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
            <Controls />
            {/* <Box /> */}
            {/* <Plane /> */}
            <OatSide />
        </Canvas>
        <Text dangerouslySetInnerHTML={{ __html: data }} />
    </Container>
)

const Container = styled.div`
position: relative;
`

const Text = styled.h1`
width: 500px;
text-align: center;
margin: 0px auto 0 auto;

i, em, strong {
    font-family: var(--akMed)
}

`


export default RenderCarton