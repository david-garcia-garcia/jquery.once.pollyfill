(function () {

	var $original_once = jQuery.fn.once;

	jQuery.fn.once = function ($id, $each) {
		if (typeof ($id) == 'function') {
			return $original_once.apply(this, ['once-pollyfill']).each($id);
		}
		if (typeof ($id) == 'string' && typeof ($each) == 'function') {
			return $original_once.apply(this, [$id]).each($each);
		}
		return $original_once.apply(this, [$id]);
	};

})();