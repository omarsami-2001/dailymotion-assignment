import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  //Input variable to be called when user clicks to Add to Playlist
  @Input() VideoList:Video[] = []
  //Blank constructor
  constructor() { }

  ngOnInit(): void {
  }

}
