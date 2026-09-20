'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2762",
  name: "Replace \"E\" with \"4\"",
  description: "Replaces every E with 4.",
  run: (value) => String(value).split("E").join("4"),
});
