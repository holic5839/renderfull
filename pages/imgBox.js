import React from 'react';
import styled, { css } from 'styled-components';

const ImgBox = (data) => {
  const maxWidth = data.setting.col * 465;
  const minWidth = data.setting.col * 465;
  
  const Container = styled.div`
    margin: 0 auto;
    max-width: ${maxWidth}px;
    min-width: ${minWidth}px;
  `
  const ImageWrapper = styled.div`
    display: inline-block;
    width: 450px;
    height: 620px;
    margin: 0 0 37px 15px;
  `

  const Image = styled.img`
    width: 100%;
  `

  console.log('설정', data.setting);

  return (
    <Container>
      {
        data.setting.contents.map((data) => (
          <ImageWrapper key={`image-wrapper__${data.url}`}>
            <Image src={data.url} />
            <h2>{data.title}</h2>
            <h3>{data.subtitle}</h3>
            <span>{data.label}</span>
          </ImageWrapper>
      ))}
    </Container>
  );
};

export default ImgBox;