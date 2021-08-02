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
                <p>JAVA 8 and JAVAFX in my desktop GUI Sudoku project</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="cpp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
                <h5>C++</h5>
                <p>mostly in algorithm coding and OOP project</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="CSharp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX///+bT5ZoIXpcAHCWQ5HYv9bk2uZaAG+aTJVmHHieUZhhDHSWRJFfAHNjEnZkFnaUPY6ylrqhfquVbKHQwdTy7/P69/psJXyjYJ/i0OHcxtrw5u/Vx9r49fnUuNKSOo3Jpse+kruyfa+8pcPFssvr4+3LutGpa6XMq8rCmb+lZKG2hLOvdqvJp8fawth2LoGoibF5P4iJW5ZzNIOAOIeATI6bd6bn1+a2m72QZZx1OYXBlb2EN4h9SIyLSI9PAGVhiWMNAAANwUlEQVR4nO1de3uiPhOtQiUIKLbV1ipeqtZe7K612+u+3f3+3+pVFAQkyUwu0P6ePX8tz1bIgZnMzMkEjo7+4R/+IY1O0Cl7CBrRGVyRoT9056Og7KHowcg0SWUD4pqjsgejAZd1t7KHW78se0CKMZv7pJIE8eezsgelEJ1xht+W4/g/M+kMTPeAX2iq/k3ZQ1OC7oWZy++/4o7tq+GhgSZNdfHN3XGU44D/JXf8Ucl3wIypuoOyByqIWjZCUGFedMserACCMdMBs6Z61St7wFjc+BADTXAc3n4rd2RFCBpc8n3csbeAOmAa5sVr2UOH4VaMXyV0x3bZo+fj2MU5YIbjcFQ2AQ5qd3gHTMMlx2WTYKB9j4gQ1Mfo331Zd8RGCDrH+y/pjpd1WQPdw/VHZdM5QA+cogE5kq9VV+UW8XL4WjIHrYiX5Di8/yKq46tAigaD634FmYNTxEvCLF/mGJka+VVCmaPUugpWxEtyHJYncxzIvJpQljsG6iMEFaXIHDdaIgQNxbujSBEvy/F3gfxEi3g5uGZhMod4ES+JgmQOuSJeDkWojvJFvCzHW638AhVFvCS0yhyqing5EFOXzNEVL+IJIa5rmn4M03RdImwO67pKg8whXMQT1/fr8/HDoFvrtdtBEPR6vVr3+GE8r695CrIkymWOzm8hfmt25tVNl3bDg+7DwvfFWLr1HyoJChXxrk+uBvzJvTe4ckVKMOLf1VTxEyniiWmOwfNB5/LeFCBJ/LESmUOkiHf9BbYYuFwITNRKujnwRTwxyUhkquvdCkw80jLHJbqIJ/6FcETuDCr4+ymlOuKLeGJeyN3TY3zQFXdHAZnXJfJT+ACf2QvKHPgIQdQ0VXYEqjOzjpY5BIp4dULDDF/AYGWODj5CEFdlyn+Df4xkiJAAOhdoVzAXatcYevghVBBKzhzvgeoVzbGPpwitjm+wXkCIsgwxgUt8IufD5psAS9Cd61kFQ1tqnVyATvyAPK95r4XfBgvUza7/cpag09ZxxqG1AwbhjPU/57ZtQ07aG+II6m1/GQEp1slPu1qtWhB/6aIsY6h7BfMBcsPrlV8bftWqAcnCjzEMh/rXhAZ8ivU/1S3BqgGZ1DEM/SLWoB84hrozUC0MNftghFvWiJL8lDP0H7ST2+KeHr/qv6pJqGXojrVTi7CgUNxECH0MyVw7sRid3BidNlDlDAnBdkgEs+6PweBmMBh0e9g0r3c428QRQhdDH5NsB5e3c9f3TXcL0/crV6MuhuZllmLGAdUzRKw49wYL/0AnJGTNc34DVx3HKVesk/PDB6iUIVkAB9Y5vhhSVVDiDufHUGNPuGK9cuCAyhm6MAvrjAinyCOm+wDjOIvtNN9A1TL0QaJhZwQS6l2gQDDaDuwgQuhgCLPRAYEWmm4FlBxt7DQnQuhgaAImiN4ckd8SfwE45aufGyE0MIQozAOkHEh8wGP8/T8mPWUMSYV/kisBoYwvhiydYhia3JKpJ9R26l6wJ+jrBpegGoZ8PetVsP+AEIYwX/s02C6ojiFXk+zihJ4kRZ8mQrRPLQA/NQzJHY8g3gX3J3fzKba8BoSfGoY84eJV+AmGFM0cQ722PRg/JQxJnf3rnmRfGKlkp5vaM8QB1THk7J3vVGQ7+zJeELxYTTA/JQxNdpq8kG9dTIkjb1AHVMaQsMPySEXz6d7Tz36CHVAZQ5PZ51STmEYT2JVmszwHtBs77P4rc6jgGTJ/eqGmvZZcrc/VOTFyHND+ONnhM+TUjA5XthqGLnORFb2ySsPaTideborWiJfP3jf87Wp0uGyoYciUnwJlDcT1P58UB/Sm0dVCRs3T6PBRzTNkB8OxIoZ199ymRcCYQc/aHDqT3WHHUeOHhKVyt6WSmT0/ZhHvRMHqLHzIRn93WDPUMGTWTUoeIaeItx+jq7XCh2ZEysDUU8NwyCjg0P0NuQR/VZkZWuMkutwqnGieosOThhKGTDccyD9Cmsy7x36iCf+y+R4dPqqJh8zFJmR/Qx4/poq2JRAlHL3Q75y36OpW9AdyDE2GWDSTTWcYMm+CYTzRhAwPJhpZhqxoOJIzUqbMW7WdLbyP6HJLy1jjbzTRTP4ahqPCShl1hVTCxjFQ+/OttUXshrX+BmfJw3B2lWPIkqDaEkbKlXn3mQsLYYSUZHhF/9EPcSPlO2BhDFlpt3C436RoX4chQ8AQdENIhCiQockQSsUSmjrHAYtmyAgWOY0EAH5/2ClaCQzpmvsr/hnCDLRghvS8G9XtF/LjRYgUw/dOO0R0ud1hFJ6D67M1Wg1phkN6wMem3aAULUHRCuFFl1v+3Rz+jVO4v94aYXUhyZD+G1zjNDtFYzzK6HKhCpWtFataGWKyUoQDppGpJDK1omaGmGeIcMA0MpXEvlZMqI7a/PAGyhAcIXIQ93BvJYuYzMza/422uRTIUNhAN9j34W8li2Z0w68TyqMkQ3pDCGgupfdq8dDcFINWHBWfjPXUacUTzUlYK6qoDxkR/xIQD5ERIklwNautEV8+DH/XMZfwP2uziXx9yMja+EsyghFiy/ALZN5tzjOUcsACGTKEKCZDVIpWJkNWs9ecUR/yZN4vxJAhl95SJ1M5Ay2WIavnkjaZKuBXJEOGqE/R2sQjBJ5hX54hK6k5ustxRJkIkUSol8Zp93QrnUaHtZ2U+vbSlGfIalM4rC6UGOiOouMY+9LJ26jf8apTy9oJ4mH+Lat5M8S27L5M2QiRRbzaexRmofv1/FWqn0F2dY3VTJPWE9U4YHLotNIp7QjSq9yMnw0SP+MvBKLhpVd7rXg930j9mSxDRnWR6MRQ6IAx7J/RdbalUyzZnKllyMrbjn67kYEq55cMGB+hRvMcHbbSbTfSVspyxG0vhqoIkUGs0WzbSvYazXu6cUq+64v1w7GrxUC3I6dNNJnWRfmeKFbjXuASVQZqNzMjp2k0PSv9d/J9bcz3ozxgeyVp8CbBe6pzPdtWEk80/cwl5a3UZf70Q80jDPl0n5KDt60dds82OszeUwX9pcytCLWMzQhiF+wmyP5gNQw5PcItgz8I/iijrDp4gW2yUMqQWV+sscLf9iwaq/3pYBtl1DLk7FvrNGVd0bZT0voUsNlJLUPexrWa7HzqZcbYWWK2I6jYM2NyNsieyc02Vv/gjLNnuDsWsu/pWoaidZZ7ynOoZRSzd02CYj7Bo00lDzPVgvYf9j2x6cY2Dk00QvsdZKpF7SGd2Zi9ShEaNnN4/SeAqSraB8zZvrZG8IyfUo0V7y0Gk6IYgvZyL5HpiG21ACfl5hNqGNZ/eYDN812IUcXwHgEvjp7xc0IVDDfNhM0V/zSbra3QdKThvfFPd3T0zPdueYbRi9+uISMKlhYkTW1YL6D3iEwBab0sw1jmtZuwd5u0TxxO5LA97wT28tg2xOolGSYWAhvv/BOFCCZPlkMjaTvW0wT6Eh6AjUoyTMu8xpR/ph1mrUfDa2RZ2g3P+mjBX8XdAk1cEgwPVDQP857w9vXy0zMMz9vtKlj/83N5jXm18SssFRRneLgOYZ9j3/XVrp1NJ61l620yrWHfGh0A605RhrkybwMUMhQB5ITCDGkyr3fCP5kinEIjqwhDxkKgMeGfTQngApcAQ+ZCICzwS2MKLzjRDHn7PagVq0ogCGIZAtZZcmQV1UAJPyCGcWsMaCFQ+1PEPMH1cCBhaLd3ArIhKTynXl/EEawakHMGQ5iBxhR1zqhvOIKw3qKjO4JrFTH0xcUX5DoIQ8pK4tJFtop4Kz2fsw0+UYp+cpmRjc5BHcBDo6rj2wjdJlaxA8/sE7Ska2tIb1ropTXvBXzyE7xqbbyrtdT2M3op0sOUAlMD6QEbPVdl2Jg6WAttWrAvP0TIf8MPE7a1UvatIPQDtI1n9FSQ+5YmNpoeQNUFoIW+u46YAZ2B17RiGApMddrEekjDEL6zbwZ2Wd42nuQS1bMnrOnY1rvER0mhr5xMcXwUf47XaH5V40PyExu1T/SsbRvnE5GPB7XfbPTCo+MoCMTIboiQo+e9YO9s/92gKsc0NK0TNd9hWqLnto33N5Zwkt1lE3+NdYSQ+LZjGrMV2h1Dks3TKX8Ms+mpjZ7R1vBspcV3/0OoT6bpWd7ppE/9HnBt+uJYntCSuKLYmwDlNX8Alo5h/Hx+eZv2a7Pwuxaddm9WO5ssVx+eIdCct4FtnWr4bHVwgnpXanpEdsPxPMOImiYNw3Mc8QYxA7JiLALU+271wXHg615owJuTtGFdQ+hRFCKA3zutB7axUhYhaBBI5NTBOy9CZBdJ5NQA2LKhAlNHMHLIQE+EoEIkkZPjZ3zq0PMY6AklcsJwGhojBA2gXkE1aBo4lUkZhBM5HGxLf4SgQSaRA8N70r9GyYD2RK7hFdUsQAXi4xN4NIFNfZqhLZETkXn1QFMi5zSKafUA4fVReSJXWoSgYao2cihcBFEG3P4kDoxyIwQNs5WiyOGUHyFoUJLIKZN59UBkZ2sKXydC0ID8elEWKpbntEMikdMg8+rBNXqNM4TcQmDBEEnkjEfJhcBiAdwuuIfjlVDEy6GLSeS0y7x6AF5aLULm1QNgIleQzKsHgESuQJlXD/rsz98VLPPqASuRK1zm1QNqIvcNIwQNuYnclyvi5XBtZyJHmTKvJrRSHSUly7x6sE7kdg3kTe+7Rwgaaicf4cusVpPvmKIB0Wl///D3D/+gHP8HqHhSj8Os5S0AAAAASUVORK5CYII=" />
                <h5>C#</h5>
                <p>.NET framework development</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="SQL" src="https://i0.wp.com/www.mobileatom.net/wp-content/uploads/2020/04/MySQL-Square-300.png?resize=300%2C300&ssl=1" />
                <h5>MySQL</h5>
                <p>database building and data analysis</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="ReactJS" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                <h5>ReactJS</h5>
                <p>several web projects and <a href="https://www.yuchen-rao.ml/">THIS WEBSITE</a>!</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Docker" src="https://avatars.githubusercontent.com/u/11618900?s=460&u=4094ca922dc10a0476cd0eaf37aa78d3c7a91eb2&v=4" />
                <h5>Docker</h5>
                <p>containerising web application</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="AWS" src="https://lavca.org/wp-content/uploads/2019/10/aws-logo-square.png" />
                <h5>AWS</h5>
                <p>EC2, Secrets Manager, Terraform</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Jenkins" src="https://www.pngitem.com/pimgs/m/340-3408094_jenkins-ci-hd-png-download.png" />
                <h5>Jenkins</h5>
                <p>pipeline integration and automation</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Flutter" src="https://www.kindpng.com/picc/m/355-3557482_flutter-logo-png-transparent-png.png" />
                <h5>Flutter</h5>
                <p>used for Android/iOS app developement</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="ps" src="data:image/png;base64,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" />
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
