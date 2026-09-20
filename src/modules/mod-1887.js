'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1887",
  name: "Replace \"q\" with \"J\"",
  description: "Replaces every q with J.",
  run: (value) => String(value).split("q").join("J"),
});
