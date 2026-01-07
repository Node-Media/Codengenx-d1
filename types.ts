export interface Course {
  id: string;
  title: string;
  category: 'Crash Course' | 'Placement' | 'Long Term';
  duration: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}