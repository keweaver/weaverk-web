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
                    <a href="/">
                        <h1>KEL.</h1> <p>weaver</p>
                    </a>

                    <div className="links">
                        <a href="/research"><li>-- research stuff</li></a>
                        <a href="/art"><li>-- art stuff</li></a>
                        <a href="/computer"><li>-- computer stuff</li></a>
                    </div>

                </div>

                <div classname="tech-mid-col">
                <Draggable>
                        <div className="box-outer languages">
                            <div className="box-symbols">
                                <h4>- [] x | languages.py</h4>
                            </div>
                            <div className="box-inner">
                                <p>some languages that ive worked in ....</p>
                                <h4>java</h4>
                                <h4>python</h4>
                                <h4>SQL</h4>
                                <h4>html</h4>
                                <h4>css</h4>
                                <h4>javascript</h4>
                                <h4>racket but i hate it</h4>
                                <h4>arcGIS it kind of counts</h4>
                            </div>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="box-outer tech">
                            <div className="box-symbols">
                                <h4>- [] x | languages.py</h4>
                            </div>
                            <div className="box-inner">
                                <p>when i get asked why i chose a CS major, i sometimes joke that my dad
                                    showed me too many 'AI Take Over The World' videos and sci-fi movies when I was a kid and it scared
                                    me into wanting to understand what a computer was .
                                </p>
                                <p>
                                    all jokes aside, it is true that i'm not technology's number one fan. while i think it
                                    is fascinating , and while i love the ability to build things and solve problems through programming ,
                                    i believe that technology is an incredibly powerful tool and using it responsibly should be
                                    everyone who is involved's number one concern moving into the future. tech has a lot of potential,
                                    good and bad , and as much passion that goes into inventing new cool tech advancements
                                    needs to go into the evaluation of the impacts of the things that we are creating.
                                </p>
                                <h4>what are you creating ? and do you remember why ? and do you love it ? and will it love you?</h4>
                            </div>
                        </div>
                    </Draggable>


                    
                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | corn.java</h4>
                            </div>
                            <div className="box-inner">
                                <h3>cornmaze runner</h3>
                                <p>java. breadth/depth first search auto generated maze solver</p>
                            </div>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | pshop.java</h4>
                            </div>
                            <div className="box-inner">
                                <h3>my personal photoshop</h3>
                                <p>java, java gui. load, edit, save images</p>
                            </div>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | air.py</h4>
                            </div>
                            <div className="box-inner">
                                <a href="/research"><h3>clarity air quality analysis </h3></a>
                                <p>python, pandas, numpy, sklearn</p>
                            </div>
                        </div>
                    </Draggable>
                </div>

                <div className="tech-mid2-col">

                

                    <div className='tech-small-stuff'>
                    

                   
                    </div>
                </div>

                <div className='tech-right-col'>
                    <Draggable>
                        <div className="box-outer tulip">
                            <div className="box-symbols">
                                <h4>- [] x | sit.gif</h4>
                            </div>
                            <div className="box-inner">
                                <img src="sit.gif" width="250"></img>
                            </div>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | web.js</h4>
                            </div>
                            <div className="box-inner">
                                <a href="/"><h3>this website</h3></a>
                                <p>html, css, javascript, next.js, react</p>
                            </div>
                        </div>
                    </Draggable>

                    


                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | sit.gif</h4>
                            </div>
                            <div className="box-inner">
                                <h3>gardener's pocketbook</h3>
                                <p>SQL + Java frontend database practice of plants, their companions, and how to take care of them</p>
                            </div>
                        </div>
                    </Draggable>
                </div>


            </div>
            <footer>
                <div className='flower'>
                    <img src="flower1.PNG" height="200px" />
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




