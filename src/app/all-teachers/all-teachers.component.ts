import { Component } from '@angular/core';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent {

  teachers = [
    {
      "url": "https://media1.popsugar-assets.com/files/thumbor/HGzDr-VBYLH-NSmE-5vBPoDJMWo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/877/n/1922729/37fd0a575d4b2e8e511816.39458261_/i/Teacher-Weight-Loss-Tips.jpg",
      "name": "ABC",
      "subject": "English"
    },
    {
      "url": "https://media1.popsugar-assets.com/files/thumbor/HGzDr-VBYLH-NSmE-5vBPoDJMWo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/877/n/1922729/37fd0a575d4b2e8e511816.39458261_/i/Teacher-Weight-Loss-Tips.jpg",
      "name": "XYZ",
      "subject": "Maths"
    },
    {
      "url": "https://media1.popsugar-assets.com/files/thumbor/HGzDr-VBYLH-NSmE-5vBPoDJMWo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/08/07/877/n/1922729/37fd0a575d4b2e8e511816.39458261_/i/Teacher-Weight-Loss-Tips.jpg",
      "name": "AQR",
      "subject": "Science"
    },

  ]

}
