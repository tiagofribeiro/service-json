import { join } from "path";
import { promises } from "fs";
import { Injectable } from "@nestjs/common";

import { StateDTO } from "src/dtos/ibge/state.dto";
import { CityDTO } from "src/dtos/ibge/city.dto";

@Injectable()
export class IbgeService {
    private readonly statesPath = join(__dirname, "../../data/ibge/states.json");
    private readonly citiesPath = join(__dirname, "../../data/ibge/cities.json");

    public async getStates(): Promise<StateDTO[]> {
        const response = await promises.readFile(this.statesPath, "utf8");
        const states = JSON.parse(response) as StateDTO[]

        const alphabeticalStates = states.sort((a, b) => {
            if (a.acronym < b.acronym) {
                return -1;
            }
            if (a.acronym >  b.acronym) {
                return 1;
            }

            return 0;
        })

        return alphabeticalStates
    }

    public async getCities(stateId: number): Promise<CityDTO[]> {
        const response = await promises.readFile(this.citiesPath, "utf8");
        const allCities = JSON.parse(response) as CityDTO[]

        const cities = allCities.filter((city) => city.stateId == stateId)

        return cities
    }
}