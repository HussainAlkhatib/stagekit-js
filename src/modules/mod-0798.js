'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0798",
  name: "Replace \"c\" with \"Y\"",
  description: "Replaces every c with Y.",
  run: (value) => String(value).split("c").join("Y"),
});
