import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';

import React, { useEffect, useState } from 'react';

const fiddlejokes = [
  "if i could play violin, id know how to read.",
  "noone swears if you spill beer on a fiddle.",
  "its the nut holding the bow.",
  "you cant play violin barefoot.",
  "violin has strings, a fiddle has strangs.",
  "there are very few violinists with a mullet.",
  "its a matter of style. if you have style, its a fiddle.",
  "about five thousand dollars.",
  "When you are buying one, its a fiddle. When you are selling one, its a violin.",
  "if youre playing the violin, you gotta actually sound good."
]

const crochet = [
  "badcrochetglove.jpg",
  "crochetfriendglove.jpg",
  "crochetgloves.jpg"
]

const tulipGif = [
  "tulipdigital.gif",
  "inverse_tulip.gif"
]

const fpx = [
  "0px",
  "150px"
]

const artworks = [
  "underpaint.jpg",
  "jars.PNG",
  "jar1.jpg",
  "jar2.jpg",
  "jar3.jpg",
  "jar4.jpg"
]

var num = 0;
var anum = 0;
var tulip_num = 0;
var f_num = 0; 
const randomFiddleJoke = () => {
  return fiddlejokes[Math.floor(Math.random() * fiddlejokes.length)];
}

const inter = Inter({ subsets: ['latin'] })

const fps = [
  "fps1.png",
  "fps2.png",
  "fps3.png",
  "fps4.png",
  "fps5.png",
  "fps6.png",
  "fps7.png",
  "fps8.png",
  "fps9.png"
];

var num = 0;

export default function Home() {
  const [fpsN, setFps] = useState("fps1.png");
  const [art, setArt] = useState("underpaint.jpg");
  const [fiddleJoke, setFiddleJoke] = useState();
  const [crochetPic, setCrochet] = useState();
  const [tulip, setTulip] = useState();
  const [fishpx, setFishPx] = useState("0px");


  useEffect(() => setFiddleJoke(randomFiddleJoke()), [])
  const changeRandomFiddleJoke = () => {
    const randomJoke = randomFiddleJoke();
    setFiddleJoke(randomJoke);
  };

  const changeFps = () => {
    if (num == fps.length) {
      num = 0;
    };
    const curfps = fps[num];
    num = num + 1;
    setFps(curfps);
  };

  const changeArt = () => {
    if (anum == artworks.length) {
      anum = 0;
    };
    const curart = artworks[anum];
    anum = anum + 1;
    setArt(curart);
  };

  const changeCrochet = () => {
    if (num == crochet.length) {
      num = 0;
    };
    const curcrochet = crochet[num];
    num = num + 1;
    setCrochet(curcrochet);
  };

  const changeTulip = () => {
    if (tulip_num == tulipGif.length) {
      tulip_num = 0;
    };
    const curtulip = tulipGif[tulip_num];
    tulip_num = tulip_num + 1;
    setTulip(curtulip);
  };
  
  const changeFishPx = () => {
    setFishPx("150px");
  }

  useEffect(() => {
    changeFps()
    const interval = setInterval(() => {
      changeFps();
    }, 10000000000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    changeTulip()
    const interval = setInterval(() => {
      changeTulip();
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

          <Draggable>
                      <img src="fishWife.jpg" width={fishpx}></img>
              </Draggable>

        </div>

        <div classname="art-mid-col">
          <Draggable>
            <div className="box-outer fiddle">
              <div className="box-symbols">
                <h4>- [] x | fiddle.jpg</h4>
              </div>
              <div className="box-inner">
                <img src="fiddling.jpg" alt="me holding a fiddle!" width="250"></img>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="box-outer fiddle-desc">
              <div className="box-symbols">
                <h4>- [] x | fiddle.jpg</h4>
              </div>
              <div className="box-inner">
                <p> i play the fiddle ! people often ask me what the difference between a fiddle
                  and a violin is. A common answer is <a href="javascript:void(0)" onClick={changeRandomFiddleJoke}>
                    {fiddleJoke}
                  </a >
                </p>
              </div>
            </div>
          </Draggable>
        </div>

        <div classname="art-mid2-col">
          <Draggable>
            <div className="box-outer art-description">
              <div className="box-symbols">
                <h4>- [] x | intro.txt</h4>
              </div>
              <div className="box-inner">
                <h3>
                  nothings more fun than doing something you're bad at
                </h3>
                <p>
                  & theres no such thing as talent
                </p>
                <p>view my artwork <a href="\gallery">here</a>!!</p>
              </div>
            </div>
          </Draggable>


          <Draggable>
            <div className="box-outer tulip">
              <div className="box-symbols">
                <h4>- [] x | tulip.gif</h4>
              </div>
              <div className="box-inner">
                <a href="javascript:void(0)" onClick={changeTulip}>
                  <img src={tulip} width="150"></img>
                </a>
              </div>
            </div>
          </Draggable>

          <div className='smaller-stuff'>
            <Draggable>
              <div className="box-outer">
                <div className="box-symbols">
                 <h4>- [] x | gallery.psd</h4>
                </div>
                <div className="box-inner">
                  <a href="/gallery">
                    <img src="margot.jpg" width="300"></img>
                </a>
                </div>
              </div>
            </Draggable>

            <div className='stacked'>
              <Draggable>
                <div className="box-outer fish">
                  <div className="box-symbols">
                    <h4>- [] x | fish.img</h4>
                  </div>
                  <div className="box-inner">
                    <a href="javascript:void(0)" onClick={changeFishPx}>
                      <img src="fish.gif" width="150"></img>
                    </a>
                  </div>
                </div>
              </Draggable>

              

              <Draggable>
                <div className="box-outer radio">
                  <div className="box-symbols">
                    <h4>- [] x | radio.txt</h4>
                  </div>
                  <div className="box-inner">
                    <p>
                      i run a radio show (currently at 2pm eastern time every monday) on WRBB 104.9FM.
                      called front porch storytelling, it's a weekly hour long show on the history, stories, and
                      evolution of old-time to bluegrass to country music, and other country subgenres! here's some fliers i've made
                      for the show- feel free to click through them to get an idea of what i talk to myself about for an hour every week {'>>>>'}
                    </p>

                  </div>
                </div>
              </Draggable>
            </div>

          </div>
        </div>

        <div className='art-right-col'>
          <Draggable>
            <div className="box-outer radio-img">
              <div className="box-symbols">
                <h4>- [] x | radio.mp4</h4>
              </div>
              <div className="box-inner">
                <a href="javascript:void(0)" onClick={changeFps}>
                  <img src={fpsN} width="300"></img>
                </a>
              </div>
            </div>
          </Draggable>

          <Draggable>
            <div className="box-outer crochet">
              <div className="box-symbols">
                <h4>- [] x | crochet.txt</h4>
              </div>
              <div className="box-inner">
                <p>
                  ive been working on crochet for a while! my learning curve is more like a
                  learning ant hill- i am pretty slow at improvement.
                </p>
                <a href="/dressup">
                  view my crochet
                </a>
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




