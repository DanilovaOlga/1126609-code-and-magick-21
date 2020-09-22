"use strict";

const SCALE_HEIGHT_MAX = 150;
const SCALE_WIDTH = 40;
const SCALE_GAP = 50;

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_GAP = 10;

const FONT_GAP = 19;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const renderText = function (ctx, text, textX, textY) {
  ctx.font = "16px PT Mono";
  ctx.textBaseline = "hanging";
  ctx.fillStyle = "#000000";
  ctx.fillText(text, textX, textY);
};

const getMaxNumber = function (array) {
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");
  renderText(ctx, "Ура, вы победили!", CLOUD_X + CLOUD_GAP * 2, CLOUD_GAP * 3);
  renderText(ctx, "Список результатов:", CLOUD_X + CLOUD_GAP * 2, CLOUD_GAP * 3 + FONT_GAP);

  const maxTime = getMaxNumber(times);

  for (let i = 0; i < names.length; i++) {
    const scaleIndent = CLOUD_X + CLOUD_GAP * 3 + (SCALE_WIDTH + SCALE_GAP) * i;
    const scaleHeight = (times[i] * SCALE_HEIGHT_MAX) / maxTime;
    const scaleHeightDifference = SCALE_HEIGHT_MAX - scaleHeight;

    ctx.fillStyle = "#000000";
    ctx.fillText(Math.round(times[i]), scaleIndent, CLOUD_GAP * 3 + FONT_GAP * 2 + scaleHeightDifference);
    if (names[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      let randomPercent = Math.round(Math.random() * 100) + "%";
      ctx.fillStyle = "hsl(209," + randomPercent + ", 29%)";
    }
    ctx.fillRect(scaleIndent, CLOUD_GAP * 3 + FONT_GAP * 3 + scaleHeightDifference, SCALE_WIDTH, scaleHeight);
    ctx.fillStyle = "#000000";
    ctx.fillText(names[i], scaleIndent, CLOUD_HEIGHT - CLOUD_GAP * 2);
  }
};
