import { Module } from "@nestjs/common";

import { IbgeService } from "src/providers/ibge.service";
import { CityController } from "./city.controller";

@Module({
    imports: [],
    controllers: [CityController],
    providers: [IbgeService]
})
export class CityModule {}