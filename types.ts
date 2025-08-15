
export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  imageUrl: string;
  videoUrl: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
}
