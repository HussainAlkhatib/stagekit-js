'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0804",
  name: "Replace \"c\" with \"0\"",
  description: "Replaces every c with 0.",
  run: (value) => String(value).split("c").join("0"),
});
