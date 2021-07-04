import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  pageTitle: string = 'Author List';
  imageWidth: number = 100;
  imageHeight:number=100;
  imageMargin: number = 2;
  showImage: boolean = false;

  authors=[{
    authorname:'',
    description:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private authorService: AuthorService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
  })
  }
 
  editAuthor(authors:any)
  {
    localStorage.setItem("editAuthorId", authors._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteAuthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
      })
  

  }
}
