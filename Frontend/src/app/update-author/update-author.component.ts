import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {
  authorItem= {
    authorname:'',
    description:'',
    imageUrl:''}
 
  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}

