'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0744",
  name: "Replace \"c\" with \"G\"",
  description: "Replaces every c with G.",
  run: (value) => String(value).split("c").join("G"),
});
