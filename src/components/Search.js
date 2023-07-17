import React, { useRef } from "react";

const Search = ({ search, setSearchHandler }) => {
  const searchRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setSearchHandler(search);
  };

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className="flex items-center justify-between border border-gray-200 rounded-lg py-2 px-4 w-full my-10"
      >
        <input
          type="text"
          placeholder="Search for Songs, Artists and more ..."
          className="bg-transparent text-gray-200 w-full md:max-lg:w-4/5 te focus:outline-none"
          ref={searchRef}
          value={search}
          onChange={() => setSearchHandler(searchRef.current?.value)}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer text-gray-200"
          onClick={formSubmitHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </>
  );
};

export default Search;
