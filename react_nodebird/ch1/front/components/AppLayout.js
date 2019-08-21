import React from 'react';
import {Menu, Input} from 'antd';

const AppLayout = ({children})=>{
  return (
    <>
      <Menu>
        <Menu.Item key="home">노드버드</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton />
        </Menu.Item>
      </Menu>
      {children}
    </>
  );
};
export default AppLayout;
//children은 태그 안에 있는 애들을 가져옴