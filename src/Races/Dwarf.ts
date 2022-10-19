import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static counterInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.counterInstance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.counterInstance;
  }
}

export default Dwarf;