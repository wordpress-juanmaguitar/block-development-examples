window.addEventListener( 'load', () => {
	const $ = jQuery;
	const blockClassPrefix = '.wp-block-gutenberg-examples-counter-jquery-99def1'
	const $input = $(blockClassPrefix + '__value');
	const step = parseInt($input.attr("step"))

	$(blockClassPrefix + '__increment').click(() => {
		const currentValue = parseInt($input.val())
		$input.val(currentValue + step)
	})
	$(blockClassPrefix + '__decrement').click(() => {
		const currentValue = parseInt($input.val())
		$input.val(currentValue - step)
	});
});