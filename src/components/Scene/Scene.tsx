const Scene = () => {
  return (
    <div className="flex-1 flex h-[94dvh]">
      <div
        id="viewport"
        className="flex-1 min-w-0 w-full h-full bg-n-600"
      ></div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-n-500/10 p-1.5 border border-n-500 backdrop-blur-md rounded-md shadow-md shadow-n-900">
        <button
          id="object-list-btn"
          className="relative group cursor-pointer p-1.5 bg-n-300/70 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M5 7l0 10" />
            <path d="M7 5l10 0" />
            <path d="M7 19l10 0" />
            <path d="M19 7l0 10" />
          </svg>
          <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
            <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
            <span className="text-xs font-semibold tracking-wider">
              Add Shapes
            </span>
            <span className="text-xs text-n-100 tracking-tight">Press A</span>
          </div>
        </button>
        <div className="flex gap-1.5 border-l border-n-400/50 pl-1.5">
          <button
            data-type="translate"
            className="change-mode-btn relative group cursor-pointer p-1.5 rounded-md transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3.039 4.277l3.904 13.563c.185 .837 .92 1.516 1.831 1.642l.17 .016a2.2 2.2 0 0 0 1.982 -1.006l.045 -.078l1.4 -2.072l4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047 -1.047c.388 -.388 .606 -.913 .606 -1.461l-.008 -.182a2.067 2.067 0 0 0 -.598 -1.28l-4.047 -4.048l2.103 -1.412c.726 -.385 1.18 -1.278 1.053 -2.189a2.2 2.2 0 0 0 -1.701 -1.845l-13.524 -3.89a1 1 0 0 0 -1.236 1.24z" />
            </svg>
            <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
              <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
              <span className="text-xs font-semibold tracking-wider">
                Translate
              </span>
              <span className="text-xs text-n-100 tracking-tight">Press G</span>
            </div>
          </button>
          <button
            data-type="rotate"
            className="change-mode-btn relative group cursor-pointer p-1.5 rounded-md transition-all duration-300"
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
              className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4" />
              <path d="M9 13l3 3l-3 3" />
            </svg>
            <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
              <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
              <span className="text-xs font-semibold tracking-wider">
                Rotate
              </span>
              <span className="text-xs text-n-100 tracking-tight">Press R</span>
            </div>
          </button>
          <button
            data-type="scale"
            className="change-mode-btn relative group cursor-pointer p-1.5 rounded-md transition-all duration-300"
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
              className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 11v8a1 1 0 0 0 1 1h8m-9 -14v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1" />
              <path d="M4 12h7a1 1 0 0 1 1 1v7" />
            </svg>
            <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
              <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
              <span className="text-xs font-semibold tracking-wider">
                Scale
              </span>
              <span className="text-xs text-n-100 tracking-tight">Press S</span>
            </div>
          </button>
        </div>
        <div className="flex gap-1.5 border-l border-n-400/50 pl-1.5">
          <button
            data-type="export"
            className="json-btn relative group cursor-pointer p-1.5 rounded-md transition-all duration-300 bg-n-300/70 hover:bg-accent-1"
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
              className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M9 15h6" />
              <path d="M12.5 17.5l2.5 -2.5l-2.5 -2.5" />
            </svg>
            <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
              <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
              <span className="text-xs font-semibold tracking-wider">
                Export
              </span>
            </div>
          </button>
          <button
            data-type="emport"
            className="json-btn change-mode-btn relative group cursor-pointer p-1.5 rounded-md transition-all duration-300 bg-n-300/70 hover:bg-accent-1"
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
              className="w-5 h-5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M15 15h-6" />
              <path d="M11.5 17.5l-2.5 -2.5l2.5 -2.5" />
            </svg>
            <div className="absolute -top-[120%] left-1/2 z-10 -translate-x-1/2 w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 translate-y-1 scale-0 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 origin-bottom">
              <div className="absolute -bottom-1.5 -z-20 w-3 h-3 bg-n-700 rotate-45"></div>
              <span className="text-xs font-semibold tracking-wider">
                Import JSON
              </span>
            </div>
          </button>
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
          className="add-object-btn group flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn grouop flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn group flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn group flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn group flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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
          className="add-object-btn group flex items-center gap-2 cursor-pointer p-1.5 bg-n-300/30 rounded-md transition-all duration-300 hover:bg-accent-1"
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
            className="w-4.5 h-4.5 stroke-n-100 transition-all duration-300 group-hover:stroke-n-50"
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

export default Scene;
