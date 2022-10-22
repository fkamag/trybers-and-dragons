import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVP, PVE } from './Battle';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');
console.log(player1, player2, player3);

for (let i = 0; i < 5; i += 1) {
  player1.levelUp();
  console.log(player1);
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.map((battle) => battle.fight());
};

export {
  player1, player2, player3, monster1, monster2, pvp, pve, runBattles,
};