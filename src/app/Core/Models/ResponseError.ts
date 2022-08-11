export interface ResponseError {
  headers: Headers;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: Error;
}

export interface Error {
  Message: string;
  Content: any;
  Success: string;
}

export interface Headers {
  normalizedNames: NormalizedNames;
  lazyUpdate: null;
}

export interface NormalizedNames {
}
