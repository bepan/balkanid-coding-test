export const FETCH_ATTRIBUTES_SUCCESS = 'FETCH_ATTRIBUTES_SUCCESS';
export const UPDATE_VISIBLE_ATTRS = 'UPDATE_VISIBLE_ATTRS';

function fetchAttributesSuccess(attrs) {
  return {
    type: FETCH_ATTRIBUTES_SUCCESS,
    payload: attrs,
  };
}

export function updateVisibleAttributes(attrsToRemove) {
  return {
    type: UPDATE_VISIBLE_ATTRS,
    payload: attrsToRemove,
  };
}

export async function fetchAttributes(dispatcher) {
  const responseMeta = await fetch('http://localhost:3000/attributes');
  const response = await responseMeta.json();
  dispatcher(fetchAttributesSuccess(response.attributes));
}