import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  constructor(private authorService: AuthorService,private router: Router){  } 
  authorItem = {
    authorname:'',
    description:'',
    imageUrl:''}
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.authorService.newAuthor(this.authorItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
