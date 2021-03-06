import * as c from './constant';

export function update(name, value) {
  return dispatch => dispatch({
    type: c.FORM_UPDATE_VALUE,
    name, value
  });
}

export function reset() {
  return => dispatch({
    type: c.FORM_RESET
  });
}
