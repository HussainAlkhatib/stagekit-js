'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2443",
  name: "Replace \"z\" with \"Q\"",
  description: "Replaces every z with Q.",
  run: (value) => String(value).split("z").join("Q"),
});
