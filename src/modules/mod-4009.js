'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4009",
  name: "Replace \"Z\" with \"v\"",
  description: "Replaces every Z with v.",
  run: (value) => String(value).split("Z").join("v"),
});
