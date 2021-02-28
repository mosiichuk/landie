import SVGInject from '@iconfu/svg-inject';
import initAnimations from "./scrollReveal";

SVGInject.setOptions({
    makeIdsUnique: false,
    onFail: function(img, svg) {
        img.classList.remove('inline');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    SVGInject(document.querySelectorAll("img.svg-animate"));
    initAnimations();
});
