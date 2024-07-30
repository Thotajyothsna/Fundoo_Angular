import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }

// addNotes(reqData:any){
//   let header={
//     Headers:new HttpHeaders({
//       'Content-type':'application/json',
//       'Authorization':'Bearer '+this.token
//     })
//   }
//   return this.httpService.postServiceReset('https://localhost:44348/api/Notes/CreateNotes',reqData,true,header)
// }
addNotes(reqData:any){
  let header = {
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.postServiceReset('https://localhost:44348/api/Notes/CreateNotes',reqData, true, header);
}

getNotes(){
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.getService('https://localhost:44348/api/Notes/GetAllNotesOfUser',true,header);
}

trashNotes(reqData:any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.deleteService('https://localhost:44348/api/Notes/DeleteNoteOfUser?NotesId='+reqData.notesId,true,header);
}

archiveNotes(reqData:any){
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService('https://localhost:44348/api/Notes/ArchiveNotes_Or_UnArchiveNotes?NotesId='+reqData.notesId,{},true,header);
}

updateNotes(reqData:any,notesId:any){
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService('https://localhost:44348/api/Notes/Update Notes Of User?NotesId='+notesId,reqData,true,header);
}

notesColor(reqData:any)
{
  console.log(reqData)
  let header={
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService('https://localhost:44348/api/Notes/ChangeColor?NotesId='+reqData.notesId+'&color='+reqData.color,{},true,header)
}
}
