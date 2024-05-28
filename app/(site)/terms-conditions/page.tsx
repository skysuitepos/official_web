import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions of SkyPOS 360",
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
                <h1 className="text-2xl">Terms and Conditions</h1>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Effective Date: 25-05-2024
                </p>
                <h2 className="text-xl">Introduction</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to SkyPOS 360, a product of SkyPOS 360 Pvt Ltd ("Company", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our applications and web apps (the "Applications"). By accessing or using our Applications, you agree to comply with and be bound by these Terms.
                </p>
                <h2 className="text-xl">Company Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  SkyPOS 360 Pvt Ltd<br />
                  Registered in Sri Lanka<br />
                  Company Registration Number: PV00290752
                </p>
                <h2 className="text-xl">Use of Our Services</h2>
                <h3 className="text-lg">Eligibility</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  You must be at least 18 years old to use our Applications. By using our Services, you represent and warrant that you meet this requirement.
                </p>
                <h3 className="text-lg">Account Registration</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  To access certain features of our Applications, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.
                </p>
                <h3 className="text-lg">Prohibited Activities</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  You agree not to use our Applications for any unlawful or prohibited activities, including but not limited to:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Violating any applicable laws or regulations.<br />
                  • Infringing upon the rights of others.<br />
                  • Distributing viruses or other harmful software.<br />
                  • Engaging in fraudulent or deceptive practices.<br />
                  • Interfering with the operation of our Applications.
                </p>
                <h2 className="text-xl">Intellectual Property</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  All content and materials available on our Applications, including but not limited to text, graphics, logos, icons, images, and software, are the property of SkyPOS 360 Pvt Ltd or its licensors and are protected by applicable intellectual property laws. You agree not to reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Applications without our prior written consent.
                </p>
                <h2 className="text-xl">Transactions</h2>
                <h3 className="text-lg">Payments</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  All payments made through our POS applications are processed securely. You agree to provide current, complete, and accurate purchase and account information for all purchases made through our Services.
                </p>
                <h3 className="text-lg">Refunds</h3>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Refunds for purchases made through our POS applications will be handled in accordance with our refund policy, which is available upon request.
                </p>
                <h2 className="text-xl">Termination</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may terminate or suspend your account and access to our Applications immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Applications will cease immediately. In case of failure to make due payments on a given time, we reserve the right to suspend your account barring you from using our services.
                </p>
                <h2 className="text-xl">Limitation of Liability</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  To the maximum extent permitted by law, SkyPOS 360 Pvt Ltd and its affiliates, licensors, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  • Your use of or inability to use our Applications.<br />
                  • Any unauthorized access to or use of our servers and/or any personal information stored therein.<br />
                  • Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Applications by any third party.<br />
                  • Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Applications.
                </p>
                <h2 className="text-xl">Governing Law</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  These Terms shall be governed and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Sri Lanka to resolve any dispute or claim arising from these Terms.
                </p>
                <h2 className="text-xl">Changes to These Terms</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may update our Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" at the top. You are advised to review these Terms periodically for any changes.
                </p>
                <h2 className="text-xl">Contact Us</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  If you have any questions about these Terms, please contact us:
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  SkyPOS 360 Pvt Ltd<br />
                  Email: info@skypos360.com<br />
                  Phone: +94 76 5783980<br />
                  Address: 52/7/B/1 Madinnagoda Road, Rajagiriya, Colombo, Sri Lanka.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  By using our Applications, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Thank you for using SkyPOS 360.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
