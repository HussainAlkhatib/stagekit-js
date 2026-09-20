'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4081",
  name: "Replace \"0\" with \"G\"",
  description: "Replaces every 0 with G.",
  run: (value) => String(value).split("0").join("G"),
});
