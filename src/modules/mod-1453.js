'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1453",
  name: "Replace \"j\" with \"C\"",
  description: "Replaces every j with C.",
  run: (value) => String(value).split("j").join("C"),
});
