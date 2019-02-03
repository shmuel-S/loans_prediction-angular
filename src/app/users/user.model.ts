export class User {

  public Full_Name: string;
  public Email: string;
  public Password: string;
  public Permission: string;

  constructor(Full_Name: string, Email: string, Password: string, Permission: string) {
    this.Full_Name = Full_Name;
    this.Email = Email;
    this.Password = Password;
    this.Permission = Permission;
  }

}
