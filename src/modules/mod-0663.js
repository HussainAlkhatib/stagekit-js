'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0663",
  name: "Replace \"c\" with \"f\"",
  description: "Replaces every c with f.",
  run: (value) => String(value).split("c").join("f"),
});
