'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4016",
  name: "Replace \"Z\" with \"C\"",
  description: "Replaces every Z with C.",
  run: (value) => String(value).split("Z").join("C"),
});
