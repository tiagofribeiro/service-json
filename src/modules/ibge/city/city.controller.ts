import { Controller, Get, Query } from "@nestjs/common";
import { CityDTO } from "src/dtos/ibge/city.dto";

import { IbgeService } from "src/providers/ibge.service";

@Controller('cities')
export class CityController {
    constructor(private readonly ibgeService: IbgeService) {}

    @Get()
    async get(@Query('stateId') stateId: number): Promise<CityDTO[]>{
        return await this.ibgeService.getCities(stateId)
    }
}