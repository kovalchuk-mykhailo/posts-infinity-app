import React, { useState } from "react";
import { getAllPostsFromStorage } from "../../../utils/postsHelper";
import ListPosts from "../../ListPosts";

const withEmptyList = Component => ({ isEmpty = false, ...props }) =>
  isEmpty ? <div>List is empty...</div> : <Component {...props} />;

const ListPostsWithEmpty = withEmptyList(ListPosts);

function Posts() {
  const [isEmpty, setIsEmpty] = useState(false);
  const posts = getAllPostsFromStorage();
  if (!posts) {
    setIsEmpty(true);
  }

  return <ListPostsWithEmpty isEmpty={isEmpty} posts={posts} />;
}

export default Posts;
