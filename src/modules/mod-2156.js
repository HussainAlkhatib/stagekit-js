'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2156",
  name: "Replace \"u\" with \"8\"",
  description: "Replaces every u with 8.",
  run: (value) => String(value).split("u").join("8"),
});
