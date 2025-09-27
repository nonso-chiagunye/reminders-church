/************************************
 * Function 1: Reminders to Admins
 ************************************/
function sendBirthdayReminders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // List of admin recipients
  var adminRecipients = [
    "email-1@gmail.com",
    "email-2@gmail.com",
    "email-n@gmail.com"
    // Add more as needed
  ];

  var subject = "Upcoming Birthday Reminder";

  var churchName = "Church Name";

  for (var i = 1; i < data.length; i++) {  // start at row 2
    var name = data[i][1];   // Full Name (Col B)
    var phone = data[i][2];  // Phone Number (Col C)
    var emirate = data[i][3]; // Emirate (Col D)
    var memberEmail = data[i][5];  // Member Email (Col F)
    var nextBirthday = data[i][6]; // NextBirthday (Col G)
    var daysUntil = data[i][7];    // DaysUntilBirthday (Col H)

    // Send reminders 7, 3, and 1 day(s) before
    if (daysUntil == 7 || daysUntil == 3 || daysUntil == 1) {
      var message = "Dear Church Admin,\n\n" +
        "Reminder: " + name + " has a birthday coming up!\n\n" +
        "📅 Date: " + new Date(nextBirthday).toDateString() + "\n" +
        "📍 Emirate: " + emirate + "\n" +
        "📞 Phone: " + phone + "\n" +
        "📧 Email: " + memberEmail + "\n\n" +
        "Please prepare the flyer and celebration arrangements.";

      // Send to each admin with proper sender name
      adminRecipients.forEach(function(recipient) {
        MailApp.sendEmail({
          to: recipient,
          subject: subject,
          body: message,
          name: churchName   // ✅ Forces display name
        });
      });
    }
  }
}


