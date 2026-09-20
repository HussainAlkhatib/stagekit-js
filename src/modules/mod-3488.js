'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3488",
  name: "Replace \"Q\" with \"Y\"",
  description: "Replaces every Q with Y.",
  run: (value) => String(value).split("Q").join("Y"),
});
