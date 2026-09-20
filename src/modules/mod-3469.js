'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3469",
  name: "Replace \"Q\" with \"E\"",
  description: "Replaces every Q with E.",
  run: (value) => String(value).split("Q").join("E"),
});
