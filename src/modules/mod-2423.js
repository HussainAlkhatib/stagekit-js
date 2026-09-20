'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2423",
  name: "Replace \"z\" with \"v\"",
  description: "Replaces every z with v.",
  run: (value) => String(value).split("z").join("v"),
});
