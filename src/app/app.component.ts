
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  image = '';
  title = 'pp';
  showError = false;
  showFileError = false;

  url: any;
  originalImage: any;
  picture: any;
  timer: any = 0;
  onselectFile(e: any) {
    this.url = "";
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
  onclick(e: any) {
    if (this.timer && this.url) {
      this.showError = false;
      this.showFileError = false;
      this.originalImage = this.url
      setTimeout(() => {
        this.picture = this.url;
      }, this.timer * 1000)
    }else if(!this.url && this.timer){
      this.showError = false;
      this.showFileError = true;
    }else if(this.url && !this.timer){
      this.showError = true;
      this.showFileError = false;
    }
    else{
      this.showError = true;
      this.showFileError = true;
    }

  }

  resetPage(){
    this.showFileError = false;
    this.showError = false;
    this.url = "";
    this.timer = 0;
    this.picture = "";
    this.originalImage = ""
  }
}





