import React from 'react'
import LogoLoop from '../components/LogoLoop.jsx';
import { 
  SiInstagram, SiFacebook, SiWhatsapp, SiYoutube, SiLinkedin, SiTiktok, SiSnapchat, SiReddit, SiPinterest, SiTelegram, SiDiscord, SiMedium, SiTwitch, SiSoundcloud
} from "react-icons/si";
import CurvedLoop from '../components/CurvedLoop.jsx';


export default function Loop() {
  const techLogos = [
    { node: <SiDiscord />, title: "Discord", href: "https://discord.com" },
    { node: <SiFacebook />, title: "Facebook", href: "https://www.facebook.com" },
    { node: <SiInstagram />, title: "Instagram", href: "https://www.instagram.com" },
    { node: <SiLinkedin />, title: "LinkedIn", href: "https://www.linkedin.com" },
    { node: <SiPinterest />, title: "Pinterest", href: "https://www.pinterest.com" },
    { node: <SiReddit />, title: "Reddit", href: "https://www.reddit.com" },
    { node: <SiSnapchat />, title: "Snapchat", href: "https://www.snapchat.com" },
    { node: <SiTelegram />, title: "Telegram", href: "https://telegram.org" },
    { node: <SiTiktok />, title: "TikTok", href: "https://www.tiktok.com" },
    { node: <SiTwitch />, title: "Twitch", href: "https://www.twitch.tv" },
    { node: <SiWhatsapp />, title: "WhatsApp", href: "https://www.whatsapp.com" },
    { node: <SiYoutube />, title: "YouTube", href: "https://www.youtube.com" },
    { node: <SiSnapchat />, title: "Snapchat", href: "https://www.snapchat.com" },
    { node: <SiSoundcloud />, title: "SoundCloud", href: "https://soundcloud.com" },
  ];

  const loops = Array.from({ length: 4 }).map((_, i) => {
    // random speed between 80 and 150
    const speed = Math.floor(Math.random() * 70) + 80;
    // random direction left or right
    const direction = Math.random() > 0.5 ? "left" : "right";
    return (
      <LogoLoop
        key={i}
        logos={techLogos}
        speed={speed}
        direction={direction}
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    );
  });
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <CurvedLoop
        marqueeText="Be ✦ Gamer ✦ Coder ✦ Producer ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
      <div
        style={{ height: '200px', position: 'relative', overflow: 'hidden' }}
        className="mt-20 mb-20 sm:h-48 h-32 w-full"
      >
        {loops}
      </div>
    </section>
  )
}
