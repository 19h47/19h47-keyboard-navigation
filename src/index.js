import { ARROW_UP, ARROW_RIGHT, ARROW_DOWN, ARROW_LEFT, HOME, END } from '@19h47/keycode';

/**
 * Keyboard navigation
 *
 * @param {Object} event
 * @param {Array} elements
 * @param {Number} currentIndex
 *
 * @returns {Number} index
 */
const keyboardNavigation = (event, elements = [], currentIndex = 0) => {
	const key = event.keyCode || event.which;
	let index = currentIndex;

	const next = () => {
		// console.log('➡️ next');

		event.preventDefault();

		if (-1 < currentIndex) {
			index = Math.min(elements.length - 1, currentIndex + 1);

			elements[index].focus();
		}
	};

	const previous = () => {
		// console.log('⬅️ previous');

		event.preventDefault();
		if (-1 < currentIndex) {
			index = Math.max(0, currentIndex - 1);

			elements[index].focus();
		}
	};

	const first = () => {
		// console.log('⏮ first');

		index = 0;

		event.preventDefault();
		elements[index].focus();
	};

	const last = () => {
		// console.log('⏭ last');

		index = elements.length - 1;

		event.preventDefault();
		elements[index].focus();
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

	(codes[key] || codes.default)();

	return index;
};

export default keyboardNavigation;
