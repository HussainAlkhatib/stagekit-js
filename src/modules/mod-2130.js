'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2130",
  name: "Replace \"u\" with \"I\"",
  description: "Replaces every u with I.",
  run: (value) => String(value).split("u").join("I"),
});
