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
      if (screenWidth < 480) return this.setState({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        isPrinting: false,
      });

      if (screenWidth > 480 && screenWidth < 780) return this.setState({
        isMobile: false,
        isTablet: true,
        isDesktop: false,
        isPrinting: false,
      });

      if (screenWidth > 780 && screenWidth < 1280) return this.setState({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isPrinting: false,
      });

      return this.setState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isPrinting: true,
      });
    };

    componentDidMount() {
      window.addEventListener('resize', this.handleChangeDevice);

      const screenWidth = window.innerWidth;
      if (screenWidth < 480) return this.setState({ isMobile: true });
      if (screenWidth > 480 && screenWidth < 780) return this.setState({ isTablet: true });
      if (screenWidth > 780 && screenWidth < 1280) return this.setState({ isDesktop: true });
      return this.setState({ isPrinting: true });
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
