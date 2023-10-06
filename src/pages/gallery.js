import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Draggable from 'react-draggable'
import Clock from 'react-live-clock';
import Zoom from 'react-medium-image-zoom'

import React, { useEffect, useState } from 'react';
const artworks = [
      ["turnipno1.jpg","turnipno2.jpg"],
      ["house.jpg", "house2.jpg"],
      ["print1.jpg", "print2.jpg"],
      ["jar1.jpg",
      "jar2.jpg",
      "jar3.jpg",
      "jar4.jpg"],
      ["faces.jpg",
      "underpaint.jpg"]
    ]



var anum = 0;

export default function Home() {
      <div style={{
            position: "relative", top: "-250px", left: "100px", width: "1000px", fontSize: "22px", overflowY: "auto",
            height: "400px",
        }}></div>
const [art, setArt] = useState("house.jpg");
const myFunction = () => {
  var x = ke.weaver.getElementById("expandable");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
const changeArt = () => {
      if (anum == artworks.length) {
        anum = 0;
      };
      const curartarr = artworks[anum];
      for (let i = 0; i < curartarr.length; i++) {

      }
      anum = anum + 1;
      setArt(curart);
    };
  const [show, setShow] = useState(false); 
  const [showColor, setShowColor] = useState(false); 
  const [showYou, setShowYou] = useState(false); 


  return (
    <div>
      <Head>
        <link rel="stylesheet" href="globals.css" />
        <title>ke.weaver</title>

        <meta name="intro page to my website" content="web-home"></meta>
        <meta name="ke.weaver" content="ke.weaver"></meta>
      </Head>
      
      <div className="gallery">
        <div className="bw">
            <div className='expandable' id="nav">
            </div>
          
          <button type="button" onClick={()=> setShow(!show)}>
            {'B&W'}
          </button>
          {show && <div className="img_grid">
          <Draggable><div className="img_desc"> <img src="paulsbarninvert.png" width="400"></img><p>barn dance flyer blank</p><p>stamp & ink print on paper</p></div></Draggable>
          <Draggable><div className="img_desc"> <p>a man going to dance</p><p>charcoal on paper</p><img src="IMG-4937.JPG" width="300"></img></div></Draggable>

          <Draggable><div className="img_desc"> <img src="bugcollective.jpg" width="450"></img><p>bug fight flyer</p><p>stamp & ink, pen on paper</p></div></Draggable>

          <Draggable><div className="img_desc"> <img src="wholeworld.jpg" width="300"></img><p>in your hands</p><p>stamp & ink print on paper</p><p>published in <a href="https://bug-collective.com/" target="_blank">bug collective zine #1</a></p></div></Draggable>

          <Draggable><div className="img_desc"> <p>they love you,</p><p>charcoal, acrylic, paper, digital collage</p><img src="house.png" width="400"></img></div></Draggable>

          <Draggable><div className="img_desc"> <img src="house.jpg" width="450"></img><p>warren</p><p>pen on paper</p></div></Draggable>
          <Draggable><div className="img_desc"> <img src="print2.jpg" width="400"></img><p>rain&wind</p><p>stamp & ink print on paper</p></div></Draggable>
          <Draggable><div className="img_desc"> <img src="jar3.jpg" width="300"></img><p>world's worst sweet tea I &#40;charcoal rendering practice&#41;</p><p>charcoal on paper</p></div></Draggable>

          <Draggable><div className="img_desc"> <img src="jar2.jpg" width="300"></img><p>world's worst sweet tea II &#40;charcoal rendering practice&#41;</p><p>charcoal on paper</p></div></Draggable>

          <Draggable><div className="img_desc"> <img src="jar1.jpg" width="300"></img><p>world's worst sweet tea III &#40;charcoal rendering practice&#41;</p><p>charcoal on paper</p></div></Draggable>
          <Draggable><div className="img_desc"> <img src="jar4.jpg" width="300"></img><p>world's worst sweet tea IV &#40;charcoal rendering practice&#41;</p><p>charcoal on paper</p></div></Draggable>

            </div>}
        </div>

        <div className='color'>
          <button type="button" onClick={()=> setShowColor(!showColor)}>
              {'Color'}
          </button>
            
          {showColor && <div className="img_grid">
            <Draggable><div className="img_desc">
              <img src="margot.JPG" width="500"></img>
              <p>margot</p>
              <p>oil on canvas</p>
            </div></Draggable>
            <Draggable><div className="img_desc"><img src="smallcity.jpg" width="450"></img><p>small city</p><p>oil on canvas</p></div></Draggable>
            <Draggable><div className="img_desc"><p>saint francis</p><p>oil on canvas</p><img src="ren.jpg" width="700"></img></div></Draggable>
            <Draggable><div className="img_desc"><img src="underpaint.jpg" width="400"></img> <p>underpainting</p><p>acrylic on canvas</p></div></Draggable>

            <Draggable><div className="img_desc"><p>unfinished 2019</p><p>acrylic on canvas</p><img src="faces2.jpg" width="400"></img> </div></Draggable>

            <Draggable><div className="img_desc"><img src="turnipno2.jpg" width="350"></img><p>i dreamed of augusta</p><p>acrylic on canvas</p></div></Draggable>

            <Draggable><div className="img_desc"><img src="IMG-7378-COLLAGE.jpg" height="600"></img> <p>behind an outhouse</p><p>camera</p></div></Draggable>

            <Draggable><div className="img_desc"><img src="kelwsubmission1.jpg" width="300"></img> <p>creation as love</p><p>acrylic and pen on paper</p></div></Draggable>
            <Draggable><div className="img_desc"><img src="kelwsubmission4.jpg" width="300"></img> <p>love as creation</p><p>acrylic and pen on paper</p></div></Draggable>
            <Draggable><div className="img_desc"><img src="print1.jpg" width="250"></img> <p>wind&rain</p><p>print on paper</p></div></Draggable>

          </div>}
          
          </div>


          <div className='go_home'><a href="/art">--go home</a></div>


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