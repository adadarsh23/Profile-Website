import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  X,
  Copy,
  Check,
  Link,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Dialog09Props {
  shareUrl: string;
  platforms?: string[];
}

export default function Dialog09({
  shareUrl,
  platforms = [
    'twitter',
    'facebook',
    'linkedin',
    'whatsapp',
    'reddit',
    'telegram',
    'email',
    'github',
  ],
}: Dialog09Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [shareUrl]);

  const getShareLink = (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const text = encodeURIComponent('Check this out!');

    switch (platform.toLowerCase()) {
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      case 'whatsapp':
        return `https://wa.me/?text=${text}%20${url}`;
      case 'reddit':
        return `https://reddit.com/submit?url=${url}&title=${text}`;
      case 'telegram':
        return `https://t.me/share/url?url=${url}&text=${text}`;
      case 'email':
        return `mailto:?subject=${text}&body=${url}`;
      case 'github':
        return shareUrl;
      default:
        return '#';
    }
  };

  // SVG Paths for icons
  const brandIcons: Record<string, React.ReactNode> = {
    twitter: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    facebook: (
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733 1.379-2.733 2.832v1.14h4.176l-.588 3.667h-3.588v7.98h-5.084z" />
    ),
    linkedin: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
    whatsapp: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    ),
    reddit: (
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    ),
    telegram: (
      <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.432z" />
    ),
    github: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute bottom-14 left-0 z-50 flex min-w-[240px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/95 p-4 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4 text-sm font-semibold text-neutral-200">
              Share this page
            </div>

            <div className="mb-4 grid grid-cols-4 gap-3">
              {platforms.map((platform) => (
                <a
                  key={platform}
                  href={getShareLink(platform)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-square items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-all hover:scale-110 hover:bg-neutral-700 hover:text-white"
                  title={`Share on ${platform}`}
                >
                  {brandIcons[platform.toLowerCase()] ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-current stroke-none"
                    >
                      {brandIcons[platform.toLowerCase()]}
                    </svg>
                  ) : platform.toLowerCase() === 'email' ? (
                    <Mail className="h-5 w-5" />
                  ) : (
                    <MessageCircle className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>

            <div className="mb-3 h-px w-full bg-neutral-800" />

            <button
              onClick={handleCopy}
              className={cn(
                'flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all',
                copied
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
              )}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? 'Link Copied!' : 'Copy Link'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        aria-label="Share"
        title="Share"
        className="
        bottom-[clamp(10px,2vw,20px)]
    left-[clamp(120px,2vw,130px)]
    [@media(max-width:480px)]:left-[clamp(50px,2vw,30px)]
    fixed z-48
    flex h-10 w-10 cursor-pointer items-center justify-center
    rounded-full border  text-white shadow-lg backdrop-blur-md hover:shadow-xl "
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        {isOpen ? (
          <X className="w-4.5 h-4.5" />
        ) : (
          <Share2 className="w-4.5 h-4.5" />
        )}
      </motion.button>
    </div>
  );
}
