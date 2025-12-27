'use client';

import { useState } from 'react';
import { X, CheckCheck } from 'lucide-react';

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

  const handleSave = () => {
    onSave(editedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSave();
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <div className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full p-2 text-sm bg-white/10 rounded-lg border border-black/90 text-black focus:outline-none focus:ring-1 focus:ring-white/50"
        rows={Math.max(3, editedText.split('\n').length)}
        autoFocus
      />
      <div className="flex justify-start gap-2">
        <button
          onClick={onCancel}
          className="text-xs text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
        >
          <CheckCheck className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
