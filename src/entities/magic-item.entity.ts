import { ApiProperty } from '@nestjs/swagger';
import { ItemType } from '../enums/item-type.enum';

export class MagicItem {
  @ApiProperty({ description: 'Unique identifier of the magic item' })
  id: string;

  @ApiProperty({ description: 'Name of the magic item' })
  name: string;

  @ApiProperty({ enum: ItemType, description: 'Type of the magic item' })
  type: ItemType;

  @ApiProperty({ description: 'Strength of the magic item (max 10)' })
  strength: number;

  @ApiProperty({ description: 'Defense of the magic item (max 10)' })
  defense: number;

  @ApiProperty({ description: 'Character ID that owns this item' })
  characterId: string;

  constructor(partial: Partial<MagicItem>) {
    Object.assign(this, partial);
  }
} 