const COMMON = new Set(['123456789', 'chocolate', 'password1', 'butterfly', 'liverpool', '1234567890', 'basketball', 'elizabeth', 'tinkerbell', '987654321', 'spongebob', 'alexandra', 'beautiful', 'alexander', 'christian', 'princess1', 'alejandro', 'alejandra', 'stephanie', 'mahalkita', 'september', 'iloveyou2', 'hellokitty', 'babygirl1', 'iloveyou1', 'sebastian', 'spiderman', 'christopher', '0123456789', 'barcelona', '789456123', 'volleyball', 'chrisbrown', 'strawberry', 'qwertyuiop', 'superstar', 'harrypotter', 'christine', 'katherine', 'metallica', 'catherine', 'slideshow', 'asdfghjkl', 'sweetheart', '12345678910', 'teddybear', 'christina', '147258369', 'charlotte', 'francisco', 'manchester', 'linkinpark', 'bestfriend', 'estrellita', '999999999', 'california', 'sunflower', 'friendster', 'valentina', 'sunshine1', 'darkangel', 'bettyboop', 'bestfriends', 'daddysgirl', 'billabong', 'buttercup', 'tokiohotel', 'bubblegum', 'sexybitch', 'football1', 'margarita', 'undertaker', 'capricorn', 'cheerleader', 'password2', 'scoobydoo', 'michelle1', 'cinderella', 'jesuschrist', 'ilovejesus', 'princesita', 'jesucristo', '741852963', 'hernandez', 'hollywood', '0987654321', 'pineapple', 'christmas', 'butterfly1', 'friendship', 'sweetness', '147852369', 'iloveyou!', '123123123', 'cassandra', 'simpleplan', 'hollister', 'lovehurts', 'rodriguez', 'diosesamor'])

module.exports = function (s) {
  return (typeof s === 'string') &&
    (s.length >= 9) &&
    (s.length <= 72) &&
    !COMMON.has(s)
}
