import { Component, OnDestroy, OnInit } from '@angular/core';
import { PetTag } from '../../model/pet.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store, select } from '@ngrx/store';
import { ActionTypes } from '../../actions/pet.action';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit, OnDestroy {

  tagState$: Observable<PetTag>;
  private tagStateSubscription: Subscription;
  petTag: PetTag;

  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.pipe(select('petTag'));
  }

  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      this.petTag = state;
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }

  newTag() {
    this.store.dispatch({
      type: ActionTypes.RESET
    });
  }

}
