export interface GameList {
  total: number;
  items: Game[];
}

export interface Game {
  type: string;
  name: string;
  id: number;
  tiny_image: string;
  metascore: string;
  platforms: Platforms;
  streamingvideo: boolean;
  controller_support?: string;
  price?: Price;
}

export interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

export interface Price {
  currency: string;
  initial: number;
  final: number;
}
