import React from 'react';
import appPhoto from '../assets/images/app-placeholder1.jpg'

export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="m-4">
        {/* First row project */}
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>

        {/* Seond row project */}
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>

        {/* Third row project */}
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <img src={appPhoto} alt="portfolio image" clssName = "img-thumbnail"></img>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go to Deployed App </a>
                <a href="#" class="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
