import React from 'react';
import styled from 'styled-components';

//#region

const TextWrapper = styled.div`
  margin: 22px 9px 17px;
  line-height: normal;
`;

const LabelWrapper = styled.div`
  margin: 0;
  padding-top: 24px;
`;

const BadgeWrapper = styled.div`
    position: absolute;
    display: table;
    top: 10px;
    left: 10px;
    width: 48px;
    height: 48px;
    background: none;
    font-size: 0;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  color: #1f1f1f;
`;

const SubTitle = styled.h3`
  margin: 0;
  padding-top: 10px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 300;
  color: #898989;
`;

const Label = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 11px;
  color: #79604c;
  background: transparent;
`;

const Badge = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`

const ImgBox = (data) => {
  const { setting, contents } = data;

  const col = setting && setting.col ? setting.col : 3;
  const width = setting && setting.width ? setting.width : 450;
  const imageHeight = setting && setting.width ? width * 1.06667 : 480;
  const height = setting && setting.height ? setting.height : 612;
  const gutter = setting && setting.gutter ? setting.gutter : 15;

  const maxWidth = col * (width + gutter);
  const minWidth = col * (width + gutter);

  const Container = styled.div`
    margin: 0 auto;
    max-width: ${maxWidth}px;
    min-width: ${minWidth}px;
  `
  const ContentsWrapper = styled.div`
    display: inline-block;
    position: relative;
    width: ${width}px;
    height: ${height}px;
    margin: 0 0 37px ${gutter}px;
    text-decoration: none;
  `
  const Image = styled.div`
    background-image: url(${props => props.url ? props.url : ''});
    background-size: cover;
    background-position: 50%;
    width: ${width}px;
    height: ${imageHeight}px;
  `;

//#endregion

  return (
    <Container>
      {
        contents && contents.map((data) => (
          <ContentsWrapper as="a" target="_blank" href={data.link} key={`image-wrapper__${data.url}`} rel="noopener noreferrer">
            {data.url &&
              <Image url={data.url}/>
            }
            <TextWrapper>
              {data.title &&
                <Title>{data.title}</Title>
              }
              {data.subtitle &&
                <SubTitle>{data.subtitle}</SubTitle>
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
              {data.badge &&
                <BadgeWrapper>
                  <Badge src={data.badge}/>
                </BadgeWrapper>
              }
            </TextWrapper>
          </ContentsWrapper>
      ))}
    </Container>
  );
};

export default ImgBox;