import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'efgm-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.scss']
})
export class GMComponent implements OnInit {
  selectedFile: File = null;
  imgFile = null;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }



  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('http://localhost:4200', fd).subscribe(res =>{console.log(res)});
  }

}