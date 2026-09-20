'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3023",
  name: "Replace \"J\" with \"l\"",
  description: "Replaces every J with l.",
  run: (value) => String(value).split("J").join("l"),
});
