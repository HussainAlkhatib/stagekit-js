'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0750",
  name: "Replace \"c\" with \"I\"",
  description: "Replaces every c with I.",
  run: (value) => String(value).split("c").join("I"),
});
