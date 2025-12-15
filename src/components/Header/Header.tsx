"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { CgRedo, CgUndo } from "react-icons/cg";
import { useSceneStore } from "@/stores/store";

const Header = () => {
  const { undo, redo, history } = useSceneStore();
  console.log(history);

  return (
    <div className="w-screen flex items-center gap-3 bg-n-800 h-11 px-3 border-b border-n-300 text-accent-1">
      <Image alt="logo" src={logo} className="w-18" width={72} />
      <div className="flex items-center gap-1.5 rounded-md">
        <button
          className="flex items-center gap-1.5
           bg-n-500/10 border border-n-500 backdrop-blur-md transition-all px-2 py-0.5 rounded-md duration-300 hover:text-n-50 hover:bg-accent-1 cursor-pointer"
          onClick={() => undo()}
        >
          <span>Undo</span>
          <CgUndo />
        </button>
        <button
          className="flex items-center gap-1.5
           bg-n-500/10 border border-n-500 backdrop-blur-md transition-all px-2 py-0.5 rounded-md duration-300 hover:text-n-50 hover:bg-accent-1 cursor-pointer"
          onClick={() => redo()}
        >
          <span>Redo</span>
          <CgRedo />
        </button>
      </div>
    </div>
  );
};

export default Header;
