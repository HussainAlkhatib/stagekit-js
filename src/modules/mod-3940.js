'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3940",
  name: "Replace \"Y\" with \"n\"",
  description: "Replaces every Y with n.",
  run: (value) => String(value).split("Y").join("n"),
});
