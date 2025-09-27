/****************************************
 * Function 2: Wishes to Celebrant
 ****************************************/
function sendBirthdayWishes() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  var churchName = "Church Name";
  var subject = "🎉 Happy Birthday from " + churchName + "! 🎉";

  for (var i = 1; i < data.length; i++) {
    var name = data[i][1];   // Full Name (Col B)
    var memberEmail = data[i][5];  // Member Email (Col F)
    var daysUntil = data[i][7];    // DaysUntilBirthday (Col H)

    // If today is their birthday
    if (daysUntil == 0) {
      var message = "Dear " + name + ",\n\n" +
        "All of us at " + churchName + " want to wish you a very Happy Birthday! 🎂🎉\n\n" +
        "May God bless you richly in this your new year.\n" +
        "Have an amazing season ahead.\n\n" +
        "With blessings from,\n" +
        churchName;

      MailApp.sendEmail({
        to: memberEmail,
        subject: subject,
        body: message,
        name: churchName   // ✅ Forces display name
      });
    }
  }
}