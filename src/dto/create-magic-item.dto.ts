import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNumber, Min, Max, IsNotEmpty, ValidateIf } from 'class-validator';
import { ItemType } from '../enums/item-type.enum';

export class CreateMagicItemDto {
  @ApiProperty({ description: 'Name of the magic item' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: ItemType, description: 'Type of the magic item' })
  @IsEnum(ItemType)
  type: ItemType;

  @ApiProperty({ description: 'Strength of the magic item (max 10)' })
  @ValidateIf(o => o.type !== ItemType.ARMADURA)
  @IsNumber()
  @Min(0)
  @Max(10)
  strength: number;

  @ApiProperty({ description: 'Defense of the magic item (max 10)' })
  @ValidateIf(o => o.type !== ItemType.ARMA)
  @IsNumber()
  @Min(0)
  @Max(10)
  defense: number;
} 