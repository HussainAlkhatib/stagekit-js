'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0160",
  name: "Replace \"a\" with \"l\"",
  description: "Replaces every a with l.",
  run: (value) => String(value).split("a").join("l"),
});
