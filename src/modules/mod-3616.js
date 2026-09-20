'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3616",
  name: "Replace \"S\" with \"4\"",
  description: "Replaces every S with 4.",
  run: (value) => String(value).split("S").join("4"),
});
