'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3896",
  name: "Replace \"X\" with \"E\"",
  description: "Replaces every X with E.",
  run: (value) => String(value).split("X").join("E"),
});
