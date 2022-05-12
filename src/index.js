import { ARROW_UP, ARROW_RIGHT, ARROW_DOWN, ARROW_LEFT, HOME, END } from '@19h47/keycode';

const state = { index: 0 };

const next = (event, elements) => {
	// console.log('➡️ next');

	event.preventDefault();

	state.index = state.index + 1 > elements.length - 1 ? 0 : state.index + 1;
	elements[state.index].focus();
};

const previous = (event, elements) => {
	// console.log('⬅️ previous');

	event.preventDefault();

	state.index = 0 > state.index - 1 ? elements.length - 1 : state.index - 1;
	elements[state.index].focus();
};

const first = (event, elements) => {
	// console.log('⏮ first');

	event.preventDefault();

	state.index = 0;
	elements[state.index].focus();
};

const last = (event, elements) => {
	// console.log('⏭ last');
	event.preventDefault();

	state.index = elements.length - 1;
	elements[state.index].focus();
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
 *
 * @returns {Number} index
 */
const keyboardNavigation = (event, elements = []) =>
	(codes[event.keyCode || event.which] || codes.default)(event, elements);

export { state, keyboardNavigation };
