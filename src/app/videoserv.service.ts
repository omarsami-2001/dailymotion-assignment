import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from './models/Video'

@Injectable({
  providedIn: 'root'
})
export class VideoservService {
  //Constructor
  constructor(private httpClient: HttpClient) { }

  //Parameters
  videoList:Video[] = []
  ObservableVideo = new BehaviorSubject<Video[]>([])
  apiUrl:string = 'https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=';

  //Methods
  search(query:string){
    let url=this.apiUrl + query
    return this.httpClient.get<Video>(url)
  }

  emptyVideosFromPlayList(){
    this.videoList.length = 0
    this.ObservableVideo.next(this.videoList)
  }

  createPlayList(playlist:Video[]){
    this.videoList = playlist
    this.ObservableVideo.next(playlist)
  }

  addVideoToPlayList(chosenVideo:Video){
    this.videoList.push(chosenVideo)
    this.ObservableVideo.next(this.videoList)
  }

  getPlayList(){
    return this.videoList
  }
  


}
