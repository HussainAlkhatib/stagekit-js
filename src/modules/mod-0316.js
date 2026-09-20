'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0316",
  name: "Replace \"a\" with \"G\"",
  description: "Replaces every a with G.",
  run: (value) => String(value).split("a").join("G"),
});
