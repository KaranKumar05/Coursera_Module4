(function () {
  let names = ["Karan", "Alpha", "Jin", "Alina", "Umer", "Manzi", "Hiten", "Ibrar", "Ahsan", "Jimmy"];
  for (let i = 0; i < names.length; i++) {

    let firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    }
    else {
      helloSpeaker.speak(names[i]);
    }
  }
})();