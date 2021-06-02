import "./styles.css";
import React from "react";

export default function Home() {
  return (
   <div className="home">
     <section id="showcase" >
    <div class="animated-title">
    <div class="text-top">
        <div>
            <h1>Solution To A Helthier And Better You</h1>    
        </div>
            </div>
            <div class="text-bottom">
            <button class="button">Start free trial</button>
            </div>
        </div>
        <div  class="arrowbox">
        <a href="#section-a">
        <div class="box">
        <span></span>
        <span></span>
        <span></span>
        </div>
    </a></div>
    </section>
    <section id="section-a "class="section1">
            <h4 class="wordCarousel">
                <span> Do You Have</span>
                <div>
                    <ul class="flip4">
                        <li>Any Skin condition?</li>
                        <li>Any time to visit a dermatologist?</li>
                        <li>Any hair fall issue?</li>
                        <li>Any Nail issue?</li>
                    </ul>
                </div>
            </h4>
            <div  class="arrowbox">
            <a href="#section-b">
                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            </div>
            
    </section>
    <section id="section-b" class="section2">
       <div class="tracking-in-expand"> We analyse your health and tailor make a diet plan.</div>
        <div class="arrowbox">
        <a href="#section-c">
            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a></div>
    </section>
    <section id="section-c"  class="section3">
        <div class="glass">
        DO you aspire perfection in your body and skin
        Are you concerned about your outlook
        We are here to help you transform inside out
        We will guide you through your diet, your workout,
        your skin and hair care routines and even surgeries if
        you require to achieve your body goals.
        </div>
        <div  class="arrowbox">
        <a href="#section-d">
            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a></div>
        </section>
        <section id="section-d" id="section-c"    class="section4">
          <h1>Facilities available</h1>
        Laser
        PRP
        Skin tightening
        Diet advice
        Workout planning
        Transformation planning
        Skin whitening
        Hair restoration
        Hair regrowth
        Chemical peeling
        Medifacials
        Vampire Facials
        <div class="arrowbox">
        <a href="#section-e">
            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </a></div>
        </section>
<section id="section-e" id="section-c"  class="section5" >
            
    About us,
    
    Founded by A Doctor, Dermatologist, Passionate Fitness Freak
    A long dream materialised with a cybercrime expert’s help
    We aim to serve those who need and value the services offered.
   
    </section>
     </div>
  );
}
