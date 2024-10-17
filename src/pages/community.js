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
            <form action="/url" method="GET">
                <p>Please enter your first and last name:</p>
                <input type="text" placeholder="John"></input>
            </form>
            </div>
            <footer>
                <div className='flower'>
                    <img src="flower1.PNG" height="200px" />
                </div>
                <h1>made with love and by kel weaver, 2023
                </h1>
                <p>footer joke from a friend: do you know why i dont trust trains?</p>
                <p>they have locomotives!</p>
            </footer>
        </div>

    )
}




