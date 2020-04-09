// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]
// Updated for "what's that like?" game by Jason Gross

var elizaInitials = [
"What's on your mind?",
"What's up for you?",
"What's on the top of your awareness right now?",
"What's going on for you?"
];

var elizaFinals = [
"Goodbye.  Thank you for sharing."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"emotion": ["affectionate", "compassionate", "friendly", "loving", "open hearted", "sympathetic", "tender", "warm", "confident", "empowered", "open", "proud", "safe", "secure", "engaged", "absorbed", "alert", "curious", "engrossed", "enchanted", "entranced", "fascinated", "interested", "intrigued", "involved", "spellbound", "stimulated", "inspired", "amazed", "awed", "wonder ", "excited", "amazed", "animated", "ardent", "aroused", "astonished", "dazzled", "eager", "energetic", "enthusiastic", "giddy", "invigorated", "lively", "passionate", "surprised", "vibrant", "exhilarated", "blissful", "ecstatic", "elated", "enthralled", "exuberant", "radiant", "rapturous", "thrilled", "grateful", "appreciative", "moved", "thankful", "touched", "hopeful", "expectant", "encouraged", "optimistic", "joyful", "amused", "delighted", "glad", "happy", "jubilant", "pleased", "tickled", "peaceful", "calm", "clear headed", "comfortable", "centered", "content", "equanimous", "fulfilled", "mellow", "quiet", "relaxed", "relieved", "satisfied", "serene", "still", "tranquil", "trusting", "refreshed", "enlivened", "rejuvenated", "renewed", "rested", "restored", "revived", "afraid", "apprehensive", "dread", "foreboding", "frightened", "panicked", "petrified", "scared", "suspicious", "terrified", "wary", "worried", "anxious", "tense", "annoyed", "aggravated", "dismayed", "disgruntled", "displeased", "exasperated", "frustrated", "impatient", "irritated", "cranky", "angry", "enraged", "furious", "incensed", "indignant", "irate", "livid", "outraged", "resentful", "confused", "ambivalent", "baffled", "bewildered", "dazed", "hesitant", "lost", "mystified", "perplexed", "puzzled", "torn", "embarrassed", "ashamed", "chagrined", "flustered", "mortified", "self-conscious", "aversion", "animosity", "appalled", "contempt", "disgusted", "dislike", "hate", "horrified", "hostile", "repulsed", "yearning", "envious", "jealous", "longing", "nostalgic", "pining", "wistful", "disquiet", "agitated", "alarmed", "discombobulated", "disconcerted", "disturbed", "distressed", "perturbed", "rattled", "edgy", "restless", "shocked", "startled", "surprised", "troubled", "uncomfortable", "uneasy", "unsettled", "upset", "fatigue", "beat", "burnt out", "depleted", "exhausted", "lethargic", "listless", "sleepy", "tired", "weary", "worn out", "pain", "agony", "anguished", "bereaved", "devastated", "grief", "heartbroken", "hurt", "lonely", "miserable", "regret", "sad", "hopeless", "depressed", "dejected", "despair", "despondent", "disappointed", "discouraged", "disheartened", "forlorn"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "Please, go on.",
     "Say more.  What's that like?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "What's sorry like for you?",
     "What's saying sorry like for you?",
     "What's feeling sorry like for you?"
  ]]
]],
["apologise", 0, [
 ["*", [
     "What's apologizing like for you?"
  ]]
]],
["emotion", 3, [
 ["* @emotion *", [
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
 ]],
]],
["remember", 5, [
 ["* i remember *", [
     "What's remembering (2) like for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* do you remember *", [
     "What's that like?",
     "What's (2) like, for you?",
     "goto what"
  ]],
 ["* you remember *", [
     "What's that like?",
     "What's (2) like, for you?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "What's forgetting like?",
     "What's forgetting like for you, right now?",
     "What's forgetting (2) like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?"
  ]],
 ["* did you forget *", [
     "What's that like?",
     "What's (2) like, for you?",
     "goto what"
  ]]
]],
["if", 3, [
 ["* if *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "What was dreaming (2) like for you?",
     "What's dreaming like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What's it like to dream?",
     "What's it like to dream, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "What's uncertainty like for you?",
     "What's speculation like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["name", 15, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German.  Wie ist das?"
  ]]
]],
["foodtongue", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand FoodTongue.  Mango grass quiche?"
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French.  Qu'est-ce que c'est?"
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian.  Com'è?"
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish.  Como es eso?"
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English.  What's that like for you?"
  ]]
]],
["hello", 0, [
 ["*", [
     "Hello.  What's on your mind?",
     "Hi.  What's up for you?"
  ]]
]],
["computer", 50, [
 ["*", [
     "What are computers like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's it like to consider being (2)?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["are", 0, [
 ["* are you *", [
     "What's (2) like for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "What's (2) like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "What's it like to consider being (2)?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto what"
  ]],
 ["* i was *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "What's it like to have been (2)?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* was you *", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like, for you?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What's it like to want (3)?",
     "What's (3) like?",
     "What's (3) like for you?",
     "What's (3) like, for you?","What is (3) like?",
     "What is (3) like for you?",
     "What is (3) like, for you?",
     "(3).  What's that like?",
     "(3).  What's that like for you?",
     "(3).  What's that like, for you?",
     "(3).  What is that like?",
     "(3).  What is that like for you?",
     "(3).  What is that like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i am* @sad *", [
     "What's (3) like?",
     "What's (3) like for you?",
     "What's (3) like, for you?","What is (3) like?",
     "What is (3) like for you?",
     "What is (3) like, for you?",
     "(3).  What's that like?",
     "(3).  What's that like for you?",
     "(3).  What's that like, for you?",
     "(3).  What is that like?",
     "(3).  What is that like for you?",
     "(3).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i am* @happy *", [
     "What's (3) like?",
     "What's (3) like for you?",
     "What's (3) like, for you?","What is (3) like?",
     "What is (3) like for you?",
     "What is (3) like, for you?",
     "(3).  What's that like?",
     "(3).  What's that like for you?",
     "(3).  What's that like, for you?",
     "(3).  What is that like?",
     "(3).  What is that like for you?",
     "(3).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "What's (3) like?",
     "What's (3) like for you?",
     "What's (3) like, for you?","What is (3) like?",
     "What is (3) like for you?",
     "What is (3) like, for you?",
     "(3).  What's that like?",
     "(3).  What's that like for you?",
     "(3).  What's that like, for you?",
     "(3).  What is that like?",
     "(3).  What is that like for you?",
     "(3).  What is that like, for you?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i @cannot *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (3) like?",
     "What's (3) like for you?",
     "What's (3) like, for you?","What is (3) like?",
     "What is (3) like for you?",
     "What is (3) like, for you?",
     "What's it like to not (3)?",
     "What's it like to not be able to (3)?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i don't *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i feel *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* i * you *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* you* me *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* you *", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?"
  ]]
]],
["yes", 0, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "What's it like, that no one (2)?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["*", [
     "What's `no' like?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "Your (2).  What's that like?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* my* @family *", [
     "Family.  What's that like for you?",
     "(3).  What's that like?",
     "(3).  What's that like for you?",
     "(3).  What's that like, for you?",
     "(3).  What is that like?",
     "(3).  What is that like for you?",
     "(3).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* my *", [
     "Your (2).  What's that like?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]],
 ["* can i *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "What are reasons like, for you?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto what"
  ]],
 ["* why can't i *", [
     "What's it like to not (2)?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "What's (2) like, for you?",
     "What's (2) like?",
     "What's (2) like for you?",
     "What's (2) like, for you?","What is (2) like?",
     "What is (2) like for you?",
     "What is (2) like, for you?",
     "(2).  What's that like?",
     "(2).  What's that like for you?",
     "(2).  What's that like, for you?",
     "(2).  What is that like?",
     "(2).  What is that like for you?",
     "(2).  What is that like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?",
     "What's always like, for you?"
  ]]
]],
["alike", 10, [
 ["*", [
     "What's similarity like, for you?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "What's different like?",
     "What's that like?",
     "What's that like for you?",
     "What's that like, for you?",
     "What is that like?",
     "What is that like for you?",
     "What is that like, for you?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2.",
        /^\.\s+/, ""
];

// eof
