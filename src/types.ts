export interface MapResponse {
    path: PathPoint[]
}

export interface PathPoint {
    order: string;
    id: number;
    name: string;
    floors: string[];
    img: string;
    description: string;
    mapCoordinates: number[][];
}