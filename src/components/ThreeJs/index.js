import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { AsciiEffect } from './AEffect.js';
import { TrackballControls } from './Track.js';
import styled from 'styled-components'

const Canvas = styled.div`
`

export default class ThreeD extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===

    var camera, controls, scene, renderer, effect;

    var sphere, plane;

    var start = Date.now();

    init();
    animate();

    function init() {
      console.log('init')

      let width = window.innerWidth / 2;
      let height =  window.innerHeight / 2;

      camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
      camera.position.y = 150;
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0, 0, 0 );

      var light = new THREE.PointLight( 0xffffff );
      light.position.set( 500, 500, 500 );
      scene.add( light );

      var light = new THREE.PointLight( 0xffffff, 0.25 );
      light.position.set( - 500, - 500, - 500 );
      scene.add( light );

      sphere = new THREE.Mesh( new THREE.SphereBufferGeometry( 160, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
      scene.add( sphere );

      // Plane

      plane = new THREE.Mesh( new THREE.PlaneBufferGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
      plane.position.y = - 200;
      plane.rotation.x = - Math.PI / 2;
      scene.add( plane );

      renderer = new THREE.WebGLRenderer();
      renderer.setSize( width, height );

      effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
      effect.setSize( width, height);
      effect.domElement.style.color = 'white';
      effect.domElement.style.backgroundColor = 'black';

      // Special case: append effect.domElement, instead of renderer.domElement.
      // AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.



      const container = document.getElementById('canvas')
      console.log('container', container)

      container.appendChild( effect.domElement );

      controls = new TrackballControls( camera, effect.domElement );

      //

      window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {
      let width = window.innerWidth / 2;
      let height =  window.innerHeight / 2;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize( width, height );
      effect.setSize( width, height );

    }

    //

    function animate() {

      requestAnimationFrame( animate );

      renderScene();

    }

    function renderScene() {

      var timer = Date.now() - start;

      sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;

      controls.update();

      effect.render( scene, camera );

    }

    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    console.log('threeD')
    return (
      <Canvas>
      <div />
      </Canvas>
    )
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
