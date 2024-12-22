const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Privacy Policy for FJU Christian Vibes</h1>

        <p className="text-center text-gray-500 mb-8">
          Effective Date: 30/11/2024
        </p>

        <p className="text-gray-700 mb-6">
          FJU Christian Vibes is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our app. By using our app, you consent to the practices described in this Privacy Policy.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect different types of information to provide and improve our music streaming services. This includes:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Personal Information</strong>: When you use the app, we may collect personal details such as:
              <ul className="list-inside">
                <li>Email address: Only collected if you choose to register or use features that require login.</li>
                <li>Name: If provided, we may use this information to display it on your profile.</li>
                <li>Password: Only collected for authentication if you choose to register or log in.</li>
              </ul>
            </li>
            <li><strong>Advertising Data</strong>: We are not currently using any advertising services, but we may introduce audio ads in the future. If we do, we may collect anonymous data related to:</li>

            <ul className="list-inside"> <li>Advertising identifiers</li> <li>Interaction with ads (e.g., clicks or impressions)</li> </ul>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. How We Store and Secure Your Information</h2>
          <p className="text-gray-700 mb-4">
            We store your personal information securely using MongoDB Atlas, a cloud-based database solution. MongoDB Atlas uses advanced security measures, including encryption at rest and in transit, to protect your data.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Data Security:</strong> We take reasonable steps to secure your data using industry-standard encryption and security protocols. However, no data transmission or storage method is fully secure, and we cannot guarantee complete security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Share Your Information</h2>
          <p className="text-gray-700 mb-4">
            We do not share your personal information except in the following cases:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>With Service Providers</strong>: We may share information with third-party service providers who assist in app operations, such as Firebase for live streaming and MongoDB Atlas for data storage.</li>
            <li><strong>Legal Compliance</strong>: We may disclose your information if required by law or to respond to legal requests.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Retention and Deletion</h2>
          <p className="text-gray-700 mb-4">
            You have the ability to permanently delete your account and all associated data through the "Delete Account" button in your profile page. Once you confirm the deletion, your account, personal information, preferences, and all streaming history will be permanently removed from our system.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Please note:</strong> This action is irreversible, and once deleted, your data cannot be recovered. We retain your personal data for as long as necessary to provide services or comply with legal obligations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Your Rights and Choices</h2>
          <p className="text-gray-700 mb-4">
            Depending on your jurisdiction, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Access and Correction:</strong> You can request access to or correction of your personal information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your account and personal data at any time using the "Delete Account" button on your profile page.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Children's Privacy</h2>
          <p className="text-gray-700 mb-4">
            Our app is not intended for children under the age of 13 (or 16, depending on jurisdiction). We do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal data from a child, we will delete such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">7. International Data Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your data may be stored or processed in countries outside your country of residence. By using the app, you consent to the transfer and processing of your data in these locations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. When significant changes are made, we will notify you via the app or other means. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="text-gray-700">
            aocholayoul9@gmail.com<br />
            +337-82-37-11-77<br />
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
