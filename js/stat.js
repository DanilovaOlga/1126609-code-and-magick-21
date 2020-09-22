"use strict";

const SCALE_HEIGHT = 150;
const SCALE_WIDTH = 40;
const SCALE_GAP = 50;

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

const renderText = function (ctx, text, textX, textY) {
  ctx.font = "16px 'PT Mono'";
  ctx.textBaseline = "hanging";
  ctx.fillStyle = "#000000";
  ctx.fillText(text, textX, textY);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");
  renderText(ctx, "Ура, вы победили!", 120, 30);
  renderText(ctx, "Список результатов:", 120, 50);
};
