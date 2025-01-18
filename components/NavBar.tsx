"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

//The currentColor is applied on the text parts of the SVG
//It will change color based on the theme
export const SyncwaveLogo = () => (
  <svg
    fill="none"
    viewBox="0 0 556 86"
    style={{
      maxHeight: "25px",
      width: "auto", // Maintain aspect ratio
    }}
  >
    <path
      id="syncwave-text"
      d="M237.41 74.1074C237.41 76.9039 239.64 79.4507 243.5 79.4507C245.835 79.4507 247.535 78.459 248.456 76.9747C248.456 78.1756 248.598 78.8132 248.632 78.9548H253.483C253.446 78.7794 253.271 77.6123 253.271 76.2292V67.6308C253.271 64.018 251.182 60.8337 245.48 60.8337C240.312 60.8337 237.977 64.1597 237.764 66.6728L242.437 67.6308C242.542 66.3186 243.571 65.0469 245.447 65.0469C247.144 65.0469 248.031 65.9307 248.031 66.9561C248.031 67.5599 247.711 68.0187 246.756 68.1604L242.613 68.7979C239.711 69.223 237.41 70.9939 237.41 74.1074ZM244.809 75.558C243.321 75.558 242.721 74.6742 242.721 73.7533C242.721 72.5153 243.571 71.9823 244.701 71.8069L248.031 71.2739V72.0531C248.031 74.7787 246.402 75.558 244.809 75.558ZM268.953 78.9548H274.122C274.085 78.6715 273.946 77.3998 273.946 75.8042V61.3633H268.565V71.3819C268.565 73.1494 267.431 74.3908 265.626 74.3908C263.713 74.3908 262.792 73.0449 262.792 71.3447V61.3633H257.411V72.4782C257.411 76.2292 259.82 79.3461 264.105 79.3461C265.872 79.3461 267.89 78.7086 268.811 77.1872C268.811 77.646 268.882 78.6377 268.953 78.9548ZM285.134 56.2325H280.316V58.496C280.316 60.1253 279.432 61.3633 277.59 61.3633H276.706V66.0723H279.824V73.6116C279.824 77.1164 282.054 79.2753 285.698 79.2753C287.398 79.2753 288.282 78.884 288.495 78.7794V74.32C288.178 74.3908 287.648 74.4954 287.081 74.4954C285.91 74.4954 285.134 74.1074 285.134 72.6569V66.0723H288.566V61.3633H285.134V56.2325ZM300.249 74.5325C298.232 74.5325 296.285 73.082 296.285 70.1439C296.285 67.1686 298.232 65.789 300.249 65.789C302.301 65.789 304.214 67.1686 304.214 70.1439C304.214 73.1157 302.301 74.5325 300.249 74.5325ZM300.249 60.8337C295.01 60.8337 290.904 64.6927 290.904 70.1439C290.904 75.5951 295.01 79.4878 300.249 79.4878C305.523 79.4878 309.595 75.5951 309.595 70.1439C309.595 64.6927 305.523 60.8337 300.249 60.8337ZM318.445 78.9548V68.8317C318.445 67.2395 319.471 65.789 321.35 65.789C323.297 65.789 324.181 67.0978 324.181 68.7608V78.9548H329.491V68.7979C329.491 67.2395 330.517 65.789 332.43 65.789C334.343 65.789 335.227 67.0978 335.227 68.7608V78.9548H340.43V67.5599C340.43 62.78 337.245 60.8337 333.918 60.8337C331.546 60.8337 329.846 61.6129 328.466 63.593C327.578 61.8591 325.773 60.8337 323.26 60.8337C321.35 60.8337 319.083 61.8254 318.199 63.3805V61.3633H313.064V78.9548H318.445ZM343.901 74.1074C343.901 76.9039 346.132 79.4507 349.991 79.4507C352.326 79.4507 354.027 78.459 354.948 76.9747C354.948 78.1756 355.089 78.8132 355.123 78.9548H359.975C359.938 78.7794 359.762 77.6123 359.762 76.2292V67.6308C359.762 64.018 357.674 60.8337 351.972 60.8337C346.803 60.8337 344.468 64.1597 344.256 66.6728L348.928 67.6308C349.033 66.3186 350.062 65.0469 351.938 65.0469C353.635 65.0469 354.522 65.9307 354.522 66.9561C354.522 67.5599 354.202 68.0187 353.247 68.1604L349.104 68.7979C346.202 69.223 343.901 70.9939 343.901 74.1074ZM351.3 75.558C349.812 75.558 349.212 74.6742 349.212 73.7533C349.212 72.5153 350.062 71.9823 351.192 71.8069L354.522 71.2739V72.0531C354.522 74.7787 352.893 75.558 351.3 75.558ZM370.559 56.2325H365.744V58.496C365.744 60.1253 364.86 61.3633 363.018 61.3633H362.134V66.0723H365.248V73.6116C365.248 77.1164 367.478 79.2753 371.126 79.2753C372.826 79.2753 373.71 78.884 373.923 78.7794V74.32C373.602 74.3908 373.072 74.4954 372.506 74.4954C371.338 74.4954 370.559 74.1074 370.559 72.6569V66.0723H373.993V61.3633H370.559V56.2325ZM383.198 78.9548V61.3633H377.816V78.9548H383.198ZM377.357 55.9829C377.357 57.7168 378.774 59.1335 380.471 59.1335C382.243 59.1335 383.66 57.7168 383.66 55.9829C383.66 54.2491 382.243 52.8323 380.471 52.8323C378.774 52.8323 377.357 54.2491 377.357 55.9829ZM395.978 74.5325C393.96 74.5325 392.014 73.082 392.014 70.1439C392.014 67.1686 393.96 65.789 395.978 65.789C398.033 65.789 399.942 67.1686 399.942 70.1439C399.942 73.1157 398.033 74.5325 395.978 74.5325ZM395.978 60.8337C390.738 60.8337 386.632 64.6927 386.632 70.1439C386.632 75.5951 390.738 79.4878 395.978 79.4878C401.255 79.4878 405.324 75.5951 405.324 70.1439C405.324 64.6927 401.255 60.8337 395.978 60.8337ZM414.174 68.8688C414.174 67.0978 415.307 65.789 417.078 65.789C419.025 65.789 419.946 67.0978 419.946 68.8317V78.9548H425.328V67.9141C425.328 64.0551 423.344 60.9045 418.917 60.9045C417.112 60.9045 414.953 61.7175 413.998 63.3805V61.3633H408.792V78.9548H414.174V68.8688ZM442.464 85.6811V76.6543C443.382 78.1756 445.366 79.417 447.984 79.417C452.977 79.417 455.916 75.4871 455.916 70.4272C455.916 65.4719 453.19 61.542 448.092 61.542C445.332 61.542 443.311 62.8846 442.393 64.5847V61.93H439.171V85.6811H442.464ZM452.518 70.4272C452.518 73.9287 450.571 76.4417 447.491 76.4417C444.444 76.4417 442.427 73.9287 442.427 70.4272C442.427 67.027 444.444 64.4802 447.491 64.4802C450.605 64.4802 452.518 67.027 452.518 70.4272ZM474.219 61.93H470.643L465.758 75.0621L460.906 61.93H457.154L464.057 78.9548H467.421L474.219 61.93ZM482.398 56.5496H479.351V59.3123C479.351 60.7966 478.572 61.93 476.733 61.93H475.812V64.9389H479.068V74.2829C479.068 77.3626 480.91 79.1336 483.811 79.1336C484.945 79.1336 485.795 78.9211 486.079 78.8131V75.983C485.795 76.0538 485.195 76.1247 484.77 76.1247C483.035 76.1247 482.398 75.3454 482.398 73.787V64.9389H486.079V61.93H482.398V56.5496ZM490.151 76.6914C490.151 78.071 491.21 79.1336 492.594 79.1336C493.974 79.1336 495.07 78.071 495.07 76.6914C495.07 75.3117 493.974 74.212 492.594 74.212C491.21 74.212 490.151 75.3117 490.151 76.6914ZM512.561 78.9548V53.3282H509.231V78.9548H512.561ZM522.686 56.5496H519.639V59.3123C519.639 60.7966 518.863 61.93 517.021 61.93H516.1V64.9389H519.359V74.2829C519.359 77.3626 521.198 79.1336 524.103 79.1336C525.233 79.1336 526.083 78.9211 526.367 78.8131V75.983C526.083 76.0538 525.483 76.1247 525.058 76.1247C523.324 76.1247 522.686 75.3454 522.686 73.787V64.9389H526.367V61.93H522.686V56.5496ZM532.598 70.3901C532.598 66.8853 534.582 64.4093 537.626 64.4093C540.669 64.4093 542.511 66.8145 542.511 70.3193C542.511 73.8241 540.635 76.4788 537.589 76.4788C534.404 76.4788 532.598 73.8949 532.598 70.3901ZM542.545 76.6543C542.545 77.6831 542.653 78.5669 542.724 78.9548H545.946C545.909 78.6715 545.767 77.4335 545.767 75.8042V53.3282H542.477V64.3385C541.911 62.9588 540.281 61.4712 537.271 61.4712C532.457 61.4712 529.201 65.5765 529.201 70.3901C529.201 75.4534 532.281 79.417 537.271 79.417C539.927 79.417 541.732 78.0002 542.545 76.3709V76.6543ZM551.077 76.6914C551.077 78.071 552.14 79.1336 553.52 79.1336C554.904 79.1336 556 78.071 556 76.6914C556 75.3117 554.904 74.212 553.52 74.212C552.14 74.212 551.077 75.3117 551.077 76.6914Z"
      fill="currentColor"
    />
    <path
      id="syncwave-text"
      d="M146.543 32.6431C146.894 37.4702 151.283 46.3351 164.978 46.3351C176.652 46.3351 182.361 39.0523 182.361 31.5906C182.361 25.1848 177.971 19.7403 168.929 17.8985L163.136 16.7584C161.203 16.4076 159.712 15.3517 159.712 13.5099C159.712 11.2296 161.905 9.73525 164.452 9.73525C168.491 9.73525 170.333 12.1944 170.684 15.0886L181.747 13.0714C181.305 7.98115 176.915 0.0809708 164.276 0.0809708C154.533 0.0809708 147.508 6.57787 147.508 14.5624C147.508 20.7085 151.196 25.9741 160.501 27.9913L165.505 29.1315C168.754 29.8365 169.806 31.1521 169.806 32.7308C169.806 34.6636 168.14 36.5055 164.715 36.5055C160.15 36.5055 158.045 33.6078 157.866 30.6259L146.543 32.6431ZM207.291 61.697L234.154 1.39654H220.021L210.364 24.7159L199.743 1.39654H184.817L203.164 39.0792L193.245 61.697H207.291ZM254.259 20.0035C254.259 15.6148 257.066 12.3698 261.456 12.3698C266.284 12.3698 268.568 15.6148 268.568 19.9157V45.0196H281.909V17.6354C281.909 8.06885 276.993 0.25638 266.021 0.25638C261.543 0.25638 256.189 2.27696 253.821 6.39909V1.39654H240.915V45.0196H254.259V20.0035ZM313.249 12.3698C318.431 12.3698 321.063 15.5271 322.028 18.8633L333.968 15.264C332.038 7.45492 325.014 0.0809708 312.986 0.0809708C300.172 0.0809708 289.986 9.64754 289.986 23.2519C289.986 36.7686 300.435 46.3351 313.428 46.3351C325.102 46.3351 332.302 38.7891 334.231 31.1521L322.467 27.5528C321.502 30.8013 318.607 34.0497 313.428 34.0497C307.895 34.0497 303.242 30.1873 303.242 23.2519C303.242 16.2321 307.719 12.3698 313.249 12.3698ZM366.01 1.39654L357.407 27.202L350.119 1.39654H336.249L349.944 45.0196H363.463L372.768 16.8461L382.249 45.0196H395.505L409.025 1.39654H395.944L388.66 27.2897L380.144 1.39654H366.01ZM413.151 32.9939C413.151 39.9293 418.681 46.2474 428.249 46.2474C434.046 46.2474 438.26 43.7917 440.541 40.1047C440.541 43.0901 440.891 44.6687 440.979 45.0196H453.007C452.92 44.581 452.478 41.6834 452.478 38.2629V16.9338C452.478 7.98115 447.302 0.0809708 433.169 0.0809708C420.351 0.0809708 414.555 8.33197 414.028 14.5624L425.618 16.9338C425.881 13.6853 428.425 10.5246 433.077 10.5246C437.291 10.5246 439.488 12.7206 439.488 15.264C439.488 16.7584 438.698 17.8985 436.327 18.2494L426.056 19.828C418.856 20.8839 413.151 25.2725 413.151 32.9939ZM431.498 36.5932C427.811 36.5932 426.319 34.4005 426.319 32.1168C426.319 29.0472 428.425 27.7282 431.235 27.2897L439.488 25.9741V27.9036C439.488 34.6637 435.449 36.5932 431.498 36.5932ZM505.411 1.39654H491.365L482.06 28.5176L471.965 1.39654H457.481L475.39 45.0196H488.822L505.411 1.39654ZM520.951 17.9862C521.215 14.7378 524.022 10.6123 529.643 10.6123C535.962 10.6123 538.243 14.6501 538.418 17.9862H520.951ZM539.387 29.3103C538.155 32.7308 535.436 35.0145 530.608 35.0145C525.429 35.0145 520.951 31.5029 520.688 26.5881H551.06C551.148 26.3249 551.324 24.3044 551.324 22.4626C551.324 8.41967 542.983 0.0809708 529.467 0.0809708C518.141 0.0809708 507.695 9.03361 507.695 23.0765C507.695 37.7333 518.404 46.3351 530.432 46.3351C541.492 46.3351 548.429 40.017 550.534 32.4677L539.387 29.3103Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.7395 51.9148C56.1791 51.9148 62.215 57.9496 62.215 65.391C62.215 72.8324 56.1791 78.8638 48.7395 78.8638C41.2967 78.8638 35.2607 72.8324 35.2607 65.391C35.2607 57.9496 41.2967 51.9148 48.7395 51.9148ZM54.7046 59.4237C53.1695 57.9125 51.0642 56.968 48.7395 56.968C46.4048 56.968 44.2927 57.9057 42.7711 59.4237C41.2528 60.9451 40.3148 63.0567 40.3148 65.391C40.3148 67.7152 41.2562 69.8201 42.7812 71.3448C44.2927 72.8729 46.4048 73.8107 48.7395 73.8107C51.0642 73.8107 53.1695 72.8662 54.6945 71.3448C56.2162 69.8201 57.1609 67.7152 57.1609 65.391C57.1609 63.0567 56.2229 60.9451 54.7046 59.4237Z"
      fill="#32CB72"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M71.8645 0C79.3074 0 85.3434 6.03477 85.3434 13.4762C85.3434 20.9176 79.3074 26.949 71.8645 26.949C64.4216 26.949 58.3857 20.9176 58.3857 13.4762C58.3857 6.03477 64.4216 0 71.8645 0ZM77.8296 7.50888C76.2979 5.99766 74.1891 5.05315 71.8645 5.05315C69.5298 5.05315 67.421 5.99091 65.8994 7.50888C64.3778 9.03022 63.4398 11.1419 63.4398 13.4762C63.4398 15.8004 64.3845 17.9053 65.9062 19.43C67.421 20.9581 69.5298 21.8958 71.8645 21.8958C74.1891 21.8958 76.2979 20.9513 77.8195 19.43C79.3445 17.9053 80.2858 15.8004 80.2858 13.4762C80.2858 11.1419 79.3479 9.03022 77.8296 7.50888Z"
      fill="#32CB72"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5804 56.4718C25.679 58.8466 26.9577 61.9702 26.9577 65.3907C26.9577 72.8321 20.9217 78.8635 13.4788 78.8635C6.03596 78.8635 0 72.8321 0 65.3907C0 57.9897 5.97186 51.982 13.354 51.9145L26.5056 22.3951C24.407 20.0169 23.1283 16.8967 23.1283 13.4762C23.1283 6.03477 29.1642 0 36.6071 0C44.05 0 50.086 6.03477 50.086 13.4762C50.086 20.8737 44.1175 26.8815 36.7353 26.949L23.5804 56.4718Z"
      fill="#32CB72"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M94.0953 56.4718C96.1939 58.8466 97.4693 61.9702 97.4693 65.3907C97.4693 72.8321 91.4367 78.8635 83.9938 78.8635C76.5509 78.8635 70.5149 72.8321 70.5149 65.3907C70.5149 57.9897 76.4834 51.982 83.8689 51.9145L97.0205 22.3917C94.9186 20.0169 93.6432 16.8967 93.6432 13.4762C93.6432 6.03477 99.6792 0 107.122 0C114.565 0 120.601 6.03477 120.601 13.4762C120.601 20.8737 114.629 26.8815 107.247 26.949L94.0953 56.4718Z"
      fill="#32CB72"
    />
  </svg>
);

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname(); // Get the current route

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the theme is mounted before rendering the toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="font-space-grotesk w-auto"
      maxWidth="xl"
      position="sticky"
    >
      {/* Brand and Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <SyncwaveLogo />
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <button
          className="px-4 py-2 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 2 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
              fill="currentcolor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
              fill="currentcolor"
            ></path>
          </svg>
        </button>
        <NavbarItem className="hidden lg:flex">
          <Link href="/lexmo">
            <Button color="default">Lexmo</Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="https://automize.syncwave.co.in" target="_blank">
            <Button color="default">Automize</Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground"
              } w-full`}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
