import FeedCard from "./FeedCard";
import React from "react";

type Props = {};

const FeedList = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 px-3 py-5">
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
};

export default FeedList;
