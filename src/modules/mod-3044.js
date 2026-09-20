'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3044",
  name: "Replace \"J\" with \"G\"",
  description: "Replaces every J with G.",
  run: (value) => String(value).split("J").join("G"),
});
