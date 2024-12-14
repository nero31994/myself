export interface Channel {
  id: number;
  name: string;
  logo: string;
  streamUrl: string;
  type: 'mpd' | 'hls';
  keyId?: string;
  key?: string;
}

export const channels: Channel[] = [
  {
    id: 1,
    name: "NBA TV PH",
    logo: "/placeholder.svg?height=50&width=50",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd",
    keyId: "f36eed9e95f140fabbc88a08abbeafff",
    key: "0125600d0eb13359c28bdab4a2ebe75a",
    type: "mpd"
  },
  {
    id: 2,
    name: "News 24/7",
    logo: "/placeholder.svg?height=50&width=50",
    streamUrl: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd",
    type: "mpd"
  },
  {
    id: 3,
    name: "Sports Channel",
    logo: "/placeholder.svg?height=50&width=50",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    type: "hls"
  },
  {
    id: 4,
    name: "Movie Central",
    logo: "/placeholder.svg?height=50&width=50",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    type: "hls"
  },
  {
    id: 5,
    name: "Lifestyle TV",
    logo: "/placeholder.svg?height=50&width=50",
    streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
    type: "hls"
  }
];

