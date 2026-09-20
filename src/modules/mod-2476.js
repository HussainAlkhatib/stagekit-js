'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2476",
  name: "Replace \"A\" with \"n\"",
  description: "Replaces every A with n.",
  run: (value) => String(value).split("A").join("n"),
});
