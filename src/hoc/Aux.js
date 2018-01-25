// This is like a middleware that is in charged of returning the adjacent HTML (its children) without the need
// returning an array or introducing wrapping HTML elements like divs.
const aux = (props) => props.children;

export default aux;