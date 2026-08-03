import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Caught in React ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            background: "var(--dash-surface, #0f172a)",
            borderRadius: "20px",
            border: "1px solid var(--dash-border, rgba(255, 255, 255, 0.1))",
            color: "var(--dash-text-main, #f8fafc)",
            margin: "20px auto",
            maxWidth: "600px",
            boxShadow: "0 10px 30px var(--color-shadow, rgba(0,0,0,0.5))",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px" }}>
            Something went wrong rendering this section
          </h2>
          <p style={{ color: "var(--dash-text-muted, #94a3b8)", marginBottom: "20px" }}>
            A temporary component error occurred. You can click below to refresh this section safely.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: "10px 24px",
              background: "var(--dash-solid-primary, #0053E4)",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Reload Component
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
