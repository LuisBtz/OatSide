import React, { Component} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import styled from 'styled-components'


class RenderCarton extends Component {
	componentDidMount() {
		// === THREE.JS CODE START ===
		var mixer;

		var gltfLoader = new GLTFLoader();
		var scene = new THREE.Scene();
		
		var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 0, 0, 2 );

		var renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		this.mount.appendChild( renderer.domElement );

		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xa6a6a6 );
		hemiLight.position.set( 0, 20, 0 );
		scene.add( hemiLight );

        var dirLight = new THREE.DirectionalLight( 0xffffff,0.09 );
        dirLight.position.set( - 3, 10, -10 );
        scene.add( dirLight );
        
        var dirLight2 = new THREE.DirectionalLight( 0xffffff ,0.09);
        dirLight2.position.set( 3, 10, -10 );
        scene.add( dirLight2 );

		gltfLoader.load( '/OatSideCarton_Animated.gltf', gltf => {
            gltf.scene.rotation.y +=Math.PI/2.5;
            gltf.scene.position.y = -2;
            gltf.scene.scale.set(3.5,3.5,3.5); // Size
			scene.add( gltf.scene );

			mixer = new THREE.AnimationMixer( gltf.scene );
			mixer.clipAction( gltf.animations[0] ).play();

		} );


		const controls = new OrbitControls( camera, renderer.domElement );
        controls.update();
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.maxPolarAngle= Math.PI / 2.5
        controls.minPolarAngle= Math.PI / 2.5

		const clock = new THREE.Clock();

		function animate() {

			requestAnimationFrame( animate );

			var delta = clock.getDelta();

			if ( mixer ) mixer.update( delta );

			renderer.render(scene,camera);
            controls.update();

		}

		animate();

		// === THREE.JS CODE END ===

	}

	render() {
		return (
			<>
				<Render ref={ref => (this.mount = ref)} />
				<Text dangerouslySetInnerHTML={{ __html: this.props.data }} />
            </>
		)
	}

}

const Render = styled.div`
	z-index: 5;
	position: relative;
`

const Text = styled.h1`
position: absolute;
top: 80%;
left: 50%;
transform: translateX(-50%);
width: 40%;
text-align: center;
margin: 0px auto 0 auto;
font-size: 2.5vw;
i, em, strong {
    font-family: var(--akMed)
}

@media (max-width: 740px) {
    font-size: 1.5rem;
    width: 90%;
}

`


export default RenderCarton