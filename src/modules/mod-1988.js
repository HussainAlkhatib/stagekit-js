'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1988",
  name: "Replace \"s\" with \"n\"",
  description: "Replaces every s with n.",
  run: (value) => String(value).split("s").join("n"),
});
