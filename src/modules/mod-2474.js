'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2474",
  name: "Replace \"A\" with \"l\"",
  description: "Replaces every A with l.",
  run: (value) => String(value).split("A").join("l"),
});
