'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0666",
  name: "Replace \"c\" with \"g\"",
  description: "Replaces every c with g.",
  run: (value) => String(value).split("c").join("g"),
});
