'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0792",
  name: "Replace \"c\" with \"W\"",
  description: "Replaces every c with W.",
  run: (value) => String(value).split("c").join("W"),
});
