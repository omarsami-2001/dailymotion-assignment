import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { VideoservService } from 'src/app/videoserv.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  //Blank constructor
  constructor(private vidServ:VideoservService) { }

  //Parameters
  @Input() video:Video ={} as Video
  existsInPlayList:boolean = false
  VideoSet:Video[] = []
  SubscriptionVideo = new Subscription()

  //Methods
  ngOnInit(): void {
    this.SubscriptionVideo = this.vidServ.ObservableVideo.subscribe(
      (data)=>{this.VideoSet=data})
    this.existsInPlayList = true;
  }
  AddtoPlayList(){
    this.vidServ.addVideoToPlayList(this.video)
  }

}
