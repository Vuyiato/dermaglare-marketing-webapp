export default function TermsOfService() {
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
        Terms of Use
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
          1. Acceptance of Terms
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          By accessing and using Dermaglare Skin's website and services, you
          accept and agree to be bound by these Terms of Use and our Privacy
          Policy.
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
          2. Medical Services
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          Our services are provided by qualified medical professionals.
          Appointment bookings are subject to availability and confirmation. We
          reserve the right to refuse service in certain circumstances.
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
          3. Cancellation Policy
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          Please provide at least 24 hours notice for appointment cancellations.
          Late cancellations or no-shows may be subject to a cancellation fee.
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
          4. Payment Terms
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          Payment is due at the time of service. We accept cash, credit/debit
          cards, and medical aid. Patients are responsible for verifying their
          medical aid coverage.
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
          5. Limitation of Liability
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          While we strive to provide the best possible care, medical outcomes
          cannot be guaranteed. Our liability is limited as per South African
          medical practice regulations.
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
          6. Contact Information
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.8", color: "#4b5563" }}>
          For questions about these terms, please contact us at:
          <br />
          Email: info@dermaglareskin.co.za
          <br />
          Phone: 069 322 3134
        </p>
      </section>
    </main>
  );
}
