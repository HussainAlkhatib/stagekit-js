'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4032",
  name: "Replace \"Z\" with \"S\"",
  description: "Replaces every Z with S.",
  run: (value) => String(value).split("Z").join("S"),
});
