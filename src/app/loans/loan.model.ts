export class Loan {

  public Id: string;
  public Full_Name: string;
  public Approved: boolean;
  public Loan_Status: string;
  public Current_Loan_Amount: number;
  public Term: string;
  public Credit_Score: number;
  public Years_in_current_job: string;
  public Annual_Income: number;
  public Home_Ownership: string;
  public Monthly_Debt: number;
  public Purpose: string;
  public Years_of_Credit_History: number;
  public Months_since_last_delinquent: number;
  public Current_Credit_Balance: number;
  public Number_of_Open_Accounts: number;
  public Maximum_Open_Credit: number;
  public Number_of_Credit_Problems: number;
  public Bankruptcies: number;

  constructor(Full_Name: string, Approved: boolean, Loan_Status: string, Current_Loan_Amount: number, Term: string, Credit_Score: number,
              Years_in_current_job: string, Annual_Income: number, Home_Ownership: string, Monthly_Debt: number,
              Purpose: string, Years_of_Credit_History: number, Months_since_last_delinquent: number,
              Current_Credit_Balance: number, Number_of_Open_Accounts: number, Maximum_Open_Credit: number,
              Number_of_Credit_Problems: number, Bankruptcies: number) {

    this.Full_Name = Full_Name;
    this.Approved = Approved;
    this.Loan_Status = Loan_Status;
    this.Current_Loan_Amount = Current_Loan_Amount;
    this.Term = Term;
    this.Credit_Score = Credit_Score;
    this.Years_in_current_job = Years_in_current_job;
    this.Annual_Income = Annual_Income;
    this.Home_Ownership = Home_Ownership;
    this.Monthly_Debt = Monthly_Debt;
    this.Purpose = Purpose;
    this.Years_of_Credit_History = Years_of_Credit_History;
    this.Months_since_last_delinquent = Months_since_last_delinquent;
    this.Current_Credit_Balance = Current_Credit_Balance;
    this.Number_of_Open_Accounts = Number_of_Open_Accounts;
    this.Maximum_Open_Credit = Maximum_Open_Credit;
    this.Number_of_Credit_Problems = Number_of_Credit_Problems;
    this.Bankruptcies = Bankruptcies;

  }
}
