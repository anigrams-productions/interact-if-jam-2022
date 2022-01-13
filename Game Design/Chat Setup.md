# Chat Setup

Need to keep track of:
* log: array of objects { speaker: (bot or null for user/player character), text: string (can be HTML), timestamp: datetime }
    * populates "speech bubbles" in chat
* bot: object { name: string, image: string, status: string, family: object { spouse: object { name: string, gender: string }, kids: array of objects { name: string, gender: string, age: integer } } }
    * may be procedurally generated, cannot be changed once the game begins
    * status is always "online"
* user: object { image: string, status: string }
    * image is chosen randomly from presets but can be changed
    * may be able to change status for kicks (for example, if you change your status to "offline", your coworker may give you a hard time saying "I know you're still there" or they might freak out thinking you've abandoned them in their time of need)
* botIsTyping: boolean
    * if true, show (animated?) "..." bubble
    * is set to true for some amount of time per character before bot message is officially pushed to log array
* context: string
    * determines which section of dialogue to look in for intent
    * examples: "greeting", "diagnoseProblem1", etc.
* intent: string
    * determines which dialoge for bot to "respond" with
    * picked out from user input -> highlight if possible
* userInput: string
    * variable to store text entered into text input field, may be "processed" before pushing to log array
    * need to sanitize input (remove HTML entered by user unless it's in code block)
    * translate markup into HTML (bold, italics, etc.)
        * need to support code block markup?
* startTime: datetime
    * always set to 12/24 of current year at 5pm
    * used to calculate timestamp of each log message
* timeElapsed: integer
    * number of seconds since page load (assumed to be when the Prod outage started)
    * added to startTime to calculate timestamp of each log message
    * displayed on screen (formatted in hours and minutes) to give user/player a sense of how long Prod has been down
    * [trigger function every x seconds in Vue.js](https://stackoverflow.com/questions/49849376/vue-js-triggering-a-method-function-every-x-seconds)
* (optional) previousTimeElapsed: integer
    * stored in local browser storage to keep track of user's previous "score" based on how much time elapsed, so the user can try to "beat" their previous "score"
* costOfSales: integer
    * dollar amount of sales "lost" because of outage (in whole dollars, no decimals)
    * displayed on screen to give user/player a sense of the monetary cost of their actions
    * increased by some random amount ($0-$100) each second
* allowedToSendLogs: boolean
    * determines whether to send log when user inputs something not recognized (to help me improve the app by seeing what people type that I didn't expect)
    * should give user opportunity to accept (true) or decline (false) on app load
        * also include in Settings


Other considerations:
* Type "hint" to prompt bot to reply with some dialogue that helps to point the user in the right direction
* Include array of possible matching words in translation file