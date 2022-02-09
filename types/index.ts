export interface Image {
  src: string;
  alt: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'video' | 'article';
  url: string;
  thumbnail?: Image;
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}
