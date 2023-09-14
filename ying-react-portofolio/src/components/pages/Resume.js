import React from 'react';
import Resume from '../../assets/files/Ying_Li_Resume.pdf';

export default function Blog() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <a href={Resume} download="YingLi_Resume">Download Resume</a>
      </p>
      <div>
        <h2>Front-end Proficiencies</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS & Bootstrap</li>
          <li className="list-group-item">JavaScript & JQuery</li>
          <li className="list-group-item">Responsive Design</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div>
        <h2>Back-end Proficiencies</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">APIs</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MySQL & Sequelize</li>
            <li className="list-group-item">MongoDB & Mongoose</li>
            <li className="list-group-item">REST</li>
            <li className="list-group-item">GraphQL</li>
          </ul>
      </div>
      <div>
        <h2>Data Analytics Proficiencies</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Python</li>
          <li className="list-group-item">R</li>
          <li className="list-group-item">SQL</li>
          <li className="list-group-item">Power BI</li>
          <li className="list-group-item">Microsoft Office Suite</li>
        </ul>
      </div>
    </div>
  );
}
