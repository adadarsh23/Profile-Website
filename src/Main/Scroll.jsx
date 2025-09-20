import React from 'react'
import InfiniteMenu from '../components/InfiniteMenu';
import logo from '../assets/Âd Adarsh.png';
import instaImg from '../assets/insta.png';
import spotifyImg from '../assets/spotify.png';
import githubImg from '../assets/git.jpg';

export default function Scroll() {
  const items = [
    { image: logo, link: 'https://www.youtube.com/@adadarsh23', title: 'YouTube', description: 'Watch videos and explore content.' },
    { image: instaImg, link: 'https://www.instagram.com/adadarsh23/', title: 'Instagram', description: 'Share photos and stories.' },
    { image: spotifyImg, link: 'https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa', title: 'Spotify', description: 'Listen to music and podcasts.' },
    { image: githubImg, link: 'https://github.com/adadarsh23', title: 'GitHub', description: 'Explore my projects and contributions.' }
  ];
  return (
    <section className=" bg-black">
      <div className="">
        <InfiniteMenu items={items} />
      </div>
    </section>
  )
}
