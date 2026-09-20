'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2451",
  name: "Replace \"z\" with \"Y\"",
  description: "Replaces every z with Y.",
  run: (value) => String(value).split("z").join("Y"),
});
