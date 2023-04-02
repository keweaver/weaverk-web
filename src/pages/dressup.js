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

      <div className='col-wrapper'>
        <div className="left-col">
          <div className="name">
            <a href="/index">
            <h1>KEL.</h1> <h2>weaver</h2>
            </a>
            <p className='pronouns_lol'>they/them</p>

          </div>

          <div className="links">
            <a href="/research"><li>-- research stuff</li></a>
            <a href="/art"><li>-- art stuff</li></a>
            <a href="/computer"><li>-- computer stuff</li></a>
          </div>
        </div>
        <div className='mid-col'>
            <img src="model.png" alt="cartoon guy with no clothes!" width="600px"></img>
        </div>
        
        <div className='right-col'>
            <Draggable>
                <img src="scarf.png" width="200px"></img>
            </Draggable>
            <Draggable>
                <img src="hat.png" width="150px"></img>
            </Draggable>
            <Draggable>
                <img src="brownhat.png" width="125px"></img>
            </Draggable>
            <Draggable>
                <img src="redgloveone.png" width="115px"></img>
            </Draggable>
                
        </div>
                
        
      </div>

      <footer>
        <div className='flower'>
          <img src="flower1.PNG" height="200px"/>
        </div>
        <h1>made with love and mint tea and copious amounts of help from 
          <a href="https://www.ulabit.dev/"> ula bitinaitis</a> by kel weaver, 2023
        </h1>
        <p>footer joke from a friend: do you know why i dont trust trains?</p>
        <p>they have locomotives!</p>
      </footer>
    </div>

  )
}




