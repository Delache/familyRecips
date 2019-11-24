export class User {
  public id: number;
  public firstname: string;
  public lastname: string;
  public dish_id?: Array<number>;

  constructor(input?: User) {
    Object.assign(this, input);
  }
}
