import FeedCard from "@/features/feed/FeedCard";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-8 p-3">
      <FeedCard />
    </div>
  );
};

export default Feed;
