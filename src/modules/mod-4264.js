'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4264",
  name: "Replace \"3\" with \"G\"",
  description: "Replaces every 3 with G.",
  run: (value) => String(value).split("3").join("G"),
});
