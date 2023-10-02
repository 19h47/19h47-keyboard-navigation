/**
 * Next
 *
 * @param {KeyboardEvent} event
 * @param {*} elements
 * @param {number} index
 *
 * @returns {Number} index
 */
const next = (event: KeyboardEvent, elements: any, index : number): number => {
	// console.log('➡️ next');

	event.preventDefault();

	const current = index + 1 > elements.length - 1 ? 0 : index + 1;
	elements[current].focus();

	return current;
};

/**
 * Previous
 *
 * @param {KeyboardEvent} event
 * @param {*} elements
 * @param {number} index
 *
 * @returns {number} index
 */
const previous = (event : KeyboardEvent, elements: any, index : number): number => {
	// console.log('⬅️ previous');

	event.preventDefault();

	const current = 0 > index - 1 ? elements.length - 1 : index - 1;
	elements[current].focus();

	return current;
};

/**
 * My First
 *
 * @param {KeyboardEvent} event
 * @param {*} elements
 *
 * @returns {Number} index
 */
const first = (event : KeyboardEvent, elements: any): number => {
	// console.log('⏮ first');

	event.preventDefault();
	elements[0].focus();

	return 0;
};

/**
 * My Last
 *
 * @param {KeyboardEvent} event
 * @param {*} elements
 *
 * @returns {number} index
 */
const last = (event : KeyboardEvent, elements: any): number => {
	// console.log('⏭ last');

	event.preventDefault();

	elements[elements.length - 1].focus();

	return elements.length - 1
};


const codes = {
	['ArrowUp']: previous,
	['ArrowRight']: next,
	['ArrowDown']: next,
	['ArrowLeft']: previous,
	['Home']: first,
	['End']: last,
	default: () => false,
};

/**
 * Keyboard navigation
 *
 * @param {KeyboardEvent} event
 * @param {*} elements
 * @param {number} index
 *
 * @returns {number} index
 */
// @ts-ignore
const keyboardNavigation = (event : KeyboardEvent, elements: any = [], index: number = 0): number => (codes[event.key || event.code] || codes.default)(event, elements, index);

export default keyboardNavigation;
