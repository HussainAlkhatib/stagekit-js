'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1907",
  name: "Replace \"q\" with \"3\"",
  description: "Replaces every q with 3.",
  run: (value) => String(value).split("q").join("3"),
});
