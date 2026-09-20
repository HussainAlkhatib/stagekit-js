'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0421",
  name: "Replace \"a\" with \"3\"",
  description: "Replaces every a with 3.",
  run: (value) => String(value).split("a").join("3"),
});
