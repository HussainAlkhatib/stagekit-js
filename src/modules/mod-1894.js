'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1894",
  name: "Replace \"q\" with \"Q\"",
  description: "Replaces every q with Q.",
  run: (value) => String(value).split("q").join("Q"),
});
