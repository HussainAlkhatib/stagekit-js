'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1861",
  name: "Replace \"q\" with \"i\"",
  description: "Replaces every q with i.",
  run: (value) => String(value).split("q").join("i"),
});
