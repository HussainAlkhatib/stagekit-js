'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3467",
  name: "Replace \"Q\" with \"C\"",
  description: "Replaces every Q with C.",
  run: (value) => String(value).split("Q").join("C"),
});
