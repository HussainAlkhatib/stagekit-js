'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3087",
  name: "Replace \"K\" with \"o\"",
  description: "Replaces every K with o.",
  run: (value) => String(value).split("K").join("o"),
});
