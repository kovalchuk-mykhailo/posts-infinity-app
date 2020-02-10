import React from 'react'
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core'

import { HOME_PATH } from '../../../../constants/Pathes'

const SignFooter = ({
  rightText,
  rightLinkPath
}) => (
    <Grid container>
      <Grid item xs>
        <Link to={HOME_PATH} >
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link to={rightLinkPath} >
          {rightText}
        </Link>
      </Grid>
    </Grid>
  );

SignFooter.propTypes = {
  rightText: PropTypes.string.isRequired,
  rightLinkPath: PropTypes.string.isRequired,
};

export default SignFooter;