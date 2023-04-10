import { useState, useEffect } from "react";
import Card from "../common";

const Content = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  if (posts) {
    return (
      <>
        {posts.map((post) => (
          <Card key={post["id"]} post={post} />
        ))}
      </>
    );
  }
  return <div className="text-center">No posts!</div>;
};

export default Content;
