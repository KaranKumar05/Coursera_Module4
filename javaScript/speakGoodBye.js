(function (window) {
    let byeSpeaker = {};
    let speakWord = "GOOD BYE !";
    byeSpeaker.speak = function (names) {
        console.log(speakWord + " " + names);
    }
    window.byeSpeaker = byeSpeaker;
})(window);