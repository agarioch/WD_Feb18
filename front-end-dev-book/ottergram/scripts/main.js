var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function getThumbnailArray() {
    'use strict'
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
    });
}

function setDetails(imageURL, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageURL);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText; 
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('src');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();

function randomOtter() {
    'use strict';
    var otters = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var otterArray = [].slice.call(otters);
    var x = Math.floor(Math.random() * otters.length);
    var chosenOtter = otterArray[x];
    chosenOtter.setAttribute('src', 'img/tacocat.jpg');
}

randomOtter();