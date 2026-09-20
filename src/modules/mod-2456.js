'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2456",
  name: "Replace \"z\" with \"3\"",
  description: "Replaces every z with 3.",
  run: (value) => String(value).split("z").join("3"),
});
