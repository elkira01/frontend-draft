import { fetchCallAction } from '@/lib/api/fetch';
import { BookType } from '@/types/book';

const baseUrl = `/api/book`;
export const bookCollection = fetchCallAction<BookType[]>(`${baseUrl}/`, 'get');
