import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "https://www.google.com"
    },
    {
      title: "My Second Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "https://www.google.com"
    },
    {
      title: "My Last Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "https://www.google.com"
    }
  ]
}
