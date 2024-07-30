import { Component,Input,OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent implements OnInit {
@Input() notesObject:any;
constructor(private notesService:NotesService){}
ngOnInit(): void {
  
}

onDelete(){
  let reqData={
    notesId:this.notesObject.notesId,
}
console.log(reqData)
this.notesService.trashNotes(reqData).subscribe((response:any)=>{
  console.log("Note Trashed Successfully",response);
})
}

onArchive(){
  let reqData={
    notesId:this.notesObject.notesId
  }
  console.log(reqData)
  this.notesService.archiveNotes(reqData).subscribe((response:any)=>{
    console.log(response)
  })
}

colorArray:Array<any>=[
  {code:'#ffffff',name:'white'},
  {code:'#FF6347',name:'Tomato'},
  {code:'#FF4500',name:'OrangeRed'},
  {code:'#FFFF00',name:'yellow'},
  {code:'#ADFF2F',name:'GreenYellow'},
  {code:'#B0C4DE',name:'LightSteelBlue'},
  {code:'#EEE8AA',name:'PaleGoldenRod'},
  {code:'#7FFFDA',name:'Aquamarine'},
  {code:'#FFE4C4',name:'Bisque'},
  {code:'#C0C0C0',name:'Silver'},
  {code:'#BC8F8F',name:'RosyBrown'},
  {code:'#D3D3D3',name:'Grey'}
];
 
selectColor(colors:any){
  let reqData={
    color:colors.name,
    notesId:this.notesObject.notesId
  }
  this.notesObject.notesColor(reqData).subscribe((response:any)=>{
    console.log(response)
  })
}
}
