import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  
`
const Image = styled.div`
  background-image: url(${props => props.url ? props.url : ''});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 106.6667vw;
`;
const ContentsWrapper = styled.div`
  width: 100%;
  text-decoration: none;
`
const TextWrapper = styled.div`
  padding: 4.533vw 4.8vw 8.533vw;
  color: #1f1f1f;
  background: #fff;
  overflow: hidden;
`;
const Title = styled.div`
  margin-bottom: 0;
  font-size: 5.066vw;
  font-weight: 300;
  line-height: 1.2;
  max-height: 2.4em;
  word-break: keep-all;
`;
const SubTitle = styled.div`
  margin-top: 1.866vw;
  font-size: 3.733vw;
  font-weight: 300;
  line-height: 1.3;
  color: #898989;
  word-break: keep-all;
`
const Label = styled.span`
  display: inline-block;
  box-sizing: border-box;
  margin-top: 5.866vw;
  margin-right: 3.2vw;
  padding: 0;
  background-color: transparent;
  font-size: 2.933vw;
  font-weight: 400;
  color: #79604c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MoImgBox = (data) => {
  const { setting, contents } = data;
  return (
    <Container>
      {contents && contents.map(data =>
        <ContentsWrapper as="a" target="_blank" href={data.link} key={`image-wrapper__${data.url}`} rel="noopener noreferrer">
          <Image url={data.url} key={`image__${data.url}`} />
          <TextWrapper>
            <Title>{data.title}</Title>
            <SubTitle>{data.subtitle}</SubTitle>
            <Label>{data.label1}</Label>
          </TextWrapper>
        </ContentsWrapper>
      )}
    </Container>
  )
};

export default MoImgBox;