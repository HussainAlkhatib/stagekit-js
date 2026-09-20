'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0753",
  name: "Replace \"c\" with \"J\"",
  description: "Replaces every c with J.",
  run: (value) => String(value).split("c").join("J"),
});
