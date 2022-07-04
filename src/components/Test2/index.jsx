import React, { Component } from 'react';
import styled from 'styled-components';

// HOCs
import withMedia from '../../Hocs/withMedia';
import withDevice from '../../Hocs/withDevice';

// Styles
const Paragraph = styled.p`
  position: absolute;
  top: 10%;
  left: 25%;
  width: 50%;
  color: #f4a8b4;
  font-size: 21px;
  text-align: center;
`;

class Test2 extends Component {
  render() {
    return <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem ipsam praesentium magni exercitationem, facere adipisci ad nisi voluptatibus saepe atque distinctio nam assumenda ipsum eius, illo velit. Optio aliquam ad vel dolorem qui earum distinctio incidunt ut. Rem aperiam aut eligendi eum sint quos! Optio officia soluta sint distinctio.
    </Paragraph>;
  };
};

export default withDevice(withMedia(Test2, '(max-width: 600px)', 'matchMedia'));
