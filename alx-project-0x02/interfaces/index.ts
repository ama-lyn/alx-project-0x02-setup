export interface CardProps{
    id:number,
    title: string;
    content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}