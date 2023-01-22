import FeedCard from "@/features/feed/FeedCard";
import FeedList from "@/features/feed/FeedList";
import Field from "@/features/field/Field";

type Props = {};

const Feed = (props: Props) => {
  return (
    <section>
      <Field />
      <FeedList />
    </section>
  );
};

export default Feed;
