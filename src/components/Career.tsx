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
                <h4>Frontend Developer</h4>
                <h5>Zan - Zari Group Limited (Contract)</h5>
              </div>
              <h3>Sep 2025 - Nov 2025</h3>
            </div>
            <p>
              Delivered AI-driven frontend features, reducing manual content processing time by 20-30%. Developed frontend modules using Next.js and TypeScript, building reusable component architecture. Streamlined SEO and web performance using SSR, SSG, and dynamic routing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Craftnotion Private Limited</h5>
              </div>
              <h3>Mar 2023 - Jul 2025</h3>
            </div>
            <p>
              Delivered scalable, SEO-optimized web applications using React.js, Next.js, and TypeScript. Boosted page load speed by 25% through lazy loading and image optimization. Developed REST APIs using Node.js & Express.js, optimizing MongoDB aggregation pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
