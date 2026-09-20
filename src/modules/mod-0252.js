'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0252",
  name: "Replace \"a\" with \"v\"",
  description: "Replaces every a with v.",
  run: (value) => String(value).split("a").join("v"),
});
