export function initStyle() {
  return (state, props) => {
    const style = window.getComputedStyle(props.element);
    const computedStyle = Object.keys(state.style).reduce((prev, key) => {
      prev[key] = style[key].replace('rgba(0, 0, 0, 0)', '');
      return prev;
    }, {});
    return {
      style: {
        ...state.style,
        ...computedStyle,
      },
    };
  };
}
