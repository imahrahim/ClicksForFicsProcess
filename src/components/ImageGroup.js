import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0px;

  img {
    width: 48%; /* Adjust width to fit within the container */
    margin: 0;
  }
`;

const ImageGroup = ({ children }) => {
  return <ImageContainer>{children}</ImageContainer>;
};

export default ImageGroup;
