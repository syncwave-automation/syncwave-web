"use client"; // Marks this component as a client-side rendered component in Next.js.

import React from "react"; // Import React for JSX rendering and component creation.
import { SyncwaveLogo } from "./NavBar"; // Import the logo component from the NavBar file.
import { Link } from "@nextui-org/react"; // Import the Link component from NextUI library.

const Footer = () => {
  // Array for menu items with their display names and URLs.
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Lexmo", href: "/lexmo" },
    { name: "Automize", href: "/automize" },
  ];

  const socialLinks = [
     /* GitHub Icon SVG Path */
    {
      name: "Github",
      href: "https://github.com/syncwave-automation",
      svg: (
        <svg
          width="21"
          height="21"
          viewBox="0 2 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
    /* Twitter Icon SVG Path */
    {
      name: "Twitter",
      href: "https://x.com/SyncwavePvtLtd",
      svg: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    /* YouTube Icon SVG Path */
    {
      name: "Youtube",
      href: "https://www.youtube.com/@SyncwaveAutomation",
      svg: (
        <svg
          width="18"
          height="14"
          viewBox="0 -1 18 14"
          className="fill-current"
        >
          <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
        </svg>
      ),
    },
    /* LinkedIn Icon SVG Path */
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/syncwave-automation",
      svg: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          className="fill-current"
        >
          <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
        </svg>
      ),
    },
  ];

  return (
    // Main footer container with styling.
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left Section: Logo and Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <SyncwaveLogo /> {/* Display company logo */}
            <p className="mt-2 text-sm text-center lg:text-left">
              Building the future, one solution at a time.
            </p>
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-primary"
                  aria-label={social.name}
                >
                  {social.svg} {/* Render social media icon */}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section: Menu Links */}
          <div className="flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary"
              >
                {item.name} {/* Render menu link */}
              </Link>
            ))}
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            ©2025 Syncwave Automation Pvt. Ltd.
          </p>
          <p className="text-sm text-gray-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component for use in other parts of the application.

