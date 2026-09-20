'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3949",
  name: "Replace \"Y\" with \"w\"",
  description: "Replaces every Y with w.",
  run: (value) => String(value).split("Y").join("w"),
});
