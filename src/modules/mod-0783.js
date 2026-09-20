'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0783",
  name: "Replace \"c\" with \"T\"",
  description: "Replaces every c with T.",
  run: (value) => String(value).split("c").join("T"),
});
