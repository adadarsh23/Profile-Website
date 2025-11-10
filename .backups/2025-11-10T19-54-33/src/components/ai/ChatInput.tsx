import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center gap-2 p-3 border-t border-white/10 relative z-10">
      <input
        className="flex-1 px-3 py-2 text-sm bg-black/50 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
        placeholder="Type a message..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSend()}
      />
      <button
        onClick={onSend}
        disabled={disabled}
        className={cn(
          'p-2 rounded-lg transition-colors',
          disabled
            ? 'bg-black/10 cursor-not-allowed'
            : 'bg-white/10 hover:bg-white/20'
        )}
      >
        <Send className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
