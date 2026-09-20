'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3483",
  name: "Replace \"Q\" with \"T\"",
  description: "Replaces every Q with T.",
  run: (value) => String(value).split("Q").join("T"),
});
