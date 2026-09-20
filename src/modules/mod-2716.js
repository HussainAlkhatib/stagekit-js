'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2716",
  name: "Replace \"E\" with \"j\"",
  description: "Replaces every E with j.",
  run: (value) => String(value).split("E").join("j"),
});
