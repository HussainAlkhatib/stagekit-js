'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1857",
  name: "Replace \"q\" with \"e\"",
  description: "Replaces every q with e.",
  run: (value) => String(value).split("q").join("e"),
});
