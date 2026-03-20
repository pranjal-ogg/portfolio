import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience, <span>education</span> &
          <br /> certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Analyst</h4>
                <h5>CID, West Bengal</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Building production-ready application backends using Node.js, PostgreSQL, MySQL, and MongoDB. Developing applications using Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Meghnad Saha Institute of Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Expected graduation in July 2025.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc in Computer Science</h4>
                <h5>University of Calcutta</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Graduated from Narasinha Dutt College.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>NPTEL & Forage</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Privacy and Security in Online Social Media (NPTEL), Introduction to Programming C (NPTEL), Deloitte Australia Data Analytics Job Simulation (Forage).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
