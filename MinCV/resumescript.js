// Contact info

fetch("resume.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#phones").innerHTML = data.contact.phone;
    document.querySelector("#emails").innerHTML = data.contact.email;
    document.querySelector("#links").innerHTML = data.contact.link;
    document.querySelector("#faces").innerHTML = data.contact.face;

    // Education

    document.querySelector("#eduyear").innerHTML = data.education[0].year;
    document.querySelector("#edudegree").innerHTML = data.education[0].degree;
    document.querySelector("#eduschool").innerHTML = data.education[0].school;
    document.querySelector("#eduyear1").innerHTML = data.education[1].year;
    document.querySelector("#edudegree1").innerHTML = data.education[1].degree;
    document.querySelector("#eduschool1").innerHTML = data.education[1].school;

    // Interest

    document.querySelector("#igame").innerHTML = data.interest.game;
    document.querySelector("#isports").innerHTML = data.interest.Sports;
    document.querySelector("#ibooks").innerHTML = data.interest.books;
    document.querySelector("#imovies").innerHTML = data.interest.movies;

    // About

    document.querySelector(".para").innerHTML = data.about.me;

    // Experience

    document.querySelector("#cyear").innerHTML = data.experience[0].year;
    document.querySelector("#company").innerHTML = data.experience[0].place;
    document.querySelector("#cposition").innerHTML =
      data.experience[0].position;
    document.querySelector("#cabout").innerHTML = data.experience[0].about;

    document.querySelector("#cyear1").innerHTML = data.experience[1].year;
    document.querySelector("#company1").innerHTML = data.experience[1].place;
    document.querySelector("#cposition1").innerHTML =
      data.experience[1].position;
    document.querySelector("#cabout1").innerHTML = data.experience[1].about;

    document.querySelector("#cyear2").innerHTML = data.experience[2].year;
    document.querySelector("#company2").innerHTML = data.experience[2].place;
    document.querySelector("#cposition2").innerHTML =
      data.experience[2].position;
    document.querySelector("#cabout2").innerHTML = data.experience[2].about;

    document.querySelector("#cyear3").innerHTML = data.experience[3].year;
    document.querySelector("#company3").innerHTML = data.experience[3].place;
    document.querySelector("#cposition3").innerHTML =
      data.experience[3].position;
    document.querySelector("#cabout3").innerHTML = data.experience[3].about;

    document.querySelector("#cyear4").innerHTML = data.experience[4].year;
    document.querySelector("#company4").innerHTML = data.experience[4].place;
    document.querySelector("#cposition4").innerHTML =
      data.experience[4].position;
    document.querySelector("#cabout4").innerHTML = data.experience[4].about;
  });

/*fetch("resume.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendExperience(data.experience);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendExperience(experience) {
  let mainContainer = document.getElementById("box");
  for (let i = 0; i < experience.length; i++) {
    let div = document.createElement("div");
    div.innerHTML =
      "<h4>" +
      experience[i].year +
      "</h4><p><strong>" +
      experience[i].place +
      "</strong><br>" +
      experience[i].position +
      "</p><p>" +
      experience[i].about +
      "</p>";
    mainContainer.appendChild(div);
  }
}*/
