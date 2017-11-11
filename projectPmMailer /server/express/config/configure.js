//forgot password
module.exports = {
    'OnSuccessRedirect': 'http://localhost:4200/set/',
    'OnFailureRedirect': 'http://localhost:4200/forgot',
    'resetLinkUrl': 'http://localhost:3000/resetPwd/reset/',
    'serviceProvider': 'gmail',
    'mailSendingId': 'personalizedemailer@gmail.com',
    'mailSendingPass': 'niit@123',
    'tokenValidity': 3600000,
    'CRONTIME': [
        '00 09 12 * * *',
        '00 30 11 * * 1',
        '00 30 10 10 * *',
    ],
    'FREQUENCY': [
        'Daily',
        'Weekly',
        'Monthly'
    ]
}