'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2118",
  name: "Replace \"u\" with \"w\"",
  description: "Replaces every u with w.",
  run: (value) => String(value).split("u").join("w"),
});
