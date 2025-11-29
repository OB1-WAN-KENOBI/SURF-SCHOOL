/**
 * Review entity types
 */
export interface Review {
  id: string;
  image: string;
  text: string;
  author: string;
  date: string;
  rating?: number;
}
