export default function CookiePolicy() {
  return (
    <main
      style={{ padding: "100px 20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "30px",
          color: "#1a1a1a",
        }}
      >
        Cookie Policy
      </h1>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#4b5563",
          marginBottom: "20px",
        }}
      >
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          1. What Are Cookies
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          Cookies are small text files that are stored on your device when you
          visit our website. They help us provide you with a better experience
          by remembering your preferences.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          2. Types of Cookies We Use
        </h2>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#4b5563",
            marginBottom: "10px",
          }}
        >
          <strong>Essential Cookies:</strong> Required for the website to
          function properly.
        </p>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            color: "#4b5563",
            marginBottom: "10px",
          }}
        >
          <strong>Analytics Cookies:</strong> Help us understand how visitors
          use our website.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          <strong>Functional Cookies:</strong> Remember your preferences and
          choices.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          3. How We Use Cookies
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          We use cookies to improve your browsing experience, analyze website
          traffic, and personalize content. This helps us provide better service
          to our patients.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          4. Managing Cookies
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          You can control and manage cookies through your browser settings.
          Please note that disabling certain cookies may affect website
          functionality.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#1a1a1a",
          }}
        >
          5. Contact Us
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          If you have questions about our use of cookies, please contact us at:
          <br />
          Email: info@dermaglareskin.co.za
          <br />
          Phone: 069 322 3134
        </p>
      </section>
    </main>
  );
}
