'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0780",
  name: "Replace \"c\" with \"S\"",
  description: "Replaces every c with S.",
  run: (value) => String(value).split("c").join("S"),
});
