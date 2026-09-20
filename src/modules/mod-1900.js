'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1900",
  name: "Replace \"q\" with \"W\"",
  description: "Replaces every q with W.",
  run: (value) => String(value).split("q").join("W"),
});
