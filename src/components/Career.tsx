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
                <h5>ManaTech Services</h5>
              </div>
              <h3>Dec 2025 - Present</h3>
            </div>
            <p>
              Built scalable web applications and frontend features using React.js, Next.js, and TypeScript, with an emphasis on maintainability, performance, and modern UI delivery. Contributed to production-grade products while collaborating with cross-functional teams and improving overall development efficiency.
            </p>
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
              Delivered AI-driven frontend features, reducing manual content processing time by 20-30% and improving workflow efficiency. Built Next.js and TypeScript modules with reusable architecture while strengthening SEO and web performance through SSR, SSG, and dynamic routing.
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
              Delivered scalable, SEO-optimized web applications using React.js, Next.js, and TypeScript in production environments. Improved page load speed by 25% through lazy loading, image optimization, and efficient API handling, while building REST APIs with Node.js and Express.js and optimizing MongoDB aggregation pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
