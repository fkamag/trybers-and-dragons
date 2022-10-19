import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _counterInstance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._counterInstance += 1;
  }

  get energyType(): EnergyType { return this._energyType; }

  static createdArchetypeInstances(): number {
    return Mage._counterInstance;
  }
}

export default Mage;