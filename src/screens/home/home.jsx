import React from "react";
import "./home.css";
import portrait from "../../images/Image.png";
import MenderApp from "../../images/menderapp.jpg";
import RecitApp from "../../images/recitapp.jpg";
import AnythApp from "../../images/anythapp.jpg";
import { IconContext } from "react-icons/lib";
import { BsCodeSlash, BsFillJournalBookmarkFill} from "react-icons/bs";
import { SiDjango} from "react-icons/si";
import { FaTools} from "react-icons/fa";

export default function Home() {
  const openURL = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <div className="main-container">
        <div className="catchPhraseDiv">
          <h1 className="catchPhrase hello">Hello, I'm</h1>
          <h1 className="catchPhrase">Amit Bisht</h1>
          <p className="intro">
            Final Year Computer Science Student @Rawal Institutions
          </p>
        </div>
        <div className="portrait-div">
          <img src={portrait} alt="Portrait" className="portrait" />
        </div>
      </div>

      <div className="more-info">
        <p className="more-info-content"><a href="/about">About</a></p>
        <p className="more-info-content"><a href="https://drive.google.com/file/d/19iAP1p1_MI-YxmJ7Dc7L85qgvqiuQseO/view?usp=sharing">Resume</a></p>
      </div>

      {/* Skills Section */}
      <section className="skills-section">
        <h1 className="skills-section-heading">My Skills 💻</h1>

        <table className="skill-table">
          <thead>
            <tr className="table-heading-row">
              <th>
                <IconContext.Provider value={{ size: "28px", className:'skillIcons'}}>
                  <BsCodeSlash />
                </IconContext.Provider>
              </th>
              <th>
                <IconContext.Provider value={{ size: "28px" , className:'skillIcons'}}>
                  <SiDjango />
                </IconContext.Provider>
              </th>
              <th>
                <IconContext.Provider value={{ size: "28px" , className:'skillIcons'}}>
                  <FaTools />
                </IconContext.Provider>
              </th>
              <th>
                <IconContext.Provider value={{ size: "28px", className:'skillIcons' }}>
                  <BsFillJournalBookmarkFill />
                </IconContext.Provider>
              </th>
            </tr>
            <tr className="table-heading-row">
              <th>Programming Languages</th>
              <th>Libraries & Frameworks</th>
              <th>Tools and Technologies</th>
              <th>Core Subjects</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-data">Python</td>
              <td className="table-data">Django</td>
              <td className="table-data">Git</td>
              <td className="table-data">Operating System</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">JavaScript</td>
              <td className="table-data">React JS</td>
              <td className="table-data">GitHub</td>
              <td className="table-data">DBMS</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">HTML</td>
              <td className="table-data">Pandas</td>
              <td className="table-data">VS Code</td>
              <td className="table-data">OOPS</td>
            </tr>
            <tr className="table-row">
              <td className="table-data">CSS</td>
              <td className="table-data">Numpy</td>
              <td className="table-data">Heroku</td>
              <td className="table-data"></td>
            </tr>
            <tr className="table-row">
              <td className="table-data"></td>
              <td className="table-data">Scikit-Learn</td>
              <td className="table-data"></td>
              <td className="table-data"></td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* Project Section */}
      <section className="projects-cont">
        <h1 className="projects-cont-heading">Projects I've Built</h1>
        <div className="projects-list">
          <div className="individual-project">
            <div className="left-section">
              <h3>Mender</h3>
              <p className="project-detail">
                A Movie RecomMender Web app which shows similar movies to the
                one that you've searched for.
                <br />
                <br />
                <span style={{ backgroundColor: "#FCF8E8" }}>
                  Tech: Django, HTML, CSS, Pandas, NLTK, Scikit-Learn, TMDB API{" "}
                </span>
              </p>
              <button
                className="view-live"
                onClick={() => openURL("https://menderapp.herokuapp.com")}
              >
                View Live
              </button>
              <button
                className="source-code"
                onClick={() => openURL("https://github.com/ammuubisht/mender")}
              >
                Source Code
              </button>
            </div>
            <div className="img-cont">
              <img src={MenderApp} className="projectThumbnail" alt="project" />
            </div>
          </div>
          <div className="individual-project alt">
            <div className="img-cont">
              <img src={RecitApp} className="projectThumbnail" alt="project" />
            </div>
            <div className="left-section">
              <h3>Recit</h3>
              <p className="project-detail">
                A fully functional music streaming platform that fetches the
                user information with the help of Spotify API and provide
                personalized library of tracks, playlists and artists. The
                Project is Hosted on Heroku <br />
                <br />
                <span style={{ backgroundColor: "#FCF8E8" }}>
                  Tech: React JS, HTML, CSS, React-Router, Axios, Spotify API{" "}
                </span>
              </p>
              <button
                className="view-live"
                onClick={() => openURL("https://recit-player.herokuapp.com/")}
              >
                View Live
              </button>
              <button
                className="source-code"
                onClick={() =>
                  openURL("https://github.com/ammuubisht/recit-web-player")
                }
              >
                Source Code
              </button>
            </div>
          </div>
          <div className="individual-project">
            <div className="left-section">
              <h3>Anyth</h3>
              <p className="project-detail">
                Anyth is an anonymous photo sharing and micro-blogging web app
                hosted on Heroku. Consist functionalities like User
                Authentication, Uploading Photos, Responsiveness.
                <br />
                <br />
                <span style={{ backgroundColor: "#FCF8E8" }}>
                  Tech: HTML, CSS, Javascript, Django
                </span>
              </p>
              <button
                className="view-live"
                onClick={() => openURL("https://anyth-ap.herokuapp.com/")}
              >
                View Live
              </button>
              <button
                className="source-code"
                onClick={() => openURL("https://github.com/ammuubisht/anyth")}
              >
                Source Code
              </button>
            </div>
            <div className="img-cont">
              <img src={AnythApp} className="projectThumbnail" alt="project" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
