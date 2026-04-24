import React from 'react';
import './WhatWeOffer.css';

const offers = [
  {
    id: 1,
    title: "Real-World Mastery, Not Just Theory",
    description: "Hands-on, industry-aligned training where you build, debug, design, and deploy. You turn concepts into tangible work that mirrors actual jobs, freelance gigs, and startup demands.",
    icon: "🚀"
  },
  {
    id: 2,
    title: "Mentorship That Moves the Needle",
    description: "One-on-one guidance from seasoned professionals who invest in your breakthroughs, refine your thinking, accelerate your confidence, and keep you accountable until success feels inevitable.",
    icon: "🤝"
  },
  {
    id: 3,
    title: "Portfolio Power Through Live Projects",
    description: "Capstone projects that go live: apps, websites, campaigns, automations. These are assets you own, showcase, and leverage to land opportunities, not just certificates.",
    icon: "💼"
  },
  {
    id: 4,
    title: "Skills Without Borders",
    description: "Training engineered for remote roles, international freelancing, cross-border collaboration, and digital entrepreneurship. Your location never limits your impact.",
    icon: "🌍"
  },
  {
    id: 5,
    title: "A Tribe Built on Growth",
    description: "Join a vibrant, high-accountability community of ambitious learners who celebrate wins, share resources, push each other forward, and turn individual progress into collective momentum.",
    icon: "🔥"
  }
];

const WhatWeOffer = ({ onSignupClick }) => {
  return (
    <section className="what-we-offer" id="what-we-offer">
      <div className="offer-container">
        <div className="offer-header">
          <span className="offer-badge">🌟 What We Offer at Daiel Tech</span>
          <h2 className="offer-main-title">We don’t just teach tech. <span className="highlight">We ignite futures.</span></h2>
          <p className="offer-subtitle">
            At Daiel Tech, every program is a deliberate bridge from where you are to where the world needs you to be: equipped, confident, and competitive in the global digital economy.
          </p>
        </div>

        <div className="offer-grid">
          {offers.map((offer) => (
            <div key={offer.id} className="offer-card">
              <div className="offer-card-glow"></div>
              <div className="offer-icon-wrapper">
                <span className="offer-icon">{offer.icon}</span>
              </div>
              <h3 className="offer-card-title">{offer.title}</h3>
              <p className="offer-card-description">{offer.description}</p>
            </div>
          ))}
        </div>

        <div className="offer-footer">
          <div className="transformation-box">
            <p className="transformation-text">
              This is more than education. <br />
              <strong>This is transformation:</strong> from curious beginner to capable creator, from local dreamer to global contributor.
            </p>
            <h3 className="ready-text">Ready to rewrite your story?</h3>
            <button className="cta-button-premium" onClick={onSignupClick}>
              Join the Future
              <span className="btn-shine"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
