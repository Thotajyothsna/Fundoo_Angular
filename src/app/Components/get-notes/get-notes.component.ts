import { Component ,OnInit} from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrl: './get-notes.component.scss'
})
export class GetNotesComponent implements OnInit{
  notesArray:any;
  constructor(private notes:NotesService){}
  ngOnInit():void{
    this.onSubmit()
  }

  onSubmit(){
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("Stored To Array Variable");
      console.log(this.notesArray);
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.trash==false;
      })
      this.notesArray=this.notesArray.filter((object:any)=>{
        return object.archive==false;
      })
    })
    //this.notesArray.reverse();
  }

}
