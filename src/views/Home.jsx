import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("/datas/data.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        // console.log(data);
      });
  });

  return (
    <div className="grid grid-flow-col grid-rows-5" >
      {list.map((item) => {
        return (
          <div>
            <div>{item.title}</div>
            <img src={item.src} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
