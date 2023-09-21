import React from 'react';
import Photo from '../../assets/images/Ying_image.png';

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={Photo} alt="portfolio image" id = "portfolio-image"></img>
      <div id="intro">
        <p>
          Hi. Welcome to Ying Li's profile page.
        </p>
        <p>     
          I am a recent graduate from Boston University's Questrom School of Business with a Master's of Science in Business Analytics. I enjoy the idea of solving real world problems systematically and therefore am always interested in exploring, learning, and coding. As I am diving deeper into the analytics field, I am realizing how interesting and dynamic it is. Everything is interconnected in some sense and I am working hard to learn as much as possible to build a strong foundation/infrastructure for myself. Now, I am moving forward to learn the full pipeline for implementing data science project as it is essential for the program to be delivered to user.
        </p>
      </div>

    </div>
  );
}
