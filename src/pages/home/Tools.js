import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="px-16">
      <h3 className="text-3xl text-center mt-24 mb-16 font-bold">
        Woodworking Tools
      </h3>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center  gap-8">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
