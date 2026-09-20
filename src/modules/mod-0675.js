'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0675",
  name: "Replace \"c\" with \"j\"",
  description: "Replaces every c with j.",
  run: (value) => String(value).split("c").join("j"),
});
