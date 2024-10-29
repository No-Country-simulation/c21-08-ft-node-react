import { Measurement } from '../common/measurement.enum';
import { ProductStatus } from '../common/statusProduct';

export class CreateProductDto {
  name!: string;
  price!: number;
  unitOfMeasurement!: Measurement; 
  description!: string;
  stock!: number;
  imgUrl?: string;
  brand?: string;
  category!: string; 
  promotion!: string; 
  status?: ProductStatus;
}
