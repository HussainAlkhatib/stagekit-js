'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0021",
  name: "Suffix \"_\"",
  description: "Appends \"_\" to the value.",
  run: (value) => String(value) + "_",
});
