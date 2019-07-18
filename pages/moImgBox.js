import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`
const Image = styled.div`
  background-image: url(${props => props.url ? props.url : ''});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: ${props => props.productListView === true ? 67 : 106.6667}vw;
`;
const ContentsWrapper = styled.div`
  width: ${props => props.productListView === true ? 48 : 100}%;
  padding: ${props => props.productListView === true ? '0 0.933' : ''}vw;
  margin-bottom: ${props => props.productListView === true ? '11.2' : ''}vw;
  display: block;
  float: left;
  text-decoration: none;
`
const TextWrapper = styled.div`
  margin-top: ${props => props.productListView === true ? '2.8vw' : ''};
  padding: ${props => props.productListView === true ? '0 1.6vw' : '4.533vw 4.8vw 8.533vw'};
  color: #1f1f1f;
  background: #fff;
  overflow: hidden;
`;
const LabelWrapper = styled.div`
  margin-top: 5.866vw;
`;
const Title = styled.div`
  margin-bottom: 0;
  font-size: ${props => props.productListView === true ? 4.533 : 5.066}vw;
  font-weight: 300;
  line-height: 1.2;
  max-height: 2.4em;
  word-break: keep-all;
`;
const SubTitle = styled.div`
  margin-top: 1.866vw;
  font-size: ${props => props.productListView === true ? 3.533 : 3.733}vw;
  font-weight: 300;
  line-height: 1.3;
  color: #898989;
  word-break: keep-all;
`
const Label = styled.span`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
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
      {
        contents && contents.map((data) => (
          <ContentsWrapper productListView={setting.productListView} as="a" target="_blank" href={data.link} key={`image-wrapper__${data.url}`} rel="noopener noreferrer">
            {data.url &&
              <Image productListView={setting.productListView} url={data.url}/>
            }
            <TextWrapper productListView={setting.productListView}>
              {data.title &&
                <Title productListView={setting.productListView}>{data.title}</Title>
              }
              {data.subtitle &&
                <SubTitle productListView={setting.productListView}>{data.subtitle}</SubTitle>
              }
              <LabelWrapper>
              {data.label1 &&
                <Label>{data.label1}
                {data.label2 &&
                  <Label>
                    {!data.label3 &&
                      <Label>외 1개</Label>
                    }
                    {data.label3 &&
                      <Label>외 2개</Label>
                    }
                  </Label>}
                </Label>
              }
              </LabelWrapper>
            </TextWrapper>
          </ContentsWrapper>
      ))}
    </Container>
  )
};

export default MoImgBox;