'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4045",
  name: "Replace \"Z\" with \"6\"",
  description: "Replaces every Z with 6.",
  run: (value) => String(value).split("Z").join("6"),
});
