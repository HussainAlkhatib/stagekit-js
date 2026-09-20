'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1870",
  name: "Replace \"q\" with \"s\"",
  description: "Replaces every q with s.",
  run: (value) => String(value).split("q").join("s"),
});
