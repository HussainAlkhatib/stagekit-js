'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4266",
  name: "Replace \"3\" with \"I\"",
  description: "Replaces every 3 with I.",
  run: (value) => String(value).split("3").join("I"),
});
