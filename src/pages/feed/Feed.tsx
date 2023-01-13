import Feedcard from "@/components/FeedCard/Feedcard";
import React from "react";
import image from "../../assets/ball.jpg";

type Props = {};

const Feed = (props: Props) => {
  return (
    <h1>Hello world</h1>
    // <div className="flex flex-col gap-y-8 p-3">
    //   <Feedcard
    //     src={image}
    //     title={"This is the card Title"}
    //     games={12}
    //     groups={27}
    //     rating={5}
    //   />
    // </div>
  );
};

export default Feed;
