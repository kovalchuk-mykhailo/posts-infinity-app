import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../PostCard";

const styles = {
  divBack: {
    backgroundColor: "transparent"
  },
  container: {
    padding: 20
  }
};
function ListPosts(props) {
  const { posts } = props;

  return (
    <div style={styles.divBack}>
      <Grid container spacing={2} style={styles.container}>
        {posts.map(currentPost => (
          <Grid key={currentPost.id} item xs={12} sm={6} lg={6} xl={4}>
            <PostCard post={currentPost} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ListPosts;
