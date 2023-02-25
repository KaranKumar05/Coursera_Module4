(function (window) {  
    let helloSpeaker = {};
    let speakWord = "HELLO !";
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);