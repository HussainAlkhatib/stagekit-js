'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3443",
  name: "Replace \"Q\" with \"e\"",
  description: "Replaces every Q with e.",
  run: (value) => String(value).split("Q").join("e"),
});
