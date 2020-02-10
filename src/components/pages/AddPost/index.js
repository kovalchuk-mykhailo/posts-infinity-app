import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import SignButton from "../sign/SignButton";
import AddPostInputs from "./AddPostInputs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { POSTS_PATH } from "../../../constants/Pathes";
import { addPostAsyncRequest, clearAddPost } from "../../../actions/addPost";

const renderPage = onAddPostClick => (
  <Container component="main" maxWidth="md">
    <Typography component="h1" variant="h5">
      Create new post
    </Typography>
    <form className="add-post-form" noValidate>
      <AddPostInputs />
      <SignButton text="Add post" onClick={onAddPostClick} fullWidth={false} />
    </form>
  </Container>
);

function AddPost({ onAddPostClick, onClearAddPost, isRedirected }) {
  useEffect(
    () => () => {
      console.log("AddPost unmount");
      onClearAddPost();
    },
    [onClearAddPost]
  );

  return isRedirected ? (
    <Redirect to={POSTS_PATH} />
  ) : (
    renderPage(onAddPostClick)
  );
}

const mapStateToAddPostProps = state => ({
  isRedirected: state.addPost.isRedirected
});
const mapDispatchToAddPostProps = dispatch => ({
  onAddPostClick: e => {
    e.preventDefault();
    dispatch(addPostAsyncRequest());
  },
  onClearAddPost: () => {
    dispatch(clearAddPost());
  }
});

export default connect(
  mapStateToAddPostProps,
  mapDispatchToAddPostProps
)(AddPost);
