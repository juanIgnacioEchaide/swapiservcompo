export enum URI {
    PEOPLE = 'https://swapi.dev/api/people',
    STARSHIP = 'https://swapi.dev/api/starships',
    PLANET = 'https://swapi.dev/api/planets',
    FILMS = 'https://swapi.dev/api/films',
    SPECIES = 'https://swapi.dev/api/species',
    VEHICLES = 'https://swapi.dev/api/vehicles',
}

export enum DETAILS_ROUTE {
    PEOPLE = 'details/people',
    STARSHIP = 'details/starships',
    PLANET = 'details/planets',
    FILMS = 'details/films',
    SPECIES = 'details/species',
    VEHICLES = 'details/vehicles',
}

export enum Title {
    PEOPLE = 'People',
    STARSHIP = 'Starships',
    PLANET = 'Planets',
    FILMS = 'Films',
    SPECIES = 'Species',
    VEHICLES = 'Vehicles',
}

export const fontFamily = "'Mona Sans', sans-serif"

export const wording = {
    title: 'Swapi Next JS Example',
    footer: 'Juan Ignacio Echaide - Swapi example - 2023'
}

export const DEFAULT_FETCH_AMOUNT = 10

export type EntityTypes = 'people' | 'planet' | 'starship' | 'vehicle' | 'film' | 'specie';

export const labelMappings: Record<EntityTypes, Record<string, string>> = {
    people: {
        name: 'Name:',
        height: 'Height:',
        mass: 'Mass:',
        hairColor: 'Hair Color:',
        skinColor: 'Skin Color:',
        eyeColor: 'Eye Color:',
        birthYear: 'Birth Year:',
        gender: 'Gender:',
        homeworld: 'Homeworld:',
        films: 'Films:',
        species: 'Species:',
        vehicles: 'Vehicles:',
        starships: 'Starships:'
    },
    planet: {
        name: 'Name:',
        rotationPeriod: 'Rotation Period:',
        orbitalPeriod: 'Orbital Period:',
        diameter: 'Diameter:',
        climate: 'Climate:',
        gravity: 'Gravity:',
        terrain: 'Terrain:',
        surfaceWater: 'Surface Water:',
        population: 'Population:',
        residents: 'Residents:',
        films: 'Films:'
    },
    starship: {
        name: 'Name:',
        model: 'Model:',
        manufacturer: 'Manufacturer:',
        costInCredits: 'Cost in Credits:',
        length: 'Length:',
        maxAtmospheringSpeed: 'Max Atmosphering Speed:',
        crew: 'Crew:',
        passengers: 'Passengers:',
        cargoCapacity: 'Cargo Capacity:',
        consumables: 'Consumables:',
        hyperdriveRating: 'Hyperdrive Rating:',
        MGLT: 'MGLT:',
        starshipClass: 'Starship Class:',
        pilots: 'Pilots:',
        films: 'Films:'
    },
    vehicle: {
        name: 'Name:',
        model: 'Model:',
        manufacturer: 'Manufacturer:',
        costInCredits: 'Cost in Credits:',
        length: 'Length:',
        maxAtmospheringSpeed: 'Max Atmosphering Speed:',
        crew: 'Crew:',
        passengers: 'Passengers:',
        cargoCapacity: 'Cargo Capacity:',
        consumables: 'Consumables:',
        vehicleClass: 'Vehicle Class:',
        pilots: 'Pilots:',
        films: 'Films:'
    },
    film: {
        title: 'Title:',
        episodeId: 'Episode ID:',
        director: 'Director:',
        producer: 'Producer:',
        releaseDate: 'Release Date:',
        openingCrawl: 'Opening Crawl:',
        characters: 'Characters:',
        planets: 'Planets:',
        starships: 'Starships:',
        vehicles: 'Vehicles:',
        species: 'Species:'
    },
    specie: {
        name: 'Name:',
        classification: 'Classification:',
        designation: 'Designation:',
        averageHeight: 'Average Height:',
        averageLifespan: 'Average Lifespan:',
        language: 'Language:',
        homeworld: 'Homeworld:',
        people: 'People:',
        films: 'Films:',
        skinColors: 'Skin Colors:',
        hairColors: 'Hair Colors:',
        eyeColors: 'Eye Colors:'
    }
};

