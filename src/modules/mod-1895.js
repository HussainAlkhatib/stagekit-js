'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1895",
  name: "Replace \"q\" with \"R\"",
  description: "Replaces every q with R.",
  run: (value) => String(value).split("q").join("R"),
});
