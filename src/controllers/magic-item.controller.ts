import { Controller, Get, Post, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MagicItemService } from '../services/magic-item.service';
import { CreateMagicItemDto } from '../dto/create-magic-item.dto';
import { MagicItem } from '../entities/magic-item.entity';

@ApiTags('magic-items')
@Controller('magic-items')
export class MagicItemController {
  constructor(private readonly magicItemService: MagicItemService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new magic item' })
  @ApiResponse({ status: 201, description: 'Magic item created successfully', type: MagicItem })
  createMagicItem(@Body() createMagicItemDto: CreateMagicItemDto): MagicItem {
    return this.magicItemService.createMagicItem(createMagicItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all magic items' })
  @ApiResponse({ status: 200, description: 'Return all magic items', type: [MagicItem] })
  getAllMagicItems(): MagicItem[] {
    return this.magicItemService.getAllMagicItems();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a magic item by ID' })
  @ApiResponse({ status: 200, description: 'Return the magic item', type: MagicItem })
  getMagicItem(@Param('id') id: string): MagicItem {
    return this.magicItemService.getMagicItem(id);
  }

  @Get('character/:characterId')
  @ApiOperation({ summary: 'Get all magic items for a character' })
  @ApiResponse({ status: 200, description: 'Return all magic items for the character', type: [MagicItem] })
  getMagicItemsByCharacter(@Param('characterId') characterId: string): MagicItem[] {
    return this.magicItemService.getMagicItemsByCharacter(characterId);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a magic item' })
  @ApiResponse({ status: 204, description: 'Magic item deleted successfully' })
  deleteMagicItem(@Param('id') id: string): void {
    this.magicItemService.deleteMagicItem(id);
  }
} 