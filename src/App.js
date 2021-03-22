import React from 'react';
import { SideBar } from './components/HomePage/SideBar';
import { Slider } from './components/HomePage/Slider';
import { Head } from './components/HomePage/Head';
import { AppWrapper } from './components/UIkit/AppWrapper';
import { Flex } from './components/UIkit/Flex';

function App() {
  return (
    <AppWrapper>
    <Flex>
      <SideBar />
      <Head />
      <Slider />
    </Flex>
  </AppWrapper>
  );
}

export default App;
