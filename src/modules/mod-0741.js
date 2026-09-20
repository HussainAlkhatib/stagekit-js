'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0741",
  name: "Replace \"c\" with \"F\"",
  description: "Replaces every c with F.",
  run: (value) => String(value).split("c").join("F"),
});
