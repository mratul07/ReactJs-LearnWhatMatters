import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-400"
              onClick={() => setColor("yellow")}
            >
             Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-400"
              onClick={() => setColor("pink")}
            >
             Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
