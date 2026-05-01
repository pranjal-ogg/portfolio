import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education &amp; <span>certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (AI &amp; ML)</h4>
                <h5>Newton School of Technology, Pune</h5>
              </div>
              <h3>2024 – 2028</h3>
            </div>
            <p>Grade: 7.73 / 10.0 — Currently pursuing B.Tech in Artificial Intelligence &amp; Machine Learning.</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (Class XII)</h4>
                <h5>Sacred Heart School, Uttar Pradesh</h5>
              </div>
              <h3>2022 – 2025</h3>
            </div>
            <p>Grade: 81.0%</p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation (Class X)</h4>
                <h5>Sacred Heart School, Uttar Pradesh</h5>
              </div>
              <h3>2020 – 2021</h3>
            </div>
            <p>Grade: 79.16%</p>
          </div>

          {/* Certification */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI for Everyone</h4>
                <h5>DeepLearning.AI</h5>
              </div>
              <h3>Jan 2025</h3>
            </div>
            <p>
              An introductory course covering key AI concepts like machine learning, deep learning, neural networks, and data science. Explores real-world applications, ethical considerations, and how AI drives innovation across industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
