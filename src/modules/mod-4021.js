'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4021",
  name: "Replace \"Z\" with \"H\"",
  description: "Replaces every Z with H.",
  run: (value) => String(value).split("Z").join("H"),
});
