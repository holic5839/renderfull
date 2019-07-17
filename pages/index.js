import React from 'react';
import ImgBox from './imgBox';
import MoImgBox from './moImgBox';

const contents = [
  {
    title: "운동복과 일상복의 사이 에슬레저룩",
    subtitle: "스타일과 편안함을 동시에 사로잡은 아이템",
    label1: "KOLONMALL",
    url: "https://images.kolonmall.com/cms/content/2019/06/-26d7138a-8324-468f-83c4-6e0c35688421.jpg",
    badge: "https://images.kolonmall.com/cms/common/2018/08/pc-badge-findenew-2c5c9d70-a538-410d-baca-f00f472d143a.png",
    link: "https://www.kolonmall.com/Content/62602",
  },
  {
    title: "여름 운동복은 이렇게 입어줘!",
    subtitle: "기분 좋은 컬러와 패턴을 담은 스포처 아이템",
    label1: "KOLONMALL",
    label2: "KOLONSPORT",
    url: "https://images.kolonmall.com/cms/content/2019/06/-9cd2b553-da79-4304-8c9e-39d54dec1f01.png",
    link: "https://www.kolonmall.com/Content/62584",
  },
  {
    title: "여름 썸머룩 가이드",
    subtitle: "여름 아이템을 활용한 데일리룩",
    label1: "KOLONMALL",
    label2: "KOLONSPORT",
    label3: "Byseries ",
    url: "https://images.kolonmall.com/cms/content/2019/06/P1_2-b7be54a2-5f16-4303-9104-fa7310ca2e54.png",
    badge: "https://images.kolonmall.com/cms/common/2018/08/pc-badge-findenew-2c5c9d70-a538-410d-baca-f00f472d143a.png",
    link: "https://www.kolonmall.com/Content/62578",
  },
  {
    title: "도시 남자의 시티 캐주얼룩",
    subtitle: "다가온 여름 가벼워진 옷차림",
    label1: "KOLONMALL",
    url: "https://images.kolonmall.com/cms/content/2019/06/M2_2d-ad811183-217d-4598-aa8a-29f932f399d9.jpg",
    link: "https://www.kolonmall.com/Content/62577",
  },
  {
    title: "6월 그리고 피크닉",
    subtitle: "봄을 즐기러 나가볼까",
    label1: "KOLONMALL",
    url: "https://images.kolonmall.com/cms/content/2019/05/123123-e0d59f4c-ae9a-48a2-be26-3c4d1becb874.jpg",
    link: "https://www.kolonmall.com/Content/62549",
  },
  {
    title: "5월 페스티벌룩 스타일",
    subtitle: "5월 페스티벌 시즌 스타일 제안",
    label1: "KOLONMALL",
    url: "https://images.kolonmall.com/cms/content/2019/04/__190429-7d41e33a-7c0a-45a7-8ef0-bb728f531361.jpg",
    link: "https://www.kolonmall.com/Content/62477",
  },
];

const setting = {

};
const Index = () => {
  return (
    <div>
      <MoImgBox contents={contents}/>
      {/* <ImgBox setting={setting} contents={contents} /> */}
    </div>
  );
};

export default Index;