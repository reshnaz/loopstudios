import { Component, OnInit } from '@angular/core';
import {default as textConsts} from '../../assets/constants.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  leaderTitle: string = '';
  leaderText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.leaderTitle = textConsts.leaderTitle;
    this.leaderText = textConsts.leaderText;
  }

}
