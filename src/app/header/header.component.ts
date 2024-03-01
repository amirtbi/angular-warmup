import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../shared/api.shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  currentFetchStatus: string = '';
  constructor(private apiService: ApiService) {}

  ngOnDestroy(): void {
    this.apiService.fetchStatus.unsubscribe();
  }

  ngOnInit(): void {
    this.apiService.fetchStatus.subscribe((data) => {
      this.currentFetchStatus = data;
    });
  }
}
