'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1862",
  name: "Replace \"q\" with \"j\"",
  description: "Replaces every q with j.",
  run: (value) => String(value).split("q").join("j"),
});
