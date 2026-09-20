'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1912",
  name: "Replace \"q\" with \"8\"",
  description: "Replaces every q with 8.",
  run: (value) => String(value).split("q").join("8"),
});
