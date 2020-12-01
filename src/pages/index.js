window.addEventListener('DOMContentLoaded', () => {

  'use strict';

  require('../vendor/slick/slick.css');
  require('../vendor/slick/slick-theme.css');
  // require('animate.css');
  require('./index.sass');

  const slider = require('../scripts/slider.js');
  const form = require('../scripts/form.js');

  slider();
  form();

});
