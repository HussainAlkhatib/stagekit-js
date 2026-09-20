'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1475",
  name: "Replace \"j\" with \"Y\"",
  description: "Replaces every j with Y.",
  run: (value) => String(value).split("j").join("Y"),
});
