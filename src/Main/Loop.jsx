import React from 'react';
import LogoLoop from '../components/LogoLoop.jsx';
// import CurvedLoop from '../components/CurvedLoop.jsx';
import {
  SiInstagram,
  SiFacebook,
  SiWhatsapp,
  SiYoutube,
  SiLinkedin,
  SiTiktok,
  SiSnapchat,
  SiReddit,
  SiPinterest,
  SiTelegram,
  SiDiscord,
  SiMedium,
  SiTwitch,
  SiSoundcloud
} from "react-icons/si";

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
    { node: <SiSoundcloud />, title: "SoundCloud", href: "https://soundcloud.com" },
  ];

  const NUM_LOOPS = 4;
  const SPEED_RANGE = { min: 80, max: 150 };
  const LOGO_HEIGHT = 48;
  const GAP = 40;
  const FADE_OUT_COLOR = "#000000";
  const ARIA_LABEL = "Technology partners";

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomDirection = () => (Math.random() > 0.5 ? "left" : "right");

  return (
    <section className="bg-black text-white mt-30 mb-30 flex flex-col space-y-10">
      {/* <CurvedLoop
        marqueeText="Be ✦ Gamer ✦ Coder ✦ Producer ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl"
      /> */}

      <div style={{ width: '100%' }} className="flex flex-col space-y-10">
        {Array.from({ length: NUM_LOOPS }, (_, i) => (
          <div
            key={i}
            style={{ height: '60px', position: 'relative', overflow: 'hidden' }}
            className="relative overflow-hidden h-24 sm:h-32 md:h-48 w-full"
          >
            <LogoLoop
              logos={techLogos}
              speed={getRandomInt(SPEED_RANGE.min, SPEED_RANGE.max)}
              direction={getRandomDirection()}
              logoHeight={LOGO_HEIGHT}
              gap={GAP}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor={FADE_OUT_COLOR}
              ariaLabel={ARIA_LABEL}
            />
          </div>
        ))}
      </div>
    </section>

  );
}

