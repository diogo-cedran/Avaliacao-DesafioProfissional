import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CharacterService } from '../services/character.service';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { Character } from '../entities/character.entity';

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new character' })
  @ApiResponse({ status: 201, description: 'Character created successfully', type: Character })
  createCharacter(@Body() createCharacterDto: CreateCharacterDto): Character {
    return this.characterService.createCharacter(createCharacterDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all characters' })
  @ApiResponse({ status: 200, description: 'Return all characters', type: [Character] })
  getAllCharacters(): Character[] {
    return this.characterService.getAllCharacters();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a character by ID' })
  @ApiResponse({ status: 200, description: 'Return the character', type: Character })
  getCharacter(@Param('id') id: string): Character {
    return this.characterService.getCharacter(id);
  }

  @Put(':id/adventurer-name')
  @ApiOperation({ summary: 'Update character adventurer name' })
  @ApiResponse({ status: 200, description: 'Character updated successfully', type: Character })
  updateAdventurerName(
    @Param('id') id: string,
    @Body('adventurerName') newName: string,
  ): Character {
    return this.characterService.updateAdventurerName(id, newName);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a character' })
  @ApiResponse({ status: 204, description: 'Character deleted successfully' })
  deleteCharacter(@Param('id') id: string): void {
    this.characterService.deleteCharacter(id);
  }

  @Post(':characterId/items/:itemId')
  @ApiOperation({ summary: 'Add a magic item to a character' })
  @ApiResponse({ status: 200, description: 'Item added to character successfully', type: Character })
  addMagicItem(
    @Param('characterId') characterId: string,
    @Param('itemId') itemId: string,
  ): Character {
    return this.characterService.addMagicItem(characterId, itemId);
  }

  @Delete(':characterId/items/:itemId')
  @ApiOperation({ summary: 'Remove a magic item from a character' })
  @ApiResponse({ status: 200, description: 'Item removed from character successfully', type: Character })
  removeMagicItem(
    @Param('characterId') characterId: string,
    @Param('itemId') itemId: string,
  ): Character {
    return this.characterService.removeMagicItem(characterId, itemId);
  }

  @Get(':id/amulet')
  @ApiOperation({ summary: 'Get character amulet' })
  @ApiResponse({ status: 200, description: 'Return the character amulet' })
  getCharacterAmulet(@Param('id') id: string) {
    return this.characterService.getCharacterAmulet(id);
  }
} 