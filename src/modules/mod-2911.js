'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2911",
  name: "Replace \"H\" with \"v\"",
  description: "Replaces every H with v.",
  run: (value) => String(value).split("H").join("v"),
});
