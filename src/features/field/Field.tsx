import { FaHeart, FaMap, FaStar } from "react-icons/fa";

import React from "react";

type Props = {};

const Field = (props: Props) => {
  return (
    <div>
      <div className="relative h-full w-full rounded-b-2xl">
        <img
          className="h-[200px] w-full rounded-b-2xl"
          src="https://www.tomsrivertownship.com/ImageRepository/Document?documentId=3385"
          alt=""
        />
        <div className="absolute bottom-2 right-2 mr-2 flex items-center justify-center text-red-50">
          <FaHeart className="text-2xl " />
        </div>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex w-full flex-col">
          <h1 className="text-xl text-grey-70">Bey Lea Golf Course</h1>
          <div className="flex items-center text-grey-50">
            <p className="mr-1 text-sm ">Matches</p>
            <h3 className="text-sm">30</h3>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="mr-2 flex items-center justify-center text-yellow-50">
            <h3 className="mr-1 text-xl">5</h3>
            <FaStar className="text-xl " />
          </div>

          <div className="mr-2 text-blue-50">
            <FaMap className="text-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
