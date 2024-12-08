export interface Post {
  image?: string;
  caption: string;
  reactions: [
    {
      reactor: string;
    }
  ];
  comments: [
    {
      commentetor: string;
      comment: string;
      timestamp: string;
    }
  ];
  createdAt?: string;
  updatedAt?: string;
}
