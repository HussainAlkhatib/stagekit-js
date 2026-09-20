'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3442",
  name: "Replace \"Q\" with \"d\"",
  description: "Replaces every Q with d.",
  run: (value) => String(value).split("Q").join("d"),
});
