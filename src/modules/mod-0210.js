'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0210",
  name: "Suffix \"/\"",
  description: "Appends \"/\" to the value.",
  run: (value) => String(value) + "/",
});
