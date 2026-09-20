'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4276",
  name: "Replace \"3\" with \"S\"",
  description: "Replaces every 3 with S.",
  run: (value) => String(value).split("3").join("S"),
});
