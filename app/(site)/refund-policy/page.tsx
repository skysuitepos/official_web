import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy of SkyPOS 360",
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
                <h1 className="text-2xl">Refund Policy</h1>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Effective Date: 25-05-2024
                </p>
                <h2 className="text-xl">Introduction</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to SkyPOS 360, a product of SkyPOS 360 Pvt Ltd ("Company", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our applications and web apps (the "Applications"). If, for any reason, you are not completely satisfied with your purchase, we are here to help.
                </p>
                <h2 className="text-xl">Company Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  SkyPOS 360 Pvt Ltd<br />
                  Registered in Sri Lanka<br />
                  Company Registration Number: PV00290752
                </p>
                <h2 className="text-xl">Refunds</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Once we receive your request for cancellation of a subscription, we will notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment.
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
