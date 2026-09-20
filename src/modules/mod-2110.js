'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2110",
  name: "Replace \"u\" with \"n\"",
  description: "Replaces every u with n.",
  run: (value) => String(value).split("u").join("n"),
});
