'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2750",
  name: "Replace \"E\" with \"S\"",
  description: "Replaces every E with S.",
  run: (value) => String(value).split("E").join("S"),
});
