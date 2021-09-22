(function (window) {
  var names = ["Yaakov", "Vibhin", "Sam", "Jack", "Mu", "Reema", "Sam", "Paul", "Ken", "Shree"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

