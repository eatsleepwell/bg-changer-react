import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-orange-800");

  return (
    <div className={`w-full h-screen duration-500 ${bgColor}`}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-20">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            onClick={() => setBgColor("bg-red-800")}
            className={`px-4 py-1 text-white rounded-full shadow-lg outline-none bg-red-800`}
          >
            Red
          </button>
          <button
            onClick={() => setBgColor("bg-green-800")}
            className={`px-4 py-1 text-white rounded-full shadow-lg outline-none bg-green-800`}
          >
            Green
          </button>
          <button
            onClick={() => setBgColor("bg-blue-800")}
            className={`px-4 py-1 text-white rounded-full shadow-lg outline-none bg-blue-800`}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
