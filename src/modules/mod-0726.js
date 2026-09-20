'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0726",
  name: "Replace \"c\" with \"A\"",
  description: "Replaces every c with A.",
  run: (value) => String(value).split("c").join("A"),
});
