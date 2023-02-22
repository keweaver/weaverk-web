import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';

import React, { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

const testimonials = [
  "[kel made me rediscover the joys of life through cornbread & honeybutter -duncan]",
  "[kel is consistently calm, coolheaded, creative, compassionate, combining code causing chaos, choosing ckindness, cooking cookies! -archie]",
  "[[archie wrote a testimonial before me so now i have to best him...] if you haven't seen kel just picture a highland cow that winks really slowly and can play a MEAN fiddle. they won't leave my house (help) but that's okay -ula]",
  "[Makes great bread and always makes my day more meow-y :3 meowmeowmeowmeow <3]",
  "[KEL stands for: Konstant source of joy, Exceeds my expectations in every endeavor, love of my life. I won't say meow bc i'm not a normie and I meowed b4 it was cool :*^/]",
  "[Billy has nothing to say on the matter, and was overwhelmed by his appreciation for me -kel]",
  "[best roommate ever, mad decorating skills, good hair bleacher, 11/10 human being :D -kristina]",
  "[I am a huge fan of both Kel and the bread they are always baking and then leaving at home. If I was giving a prize for most forgetful I would give it to Kel, but if I had a prize for most kind they would also win. -indigo]",
  "[Kel is walking joy! I would give them my first born child. -isabel]",
  "[big kel fan over here... i've heard they make great bread (they keep forgetting to bring it to my house) and i know they are the most incredible person. 11/10 would recommend-katie :D]",
  "[to know kel is to love them. their kindness and generosity is contagious and it is an absolute joy to be around them. - margot <3]",
  "[meow meow meow, meow meow meow meow. meow! meow meow meow meow meow meow. meow, meow] -meow]",
  "[starting to think that my friends only like me for my baking skills ... -kel]",
  "[kel is an incredible person who I am so honored to call a roommate and friend; forever an important person to me -billy]",
  "[margot here again! kel is a ray of joy! i love them. - margot again]"
];

const randomTest = () => {
  return testimonials[Math.floor(Math.random() * testimonials.length)];
}

export default function Home() {
  const [test, setTestimonial] = useState("abjsd");
  const [gif, setGif] = useState(); 

  useEffect(() => setTestimonial(randomTest()), [])

  useEffect(() => {
    currentGif()
    const interval = setInterval(() => {
      currentGif();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const changeRandomTest = () => {
      // shuffle array and pick random
      const randomTestimonial = randomTest();
      setTestimonial(randomTestimonial);
  };

  const setSunriseGif = () => {
      setGif("morning.gif")
  };
  const setMiddayGif = () => {
    setGif("middaygif.gif")
  };
  const setSunsetGif = () => {
  setGif("sunset.gif")
  };
  const setNightGif = () => {
    setGif("night.gif")
  };

  const currentGif = () => {
    const time = new Date().getHours();
    if (time > 0 && time < 5) {
      setGif("night.gif")
    }
    else if (time >= 5 && time < 7) {
      setGif("morning.gif")
    }
    else if (time >= 7 && time < 17) {
      setGif("middaygif.gif")
    }
    else if (time >= 17 && time < 19) {
      setGif("sunset.gif")
    }
    else if (time >= 19 && time <= 23) {
      setGif("night.gif")
    }
    else {
      setGif("night.gif")
    };
  }

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="globals.css" />
        <title>ke.weaver</title>
        <link rel="icon" type="image/x-icon" href="bud.ico"></link>

        <meta name="intro page to my website" content="web-home"></meta>
        <meta name="ke.weaver" content="ke.weaver"></meta>
      </Head>

      <div className="col-wrapper">
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

        <div className="mid-col">
          <Draggable>
            <div className="box-outer welcome">
              <div className="box-symbols">
                <h4>- [] x | intro.txt</h4>
              </div>
              <div className="box-inner">
                <p>"hello and welcome! im kel. if you want to get to know me , i would love to get to know you . how do
                  you take eggs out the carton ? 
                </p>
                <p>
                  "in less important news, im a computer science and environmental sustainability sciences
                  student at northeastern in boston, massachuesetts (massachuessts? mass). computer science
                  is an incredibly powerful tool and im passionate about making sure it is used correctly.
                  i hope to be able to use coding as tool to generate solutions for sustainability
                  problems . or maybe just fall off the face of the planet in a couple years. you know, 
                  which ever way the biscuit breaks . 
                </p>
                <p>
                  about this website- you can drag and click on a lot of stuff ! all the green links for sure are
                  clickable, you can drag these fake application windows around, and most of the gifs or images can 
                  also be clicked . have fun and know that however much fun you have , i had twice as much fun 
                  making it for you . 
                </p>
              </div>
            </div>
          </Draggable>
          <div className='small-stuff'>
            <Draggable>
              <div className="box-outer testimonial">
                <div className="box-symbols">
                  <p>- [] x | testimonials.txt</p>
                </div>
                <div className="box-inner">
                  <div className="testimonials">
                  <p>
                  click the text below to read a testimonial about me!
                  </p>
                  <a href="javascript:void(0)" onClick={changeRandomTest}>
                    <p>
                    {test}
                    </p>
                    </a >
                  </div>
                </div>
              </div>
            </Draggable>

            <Draggable>
              <div className="box-outer bread">
                <div className="box-symbols">
                  <p>- [] x | bread.exe</p>
                </div>
                <div className="box-inner">
                  <div className="bread-box">
                    <p>try out my <a href="https://docs.google.com/document/d/1qNBZSG3nfc_zMkDL9os0c4fB2IgZKLLWKeex-YcnLKs/edit">bread recipe !!</a></p>
                   
                  </div>
                </div>
              </div>
            </Draggable>

          </div>

        </div>

      

        <div className="right-col">
          <Draggable>
            <div className="box-outer timegraphic">
              <div className="box-symbols">
                <p>- [] x | timegraphic.gif</p>
              </div>
              <div className="box-inner">
                <div className="time-photo">
                  <p>it's currently:
                    <Clock
                      format={'h:mma'}
                      style={{ fontSize: '1.5em' }}
                      ticking={true} /></p>
                      <a href="javascript:void(0)" onClick={setSunriseGif}>morning  - </a >
                      <a href="javascript:void(0)" onClick={setMiddayGif}> midday - </a >
                      <a href="javascript:void(0)" onClick={setSunsetGif}> sunset - </a >
                      <a href="javascript:void(0)" onClick={setNightGif}> nighttime</a >
                      <a href="https://www.google.com/maps/@37.9611691,-78.9007216,3a,90y,24.01h,88.07t/data=!3m8!1e1!3m6!1sAF1QipOF7yEPcXwvPH6tsFTotucRVFJSPHaq4PbmrfHa!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOF7yEPcXwvPH6tsFTotucRVFJSPHaq4PbmrfHa%3Dw203-h100-k-no-pi-0-ya37.999996-ro-0-fo100!7i8704!8i4352">
                        <img src={gif} alt="click me!" />
                      </a>
                  <p>we're glad to know you!</p>
                </div>
              </div>
            </div>
          </Draggable>
          
          <div className='small-stuff'>
          <Draggable>
              <div className="box-outer contact">
                <div className="box-symbols">
                  <p>- [] x | contact.meplease</p>
                </div>
                <div className="box-inner">
                  <p>wanna hire me? look at my <a href="https://github.com/keweaver">github</a>, read my 
                  <a href="KWeaverResume.pdf"> resume</a> , or shoot me an
                  <a href="mailto: weaverelk@gmail.com"> email</a> .</p>
                  
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
        <h1>made with love and mint tea and copious amounts of help from 
          <a href="https://www.ulabit.dev/"> ula bitinaitis</a> by kel weaver, 2023
        </h1>
        <p>footer joke from a friend: do you know why i dont trust trains?</p>
        <p>they have locomotives!</p>
      </footer>
    </div>

  )
}




