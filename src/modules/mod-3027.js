'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3027",
  name: "Replace \"J\" with \"p\"",
  description: "Replaces every J with p.",
  run: (value) => String(value).split("J").join("p"),
});
