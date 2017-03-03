import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { BackandService } from '@backand/angular2-sdk';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  res: string;
  username: string;
  password: string;
  constructor(private backand: BackandService) { }
  getList(): void {
    this.res = 'fetching objects...';
    this.backand.object.getList('users').then((res: any) => {
      this.res = `${JSON.stringify(res.data)} objects fetched`;
      console.log(res);
    })
    .catch(err => console.log(err));
  }
  ngOnInit(): void {
    this.backand.init({
      appName: 'amanv',
      anonymousToken: 'abbf0a5b-3289-4987-a884-d00130f72c02'
    });
    this.getList();
 }
 signIn()
 {
   this.backand.signin(this.username, this.password)
        .then((val)=>{console.log(val)})
        .catch(err => console.log(err));
 }
}