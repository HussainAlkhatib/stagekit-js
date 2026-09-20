'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1760",
  name: "Replace \"o\" with \"E\"",
  description: "Replaces every o with E.",
  run: (value) => String(value).split("o").join("E"),
});
