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

  console.log('데이터', data.contents);
  console.log('설정', data.setting);

  return (
    <Container>
      {
        data.contents.map((data) => (
          <ImageWrapper key={`image-wrapper__${data.url}`}>
            <Image src={data.url} />
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