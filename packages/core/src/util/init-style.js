export function initStyle() {
  return (state, props) => {
    const style = window.getComputedStyle(props.element);
    const computedStyle = Object.keys(state.style).reduce((prev, key) => {
      prev[key] = style[key];
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
