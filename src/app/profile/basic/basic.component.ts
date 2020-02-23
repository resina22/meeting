import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TopbarService } from 'src/app/layout/topbar/topbar.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  previewProfileImage: string;
  profileForm = new FormGroup({
    profileImage: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private topbarService: TopbarService
  ) {
    this.topbarService.title(
      this.route.snapshot.data.title
    );
  }

  ngOnInit() {}

  changeProfileImage( event ) {
    const target = event.target;
    if (target.files && target.files[0]) {
      const file = target.files[0] as File;
      const reader = new FileReader();
      reader.onload = (e) => this.previewProfileImage = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

}
