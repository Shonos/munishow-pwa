/* tslint:disable */
import { Product } from './Product';

export interface Municipality {
  name?: string;
  coords?: number[][];
  products?: Array<Product>;
  delicacies?: Array<Product>;
}
