import {Injectable} from "@angular/core";

@Injectable()
export class NotesService{
  notes = [
    {id:1, title:'Titulo 1', description: 'Descripcion 1'},
    {id:2, title:'Titulo 2', description: 'Descripcion 2'},
    {id:3, title:'Titulo 3', description: 'Descripcion 3'}
  ];
  public getNotes(){
    return this.notes;
  }
}
