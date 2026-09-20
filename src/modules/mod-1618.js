'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1618",
  name: "Replace \"m\" with \"j\"",
  description: "Replaces every m with j.",
  run: (value) => String(value).split("m").join("j"),
});
