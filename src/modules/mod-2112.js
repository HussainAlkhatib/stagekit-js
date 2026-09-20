'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2112",
  name: "Replace \"u\" with \"p\"",
  description: "Replaces every u with p.",
  run: (value) => String(value).split("u").join("p"),
});
