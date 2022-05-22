import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams({});
  const [tool, setTool] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  return (
    <div className=" my-12 text-center ">
      <h2 className="text-2xl">Purchase your order: {tool._id} </h2>

      <img className="w-96 mx-auto" src={tool.img} alt="" />
      <h2 className="text-2xl font-bold">{tool.name}</h2>
      <p>{tool.description}</p>
      <h2 className="text-2xl">{tool.minOrderQuantity}</h2>
      <h2 className="text-2xl">{tool.availableQuantity}</h2>
      <h2 className="text-3xl">${tool.price}</h2>
    </div>
  );
};

export default Purchase;
