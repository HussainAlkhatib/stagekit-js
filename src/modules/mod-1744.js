'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1744",
  name: "Replace \"o\" with \"n\"",
  description: "Replaces every o with n.",
  run: (value) => String(value).split("o").join("n"),
});
