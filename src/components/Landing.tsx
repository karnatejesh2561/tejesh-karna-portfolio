import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TEJESH
              <br />
              <span>KARNA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>React.js | Next.js | TypeScript</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Frontend</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">MERN Stack</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
