export class User {

  public Full_Name: string;
  public Email: string;
  public Password: string;
  public Confirm_Password: string;
  public Permission: string;

  constructor(Full_name: string, Email: string, Password: string, Confirm_Password: string, Permission: string) {
    this.Full_Name = Full_name;
    this.Email = Email;
    this.Password = Password;
    this.Confirm_Password = Confirm_Password;
    this.Permission = Permission;
  }

}
