import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MagicItem } from '../entities/magic-item.entity';
import { CreateMagicItemDto } from '../dto/create-magic-item.dto';
import { StorageService } from './storage.service';
import { ItemType } from '../enums/item-type.enum';

@Injectable()
export class MagicItemService {
  constructor(private readonly storageService: StorageService) {}

  createMagicItem(dto: CreateMagicItemDto): MagicItem {
    if (dto.type === ItemType.ARMA && dto.defense !== 0) {
      throw new BadRequestException('Weapons must have 0 defense');
    }

    if (dto.type === ItemType.ARMADURA && dto.strength !== 0) {
      throw new BadRequestException('Armor must have 0 strength');
    }

    if (dto.strength === 0 && dto.defense === 0) {
      throw new BadRequestException('Item must have either strength or defense greater than 0');
    }

    const item: MagicItem = {
      id: uuidv4(),
      name: dto.name,
      type: dto.type,
      strength: dto.strength,
      defense: dto.defense,
      characterId: null,
    };

    return this.storageService.createMagicItem(item);
  }

  getMagicItem(id: string): MagicItem {
    const item = this.storageService.getMagicItem(id);
    if (!item) {
      throw new NotFoundException(`Magic item with ID ${id} not found`);
    }
    return item;
  }

  getAllMagicItems(): MagicItem[] {
    return this.storageService.getAllMagicItems();
  }

  getMagicItemsByCharacter(characterId: string): MagicItem[] {
    return this.storageService.getMagicItemsByCharacter(characterId);
  }

  deleteMagicItem(id: string): void {
    const item = this.getMagicItem(id);
    this.storageService.deleteMagicItem(id);
  }
} 