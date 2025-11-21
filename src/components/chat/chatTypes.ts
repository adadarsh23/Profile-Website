/**
 * Represents the sender of a chat message.
 * 'ai' for messages from the AI, 'user' for messages from the user.
 */
export type ChatSender = 'ai' | 'user';

/**
 * Represents a single message in the chat conversation.
 */
export type ChatMessage = {
  /**
   * A unique identifier for the message.
   */
  readonly id: string;
  /**
   * The entity that sent the message.
   */
  readonly sender: ChatSender;
  /**
   * The textual content of the message.
   */
  readonly text: string;
  /**
   * Optional timestamp indicating when the message was created, in milliseconds since epoch.
   */
  readonly timestamp?: number;
};

/**
 * Represents the summarized memory of the chat conversation.
 */
export type ChatMemory = {
  /** A concise summary of the conversation so far. */
  readonly summary: string;
  /** Key terms or phrases extracted from the conversation. */
  readonly keywords: readonly string[]; // Use readonly array for immutability
};
