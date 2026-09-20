'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3610",
  name: "Replace \"S\" with \"Y\"",
  description: "Replaces every S with Y.",
  run: (value) => String(value).split("S").join("Y"),
});
