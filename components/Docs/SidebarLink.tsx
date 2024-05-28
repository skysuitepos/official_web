"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Introduction
        </Link>
        <Link
          href={`/privacy-policy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Privacy Policy
        </Link>
        <Link
          href={`/terms-conditions`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Terms and Conditions
        </Link>
        <Link
          href={`/refund-policy`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Refund Policy
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
