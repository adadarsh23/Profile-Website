'use client';

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import { X, Check } from 'lucide-react';

interface EditMessageFormProps {
  initialText: string;
  onSave: (text: string) => void;
  onCancel: () => void;
}

export function EditMessageForm({
  initialText,
  onSave,
  onCancel,
}: EditMessageFormProps) {
  const [editedText, setEditedText] = useState(initialText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length
      );
    }
  }, []);

  const handleSave = () => {
    const trimmed = editedText.trim();
    if (trimmed) {
      onSave(trimmed);
    } else {
      onCancel();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
    }
  };

  return (
    <div
      className="flex flex-col gap-2 w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <textarea
        ref={textareaRef}
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-xl border border-white/20 bg-black/60 p-2.5 text-[15px] sm:text-sm text-white placeholder-white/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 resize-none transition-colors"
        rows={Math.min(6, Math.max(2, editedText.split('\n').length))}
        placeholder="Edit your prompt..."
      />
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-3.5 w-3.5" />
          <span>Cancel</span>
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={!editedText.trim()}
          className="flex items-center gap-1 rounded-lg bg-white/20 px-3 py-1 text-xs font-medium text-white hover:bg-white/30 disabled:opacity-50 transition-colors"
        >
          <Check className="h-3.5 w-3.5 text-cyan-400" />
          <span>Save & Send</span>
        </button>
      </div>
    </div>
  );
}

export default EditMessageForm;
