import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();

  @Output() aoDigitar: EventEmitter<string> = new EventEmitter<string>();
  @Input() valor: string = '';

  ngOnInit(): void {
      this.debounce
      .pipe(debounceTime(300)).subscribe(filter => this.aoDigitar.emit(filter));
  }
  ngOnDestroy(): void {
      this.debounce.unsubscribe();
  }
}
