'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2151",
  name: "Replace \"u\" with \"3\"",
  description: "Replaces every u with 3.",
  run: (value) => String(value).split("u").join("3"),
});
