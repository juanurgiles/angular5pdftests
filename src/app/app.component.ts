import * as html2canvas from 'html2canvas';

import { Component, ViewChild, ElementRef } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jsPDF from 'jspdf';




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
   /**
   * Ejemplo con jspdf Html2canvas
   */
  jspdf(){
    html2canvas(this.element.nativeElement).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('testCanvas.pdf');
      });
  }
  html2jspdf(){
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Save the PDF
    doc.save('Test.pdf');
  }
}
