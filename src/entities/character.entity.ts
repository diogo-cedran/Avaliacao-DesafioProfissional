import { ApiProperty } from '@nestjs/swagger';
import { CharacterClass } from '../enums/character-class.enum';
import { MagicItem } from './magic-item.entity';

export class Character {
  @ApiProperty({ description: 'Unique identifier of the character' })
  id: string;

  @ApiProperty({ description: 'Name of the character' })
  name: string;

  @ApiProperty({ description: 'Adventurer name of the character' })
  adventurerName: string;

  @ApiProperty({ enum: CharacterClass, description: 'Class of the character' })
  class: CharacterClass;

  @ApiProperty({ description: 'Level of the character' })
  level: number;

  @ApiProperty({ type: [MagicItem], description: 'List of magic items owned by the character' })
  magicItems: MagicItem[];

  @ApiProperty({ description: 'Strength of the character (max 10)' })
  strength: number;

  @ApiProperty({ description: 'Defense of the character (max 10)' })
  defense: number;

  constructor(partial: Partial<Character>) {
    Object.assign(this, partial);
  }
} 