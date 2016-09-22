import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';
import User from '../../components/User/User.js';

class Content extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  static propTypes = {
    title: PropTypes.string,
  };

  componentWillMount() {
    this.context.setTitle(this.props.title);
  }

  componentWillReceiveProps(nextProps) {
    this.context.setTitle(nextProps.title);
  }

  render() {
    return (
      <div className={s.root}>
        <User />
      </div>
    );
  }

}

export default withStyles(s)(Content);
