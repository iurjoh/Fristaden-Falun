

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

export interface AudioTeaching {
  id: number;
  title: string;
  speaker: string;
  date: string;
  audioUrl: string;
  duration: string;
}

export interface StudyGuide {
  id: number;
  title: string;
  description: string;
  pdfUrl: string;
  imageUrl: string;
}