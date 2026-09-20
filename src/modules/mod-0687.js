'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0687",
  name: "Replace \"c\" with \"n\"",
  description: "Replaces every c with n.",
  run: (value) => String(value).split("c").join("n"),
});
