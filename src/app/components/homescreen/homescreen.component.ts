import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { VideoservService } from 'src/app/videoserv.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  //Constructor
  constructor(
    private vidServ:VideoservService
  ) { }

  //Parameters
  @Input() VidClicked:Video = {} as Video
  ObservableVideo = new BehaviorSubject<Video[]>([])
  search:string = ""
  query:Subscription = new Subscription()
  videos:Video[] = []

  //Methods
  ngOnInit(): void {
  }

  onKey = (event:any) => {
    this.search = event.target.value
  }

  searchButton(){
    this.query = this.vidServ.search(this.search).subscribe(
      (data:any)=>{
        this.videos = data["list"]
      })
      console.log(this.videos);
      
    this.vidServ.createPlayList(this.videos)
  }

}
