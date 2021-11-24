interface Game {
    _id?:string;
    userId: number;
    game: string;
    playTime: number;
    genre: string;
    platforms: string[];
};

export default Game;