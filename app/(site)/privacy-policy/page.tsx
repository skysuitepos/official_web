import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy details of SkyPOS 360",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="text-2xl">Privacy Policy for SkyPOS 360 Applications</h1>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Effective Date: 25-05-2024
                </p>
                <h2 className="text-xl">Introduction</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to SkyPOS 360, a product of SkyPOS 360 Pvt Ltd ("Company", "we", "us", or "our"). SkyPOS 360 offers a range of applications including Point Of Sale (POS) applications and associated services (collectively, the "Services"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our applications and web apps (the "Applications"). By using our Services, you agree to the terms of this Privacy Policy.
                </p>
                <h2 className="text-xl">Company Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  SkyPOS 360 Pvt Ltd<br />
                  Registered in Sri Lanka<br />
                  Company Registration Number: PV00290752
                </p>
                <h2 className="text-xl">Information We Collect</h2>
                <h3 className="text-lg">Personal Information</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Contact Information: Name, email address, physical address, phone number.<br />
                  • Account Information: Username, password, and other credentials for accessing the Services.
                </p>
                <h3 className="text-lg">Transaction Information</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Purchase Details: Information about transactions made through our POS applications, including items purchased, date and time of purchase, transaction methods, and transaction amount.
                </p>
                <h3 className="text-lg">Technical Information</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Device Information: Information about the device you use to access our Applications, including hardware model, operating system, and unique device identifiers.<br />
                  • Usage Information: Details about your usage of our Applications.
                </p>
                <h3 className="text-lg">Location Information</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Geolocation Data: Information about your location when you use our Services, if you grant us access to your location information.
                </p>
                <h3 className="text-lg">Cookies and Similar Technologies</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <h2 className="text-xl">How We Use Your Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • To Provide and Maintain Our Services: Ensuring our Applications function properly and providing customer support.<br />
                  • To Improve Our Services: Analyzing usage patterns to enhance the functionality and user experience of our Applications.<br />
                  • To Process Transactions: Facilitating transactions made through our POS applications and maintaining transaction records.<br />
                  • To Communicate with You: Sending you updates, security alerts, and administrative messages.<br />
                  • To Personalize Your Experience: Customizing our Services to better suit your preferences and interests.<br />
                  • To Ensure Security: Monitoring and enhancing the security of our Applications and Services.
                </p>
                <h2 className="text-xl">How We Share Your Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may share your information in the following circumstances:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • With Service Providers: We may share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.<br />
                  • For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.<br />
                  • Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </p>
                <h2 className="text-xl">Your Rights</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Access: Request access to the personal information we hold about you.<br />
                  • Correction: Request correction of inaccurate or incomplete personal information.<br />
                  • Deletion: Request the deletion of your personal information.<br />
                  • Objection: Object to the processing of your personal information.<br />
                  • Restriction: Request the restriction of processing your personal information.<br />
                  • Portability: Request the transfer of your personal information to another party.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  To exercise these rights, please contact us at the contact information provided below.
                </p>
                <h2 className="text-xl">Changes to This Privacy Policy</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                <h2 className="text-xl">Contact Us</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  SkyPOS 360 Pvt Ltd<br />
                  Email: info@skypos360.com<br />
                  Phone: +94 76 5783980<br />
                  Address: 52/7/B/1 Madinnagoda Road, Rajagiriya, Colombo, Sri Lanka.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  By using our Applications, you acknowledge that you have read and understood this Privacy Policy. Thank you for trusting SkyPOS 360 with your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
