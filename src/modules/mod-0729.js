'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0729",
  name: "Replace \"c\" with \"B\"",
  description: "Replaces every c with B.",
  run: (value) => String(value).split("c").join("B"),
});
