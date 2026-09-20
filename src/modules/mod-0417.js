'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0417",
  name: "Replace \"a\" with \"2\"",
  description: "Replaces every a with 2.",
  run: (value) => String(value).split("a").join("2"),
});
