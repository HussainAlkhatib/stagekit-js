'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2140",
  name: "Replace \"u\" with \"S\"",
  description: "Replaces every u with S.",
  run: (value) => String(value).split("u").join("S"),
});
