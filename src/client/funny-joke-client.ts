const DEFAULT_BASE_URL = "https://official-joke-api.appspot.com";
const FETCH_TIMEOUT_MS = 5000;

export interface Joke {
  id: number;
  punchline: string;
  setup: string;
  type: string;
}

export interface FunnyJokeClientProps {
  baseUrl?: string;
}

export interface IFunnyJokeClient {
  getFunnyJoke(): Promise<Joke>;
}

export class FunnyJokeClient implements IFunnyJokeClient {
  private baseUrl: string;
  constructor(props: FunnyJokeClientProps) {
    this.baseUrl = props.baseUrl ?? DEFAULT_BASE_URL;
  }

  async getFunnyJoke(): Promise<Joke> {
    const response = await fetch(`${this.baseUrl}/jokes/random`, {
      method: "GET",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!response.ok) {
      throw new Error(`getFunnyJoke returned status ${response.status}`);
    }
    return response.json() as Promise<Joke>;
  }
}
