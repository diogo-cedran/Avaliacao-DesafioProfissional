import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../entities/character.entity';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { StorageService } from './storage.service';
import { ItemType } from '../enums/item-type.enum';

@Injectable()
export class CharacterService {
  constructor(private readonly storageService: StorageService) {}

  createCharacter(dto: CreateCharacterDto): Character {
    if (dto.strength + dto.defense > 10) {
      throw new BadRequestException('Total of strength and defense cannot exceed 10');
    }

    const character: Character = {
      id: uuidv4(),
      name: dto.name,
      adventurerName: dto.adventurerName,
      class: dto.class,
      level: dto.level,
      strength: dto.strength,
      defense: dto.defense,
      magicItems: [],
    };

    return this.storageService.createCharacter(character);
  }

  getCharacter(id: string): Character {
    const character = this.storageService.getCharacter(id);
    if (!character) {
      throw new NotFoundException(`Character with ID ${id} not found`);
    }
    return character;
  }

  getAllCharacters(): Character[] {
    return this.storageService.getAllCharacters();
  }

  updateAdventurerName(id: string, newName: string): Character {
    const character = this.getCharacter(id);
    character.adventurerName = newName;
    return this.storageService.updateCharacter(id, character);
  }

  deleteCharacter(id: string): void {
    const character = this.getCharacter(id);
    const items = this.storageService.getMagicItemsByCharacter(id);
    items.forEach(item => this.storageService.deleteMagicItem(item.id));
    this.storageService.deleteCharacter(id);
  }

  addMagicItem(characterId: string, itemId: string): Character {
    const character = this.getCharacter(characterId);
    const item = this.storageService.getMagicItem(itemId);
    
    if (!item) {
      throw new NotFoundException(`Magic item with ID ${itemId} not found`);
    }

    if (item.type === ItemType.AMULETO) {
      const hasAmulet = character.magicItems.some(i => i.type === ItemType.AMULETO);
      if (hasAmulet) {
        throw new BadRequestException('Character already has an amulet');
      }
    }

    item.characterId = characterId;
    character.magicItems.push(item);
    return this.storageService.updateCharacter(characterId, character);
  }

  removeMagicItem(characterId: string, itemId: string): Character {
    const character = this.getCharacter(characterId);
    const itemIndex = character.magicItems.findIndex(item => item.id === itemId);
    
    if (itemIndex === -1) {
      throw new NotFoundException(`Magic item with ID ${itemId} not found on character`);
    }

    character.magicItems.splice(itemIndex, 1);
    return this.storageService.updateCharacter(characterId, character);
  }

  getCharacterAmulet(characterId: string) {
    const character = this.getCharacter(characterId);
    return character.magicItems.find(item => item.type === ItemType.AMULETO);
  }
} 