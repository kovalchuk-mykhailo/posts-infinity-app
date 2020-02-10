const ALL_POSTS_KEY = "ALL_POSTS_KEY";

const getAllPostsFromStorage = () => {
  const allPosts = JSON.parse(localStorage.getItem(ALL_POSTS_KEY));
  console.log("All posts: ", allPosts);
  return (allPosts && allPosts.posts) || [];
};

const setPostsToStorage = posts => {
  const jsonPosts = JSON.stringify({ posts });
  console.log("jsonPosts: ", jsonPosts);
  return localStorage.setItem(ALL_POSTS_KEY, jsonPosts);
};

const addPostToLocalStorage = post => {
  const allPosts = getAllPostsFromStorage();
  allPosts.push(post);
  setPostsToStorage(allPosts);
};

export const addPostAsync = (title, text, userName) => {
  // Add post to the localStorage
  console.log("addPostAsync !!!");
  const postedDate = new Date().getTime();
  const post = {
    id: postedDate,
    title,
    text,
    userName,
    postedDate
  };
  addPostToLocalStorage(post);
  return post;
};
