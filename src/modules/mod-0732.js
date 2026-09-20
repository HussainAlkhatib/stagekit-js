'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0732",
  name: "Replace \"c\" with \"C\"",
  description: "Replaces every c with C.",
  run: (value) => String(value).split("c").join("C"),
});
