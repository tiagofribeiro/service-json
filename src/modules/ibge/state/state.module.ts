import { Module } from "@nestjs/common";

import { IbgeService } from "src/providers/ibge.service";
import { StateController } from "./state.controller";

@Module({
    imports: [],
    controllers: [StateController],
    providers: [IbgeService]
})
export class StateModule {}