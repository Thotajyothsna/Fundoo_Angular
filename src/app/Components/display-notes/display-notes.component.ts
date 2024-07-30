import { Component,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent {
@Input() notesList:any;
constructor(private dialog:MatDialog){}

editNoteDialogBox(notes:any){
  const dialogbox=this.dialog.open( UpdateNotesComponent,{
    width:'40%',
    height:'auto',
    data:notes
  })
  dialogbox.afterClosed().subscribe(result=>{
    console.log(result);
  })
}
}
