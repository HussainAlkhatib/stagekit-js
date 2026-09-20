'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1213",
  name: "Replace \"f\" with \"G\"",
  description: "Replaces every f with G.",
  run: (value) => String(value).split("f").join("G"),
});
