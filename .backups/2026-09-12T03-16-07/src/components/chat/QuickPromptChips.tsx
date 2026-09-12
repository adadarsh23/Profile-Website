'use client';

import { memo } from 'react';

export interface PromptChipItem {
  id?: string;
  label: string;
  text: string;
  icon?: string;
}

export const DEFAULT_PROMPTS: PromptChipItem[] = [
  {
    label: 'Music & Albums',
    text: 'Tell me about Âd Adarsh’s latest music projects, albums, and discography.',
    icon: '🎵',
  },
  {
    label: 'Beats & Samples',
    text: 'What beats and soundscapes has Âd Adarsh produced, and where can I listen?',
    icon: '🎧',
  },
  {
    label: 'Skills & DAW',
    text: 'What software, plugins, and DAWs does Âd Adarsh use for audio production?',
    icon: '🎹',
  },
  {
    label: 'Collaboration & Contact',
    text: 'How can artists or creators contact Âd Adarsh for collaborations and bookings?',
    icon: '📩',
  },
  {
    label: 'Bio & Journey',
    text: 'Who is Âd Adarsh? Tell me about his journey in music and tech.',
    icon: '✨',
  },
];

interface QuickPromptChipsProps {
  onSelect: (promptText: string) => void;
  disabled?: boolean;
  prompts?: PromptChipItem[];
  title?: string;
}

export const QuickPromptChips = memo(function QuickPromptChips({
  onSelect,
  disabled = false,
  prompts = DEFAULT_PROMPTS,
}: QuickPromptChipsProps) {
  return (
    <div className="w-full shrink-0 border-t border-white/[0.08] bg-zinc-950/80 px-3 sm:px-4 py-1.5 backdrop-blur-md">
      <div className="flex gap-1.5 overflow-x-auto pb-0.5 text-[11px] no-scrollbar scroll-smooth">
        {prompts.map((item, idx) => (
          <button
            key={item.id || item.label || idx}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(item.text)}
            className="group flex shrink-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/80 shadow-xs transition-all duration-150 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {item.icon && (
              <span className="text-[11px] leading-none transition-transform duration-150 group-hover:scale-110">
                {item.icon}
              </span>
            )}
            <span className="whitespace-nowrap font-normal">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

export default QuickPromptChips;
