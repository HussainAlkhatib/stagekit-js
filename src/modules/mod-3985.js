'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3985",
  name: "Replace \"Y\" with \"7\"",
  description: "Replaces every Y with 7.",
  run: (value) => String(value).split("Y").join("7"),
});
