import React from 'react';
import styled, { css } from 'styled-components';

const ImgBox = (data) => {
  const maxWidth = data.col * 465;
  const minWidth = data.col * 465;
  
  const Container = styled.div`
    margin: 0 auto;
    max-width: ${maxWidth}px;
    min-width: ${minWidth}px;
  `
  
  const Image = styled.img`
    width: 450px;
    height: 480px;
    margin: 0 0 37px 15px;

    ${props => props.banner && css`
      width: 1080px;
    `}
  `
  console.log(data.url[1]);
  return (
    <Container>
      {
        data.url.map((image) => (
        <Image src={`${image}`}/>
      ))}
    </Container>
  );
};

export default ImgBox;