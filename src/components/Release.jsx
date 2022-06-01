import React from "react";
import {Suspense,useRef} from "react"
import { BsArrowRight } from "react-icons/bs";
import release2 from "../assets/cutm1.png";
import Card from "./Card";
import {Canvas , useFrame} from '@react-three/fiber'
import {Circle, Float, OrbitControls, useGLTF} from '@react-three/drei'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Aryabhatta.glb')


  // useFrame( ({clock})=>{
  //             group.current.rotation.x = clock.getElapsedTime()
  // }) // this line is for the auto rotation
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh014.geometry} material={materials.pasted__Gray} />
        <mesh geometry={nodes.Mesh014_1.geometry} material={materials.pasted__Wight} />
        <mesh geometry={nodes.Mesh014_2.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube35.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube37.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube38.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube39.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube40.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube41.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube46.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube47.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube48.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube49.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube50.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.pasted__pCube51.geometry} material={materials.lambert1} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh.geometry} material={materials.Wight} />
        <mesh geometry={nodes.Mesh_1.geometry} material={materials.Gray} />
        <mesh geometry={nodes.Mesh_2.geometry} material={materials.lambert1} />
      </group>
      <mesh geometry={nodes.pCube35.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube37.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube38.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube39.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube40.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube41.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube43.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube46.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube47.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube48.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube49.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube50.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube51.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh027.geometry} material={materials.Wight} />
        <mesh geometry={nodes.Mesh027_1.geometry} material={materials.Gray} />
        <mesh geometry={nodes.Mesh027_2.geometry} material={materials.lambert1} />
      </group>
      <mesh geometry={nodes.pCube52.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube53.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube54.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube56.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube57.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder1.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane2.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane3.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane4.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane5.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane6.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane7.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane8.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane9.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane10.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane11.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane12.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane13.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane14.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane15.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane16.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane18.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane19.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane20.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane22.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane23.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane24.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane25.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane26.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane27.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane28.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane29.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane30.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane31.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane32.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane33.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane34.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane35.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane36.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane37.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane38.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane39.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane40.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane41.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane42.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane43.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane44.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane45.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane46.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane47.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane48.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane49.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane50.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane51.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane52.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane53.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane54.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane55.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane56.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane57.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane58.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane59.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane60.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane61.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane62.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane63.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane64.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane65.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane66.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane67.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane68.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane69.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane70.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane71.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane72.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane73.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane75.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane76.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane77.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane78.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane79.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane80.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane81.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane82.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane83.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane84.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane85.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane86.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane87.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane88.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane89.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane90.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane91.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane92.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane93.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane94.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane95.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane96.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane97.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane98.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane99.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane100.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane101.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane102.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane103.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane104.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane105.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane106.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane107.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane108.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane109.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane110.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane111.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane112.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane113.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane114.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane115.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane116.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane117.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane118.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane119.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane120.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane121.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane122.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane123.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane124.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane125.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane126.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane127.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane128.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane129.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane130.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane131.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane132.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane133.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane134.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane135.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane136.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane137.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane138.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane139.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane140.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane141.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane142.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane143.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane144.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane145.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane146.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane147.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane148.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane149.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane150.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane151.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane152.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane153.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane154.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane155.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane156.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane157.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane158.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane159.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane160.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane161.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane162.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane163.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane164.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane165.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane166.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane167.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane168.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane169.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane170.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane171.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane172.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane173.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane174.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane175.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane176.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane177.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane178.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane179.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane180.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane181.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane182.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane183.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane184.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane185.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane186.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane187.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane188.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane189.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane190.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane191.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane192.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane193.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane194.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane195.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane196.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane197.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane198.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane199.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane200.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane201.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane202.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane203.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane204.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane205.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane206.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane207.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane208.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane209.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane210.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane212.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane213.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane214.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane215.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane217.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane218.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane219.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane220.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane222.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane223.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane224.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane225.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane227.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane228.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane229.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane230.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane232.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane233.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane234.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane235.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane237.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane238.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane239.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane240.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane242.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane243.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane244.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane245.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane246.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane247.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane248.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane249.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane250.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane251.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane252.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane253.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane254.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane255.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane256.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane257.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane259.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane260.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane261.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane262.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane263.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane264.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane265.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane266.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane267.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane268.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane269.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pPlane270.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube59.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
        <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            We will released four limited edition NFTs early which will be bid on ok 
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only few of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">5% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          
          <Canvas  camera={{ fov:70, position: [0,0,5]}}>

              {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
              <ambientLight />
              <directionalLight intensity={2} position={[0,0,2]} />
              <Model />
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

            </Suspense>

          </Canvas>
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          {/* <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          /> */}

          
          <Canvas  camera={{ fov:70, position: [0,0,5]}}>

              {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
              <ambientLight />
              <directionalLight intensity={2} position={[0,0,2]} />
              <Model />
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

            </Suspense>

          </Canvas>
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            We have released four limited edition NFTs early which can be bid on
            via <a href="#">OpenSea</a>
          </p>
          <p className="description">
            There will be the only few of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">5% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}