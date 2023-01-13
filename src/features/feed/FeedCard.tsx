import Card from "@/layouts/Card";
import { FaStar, FaHeart, FaMap } from "react-icons/fa";
import React from "react";

type Props = {};

const FeedCard = (props: Props) => {
  return (
    <Card className="relative m-8  h-72 w-[750px] border-2 drop-shadow-lg">
      <div className="absolute left-56 -top-5 h-72 -translate-x-1/2 transform">
        <div className=" h-58 w-[400px] overflow-hidden rounded-lg">
          <img
            className="h-full w-full rounded-lg"
            src="https://igp.brightspotcdn.com/dims4/default/1917bae/2147483647/strip/true/crop/2400x1312+0+19/resize/860x470!/quality/90/?url=http%3A%2F%2Findigogolf-brightspot.s3.amazonaws.com%2Fclubs%2Fee%2F62%2F35de933d4a6ba86fe33ab178fc86%2Fspring-creek-golf-club-1.jpg"
            alt=""
          />
          <div className="flex justify-evenly">
            <div className="flex w-20 flex-col items-center justify-center p-3 font-bold text-grey-30">
              <h3 className="text-[2rem] ">30</h3>
              <p className="-mt-3 text-lg ">Matches</p>
            </div>
            <div className="flex items-center justify-center p-3 font-bold text-yellow-50">
              <h3 className="mr-1 text-[2rem]">5</h3>
              <FaStar className="text-[2rem] " />
            </div>
            <div className="flex items-center justify-center p-3 font-bold text-red-50">
              <FaHeart className="text-[2rem] " />
            </div>
            <div className="flex items-center justify-center p-3 font-bold text-blue-50">
              <FaMap className="text-[2rem] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full justify-end  p-3">
        <div className="w-72 p-2">
          <div className="border-b border-green-70 pb-3">
            <h3 className="text-2xl text-grey-70">Royal County Down G.C.</h3>
            <p className="text-sm text-grey-50">
              Newcastle, County Down, Northern Ireland
            </p>
          </div>
          <div className="py-5">
            <p className=" text-sm text-grey-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quod, quaerat facilis in facere soluta, eaque suscipit natus at
              omnis assumenda numquam.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeedCard;
