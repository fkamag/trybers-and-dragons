import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(protected _player1: Fighter, protected _player2: Fighter) {
    super(_player1);
  }

  fight(): number {
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }
    return super.fight();
  }
}

export default PVP;