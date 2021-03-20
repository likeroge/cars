import React from 'react';
import { Header } from './components/HomePage/Header';
import { SideBar } from './components/HomePage/SideBar';
import { Slider } from './components/HomePage/Slider';
import { Container } from './components/UIkit/Container';

function App() {
  return (
    <Container>
      <SideBar/>
      <Header/>
      <Slider/>
    </Container>
  );
}

export default App;
