const SecondarySidebar = () => {
  return (
    <div className=" flex flex-col gap-1.5 bg-n-600/60 p-1.5 overflow-hidden transition-all duration-500">
      <div className="min-h-1/4 max-h-1/3 bg-n-800 rounded-md rounded-b-none flex flex-col gap-2 py-1.5 cubic-scroll">
        <button className="group flex items-center gap-1.5 bg-n-700 px-2 py-1 cursor-pointer">
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
            className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50 group-hover:scale-105"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10l6 6l6 -6h-12" />
          </svg>
          <span className="text-n-100 transition-all duration-300 translate-x-0 hover:text-n-50 hover:translate-x-1">
            Scene Collection
          </span>
        </button>
        <div
          id="open-objects-list-box"
          className="flex flex-col gap-1.5 ml-5 pl-2 pr-2 border-l border-n-400/60"
        >
          <div className="group flex items-center gap-3 justify-between px-1 py-0.5 transition-all duration-300 hover:bg-n-600 rounded-sm">
            <button className="flex items-center gap-2 cursor-pointer">
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
                className="w-3.5 h-3.5 stroke-n-100 transition-all duration-300 group-hover:stroke-accent-1"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z" />
                <path d="M12 22v-10" />
                <path d="M12 12l8.73 -5.04" />
                <path d="M3.27 6.96l8.73 5.04" />
              </svg>

              <span className="text-n-100 text-sm transition-all duration-300 group-hover:text-accent-1">
                Cube
              </span>
            </button>

            <button className="group cursor-pointer p-0.5 transition-all duration-300 hover:bg-accent-1/10 opacity-0 group-hover:opacity-100">
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
                className="w-3.5 h-3.5 stroke-accent-1 transition-all duration-300"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-2/3 max-h-3/4 flex-1 bg-n-800 rounded-md rounded-t-none flex flex-col gap-2 py-1.5 cubic-scroll">
        <div className="flex items-center gap-1.5 bg-n-700 px-2 py-1 cursor-pointer">
          <div id="selected-object-svg"></div>
          <span
            id="selected-object-name"
            className="text-n-100 line-clamp-1 text-ellipsis max-w-44 text-start"
          >
            Torus (01)
          </span>
          <div className="flex items-center gap-1 grow justify-end">
            <div className="relative group flex items-center justify-center">
              <button className="cursor-pointer p-0.5 transition-all duration-300 hover:bg-accent-1/10">
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
                  className="w-3.5 h-3.5 stroke-accent-1 transition-all duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                  <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                </svg>
              </button>
              <div className="absolute -bottom-[250%] -right-1.5 z-10 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
                <div className="absolute -top-1.5 right-2 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
                <span className="text-xs font-semibold tracking-wider">
                  Duplicate
                </span>
                <span className="text-[12px] tracking-tight">Shift + D</span>
              </div>
            </div>
            <div className="relative group flex items-center justify-center">
              <button className="cursor-pointer p-0.5 transition-all duration-300 hover:bg-accent-1/10">
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
                  className="w-3.5 h-3.5 stroke-accent-1 transition-all duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
              <div className="absolute -bottom-[250%] -right-1 z-10 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
                <div className="absolute -top-1.5 right-2 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
                <span className="text-xs font-semibold tracking-wider">
                  Delete
                </span>
                <span className="text-[12px] tracking-tight">Backspace</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 ml-5 pl-2 pr-2 border-l border-n-400/60">
          <div id="customize-box" className="relative flex flex-col gap-1.5">
            <div
              id="customize-box-overlay"
              className="hidden absolute w-full h-full flex-col gap-1 items-center justify-center bg-n-600/50 backdrop-blur-md"
            >
              <span className="text-sm text-accent-1 font-semibold">
                No Object Is Selected!
              </span>
              <span className="text-xs text-n-100">
                Select object or add new shap
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center gap-2 px-1.5 py-0.5 bg-n-600/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 stroke-n-100 transition-all duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3.039 4.277l3.904 13.563c.185 .837 .92 1.516 1.831 1.642l.17 .016a2.2 2.2 0 0 0 1.982 -1.006l.045 -.078l1.4 -2.072l4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047 -1.047c.388 -.388 .606 -.913 .606 -1.461l-.008 -.182a2.067 2.067 0 0 0 -.598 -1.28l-4.047 -4.048l2.103 -1.412c.726 -.385 1.18 -1.278 1.053 -2.189a2.2 2.2 0 0 0 -1.701 -1.845l-13.524 -3.89a1 1 0 0 0 -1.236 1.24z" />
                </svg>

                <div className="grow flex items-center gap-2 justify-between">
                  <span className="text-n-100 text-sm font-semibold">
                    Translate
                  </span>
                  <span className="text-n-100 text-xs">Press G</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="translate-x"
                  className="w-5 font-semibold text-green-600"
                >
                  X:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="translate-x"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1 pl-2">
                <label
                  htmlFor="translate-y"
                  className="w-5 font-semibold text-accent-6"
                >
                  Y:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="translate-y"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="translate-z"
                  className="w-5 font-semibold text-accent-2"
                >
                  Z:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="translate-z"
                  value="0"
                  step="0.25"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center gap-2 px-1.5 py-0.5 bg-n-600/40">
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
                  className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
                  <path d="M9 13l3 3l-3 3" />
                </svg>

                <div className="grow flex items-center gap-2 justify-between">
                  <span className="text-n-100 text-sm font-semibold">
                    Rotate
                  </span>
                  <span className="text-n-100 text-xs">Press R</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="rotate-x"
                  className="w-5 font-semibold text-green-600"
                >
                  X:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="rotate-x"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1 pl-2">
                <label
                  htmlFor="rotate-y"
                  className="w-5 font-semibold text-accent-6"
                >
                  Y:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="rotate-y"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="rotate-z"
                  className="w-5 font-semibold text-accent-2"
                >
                  Z:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="rotate-z"
                  value="0"
                  step="0.25"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-full flex items-center gap-2 px-1.5 py-0.5 bg-n-600/40">
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
                  className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" />
                  <path d="M4 12h7a1 1 0 0 1 1 1v7" />
                </svg>

                <div className="grow flex items-center gap-2 justify-between">
                  <span className="text-n-100 text-sm font-semibold">
                    Scale
                  </span>
                  <span className="text-n-100 text-xs">Press S</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="scale-x"
                  className="w-5 font-semibold text-green-600"
                >
                  X:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="scale-x"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1 pl-2">
                <label
                  htmlFor="scale-y"
                  className="w-5 font-semibold text-accent-6"
                >
                  Y:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="scale-y"
                  value="0"
                  step="0.25"
                />
              </div>
              <div className="flex items-center gap-1.5 pl-2">
                <label
                  htmlFor="scale-z"
                  className="w-5 font-semibold text-accent-2"
                >
                  Z:
                </label>
                <input
                  className="grow bg-n-500/60 px-1.5 transition-all duration-300 outline-none border border-transparent focus:border-accent-1"
                  type="number"
                  id="scale-z"
                  value="0"
                  step="0.25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondarySidebar;
