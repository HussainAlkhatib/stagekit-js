'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1431",
  name: "Replace \"j\" with \"f\"",
  description: "Replaces every j with f.",
  run: (value) => String(value).split("j").join("f"),
});
