export interface CardProps{
    id:number,
    title: string;
    content: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  content: string;
}


export interface CardModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface    PostModalProps {
  onClose: () => void;
  onSubmit: (post:  PostProps) => void;
}