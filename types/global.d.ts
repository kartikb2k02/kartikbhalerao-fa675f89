// Global type declarations
declare global {
  interface Window {
    Cal?: {
      (action: string, options?: any): void;
    }
  }
}

export {};