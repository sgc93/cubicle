"use client";

import { useState } from "react";
import { FaPlane, FaShapes } from "react-icons/fa";
import Tooltip from "../ui/Tooltip";
import { BsTranslate } from "react-icons/bs";
import { FaRotate } from "react-icons/fa6";
import { HiScale } from "react-icons/hi";
import { BiCube, BiCylinder, BiExport, BiImport } from "react-icons/bi";
import { PiSphere, PiTextT } from "react-icons/pi";
import { TbCone } from "react-icons/tb";
import { LuTorus } from "react-icons/lu";

const SceneMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-n-500/10 p-1.5 border border-n-500 backdrop-blur-md rounded-md shadow-md shadow-n-900">
        <div className="relative group flex">
          <button
            className="transition-all p-1.5 rounded-md duration-300 group-hover:text-n-50 group-hover:bg-accent-1 cursor-pointer"
            onClick={() => setIsOpen((is) => !is)}
          >
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
      </div>
      {isOpen && (
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-64 flex-col gap-2 bg-n-500/10 p-2 border border-n-500 backdrop-blur-md rounded-md shadow-md shadow-n-900`}
        >
          <div className="flex items-center gap-2 justify-between px-2 pb-1.5 pt-0 border-b border-n-400/60">
            <span className="text-base font-semibold">Select Shapes</span>
            <span className="text-xs text-n-100 font-thin">A / ESC</span>
          </div>
          {[
            { name: "mesh", icon: <BiCube />, shortCut: "Shift + A + C" },
            { name: "plane", icon: <FaPlane />, shortCut: "Shift + A + P" },
            { name: "sphere", icon: <PiSphere />, shortCut: "Shift + A + S" },
            {
              name: "cylinder",
              icon: <BiCylinder />,
              shortCut: "Shift + A + Y"
            },
            { name: "cone", icon: <TbCone />, shortCut: "Shift + A + O" },
            { name: "torus", icon: <LuTorus />, shortCut: "Shift + A + T" },
            { name: "text", icon: <PiTextT />, shortCut: "Shift + A + E" }
          ].map((shape, index) => (
            <button
              key={index}
              className="add-object-btn group flex items-center gap-2 p-1.5 text-n-100 font-semibold bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1 hover:text-n-50"
            >
              {shape.icon}
              <div className="flex-1 flex items-center gap-2 justify-between">
                <span className="capitalize">{shape.name}</span>
                <span className="text-xs">{shape.shortCut}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SceneMenu;
