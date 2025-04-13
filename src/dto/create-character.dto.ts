import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';
import { CharacterClass } from '../enums/character-class.enum';

export class CreateCharacterDto {
  @ApiProperty({ description: 'Name of the character' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Adventurer name of the character' })
  @IsString()
  @IsNotEmpty()
  adventurerName: string;

  @ApiProperty({ enum: CharacterClass, description: 'Class of the character' })
  @IsEnum(CharacterClass)
  class: CharacterClass;

  @ApiProperty({ description: 'Level of the character' })
  @IsNumber()
  @Min(1)
  level: number;

  @ApiProperty({ description: 'Strength of the character (max 10)' })
  @IsNumber()
  @Min(0)
  @Max(10)
  strength: number;

  @ApiProperty({ description: 'Defense of the character (max 10)' })
  @IsNumber()
  @Min(0)
  @Max(10)
  defense: number;
} 