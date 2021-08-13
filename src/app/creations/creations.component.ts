import { Component, OnInit } from '@angular/core';
import {default as textConsts} from '../../assets/constants.json';

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.scss']
})
export class CreationsComponent implements OnInit {

  creationsTitle: string = '';

  constructor() { }

  ngOnInit(): void {
    this.creationsTitle = textConsts.creationsTitle;
  }

}
