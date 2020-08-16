import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ]
})
export class HomepageComponent implements OnInit {
  emailId:any;
  password:any;
  user:any;
  pw:any;

  constructor(private router: Router,private service: UserService) {
    this.user = { userName:'',userEmail:'', userPassword:'', userPhone:'' }
   }

  ngOnInit(): void {
  }
  
  loginUser():any{
  }

  validateUser(form:any){
    
    this.service.getUserById(form.loginId).subscribe((res:any)=>{
      if(res != null){
        this.service.setUserLoggedIn();  
        this.router.navigate(['app-company'])  ;
      }
      else{
        alert("Wrong credentials entered!");
      }
    });
    }

    signup():any{
      console.log(this.user, this.pw);
      if(this.pw === this.user.userPassword){
        this.service.setUserLoggedIn();  
        this.service.registerUser(this.user).subscribe((res:any)=>{
          if(res === 0){
            alert("Registration failed!")
          }
          else{
            this.router.navigate(['app-company']);
          }
        })
      }
      else{
        alert("Password did not match!")
      }
    }

}
