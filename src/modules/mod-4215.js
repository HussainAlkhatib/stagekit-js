'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4215",
  name: "Replace \"2\" with \"S\"",
  description: "Replaces every 2 with S.",
  run: (value) => String(value).split("2").join("S"),
});
