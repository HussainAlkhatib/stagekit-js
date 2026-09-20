'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0207",
  name: "Replace \"a\" with \"q\"",
  description: "Replaces every a with q.",
  run: (value) => String(value).split("a").join("q"),
});
