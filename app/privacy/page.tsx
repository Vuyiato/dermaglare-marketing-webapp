export default function PrivacyPolicy() {
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
        Privacy Policy
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
          1. Information We Collect
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          At Dermaglare Skin, we collect information necessary to provide
          quality dermatological care. This includes personal information such
          as name, contact details, medical history, and treatment records.
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
          2. How We Use Your Information
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          Your information is used to provide medical services, maintain your
          health records, communicate with you about appointments, and improve
          our services.
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
          3. Data Security
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          We implement appropriate security measures to protect your personal
          and medical information in accordance with POPIA (Protection of
          Personal Information Act) regulations.
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
          4. Your Rights
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          You have the right to access, correct, or request deletion of your
          personal information. Please contact us at info@dermaglareskin.co.za
          for any privacy-related requests.
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
          If you have questions about this Privacy Policy, please contact us at:
          <br />
          Email: info@dermaglareskin.co.za
          <br />
          Phone: 069 322 3134
        </p>
      </section>
    </main>
  );
}
