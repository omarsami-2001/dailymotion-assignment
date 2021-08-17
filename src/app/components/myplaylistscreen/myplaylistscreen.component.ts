import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { VideoservService } from 'src/app/videoserv.service';

@Component({
  selector: 'app-myplaylistscreen',
  templateUrl: './myplaylistscreen.component.html',
  styleUrls: ['./myplaylistscreen.component.css']
})
export class MyplaylistscreenComponent implements OnInit {
  //Constructor
  constructor(
    private vidServ:VideoservService
  ) { }

  //Parameters
  playList:Video[] = []
  SubscriptionVideo = new Subscription

  //Methods
  ngOnInit(): void {
    this.SubscriptionVideo = this.vidServ.ObservableVideo.subscribe(
      (data)=>{this.playList = data}
    )
  }
  ngOnDestroy(){
    this.SubscriptionVideo.unsubscribe()
  }
  ResetArray(){
    this.playList.length=0
    this.vidServ.emptyVideosFromPlayList()
  }
}
