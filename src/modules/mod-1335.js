'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1335",
  name: "Replace \"h\" with \"G\"",
  description: "Replaces every h with G.",
  run: (value) => String(value).split("h").join("G"),
});
