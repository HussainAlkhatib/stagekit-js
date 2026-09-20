'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3462",
  name: "Replace \"Q\" with \"x\"",
  description: "Replaces every Q with x.",
  run: (value) => String(value).split("Q").join("x"),
});
