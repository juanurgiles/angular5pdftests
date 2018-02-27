import * as html2canvas from 'html2canvas';

import { Component, ViewChild, ElementRef } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jsPDF from 'jspdf';
import * as d3 from 'd3';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('topdf') element: ElementRef;

  constructor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

  }
  title = 'app';
  /**
   * Ejemplo con pdfmake
   */
  pdfmake() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var dd = { content: 'your pdf data' };
    pdfMake.createPdf(dd).download();
  }
  jspdf(){
    html2canvas(this.element.nativeElement).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('testCanvas.pdf');
      });
  }
}
