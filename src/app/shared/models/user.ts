export class User {
  public id: number;
  public firstname: string;
  public lastname: string;
  public recip_id?: number;

  constructor(input?: User) {
    Object.assign(this, input);
  }
}
