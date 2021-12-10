document.addEventListener("keydown", function (event) {
    if (event.key == "A") {
        console.log("The 'A' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_A.mp3";
        audio.play();
    } else if (event.key == "S") {
        console.log("The 'S' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_S.mp3";
        audio.play();
    } else if (event.key == "D") {
        console.log("The 'D' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_D.mp3";
        audio.play();
    } else if (event.key == "F") {
        console.log("The 'F' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_F.mp3";
        audio.play();
    } else if (event.key == "G") {
        console.log("The 'G' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_G.mp3";
        audio.play();
    } else if (event.key == "H") {
        console.log("The 'H' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_H.mp3";
        audio.play();
    } else if (event.key == "J") {
        console.log("The 'J' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "major_J.mp3";
        audio.play();
    } else if (event.key == "W") {
        console.log("The 'W' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "konon_W.mp3";
        audio.play();
    } else if (event.key == "E") {
        console.log("The 'E' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "konon_E.mp3";
        audio.play();
    } else if (event.key == "T") {
        console.log("The 'T' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "konon_T.mp3";
        audio.play();
    } else if (event.key == "Y") {
        console.log("The 'Y' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "konon_Y.mp3";
        audio.play();
    } else if (event.key == "U") {
        console.log("The 'U' key is pressed");
        let audio = document.createElement("AUDIO");
        audio.src = "konon_U.mp3";
        audio.play();
    } else if (event.key !== "A" && event.key !== "S" && event.key !== "D" && event.key !== "F" && event.key !== "G" && event.key !== "H" && event.key !== "J" && event.key !== "W" && event.key !== "E" && event.key !== "T" && event.key !== "Y" && event.key !== "U") {
        console.log("Wrong key");
    }
});