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
            <h3>Building</h3>
          </Carousel.Caption>
        </Carousel.Item>

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
            <h3>Building</h3>
          </Carousel.Caption>
        </Carousel.Item>

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
            <h3>Building</h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        
      </Carousel>
    </div>
  );
}
