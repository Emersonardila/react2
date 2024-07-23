import { useState } from "react";

const LikesUseState = (props) => {
  const [likes, setLikes] = useState(props.number);
  return (
    <button
      onClick={() => {
        console.log(likes);
        setLikes(likes + 1);
      }}
    >
      {likes} Total likes
    </button>
  );
};
export default LikesUseState;
