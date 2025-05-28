const DEFAULT_BASE_URL = "https://official-joke-api.appspot.com";

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
  getFunnyJoke(request: any): Promise<Joke>;
}

export class FunnyJokeClient implements IFunnyJokeClient {
  private baseUrl: string;
  constructor(props: FunnyJokeClientProps) {
    this.baseUrl = props.baseUrl ?? DEFAULT_BASE_URL;
  }
  async getFunnyJoke(request: any): Promise<Joke> {
    const response = await fetch(`${this.baseUrl}/jokes/random`, {
      method: "get",
    });
    const joke = await response.json();
    return joke;
  }
}
