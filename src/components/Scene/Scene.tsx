import SceneMenu from "./SceneMenu";

const Scene = () => {
  return (
    <div className="flex-1 flex">
      <div
        id="viewport"
        className="flex-1 min-w-0 w-full h-full bg-n-600"
      ></div>
      <SceneMenu />
    </div>
  );
};

export default Scene;
