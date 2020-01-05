import React from 'react';
// import ImgBox from './imgBox';
import MoImgBox from './moImgBox';
import fetch from 'isomorphic-unfetch';

const setting = {
  
};

//TODO: contents json server에서 가져오기 

const Index = (props) => {
  const contents = props.contents;
  
  return (  
    <div>
      <MoImgBox setting={setting} contents={contents}/>
      {/* <ImgBox setting={setting} contents={contents} /> */}
    </div>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:5000/contents');
  const data = await res.json();
  
  return {
    contents: data
  }
}

export default Index;