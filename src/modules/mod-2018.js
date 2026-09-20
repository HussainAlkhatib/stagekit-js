'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2018",
  name: "Replace \"s\" with \"S\"",
  description: "Replaces every s with S.",
  run: (value) => String(value).split("s").join("S"),
});
