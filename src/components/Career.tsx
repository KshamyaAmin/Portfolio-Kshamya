import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science (Computer Science & Mathematics)</h4>
                <h5>University College, Mangaluru</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Successfully completed BSc with a CGPA of 9.02.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Prodigy InfoTech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive web pages using HTML, CSS, JavaScript. Improved debugging and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Oasis Infobyte</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed responsive UI and worked on real-world tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>St. Agnes College (Autonomous), Mangaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing MCA with a CGPA of 8.59. Presented a research paper on "Balancing Coaching Culture and Parenting Pressures" at the college level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
