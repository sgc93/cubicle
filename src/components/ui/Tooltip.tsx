

type ToolTipDxr = 'top-center' | 'bottom-right';

const Tooltip = ({
  text,
  shortCut,
  dxr
}: {
  text: string;
  shortCut: string;
  dxr: ToolTipDxr;
}) => {
    const tipDxr = dxr === 'top-center' ? '-bottom-1.5': '';
    const dxrClasses = dxr === 'top-center' ? "-top-[120%] left-1/2 z-10 -translate-x-1/2 translate-y-1 group-hover:translate-y-0 origin-bottom" : '';

  return (
    <div
      className={`${dxrClasses} absolute w-max flex items-center justify-center gap-2 px-2 py-0.5 rounded-md bg-n-700 shadow-md shadow-n-900 border border-n-900 transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-0 hover:opacity-0`}
    >
      <div
        className={`absolute ${tipDxr} -z-20 w-3 h-3 bg-n-700 rotate-45`}
      ></div>
      <span className="text-xs font-semibold tracking-wider">{text}</span>
      <span className="text-xs text-n-100 tracking-tight">{shortCut}</span>
    </div>
  );
};

export default Tooltip;
