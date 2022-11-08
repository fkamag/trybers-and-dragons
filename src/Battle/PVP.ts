import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(protected _player1: Fighter, protected _player2: Fighter) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    const result = super.fight();
    if (result === 1) {
      console.log('O primeiro player venceu a batalha');
    } else {
      console.log('O segundo player venceu a batalha');
    }
    return result;
  }
}

export default PVP;