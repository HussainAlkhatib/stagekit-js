'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3854",
  name: "Replace \"W\" with \"Y\"",
  description: "Replaces every W with Y.",
  run: (value) => String(value).split("W").join("Y"),
});
