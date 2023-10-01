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