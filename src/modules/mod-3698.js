'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3698",
  name: "Replace \"U\" with \"p\"",
  description: "Replaces every U with p.",
  run: (value) => String(value).split("U").join("p"),
});
