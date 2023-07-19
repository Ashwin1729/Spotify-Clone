import React, { useRef, useContext } from "react";
import { AppContext } from "../context/application-context";
import { SearchIcon } from "../assets/icons/index";

const Search = () => {
  const searchRef = useRef();
  const appCtx = useContext(AppContext);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    appCtx.setSearchHandler(appCtx.search);
  };

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        className="flex items-center justify-between rounded-lg py-2 px-4 w-full my-10 bg-[#ffffff14]"
      >
        <input
          type="text"
          placeholder="Search for Songs, Artists and more ..."
          className="bg-transparent text-gray-200 w-full md:max-lg:w-4/5 te focus:outline-none"
          ref={searchRef}
          value={appCtx.search}
          onChange={() => appCtx.setSearchHandler(searchRef.current?.value)}
        />

        <SearchIcon submitHandler={formSubmitHandler} />
      </form>
    </>
  );
};

export default Search;
