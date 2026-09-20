'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2426",
  name: "Replace \"z\" with \"y\"",
  description: "Replaces every z with y.",
  run: (value) => String(value).split("z").join("y"),
});
