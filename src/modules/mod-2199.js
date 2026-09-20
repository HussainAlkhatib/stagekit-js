'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2199",
  name: "Replace \"v\" with \"Q\"",
  description: "Replaces every v with Q.",
  run: (value) => String(value).split("v").join("Q"),
});
