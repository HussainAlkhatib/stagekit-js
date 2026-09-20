'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0382",
  name: "Truncate to 45",
  description: "Keeps the first 45 characters.",
  run: (value) => String(value).slice(0, 45),
});
