import React from 'react';
import ImgBox from './imgBox';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  // const { col, width, gutter } = props.settings.data[0];
  // const contents = props.contents.data;
  const setting = {
    col: 3,
    width: 450,
    gutter: 15,
  };
  console.log(props);
  const contents = [
    {
      title: "운동복과 일상복의 사이 에슬레저룩",
      subtitle: "스타일과 편안함을 동시에 사로잡은 아이템",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/06/-26d7138a-8324-468f-83c4-6e0c35688421.jpg",
    },
    {
      title: "여름 운동복은 이렇게 입어줘!",
      subtitle: "기분 좋은 컬러와 패턴을 담은 스포처 아이템",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/06/-9cd2b553-da79-4304-8c9e-39d54dec1f01.png",
    },
    {
      title: "여름 썸머룩 가이드",
      subtitle: "여름 아이템을 활용한 데일리룩",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/06/P1_2-b7be54a2-5f16-4303-9104-fa7310ca2e54.png",
    },
    {
      title: "도시 남자의 시티 캐주얼룩",
      subtitle: "다가온 여름 가벼워진 옷차림",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/06/M2_2d-ad811183-217d-4598-aa8a-29f932f399d9.jpg",
    },
    {
      title: "6월 그리고 피크닉",
      subtitle: "봄을 즐기러 나가볼까",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/05/123123-e0d59f4c-ae9a-48a2-be26-3c4d1becb874.jpg",
    },
    {
      title: "5월 페스티벌룩 스타일",
      subtitle: "5월 페스티벌 시즌 스타일 제안",
      label: "KOLONMALL",
      url: "https://images.kolonmall.com/cms/content/2019/04/__190429-7d41e33a-7c0a-45a7-8ef0-bb728f531361.jpg",
    },
  ]  

  return (
    <div>
      <ImgBox setting={setting} contents={contents} />
    </div>
  );
};

// Index.getInitialProps = async function () {
//   const res = await fetch('http://localhost:7000/_/items/setting');
//   const res2 = await fetch('http://localhost:7000/_/items/images?fields=*.*');
//   const data = await res.json();
//   const data2 = await res2.json();

//   return {
//     settings: data,
//     contents: data2,
//   }
  
// }

export default Index;