'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1909",
  name: "Replace \"q\" with \"5\"",
  description: "Replaces every q with 5.",
  run: (value) => String(value).split("q").join("5"),
});
