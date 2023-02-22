import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';

import React, { useEffect, useState } from 'react';


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
        </div>

        <Draggable>
              <div className="box-outer">
                <div className="box-symbols">
                  <p>- [] x | gallery</p>
                </div>
                <div className="box-inner">
                </div>
              </div>
        </Draggable>
      </div>



    </div>


  )
}




