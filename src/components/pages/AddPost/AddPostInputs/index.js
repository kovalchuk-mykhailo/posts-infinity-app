import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, TextField } from "@material-ui/core";

import { setTitle, setText } from "../../../../actions/addPost";

function AddPostInputs({ variant, handleTitleChange, handleTextChange }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <TextField
          id="title"
          name="title"
          label="Title"
          autoComplete="utitle"
          variant={variant}
          onChange={handleTitleChange}
          required
          autoFocus
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Type text..."
          multiline
          rows="7"
          defaultValue=""
          variant={variant}
          onChange={handleTextChange}
        />
      </Grid>
    </Grid>
  );
}

AddPostInputs.propTypes = {
  variant: PropTypes.string,
  handleTitleChange: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

AddPostInputs.defaultProps = {
  variant: "outlined"
};

const mapDispatchToAddPostInputsProps = dispatch => ({
  handleTitleChange: e => {
    dispatch(setTitle(e.target.value));
  },
  handleTextChange: e => {
    dispatch(setText(e.target.value));
  }
});

export default connect(null, mapDispatchToAddPostInputsProps)(AddPostInputs);
