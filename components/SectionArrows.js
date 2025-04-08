"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Selected arrows for specific section transitions
const SECTION_ARROWS = [
  {
    id: "hero_to_features",
    body: "M899.91,549.5c9.49-58.49,25.61-104.06,38.96-135.33,26.56-62.22,58.35-105.78,96.37-157.89,28.63-39.23,54.67-70.42,73.82-92.27",
    head: "M1040.26,159.88c10.69-3.92,27.29-8.7,48.01-9.21,14.24-.35,23.29-.58,30.03,3.83,16.68,10.92,16.12,48.29.73,91.81",
    color: "#ff8c00",
    position: "right-0 top-[80vh] md:top-[60vh] w-[200px] md:w-[300px] transform rotate-[-20deg]",
    viewBox: "890 100 250 500",
  },
  {
    id: "features_to_how",
    body: "M427.91,1013.12c8.47-46.73,27.18-77.56,39.43-94.3,13.27-18.13,25.75-34.67,46.29-37.72,23.91-3.55,44.57,13.27,51.44,18.86,22.03,17.94,18.16,31.94,44.58,58.29,14.07,14.04,22.38,22.33,34.29,24,29.56,4.16,57.6-35.73,75.44-61.72,19.39-28.25,46.41-76.41,60.01-147.45",
    head: "M729.27,780.15c6.82-6.64,17.86-15.96,33.5-23.43,10.75-5.13,17.58-8.4,24.23-7.33,16.46,2.64,28.8,31.35,31.91,69.82",
    color: "#ff008c",
    position: "left-0 top-[145vh] md:top-[130vh] w-[250px] md:w-[350px] transform rotate-[160deg]",
    viewBox: "410 700 430 280"
  },
  {
    id: "how_to_pricing",
    body: "M1729.21,504.18c-19.52-22.02-50.37-62.77-68.09-122.05-20.7-69.28-12.95-128.68-6.19-160.29,12.38-57.96,37.89-99.68,54.62-122.89",
    head: "M1643.36,98.91c9.09-6.57,23.57-15.51,43.09-21.51,13.41-4.12,21.94-6.75,29.51-4.36,18.73,5.92,28.15,41.52,25.13,86.89",
    color: "#D6FF33",
    position: "right-0 top-[225vh] md:top-[200vh] w-[200px] md:w-[300px] transform rotate-[-10deg]",
    viewBox: "1630 40 140 450"
  },
  {
    id: "pricing_to_cta",
    body: "M15,408.5c1.54-65.7,13.88-118.15,24.92-153.66,0,0,31.29-100.68,89.29-151.59,12.86-11.28,26.55-19.67,43.61-22.84,24.28-4.52,43.85,3.64,49.84,6.23,26.23,11.35,39.03,31.88,43.61,39.45,20.01,33.12,14.56,66.26,12.46,78.91-2.41,14.5-5.46,31.38-19.73,42.57",
    head: "M220,230c26.87,22.99,40.39,51.56,32.19,71.64-5.84,14.29-20.9,21.52-30.11,25.96-24.13,11.64-47.15,9.03-57.1,7.27",
    color: "#FF8C00",
    position: "left-0 top-[310vh] md:top-[270vh] w-[250px] md:w-[350px] transform rotate-[20deg]",
    viewBox: "0 0 300 450"
  }
];

export default function SectionArrows() {
  const arrowsRef = useRef([]);

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);
    
    // Ensure we have references to all arrows
    if (arrowsRef.current.length !== SECTION_ARROWS.length) return;

    // Set initial state for all arrows
    arrowsRef.current.forEach((arrow, index) => {
      if (!arrow) return;
      
      const bodyPath = arrow.querySelector(`#${SECTION_ARROWS[index].id}_body`);
      const headPath = arrow.querySelector(`#${SECTION_ARROWS[index].id}_head`);
      
      gsap.set(bodyPath, { strokeDashoffset: 1000, opacity: 0 });
      gsap.set(headPath, { strokeDashoffset: 500, opacity: 0 });
    });

    // Create scroll-triggered animations for each arrow
    arrowsRef.current.forEach((arrow, index) => {
      if (!arrow) return;
      
      const bodyPath = arrow.querySelector(`#${SECTION_ARROWS[index].id}_body`);
      const headPath = arrow.querySelector(`#${SECTION_ARROWS[index].id}_head`);
      
      // Calculate trigger point based on arrow position
      const triggerPoint = `top+=${200 + (index * 800)}`;
      
      // Body animation
      gsap.to(bodyPath, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "body",
          start: triggerPoint,
          end: `+=${window.innerHeight * 0.6}`,
          scrub: 1,
        }
      });
      
      // Head animation with slight delay
      gsap.to(headPath, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: "body",
          start: `${triggerPoint}+=300`,
          end: `+=${window.innerHeight * 0.4}`,
          scrub: 1,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {SECTION_ARROWS.map((arrow, index) => (
        <div 
          key={arrow.id}
          ref={el => arrowsRef.current[index] = el}
          className={`absolute ${arrow.position} pointer-events-none`}
        >
          <svg viewBox={arrow.viewBox} width="100%" height="100%" aria-hidden="true">
            <path
              id={`${arrow.id}_body`}
              fill="none"
              stroke={arrow.color}
              strokeWidth="20"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              d={arrow.body}
            />
            <path
              id={`${arrow.id}_head`}
              fill="none"
              stroke={arrow.color}
              strokeWidth="20"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeDasharray="500"
              strokeDashoffset="500"
              d={arrow.head}
            />
          </svg>
        </div>
      ))}
      </>
  );
}