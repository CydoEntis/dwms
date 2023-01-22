import {
  FaCalendar,
  FaClock,
  FaHeart,
  FaMap,
  FaStar,
  FaUser,
} from "react-icons/fa";

import { AiOutlineFieldTime } from "react-icons/ai";
import Avatar from "@/components/avatar/Avatar";
import AvatarContainer from "@/components/avatar/AvatarContainer";
import Button from "@/components/buttons/Button";
import Card from "@/layouts/Card";
import { HiOutlineCalendar } from "react-icons/hi2";
import { MdGolfCourse } from "react-icons/md";
import Rating from "@/components/rating/Rating";
import React from "react";

type Props = {};

const FeedCard = (props: Props) => (
  <Card className="relative flex w-full items-center justify-between py-3 px-3 drop-shadow-lg">
    {/* <MdGolfCourse className="h-16 w-16" /> */}
    <div>
      <AvatarContainer
        rating={200}
        iconClasses="h-5 w-5 -top-3.5 -left-3.5"
        className="rounded-full border-4 border-yellow-50"
      >
        <Avatar
          className="h-12 w-12"
          src="https://www.fakepersongenerator.com/Face/male/male20151086177407532.jpg"
        />
      </AvatarContainer>
      <Rating rating={224} />
    </div>
    <div>
      <h1 className="text-md text-grey-70">Jordan's Golf Meet Up</h1>
      <div className="flex justify-between">
        <div>
          <h3 className="flex items-center text-xs text-grey-50">
            <HiOutlineCalendar className="mr-1 text-lg" /> Feb 11, 2023
          </h3>
          <h3 className="flex items-center text-xs text-grey-50">
            <AiOutlineFieldTime className="mr-1 text-lg" /> 2:30pm
          </h3>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h3 className="mb-3 flex items-center justify-end text-sm text-grey-50">
        <FaUser className="text-md mr-1" />
        2/4
      </h3>
      <button className="relative flex items-center justify-center rounded-xl bg-green-90 px-3  py-1.5 text-xs text-white opacity-90 transition duration-200 ease-in-out hover:bg-green-80 hover:text-white">
        <h4 className="text-mdfont-fredoka">Join</h4>
      </button>
    </div>

    {/* <div className="absolute left-56 -top-5 h-72 -translate-x-1/2 transform">
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
        </div> */}
  </Card>
);

export default FeedCard;
