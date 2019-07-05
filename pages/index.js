import React from 'react';
import ImgBox from './imgBox';

const index = () => {
  const setting = 
    {
      col: 3,
      title: [
        "운동복과 일상복의 사이 에슬레저룩",
        "여름 운동복은 이렇게 입어줘!",
        "여름 썸머룩 가이드",
        "도시 남자의 시티 캐주얼룩",
        "6월 그리고 피크닉",
        "5월 페스티벌룩 스타일",
      ],
      subtitle: [
        "스타일과 편안함을 동시에 사로잡은 아이템",
        "기분 좋은 컬러와 패턴을 담은 스포처 아이템",
        "여름 아이템을 활용한 데일리룩",
        "다가온 여름 가벼워진 옷차림",
        "봄을 즐기러 나가볼까",
        "5월 페스티벌 시즌 스타일 제안",
      ],
      label: [
        "KOLONMALL",
        "KOLONMALL",
        "KOLONMALL",
        "KOLONMALL",
        "KOLONMALL",
        "KOLONMALL",
      ],
      url: [
        "https://images.kolonmall.com/cms/content/2019/06/-26d7138a-8324-468f-83c4-6e0c35688421.jpg",
        "https://images.kolonmall.com/cms/content/2019/06/-9cd2b553-da79-4304-8c9e-39d54dec1f01.png",
        "https://images.kolonmall.com/cms/content/2019/06/P1_2-b7be54a2-5f16-4303-9104-fa7310ca2e54.png",
        "https://images.kolonmall.com/cms/content/2019/06/M2_2d-ad811183-217d-4598-aa8a-29f932f399d9.jpg",
        "https://images.kolonmall.com/cms/content/2019/05/123123-e0d59f4c-ae9a-48a2-be26-3c4d1becb874.jpg",
        "https://images.kolonmall.com/cms/content/2019/04/__190429-7d41e33a-7c0a-45a7-8ef0-bb728f531361.jpg",
      ]
    };

  return (
    <div>
      <ImgBox setting={setting} />
    </div>
  );
};

export default index;