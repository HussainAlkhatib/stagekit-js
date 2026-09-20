'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4043",
  name: "Replace \"Z\" with \"4\"",
  description: "Replaces every Z with 4.",
  run: (value) => String(value).split("Z").join("4"),
});
