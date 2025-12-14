import React from "react";
import { FaShapes } from "react-icons/fa";
import Tooltip from "../ui/Tooltip";
import { BsTranslate } from "react-icons/bs";
import { FaRotate } from "react-icons/fa6";
import { HiScale } from "react-icons/hi";
import { BiExport, BiImport } from "react-icons/bi";

const SceneMenu = () => {
  return (
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-n-500/10 p-1.5 border border-n-500 backdrop-blur-md rounded-md shadow-md shadow-n-900">
      <div className="relative group flex">
        <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
          <FaShapes />
        </button>
        <Tooltip text="Add Shapes" shortCut="Press A" dxr="top-center" />
      </div>
      <div className="flex gap-1.5 border-l border-n-400/50 pl-1.5">
        <div className="relative group flex">
          <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
            <BsTranslate />
          </button>
          <Tooltip text="Translate" shortCut="Press G" dxr="top-center" />
        </div>
        <div className="relative group flex">
          <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
            <FaRotate />
          </button>
          <Tooltip text="Rotate" shortCut="Press R" dxr="top-center" />
        </div>
        <div className="relative group flex">
          <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
            <HiScale />
          </button>
          <Tooltip text="Scale" shortCut="Press S" dxr="top-center" />
        </div>
      </div>
      <div className="flex gap-1.5 border-l border-n-400/50 pl-1.5">
        <div className="relative group flex">
          <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
            <BiExport />
          </button>
          <Tooltip text="Scale" shortCut="JSON" dxr="top-center" />
        </div>
        <div className="relative group flex">
          <button className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer">
            <BiImport />
          </button>
          <Tooltip text="Scale" shortCut="JSON" dxr="top-center" />
        </div>
      </div>
      <div
        id="object-list-box"
        className="hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 flex-col gap-2 bg-n-500/10 p-2 border border-n-500 backdrop-blur-md rounded-md shadow-md shadow-n-900"
      >
        <div className="flex items-center gap-2 justify-between px-2 pb-1.5 pt-0 border-b border-n-400/60">
          <span className="text-base font-semibold">Select Shapes</span>
          <span className="text-xs text-n-100 font-thin">A / ESC</span>
        </div>
        <button
          data-type="mesh"
          className="add-object-btn group flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z" />
            <path d="M12 22v-10" />
            <path d="M12 12l8.73 -5.04" />
            <path d="M3.27 6.96l8.73 5.04" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Mesh
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + C
            </span>
          </div>
        </button>
        <button
          data-type="plane"
          className="add-object-btn grouop flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Plane
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + P
            </span>
          </div>
        </button>
        <button
          data-type="sphere"
          className="add-object-btn flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12c0 1.657 4.03 3 9 3s9 -1.343 9 -3" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Sphere
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + S
            </span>
          </div>
        </button>
        <button
          data-type="cylinder"
          className="add-object-btn group flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
            <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Cylinder
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + Y
            </span>
          </div>
        </button>
        <button
          data-type="cone"
          className="add-object-btn group flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 1.001c.72 0 1.385 .387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121 .477v.498c0 2.46 -4.306 3.945 -9.677 4.002l-.323 .002c-5.52 0 -10 -1.495 -10 -4.003v-.5a1 1 0 0 1 .121 -.477l8.139 -15.005a2 2 0 0 1 1.74 -1.015" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Cone
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + O
            </span>
          </div>
        </button>
        <button
          data-type="torus"
          className="add-object-btn group flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Torus
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + T
            </span>
          </div>
        </button>
        <button
          data-type="text"
          className="add-object-btn group flex items-center gap-2 p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-4.5 h-4.5transition-all duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
            <path d="M7 13l10 0" />
          </svg>
          <div className="flex-1 flex items-center gap-2 justify-between">
            <span className="text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Text
            </span>
            <span className="text-xs text-n-100 font-semibold transition-all duration-initial group-hover:text-n-50">
              Shift + A + E
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SceneMenu;
