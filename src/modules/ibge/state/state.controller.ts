import { Controller, Get } from "@nestjs/common";

import { StateDTO } from "src/dtos/ibge/state.dto";
import { IbgeService } from "src/providers/ibge.service";

@Controller('states')
export class StateController {
    constructor(private readonly ibgeService: IbgeService) { }

    @Get()
    async get(): Promise<StateDTO[]> {
        return await this.ibgeService.getStates()
    }   
}