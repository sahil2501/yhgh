function startClassification() {
    navigator.mediaDevices.getUserMedia({
       audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wpjN3sPO_/model.json",modelReady);

}
 function modelReady() {
     classifier.classify(gotResults);
 }

 function gotResults(error, results) {
  if (error) {
    console.error(error);
  }
  else {
   console.log("Got Results");
   shades_of_red = Math.floor(Math.random() * 255) + 1;
   shades_of_green = Math.floor(Math.random() * 255) + 1;
   shades_of_blue = Math.floor(Math.random() * 255) + 1;

   document.getElementById("result_obj").innerHTML = "I Can Hear - " + results[0].label;
   document.getElementById("Accuracy_confidence").innerHTML = "Accuracy - " + (results[0].confidence *100).toFixed(2) + "%";
   document.getElementById("result_obj").style.color = "rgb(" + shades_of_red + "," + shades_of_green + "," + shades_of_blue + ")";
   document.getElementById("Accuracy_confidence").style.color = "rgb(" + shades_of_red + "," + shades_of_green + "," + shades_of_blue + ")";

   Background = document.getElementById("background");
   lion = document.getElementById("lion");
   cat = document.getElementById("cat");
  dog = document.getElementById("dog");
  
   if (results[0].label == "Background Noise") {
    Background.src = "background_.gif";
    cat.src = "cat.jpg";
    dog.src = "dog.jpg";
    lion.src = "lion.jpg";
   }
   else if (results[0].label == "Cat"){
     
    Background.src = "background.jpg";
    cat.src = "cat_.gif";
    dog.src = "dog.jpg";
    lion.src = "lion.jpg";
   }
   else if (results[0].label == "Dog"){
     
    Background.src = "background.jpg";
    cat.src = "cat.jpg";
    dog.src = "dog_.gif";
    lion.src = "lion.jpg";
   }
   else {
    
    Background.src = "background.jpg";
    cat.src = "cat.jpg";
    dog.src = "dog.jpg";
    lion.src = "lion.gif";
   }
  }
}

