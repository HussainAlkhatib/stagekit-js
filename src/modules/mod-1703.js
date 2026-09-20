'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1703",
  name: "Replace \"n\" with \"I\"",
  description: "Replaces every n with I.",
  run: (value) => String(value).split("n").join("I"),
});
