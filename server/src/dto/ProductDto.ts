import { Measurement } from '../common/measurement.enum';

export class CreateProductDto {
  name!: string;
  price!: number;
  unitOfMeasurement!: Measurement; 
  description!: string;
  stock!: number;
  imgUrl?: string;
  brand?: string;
  categoryId!: string; 
  promotionId?: string; 
}
