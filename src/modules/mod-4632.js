'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4632",
  name: "Replace \"9\" with \"I\"",
  description: "Replaces every 9 with I.",
  run: (value) => String(value).split("9").join("I"),
});
