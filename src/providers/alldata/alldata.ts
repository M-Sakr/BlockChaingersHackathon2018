import { Http ,Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlldataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlldataProvider {
  
  url :string = 'https://149.210.250.124:9000/';
  verkey : string;
  did : string;
  name : string;
  dob : string;
  verFlag:string;
  constructor(public http: Http) {
    console.log('Hello AlldataProvider Provider');
  }

  createWallet(): Promise<any> {
  
    let headers = new Headers(
      {
       'Content-Type' :  'application/x-www-form-urlencoded'
      });
      let options = new RequestOptions({ headers: headers });
    

    return this.http
        .post(this.url + "create_identity",{},options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
 }
 requestSharding(): Promise<any> {
  
  let headers = new Headers(
    {
     'Content-Type' :  'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify({
      seed: "!]{4Df9j`umwg7GOcZBc4QJ[YeUMYD!I"
     });

  return this.http
      .post(this.url + "secret_sharding",data,options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
}

recoverKey(): Promise<any> {
  
  let headers = new Headers(
    {
     'Content-Type' :  'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({ headers: headers });
    let data = JSON.stringify({
      shards: ["1-ccb20402f19e2dd476ba1441c55c7f4dac43a28ed6307019a650a57b86f434c9",
      "2-99640805e32d134fe76b6eced4b55e2b78588de8b1221d27d19098b7bbc4e595"]
     });

  return this.http
      .post(this.url + "secret_recovery",data,options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
}

 test(): Promise<any> {

  return this.http
      .get('https://tsh-app.firebaseio.com/events.json')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
}
 private extractData(res: Response) {
    let events = res.json();
    return events || {};
 }
 public setvarkey(verkey:string,did:string)
 {
   this.verkey = verkey;
   this.did =did;
   console.log('set value from provider',this.verkey,this.did);
   this.verFlag = "unverfied"
 }
 public setName(name:string,dob:string)
 {
   this.name = name;
   this.dob =dob;
   console.log('set value from provider',this.verkey,this.did);
 }
 public gettvarkey():string
 {
   return (this.verkey);
 }
 public gettdidkey():string
 {
  this.verFlag="verified";
   return (this.did);
 }
 public getname():string
 {
   return (this.name);
 }
 public getVerfication():string
 {
   return (this.name);
 }
 public setVerFlag()
 {
  return (this.verFlag);
 }
 
 public getdob():string
 {
   return (this.dob);
 }
 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

}
