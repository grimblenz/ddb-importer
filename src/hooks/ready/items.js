import { DDBItemConfig } from "../../lib/itemConfig.js";

function initItemSheetHook(app, html) {
  if (!app.entity.isOwned) return;
  // console.error(app.entity);
  // console.log(data);
  const title = `DDB Importer Item Config`;
  const whiteTitle = (game.settings.get("ddb-importer", "link-title-colour-white")) ? " white" : "";
  let button = $(`<a class="open-item-ddb-importer" title="${title}"><i class="fab fa-d-and-d-beyond${whiteTitle}"></i></a>`);
  button.click(() => {
    new DDBItemConfig(app.entity, {}).render(true);
  });
  html.closest('.app').find('.open-item-ddb-importer').remove();
  let titleElement = html.closest('.app').find('.window-title');
  button.insertAfter(titleElement);
}

export function itemSheets() {
  Hooks.on('renderItemSheet', initItemSheetHook);
}

