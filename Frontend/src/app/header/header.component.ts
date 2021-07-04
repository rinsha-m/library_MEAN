import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Library';
  constructor(public _auth:AuthService,
    private _router:Router){

}
ngOnInit(): void{}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/'])
}
AddBook()
{
  this._router.navigate(['/add'])
}
AddAuthor()
{
  this._router.navigate(['/addauthor'])
}
Authors()
{
  this._router.navigate(['/authors'])
}
Books()
{
  this._router.navigate(['/products'])
}
}


