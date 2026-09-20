'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2190",
  name: "Replace \"v\" with \"H\"",
  description: "Replaces every v with H.",
  run: (value) => String(value).split("v").join("H"),
});
