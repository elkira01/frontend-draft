import { EnumGenre } from '@/types/book/valueObject/EnumGenre';
import { BookReview } from '@/types/book/models/BookReview';

export interface Book {
  id?: any;
  title: string;
  author: string;
  isbn: string;
  genre: EnumGenre;
  pages: number;
  summary: string;
  language: any;
  edition: any;
  publicationDate: any;
  coverImage: string;
  averageRating: number;
  reviews: BookReview[];
  reviewsCount: number;
  isDeleted: boolean;
  deletedAt: any;
  createdAt: any;
  updatedAt: any;
}

export type BookType = Partial<Book>;

export type BookFormType = Omit<
  Book,
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'isDeleted'
  | 'reviews'
  | 'reviewsCount'
  | 'averageRating'
>;
