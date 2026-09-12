/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly VITE_OPENROUTER_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'react-syntax-highlighter' {
  import type { ComponentType, ReactNode } from 'react';
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: ReactNode;
    PreTag?: any;
    customStyle?: any;
    [key: string]: any;
  }
  export const Prism: ComponentType<SyntaxHighlighterProps>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const oneDark: any;
}
