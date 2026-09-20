'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4286",
  name: "Replace \"3\" with \"2\"",
  description: "Replaces every 3 with 2.",
  run: (value) => String(value).split("3").join("2"),
});
