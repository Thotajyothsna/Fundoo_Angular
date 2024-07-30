import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { response } from 'express';
import { NotesService } from '../../Services/notes/notes.service';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrl: './create-notes.component.scss'
})
export class CreateNotesComponent implements OnInit {
  display:boolean=true;
  notesForm!:FormGroup
  constructor(private formbulider:FormBuilder,private notes:NotesService){}

  ngOnInit(): void {
    this.notesForm = this.formbulider.group({
      title:[''],
      description:['']
    })
  }

  onSubmit(){
    let reqData={
      title: this.notesForm.value.title,
      description: this.notesForm.value.description
    }
    console.log(reqData);
    this.notes.addNotes(reqData).subscribe((response:any)=>{
      console.log(response);
    });
    this.display=true;
  }
}

