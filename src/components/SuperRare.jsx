// import React from "react";
import Card from "./Card";
import cutm1 from "../assets/cutm1.png";
import cutm2 from "../assets/cutm2.png";
import cutm3 from "../assets/cutm3.png";
import cutm4 from "../assets/cutm4.png";
// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
import {Canvas , useFrame} from '@react-three/fiber'
import {Suspense,useRef} from "react"
import {Circle, Float, OrbitControls, useGLTF} from '@react-three/drei'
import { Carousel } from "react-bootstrap";

export function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Madhusudan.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.pCube1.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube10.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube11.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube2.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube3.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube31.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube32.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube33.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube34.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube35.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube36.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube37.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube38.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube39.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube4.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube40.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube41.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube42.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube43.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube44.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube45.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube46.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube47.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube48.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube49.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube5.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube50.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube51.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube52.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube53.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube54.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube55.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube56.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube57.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube58.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube59.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.pCube6.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube60.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube7.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube8.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.pCube9.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.Mesh175.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.Mesh175_1.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface10.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface100.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface101.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface102.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface103.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface104.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface105.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface106.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface107.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface108.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface109.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface11.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface110.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface111.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface112.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface113.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface114.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface115.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface116.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface117.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface118.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface119.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface12.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface120.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface121.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface122.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface123.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface124.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface125.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface126.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface127.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface128.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface129.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface13.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface130.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface131.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface132.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface133.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface134.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface135.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface136.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface137.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface138.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface139.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface14.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface140.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface141.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface142.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface143.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface144.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface145.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface146.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface147.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface148.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface149.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface15.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface150.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface151.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface152.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface153.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface154.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface155.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface156.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface157.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface158.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface159.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface16.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface160.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface161.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface164.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface165.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface166.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface167.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface168.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface169.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface17.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface170.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface171.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface172.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface173.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface174.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface18.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface19.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface2.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface20.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface21.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface22.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface23.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface24.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface25.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface26.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface27.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface28.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface29.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface3.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface30.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface31.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface32.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface33.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface34.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface35.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface36.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface37.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface38.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface39.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface4.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface40.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface41.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface42.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface43.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface44.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface45.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface46.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface47.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface48.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface49.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface5.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface50.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface51.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface52.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface53.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface54.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface55.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface56.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface57.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface58.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface59.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface6.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface60.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface61.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface62.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface63.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface64.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface65.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface66.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface67.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface68.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface69.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface7.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface70.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface71.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface72.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface73.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface74.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface75.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface76.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface77.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface78.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface79.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface8.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface80.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface81.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface82.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface83.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface84.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface85.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface86.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface87.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface88.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface89.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface9.geometry} material={materials.aiStandardSurface1} />
        <mesh geometry={nodes.polySurface96.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface97.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface98.geometry} material={materials.aiStandardSurface2} />
        <mesh geometry={nodes.polySurface99.geometry} material={materials.aiStandardSurface2} />
      </group>
    </group>
  )
}

export function Model2({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Aryabhatta.glb')
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


export function Model3({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/GTBuilding.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.35, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.77, 2.71, 0.69]}>
        <mesh geometry={nodes.Mesh028.geometry} material={materials.blinn1} />
        <mesh geometry={nodes.Mesh028_1.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface3.geometry} material={materials.blinn1} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.polySurface10.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface11.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface12.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface13.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface14.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface16.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface17.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface18.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface19.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface20.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface21.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface22.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface23.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface24.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface25.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface26.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface27.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface28.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface39.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface40.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface41.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface6.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface7.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface8.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.polySurface9.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.02, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={-0.01}>
        <mesh geometry={nodes.polySurface10001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface11001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface12001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface13001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface14001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface16001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface17001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface18001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface19001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface20001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface21001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface22001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface23001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface24001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface25001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface26001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.Mesh077.geometry} material={materials.lambert2} />
        <mesh geometry={nodes.Mesh077_1.geometry} material={materials['lambert1.001']} />
        <mesh geometry={nodes.Mesh078.geometry} material={materials.lambert2} />
        <mesh geometry={nodes.Mesh078_1.geometry} material={materials['lambert1.001']} />
        <mesh geometry={nodes.polySurface29.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface30.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface31.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface32.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.Mesh083.geometry} material={materials.lambert2} />
        <mesh geometry={nodes.Mesh083_1.geometry} material={materials['lambert1.001']} />
        <mesh geometry={nodes.polySurface34.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface35.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface36.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface37.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface38.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface5001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface6001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface7001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface8001.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.polySurface9001.geometry} material={materials.blinn2} />
      </group>
      <mesh geometry={nodes.pCube4.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh geometry={nodes.Mesh090.geometry} material={materials.blinn2} />
        <mesh geometry={nodes.Mesh090_1.geometry} material={materials['lambert1.001']} />
      </group>
      <mesh geometry={nodes.pCube6.geometry} material={materials.blinn2} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

export function Model4({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Boys Hostel.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.3, 0.7, 0.01]} />
      <group position={[0.6, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.3, 0.7, 0.01]} />
      <group position={[0.3, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.3, 0.25, 0.01]} />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube142.geometry} material={materials['lambert1.001']} position={[-0.01, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube144.geometry} material={materials['lambert1.001']} position={[0.15, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube145.geometry} material={materials['lambert1.001']} position={[0.15, 0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube146.geometry} material={materials['Material.001']} position={[0.3, 0.01, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube147.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube148.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube149.geometry} material={materials['lambert1.001']} position={[0.3, 0.01, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube150.geometry} material={materials['lambert1.001']} position={[0.47, 0.01, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube151.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube152.geometry} material={materials['lambert1.001']} position={[1.25, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube153.geometry} material={materials['lambert1.001']} position={[1.25, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube154.geometry} material={materials['lambert1.001']} position={[1.25, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube155.geometry} material={materials['lambert1.001']} position={[1.25, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube156.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube157.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube158.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube159.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube160.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube161.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube162.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube163.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube164.geometry} material={materials['lambert1.001']} position={[-0.02, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube165.geometry} material={materials['lambert1.001']} position={[-0.02, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube166.geometry} material={materials['lambert1.001']} position={[-0.02, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube167.geometry} material={materials['lambert1.001']} position={[-0.02, 0, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube169.geometry} material={materials['lambert1.001']} position={[0.62, 0.01, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube170.geometry} material={materials['Material.001']} position={[0.92, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube171.geometry} material={materials['lambert1.001']} position={[0.62, 0.01, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube174.geometry} material={materials['Material.001']} position={[1.09, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube176.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube179.geometry} material={materials['lambert1.001']} position={[-0.03, 0.01, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube181.geometry} material={materials['lambert1.001']} position={[-0.03, 0.01, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube182.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube183.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube184.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube185.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube186.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube187.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube188.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube189.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube190.geometry} material={materials['lambert1.001']} position={[-0.01, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube202.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube203.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube232.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube233.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube234.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube235.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube236.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube237.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube238.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube239.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube240.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube241.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube242.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube243.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube244.geometry} material={materials['Material.001']} position={[-0.63, 0.01, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube245.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube246.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube247.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube248.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube249.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube250.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube251.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube252.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube253.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube254.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube255.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube256.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube257.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube258.geometry} material={materials['lambert1.001']} position={[1.23, 0.01, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube260.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube261.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube262.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube263.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube264.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube265.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube266.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube267.geometry} material={materials['lambert1.001']} position={[0.15, 0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube268.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube269.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube270.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube271.geometry} material={materials['lambert1.001']} position={[-0.03, 0.01, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube272.geometry} material={materials['lambert1.001']} position={[0.18, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube273.geometry} material={materials['lambert1.001']} position={[-0.03, 0.01, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube274.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube275.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube276.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube277.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube278.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube279.geometry} material={materials['lambert1.001']} position={[-0.01, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube280.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube281.geometry} material={materials['lambert1.001']} position={[-0.02, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube282.geometry} material={materials['lambert1.001']} position={[1.25, 0.24, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube283.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube284.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube285.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube286.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube287.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube288.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube289.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube290.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube291.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube292.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube293.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube294.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube295.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube297.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube298.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube299.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube300.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube301.geometry} material={materials['lambert1.001']} position={[1.23, 0.01, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube302.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube303.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube304.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube305.geometry} material={materials['lambert1.001']} position={[1.25, -0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube306.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube307.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube308.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube309.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube310.geometry} material={materials['lambert1.001']} position={[0.3, 0.01, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube311.geometry} material={materials['lambert1.001']} position={[0.47, 0.01, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube312.geometry} material={materials['lambert1.001']} position={[0.15, 0.01, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube313.geometry} material={materials['lambert1.001']} position={[0.44, 0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube314.geometry} material={materials['lambert1.001']} position={[0.3, 0.01, 0.13]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube315.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube316.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube317.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube318.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube319.geometry} material={materials['lambert1.001']} position={[0.63, 0.01, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube320.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube321.geometry} material={materials['lambert1.001']} position={[0.62, 0.01, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube322.geometry} material={materials['lambert1.001']} position={[1.09, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube323.geometry} material={materials['lambert1.001']} position={[0.92, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube324.geometry} material={materials['lambert1.001']} position={[0.62, 0.01, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube325.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube327.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube328.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube329.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube331.geometry} material={materials['lambert1.001']} position={[-0.63, 0.01, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube334.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube335.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube336.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube337.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube338.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube339.geometry} material={materials['lambert1.001']} position={[-0.66, -0.01, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube340.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube341.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube342.geometry} material={materials['lambert1.001']} position={[0.91, 0.01, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube343.geometry} material={materials['lambert1.001']} position={[0.71, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube344.geometry} material={materials['lambert1.001']} position={[0.71, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube346.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube347.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube348.geometry} material={materials['Material.001']} position={[1.09, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube349.geometry} material={materials['Material.001']} position={[0.92, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube350.geometry} material={materials['lambert1.001']} position={[1.09, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube351.geometry} material={materials['lambert1.001']} position={[0.92, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube356.geometry} material={materials['lambert1.001']} position={[0.71, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube357.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube358.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube359.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube360.geometry} material={materials['lambert1.001']} position={[0.71, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube361.geometry} material={materials['lambert1.001']} position={[0.91, 0.01, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube363.geometry} material={materials['lambert1.001']} position={[1.11, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube364.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube365.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube366.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube367.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube368.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube369.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube370.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube371.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube372.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube373.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube374.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube375.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube376.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube377.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube378.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube379.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube380.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube381.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube382.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube383.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube384.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube385.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube386.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube387.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube388.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube389.geometry} material={materials['lambert1.001']} position={[-0.53, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube390.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube391.geometry} material={materials['lambert1.001']} position={[-0.14, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube392.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube393.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube394.geometry} material={materials['lambert1.001']} position={[0.72, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube395.geometry} material={materials['lambert1.001']} position={[0.72, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube396.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube397.geometry} material={materials['lambert1.001']} position={[0.72, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube398.geometry} material={materials['lambert1.001']} position={[0.72, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube399.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube400.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube401.geometry} material={materials['lambert1.001']} position={[0.92, 0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube402.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube403.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube404.geometry} material={materials['lambert1.001']} position={[1.12, 0.01, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube405.geometry} material={materials['lambert1.001']} position={[0.92, 0.01, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube406.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube407.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube408.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube409.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube410.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube411.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube412.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube413.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube414.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube415.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube416.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube417.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube418.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube419.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube420.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube421.geometry} material={materials['lambert1.001']} position={[1.13, 0.24, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube422.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube423.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube424.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube425.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube426.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube427.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube428.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube429.geometry} material={materials['lambert1.001']} position={[1.11, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube430.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube431.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube432.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube433.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube434.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube435.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube436.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube437.geometry} material={materials['lambert1.001']} position={[-0.13, 0.24, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube438.geometry} material={materials['lambert1.001']} position={[0.15, 0.25, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube439.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube440.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube441.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube442.geometry} material={materials['lambert1.001']} position={[-0.03, 0.25, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube443.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube444.geometry} material={materials['lambert1.001']} position={[-0.03, 0.25, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube445.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube446.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube447.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube448.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube449.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube450.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube451.geometry} material={materials['lambert1.001']} position={[-0.01, 0.49, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube452.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube453.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube454.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube455.geometry} material={materials['Material.001']} position={[0.92, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube456.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube457.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube458.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube459.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube460.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube461.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube462.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube463.geometry} material={materials['lambert1.001']} position={[1.09, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube464.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube465.geometry} material={materials['Material.001']} position={[1.09, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube466.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube467.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube468.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube469.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube470.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube471.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube472.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube473.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube474.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube475.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube476.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube477.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube478.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube479.geometry} material={materials['lambert1.001']} position={[0.92, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube480.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube481.geometry} material={materials['lambert1.001']} position={[-0.53, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube482.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube483.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube484.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube485.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube486.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube487.geometry} material={materials['lambert1.001']} position={[-0.14, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube488.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube489.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube490.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube491.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube492.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube493.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube494.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube495.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube496.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube497.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube498.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube499.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube500.geometry} material={materials['Material.001']} position={[1.22, 0.25, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube501.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube502.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube503.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube504.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube505.geometry} material={materials['lambert1.001']} position={[1.23, 0.25, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube506.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube507.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube508.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube509.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube510.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube511.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube512.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube513.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube514.geometry} material={materials['Material.001']} position={[0.3, 0.25, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube516.geometry} material={materials['lambert1.001']} position={[0.15, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube517.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube519.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube520.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube521.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube522.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube523.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube524.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube525.geometry} material={materials['lambert1.001']} position={[0.62, 0.25, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube526.geometry} material={materials['lambert1.001']} position={[1.09, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube527.geometry} material={materials['Material.001']} position={[0.92, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube528.geometry} material={materials['lambert1.001']} position={[0.62, 0.25, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube529.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube530.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube531.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube532.geometry} material={materials['Material.001']} position={[-0.63, 0.25, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube534.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube536.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube537.geometry} material={materials['lambert1.001']} position={[0.91, 0.25, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube538.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube539.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube540.geometry} material={materials['lambert1.001']} position={[0.71, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube541.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube542.geometry} material={materials['lambert1.001']} position={[0.71, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube543.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube544.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube545.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube546.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube547.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube548.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube549.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube550.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube551.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube552.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube553.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube554.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube555.geometry} material={materials['lambert1.001']} position={[0.15, 0.25, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube556.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube557.geometry} material={materials['Material.001']} position={[1.09, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube558.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube559.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube560.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube561.geometry} material={materials['lambert1.001']} position={[0.15, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube562.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube563.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube564.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube565.geometry} material={materials['lambert1.001']} position={[-0.03, 0.25, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube566.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube567.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube568.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube570.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube571.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube572.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube573.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube574.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube575.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube576.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube577.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube578.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube579.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube580.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube581.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube582.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube583.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube584.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube585.geometry} material={materials['lambert1.001']} position={[-0.03, 0.25, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube586.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube587.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube588.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube589.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube590.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube592.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube593.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube594.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube595.geometry} material={materials['lambert1.001']} position={[1.23, 0.25, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube596.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube597.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube598.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube599.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube600.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube601.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube603.geometry} material={materials['lambert1.001']} position={[0.3, 0.25, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube604.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube605.geometry} material={materials['lambert1.001']} position={[0.62, 0.25, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube606.geometry} material={materials['lambert1.001']} position={[0.92, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube607.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube608.geometry} material={materials['lambert1.001']} position={[0.63, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube610.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube611.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube612.geometry} material={materials['lambert1.001']} position={[1.25, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube613.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube614.geometry} material={materials['lambert1.001']} position={[-0.01, 0.49, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube615.geometry} material={materials['lambert1.001']} position={[1.22, 0.25, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube616.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube617.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube618.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube619.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube620.geometry} material={materials['lambert1.001']} position={[1.25, 0.23, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube621.geometry} material={materials['lambert1.001']} position={[-0.02, 0.49, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube622.geometry} material={materials['lambert1.001']} position={[-0.66, 0.23, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube623.geometry} material={materials['lambert1.001']} position={[0.62, 0.25, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube624.geometry} material={materials['lambert1.001']} position={[-0.63, 0.25, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube625.geometry} material={materials['lambert1.001']} position={[0.18, 0.25, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube626.geometry} material={materials['lambert1.001']} position={[0.44, 0.25, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube627.geometry} material={materials['lambert1.001']} position={[0.71, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube628.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube629.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube630.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube631.geometry} material={materials['lambert1.001']} position={[0.71, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube632.geometry} material={materials['lambert1.001']} position={[0.91, 0.25, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube633.geometry} material={materials['lambert1.001']} position={[1.11, 0.25, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube638.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube639.geometry} material={materials['lambert1.001']} position={[0.92, 0.25, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube640.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube641.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube642.geometry} material={materials['lambert1.001']} position={[0.72, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube643.geometry} material={materials['lambert1.001']} position={[0.92, 0.25, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube644.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube645.geometry} material={materials['lambert1.001']} position={[0.72, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube646.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube647.geometry} material={materials['lambert1.001']} position={[0.72, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube648.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube649.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube650.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube651.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube652.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube653.geometry} material={materials['lambert1.001']} position={[0.72, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube654.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube655.geometry} material={materials['lambert1.001']} position={[1.12, 0.25, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube656.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube657.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube658.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube659.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube660.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube661.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube662.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube663.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube664.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube665.geometry} material={materials['lambert1.001']} position={[1.11, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube666.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube667.geometry} material={materials['lambert1.001']} position={[1.13, 0.49, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube668.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube669.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube670.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube671.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube672.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube673.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube674.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube675.geometry} material={materials['lambert1.001']} position={[-0.13, 0.49, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube676.geometry} material={materials['Material.001']} position={[0.3, 0.25, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube677.geometry} material={materials['lambert1.001']} position={[0.3, 0.25, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube678.geometry} material={materials['lambert1.001']} position={[-0.03, 0.5, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube679.geometry} material={materials['Material.001']} position={[0.3, 0.5, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube680.geometry} material={materials['lambert1.001']} position={[0.3, 0.5, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube681.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube682.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube683.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube684.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube685.geometry} material={materials['lambert1.001']} position={[0.71, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube686.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube687.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube688.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube689.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube690.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube691.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube692.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube693.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube694.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube695.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube696.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube697.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube698.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube699.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube700.geometry} material={materials['lambert1.001']} position={[-0.01, 0.73, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube701.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube702.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube703.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube704.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube706.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube707.geometry} material={materials['lambert1.001']} position={[0.3, 0.5, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube708.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube709.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube710.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube711.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube712.geometry} material={materials['lambert1.001']} position={[0.72, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube713.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube714.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube715.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube716.geometry} material={materials['Material.001']} position={[1.09, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube717.geometry} material={materials['Material.001']} position={[1.09, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube718.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube719.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube720.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube721.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube722.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube723.geometry} material={materials['lambert1.001']} position={[-0.03, 0.5, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube724.geometry} material={materials['lambert1.001']} position={[0.62, 0.5, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube725.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube726.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube727.geometry} material={materials['lambert1.001']} position={[0.91, 0.5, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube728.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube729.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube730.geometry} material={materials['lambert1.001']} position={[1.09, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube731.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube732.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube733.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube734.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube735.geometry} material={materials['Material.001']} position={[0.3, 0.5, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube736.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube737.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube738.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube739.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube740.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube742.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube743.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube744.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube745.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube746.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube748.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube749.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube750.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube751.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube752.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube753.geometry} material={materials['lambert1.001']} position={[0.92, 0.5, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube754.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube755.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube756.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube757.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube758.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube759.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube760.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube761.geometry} material={materials['lambert1.001']} position={[0.91, 0.5, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube762.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube763.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube764.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube765.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube766.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube767.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube768.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube769.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube771.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube772.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube773.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube774.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube775.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube776.geometry} material={materials['lambert1.001']} position={[0.72, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube777.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube778.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube779.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube780.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube781.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube782.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube783.geometry} material={materials['lambert1.001']} position={[0.15, 0.5, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube784.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube785.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube786.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube787.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube788.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube789.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube790.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube791.geometry} material={materials['lambert1.001']} position={[0.71, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube792.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube793.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube794.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube795.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube796.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube797.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube798.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube799.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube800.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube801.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube802.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube803.geometry} material={materials['lambert1.001']} position={[0.92, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube804.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube805.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube806.geometry} material={materials['lambert1.001']} position={[0.44, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube808.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube809.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube810.geometry} material={materials['lambert1.001']} position={[0.71, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube811.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube812.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube813.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube814.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube815.geometry} material={materials['lambert1.001']} position={[1.09, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube816.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube817.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube818.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube819.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube820.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube821.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube822.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube823.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube824.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube825.geometry} material={materials['lambert1.001']} position={[-0.01, 0.73, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube827.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube828.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube829.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube830.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube831.geometry} material={materials['lambert1.001']} position={[0.15, 0.5, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube832.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube833.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube834.geometry} material={materials['lambert1.001']} position={[0.92, 0.5, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube835.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube836.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube837.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube838.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube839.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube840.geometry} material={materials['lambert1.001']} position={[-0.03, 0.5, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube841.geometry} material={materials['lambert1.001']} position={[0.92, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube842.geometry} material={materials['Material.001']} position={[0.92, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube843.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube844.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube845.geometry} material={materials['lambert1.001']} position={[1.23, 0.5, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube846.geometry} material={materials['lambert1.001']} position={[0.72, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube847.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube848.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube849.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube850.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube851.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube852.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube853.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube854.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube855.geometry} material={materials['lambert1.001']} position={[0.63, 0.5, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube856.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube857.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube858.geometry} material={materials['lambert1.001']} position={[0.15, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube859.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube860.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube861.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube862.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube863.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube864.geometry} material={materials['lambert1.001']} position={[-0.53, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube865.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube866.geometry} material={materials['lambert1.001']} position={[0.62, 0.5, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube867.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube869.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube870.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube871.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube872.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube873.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube874.geometry} material={materials['lambert1.001']} position={[1.22, 0.5, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube875.geometry} material={materials['lambert1.001']} position={[-0.03, 0.5, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube876.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube877.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube878.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube879.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube880.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube881.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube882.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube883.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube884.geometry} material={materials['Material.001']} position={[-0.63, 0.5, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube885.geometry} material={materials['lambert1.001']} position={[1.12, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube886.geometry} material={materials['Material.001']} position={[1.22, 0.5, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube887.geometry} material={materials['lambert1.001']} position={[1.25, 0.47, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube888.geometry} material={materials['lambert1.001']} position={[0.71, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube889.geometry} material={materials['lambert1.001']} position={[1.11, 0.73, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube890.geometry} material={materials['lambert1.001']} position={[0.18, 0.5, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube891.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube892.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube893.geometry} material={materials['lambert1.001']} position={[1.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube894.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube895.geometry} material={materials['lambert1.001']} position={[-0.63, 0.5, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube896.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube897.geometry} material={materials['lambert1.001']} position={[-0.02, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube898.geometry} material={materials['Material.001']} position={[0.92, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube899.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube900.geometry} material={materials['lambert1.001']} position={[0.62, 0.5, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube901.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube902.geometry} material={materials['lambert1.001']} position={[0.72, 0.5, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube903.geometry} material={materials['lambert1.001']} position={[0.62, 0.5, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube904.geometry} material={materials['lambert1.001']} position={[1.25, 0.73, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube905.geometry} material={materials['lambert1.001']} position={[1.23, 0.5, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube906.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube907.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube908.geometry} material={materials['lambert1.001']} position={[1.11, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube909.geometry} material={materials['lambert1.001']} position={[-0.13, 0.73, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube911.geometry} material={materials['lambert1.001']} position={[0.15, 0.5, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube912.geometry} material={materials['lambert1.001']} position={[-0.14, 0.5, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube913.geometry} material={materials['lambert1.001']} position={[-0.66, 0.47, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube914.geometry} material={materials['lambert1.001']} position={[-0.03, 0.74, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube915.geometry} material={materials['lambert1.001']} position={[0.3, 0.74, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube916.geometry} material={materials['Material.001']} position={[0.3, 0.74, 0.39]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube917.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube918.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube919.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube920.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube921.geometry} material={materials['lambert1.001']} position={[0.71, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube922.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube923.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube924.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube925.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube926.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube927.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube928.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube929.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube930.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube931.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube932.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube933.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube934.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube935.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube936.geometry} material={materials['lambert1.001']} position={[-0.01, 0.97, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube937.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube938.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube939.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube940.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube942.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube943.geometry} material={materials['Material.001']} position={[0.3, 0.74, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube944.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube945.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube946.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube947.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube948.geometry} material={materials['lambert1.001']} position={[0.72, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube949.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube950.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube951.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube952.geometry} material={materials['lambert1.001']} position={[1.09, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube953.geometry} material={materials['lambert1.001']} position={[1.09, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube954.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube955.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube956.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube957.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube958.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube959.geometry} material={materials['lambert1.001']} position={[-0.03, 0.74, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube960.geometry} material={materials['lambert1.001']} position={[0.62, 0.74, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube961.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube962.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube963.geometry} material={materials['lambert1.001']} position={[0.91, 0.74, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube964.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube965.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube966.geometry} material={materials['Material.001']} position={[1.09, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube967.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube968.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube969.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube970.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube971.geometry} material={materials['lambert1.001']} position={[0.3, 0.74, -0.14]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube972.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube973.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube974.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube975.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube976.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube978.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube979.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube980.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube981.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube982.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube984.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube985.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube986.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube987.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube988.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube989.geometry} material={materials['lambert1.001']} position={[0.92, 0.74, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube990.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube991.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube992.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube993.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube994.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube995.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube996.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube997.geometry} material={materials['lambert1.001']} position={[0.91, 0.74, -0.81]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube998.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube999.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1000.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1001.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1002.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1003.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1004.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1005.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1007.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1008.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1009.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1010.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1011.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1012.geometry} material={materials['lambert1.001']} position={[0.72, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1013.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1014.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1015.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1016.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1017.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1018.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1019.geometry} material={materials['lambert1.001']} position={[0.15, 0.74, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1020.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1021.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1022.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1023.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube1024.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1025.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1026.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1027.geometry} material={materials['lambert1.001']} position={[0.71, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1028.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1029.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1030.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1031.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1032.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1033.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1034.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1035.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1036.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1037.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1038.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1039.geometry} material={materials['Material.001']} position={[0.92, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1040.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1041.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1042.geometry} material={materials['lambert1.001']} position={[0.44, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1044.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1045.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1046.geometry} material={materials['lambert1.001']} position={[0.71, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1047.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1048.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1049.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1050.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1051.geometry} material={materials['Material.001']} position={[1.09, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1052.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1053.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1054.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1055.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1056.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1057.geometry} material={materials['Material.001']} position={[-0.63, 0.74, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube1058.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1059.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1060.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1061.geometry} material={materials['lambert1.001']} position={[-0.01, 0.97, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1063.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1064.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.56]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1065.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1066.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1067.geometry} material={materials['lambert1.001']} position={[0.15, 0.74, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1068.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1069.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1070.geometry} material={materials['lambert1.001']} position={[0.92, 0.74, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.36, 0.01]} />
      <mesh geometry={nodes.pCube1071.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1072.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1073.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1074.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1075.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1076.geometry} material={materials['lambert1.001']} position={[-0.03, 0.74, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1077.geometry} material={materials['lambert1.001']} position={[0.92, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1078.geometry} material={materials['Material.001']} position={[0.92, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1079.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1080.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1081.geometry} material={materials['lambert1.001']} position={[1.23, 0.74, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1082.geometry} material={materials['lambert1.001']} position={[0.72, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1083.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1084.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1085.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1086.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, -0.07]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1087.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1088.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1089.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1090.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1091.geometry} material={materials['lambert1.001']} position={[0.63, 0.74, -0.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1092.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1093.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1094.geometry} material={materials['lambert1.001']} position={[0.15, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1095.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1096.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1097.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1098.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1099.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1100.geometry} material={materials['lambert1.001']} position={[-0.53, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1101.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1102.geometry} material={materials['lambert1.001']} position={[0.62, 0.74, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1103.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.14]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1105.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, -0.57]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1106.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, 0.68]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1107.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1108.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.98]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1109.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1110.geometry} material={materials['lambert1.001']} position={[1.22, 0.74, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1111.geometry} material={materials['lambert1.001']} position={[-0.03, 0.74, 0.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1112.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1113.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1114.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1115.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1116.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -1.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1117.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1118.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1119.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1120.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube1121.geometry} material={materials['lambert1.001']} position={[1.12, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1122.geometry} material={materials['Material.001']} position={[1.22, 0.74, -0.04]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube1123.geometry} material={materials['lambert1.001']} position={[1.25, 0.72, 0.74]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1124.geometry} material={materials['lambert1.001']} position={[0.71, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1125.geometry} material={materials['lambert1.001']} position={[1.11, 0.97, -0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1126.geometry} material={materials['lambert1.001']} position={[0.18, 0.74, 0.04]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1127.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.34]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1128.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, 0.23]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1129.geometry} material={materials['lambert1.001']} position={[1.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1130.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.82]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1131.geometry} material={materials['lambert1.001']} position={[-0.63, 0.74, -0.78]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1132.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.19]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1133.geometry} material={materials['lambert1.001']} position={[-0.02, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1134.geometry} material={materials['lambert1.001']} position={[0.92, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1135.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1136.geometry} material={materials['lambert1.001']} position={[0.62, 0.74, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1137.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1138.geometry} material={materials['lambert1.001']} position={[0.72, 0.74, 0.91]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1139.geometry} material={materials['lambert1.001']} position={[0.62, 0.74, 0.35]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1140.geometry} material={materials['lambert1.001']} position={[1.25, 0.97, 0.42]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.7, 0.04]} />
      <mesh geometry={nodes.pCube1141.geometry} material={materials['lambert1.001']} position={[1.23, 0.74, 0.27]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube1142.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1143.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1144.geometry} material={materials['lambert1.001']} position={[1.11, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1145.geometry} material={materials['lambert1.001']} position={[-0.13, 0.97, 0.86]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.01, 0.05, 0.03]} />
      <mesh geometry={nodes.pCube1147.geometry} material={materials['lambert1.001']} position={[0.15, 0.74, -0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1148.geometry} material={materials['lambert1.001']} position={[-0.14, 0.74, -0.76]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.1, 0.01]} />
      <mesh geometry={nodes.pCube1149.geometry} material={materials['lambert1.001']} position={[-0.66, 0.72, -0.61]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube1152.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.14]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1153.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, -0.14]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1154.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.08]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1155.geometry} material={materials['lambert1.001']} position={[1.22, 0.01, 0.08]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1156.geometry} material={materials['lambert1.001']} position={[-0.16, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1157.geometry} material={materials['Material.001']} position={[-0.33, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1158.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1159.geometry} material={materials['Material.001']} position={[-0.16, 0.74, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1160.geometry} material={materials['Material.001']} position={[-0.16, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1161.geometry} material={materials['lambert1.001']} position={[-0.16, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1162.geometry} material={materials['Material.001']} position={[-0.33, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1163.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1164.geometry} material={materials['Material.001']} position={[-0.16, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1165.geometry} material={materials['lambert1.001']} position={[-0.16, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1166.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1167.geometry} material={materials['Material.001']} position={[-0.33, 0.25, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1168.geometry} material={materials['Material.001']} position={[-0.33, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1169.geometry} material={materials['Material.001']} position={[-0.16, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1170.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1171.geometry} material={materials['lambert1.001']} position={[-0.16, 0.01, -0.93]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1172.geometry} material={materials['Material.001']} position={[-0.16, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1173.geometry} material={materials['Material.001']} position={[-0.33, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1174.geometry} material={materials['lambert1.001']} position={[-0.33, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1175.geometry} material={materials['lambert1.001']} position={[-0.16, 0.74, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1176.geometry} material={materials['Material.001']} position={[-0.16, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1177.geometry} material={materials['lambert1.001']} position={[-0.16, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1178.geometry} material={materials['Material.001']} position={[-0.33, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1179.geometry} material={materials['lambert1.001']} position={[-0.33, 0.5, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1180.geometry} material={materials['Material.001']} position={[-0.16, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1181.geometry} material={materials['Material.001']} position={[-0.33, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1182.geometry} material={materials['lambert1.001']} position={[-0.33, 0.25, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1183.geometry} material={materials['Material.001']} position={[-0.33, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1184.geometry} material={materials['Material.001']} position={[-0.16, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1185.geometry} material={materials['lambert1.001']} position={[-0.33, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1186.geometry} material={materials['lambert1.001']} position={[-0.16, 0.01, 0.6]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.01, 0.28, 0.01]} />
    </group>
  )
}

export function Model5({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/marinebuilding.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.pCube1.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} scale={[0.24, 0.25, 0.02]} />
      <mesh geometry={nodes.pCube2.geometry} material={materials.Material} position={[0.12, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0.05, 0.05]} />
      <mesh geometry={nodes.pCube3.geometry} material={materials.Material} position={[-0.12, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0.05, 0.05]} />
      <mesh geometry={nodes.pCube4.geometry} material={materials.Material} position={[0, 0.17, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.24, 0.24, 0.02]} />
      <mesh geometry={nodes.pCube5.geometry} material={materials['Material.001']} position={[0, 0, 0.12]} rotation={[-2.87, 0, 0]} scale={[0.24, 0.24, 0]} />
      <mesh geometry={nodes.pCube6.geometry} material={materials.Material} position={[0, 0.08, -0.45]} rotation={[Math.PI / 2, 0, 0]} scale={[0.22, 0.01, 0.22]} />
      <mesh geometry={nodes.pCube8.geometry} material={materials.Material} position={[-0.05, -0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube9.geometry} material={materials['Material.002']} position={[-0.03, -0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube10.geometry} material={materials['Material.002']} position={[0.05, -0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube11.geometry} material={materials['Material.002']} position={[0.07, -0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube12.geometry} material={materials['Material.002']} position={[0.12, -0.01, 0.02]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube13.geometry} material={materials.Material} position={[0.12, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube14.geometry} material={materials['Material.002']} position={[-0.11, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube15.geometry} material={materials['Material.002']} position={[-0.11, -0.01, 0.02]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube16.geometry} material={materials['Material.002']} position={[-0.03, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube17.geometry} material={materials['Material.002']} position={[0.07, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube18.geometry} material={materials['Material.002']} position={[0.05, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube19.geometry} material={materials['Material.002']} position={[-0.05, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube20.geometry} material={materials.Material} position={[-0.05, -0.01, -0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.15, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube21.geometry} material={materials.Material} position={[-0.12, -0.01, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.15, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube22.geometry} material={materials.Material} position={[0.12, -0.01, -0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.15, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube23.geometry} material={materials.Material} position={[-0.05, -0.01, -0.46]} rotation={[Math.PI / 2, 0, 0]} scale={[0.15, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube24.geometry} material={materials['Material.003']} position={[0, -0.04, -0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pCube25.geometry} material={materials['Material.003']} position={[0.01, -0.04, -0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.01]} />
      <mesh geometry={nodes.pTorus1.geometry} material={materials.Material} position={[-0.01, -0.07, -0.07]} rotation={[-Math.PI, 0, 0]} scale={0} />
      <mesh geometry={nodes.pTorus2.geometry} material={materials.Material} position={[0.01, -0.07, -0.07]} rotation={[-Math.PI, 0, 0]} scale={0} />
      <mesh geometry={nodes.pCube26.geometry} material={materials['Material.002']} position={[0.12, -0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube27.geometry} material={materials['Material.002']} position={[-0.05, -0.01, 0.09]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube37.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube38.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube39.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube40.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube41.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube42.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube43.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube44.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube45.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube46.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube47.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube48.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube49.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube50.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube51.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube52.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube53.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube54.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube55.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube56.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube57.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube58.geometry} material={materials['Material.004']} position={[-0.22, 0.15, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube59.geometry} material={materials['Material.004']} position={[-0.22, 0.08, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube60.geometry} material={materials['Material.004']} position={[-0.22, 0.21, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube61.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube62.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube63.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.64]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube64.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube65.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube66.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube67.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube68.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube69.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube70.geometry} material={materials['Material.004']} position={[0.03, 0.21, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube71.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube72.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube73.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube74.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube75.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube76.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube77.geometry} material={materials['Material.004']} position={[0.03, 0.15, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube78.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.02]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube79.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.09]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube80.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube81.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.28]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube82.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.38]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube83.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.47]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
      <mesh geometry={nodes.pCube84.geometry} material={materials['Material.004']} position={[0.03, 0.08, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0.01, 0]} />
    </group>
  )
}

export function Model6({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/MediaBuilding.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.pCylinder25.geometry} material={materials['Material.001']} position={[0.21, 0.17, 3.95]} rotation={[Math.PI / 2, 0, 0]} scale={[0.33, 0.33, 0.34]} />
      <mesh geometry={nodes.pCylinder26.geometry} material={materials['Material.003']} position={[0.21, 0.56, 3.94]} rotation={[Math.PI / 2, 0, 0]} scale={[0.35, 0.35, 0.01]} />
      <mesh geometry={nodes.pCube1187.geometry} material={nodes.pCube1187.material} position={[-0.43, 0.01, 3.89]} rotation={[Math.PI / 2, 0, 0]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1189.geometry} material={nodes.pCube1189.material} position={[-0.43, 0.11, 3.74]} rotation={[-Math.PI, 0, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1190.geometry} material={materials['Material.002']} position={[-0.43, 0.11, 4.04]} rotation={[-Math.PI, 0, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1191.geometry} material={nodes.pCube1191.material} position={[-0.43, 0.21, 3.89]} rotation={[Math.PI / 2, 0, 0]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1192.geometry} material={nodes.pCube1192.material} position={[0.27, 0.01, 4.58]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1193.geometry} material={materials['Material.002']} position={[0.12, 0.11, 4.58]} rotation={[-Math.PI, -1.57, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1194.geometry} material={nodes.pCube1194.material} position={[0.41, 0.11, 4.58]} rotation={[-Math.PI, -1.57, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1195.geometry} material={materials['lambert1.001']} position={[0.27, 0.21, 4.58]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1196.geometry} material={nodes.pCube1196.material} position={[0.27, 0.42, 4.58]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1197.geometry} material={nodes.pCube1197.material} position={[0.41, 0.32, 4.58]} rotation={[-Math.PI, -1.57, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1198.geometry} material={materials['Material.002']} position={[0.12, 0.32, 4.58]} rotation={[-Math.PI, -1.57, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1199.geometry} material={materials['Material.002']} position={[-0.43, 0.32, 4.04]} rotation={[-Math.PI, 0, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1200.geometry} material={nodes.pCube1200.material} position={[-0.43, 0.32, 3.74]} rotation={[-Math.PI, 0, 0]} scale={[0.98, 0.21, 0.01]} />
      <mesh geometry={nodes.pCube1201.geometry} material={nodes.pCube1201.material} position={[-0.43, 0.42, 3.89]} rotation={[Math.PI / 2, 0, 0]} scale={[0.98, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1202.geometry} material={materials['Material.002']} position={[-0.92, 0.22, 3.89]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.41, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1203.geometry} material={materials['Material.002']} position={[0.27, 0.22, 5.06]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.41, 0.28, 0.01]} />
      <mesh geometry={nodes.pCube1209.geometry} material={materials['window mat']} position={[-0.2, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1210.geometry} material={materials['window mat']} position={[-0.2, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1211.geometry} material={materials['window mat']} position={[-0.2, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1212.geometry} material={materials['window mat']} position={[-0.2, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1213.geometry} material={materials['window mat']} position={[-0.3, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1214.geometry} material={materials['window mat']} position={[-0.3, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1215.geometry} material={materials['window mat']} position={[-0.3, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1216.geometry} material={materials['window mat']} position={[-0.3, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1217.geometry} material={materials['window mat']} position={[-0.39, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1218.geometry} material={materials['window mat']} position={[-0.39, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1219.geometry} material={materials['window mat']} position={[-0.39, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1220.geometry} material={materials['window mat']} position={[-0.39, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1221.geometry} material={materials['window mat']} position={[-0.5, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1222.geometry} material={materials['window mat']} position={[-0.5, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1223.geometry} material={materials['window mat']} position={[-0.5, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1224.geometry} material={materials['window mat']} position={[-0.5, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1225.geometry} material={materials['window mat']} position={[-0.62, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1226.geometry} material={materials['window mat']} position={[-0.62, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1227.geometry} material={materials['window mat']} position={[-0.62, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1228.geometry} material={materials['window mat']} position={[-0.62, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1229.geometry} material={materials['window mat']} position={[-0.72, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1230.geometry} material={materials['window mat']} position={[-0.72, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1231.geometry} material={materials['window mat']} position={[-0.72, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1233.geometry} material={materials['window mat']} position={[-0.82, 0.07, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1234.geometry} material={materials['window mat']} position={[-0.82, 0.17, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1235.geometry} material={materials['window mat']} position={[-0.82, 0.27, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1236.geometry} material={materials['window mat']} position={[-0.82, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1237.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1238.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1239.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1240.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1241.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1242.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1243.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1244.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1245.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1246.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1247.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1248.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1249.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1250.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1251.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1252.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1253.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1254.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1255.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1256.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1257.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1258.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1259.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1260.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1261.geometry} material={materials['window mat']} position={[0.11, 0.36, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1262.geometry} material={materials['window mat']} position={[0.11, 0.27, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1263.geometry} material={materials['window mat']} position={[0.11, 0.17, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1264.geometry} material={materials['window mat']} position={[0.11, 0.07, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1265.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1266.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1267.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1268.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1269.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1270.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1271.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.77]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1272.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1273.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1274.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.87]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1275.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1276.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.97]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1277.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1278.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1279.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1280.geometry} material={materials['window mat']} position={[0.42, 0.36, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1281.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1282.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1283.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1284.geometry} material={materials['window mat']} position={[0.42, 0.27, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1285.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1286.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1287.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1288.geometry} material={materials['window mat']} position={[0.42, 0.17, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1289.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1290.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1291.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.55]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1292.geometry} material={materials['window mat']} position={[0.42, 0.07, 4.66]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube1293.geometry} material={materials['window mat']} position={[-0.82, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1294.geometry} material={materials['window mat']} position={[-0.72, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1295.geometry} material={materials['window mat']} position={[-0.62, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1296.geometry} material={materials['window mat']} position={[-0.5, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1297.geometry} material={materials['window mat']} position={[-0.39, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1298.geometry} material={materials['window mat']} position={[-0.3, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1299.geometry} material={materials['window mat']} position={[-0.2, 0.36, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1300.geometry} material={materials['window mat']} position={[-0.2, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1301.geometry} material={materials['window mat']} position={[-0.3, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1302.geometry} material={materials['window mat']} position={[-0.39, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1303.geometry} material={materials['window mat']} position={[-0.2, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1304.geometry} material={materials['window mat']} position={[-0.3, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1305.geometry} material={materials['window mat']} position={[-0.5, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1306.geometry} material={materials['window mat']} position={[-0.2, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1307.geometry} material={materials['window mat']} position={[-0.39, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1308.geometry} material={materials['window mat']} position={[-0.3, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1309.geometry} material={materials['window mat']} position={[-0.39, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1310.geometry} material={materials['window mat']} position={[-0.5, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1311.geometry} material={materials['window mat']} position={[-0.5, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1312.geometry} material={materials['window mat']} position={[-0.62, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1313.geometry} material={materials['window mat']} position={[-0.62, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1314.geometry} material={materials['window mat']} position={[-0.72, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1315.geometry} material={materials['window mat']} position={[-0.82, 0.27, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1316.geometry} material={materials['window mat']} position={[-0.72, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1317.geometry} material={materials['window mat']} position={[-0.62, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1318.geometry} material={materials['window mat']} position={[-0.72, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1319.geometry} material={materials['window mat']} position={[-0.82, 0.17, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1320.geometry} material={materials['window mat']} position={[-0.82, 0.07, 3.74]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
      <mesh geometry={nodes.pCube1325.geometry} material={nodes.pCube1325.material} position={[0.34, 0.06, 3.68]} rotation={[Math.PI / 2, 0, 0.54]} scale={[0.1, 0, 0.11]} />
      <mesh geometry={nodes.pCube1326.geometry} material={nodes.pCube1326.material} position={[0.42, 0.06, 3.74]} rotation={[Math.PI / 2, 0, 0.74]} scale={[0.1, 0, 0.11]} />
      <mesh geometry={nodes.pCube1228001.geometry} material={materials['window mat']} position={[-0.73, 0.36, 4.05]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} />
    </group>
  )
}

export function Model7({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/warehouse.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.12, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0, 0]} />
      <group position={[-0.12, 0.03, 0]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.04, 0, 0]} />
      <group position={[-0.12, 0.05, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0, 0]} />
      <group position={[-0.1, 0.03, 0]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.04, 0, 0]} />
      <group position={[-0.11, 0.03, 0]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.04, 0, 0]} />
      <mesh geometry={nodes.pCube2.geometry} material={materials.lambert1} position={[-0.18, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.29, 0, 0.01]} />
      <mesh geometry={nodes.pCube9.geometry} material={materials.lambert1} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube10.geometry} material={materials.lambert1} position={[0.05, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.29, 0, 0.01]} />
      <mesh geometry={nodes.pCube11.geometry} material={materials.lambert1} position={[0.24, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube12.geometry} material={materials.lambert1} position={[0.28, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.29, 0, 0.01]} />
      <mesh geometry={nodes.pCube13.geometry} material={materials.lambert1} position={[0.46, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCube14.geometry} material={materials.lambert1} position={[-0.03, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.05]} />
      <mesh geometry={nodes.pCube15.geometry} material={materials.lambert1} position={[0.05, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.05]} />
      <mesh geometry={nodes.pCube16.geometry} material={materials.lambert1} position={[0.01, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.09, 0.04, 0.01]} />
      <mesh geometry={nodes.pCube17.geometry} material={materials.lambert1} position={[0.01, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0, 0.05]} />
      <mesh geometry={nodes.pCube18.geometry} material={materials.lambert1} position={[0.01, 0.12, 0.01]} rotation={[-Math.PI, 0, 0]} scale={[0.09, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube19.geometry} material={materials.lambert1} position={[0.2, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.05]} />
      <mesh geometry={nodes.pCube20.geometry} material={materials.lambert1} position={[0.28, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.05]} />
      <mesh geometry={nodes.pCube21.geometry} material={materials.lambert1} position={[0.24, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.04, 0.01]} />
      <mesh geometry={nodes.pCube22.geometry} material={materials.lambert1} position={[0.24, 0.09, 0.01]} rotation={[-Math.PI, 0, 0]} scale={[0.08, 0.02, 0.01]} />
      <mesh geometry={nodes.pCube23.geometry} material={materials.lambert1} position={[0.24, 0.04, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.07, 0, 0.08]} />
      <mesh geometry={nodes.pCube24.geometry} material={materials['Material.001']} position={[0.37, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube25.geometry} material={materials['Material.001']} position={[0.13, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0, 0.07]} />
      <mesh geometry={nodes.pCube26.geometry} material={materials['Material.001']} position={[-0.12, 0.1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube27.geometry} material={materials['Material.001']} position={[-0.02, 0.18, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.45, 0, 0.07]} />
      <mesh geometry={nodes.pCube28.geometry} material={materials['Material.001']} position={[0.29, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube29.geometry} material={materials['Material.001']} position={[-0.27, 0.1, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube30.geometry} material={materials.lambert1} position={[-0.26, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube31.geometry} material={materials.lambert1} position={[-0.26, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube32.geometry} material={materials.lambert1} position={[-0.38, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube33.geometry} material={materials.lambert1} position={[-0.52, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube35.geometry} material={materials.lambert1} position={[0.27, 0.14, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube36.geometry} material={materials.lambert1} position={[-0.38, 0.14, -0.02]} rotation={[-Math.PI, 0, 0]} scale={[0.42, 0, 0.07]} />
      <mesh geometry={nodes.pCube37.geometry} material={materials.lambert1} position={[0.27, 0.14, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube38.geometry} material={materials.lambert1} position={[0.08, 0.22, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube39.geometry} material={materials.lambert1} position={[0.08, 0.22, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube40.geometry} material={materials.lambert1} position={[-0.13, 0.2, 0]} rotation={[-Math.PI, 0, -0.57]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube41.geometry} material={materials.lambert1} position={[-0.13, 0.2, 0]} rotation={[-Math.PI, 0, -0.57]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube42.geometry} material={materials.lambert1} position={[-0.18, 0.14, -0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.03]} />
      <mesh geometry={nodes.pCube43.geometry} material={materials.lambert1} position={[0.2, 0.14, -0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.03]} />
      <mesh geometry={nodes.pCube44.geometry} material={materials.lambert1} position={[0, 0.22, -0.06]} rotation={[-Math.PI, -1.57, 0]} scale={[0.17, 0, 0.03]} />
      <mesh geometry={nodes.pCube45.geometry} material={materials.lambert1} position={[0.44, 0.1, -0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.03]} />
      <mesh geometry={nodes.pCube46.geometry} material={materials.lambert1} position={[0.5, 0.06, 0]} rotation={[-Math.PI, 0, 0]} scale={[0.14, 0, 0.03]} />
      <mesh geometry={nodes.pCube47.geometry} material={materials.lambert1} position={[0.53, 0.05, -0.06]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.03]} />
      <mesh geometry={nodes.pCube48.geometry} material={materials.lambert1} position={[-0.52, 0.03, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube49.geometry} material={materials.lambert1} position={[-0.26, 0.03, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube50.geometry} material={materials.lambert1} position={[0.45, 0.03, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube51.geometry} material={materials.lambert1} position={[0.13, 0.1, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0, 0.07]} />
      <mesh geometry={nodes.pCube52.geometry} material={materials.lambert1} position={[0.28, 0.1, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0, 0.07]} />
      <mesh geometry={nodes.pCube53.geometry} material={materials.lambert1} position={[-0.02, 0.18, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.45, 0, 0.07]} />
      <mesh geometry={nodes.pCube54.geometry} material={materials.lambert1} position={[0.13, 0.04, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.14, 0, 0.07]} />
      <mesh geometry={nodes.pCube55.geometry} material={materials.lambert1} position={[-0.52, 0.03, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube56.geometry} material={materials.lambert1} position={[-0.38, 0.03, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube57.geometry} material={materials.lambert1} position={[-0.26, 0.03, -0.65]} rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0, 0.07]} />
      <mesh geometry={nodes.pCube58.geometry} material={materials.lambert1} position={[-0.27, 0.1, -0.65]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube59.geometry} material={materials['Material.001']} position={[-0.18, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube60.geometry} material={materials.lambert1} position={[0.2, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0, 0, 0.01]} />
      <mesh geometry={nodes.pCube61.geometry} material={materials.lambert1} position={[-0.52, 0.09, -0.18]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.17, 0, 0.07]} />
      <mesh geometry={nodes.pCube62.geometry} material={materials.lambert1} position={[-0.52, 0.06, -0.08]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0, 0.07]} />
      <mesh geometry={nodes.pCube63.geometry} material={materials.lambert1} position={[-0.52, 0.06, -0.56]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0, 0.07]} />
      <mesh geometry={nodes.pCube64.geometry} material={materials.lambert1} position={[-0.52, 0.06, -0.44]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0, 0.07]} />
      <mesh geometry={nodes.pCube65.geometry} material={materials.lambert1} position={[-0.52, 0.06, -0.32]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0, 0.07]} />
      <mesh geometry={nodes.pCube66.geometry} material={materials.lambert1} position={[-0.52, 0.06, -0.2]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0, 0, 0.07]} />
      <mesh geometry={nodes.pCylinder1.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.63]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder2.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.63]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder3.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.53]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder4.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.53]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder5.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder6.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.43]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder7.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder8.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.33]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder9.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder10.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder11.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder12.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder13.geometry} material={materials['Material.002']} position={[0.01, 0.22, -0.03]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.pCylinder14.geometry} material={materials['Material.002']} position={[0.01, 0.24, -0.03]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}



export default function SuperRare() {
  // const data = [
  //   {
  //     image: cutm1,
  //     series: "Gloop Series",
  //     title: "Purple Man",
  //     price: 2.99,
  //     tag: 12983,
  //     time: 1,
  //   },
  //   {
  //     image: cutm2,
  //     series: "Gloop Series",
  //     title: "Beige",
  //     price: 2.99,
  //     tag: 12983,
  //     time: 1,
  //   },
  //   {
  //     image: cutm3,
  //     series: "Gloop Series",
  //     title: "Red Man",
  //     price: 2.99,
  //     tag: 12983,
  //     time: 1,
  //   },
  //   {
  //     image: cutm4,
  //     series: "Gloop Series",
  //     title: "Green",
  //     price: 2.99,
  //     tag: 12983,
  //     time: 1,
  //   },
  // ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">LE  Rare Auction</h2>
        <p className="description">
          We will release limited edition NFT's early which will be ok
          bid on via <a href="#">OpenSea</a>.
        </p>
      </div>
      {/* <div className="cards">
        
        <div className="card">
          <Canvas  camera={{ fov:70, position: [0,0,5]}}>
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
        </div>

        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div> */}

      <Carousel className="chinmaya min-vh-60">
        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Madhusudhan</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model2 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Aryabhatta</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model3 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>GTBuilding</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model4 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Hostel</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model5 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Marinebuilding</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model6 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Media Building</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Canvas  camera={{ fov:70, position: [0,0,5]}} className="min-vh-100 min-vw-100">
          {/* this  above line is the for the objct contraol  */}
            <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={2} position={[0,0,2]} />
            <Model7 />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
          </Canvas>
          <Carousel.Caption>
            <h3>Warehouse</h3>
          </Carousel.Caption>
        </Carousel.Item>

        
        
        
      </Carousel>
    </div>
  );
}
