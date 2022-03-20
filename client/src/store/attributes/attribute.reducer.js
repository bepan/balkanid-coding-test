import {FETCH_ATTRIBUTES_SUCCESS, UPDATE_VISIBLE_ATTRS} from './attribute.actions';

export const attributeInitialState = {
  attributes: [],
  visibleAttributes: [],
};

export function attributeReducer(state, action) {
  switch (action.type) {
    case FETCH_ATTRIBUTES_SUCCESS:
      return {
        attributes: action.payload,
        visibleAttributes: action.payload
      };

    case UPDATE_VISIBLE_ATTRS:
      const optionsToRemove = action.payload;
      return {
        ...state,
        visibleAttributes: state.attributes.filter(attr => !optionsToRemove.includes(attr.key))
      };
      
    default:
      return state;
  }
}