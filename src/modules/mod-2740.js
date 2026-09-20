'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2740",
  name: "Replace \"E\" with \"I\"",
  description: "Replaces every E with I.",
  run: (value) => String(value).split("E").join("I"),
});
