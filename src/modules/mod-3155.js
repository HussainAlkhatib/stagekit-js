'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3155",
  name: "Replace \"L\" with \"v\"",
  description: "Replaces every L with v.",
  run: (value) => String(value).split("L").join("v"),
});
