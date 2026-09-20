'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4022",
  name: "Replace \"Z\" with \"I\"",
  description: "Replaces every Z with I.",
  run: (value) => String(value).split("Z").join("I"),
});
