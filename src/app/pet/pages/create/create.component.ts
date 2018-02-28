import { Component, OnInit } from '@angular/core';
import { PetTag } from '../../model/pet.model';
import { Observable } from 'rxjs/Observable';
import { select, Store } from '@ngrx/store';
import { ActionTypes } from '../../actions/pet.action';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tagState$: Observable<PetTag>;
  petTag: PetTag;
  private tagStateSubscription: Subscription;
  done = false;
  constructor(private store: Store<PetTag>) {
    this.tagState$ = store.pipe(select('petTag'));
  }
  ngOnInit() {
    this.tagStateSubscription = this.tagState$.subscribe((state) => {
      console.log(state);
      this.petTag = state;
      this.done = !!(this.petTag && this.petTag.shape && this.petTag.text);
    });
  }
  selectShapeHandler(shape: string) {
    this.store.dispatch({
      type: ActionTypes.SELECT_SHAPE,
      payload: shape
    });
  }

  selectFontHandler(fontType: string) {
    this.store.dispatch({
      type: ActionTypes.SELECT_FONT,
      payload: fontType
    });
  }

  addTextHandler(text: string) {
    this.store.dispatch({
      type: ActionTypes.ADD_TXT,
      payload: text
    });
  }

  toggleClipHandler() {
    this.store.dispatch({
      type: ActionTypes.TOGGLE_CLIP
    });
  }

  toggleGemsHandler() {
    this.store.dispatch({
      type: ActionTypes.TOGGLE_GEMS
    });
  }

  submit() {
    this.store.dispatch({
      type: ActionTypes.COMPLETE,
      payload: true
    });
  }
}
