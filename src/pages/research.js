import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';

import React, { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })
var num = 0;
const pics = [
    "medraw2.PNG",
    "margotdraw.jpg",
    "love.PNG"
];

export default function Home() {
    const [pic, setPic] = useState("");

    const changePic = () => {
        if (num == pics.length) {
          num = 0; 
        };
        const curpic = pics[num]; 
        num = num + 1; 
        setPic(curpic);
    };

  useEffect(() => {
    changePic()
    const interval = setInterval(() => {
      changePic();
    }, 10000000000);
    return () => clearInterval(interval);
  }, []);
    

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

        <div className='mid-col-research'>
        <Draggable>
            <div className="box-outer research">
              <div className="box-symbols">
                <h4>- [] x | allofmyresearch.txt</h4>
              </div>
              <div className="box-inner">
              <h5>marine animal remote sensing lab</h5>
                <h4>woods hole oceanograpic institute, 2024-current</h4>
                <p>i'm currently working at WHOI's MARS lab under the elusive Dr. Zitterbart. mostly, i'm building a codebase 
                  that allows for flexible, autonomous, and accurate signal detection for RHF transmitters that we stick on 
                  penguins in antartica. 
                </p>
                
                <h5>environmental sensors lab</h5>
                <h4>northeastern univeristy, 2022-2024</h4>
                <p>with the guidance of the incredible Dr. Mueller, I investigated and corrected the effects of environmental 
                  parameters on particulate matter by low-cost air quality sensors. during this project, I wrote a python repo to collect,
                  display, and apply a variety of ML correction models to relevant environemntal data. 
                </p>
                <h5>cognitive neuroimaging lab</h5>
                <h4>montclair state university, 2019-2021</h4>
                <p>under the wonderful PI Dr. Keenan, i was introduced to research through the use of Transcranial Magnetic Stimulation (TMS)
                  for brain mapping. here, i assisted on a variety of projects around central themes of perspective taking,
                  Theory of Mind, object recognition and neuroaesthetics. 
                </p>
                
              </div>
            </div>
          </Draggable>

          
        </div>

        <div className="right-col">

         

        <Draggable>
            <div className="box-outer publications">
              <div className="box-symbols">
                <h4>- [] x | publications.pdf</h4>
              </div>
              <div className="box-inner">
                <h3>Corticospinal Excitability during a Perspective Taking Task as Measured by TMS-Induced Motor Evoked Potentials</h3>
                <p>Citation: Murray E, Brenya J, Chavarria K, Kelly KJ, Fierst A, Ahmad N, Anton C, Shaffer L, Kapila K, Driever L, <mark>Weaver K.</mark>, Dial C, Crawford M, Hartman I, Infantino T, Butler F, Straus A, Walker SL, Balugas B, Pardillo M, Goncalves B, Keenan JP. Corticospinal Excitability during a Perspective Taking Task as Measured by TMS-Induced Motor Evoked Potentials. Brain Sciences. 2021; 11(4):513. https://doi.org/10.3390/brainsci11040513</p>
                <h3>The Effects of Uniforms and their implied Status on Attractiveness.</h3>
                <p>Citation: Brenya, J., Vieira, S., Chavarria, K., <mark>Weaver K.</mark>, Savitska, L., Dial, C., & Keenan, J. P. (Under Review-Accepted with Revisions). The Effects of Uniforms and their implied Status on Attractiveness. Evolutionary Behavioral Sciences</p>
                <h3>Freewill and Awareness: A Transcranial Magnetic Stimulation Study</h3>
                <p>Citation: <mark>Weaver K.</mark>, Soder, H., Yasin, S., McDermott, W., Bismal, K., Rougebec, A., Goldsteen, G., & Keenan, J. P. (2020). Freewill and Awareness: A Transcranial Magnetic Stimulation Study, 125th Annual Eastern Psychological Association, Boston, MA, 33.</p>
              </div>
            </div>
          </Draggable>
          <div>
          
          <Draggable>
            <div className="box-outer pics">
              <div className="box-symbols">
                <h4>- [] x | radio_seal.wav</h4>
              </div>
              <div className="box-inner">
              
                    <img src="seal.jpg" height="250"></img>
              </div>
            </div>
          </Draggable>
          <Draggable>
            <div className="box-outer pics">
              <div className="box-symbols">
                <h4>- [] x | portraits.jpg</h4>
              </div>
              <div className="box-inner">
              <a href="javascript:void(0)" onClick={changePic}>
                    <img src={pic} width="150"></img>
                </a>
              </div>
            </div>
          </Draggable>
          </div>
          
          
          </div>
        </div>
        <footer>
        <div className='flower'>
          <img src="flower1.PNG" height="200px"/>
        </div>
        <h1>made with love and mint tea by kel weaver, 2023
        </h1>
        <p>footer joke from a friend: do you know why i dont trust trains?</p>
        <p>they have locomotives!</p>
      </footer>
    </div>

  )
}




