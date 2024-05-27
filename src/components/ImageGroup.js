import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0px;

  img {
    min-width: 45%;
    margin: 10px;
  }
`;

const ImageGroup = ({ children }) => {
  return <ImageContainer>{children}</ImageContainer>;
};

export default ImageGroup;
