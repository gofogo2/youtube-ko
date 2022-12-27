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
    <header>
      <div>
        <Link to="/" >
        <BsYoutube />
        <h1>Youtube</h1>
        </Link>
      </div>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
