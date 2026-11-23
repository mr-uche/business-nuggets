import { Module } from "@nestjs/common";
import { TopUpsController } from "./topups.controller";
import { TopUpsService } from "./topups.service";

@Module({ controllers: [TopUpsController], providers: [TopUpsService], exports: [TopUpsService] })
export class TopUpsModule {}
