import React from 'react';
import Header from '../Main/Header';
import Scroll from '../Main/Scroll';
import Loop from '../Main/Loop';
import Video from '../Main/Video';
import Music from '../Main/Music';

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Scroll />
        <Loop />
        <Video />
        <Music />
      </main>
    </>
  );
}
