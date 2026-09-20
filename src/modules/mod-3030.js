'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3030",
  name: "Replace \"J\" with \"s\"",
  description: "Replaces every J with s.",
  run: (value) => String(value).split("J").join("s"),
});
