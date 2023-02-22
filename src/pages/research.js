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
                <p>when i was around fifteen, i joined the cognitive neuroimaging lab at montclair state university, 
                    under head professor Dr. keenan. our lab used Transcranial Magnetic Stimulation (TMS) to map functions like
                     perspective taking, Theory of Mind, and perception to parts of the brain. 
                     around this time, i also attended lab meetings at the congition and perception lab at New York University
                     for a brief while, focused more on object recognition and neuroaesthetics. unfortunately, my individual 
                     project on art style processing in the default mode network vs. the left occipital cortex was cancelled 
                     due to covid, haha. 
                </p>
                <p>
                    though neuroscience is not my particular passion, i am so grateful to everyone in the 
                     labs (especially Dr. Keenan) for introducing me to research and its processes. i'm now studying 
                     computer science and environmental science, and hope now explore the field of collection, analysis, 
                     and display of environmental data using code. i worked on a project analyzing air quality data from 
                     some low-cost sensors along Cummins Highway in Boston.
                </p>
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

        <div className="right-col">

          <Draggable>
            <div className="box-outer mueller">
              <div className="box-symbols">
                <h4>- [] x | envsensorslab.py</h4>
              </div>
              <div className="box-inner">
                <p>starting around fall of 2022, i worked on a project at Dr. Mueller's <a href="https://www.northeastern.edu/envsensorslab/"> environmental sensors lab</a> here at Northeastern. to summarize , 
                    the city of boston set up a bunch of cheap air quality sensors along a highway 
                    with the goal of knowing how accurate they are and what they can tell the city and 
                    its people about air quality and city design . these sensors had a built in method to 
                    measure pm2.5 data which made an assumption that temp and humidity wouldn't have an effect on the 
                    measurement. Dr. Mueller suspected that this was wrong , since pm2.5 tends to stick together 
                    in certain weather conditions . i helped check out the clarity sensor data, compare it to 
                    a super expensive EPA station over different temp/humidity measurements, and test out 
                    machine learning algorithms to see if there was a better way to correct for environmental noise . 
                    if you have any questions, feel free to reach out ! 
                </p>
              </div>
            </div>
          </Draggable>

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




