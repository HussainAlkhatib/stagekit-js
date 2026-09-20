'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2915",
  name: "Replace \"H\" with \"z\"",
  description: "Replaces every H with z.",
  run: (value) => String(value).split("H").join("z"),
});
