'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2512",
  name: "Replace \"A\" with \"Y\"",
  description: "Replaces every A with Y.",
  run: (value) => String(value).split("A").join("Y"),
});
