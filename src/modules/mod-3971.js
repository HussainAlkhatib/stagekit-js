'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3971",
  name: "Replace \"Y\" with \"S\"",
  description: "Replaces every Y with S.",
  run: (value) => String(value).split("Y").join("S"),
});
