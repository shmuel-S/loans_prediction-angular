import {Injectable} from '@angular/core';


@Injectable()
export class MsgService {

  private isError;
  private contentMsg;

  public setIsError(type) {
    this.isError = type;
  }

  public getTypeMsg() {
    return this.isError;
  }

  public setMsg(content) {
    this.contentMsg = content;
  }

  public getMsg() {
    return this.contentMsg;
  }



}
