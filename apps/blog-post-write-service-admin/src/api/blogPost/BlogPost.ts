export type BlogPost = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
