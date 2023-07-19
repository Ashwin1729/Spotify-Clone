import React from "react";

export const UnmuteIcon = ({ muteHandler }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 225.000000 225.000000"
      preserveAspectRatio="xMidYMid meet"
      className="w-12 h-10 text-gray-200 p-2 rounded-full hover:bg-gray-500 duration-500 cursor-pointer"
      onClick={muteHandler}
    >
      <g
        transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M263 2048 c-21 -22 -27 -42 -24 -83 1 -23 1729 -1757 1775 -1781 55
 -30 116 9 116 73 0 36 -14 52 -330 368 l-330 330 0 520 c0 558 0 558 -52 583
 -50 24 -83 0 -334 -245 l-238 -233 -243 243 c-223 222 -246 242 -281 245 -29
 2 -43 -2 -59 -20z"
        />
        <path
          d="M415 1463 c-11 -3 -30 -14 -42 -26 -23 -20 -23 -22 -23 -314 l0 -294
 25 -24 c24 -25 27 -25 188 -25 l164 0 292 -287 c303 -298 346 -332 396 -313
 43 16 55 63 55 207 l0 128 -478 478 c-475 474 -478 477 -517 476 -22 -1 -49
 -3 -60 -6z"
        />
      </g>
    </svg>
  );
};
