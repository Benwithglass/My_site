// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import "./StarProject.css"
import minhlongphat from "../../assets/pictures/Hinh_banner_2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function StarProject() {

  const aRef_1 = useRef(null);
  useEffect(() => {
    const z = aRef_1.current;
    gsap.fromTo(z, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease: "power4.inOut", duration: 2, delay: 0.75, scrollTrigger: {
      trigger: z
    }})
  }, []);

  const aRef_2 = useRef(null);
  useEffect(() => {
    const x = aRef_2.current;
    gsap.fromTo(x, {opacity: 0, y: -50}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1, scrollTrigger: {
      trigger: x
    }})
  }, []);

  const aRef_3 = useRef(null);
  useEffect(() => {
    const c = aRef_3.current;
    gsap.fromTo(c, {opacity: 0, y: 50}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1, scrollTrigger: {
      trigger: c
    }})
  }, []);

  return (
    <body className='starProject' id='starProject'>
      <div className="starProject_left">
        <div className="image" ref={aRef_1}>
          <a href="https://minhlongphat-a62b7.web.app/"><img src={minhlongphat} alt="" /></a>
        </div>
      </div>
      <div className="starProject_right">
          <h1 ref={aRef_2}>Minh Long Phat</h1>
          <p ref={aRef_3}>A JUST-FINISHED WEBSITE WITH TAILORED DETAILS AND FULLY RESPONSIVE
            <br /> FOR MY FIRST EVER CLIENT - HATS OFF TO YOU, MR. HAU! 
          </p>
      </div>

    </body>
  )
}

export default StarProject