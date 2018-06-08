export function handleChangeStyle(field, val) {
  return (state, props) => {
    let finalVal = val;
    if (state.style[field] === val) {
      finalVal = null;
    }
    props.element.style[field] = finalVal;
    return {
      style: {
        ...state.style,
        [field]: finalVal,
      },
    };
  };
}
