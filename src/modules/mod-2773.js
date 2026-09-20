'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2773",
  name: "Replace \"F\" with \"f\"",
  description: "Replaces every F with f.",
  run: (value) => String(value).split("F").join("f"),
});
