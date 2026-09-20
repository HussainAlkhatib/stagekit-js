'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1864",
  name: "Replace \"q\" with \"l\"",
  description: "Replaces every q with l.",
  run: (value) => String(value).split("q").join("l"),
});
