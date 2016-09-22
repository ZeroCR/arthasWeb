import React, { Component, PropTypes } from 'react';
import { navigate } from '../../actions/route';

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func,

    // actions
    navigate: PropTypes.func,
  };

  static contextTypes = {
    createHref: PropTypes.func.isRequired,
  };

  handleClick = (event) => {
    let allowTransition = true;

    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    if (event.defaultPrevented === true) {
      allowTransition = false;
    }

    event.preventDefault();

    if (allowTransition) {
      if (this.props.to) {
        this.props.navigate(this.props.to);
      } else {
        this.props.navigate({
          pathname: event.currentTarget.pathname,
          search: event.currentTarget.search,
        });
      }
    }
  };

  render() {
    const { to } = this.props; // eslint-disable-line no-unused-vars
    return <a href={this.context.createHref(to)} {...this.props} onClick={this.handleClick} />;
  }

}

export default Link;
