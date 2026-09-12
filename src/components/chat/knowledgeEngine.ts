// src/components/chat/knowledgeEngine.ts
import { personalData } from '@/data/personalData';

export interface KnowledgeMatch {
  matched: boolean;
  response: string;
  confidence: number;
  category?: string;
  suggestedFollowUps?: string[];
}

/**
 * Normalizes input text for fast keyword and intent analysis
 */
function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fast-path local knowledge engine.
 * Evaluates queries about Âd Adarsh, his music, sample beats, skills, contact,
 * socials, and website navigation with instant 0ms latency.
 */
export function queryLocalKnowledge(rawQuery: string): KnowledgeMatch {
  const query = normalizeQuery(rawQuery);
  if (!query) {
    return {
      matched: true,
      response:
        "Hello! I'm AD Assistant. How can I help you explore Âd Adarsh's music, beats, or creative projects?",
      confidence: 1.0,
      suggestedFollowUps: [
        '🎵 Music Releases',
        '🎧 Sample Beats',
        '📬 Contact Details',
      ],
    };
  }

  // 1. GREETINGS & IDENTITY
  if (
    /^(hi|hello|hey|hola|namaste|yo|sup|greetings|good morning|good afternoon|good evening)\b/.test(
      query
    ) ||
    query === 'hi' ||
    query === 'hello'
  ) {
    return {
      matched: true,
      response: `### 👋 Hey there! Welcome to Âd Adarsh's official portfolio.

I'm your **AD Assistant**. Here's what you can explore with me:
- 🎶 **Original Music & Albums**: *Silent Ritual*, *Haqeeqat*, *Number 2*, *Unfelling*, *Phaser*
- 🎧 **Sample Beats & Store**: Lo-fi, Trap, House, and EDM instrumentals with instant audio previews
- 🎛 **DAW & Sound Design**: Production workflow in FL Studio, Serum, Omnisphere, mixing & mastering
- 📬 **Booking & Collaborations**: Direct contact channels, email, phone, and project inquiries
- 🌐 **Streaming Profiles**: Spotify, Apple Music, SoundCloud, YouTube

What would you like to check out first?`,
      confidence: 0.98,
      category: 'greeting',
      suggestedFollowUps: [
        '🎵 Tell me about Silent Ritual',
        '🎧 Show sample beats',
        '🎹 Production skills & DAW',
        '📬 How can I contact Adarsh?',
      ],
    };
  }

  if (
    /\b(who are you|what is your name|your identity|who made you|what can you do|help me|commands|options|features)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `I am **AD Assistant**, the official AI companion for **Âd Adarsh**'s creative portfolio.

Here is what I can assist you with:
1. **Explore Music Releases**: Learn about Âd Adarsh's tracks like *Silent Ritual*, *Haqeeqat*, *Number 2*, and upcoming drops.
2. **Beat Store & Licensing**: Discover sample beats, BPM, genres, and pricing available on the site.
3. **Music Production & Gear**: Details on sound design, mixing & mastering, and FL Studio workflows.
4. **Direct Contact**: Get direct booking email, phone, and social media handles.
5. **Site Navigation**: Quick jumps to any section of the website.`,
      confidence: 0.98,
      category: 'identity',
      suggestedFollowUps: [
        '🎵 Tell me about Silent Ritual',
        '🎧 Show sample beats',
        '📬 How to contact',
      ],
    };
  }

  // 2. WHO IS ADARSH / BIO / ABOUT / LOCATION
  if (
    /\b(who is adarsh|who is ad adarsh|about adarsh|tell me about adarsh|bio|biography|creator|artist|background|journey|profile|where is he from|where are you from)\b/.test(
      query
    ) ||
    (query.includes('about') &&
      !query.includes('silent') &&
      !query.includes('beat') &&
      !query.includes('track'))
  ) {
    return {
      matched: true,
      response: `### 🌟 Âd Adarsh — Music Producer & Creative Developer

**Âd Adarsh** is an independent music producer, beatmaker, sound designer, and creative developer based in **Delhi, India**.

- 📍 **Origin & Base**: Delhi, India
- 🎛 **Core Craft**: Atmospheric soundscapes, dark cinematic rhythms, hard-hitting trap beats, and emotive melodies.
- 🎯 **Mission**: *${personalData.about[0]?.description || 'Build high-quality, scalable, and meaningful digital experiences.'}*
- 🚀 **Vision**: *${personalData.about[1]?.description || 'Empower creators with modern tools, fast workflows, and innovation.'}*
- 💡 **Philosophy**: "Dark Tones. Clean Edges. Where Sound Meets Emotion."

You can discover his full story on the [About Page](/about) or listen to his releases across major streaming platforms.`,
      confidence: 0.96,
      category: 'bio',
      suggestedFollowUps: [
        '🎵 Tell me about Silent Ritual',
        '🎧 Sample Beats',
        '🎹 What DAW does he use?',
        '📬 Contact Details',
      ],
    };
  }

  // 3. SILENT RITUAL (Flagship Album)
  if (
    query.includes('silent ritual') ||
    query.includes('silent') ||
    query.includes('ritual')
  ) {
    const sr = personalData.musicProjects.find(
      (p) => p.name.toLowerCase() === 'silent ritual'
    );
    return {
      matched: true,
      response: `### 🌌 **Silent Ritual (2025)** — Flagship Album

**Silent Ritual** is Âd Adarsh's flagship 10-track atmospheric music collection, crafted specifically for artists, creators, and cinema enthusiasts.

- **Release Year**: ${sr?.year || 2025}
- **Production**: Fully composed, produced, mixed, and mastered by **Âd Adarsh**.
- **Atmosphere & Style**: Deep cinematic drones, eerie melodies, punchy basslines, and layered harmonics.
- **Technologies Used**: ${sr?.technologies.join(', ') || 'FL Studio, Serum, Splice Samples'}.
- **Where to Listen**: Stream on [Spotify](${personalData.socials.spotify}), [Apple Music](${personalData.socials.itunes}), [SoundCloud](${personalData.socials.soundcloud}), and [YouTube](${personalData.socials.youtube}).`,
      confidence: 0.98,
      category: 'project-silent-ritual',
      suggestedFollowUps: [
        '🎵 What other tracks are there?',
        '🎧 Sample beats catalog',
        '🎛 What plugins were used in Silent Ritual?',
      ],
    };
  }

  // 4. OTHER SPECIFIC TRACKS
  if (query.includes('haqeeqat') || query.includes('haqiqat')) {
    const track = personalData.musicProjects.find(
      (p) => p.name.toLowerCase() === 'haqeeqat'
    );
    return {
      matched: true,
      response: `### 💖 **Haqeeqat (2025)**

${track?.description || 'A melodic love song blending emotional depth with clean production.'}

- **Released**: ${track?.year || 2025}
- **Vibe / Genre**: Melodic, Emotional, Contemporary
- **DAW & Instruments**: ${track?.technologies.join(', ') || 'FL Studio, Omnisphere, Splice Samples'}
- **Credits**: Produced, mixed, and mastered by **Âd Adarsh**.`,
      confidence: 0.98,
      category: 'track-haqeeqat',
      suggestedFollowUps: ['🎵 Show all music releases', '🎧 Sample beats'],
    };
  }

  if (
    query.includes('number 2') ||
    query.includes('number two') ||
    query.includes('number2')
  ) {
    const track = personalData.musicProjects.find(
      (p) => p.name.toLowerCase() === 'number 2'
    );
    return {
      matched: true,
      response: `### 🔥 **Number 2 (2024)**

${track?.description || 'A high-energy Hip-Hop track with punchy drums and catchy hooks.'}

- **Significance**: The debut official track released by **Âd Adarsh**.
- **Release Year**: ${track?.year || 2024}
- **Genre / Style**: High-energy Hip-Hop with heavy 808s and crisp percussion.
- **DAW**: ${track?.technologies.join(', ') || 'FL Studio'}`,
      confidence: 0.98,
      category: 'track-number2',
      suggestedFollowUps: ['🌌 Silent Ritual album', '🎧 Listen on SoundCloud'],
    };
  }

  if (query.includes('unfelling') || query.includes('unfeeling')) {
    const track = personalData.musicProjects.find(
      (p) => p.name.toLowerCase() === 'unfelling'
    );
    return {
      matched: true,
      response: `### 🌑 **Unfelling (2024)**

${track?.description || 'A dark, atmospheric track with eerie melodies and deep basslines.'}

- **Release Year**: ${track?.year || 2024}
- **Sound**: Dark ambient / cinematic bass
- **Tools**: ${track?.technologies.join(', ') || 'FL Studio, Splice Samples'}
- **Credits**: Produced, mixed, and mastered by **Âd Adarsh**.`,
      confidence: 0.98,
      category: 'track-unfelling',
      suggestedFollowUps: ['🌌 Silent Ritual', '⚡ Phaser track'],
    };
  }

  if (query.includes('phaser')) {
    const track = personalData.musicProjects.find(
      (p) => p.name.toLowerCase() === 'phaser'
    );
    return {
      matched: true,
      response: `### ⚡ **Phaser (2025)**

${track?.description || 'An energetic EDM track featuring bright synths and powerful rhythms.'}

- **Release Year**: ${track?.year || 2025}
- **Genre**: EDM / Electronic Dance Music
- **DAW**: ${track?.technologies.join(', ') || 'FL Studio'}`,
      confidence: 0.98,
      category: 'track-phaser',
      suggestedFollowUps: ['🎵 Show all music releases', '🎧 Sample beats'],
    };
  }

  // 5. ALL MUSIC / TRACKS / ALBUMS / DISCOGRAPHY
  if (
    /\b(music|songs|tracks|albums|discography|releases|singles|listen|audio|tunes)\b/.test(
      query
    )
  ) {
    const trackList = personalData.musicProjects
      .map(
        (p) =>
          `- 🎵 **${p.name}** (${p.year}) — *${p.description}* [Tools: ${p.technologies.join(', ')}]`
      )
      .join('\n');

    return {
      matched: true,
      response: `### 🎶 **Âd Adarsh Discography & Music Releases**

Here are the official releases produced, mixed, and mastered by **Âd Adarsh**:

${trackList}

---

### 🔊 Stream Everywhere:
- [Spotify Artist Profile](${personalData.socials.spotify})
- [Apple Music / iTunes](${personalData.socials.itunes})
- [SoundCloud Stream](${personalData.socials.soundcloud})
- [YouTube Channel](${personalData.socials.youtube})`,
      confidence: 0.96,
      category: 'music',
      suggestedFollowUps: [
        '🌌 Tell me about Silent Ritual',
        '🎧 Show sample beats',
        '🎛 What DAW do you use?',
      ],
    };
  }

  // 6. SAMPLE BEATS & BEAT STORE & LICENSING
  if (
    /\b(sample|samples|beat|beats|buy beat|license|licensing|pricing|bpm|lofi|trap|summer vibes|midnight chill|instrumental|instrumentals)\b/.test(
      query
    )
  ) {
    const beatsList = personalData.sampleBeats
      .map(
        (b) =>
          `- **${b.title}** (${b.genre}) — **${b.bpm} BPM** | Duration: ${b.duration} | **Price: ${b.price}**`
      )
      .join('\n');

    return {
      matched: true,
      response: `### 🎧 **Sample Beats & Instrumentals Catalog**

You can preview, stream, and download beats directly from the [Sample Beats Page](/sample):

${beatsList}

> 💡 **Licensing & Commissions**:
> Need exclusive rights, custom stems, or a custom beat built from scratch for your project? Reach out via [Contact Page](/contact) or email **${personalData.contact.email}**.`,
      confidence: 0.96,
      category: 'beats',
      suggestedFollowUps: [
        '🛒 How can I buy or license a beat?',
        '📬 Contact for custom beat commission',
        '🎵 Listen to original songs',
      ],
    };
  }

  // 7. CONTACT / EMAIL / PHONE / BOOKING / COLLABORATION
  if (
    /\b(contact|email|mail|phone|call|hire|book|booking|collab|collaboration|reach|address|location|city|country|whatsapp|telegram|discord)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `### 📬 **Contact & Collaboration Details**

You can reach out directly to Âd Adarsh for music production, beat licensing, custom score commissions, or creative development:

- 📧 **Email**: [${personalData.contact.email}](mailto:${personalData.contact.email})
- 📱 **Phone / WhatsApp**: [${personalData.contact.phone}](tel:${personalData.contact.phone})
- 📍 **Location**: ${personalData.location.city}, ${personalData.location.state}, ${personalData.location.country} (${personalData.location.pincode})
- 💬 **Discord**: [Join Adarsh's Server](${personalData.socials.discord})
- ✈️ **Telegram**: [adadarsh23](${personalData.socials.telegram})
- 📝 **Contact Form**: Visit the [Contact Page](/contact) to send a message directly!`,
      confidence: 0.98,
      category: 'contact',
      suggestedFollowUps: [
        '🌐 Social Media Links',
        '🎧 Custom Beat Inquiry',
        '🎵 Discography',
      ],
    };
  }

  // 8. SOCIAL LINKS & STREAMING PROFILES
  if (
    /\b(social|socials|instagram|insta|spotify|soundcloud|youtube|github|linkedin|twitter|x|reddit|discord|telegram|threads|snapchat|pinterest|links)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `### 🌐 **Official Social Media & Streaming Links**

Connect with **Âd Adarsh** across all official platforms:

- 🟢 **Spotify**: [Ad Adarsh on Spotify](${personalData.socials.spotify})
- 🍎 **Apple Music**: [Ad Adarsh on Apple Music](${personalData.socials.itunes})
- 🟠 **SoundCloud**: [Ad Adarsh on SoundCloud](${personalData.socials.soundcloud})
- 🔴 **YouTube**: [Ad Adarsh Official YouTube](${personalData.socials.youtube})
- 📸 **Instagram**: [@adadarsh23](${personalData.socials.instagram})
- 💻 **GitHub**: [github.com/adadarsh23](${personalData.socials.github})
- 💼 **LinkedIn**: [linkedin.com/in/adadarsh23](${personalData.socials.linkedin})
- 🐦 **Twitter / X**: [@adadarsh23](${personalData.socials.twitter})
- 👾 **Discord**: [Adarsh's Community](${personalData.socials.discord})`,
      confidence: 0.98,
      category: 'socials',
      suggestedFollowUps: [
        '🎵 Stream Silent Ritual',
        '📬 Email Âd Adarsh',
        '🎧 Sample Beats',
      ],
    };
  }

  // 9. SKILLS / PRODUCTION GEAR / DAW / MIXING / TECH STACK
  if (
    /\b(skill|skills|daw|fl studio|serum|omnisphere|software|plugins|mixing|mastering|gear|equipment|tech|technologies|tools|stack|code|developer)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `### 🛠 **Skills, Equipment & Tech Stack**

#### 🎛 **Music Production & Audio Engineering**:
- **Digital Audio Workstation (DAW)**: FL Studio (Advanced workflow, arrangement, automation)
- **Virtual Synths & Instruments**: Xfer Serum, Spectrasonics Omnisphere, Splice Samples
- **Engineering**: Beat Making, Sound Design, Audio Synthesis, Equalization, Compression, Mixing and Mastering
- **Signature Style**: Dark atmospheric soundscapes, cinematic beats, crisp 808s, emotive melodies

#### 💻 **Creative Web & Software Development**:
- **Frontend**: React 19, Vite, Tailwind CSS, TypeScript
- **3D & Creative Coding**: Three.js, React Three Fiber, Framer Motion
- **Performance & Full Stack**: Node.js, Express, REST APIs, Gemini AI Integration`,
      confidence: 0.96,
      category: 'skills',
      suggestedFollowUps: [
        '🎵 Music Projects',
        '🎧 Sample Beats',
        '📬 Work together',
      ],
    };
  }

  // 10. MUSIC PRODUCTION TIPS (Mixing, 808s, Mastering)
  if (
    /\b(how to mix|mix 808|kick and 808|mastering|sound design|production tips|make beats|sidechain)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `### 🎛 **Audio Production & Mixing Insights from Âd Adarsh**

Here are core principles Âd Adarsh uses in his production workflow:

1. **Locking Kick & 808**:
   - Tune your 808 to the key of the track.
   - Sidechain high-pass dynamic EQ or duck the 808 transient by ~2-3dB when the kick hits.
   - Cut conflicting low-mids (around 200–350Hz) to give the bass breathing room.

2. **Creating Atmospheric Depth**:
   - Send atmospheric synths to a stereo delay and large reverb with high-frequency damping.
   - Use automation filters (low-pass sweeps) to create anticipation before beat drops.

3. **Crisp High-End**:
   - Use soft saturation on hi-hats rather than aggressive treble boost to avoid ear fatigue.

4. **Mastering Chain**:
   - Gentle multiband compression -> dynamic EQ -> subtle tape saturation -> transparent true-peak limiter.`,
      confidence: 0.95,
      category: 'production-tips',
      suggestedFollowUps: [
        '🎹 What DAW does he use?',
        '🎵 Listen to Silent Ritual',
        '🎧 Sample Beats',
      ],
    };
  }

  // 11. WEBSITE SECTIONS & NAVIGATION
  if (
    /\b(website|pages|sections|navigate|navigation|home|gallery|about page|sample page|blog|contact page)\b/.test(
      query
    )
  ) {
    return {
      matched: true,
      response: `### 🗺 **Website Navigation Guide**

Here is what you can explore across the website:

1. 🏠 **[Home](/)**: Featured releases, latest tracks, video showcases, and interactive 3D elements.
2. 🎧 **[Sample Beats](/sample)**: Beat store with instant audio previews, BPM, genres, and pricing.
3. 📖 **[About](/about)**: Âd Adarsh's story, values, creative philosophy, and vision.
4. 🖼 **[Gallery](/gallery)**: Visual photography, creative graphics, and artwork.
5. ✍️ **[Blog](/blog)**: Creator highlights, production insights, and artist spotlights.
6. 📬 **[Contact](/contact)**: Direct inquiry form for collaborations, beat purchases, and inquiries.`,
      confidence: 0.95,
      category: 'navigation',
      suggestedFollowUps: [
        '🎵 Go to Music',
        '🎧 Check Sample Beats',
        '📬 Contact Adarsh',
      ],
    };
  }

  // 12. BLOG & FEATURED CREATORS
  if (/\b(blog|creators|sarah|mike|sarah johnson|mike chen)\b/.test(query)) {
    const creators = [
      '- **Sarah Johnson** (Music Producer & Beatmaker) — [@sarahbeats](https://soundcloud.com/sarahjohnson)',
      '- **Mike Chen** (Electronic Music Producer) — [@mikeelectro](https://spotify.com/artist/mikechen)',
    ].join('\n');

    return {
      matched: true,
      response: `### ✍️ **Blog & Featured Creators**

The [Blog Section](/blog) highlights incredible producers and collaborators:

${creators}

Check out the full creator spotlights on the [Blog Page](/blog)!`,
      confidence: 0.95,
      category: 'blog',
      suggestedFollowUps: ['📖 About Adarsh', '🎵 Music Projects'],
    };
  }

  // 13. INTELLIGENT COMPREHENSIVE FALLBACK
  // When a query doesn't match an exact regex, provide a helpful and contextual portfolio response
  return {
    matched: true,
    confidence: 0.88,
    response: `I'd be glad to help you with that! 

As **AD Assistant** (Âd Adarsh's official AI guide), I can assist you with his **music projects**, **sample beats**, **audio engineering**, or **booking**:
- 🎵 **Albums & Tracks**: [*Silent Ritual* (2025)](/sample), *Haqeeqat*, *Number 2*, *Unfelling*, *Phaser*
- 🎧 **Sample Beats**: Lo-fi, Trap, House, and EDM instrumentals available on the [Sample Beats Page](/sample)
- 🎛 **DAW & Production**: FL Studio, Serum, Omnisphere, sound design, mixing & mastering
- 📬 **Direct Booking & Inquiries**: Email [${personalData.contact.email}](mailto:${personalData.contact.email}) or use the [Contact Page](/contact)

Which of these would you like to explore further?`,
    category: 'fallback',
    suggestedFollowUps: [
      '🎵 Tell me about Silent Ritual',
      '🎧 Show sample beats',
      '🎹 Production skills & DAW',
      '📬 Contact Details',
    ],
  };
}
