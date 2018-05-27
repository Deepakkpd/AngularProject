import { Component, OnInit } from '@angular/core';
import { Gfe } from './gfe'; //added for Gfe like VO
import { ArchitecturalArea } from './architecturalArea';  //added for ArchitecturalArea like VO

@Component({
  selector: 'app-bomto-pdm',
  templateUrl: './bomto-pdm.component.html',
  styleUrls: ['./bomto-pdm.component.scss']
})
export class BOMtoPDMComponent implements OnInit {

  gfe: Gfe[];
  architecturalArea: ArchitecturalArea[];

  gfeSelected: Number;
  architecturalAreaSelected: Number;

  constructor() { }

  ngOnInit() {
    this.gfe=[
      {Id:1,Name:'Deepak jshdsjhd sjdhsakdbajasdhaksdbakshdkhbksjdhsakdbajasdhaksdbakshdkhbk'},
      {Id:2,Name:'Nithilan'},
      {Id:3,Name:'Dilip'},
      {Id:4,Name:'Raji'},
      {Id:5,Name:'Ramanan'}
    ]

    this.architecturalArea=[
      {Id:1,Name:'Deepak1'},
      {Id:2,Name:'Nithilan1'},
      {Id:3,Name:'Dilip1'},
      {Id:4,Name:'Raji1'},
      {Id:5,Name:'Ramanan1'}
    ]

   // this.gfeSelected=4;
  }

}
