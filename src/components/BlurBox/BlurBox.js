import React from 'react';

import styled from 'styled-components';

const BoxWrap = styled.div`
  width: ${(props) => (props.width ? props.width : `100px`)};
  height: ${(props) => (props.height ? props.height : `100px`)};
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
`;

const BlurBox = ({ width, height }) => {
  return <BoxWrap width={width} height={height}></BoxWrap>;
};

export default BlurBox;
