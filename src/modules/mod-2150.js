'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2150",
  name: "Replace \"u\" with \"2\"",
  description: "Replaces every u with 2.",
  run: (value) => String(value).split("u").join("2"),
});
