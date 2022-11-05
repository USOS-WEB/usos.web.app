export interface MapResponse {
    path: PathPoint[];
    floors: Floor[];
}

export interface PathPoint {
    id: string;
    name: string;
    floors: string[];
    img: string;
    description: string;
    floorArea: {
        [name: string]: number[][]
    };
}

export interface Floor {
        id: string;
        name: string
        image: {
            url: string;
            width: number;
            height: number;
        }
}