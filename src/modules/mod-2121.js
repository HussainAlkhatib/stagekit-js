'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2121",
  name: "Replace \"u\" with \"z\"",
  description: "Replaces every u with z.",
  run: (value) => String(value).split("u").join("z"),
});
