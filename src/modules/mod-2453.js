'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2453",
  name: "Replace \"z\" with \"0\"",
  description: "Replaces every z with 0.",
  run: (value) => String(value).split("z").join("0"),
});
