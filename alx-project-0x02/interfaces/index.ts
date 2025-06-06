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

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


export interface ButtonProps {
  title: string
  styles: string
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}


export interface CardModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface    PostModalProps {
  onClose: () => void;
  onSubmit: (post:  PostProps) => void;
}