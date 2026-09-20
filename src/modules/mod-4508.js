'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4508",
  name: "Replace \"7\" with \"G\"",
  description: "Replaces every 7 with G.",
  run: (value) => String(value).split("7").join("G"),
});
