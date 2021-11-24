import Game from '../src/interfaces/game.interface';
import Games from '../src/interfaces/games.interface';
import getHighestGamesBy from '../src/utils/getHighestGamesBy';
const normalInput = [
    {
        "userId": 8,
        "game": "League of legends",
        "playTime": 500,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "World of warcraft",
        "playTime": 1500,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 88,
        "game": "Dark Souls",
        "playTime": 109,
        "genre": "Action RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 88,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 9,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 1,
        "game": "The last of us 2",
        "playTime": 100,
        "genre": "FPS",
        "platforms": ["PS4", "PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 60,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    },
    {
        "userId": 99,
        "game": "Minecraft",
        "playTime": 1002,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hearthstone",
        "playTime": 1000,
        "genre": "Card Game",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "FIFA",
        "playTime": 2000,
        "genre": "Sport",
        "platforms": ["PC", "PS4", "Xbox One"]
    },
    {
        "userId": 2,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 78,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 47,
        "game": "League of legends",
        "playTime": 850,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 2,
        "game": "Among Us",
        "playTime": 5000,
        "genre": "Multiplayer",
        "platforms": ["PC", "Android"]
    },
    {
        "userId": 2,
        "game": "Valorant",
        "playTime": 2000,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "Valorant",
        "playTime": 80,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "Dark Souls",
        "playTime": 109,
        "genre": "RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 9,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 900,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 24,
        "game": "League of legends",
        "playTime": 300,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 24,
        "game": "World of warcraft",
        "playTime": 800,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 54,
        "game": "Minecraft",
        "playTime": 231,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Minecraft",
        "playTime": 777,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 90,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    }
];

const complexInput = [
    {
        "userId": 8,
        "game": "League of legends",
        "playTime": 500,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 4124,
        "game": "League of legends",
        "playTime": 2500,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 4124,
        "game": "League of legends",
        "playTime": 2999,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "World of warcraft",
        "playTime": 1500,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 88,
        "game": "Dark Souls",
        "playTime": 109,
        "genre": "Action RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 88,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 9,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 1,
        "game": "The last of us 2",
        "playTime": 100,
        "genre": "FPS",
        "platforms": ["PS4", "PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 60,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    },
    {
        "userId": 99,
        "game": "Minecraft",
        "playTime": 1002,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hearthstone",
        "playTime": 1000,
        "genre": "Card Game",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "FIFA",
        "playTime": 2000,
        "genre": "Sport",
        "platforms": ["PC", "PS4", "Xbox One"]
    },
    {
        "userId": 2,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 78,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 47,
        "game": "League of legends",
        "playTime": 850,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 2,
        "game": "Among Us",
        "playTime": 5000,
        "genre": "Multiplayer",
        "platforms": ["PC", "Android"]
    },
    {
        "userId": 2,
        "game": "Valorant",
        "playTime": 2000,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "Valorant",
        "playTime": 80,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "Dark Souls",
        "playTime": 109,
        "genre": "RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 9,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 900,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 24,
        "game": "League of legends",
        "playTime": 300,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 24,
        "game": "World of warcraft",
        "playTime": 800,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 54,
        "game": "Minecraft",
        "playTime": 231,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Minecraft",
        "playTime": 777,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 90,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    },
    {
        "userId": 1000,
        "game": "Minecraft",
        "playTime": 2,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 1001,
        "game": "Minecraft",
        "playTime": 2,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 1002,
        "game": "Minecraft",
        "playTime": 45,
        "genre": "Sandbox",
        "platforms": ["PC"]
    }
];

const complexInputWithMultipleHighestPlaytimeGames = [
    {
        "userId": 8,
        "game": "League of legends",
        "playTime": 500,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 4124,
        "game": "League of legends",
        "playTime": 2500,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 4124,
        "game": "League of legends",
        "playTime": 3000,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "World of warcraft",
        "playTime": 1000,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 88,
        "game": "World of warcraft",
        "playTime": 6150,
        "genre": "MMORPG",
        "platforms": ["PC"]
    },
    {
        "userId": 88,
        "game": "Dark Souls",
        "playTime": 109,
        "genre": "Action RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 90,
        "game": "Dark Souls",
        "playTime": 7041,
        "genre": "Action RPG",
        "platforms": [
            "PS3",
            "Xbox 360",
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ]
    },
    {
        "userId": 88,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 9,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 1,
        "game": "The last of us 2",
        "playTime": 100,
        "genre": "FPS",
        "platforms": ["PS4", "PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 60,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    },
    {
        "userId": 99,
        "game": "Minecraft",
        "playTime": 1002,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hearthstone",
        "playTime": 1000,
        "genre": "Card Game",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "FIFA",
        "playTime": 2000,
        "genre": "Sport",
        "platforms": ["PC", "PS4", "Xbox One"]
    },
    {
        "userId": 2,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 78,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 47,
        "game": "League of legends",
        "playTime": 850,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 2,
        "game": "Among Us",
        "playTime": 5000,
        "genre": "Multiplayer",
        "platforms": ["PC", "Android"]
    },
    {
        "userId": 2,
        "game": "Valorant",
        "playTime": 2000,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "Valorant",
        "playTime": 80,
        "genre": "FPS",
        "platforms": ["PC"]
    },
    {
        "userId": 9,
        "game": "The Witcher 3: Wild Hunt",
        "playTime": 900,
        "genre": "RPG",
        "platforms": ["PC", "PS4", "Xbox One", "Nintendo Switch"]
    },
    {
        "userId": 24,
        "game": "League of legends",
        "playTime": 300,
        "genre": "MOBA",
        "platforms": ["PC"]
    },
    {
        "userId": 54,
        "game": "Minecraft",
        "playTime": 231,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Minecraft",
        "playTime": 777,
        "genre": "Sandbox",
        "platforms": ["PC"]
    },
    {
        "userId": 7,
        "game": "Hitman 3",
        "playTime": 90,
        "genre": "Stealth",
        "platforms": ["PS4", "PS5", "Xbox One", "Nintendo Switch", "PC"]
    }
];

describe('getHighestGamesBy', () => {
    it('should exist', () => {
        expect(getHighestGamesBy).toBeDefined();
    });

    // highest Playtime
    it('should return currect result for provided JSON (totalPlayTime)', () => {
        const expected = [{ "id": undefined, "game": "Among Us", "genre": "Multiplayer", "platforms": ["PC", "Android"], "totalPlayTime": 5000, "totalPlayers": 1 }];
        const actual = getHighestGamesBy('totalPlayTime', normalInput);
        expect(expected).toStrictEqual(actual);
    });

    it('should return empty array for empty input (totalPlayTime)', () => {
        const expected: Games[] = [];
        const actual = getHighestGamesBy('totalPlayTime', []);
        expect(expected).toStrictEqual(actual);
    });

    it('should work for arrays with single element (totalPlayTime)', () => {
        const input: Game[] = [{
            "userId": 8,
            "game": "League of legends",
            "playTime": 500,
            "genre": "MOBA",
            "platforms": ["PC"]
        }];
        const expected: Games[] = [{ "id": undefined, "game": "League of legends", "genre": "MOBA", "platforms": ["PC"], "totalPlayTime": 500, "totalPlayers": 1 }];
        const actual = getHighestGamesBy('totalPlayTime', input);
        expect(expected).toStrictEqual(actual);
    });

    it('should work for complex input (totalPlayTime)', () => {
        const expected: Games[] = [{ "id": undefined, "game": "League of legends", "genre": "MOBA", "platforms": ["PC"], "totalPlayTime": 7149, "totalPlayers": 5 }];
        const actual = getHighestGamesBy('totalPlayTime', complexInput);
        expect(expected).toStrictEqual(actual);
    });

    it('should work for complex input (mutiple games have highest playtime) (totalPlayTime)', () => {
        const expected: Games[] = [
            { "id": undefined, "game": "League of legends", "genre": "MOBA", "platforms": ["PC"], "totalPlayTime": 7150, "totalPlayers": 5},
            { "id": undefined, "game": "World of warcraft", "genre": "MMORPG", "platforms": ["PC"], "totalPlayTime": 7150, "totalPlayers": 2},
            { "id": undefined, "game": "Dark Souls", "genre": "Action RPG", "platforms": ["PS3","Xbox 360","PC","PS4","Xbox One","Nintendo Switch"], "totalPlayTime": 7150, "totalPlayers": 2}
        ];
        const actual = getHighestGamesBy('totalPlayTime', complexInputWithMultipleHighestPlaytimeGames);
        expect(expected).toStrictEqual(actual);
    });


    // highest Players
    it('should return currect result for provided JSON (totalPlayers)', () => {
        const expected = [ 
            {"id":undefined, "game":"League of legends","genre":"MOBA","platforms":["PC"],"totalPlayTime":1650,"totalPlayers":3},
            {"id":undefined, "game":"The Witcher 3: Wild Hunt","genre":"RPG","platforms":["PC","PS4","Xbox One","Nintendo Switch"],"totalPlayTime":987,"totalPlayers":3},
            {"id":undefined, "game":"Minecraft","genre":"Sandbox","platforms":["PC"],"totalPlayTime":2010,"totalPlayers":3}
        ];
        const actual = getHighestGamesBy('totalPlayers', normalInput);
        expect(expected).toStrictEqual(actual);
    });

    it('should return empty array for empty input (totalPlayers)', () => {
        const expected: Games[] = [];
        const actual = getHighestGamesBy('totalPlayers', []);
        expect(expected).toStrictEqual(actual);
    });

    it('should work for arrays with single element (totalPlayers)', () => {
        const input: Game[] = [{
            "userId": 8,
            "game": "League of legends",
            "playTime": 500,
            "genre": "MOBA",
            "platforms": ["PC"]
        }];
        const expected: Games[] = [{ "id": undefined, "game": "League of legends", "genre": "MOBA", "platforms": ["PC"], "totalPlayTime": 500, "totalPlayers": 1 }];
        const actual = getHighestGamesBy('totalPlayers', input);
        expect(expected).toStrictEqual(actual);
    });

    it('should work for complex input (totalPlayers)', () => {
        const expected: Games[] = [{ "id": undefined, "game": "Minecraft", "genre": "Sandbox", "platforms": ["PC"], "totalPlayTime": 7149, "totalPlayers": 6 }];
        const actual = getHighestGamesBy('totalPlayers', complexInput);
        expect(expected[0].totalPlayers).toBe(actual[0].totalPlayers);
    });

    it('exprected to filter results by genre', () => {
        const expected = [ 
            {"id":undefined, "game":"The Witcher 3: Wild Hunt","genre":"RPG","platforms":["PC","PS4","Xbox One","Nintendo Switch"],"totalPlayTime":987,"totalPlayers":3},
        ];
        const actual = getHighestGamesBy('totalPlayers', normalInput, {genre: "RPG", platform:""});
        expect(expected).toStrictEqual(actual);
    });

    it('exprected to filter results by platform', () => {
        const expected = [ 
            {"id":undefined, "game":"The Witcher 3: Wild Hunt","genre":"RPG","platforms":["PC","PS4","Xbox One","Nintendo Switch"],"totalPlayTime":987,"totalPlayers":3},
        ];
        const actual = getHighestGamesBy('totalPlayers', normalInput, {genre: "", platform:"Nintendo Switch"});
        expect(expected).toStrictEqual(actual);
    });

    it('exprected to filter results by both', () => {
        const expected = [ 
            {"id":undefined, "game":"Minecraft","genre":"Sandbox","platforms":["PC"],"totalPlayTime":2010,"totalPlayers":3}
        ];
        const actual = getHighestGamesBy('totalPlayers', normalInput, {genre: "Sandbox", platform:"PC"});
        expect(expected).toStrictEqual(actual);
    });

    it('expected to return an empty array when nothing matches', () => {
        const expected: Games[] = []
        const actual = getHighestGamesBy('totalPlayers', normalInput, {genre: "Sandbox", platform:"Anroid"});
        expect(expected).toStrictEqual(actual);
    });
});

// const expected = [ 
//     {"id":undefined, "game":"League of legends","genre":"MOBA","platforms":["PC"],"totalPlayTime":1650,"totalPlayers":3},
//     {"id":undefined, "game":"The Witcher 3: Wild Hunt","genre":"RPG","platforms":["PC","PS4","Xbox One","Nintendo Switch"],"totalPlayTime":987,"totalPlayers":3},
//     {"id":undefined, "game":"Minecraft","genre":"Sandbox","platforms":["PC"],"totalPlayTime":2010,"totalPlayers":3}
// ];
// const actual = getHighestGamesBy('totalPlayers', normalInput);
// expect(expected).toStrictEqual(actual);