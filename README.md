# Angular5pdftests

Proyecto realizado con:
[Angular CLI](https://github.com/angular/angular-cli) versión 1.6.7.
[PdfMake](http://pdfmake.org/) versión ^0.1.36
[JsPdf](https://github.com/MrRio/jsPDF) versión ^1.1.31
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Ejemplos generando pdf con angular 

npm install pdfmake --save
npm install @types/jspdf --save

npm install html2canvas --save


En component: 

import * as html2canvas from 'html2canvas'; // Importante  importar al comenzar el componente

import { Component, ViewChild, ElementRef } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as jsPDF from 'jspdf';

NOTA: Importante src de imágenes deben estar codificadas en base64