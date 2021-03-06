import domReady from '@wordpress/dom-ready';
import { registerBlockStyle } from '@wordpress/blocks';

domReady(() => {
	registerBlockStyle('core/cover', {
		name: 'aspect-21',
		label: '2:1'
	});
	registerBlockStyle('core/cover', {
		name: 'aspect-31',
		label: '3:1'
	});
	registerBlockStyle('core/cover', {
		name: 'aspect-41',
		label: '4:1'
	});
	registerBlockStyle('core/cover', {
		name: 'aspect-169',
		label: '16:9'
	});
	registerBlockStyle('core/cover', {
		name: 'full-height',
		label: 'Full height'
	});
});
