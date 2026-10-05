import { useState } from "react";
import "./CareerCTA.css";

function CareerCTA() {
  const [copied, setCopied] = useState(false);

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href.split("#")[0]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="career-cta-section" aria-labelledby="career-cta-title">
      <div className="career-cta-container reveal">
        <div>
          <p className="section-kicker">NEXT STEP</p>
          <h2 id="career-cta-title">Let&apos;s create something <span>worth shipping.</span></h2>
          <p>
            I&apos;m interested in software development opportunities where I can contribute,
            keep learning, and build reliable user-focused products.
          </p>
        </div>
        <div className="career-cta-actions">
          <a className="career-primary" href="mailto:komali.katta2004@gmail.com?subject=Software%20Developer%20Opportunity">
            Discuss an opportunity <span>↗</span>
          </a>
          <button type="button" className="career-secondary" onClick={copyProfileLink}>
            {copied ? "Profile link copied" : "Copy profile link"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareerCTA;
