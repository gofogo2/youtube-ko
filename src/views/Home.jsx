import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fetch("/datas/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return <div></div>;
};

export default Home;
