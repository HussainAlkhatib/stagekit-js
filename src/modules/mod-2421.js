'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2421",
  name: "Replace \"z\" with \"t\"",
  description: "Replaces every z with t.",
  run: (value) => String(value).split("z").join("t"),
});
