'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1902",
  name: "Replace \"q\" with \"Y\"",
  description: "Replaces every q with Y.",
  run: (value) => String(value).split("q").join("Y"),
});
