import React from 'react';
import ImgBox from './imgBox';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
  const { col, width, gutter } = props.settings.data[0];
  const contents = props.contents.data;
  const setting = {
    col: col,
    width: width,
    gutter: gutter,
  };

  return (
    <div>
      <ImgBox setting={setting} contents={contents} />
    </div>
  );
};

Index.getInitialProps = async function () {
  const res_settings = await fetch('http://localhost:7000/_/items/setting');
  const res_contents = await fetch('http://localhost:7000/_/items/images?fields=*.*');
  const settings = await res_settings.json();
  const contents = await res_contents.json();

  return {
    settings: settings,
    contents: contents,
  }
  
}

export default Index;