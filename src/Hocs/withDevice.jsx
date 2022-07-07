import React, { Component } from 'react';

const withDevice = (WrappedComponent) => {
  class withDevice extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isPrinting: false,
      };
      this.handleChangeDevice = this.handleChangeDevice.bind(this);
    };

    handleChangeDevice() {
      const screenWidth = window.innerWidth;
      this.setState({
        isMobile: screenWidth < 480,
        isTablet: screenWidth > 480 && screenWidth < 780,
        isDesktop: screenWidth > 780 && screenWidth < 1280,
        isPrinting: screenWidth > 1280,
      });
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleChangeDevice);
      this.handleChangeDevice();
    };

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleChangeDevice);
    };

    render () {
      return <WrappedComponent { ...this.props } { ...this.state } />;
    };
  };

  withDevice.displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return withDevice;
};

export default withDevice;
