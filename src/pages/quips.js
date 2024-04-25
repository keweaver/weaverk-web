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
        <link rel="icon" type="image/x-icon" href="bud.ico"></link>

        <meta name="intro page to my website" content="web-home"></meta>
        <meta name="ke.weaver" content="ke.weaver"></meta>
      </Head>

      <Draggable>
        <div className="box-outer languages">
            <div className="box-symbols">
                <h4>- [] x | languages.py</h4>
            </div>
            <div className="box-inner">
                <p>some languages that ive worked in ....</p>
                <h4>java</h4>
                                
                </div>
            </div>
      </Draggable>

      <Draggable>
        <div className="box-outer languages">
                <div className="box-symbols">
                    <h4>- [] x | languages.py</h4>
                </div>
                <div className="box-inner">
                    <p>some languages that ive worked in ....</p>
                    <h4>java</h4>
                                    
                </div>
            </div>
      </Draggable>

      <Draggable>
      <div className="box-outer languages">
            <div className="box-symbols">
                <h4>- [] x | languages.py</h4>
            </div>
            <div className="box-inner">
                <p>some languages that ive worked in ....</p>
                <h4>java</h4>
                                
                </div>
            </div>
      </Draggable>
    </div>
  )
}




