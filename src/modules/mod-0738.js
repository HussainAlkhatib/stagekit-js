'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0738",
  name: "Replace \"c\" with \"E\"",
  description: "Replaces every c with E.",
  run: (value) => String(value).split("c").join("E"),
});
