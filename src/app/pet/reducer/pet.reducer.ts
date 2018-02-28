import { ActionTypes, PetActions } from '../actions/pet.action';
import { PetTag } from '../model/pet.model';


export const initialState: PetTag = {
  shape: '',
  font: 'sans-serif',
  text: '',
  clip: false,
  gems: false,
  complete: false
};

export function petTagReducer(state: PetTag = initialState, action: PetActions): PetTag  {
  switch (action.type) {
    case ActionTypes.SELECT_SHAPE:
      return <PetTag>{...state,  shape: action.payload};
    case ActionTypes.SELECT_FONT:
      return <PetTag>{...state, font: action.payload};
    case ActionTypes.ADD_TXT:
      return <PetTag>{...state, text: action.payload};
    case ActionTypes.TOGGLE_CLIP:
      return <PetTag>{...state, clip: !state.clip};
    case ActionTypes.TOGGLE_GEMS:
      return <PetTag>{...state, gems: !state.gems};
    case ActionTypes.COMPLETE:
      return <PetTag>{...state, complete: action.payload};
    case ActionTypes.RESET:
      return <PetTag>{...state};
    default:
      return state;
  }
}

