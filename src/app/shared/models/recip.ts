export class Recip {
  public id: number;
  public name: string;
  public category_id: string;
  public user_id: string;
  public source: string;
  public temp?: number;
  public nb_eaters: number;
  public ingredient_id?: number;
  public operation: string;

  constructor(input?: Recip) {
    Object.assign(this, input);
  }
}
