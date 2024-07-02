import React from 'react';
import '../Styles/Resume.css'

const Resume = () => {
  return (
    <div className="resumeBody" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
       
        <div className="contactInfo" >

      {/* <h1>Jeremy B. Montes</h1> */}
      <p >
        {/* <strong>Phone:</strong> (929) 235-3904<br /><br /> */}
        <strong>Email:</strong> <a href="mailto:jeremymontes@pursuit.org">jeremymontes@pursuit.org</a><br />
        {/* <strong>Location:</strong> Newark, NJ<br /> */}
        <strong>LinkedIn:</strong> <a href="http://linkedin.com/in/jmontes">http://linkedin.com/in/jmontes</a><br />
        <strong>GitHub:</strong> <a href="https://github.com/JBMontes">https://github.com/JBMontes</a>
      </p>

        </div>

<div className="experience">
      <h2>Technical Skills</h2>
      <ul>
        <li>Software Engineering: JavaScript, HTML, CSS, React Vite, Express.js, PostgreSQL, Postico, Node.js, Restful APIs, Postman</li>
        <li>Project Management: Trello, Agile Project Management</li>
      </ul>

      <h2>Software Engineering Projects</h2>
      <h3>Village App | <a href="https://village-app.netlify.app/">Live</a> | <a href="https://github.com/JBMontes/village-app">GitHub</a></h3>
      <ul>
        <li>Lead design efforts for Village app UI using Excalidraw to map out wireframe for each page.</li>
        <li>Collaborated with lead backend developer to create API contract, ensuring uniform naming conventions across application.</li>
        <li>Constructed front-end with React.js and utilized vanilla CSS for application’s styling and prioritized making application responsive on mobile web view.</li>
        <li>Applied Mapbox API to provide route and direction to user location and emergency services. Modified markers to distinguish user location from emergency services.</li>
      </ul>

      <h3>Grid | <a href="#">Live</a> | <a href="https://github.com/JBMontes/grid">GitHub</a></h3>
      <ul>
        <li>Built backend using PostgreSQL, Express to hold user information, tasks created and process queries that distribute data to designated tables in the database.</li>
        <li>Designed frontend with React Vite and utilized vanilla CSS for styling.</li>
      </ul>

      <h3>Roast | <a href="#">Live</a> | <a href="https://github.com/JBMontes/roast">GitHub</a></h3>
      <ul>
        <li>Constructed backend with PostgreSQL as a database management system and Express to process queries that distribute data in the database.</li>
        <li>Generated frontend with React Vite and utilized vanilla CSS for styling.</li>
      </ul>

      <h2>Work Experience</h2>
      <h3>Montes, LLC - Newark, NJ</h3>
      <p><strong>Airbnb Manager</strong> | Mar. 2022 - Present</p>
      <ul>
        <li>Conduct regular inspections to ensure the property is in good condition.</li>
        <li>Addressed and resolved guest complaints and emergencies efficiently, maintaining high customer satisfaction levels.</li>
        <li>Created and maintained high-quality property listings, resulting in increased booking rates and higher occupancy.</li>
      </ul>

      <h3>Senior Care Emergency Medical Services - Bronx, NY</h3>
      <p><strong>EMT Field Training Officer</strong> | Aug. 2013 - Oct. 2015</p>
      <ul>
        <li>Mentored incoming EMT class on emergency procedures on the field.</li>
        <li>Educated trainees about the policies of the department and correctly applied concepts taught in the classroom to the duties of an EMT.</li>
        <li>Performed competency evaluations for new trainees and gave clearance to those who passed to work independently on the field.</li>
      </ul>

      <h3>Transcare Emergency Medical Services - Mt. Vernon, NY</h3>
      <p><strong>Emergency Medical Technician</strong> | Oct 2015 - Sep. 2016</p>
      <ul>
        <li>Assessed patient condition, began initial treatment and provided first-aid treatment to patients, such as bandaging wounds and administering necessary medication.</li>
        <li>Communicated with emergency services (fire department and police department) to collectively respond to calls of help.</li>
      </ul>

      <h2>Education</h2>
      <div className="education">

      <p>
        <strong>Pursuit</strong>, New York, NY<br />
      </p>
       <p> 12-month Fullstack Web Software Engineering Fellowship, January 2024</p>
      <p>
        <strong>City College of New York</strong>, New York, NY<br />
      </p>
       <p> Bachelors of Science in Psychology, May 2021</p>
      <p>
        <strong>LaGuardia Community College</strong>, Queens, NY<br />
      </p>
       <p> Associates of Science in Biology, May 2018</p>
      </div>
    

</div>
    </div>
  );
};

export default Resume;
