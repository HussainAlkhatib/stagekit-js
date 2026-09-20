'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0672",
  name: "Replace \"c\" with \"i\"",
  description: "Replaces every c with i.",
  run: (value) => String(value).split("c").join("i"),
});
