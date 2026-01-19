const excuseBank = {
  "Late Assignment Submission": {
    low: [ 
      "My dog ate my Github repository sir.",
      "I compressed the file so hard it turned into a black hole. It is currently consuming my desktop icons.",
      "I accidentally pushed my code to a repository on Mars.",
      "I was stuck in a Time Loop where the deadline never arrived."
    ],
    medium: [ 
      "I uploaded my assignment to the cloud but due to heavy rain cloud was full.",
      "My Wi-Fi signal was stolen by the neighbors right when I hit submit.",
      "I forgot to hit the final 'Submit' button after uploading the file.",
      "The file corrupted itself the moment I tried to attach it to the email."
    ],
    high: [ 
      "My laptop decided to start a 2 hour Windows Update at 11:55 PM.",
      "We had a sudden power outage in my area and my router turned off.",
      "VS Code kept crashing every time I tried to export the final build.",
      "I was having legitimate internet connectivity issues with my ISP."
    ]
  },

  "Absent in Class": {
    low: [
      "My bed filed a kidnapping case against me",
      "I didn't skip the class, situation skipped me",
      "The floor was lava, I physically couldn't leave my room.",
      "I got lost in the hallway and ended up in a different dimension.",
      "My horoscope said I should avoid educational institutions today."
    ],
    medium: [
      "The day before, i slept in the middle of watching a motivational video",
      "My alarm went off, but in my dream, so I thought I was already awake.",
      "I couldn't find a matching pair of socks and it turned into an existential crisis.",
      "My bike didn't start and I couldn't find a ride in time."
    ],
    high: [
      "Wanted to attend the class but sudden life updation took place",
      "I woke up with a severe migraine and couldn't handle the screen light.",
      "I had to take a family member to the hospital unexpectedly.",
      "I wasn't feeling well and didn't want to risk spreading it."
    ]
  },

  "Missed Exam": {
    low: [
      "I left home 3 hours early, but I got stuck in a traffic jam at Koteshwor. I aged 4 years in that jam. I am now too old to take this exam",
      "A wizard blocked my path and demanded I answer three riddles first.",
      "I thought the exam was online so I waited in a Zoom meeting for 2 hours.",
      "I was abducted by aliens, but they brought me back because I talk too much."
    ],
    medium: [
      "My Pathao rider followed Google Maps into a river. We are safe, but my admit card is wet ",
      "I got on a bus going in the complete opposite direction by mistake.",
      "My alarm didn't ring because my phone battery died overnight.",
      "I misread the routine and thought the exam was tomorrow."
    ],
    high: [
      "I sat in the wrong exam hall for 45 minutes taking a Nursing exam. I am an IT student. I was too polite to leave.",
      "There was a massive protest blocking the main road and no vehicles were moving.",
      "I had sudden food poisoning this morning.",
      "I had a high fever and was physically unable to travel."
    ]
  },

  "Stuff against college code and conduct": {
    low: [
      "Quite and neutral hours don't apply for main characters energy",
      "My vibes were to loud for building codes",
      "The cafeteria food made me do it.",
      "I was possessed by the spirit of a rebellious senior."
    ],
    medium: [
      "I was showing the he plot twist",
      "I didn't read the updated student handbook.",
      "I was just testing the limits of the system.",
      "I thought that rule was just a 'suggestion'."
    ],
    high: [
      "It was just a prank",
      "I genuinely misunderstood the instructions given by the staff.",
      "I wasn't aware that specific area was off-limits to students.",
      "It was a misunderstanding, I wasn't trying to be disruptive."
    ]
  }
};

const generatebtn = document.querySelector("button")
const excusetype = document.querySelector("#reason");
const teachermood = document.querySelector("#mood")
const levelrange = document.querySelector("input[type='range']")
const excusetxt = document.querySelector(".excuse")
const believability = document.querySelector(".info span:first-child")
const reaction = document.querySelector(".info span:last-child")

generatebtn.addEventListener("click", () => {
    const selectedtype = excusetype.value
    
    if (!selectedtype || !excuseBank[selectedtype]) {
      excusetxt.textContent = "Please select a valid reason."
      return;
    }

    const level = parseInt(levelrange.value);
    let specificExcuses = [];

    if (level <= 3) {
        specificExcuses = excuseBank[selectedtype].low;
    } else if (level <= 7) {
        specificExcuses = excuseBank[selectedtype].medium;
    } else {
        specificExcuses = excuseBank[selectedtype].high;
    }

    const randomexcuse = specificExcuses[Math.floor(Math.random() * specificExcuses.length)]
    excusetxt.textContent = `"${randomexcuse}"`
    believability.textContent = `🎓 Believability : ${level}/10`;

    if(teachermood.value === "Happy"){
        reaction.textContent = "Reaction : 🤗Probably Accepts"
    }
    else if(teachermood.value === "Neutral"){
        reaction.textContent = "Reaction : 🤔Suspicious"
    }
    else if(teachermood.value === "Angry"){
        reaction.textContent = "Reaction : 😑Distrust & Irritated"
    }
    else {
        reaction.textContent = "Reaction : 😶 Unknown"
    }
});