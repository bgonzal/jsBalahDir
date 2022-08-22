/**
 * Mantener una lista de jugadores, los jugadores deben tener los datos: 
 * GT 
 * MMR 
 * MaximoNivelAlcanzado 
 * settings( optionA, optionB, optionC), 
 * name   
 * 
 * 1- El programa deberia permitirnos calcular el Nivel de cada jugador basado un MMR de maximo 1500. 
 * 2- Los niveles serían: bronce, plata, oro, diamante, onyx. 
 * 
 * Ademas se debe guardar el maximo nivel alcanzado que debe guardarse en el siguiente formato: 
 * nivel-(fecha en formato timestamp) este calculo debe pertenecer a una calculadora de niveles modularizando la funcionalidad... 
 * 
 * El programa necesita un "playerManager", este debe permitir: crear, actualizar y eliminar jugadores. 
 * La información del programa NO debe guardarse permanentemente entonces no hay que preocuparse de guardar la data. ... 
 * 
 * Extra-Rules: El manager de jugadores no deberia permitir mas de un objeto y la calculadora debe permitir hacer override del calculo con cualquier codigo...
 * Hay que simular el paso de un jugador por una partida... 
 * entonces se hace una funcionalidad donde inicie una mejenga... 
 * dure 5 seg... y que tenga random un resultado... 
 * si gana, el manager de jugador le sube el nivel... 
 * si pierde se le baja el nivel... 
 * Basicamente !!!
 * 
 * Inicio: 
 * - Traer jugadores
 * - crear Match
 * - iniciar Match
 * - finalizar Match
 * - Calcular Nuevos MMR, MaxLevelReach

 */
const originalPlayer = {
    gamertag: 'Blackops',
    mmr: '350',
    maxLvlReach: '860',
    settings: 'A: Run, RT: Shoot',
    realName: 'Bryan G-F',
}
const players = [];


const ranks = {
    mmr: {
        tiers: 6,
        levels_per_tier: 6,
        max_level: 1500,
        level_value: 41.66,
        values: {
            '250': { bronce: {} },
            '500': { plata: {} },
            '750': { gold: {} },
            '1000': { platinum: {} },
            '1250': { diamond: {} },
            '1500': { onyx: {} }
        }

    },
};

class Player {
    constructor(gamertag, mmr, maxLvlReach, settings, realName) {
        this.gamertag = gamertag;
        this.mmr = mmr;
        this.maxLvlReach = maxLvlReach;
        this.settings = settings;
        this.realName = realName;
        this.tier;
    }
}

const Manager = (() => {
    class PlayersManager {
        constructor() {
            this.id = '000';
            this.hash = '#';
            this.mmr = {
                tiers: 6,
                levels_per_tier: 6,
                max_level: 1500,
                level_value: 41.66,
                values: {
                    bronce: { bronce: true },
                    plata: { plata: true },
                    gold: { gold: true },
                    platinum: { platinum: true },
                    diamond: { diamond: true },
                    onyx: { onyx: true }
                }

            };
            this.createPlayer = (gamertag, mmr, maxLvlReach, settings, realName) => {
                return new Player(gamertag, mmr, maxLvlReach, settings, realName);
            };
            this.setTier = (player, tier) => {
                player.tier = tier;
                return player;
            }
            this.calculateMMR = (playerRef, matchResult) => {
                const currentMMR = playerRef.mmr;
                playerRef.mmr = matchResult ? currentMMR + this.level_value : currentMMR - (3 * Math.random() + 2);
                return playerRef;
            }
            this.calculateTier = (playerRef) => {
                const currentMMR = playerRef.mmr;
                if (currentMMR < 250) return this.mmr.bronce;
                if (currentMMR > 1500) return this.mmr.onyx;
                const validation = (currentMMR, min, max) => (currentMMR > min && currentMMR <= max);
                const isPlata = (validation(currentMMR, 250, 500));
                const isGold = (validation(currentMMR, 500, 750));
                const isPlatinum = (validation(currentMMR, 1000, 1250));
                const isDiamond = (validation(currentMMR, 1250, 1049));
                if (isPlata) return this.mmr.plata;
                if (isGold) return this.mmr.gold;
                if (isPlatinum) return this.mmr.platinum;
                if (isDiamond) return this.mmr.diamond;
            }
        }
    }
    return new PlayersManager();
})();


const Matcher = (() => {
    class HaloMatch {
        constructor() {
            this.createMath = (players) => {
                const Match = {
                    result: 'unfinished',
                    time: 0,
                    teamA: {
                        players: players.slice(0, 4),
                        performance: players.slice(0, 4).reduce((acummulator, player) => {
                            if (typeof acummulator === "object") {
                                return acummulator.mmr + player.mmr * Math.random() + 1;
                            } else {
                                return acummulator + player.mmr * Math.random() + 1;
                            }
                        }),
                    },
                    teamB: {
                        players: players.slice(4, 8),
                        performance: players.slice(4, 8).reduce((acummulator, player) => {
                            if (typeof acummulator === "object") {
                                return acummulator.mmr + player.mmr * Math.random() + 1;
                            } else {
                                return acummulator + player.mmr * Math.random() + 1;
                            }
                        }),
                    }

                };
                return Match;
            }
            this.startMatch = async (match) => {
                // console.log('STARTING MATCH:', match);
                let timerId = setInterval(() => {
                    match.time = match.time++;
                    console.log(match.time);
                }, 5000);

                setTimeout(() => {
                    clearInterval(timerId);
                    match.result = parseInt(match.teamA.performance,10) < parseInt(match.teamB.performance, 10) ? 'B Won' : 'A Won';
                }, 5000, [match]);
            }
        }
    }
    return new HaloMatch();
})();

const data = [
    ['Zero', 0, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Zero2', 0, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Zero3', 0, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Zero4', 0, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Yari5', 1, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Yari6', 1, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Yari7', 1, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
    ['Yari8', 1, 0, 'LT: Tbag, X: Tbag', 'Zero Troll Dude'],
];
const scope = this;

for (const player of data) {
    const playerCreated = Manager.createPlayer(...player);
    players.push(playerCreated);
}

// console.log('This is a Match:', newMatch);
const match = Matcher.createMath(players);
const matching = Matcher.startMatch(match);


setTimeout(()=>{
    console.log('WHAT', match);
},5000);






/**
 * 
 * React Components Life Cicle
 * 
 * A component life cicle have 3 main steps.
 * 
 * Initialization: Component
 *  - WillUpdate
 *  - DidUpdate
 *  - WillReceiveProps
 * Updating
 *  - ShouldUpdate
 *  - WillUpdate
 *  - DidUpdate
 * Unmounting
 *  - WillUnmount
 * 
 * 
 * 
 * 
 * React Hooks
 * 
 * useEffect
 * useState
 * 
 */


