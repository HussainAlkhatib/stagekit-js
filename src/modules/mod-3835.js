'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3835",
  name: "Replace \"W\" with \"E\"",
  description: "Replaces every W with E.",
  run: (value) => String(value).split("W").join("E"),
});
