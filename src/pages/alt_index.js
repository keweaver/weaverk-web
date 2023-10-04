import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';

import React, { useEffect, useState } from 'react';
const artworks = [
      "turnipno1.jpg",
      "turnipno2.jpg",
      "house2.jpg",
      "print1.jpg",
      "print2.jpg",
      "jar1.jpg",
      "jar2.jpg",
      "jar3.jpg",
      "jar4.jpg",
      "faces.jpg",
      "underpaint.jpg"
    ]

export default function Home() {

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="globals.css" />
        <title>ke.weaver</title>

        <meta name="intro page to my website" content="web-home"></meta>
        <meta name="ke.weaver" content="ke.weaver"></meta>
      </Head>

      <div classname="col-wrapper">
        <div className="left-col">
          <div className="name">
            <a href="/index">
              <h1>kel.</h1> <p>weaver</p>
            </a>
          </div>

          <p className="art_button">forward</p>
          <p className="art_button">backward</p>

        </div>
        
      <div classname="gal">
            <p>welcome !</p>
            <Draggable>
            <div className="box-outer welcome">
              <div className="box-symbols">
                <h4>- [] x | keleats.rocks</h4>
              </div>
              <div className="">
                  <a href="/research"><li>&gt;research stuff</li></a>
                  <a href="/art"><li>&gt;art stuff</li></a>
                  <a href="/community"><li>&gt;computer stuff</li></a>
              </div>
            </div>
          </Draggable>

          <Draggable>
                <img src="house.jpg" width="500"></img>
          </Draggable>
      </div>
        
      </div>
    </div>
  )
}




