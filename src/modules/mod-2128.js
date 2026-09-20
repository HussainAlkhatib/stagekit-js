'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2128",
  name: "Replace \"u\" with \"G\"",
  description: "Replaces every u with G.",
  run: (value) => String(value).split("u").join("G"),
});
