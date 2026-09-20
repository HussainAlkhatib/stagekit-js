'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3852",
  name: "Replace \"W\" with \"V\"",
  description: "Replaces every W with V.",
  run: (value) => String(value).split("W").join("V"),
});
