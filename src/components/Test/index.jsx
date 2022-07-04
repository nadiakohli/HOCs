import React, { Component } from 'react';
import styled from 'styled-components';

// HOCs
import withMedia from '../../Hocs/withMedia';

// Styles
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fe8296;
  font-size: 31px;
`;

class Test extends Component {
  render() {
    return <H1>HOCs</H1>;
  };
};

export default withMedia(Test, '(max-width: 600px)', 'matchMedia');
