export class ExceptionModel {
  ErrorCode: number;
  ErrorMng: string;
  TransactionData: any;

  constructor(private errorCode: number, private errorMsg: string, private transData: any){
    this.ErrorCode = errorCode;
    this.ErrorMng = errorMsg;
    this.TransactionData = transData;
  }
}
