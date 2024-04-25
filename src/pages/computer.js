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
                                <h4>- [] x | README.md</h4>
                            </div>
                            <div className="box-inner">
                                <p>ヾ( • ෴ •*)〴 ヾ( • ෴ •*)〴 ヾ( • ෴ •*)〴 ヾ( • ෴ •*)〴 </p>
                                <p> in march 2024, an older gardener at the annual Boston garden convention asked me my major. i told her, computer science and 
                                    environmental science. "Goodness," she said, "you're not going to put AI in the plants, right?"
                                </p>
                                <p>
                                    i'm currently wondering if everything needs a double
                                </p>
                                <p>   </p>
                                <h4>〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 〈ꆤ⍸ꆤ〉 </h4>
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
                                <h4>- [] x | penguins.py</h4>
                            </div>
                            <div className="box-inner">
                                <h3>penguin tracker</h3>
                                <p>python, influxdb. automatic signal processing & live update dashboards</p><p>for RFID tags 
                                    used on penguins in antartica
                                </p>
                            </div>
                        </div>
                    </Draggable>

                    <Draggable>
                        <div className="box-outer">
                            <div className="box-symbols">
                                <h4>- [] x | deadend.py</h4>
                            </div>
                            <div className="box-inner">
                                <h3>link rot mapping</h3>
                                <p>python. crawler that detects link rot. 
                                </p>
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
                                <p>java, java gui. load, transform, save images</p>
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
                <h1>made with love and mint tea by kel weaver, 2023
                </h1>
                <p>footer joke from a friend: do you know why i dont trust trains?</p>
                <p>they have locomotives!</p>
            </footer>
        </div>

    )
}




