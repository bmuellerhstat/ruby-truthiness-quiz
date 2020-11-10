// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Truthiness Quiz!!",
        "main":    "<p>Think you understand Truthiness? Let's find out with this little quiz!</p>",
        "results": "",
        "level1":  "Truthiness Expert",
        "level2":  "Truthiness Contender",
        "level3":  "Truthiness Amateur",
        "level4":  "Truthiness Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "false && true",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 2 - Multiple Choice, Single True Answer
            "q": "true && true",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 3 - Multiple Choice, Single True Answer
            "q": "&quot;test&quot; == &quot;test&quot;",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 4 - Multiple Choice, Single True Answer
            "q": "10 == 10 || 20 != 10",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 5 - Multiple Choice, Single True Answer
            "q": "10 == 10 && 20 == 10",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 6 - Multiple Choice, Single True Answer
            "q": "true && 10 == 10",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 7 - Multiple Choice, Single True Answer
            "q": "true || 10 == 10",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 8 - Multiple Choice, Single True Answer
            "q": "false && 10 != 10",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 9 - Multiple Choice, Single True Answer
            "q": "&quot;boolean&quot; == &quot;booleans&quot;",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 10 - Multiple Choice, Single True Answer
            "q": "&quot;boolean&quot; != &quot;booleans&quot;",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 11 - Multiple Choice, Single True Answer
            "q": "10 != 0 && 20 == 10",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 12 - Multiple Choice, Single True Answer
            "q": "&quot;boolean&quot; == 1",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 13 - Multiple Choice, Single True Answer
            "q": "!(true && false)",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 14 - Multiple Choice, Single True Answer
            "q": "!(1000 == 1 || 10000 == 10000)",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 15 - Multiple Choice, Single True Answer
            "q": "!(10 == 10 && 20 != 10)",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 16 - Multiple Choice, Single True Answer
            "q": "!(1 != 100 || 30 == 40)",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 17 - Multiple Choice, Single True Answer
            "q": "!(&quot;boolean&quot; == &quot;booleans&quot; && &quot;Code&quot; == &quot;Fun&quot;)",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 18 - Multiple Choice, Single True Answer
            "q": "1 == 1 && (!(&quot;boolean&quot; == 1 || 1 == 0))",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        },
        { // Question 19 - Multiple Choice, Single True Answer
            "q": "&quot;strong&quot; == &quot;coffee&quot; && (!(30 == 40 || 30 == 30))",
            "a": [
                {"option": "true",      "correct": false},
                {"option": "false",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> False.",
            "incorrect": "<p><span>Umm no.</span></p> It's false." // no comma here
        },
        { // Question 20 - Multiple Choice, Single True Answer
            "q": "30 == 30 && (!(&quot;boolean&quot; == &quot;booleans&quot; || &quot;Coding&quot; == &quot;Awesome&quot;))",
            "a": [
                {"option": "true",      "correct": true},
                {"option": "false",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> True.",
            "incorrect": "<p><span>Umm no.</span></p> It's true." // no comma here
        }
        
    ]
};
