import React from 'react';
// import ImgBox from './imgBox';
import MoImgBox from './moImgBox';

const setting = {
  
};

//TODO: contents json server에서 가져오기 

const Index = () => {
  return (
    <div>
      <MoImgBox setting={setting} contents={contents}/>
      {/* <ImgBox setting={setting} contents={contents} /> */}
    </div>
  );
};

export default Index;