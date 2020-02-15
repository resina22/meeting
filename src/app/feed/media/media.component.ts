import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaDialogComponent } from '../../shared/dialog/media-dialog.component';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  imgs = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/44_-_Iguazu_-_D%C3%A9cembre_2007.jpg/1920px-44_-_Iguazu_-_D%C3%A9cembre_2007.jpg',
    'https://www.clickriomafra.com.br/umbanda/wp-content/uploads/2011/07/natureza1.jpg',
    'https://www.relaxar.org/wp-content/uploads/2019/03/relaxar-natureza.jpg',
    'https://www.clickriomafra.com.br/umbanda/wp-content/uploads/2011/07/natureza1.jpg',
  ];

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(MediaDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}

