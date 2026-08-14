import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  BookOpen,
  ShieldAlert,
  UserCheck,
  Scale,
  ChevronRight,
  Info,
  Receipt,
} from "lucide-react";
import { legalData } from "../data/legalData";
import "./LegalPages.css";

const LegalPages = ({ initialTab = "terms", onBack }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // terms | privacy | conduct
  const [searchQuery, setSearchQuery] = useState("");

  // Reset search query and scroll to top when tab changes
  useEffect(() => {
    setActiveTab(initialTab);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [initialTab]);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Map the activeTab to key and document in legalData
  const getDocumentDetails = () => {
    switch (activeTab) {
      case "privacy":
        return {
          doc: legalData.documents.privacy_policy,
          icon: <UserCheck className="doc-type-icon" size={24} />,
          key: "privacy",
        };
      case "conduct":
        return {
          doc: legalData.documents.code_of_conduct,
          icon: <ShieldAlert className="doc-type-icon" size={24} />,
          key: "conduct",
        };
      case "refund":
        return {
          doc: legalData.documents.refund_policy,
          icon: <Receipt className="doc-type-icon" size={24} />,
          key: "refund",
        };
      case "terms":
      default:
        return {
          doc: legalData.documents.terms_and_conditions,
          icon: <Scale className="doc-type-icon" size={24} />,
          key: "terms",
        };
    }
  };

  const { doc, icon: docIcon } = getDocumentDetails();

  // Helper function to escape special regex characters in search query
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Helper to highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="legal-highlight">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  // Scroll to a specific section by its ID
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Leave space for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Filter sections and clauses based on search query
  const getFilteredSections = () => {
    if (!searchQuery.trim()) return doc.sections;

    const query = searchQuery.toLowerCase();

    return doc.sections
      .map((section) => {
        // Check if section heading matches, or if any of its clauses match
        const sectionHeadingMatches = section.heading
          .toLowerCase()
          .includes(query);

        const filteredClauses = section.clauses.filter(
          (clause) =>
            clause.topic.toLowerCase().includes(query) ||
            clause.text.toLowerCase().includes(query),
        );

        // If either heading matches or there are matching clauses, include the section
        if (sectionHeadingMatches || filteredClauses.length > 0) {
          return {
            ...section,
            // If heading matched but no clauses matched, show all clauses; otherwise show filtered ones
            clauses:
              filteredClauses.length > 0 ? filteredClauses : section.clauses,
            isHeadingMatch:
              sectionHeadingMatches && filteredClauses.length === 0,
          };
        }

        return null;
      })
      .filter(Boolean);
  };

  const filteredSections = getFilteredSections();
  const hasResults = filteredSections.length > 0;

  return (
    <div className="legal-wrapper">
      {/* 1. BREADCRUMBS & NAVIGATION */}
      <div className="legal-nav-header">
        <div className="legal-container">
          <div className="legal-header-flex">
            <button className="legal-back-btn" onClick={onBack}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <div className="legal-breadcrumbs">
              <span className="crumb-link" onClick={onBack}>
                Home
              </span>
              <ChevronRight size={14} className="crumb-sep" />
              <span
                className="crumb-link"
                onClick={() => handleTabChange("terms")}
              >
                Legal
              </span>
              <ChevronRight size={14} className="crumb-sep" />
              <span className="crumb-active">{doc.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="legal-container">
        {/* 2. DYNAMIC HEADER HERO */}
        <header className="legal-hero-panel">
          <div className="hero-glow-effect"></div>
          <div className="hero-content">
            <div className="hero-badge">
              {docIcon}
              <span>Official Platform Document</span>
            </div>
            <h1 className="legal-title">{doc.title}</h1>
            <p className="legal-intro">{doc.introduction}</p>
            <span className="legal-brand-badge">
              Compliance Partner: {legalData.brand_name}
            </span>
          </div>
        </header>

        {/* 3. DYNAMIC TAB CONTROL BAR */}
        <div className="legal-tabs-bar">
          <button
            className={`legal-tab-btn ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => handleTabChange("terms")}
          >
            <Scale size={18} />
            <span>Terms & Conditions</span>
          </button>
          <button
            className={`legal-tab-btn ${activeTab === "privacy" ? "active" : ""}`}
            onClick={() => handleTabChange("privacy")}
          >
            <UserCheck size={18} />
            <span>Privacy Policy</span>
          </button>
          <button
            className={`legal-tab-btn ${activeTab === "conduct" ? "active" : ""}`}
            onClick={() => handleTabChange("conduct")}
          >
            <ShieldAlert size={18} />
            <span>Code of Conduct</span>
          </button>
          <button
            className={`legal-tab-btn ${activeTab === "refund" ? "active" : ""}`}
            onClick={() => handleTabChange("refund")}
          >
            <Receipt size={18} />
            <span>Refund Policy</span>
          </button>
        </div>

        {/* 4. MAIN LAYOUT (DUAL-PANE ON DESKTOP) */}
        <div className="legal-layout-grid">
          {/* Left Sidebar Pane */}
          <aside className="legal-sidebar">
            <div className="sidebar-sticky-panel">
              <div className="search-box-wrapper">
                <Search className="search-icon" size={16} />
                <input
                  type="text"
                  placeholder={`Search ${doc.title}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="legal-search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear-btn"
                    onClick={() => setSearchQuery("")}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Table of Contents */}
              <div className="toc-wrapper">
                <h4 className="toc-title">
                  <BookOpen size={14} />
                  <span>Table of Contents</span>
                </h4>
                <ul className="toc-list">
                  {doc.sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        onClick={(e) => scrollToSection(e, section.id)}
                        className="toc-link"
                      >
                        <ChevronRight size={12} className="toc-arrow" />
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compliance Info Card */}
              <div className="legal-info-card">
                <Info size={16} className="info-icon" />
                <p>
                  These documents form the legal framework of Daiel Tech LMS.
                  For queries regarding compliance, contact our support team.
                </p>
                <div className="version-tag">Version 2026.1</div>
              </div>
            </div>
          </aside>

          {/* Right Main Pane */}
          <main className="legal-content-pane">
            {/* Search feedback */}
            {searchQuery && (
              <div className="search-results-feedback">
                Showing search results for "<strong>{searchQuery}</strong>".
                Found {filteredSections.length} matching sections.
              </div>
            )}

            {/* Document Content */}
            {hasResults ? (
              <div className="legal-sections-container">
                {filteredSections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="legal-section-card"
                  >
                    <div className="section-glow-line"></div>
                    <h3 className="section-heading">
                      {highlightText(section.heading, searchQuery)}
                    </h3>

                    <div className="clauses-list">
                      {section.clauses.map((clause, idx) => (
                        <div key={idx} className="clause-item">
                          <div className="clause-header">
                            <span className="clause-bullet">§</span>
                            <h4 className="clause-topic">
                              {highlightText(clause.topic, searchQuery)}
                            </h4>
                          </div>
                          <p className="clause-text">
                            {highlightText(clause.text, searchQuery)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className="legal-no-results">
                <ShieldAlert size={48} className="no-results-icon" />
                <h3>No Matches Found</h3>
                <p>
                  We couldn't find any clauses or headings matching "
                  {searchQuery}". Try different keywords or browse the full
                  document.
                </p>
                <button
                  className="btn-clear-search"
                  onClick={() => setSearchQuery("")}
                >
                  Reset Search
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;
