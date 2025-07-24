function doPost(e) {
  var ss = SpreadsheetApp.openById("1wO6OimzWviwEj91ZCqQ6WwGFVDJ7RyWotKH74vxYdEE");
  var sheet = ss.getSheetByName("Name");

  var name = e.parameter.name;
  var tel = e.parameter.tel;
  var message = e.parameter.message;

  sheet.appendRow([name, tel, message]);

  return ContentService.createTextOutput("OK");
}
