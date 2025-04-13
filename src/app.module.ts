import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { MagicItemController } from './controllers/magic-item.controller';
import { CharacterService } from './services/character.service';
import { MagicItemService } from './services/magic-item.service';
import { StorageService } from './services/storage.service';

@Module({
  imports: [],
  controllers: [CharacterController, MagicItemController],
  providers: [
    CharacterService,
    MagicItemService,
    StorageService,
  ],
})
export class AppModule {} 