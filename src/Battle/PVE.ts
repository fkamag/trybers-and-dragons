import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    protected _player1: Fighter,
    protected _monster: SimpleFighter[],
  ) {
    super(_player1);
  }

  fight(): number {
    this._monster.forEach((enemy) => {
      while (this._player1.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player1.attack(enemy);
        enemy.attack(this._player1);
      }
    });
    const result = super.fight();
    if (result === -1) {
      console.log('Player1 perdeu a batalha');
    } else {
      console.log('Player1 venceu a batalha');
    }
    return result;
  }
}

export default PVE;