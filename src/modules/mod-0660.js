'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0660",
  name: "Replace \"c\" with \"e\"",
  description: "Replaces every c with e.",
  run: (value) => String(value).split("c").join("e"),
});
