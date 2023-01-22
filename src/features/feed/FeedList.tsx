import FeedCard from "./FeedCard";
import React from "react";

type Props = {};

const FeedList = (props: Props) => {
  return (
    <div className="mt-20 flex flex-col gap-3 p-3">
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
