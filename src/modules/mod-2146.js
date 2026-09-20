'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2146",
  name: "Replace \"u\" with \"Y\"",
  description: "Replaces every u with Y.",
  run: (value) => String(value).split("u").join("Y"),
});
