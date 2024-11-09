import { BookType } from '@/types/book';
import { DTO } from '@/types/DTO';

// export class BookDto implements DTO<BookType> {
//   input: BookType | any = {};
//   constructor(data: any) {
//     this.input = data;
//   }
//
//   format(isForm?: boolean) {
//     return isForm
//       ? {
//           ...this.input,
//           publication_date: this.input.publicationDate,
//           average_rating: this.input.averageRating,
//           cover_image: this.input.coverImage,
//           created_at: this.input.createdAt,
//           updated_at: this.input.updatedAt,
//           is_deleted: this.input.isDeleted,
//         }
//       : {
//           ...this.input,
//           publicationDate: this.input.publication_date,
//           averageRating: this.input.average_rating,
//           coverImage: this.input.cover_image,
//           createdAt: this.input.created_at,
//           updatedAt: this.input.updated_at,
//           isDeleted: this.input.is_deleted,
//         };
//   }
//
//   get(): BookType {
//     return this.input;
//   }
// }
