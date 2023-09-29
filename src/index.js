import { ARROW_UP, ARROW_RIGHT, ARROW_DOWN, ARROW_LEFT, HOME, END } from '@19h47/keycode';

/**
 * Next
 *
 * @param {*} event
 * @param {*} elements
 * @param {*} index
 *
 * @returns {Number} index
 */
const next = (event, elements, index) => {
	// console.log('➡️ next');

	event.preventDefault();

	const current = index + 1 > elements.length - 1 ? 0 : index + 1;
	elements[current].focus();

	return current;
};

/**
 * Previous
 *
 * @param {*} event
 * @param {*} elements
 * @param {*} index
 *
 * @returns {Number} index
 */
const previous = (event, elements, index) => {
	// console.log('⬅️ previous');

	event.preventDefault();

	const current = 0 > index - 1 ? elements.length - 1 : index - 1;
	elements[current].focus();

	return current;
};

/**
 * First
 *
 * @param {*} event
 * @param {*} elements
 *
 * @returns {Number} index
 */
const first = (event, elements) => {
	// console.log('⏮ first');

	event.preventDefault();
	elements[0].focus();

	return 0;
};

/**
 * Last
 *
 * @param {*} event
 * @param {*} elements
 *
 * @returns {Number} index
 */
const last = (event, elements,) => {
	// console.log('⏭ last');

	event.preventDefault();

	elements[elements.length - 1].focus();

	return elements.length - 1
};


const codes = {
	[ARROW_UP]: previous,
	[ARROW_RIGHT]: next,
	[ARROW_DOWN]: next,
	[ARROW_LEFT]: previous,
	[HOME]: first,
	[END]: last,
	default: () => false,
};

/**
 * Keyboard navigation
 *
 * @param {Object} event
 * @param {Array} elements
 * @param {Number} current
 *
 * @returns {Number} index
 */
const keyboardNavigation = (event, elements = [], index = 0) => (codes[event.keyCode || event.which] || codes.default)(event, elements, index);

export default keyboardNavigation;
