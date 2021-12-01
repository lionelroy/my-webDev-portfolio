import React from 'react';
import styled from 'styled-components';
import { Document, Page, pdfjs } from "react-pdf";
import resumePDF from '../assets/images/stephaneRoy-resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentWrap = styled.div`
 display: grid;
  place-items: center;
  align-content: center;
  background-color: #2d2d2d;
`;

export default function Resume() {
  return (
    <Document file={resumePDF}>
    <DocumentWrap>
      <Page pageNumber={1} />
      </DocumentWrap>
    </Document>
  );
}