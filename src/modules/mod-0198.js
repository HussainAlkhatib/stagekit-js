'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0198",
  name: "Replace \"a\" with \"p\"",
  description: "Replaces every a with p.",
  run: (value) => String(value).split("a").join("p"),
});
