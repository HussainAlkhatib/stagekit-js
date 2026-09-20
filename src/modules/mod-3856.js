'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3856",
  name: "Replace \"W\" with \"0\"",
  description: "Replaces every W with 0.",
  run: (value) => String(value).split("W").join("0"),
});
