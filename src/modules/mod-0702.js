'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0702",
  name: "Replace \"c\" with \"s\"",
  description: "Replaces every c with s.",
  run: (value) => String(value).split("c").join("s"),
});
