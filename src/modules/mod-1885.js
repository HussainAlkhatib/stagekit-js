'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1885",
  name: "Replace \"q\" with \"H\"",
  description: "Replaces every q with H.",
  run: (value) => String(value).split("q").join("H"),
});
