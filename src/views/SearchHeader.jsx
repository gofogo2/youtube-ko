import React, { useEffect, useState } from "react";
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchHeader = () => {

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const {keyword} = useParams();

  useEffect(()=>{setText(keyword||'')},[keyword]);

  const handleSumit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header className="flex w-full p-4 mb-4 text-2xl border-b border-zinc-600" >
      <div className="flex flex-row items-center" >
        <Link to="/" className="flex items-center" >
        <BsYoutube className="text-4xl text-brend" />
        <h1 className="ml-2 text-3xl font-bold">Youtube</h1>
        </Link>
      </div>
      <form className="flex justify-center w-full" onSubmit={handleSumit}>
        <input className="w-7/12 p-2 bg-black outline-none text-gray-50"
          type="text"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          v alue={text}
        />
        <button className="px-4 bg-zinc-400" >
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
