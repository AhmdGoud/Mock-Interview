interface PuterResponse {
  message: {
    content: string;
  };
}

declare const puter: {
  ai: {
    chat: (
      prompt: string,
      options?: {
        model?: string;
      },
    ) => Promise<PuterResponse>;
  };
};
