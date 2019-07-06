import React from 'react';
import styled, { css } from 'styled-components';

const ImgBox = (data) => {
  const { setting, contents } = data;

  const col = setting.col ? setting.col : 3;
  const width = setting.width ? setting.width : 450;
  const height = setting.height ? setting.height : 612;
  const gutter = setting.gutter ? setting.gutter : 15;

  const maxWidth = col * (width + gutter);
  const minWidth = col * (width + gutter);

  // const childStyle = (gutter % 2 === 0) ? '&:nth-of-type(n+1): margin-left: 0;' : '&:nth-of-type(2n+1): margin-left: 0;'; 

  const Container = styled.div`
    margin: 0 auto;
    max-width: ${maxWidth}px;
    min-width: ${minWidth}px;
  `
  const ImageWrapper = styled.div`
    display: inline-block;
    width: ${width}px;
    height: ${height}px;
    margin: 0 0 37px ${gutter}px;
    
  `

  const TextWrapper = styled.div`
    margin: 22px 9px 17px;
    line-height: normal;
  `

  const Title = styled.h2`
    margin: 0;
    font-size: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    color: #1f1f1f;
  `

  const SubTitle = styled.h3`
    margin: 0;
    padding-top: 10px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
    color: #898989;
  `

  const Label = styled.p`
    display: inline-block;
    margin-right: 12px;
    padding-top: 24px;
    padding: 0;
    font-size: 11px;
    color: #79604c;
    background: transparent;
  `

  const Image = styled.img`
    width: 100%;
  `

  return (
    <Container>
      {
        contents.map((data) => (
          <ImageWrapper key={`image-wrapper__${data.id}`}>
            <Image src={data.image.data.full_url} />
            <TextWrapper>
              <Title>{data.title}</Title>
              <SubTitle>{data.subtitle}</SubTitle>
              <Label>{data.label}</Label>
            </TextWrapper>
          </ImageWrapper>
      ))}
    </Container>
  );
};

export default ImgBox;