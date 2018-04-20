import { User } from './user.interface';
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user: User = {
    name:'jeewan',
    email:'',
    post: ''  }

    constructor(private dataservice: DataService){
        
    }

    getUserData(){
      this.dataservice.getUserData().subscribe( (result) => {
         this.user.name = result.name;
         this.user.email = result.email;
         this.user.post = JSON.stringify(result.address);
        });
    }
}
