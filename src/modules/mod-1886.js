'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1886",
  name: "Replace \"q\" with \"I\"",
  description: "Replaces every q with I.",
  run: (value) => String(value).split("q").join("I"),
});
