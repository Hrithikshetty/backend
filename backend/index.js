const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/jokes', (req, res) => {
const jokes = [
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3y2gz5/a_deaf_couple_wants_to_know_when_to_have_sex/",
          "score": 3887,
          "part1": "A deaf couple wants to know when to have sex...",
          "mature": true,
          "author": "Servedabitch2times",
          "part2": "The wife says, \"If you want to have sex, squeeze my tits once.  If you don't want to have sex, squeeze my tits twice.\"    The husband says, \"OK if you want to have sex, pull my dick once.  If you don't want to have sex, pull my dick 437 times.\""
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3rqx4e/my_mom_laughed_at_me_when_i_said_i_was_going_to/",
          "score": 3887,
          "part1": "My mom laughed at me when I said I was going to build a car out of spaghetti.",
          "mature": false,
          "author": "CurrentlyCurious",
          "part2": "You should have seen her face as I drove pasta."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/33qli6/no_one_should_have_been_surprised_by_the_rise_of/",
          "score": 3889,
          "part1": "No one should have been surprised by the rise of the USSR after World War II.",
          "mature": false,
          "author": "Waltzer64",
          "part2": "I mean, there were red flags everywhere."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3ullvl/photographers_are_so_violent/",
          "score": 3882,
          "part1": "Photographers are so violent.",
          "mature": false,
          "author": "bean9914",
          "part2": "They'll frame you, shoot you, blow you up and then hang you."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/42r97c/john_cena_woke_up_from_a_coma/",
          "score": 3874,
          "part1": "John Cena woke up from a coma",
          "mature": false,
          "author": "B4ItSkl8s",
          "part2": "John Cena: Where am I?  Nurse: ICU  John Cena: No you don't.  "
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/4ce9ff/a_guy_was_walking_to_a_bar_and_on_his_way_he/",
          "score": 3869,
          "part1": "A guy was walking to a bar and on his way he found a girl tied up to the railroad tracks.",
          "mature": true,
          "author": "gammaplay",
          "part2": "He untied her and they had sex. Guy gets to the bar, friends ask why he's so late, tells them about the girl he found and all the different positions they fucked in. Friends give him props and ask if he got head, guy replies \"I couldn't find it.\""
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/2n8yal/i_saw_denzel_washington_on_the_street_today/",
          "score": 3870,
          "part1": "I saw Denzel Washington on the street today.",
          "mature": false,
          "author": "ChipotleAddiction",
          "part2": "I said \"Hey Denzel! Can I get a picture with you?\" And he's all like \"I'm not Denzel Washington you racist piece of shit.\" Classic Denzel."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/4mgt31/so_i_walk_in_on_daughter_masturbating_with_a/",
          "score": 3861,
          "part1": "So, I walk in on daughter masturbating with a carrot.",
          "mature": false,
          "author": "Pengyvan",
          "part2": "I shout, \"Fuck! Seriously? I was going to eat that later, and now it's just going to taste like carrots!\""
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3gv76d/breaking_news_a_man_who_took_an_airline_company/",
          "score": 3867,
          "part1": "BREAKING NEWS: A man who took an Airline company to court after his luggage went missing has lost his case.",
          "mature": false,
          "author": "Linalg2",
          "part2": ""
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/4bhurd/if_caitlyn_jenner_were_a_super_hero_what_team/",
          "score": 3858,
          "part1": "If Caitlyn Jenner were a super hero, what team would she be on?",
          "mature": false,
          "author": "AbominaSean",
          "part2": "The Ex-Men."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3s9xb3/my_girlfriend_of_5_years_asked_me/",
          "score": 3859,
          "part1": "My girlfriend of 5 years asked me...",
          "mature": false,
          "author": "PM_ME_UR_RITO_CODES",
          "part2": "My girlfriend of 5 years asked me when was the last time I had sex with someone before her.      I said \"back in '09\". It sounds much better than saying September."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/2r7tr8/a_mathematician_stumbles_home_drunk_at_3_am/",
          "score": 3857,
          "part1": "A mathematician stumbles home drunk at 3 a.m.",
          "mature": false,
          "author": "smeltfisher",
          "part2": "...and his wife is livid.  \u201cYou SWORE that you\u2019d be home by 11:45!\u201d  \"No,\" slurs the mathematician...   \u201cI said I\u2019d be home by a quarter of 12.\u201d"
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/4or8y7/ive_just_been_molested_by_a_group_of_mime_artists/",
          "score": 3864,
          "part1": "Ive just been molested by a group of mime artists...",
          "mature": false,
          "author": "X0AN",
          "part2": "They did unspeakable things to me."
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/4uzvv0/the_difference_between_beforeafter_getting_hired/",
          "score": 3860,
          "part1": "The difference between before/after getting hired",
          "mature": false,
          "author": "Beatorexac",
          "part2": "When Timmy went in for an interview at ABC company, he was hired after a very brief interview. A little skeptical at first, Timmy asked the company representative a few questions.  It went like this:  ABC: Trust me, this company could really use someone new  Timmy: If there is too much work, I'm going to quit...  ABC: We'd NEVER let something like that happen  Timmy: Do employees get every Saturday and Sunday off?  ABC: That's a granted.  Timmy: Are employees required to work overtime without pay?  ABC: No way. Where did you even come up with such a ridiculous idea?  Timmy: Are meals subsidized?  ABC: You BET.  Timmy: Do the new employees usually end up doing ALL the work?  ABC: That's impossible. There are so many other experienced people in our company.  Timmy: If I did well, would I ever become a manager?  ABC: Yes. Absolutely.  Timmy: Wow. Is this for real?  After working there for several months, Timmy noticed that the job wasn't panning out the way he had been promised. Quite upset, he went to file a complaint to the HR dept. The next day, Timmy was summoned into the management's office, where they threatened to fire him for voicing out.  To see his conversation with the management, read the conversation above again.... from the bottom to the top.  "
        },
        {
          "link": "https://www.reddit.com/r/Jokes/comments/3ugdrv/why_cant_pirates_learn_the_alphabet/",
          "score": 3853,
          "part1": "Why can't pirates learn the alphabet?",
          "mature": false,
          "author": "numbermaniac",
          "part2": "Because they spend years at C."
        }
]
res.send(jokes)
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
