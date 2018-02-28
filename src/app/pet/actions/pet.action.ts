import { Action } from '@ngrx/store';

export enum ActionTypes {
  SELECT_SHAPE = 'SELECT_SHAPE',
  SELECT_FONT = 'SELECT_FONT',
  ADD_TXT = 'ADD_TXT',
  TOGGLE_CLIP = 'TOGGLE_CLIP',
  TOGGLE_GEMS = 'TOGGLE_GEMS',
  COMPLETE = 'COMPLETE',
  RESET = 'RESET',
}
export class SelectShapeAction implements Action {
  type = ActionTypes.SELECT_SHAPE;
  constructor(public payload: string) {}
}

export class SelectFontAction implements Action {
  type = ActionTypes.SELECT_FONT;
  constructor(public payload: string) {}
}

export class AddTxtAction implements Action {
  type = ActionTypes.ADD_TXT;
  constructor(public payload: string) {}
}
export class ToggleClipAction implements Action {
  type = ActionTypes.TOGGLE_CLIP;
  constructor(public payload: boolean) {}
}

export class ToggleGemsAction implements Action {
  type = ActionTypes.TOGGLE_GEMS;
  constructor(public payload: boolean) {}
}
export class CompleteAction implements Action {
  type = ActionTypes.COMPLETE;
  constructor(public payload: null) {}
}

export class ResetAction implements Action {
  type = ActionTypes.RESET;
  constructor(public payload: null) {}
}

export type PetActions =
  SelectShapeAction |
  SelectFontAction |
  AddTxtAction |
  ToggleClipAction |
  ToggleGemsAction |
  CompleteAction |
  ResetAction;
