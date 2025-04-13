import { Injectable } from '@nestjs/common';
import { Character } from '../entities/character.entity';
import { MagicItem } from '../entities/magic-item.entity';

@Injectable()
export class StorageService {
  private characters: Map<string, Character> = new Map();
  private magicItems: Map<string, MagicItem> = new Map();

  // Character methods
  createCharacter(character: Character): Character {
    this.characters.set(character.id, character);
    return character;
  }

  getCharacter(id: string): Character | undefined {
    return this.characters.get(id);
  }

  getAllCharacters(): Character[] {
    return Array.from(this.characters.values());
  }

  updateCharacter(id: string, character: Character): Character | undefined {
    if (this.characters.has(id)) {
      this.characters.set(id, character);
      return character;
    }
    return undefined;
  }

  deleteCharacter(id: string): boolean {
    return this.characters.delete(id);
  }

  // Magic Item methods
  createMagicItem(item: MagicItem): MagicItem {
    this.magicItems.set(item.id, item);
    return item;
  }

  getMagicItem(id: string): MagicItem | undefined {
    return this.magicItems.get(id);
  }

  getAllMagicItems(): MagicItem[] {
    return Array.from(this.magicItems.values());
  }

  getMagicItemsByCharacter(characterId: string): MagicItem[] {
    return Array.from(this.magicItems.values()).filter(
      item => item.characterId === characterId
    );
  }

  deleteMagicItem(id: string): boolean {
    return this.magicItems.delete(id);
  }
} 