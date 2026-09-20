'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2455",
  name: "Replace \"z\" with \"2\"",
  description: "Replaces every z with 2.",
  run: (value) => String(value).split("z").join("2"),
});
