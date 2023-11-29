import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  limit: number;

  @Type(() => Number)
  @IsPositive()
  @IsOptional()
  offset: number;
}
