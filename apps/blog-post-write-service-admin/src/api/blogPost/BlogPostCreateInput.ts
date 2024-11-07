export type BlogPostCreateInput = {
  author?: string | null;
  content?: string | null;
  publishedAt?: Date | null;
  status?: "Option1" | null;
  title?: string | null;
};
