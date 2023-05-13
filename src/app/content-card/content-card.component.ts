import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

const content1 = {
  id: 1,
      title: 'My favorite anime 1(Naruto)',
      description: 'This is my favorite anime series 1',
      creator: 'Some creator',
      imgURL: 'assets/img/img1.jpg',
      type: 'TV Series',
      tags: ['Action', 'Adventure']
};

const content2 = {
  title: 'My second post',
  description: 'This is my second blog post',
  creator: 'Jane Smith',
  type: 'Blog'
};

const content3 = {
  title: 'My third post',
  description: 'This is my third blog post',
  creator: 'John Doe',
  imgURL: 'https://example.com/images/post3.jpg'
};

    this.contentList.addContent(content1);


    this.contentList.addContent({
      id: 2,
      title: 'My favorite anime 2(Demon Slayer)',
      description: 'This is my favorite anime series 2',
      creator: 'Another creator',
      imgURL: 'assets/img/img2.jpg',
      type: 'TV Series',
      tags: ['Action', 'Drama']
    });

    this.contentList.addContent({
      id: 3,
      title: 'My favorite anime 3(Black Clover)',
      description: 'This is my favorite anime series 3',
      creator: 'Some other creator',
      imgURL: 'assets/img/img3.jpg',
      type: 'TV Series',
      tags: ['Comedy', 'Action', 'Comedy']
    });
  }
}