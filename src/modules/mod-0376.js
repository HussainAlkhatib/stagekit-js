'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0376",
  name: "Replace \"a\" with \"S\"",
  description: "Replaces every a with S.",
  run: (value) => String(value).split("a").join("S"),
});
