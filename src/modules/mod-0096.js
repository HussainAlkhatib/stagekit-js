'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0096",
  name: "Mask all but last 6",
  description: "Masks all but the last 6 characters.",
  run: (value) => { const s = String(value); const keep = 6; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
