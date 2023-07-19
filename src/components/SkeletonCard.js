import React from "react";

const SkeletonCard = () => {
  return (
    <li className="flex items-center justify-between my-2 w-full hover:bg-gray-600 cursor-pointer p-3 rounded-lg duration-500 animate-pulse">
      <div className="flex items-center space-x-5">
        <div className="w-12 h-12 rounded-full">
          <div className="w-full h-full rounded-full bg-slate-200"></div>
        </div>
        <div className="flex flex-col text-left text-white justify-center">
          <div className="h-4 mb-2 bg-slate-200 rounded w-60"></div>
          <div className="h-2 bg-slate-200 rounded w-32"></div>
        </div>
      </div>
      <div className="h-3 bg-slate-200 rounded w-10"></div>
    </li>
  );
};

export default SkeletonCard;
