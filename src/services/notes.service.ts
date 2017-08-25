import {Injectable} from "@angular/core";

@Injectable()
export class NotesService{
  notes = [
    {id:1, title:'Titulo 1', description: 'Descripción 1'},
    {id:2, title:'Titulo 2', description: 'Descripción 2'},
    {id:3, title:'Titulo 3', description: 'Descripción 3'}
  ];
  public getNotes(){
    return this.notes;
  }
  public getNote(id){
    return this.notes.filter(function (e, i) {return e.id == id})[0] || {id:null,title:null,description:null};
  }
}
