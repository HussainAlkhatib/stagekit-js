'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0717",
  name: "Replace \"c\" with \"x\"",
  description: "Replaces every c with x.",
  run: (value) => String(value).split("c").join("x"),
});
