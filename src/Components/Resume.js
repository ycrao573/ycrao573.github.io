import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>
              {education.school}
              <img className="avatar" src={education.image}></img>
            </h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p className="new-line">{education.description}</p>
            <hr />
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>
              {work.company}
              <img className="avatar" src={work.image}></img>
            </h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <div className="new-line">{work.description}</div>
            <hr />
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col techtree">
            <p>{skillmessage}</p>
            <ul className="bgrid-quarters s-bgrid-quarters">
            <div className="columns feature-item">
              <img className="skill" alt="Git" src="data:image/png;base64,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" />
                <h5>Git</h5>
                <p>for version control in almost all of my projects</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Python" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png" />
                <h5>Python</h5>
                <p>mostly in algo coding and in ML, data related project</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="HTML/CSS/JS/Bootstrap" src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/136860912/original/9b2b11fc6347aa6836ab4e58949a383e064065f9/create-a-custom-responsive-website-using-html-css-javascript-bootstrap.jpg" />
                <h5 className="new-line">HTML CSS JS {"\n"}Bootstrap</h5>
                <p>in all of my web or mobile app projects</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Java" src="https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png" />
                <h5>Java</h5>
                <p>used JAVA 8 and JAVAFX in my desktop GUI Sudoku project</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="cpp" src="https://lh3.googleusercontent.com/proxy/9XL6PTTFtYFshqWnfVxTFaJJpRcfcVpsTGrGh2eMg_Rpvhd1T8Lg5G5Hb-TzkFI-jNccyE_nUVFqsfM58qk4-bs_6qSQJ8gYP88MAJPEnT_KzO2_vAG5Lw" />
                <h5>C++</h5>
                <p>mostly in algorithm coding and OOP project</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="CSharp" src="https://www.pngitem.com/pimgs/m/521-5219587_c-logo-transparent-background-hd-png-download.png" />
                <h5>C#</h5>
                <p>used in .NET web framework</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="SQL" src="https://i0.wp.com/www.mobileatom.net/wp-content/uploads/2020/04/MySQL-Square-300.png?resize=300%2C300&ssl=1" />
                <h5>MySQL</h5>
                <p>used in database building and data analysis</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="ReactJS" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                <h5>ReactJS</h5>
                <p>used in several web projects and HERE</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Docker" src="https://avatars.githubusercontent.com/u/11618900?s=460&u=4094ca922dc10a0476cd0eaf37aa78d3c7a91eb2&v=4" />
                <h5>Docker</h5>
                <p>used for containerising web application</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="AWS" src="https://lavca.org/wp-content/uploads/2019/10/aws-logo-square.png" />
                <h5>AWS</h5>
                <p>basic operations, used for secret migration before</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="pr" src="https://cdn.worldvectorlogo.com/logos/photoshop-cc.svg" />
                <h5>Photoshop</h5>
                <p>for design, publicity, writeup purpose</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="pr" src="https://img.pngio.com/adobe-premiere-pro-logo-png-and-vector-logo-download-adobe-premiere-pro-png-700_682.png" />
                <h5>Premiere Pro</h5>
                <p>for video editing and publicity purpose</p>
            </div>
            


            </ul>
          </div>
        </div>
      </section>


    );
  }
}

export default Resume;
