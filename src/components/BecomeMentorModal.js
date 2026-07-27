import React, { useState } from "react";
import { X, Award, CheckCircle, Sparkles, Send, Briefcase, Users, HeartHandshake } from "lucide-react";
import "./BecomeMentorModal.css";

const BecomeMentorModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryTrack, setPrimaryTrack] = useState("Python & Data Science");
  const [experience, setExperience] = useState("2-4 Years");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[DAIEL TECH - Mentor Application] ${fullName} (${primaryTrack})`);
    const body = encodeURIComponent(`Hi DAIEL TECH Recruitment Team,

I am applying to become a Technical Mentor at DAIEL TECH.

Applicant Details:
- Name: ${fullName}
- Email: ${email}
- Phone/WhatsApp: ${phone || 'N/A'}
- Primary Mentorship Track: ${primaryTrack}
- Years of Industry Experience: ${experience}
- Portfolio / LinkedIn / GitHub: ${portfolioUrl || 'N/A'}

About Me & Mentorship Motivation:
${bio}

--
Submitted via DAIEL TECH Mentor Application Portal`);

    window.location.href = `mailto:dael042024@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="mentor-modal-overlay" onClick={onClose}>
      <div className="mentor-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="mentor-modal-header">
          <div className="mentor-header-title font-mono">
            <HeartHandshake size={24} className="header-icon" />
            Become a Technical Mentor at DAIEL TECH
          </div>
          <button className="mentor-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="mentor-success-banner">
            <CheckCircle size={56} className="success-icon" />
            <h3>Application Dispatched!</h3>
            <p>Thank you for applying to empower the next generation of tech talent.</p>
            <p className="email-target font-mono">Sent to dael042024@gmail.com</p>
          </div>
        ) : (
          <div className="mentor-body-scroll">
            {/* Value Proposition Hero */}
            <div className="mentor-hero-banner">
              <h2>Inspire. Guide. Elevate Future Tech Leaders.</h2>
              <p>
                Join our elite roster of mentors at DAIEL TECH. Share your industry experience with passionate learners in Python, Machine Learning, and Modern Web Development while earning competitive compensation and growing your professional network.
              </p>
              
              <div className="mentor-perks-grid">
                <div className="perk-card">
                  <Briefcase size={20} className="perk-icon" />
                  <h4>Flexible Remote Hours</h4>
                  <p>Mentor on your schedule (2-6 hours/week) with full remote flexibility.</p>
                </div>
                <div className="perk-card">
                  <Users size={20} className="perk-icon" />
                  <h4>Global Tech Community</h4>
                  <p>Connect with top developers, AI engineers, and industry partners.</p>
                </div>
                <div className="perk-card">
                  <Sparkles size={20} className="perk-icon" />
                  <h4>Stipends & Rewards</h4>
                  <p>Receive competitive hourly stipends, performance bonuses, and mentor badges.</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <form className="mentor-form" onSubmit={handleSubmit}>
              <h3 className="form-section-title font-mono">
                <Award size={18} /> Mentor Application Form
              </h3>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Johnson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+234..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Primary Track *</label>
                  <select
                    value={primaryTrack}
                    onChange={(e) => setPrimaryTrack(e.target.value)}
                  >
                    <option value="Python & Data Science">Python & Data Science</option>
                    <option value="Machine Learning & AI">Machine Learning & AI</option>
                    <option value="Frontend Web Development">Frontend Web Development (HTML/CSS/JS/React)</option>
                    <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label>Years of Industry Experience *</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="2-4 Years">2 - 4 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Portfolio / LinkedIn / GitHub URL *</label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/... or https://github.com/..."
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Why do you want to mentor at DAIEL TECH? *</label>
                <textarea
                  rows={4}
                  placeholder="Share a brief overview of your technical background, past teaching or code review experience, and why you want to empower students..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-submit-mentor font-mono">
                <Send size={18} /> Submit Mentor Application to dael042024@gmail.com
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeMentorModal;
