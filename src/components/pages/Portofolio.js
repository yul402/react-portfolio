import React from 'react';
import appPhoto from '../../assets/images/app-placeholder1.jpg'
import movieVault from '../../assets/images/MovieVault2.png'
import fundBetter from '../../assets/images/FundBetter2.png'


export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="m-4">
        {/* First row project */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Movie Vault</h5>
                <img src={movieVault} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://elias-montes.github.io/MovieVault-Project/" className="btn btn-primary">Go to Live Page </a>
                <a href="https://github.com/Elias-Montes/MovieVault-Project" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Fund Better</h5>
                <img src={fundBetter} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">Create a fundraiser and contribute now!</p>
                <a href="https://mvc-project-2-9329043fdd43.herokuapp.com/" className="btn btn-primary">Go to Deployed App </a>
                <a href="https://github.com/anud22/MVCProject" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>

        {/* Seond row project */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Social Network API</h5>
                <img src={appPhoto} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">Users have the capability to share their thoughts, react to friends’ thoughts, and create a friend list based on their demand.</p>
                <a href="https://watch.screencastify.com/v/3nrURPAwNSxY1csMRpsF" className="btn btn-primary">Go to Video Demo</a>
                <a href="https://github.com/yul402/social-network-api" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">eCommerce Backend</h5>
                <img src={appPhoto} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">Users have the capability to access the desired information, as well as create, modify, or remove information based on their demand.</p>
                <a href="https://watch.screencastify.com/v/x3xJLphKygJp6bzhcQmX" className="btn btn-primary">Go to Video Demo</a>
                <a href="https://github.com/yul402/eCommerce-backend" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>

        {/* Third row project */}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">SVG Logo Maker</h5>
                <img src={appPhoto} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">Create SVG logos with preferences.</p>
                <a href="https://watch.screencastify.com/v/2ItG4wutdQAd0E2RiLT8" className="btn btn-primary">Go to Video Demo</a>
                <a href="https://github.com/yul402/SVG-Logo-Maker" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <img src={appPhoto} alt="portfolio image" className = "img-thumbnail"></img>
                <p className="card-text">A web application that can be used to generate strong passwords for users based on their choices.</p>
                <a href="password-generator-6n4ju2pp5-yul402.vercel.app" className="btn btn-primary">Go to Deployed App </a>
                <a href="https://github.com/yul402/Password-Generator" className="btn btn-primary github-button">Go to Github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
