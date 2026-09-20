'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1874",
  name: "Replace \"q\" with \"w\"",
  description: "Replaces every q with w.",
  run: (value) => String(value).split("q").join("w"),
});
