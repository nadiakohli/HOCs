import React, { Component } from 'react';

const withMedia = (WrappedComponent, media, option) => {
  class withMedia extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasMedia: false,
      };
      this.handleChangeMatchMedia = this.handleChangeMatchMedia.bind(this);
    };

    handleChangeMatchMedia() {
      if (window.matchMedia(media).matches) {
        this.setState({ hasMedia: true });
      };
    };

    componentDidMount() {
      this.handleChangeMatchMedia();

      window.addEventListener('resize', this.handleChangeMatchMedia);
    };

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleChangeMatchMedia);
    }
  
    render () {
      const newProps = { ...this.props, media, [option]: this.state.hasMedia };
      return <WrappedComponent { ...newProps} />
    };
  };

  withMedia.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return withMedia;
};

export default withMedia;
