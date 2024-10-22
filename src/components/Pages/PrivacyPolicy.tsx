import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto lg:px-0 px-3 lg:mt-10 mt-6">
        <p className="mb-4 font-bold lg:text-2xl text-xl">Privacy Policy</p>
        <p className="mb-4">
          KeyFundMe ("we," "us," or "our") is committed to protecting your
          privacy. This Privacy Policy outlines how we collect, use, and
          safeguard your information when you visit or use our platform at
          [KeyFundMe website URL] (the “Platform”). By using the Platform, you
          consent to the data practices described in this policy.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          1. Information We Collect
        </p>
        <p className="mb-4">
          We collect two types of information from our users:
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          1.2. Non-Personal Information
        </p>
        <p className="mb-4">
          We may also collect non-personal information automatically as you
          navigate through the Platform. This includes:
        </p>
        <div className="ms-4">
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            IP address
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Browser type and version
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Pages visited
          </p>

          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Time spent on the Platform
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Cookies and similar tracking technologies
          </p>
        </div>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          2. How We Use Your Information
        </p>
        <p className="mb-4">
          KeyFundMe uses the information we collect for the following purposes:
        </p>
        <div className="ms-4">
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            To create and manage user accounts.
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            To process and track donations.
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            To communicate with you regarding your use of the Platform,
            including updates, promotional offers, or service-related
            announcements.
          </p>

          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            To improve the Platform and enhance user experience.
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            To comply with legal obligations and resolve disputes.
          </p>
        </div>
        <p className="mb-4">
          We do not sell, rent, or lease your personal information to third
          parties.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">3. Data Security</p>
        <p className="mb-4">
          We take reasonable steps to protect your personal information from
          unauthorized access, use, or disclosure. These steps include using
          encryption and secure payment gateways. However, no method of online
          transmission or storage is completely secure, and while we strive to
          protect your personal data, we cannot guarantee its absolute security.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">4. Cookies</p>
        <p className="mb-4">
          We use cookies to enhance your experience on the Platform. Cookies are
          small text files that are placed on your device to track your usage
          patterns and preferences. You can control the use of cookies through
          your browser settings, but disabling cookies may limit your ability to
          use certain features of the Platform.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          5. Third-Party Services
        </p>
        <p className="mb-4">
          We may partner with third-party services (e.g., payment processors) to
          facilitate Platform functionalities. These third-party services have
          their own privacy policies, and we encourage you to review them.
          KeyFundMe is not responsible for the privacy practices of these third
          parties.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">6. Data Retention</p>
        <p className="mb-4">
          We retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected. We may also retain
          and use your data to comply with legal obligations, resolve disputes,
          or enforce our agreements.{" "}
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          7. Your Data Rights
        </p>
        <p className="mb-4">
          Depending on your location, you may have the following rights
          regarding your personal data:
        </p>
        <div className="ms-4">
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Access: Request a copy of your personal information.
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Correction: Request corrections to any inaccurate data.
          </p>
          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Deletion: Request the deletion of your personal information under
            certain circumstances.
          </p>

          <p className="mb-4 bi-star-fill">
            <span className="me-2"></span>
            Opt-Out: Unsubscribe from promotional emails or updates.
          </p>
        </div>
        <p>
          To exercise these rights, please contact us at the email address
          provided below.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          8. Children’s Privacy
        </p>
        <p className="mb-4">
          KeyFundMe is not intended for children under the age of 13. We do not
          knowingly collect personal information from children. If we discover
          that a child under 13 has provided us with personal data, we will take
          steps to delete that information.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">
          9. Changes to this Privacy Policy
        </p>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or legal obligations. When we do, we will revise the
          “Effective Date” at the top of this page. We encourage you to review
          this policy periodically to stay informed about how we are protecting
          your data.
        </p>

        <p className="mb-4 font-bold lg:text-2xl text-xl">10. Contact Us</p>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, or if you wish to
          exercise any of your data rights, please contact us at:
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
