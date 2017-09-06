import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My First Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "http://images.all-free-download.com/images/graphiclarge/book_tunnel_192352.jpg"
    },
    {
      title: "My Second Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "http://images.all-free-download.com/images/graphiclarge/book_tunnel_192352.jpg"
    },
    {
      title: "My Last Doc",
      description: "I love angular 4!!!!!!!!",
      file_url: "https://www.google.com",
      updated_at: "2017-09-04",
      image_url: "http://images.all-free-download.com/images/graphiclarge/book_tunnel_192352.jpg"
    }
  ]
}
