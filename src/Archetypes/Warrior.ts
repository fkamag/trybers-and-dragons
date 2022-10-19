import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _counterInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._counterInstance += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Warrior._counterInstance;
  }
}

export default Warrior;