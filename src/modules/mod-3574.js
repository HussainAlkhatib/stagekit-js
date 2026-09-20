'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3574",
  name: "Replace \"S\" with \"n\"",
  description: "Replaces every S with n.",
  run: (value) => String(value).split("S").join("n"),
});
