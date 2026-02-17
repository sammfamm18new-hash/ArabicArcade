const games = [
  {
    id: "slope",
    name: "Slope",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/slope/index.html",
    badge: "Velocity",
    description: "Quantum-speed runs through an endless glass chute. Keep the signal aligned.",
  },
  {
    id: "slope2",
    name: "Slope 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/slope2/index.html",
    badge: "Velocity",
    description: "Sharper drops and faster turns on an upgraded neon track.",
  },
  {
    id: "minecraft",
    name: "Minecraft",
    url: "EaglercraftX_1.8_u53_Offline_Signed.html",
    badge: "Sandbox",
    description: "Build, survive, and explore the block world.",
  },
  {
    id: "bitlife",
    name: "BitLife",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/bitlife/index.html",
    badge: "Simulation",
    description: "A full-life sim rendered in neon data. Push every choice to the edge.",
  },
  {
    id: "amongus",
    name: "Among Us",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/amongus/index.html",
    badge: "Social",
    description: "Find the imposter and survive the neon ship.",
  },
  {
    id: "driftboss",
    name: "Drift Boss",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/driftboss/index.html",
    badge: "Drift",
    description: "Chain perfect drifts across floating tracks. Momentum is the only currency.",
  },
  {
    id: "drifthunters",
    name: "Drift Hunters",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/drifthunters/index.html",
    badge: "Drift",
    description: "Tune your cars and chase perfect drifts on neon tracks.",
  },
  {
    id: "aquaparkslides",
    name: "Aquapark Slides",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/aquaparkslides/index.html",
    badge: "Ride",
    description: "Slide down neon water tracks and outpace the crowd.",
  },



  {
    id: "yohoho",
    name: "Yohoho.io",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/yohoho/index.html",
    badge: "Arena",
    description: "Pirate brawls in a neon arena. Harvest energy and dominate the map.",
  },
  {
    id: "snowbattleio",
    name: "Snowbattle.io",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/snowbattleio/index.html",
    badge: "Arena",
    description: "Snowball arena battles with fast dodges and power-ups.",
  },
  {
    id: "basketrandom",
    name: "Basket Random",
    url: "https://sammfamm18new-hash.github.io/basketrandom/",
    badge: "Sports",
    description: "Chaotic one-button basketball duels with wild physics.",
  },
  {
    id: "ahmadsrealestategame",
    name: "Ahmads Real Estate Game",
    url: "https://sammfamm18new-hash.github.io/REG/",
    badge: "Tycoon",
    description: "Build a property empire and grow your real estate business.",
  },
  {
    id: "cookieclicker",
    name: "Cookie Clicker",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/cookieclicker/index.html",
    badge: "Idle",
    description: "Forge a cookie empire inside a glowing factory line.",
  },
  {
    id: "2048",
    name: "2048",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/2048/index.html",
    badge: "Logic",
    description: "Merge tiles and push the stack toward the singularity.",
  },
  {
    id: "minesweeper",
    name: "Minesweeper",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/minesweeper/index.html",
    badge: "Logic",
    description: "Clear the grid without hitting a mine.",
  },
  {
    id: "solitaire",
    name: "Solitaire",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/solitaire/index.html",
    badge: "Card",
    description: "Classic solitaire with clean neon cards and smooth play.",
  },
  {
    id: "wordle",
    name: "Wordle",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/wordle/index.html",
    badge: "Word",
    description: "Guess the five-letter word in six tries.",
  },
  {
    id: "tetris",
    name: "Tetris",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/tetris/index.html",
    badge: "Puzzle",
    description: "Stack falling blocks and keep the neon grid alive.",
  },
  {
    id: "theimpossiblequiz",
    name: "The Impossible Quiz",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/theimpossiblequiz/index.html",
    badge: "Quiz",
    description: "Trick questions and fast reactions in a neon quiz gauntlet.",
  },
  {
    id: "pacman",
    name: "Pac-Man",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/pacman/index.html",
    badge: "Arcade",
    description: "Navigate a neon maze and outrun the signal hunters.",
  },
  {
    id: "rooftop",
    name: "Rooftop Snipers",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/rooftop/index.html",
    badge: "Duel",
    description: "Physics duels above the skyline. Stay standing.",
  },
  {
    id: "getawayshootout",
    name: "Getaway Shootout",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/getawayshootout/index.html",
    badge: "Duel",
    description: "Chaotic jump-and-shoot races to the getaway.",
  },
  {
    id: "stickmanhook",
    name: "Stickman Hook",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/stickmanhook/index.html",
    badge: "Swing",
    description: "Swing through glass canyons with precision momentum.",
  },
  {
    id: "stealingthediamond",
    name: "Stealing the Diamond",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/stealingthediamond/index.html",
    badge: "Adventure",
    description: "Choose your moves and pull off the ultimate heist.",
  },
  {
    id: "escapingtheprison",
    name: "Escaping the Prison",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/escapingtheprison/index.html",
    badge: "Adventure",
    description: "Make the right choices to break out and outsmart guards.",
  },
  {
    id: "rooftop2",
    name: "Rooftop Snipers 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/rooftop2/index.html",
    badge: "Duel",
    description: "Return to the rooftops with sharper aim and heavier gravity.",
  },
  {
    id: "retrobowl",
    name: "Retro Bowl",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/retrobowl/index.html",
    badge: "Sport",
    description: "Lead a pixel squad with tactical play calls and big throws.",
  },
  {
    id: "paperio2",
    name: "Paper.io 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/paperio2/index.html",
    badge: "Territory",
    description: "Carve neon territory lines and expand your domain.",
  },
  {
    id: "paperio3",
    name: "Paper.io 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/paperio3d/index.html",
    badge: "Territory",
    description: "New arenas and faster territory battles in a neon grid.",
  },
  {
    id: "vex",
    name: "Vex",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex/index.html",
    badge: "Platform",
    description: "Precision platforming through lethal glass corridors.",
  },
  {
    id: "vex2",
    name: "Vex 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex2/index.html",
    badge: "Platform",
    description: "Sharper traps and faster runs across neon stages.",
  },
  {
    id: "vex3",
    name: "Vex 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex3/index.html",
    badge: "Platform",
    description: "New acts, tighter jumps, and faster wall kicks.",
  },
  {
    id: "vex4",
    name: "Vex 4",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex4/index.html",
    badge: "Platform",
    description: "Precision trials with lethal lasers and speed boosts.",
  },
  {
    id: "vex5",
    name: "Vex 5",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex5/index.html",
    badge: "Platform",
    description: "Advanced acts with more traps and secret routes.",
  },
  {
    id: "vex6",
    name: "Vex 6",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex6/index.html",
    badge: "Platform",
    description: "Even tougher obstacle courses with rapid movement.",
  },
  {
    id: "vex7",
    name: "Vex 7",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/vex7/index.html",
    badge: "Platform",
    description: "Latest challenge set with high-speed platform runs.",
  },
  {
    id: "basketbros",
    name: "BasketBros",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/basketbrosio/index.html",
    badge: "Sport",
    description: "Fast dunk battles in a neon-lit arena.",
  },
  {
    id: "soccerrandom",
    name: "Soccer Random",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/soccerrandom/index.html",
    badge: "Sport",
    description: "Chaotic one-button soccer with shifting physics.",
  },
  {
    id: "stairrace3d",
    name: "Stair Race 3D",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/stairrace3d/index.html",
    badge: "Runner",
    description: "Collect steps and race to the top in neon speed runs.",
  },
  {
    id: "monopoly",
    name: "Monopoly",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/monopoly/index.html",
    badge: "Board",
    description: "Buy, trade, and dominate the neon city board.",
  },
  {
    id: "papasburgeria",
    name: "Papa's Burgeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papasburgeria/index.html",
    badge: "Cook",
    description: "Build burgers at hyperspeed and keep every order clean.",
  },
  {
    id: "papassushiria",
    name: "Papa's Sushiria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papassushiria/index.html",
    badge: "Cook",
    description: "Slice, roll, and serve sushi with laser timing.",
  },
  {
    id: "papaspizzaria",
    name: "Papa's Pizzeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papaspizzaria/index.html",
    badge: "Cook",
    description: "Fire up the ovens and build perfect pies at speed.",
  },
  {
    id: "papasscooperia",
    name: "Papa's Scooperia",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papasscooperia/index.html",
    badge: "Cook",
    description: "Stack scoops, add toppings, and keep the line moving.",
  },
  {
    id: "shift",
    name: "Shift",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/shift/index.html",
    badge: "Puzzle",
    description: "Invert the world to solve monochrome platform puzzles.",
  },
  {
    id: "shift2",
    name: "Shift 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/shift2/index.html",
    badge: "Puzzle",
    description: "More mind-bending flips across black and white worlds.",
  },
  {
    id: "shift3",
    name: "Shift 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/shift3/index.html",
    badge: "Puzzle",
    description: "Harder flips and tougher logic in the shifting maze.",
  },
  {
    id: "shift4",
    name: "Shift 4",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/shift4/index.html",
    badge: "Puzzle",
    description: "The final shift with larger maps and tighter puzzles.",
  },
  {
    id: "helixjump",
    name: "Helix Jump",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/helixjump/index.html",
    badge: "Arcade",
    description: "Drop through glowing helixes with perfectly timed falls.",
  },
  {
    id: "colorswitch",
    name: "Color Switch",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/colorswitch/index.html",
    badge: "Arcade",
    description: "Tap through color gates and keep the rhythm going.",
  },
  {
    id: "tunnelrush",
    name: "Tunnel Rush",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/tunnelrush/index.html",
    badge: "Velocity",
    description: "Dodge neon obstacles in a high-speed tunnel.",
  },
  {
    id: "ovo",
    name: "OvO",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/ovo/index.html",
    badge: "Platform",
    description: "Precision parkour across neon arenas with tight controls.",
  },
  {
    id: "edgesurf",
    name: "Edge Surf",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/surf/index.html",
    badge: "Runner",
    description: "Dash through neon waves and dodge obstacles at speed.",
  },
  {
    id: "crossy",
    name: "Crossy Road",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/crossy/index.html",
    badge: "Arcade",
    description: "Hop through neon traffic lanes and survive the crossings.",
  },
  {
    id: "doodlejump",
    name: "Doodle Jump",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/doodlejump/index.html",
    badge: "Arcade",
    description: "Bounce upward through neon platforms and chase the high score.",
  },
  {
    id: "fruitninja",
    name: "Fruit Ninja",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fruitninja/index.html",
    badge: "Slice",
    description: "Slice through neon fruit storms with perfect timing.",
  },
  {
    id: "themehotel",
    name: "Theme Hotel",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/themehotel/index.html",
    badge: "Tycoon",
    description: "Build, expand, and manage the ultimate hotel tower.",
  },
  {
    id: "raftwars",
    name: "Raft Wars",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/raftwars/index.html",
    badge: "Action",
    description: "Turn-based raft battles—aim, upgrade, and sink opponents.",
  },
  {
    id: "dinogame",
    name: "Dino Game",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/dinogame/index.html",
    badge: "Runner",
    description: "Jump the neon cactus grid and keep the run alive.",
  },
  {
    id: "run",
    name: "Run 1",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/run/index.html",
    badge: "Runner",
    description: "Sprint through shifting tunnels and nail every jump.",
  },
  {
    id: "run2",
    name: "Run 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/run2/index.html",
    badge: "Runner",
    description: "Level up your reflexes with faster routes and bigger gaps.",
  },
  {
    id: "run3",
    name: "Run 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/run3/index.html",
    badge: "Runner",
    description: "Orbit through the void and master gravity-defying runs.",
  },
  {
    id: "boxingrandom",
    name: "Boxing Random",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/boxingrandom/index.html",
    badge: "Sport",
    description: "Randomized boxing chaos with one‑button swings.",
  },
  {
    id: "bigredbutton",
    name: "Big Red Button",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/bigredbutton/index.html",
    badge: "Puzzle",
    description: "Press the button and survive the weird consequences.",
  },
  {
    id: "tinyfishing",
    name: "Tiny Fishing",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/tinyfishing/index.html",
    badge: "Idle",
    description: "Cast deep, collect rare fish, and upgrade your gear.",
  },
  {
    id: "stack",
    name: "Stack",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/stack/index.html",
    badge: "Arcade",
    description: "Drop perfect stacks and keep the tower rising.",
  },
  {
    id: "snowrider3d",
    name: "Snow Rider 3D",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/snowrider3d/index.html",
    badge: "Ride",
    description: "Slide through winter runs and dodge icy hazards.",
  },
  {
    id: "snake",
    name: "Snake",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/snake/index.html",
    badge: "Classic",
    description: "Eat, grow, and dodge the walls in a neon arena.",
  },
  {
    id: "rocketsoccer",
    name: "Rocket Soccer",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/rocketsoccer/index.html",
    badge: "Sport",
    description: "Boosted car soccer battles in a neon arena.",
  },
  {
    id: "fnaf1",
    name: "FNAF 1",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fnaf/index.html",
    badge: "Horror",
    description: "Survive the night in the original animatronic thriller.",
  },
  {
    id: "fnaf2",
    name: "FNAF 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fnaf-2/index.html",
    badge: "Horror",
    description: "New shifts, new threats, and more cameras to watch.",
  },
  {
    id: "fnaf3",
    name: "FNAF 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fnaf-3/index.html",
    badge: "Horror",
    description: "Face the legacy in a haunted attraction setting.",
  },
  {
    id: "deathrun3d",
    name: "Death Run 3D",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/deathrun3d/index.html",
    badge: "Runner",
    description: "Dodge hazards and time your runs through neon trap lanes.",
  },
  {
    id: "fnaf4",
    name: "FNAF 4",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fnaf-4/index.html",
    badge: "Horror",
    description: "Night terrors, close doors, and listen carefully.",
  },
  {
    id: "fnf",
    name: "Friday Night Funkin'",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fnf/index.html",
    badge: "Rhythm",
    description: "Hit the beats and win neon rap battles.",
  },
  {
    id: "ducklife1",
    name: "Duck Life 1",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/ducklife/index.html",
    badge: "Training",
    description: "Train your duck and race to win the farm back.",
  },
  {
    id: "ducklife2",
    name: "Duck Life 2",
    url: "http://johnwick1113.github.io/OPENTHENOOR/games/ducklife2/index.html",
    badge: "Training",
    description: "Train new skills and compete across tougher races.",
  },
  {
    id: "ducklife3",
    name: "Duck Life 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/ducklife3/index.html",
    badge: "Training",
    description: "Build a team of ducks and conquer the tournament.",
  },
  {
    id: "ducklife4",
    name: "Duck Life 4",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/ducklife4/index.html",
    badge: "Training",
    description: "Train new teams and race through tougher circuits.",
  },
  {
    id: "ducklife5",
    name: "Duck Life 5",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/ducklife5/index.html",
    badge: "Training",
    description: "Push training further with new skills and faster races.",
  },
  {
    id: "dadish",
    name: "Dadish",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/dadish/index.html",
    badge: "Platform",
    description: "A radish dad on a mission through quirky platform levels.",
  },
  {
    id: "dadish2",
    name: "Dadish 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/dadish2/index.html",
    badge: "Platform",
    description: "More levels, more jokes, and tougher jumps.",
  },
  {
    id: "dadish3",
    name: "Dadish 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/dadish3/index.html",
    badge: "Platform",
    description: "New worlds and faster platforming challenges.",
  },
  {
    id: "learntofly",
    name: "Learn To Fly",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/learntofly/index.html",
    badge: "Launch",
    description: "Upgrade your penguin flights and launch farther each run.",
  },
  {
    id: "learntofly2",
    name: "Learn To Fly 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/learntofly2/index.html",
    badge: "Launch",
    description: "Bigger ramps, more upgrades, and longer airborne runs.",
  },
  {
    id: "learntofly3",
    name: "Learn To Fly 3",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/learntofly3/index.html",
    badge: "Launch",
    description: "Build your launch setup and push into near-space distances.",
  },
  {
    id: "justfalllol",
    name: "Just Fall LOL",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/justfalllol/index.html",
    badge: "Party",
    description: "Multiplayer survival rounds where the floor keeps dropping.",
  },
  {
    id: "pokemondiamond",
    name: "Pokemon Diamond",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/pokemondiamond/index.html",
    badge: "RPG",
    description: "Explore Sinnoh, train your team, and challenge tough gyms.",
  },
  {
    id: "pokemonplatinum",
    name: "Pokemon Platinum",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/pokemonplatinum/index.html",
    badge: "RPG",
    description: "Enhanced Sinnoh journey with expanded zones and battles.",
  },
  {
    id: "fancypantsadventure2",
    name: "Fancy Pants Adventure 2",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/fancypantsadventure2/index.html",
    badge: "Platform",
    description: "Fast stickman platforming with smooth movement and secrets.",
  },
  {
    id: "amazingropepolice",
    name: "Amazing Rope Police",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/amazingropepolice/index.html",
    badge: "Action",
    description: "Open-city hero action with rope swings and mission chaos.",
  },
  {
    id: "papashotdoggeria",
    name: "Papa's Hot Doggeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papashotdoggeria/index.html",
    badge: "Cook",
    description: "Grill hot dogs and serve stadium crowds at top speed.",
  },
  {
    id: "papaspancakeria",
    name: "Papa's Pancakeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papaspancakeria/index.html",
    badge: "Cook",
    description: "Stack pancakes, top them right, and keep orders moving.",
  },
  {
    id: "papasfreezeria",
    name: "Papa's Freezeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papasfreezeria/index.html",
    badge: "Cook",
    description: "Blend frozen treats and nail every topping combo.",
  },
  {
    id: "papaswingeria",
    name: "Papa's Wingeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papaswingeria/index.html",
    badge: "Cook",
    description: "Fry wings, toss sauces, and plate perfect sides.",
  },
  {
    id: "papasdonuteria",
    name: "Papa's Donuteria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papasdonuteria/index.html",
    badge: "Cook",
    description: "Bake, fill, and decorate donuts with precision timing.",
  },
  {
    id: "papascheeseria",
    name: "Papa's Cheeseria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papascheeseria/index.html",
    badge: "Cook",
    description: "Grill loaded sandwiches and pair them with crispy sides.",
  },
  {
    id: "papascupcakeria",
    name: "Papa's Cupcakeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papascupcakeria/index.html",
    badge: "Cook",
    description: "Bake cupcakes, swirl frosting, and finish detailed orders.",
  },
  {
    id: "papasbakeria",
    name: "Papa's Bakeria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papasbakeria/index.html",
    badge: "Cook",
    description: "Craft pies from crust to toppings for busy holiday crowds.",
  },
  {
    id: "papaspastaria",
    name: "Papa's Pastaria",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papaspastaria/index.html",
    badge: "Cook",
    description: "Boil pasta, mix sauces, and build perfect dinner plates.",
  },
  {
    id: "papastacomia",
    name: "Papa's Tacomia",
    url: "https://johnwick1113.github.io/OPENTHENOOR/games/papastacomia/index.html",
    badge: "Cook",
    description: "Grill meats, prep shells, and serve packed taco orders.",
  },
];

const baseGames = games.map((game) => ({ ...game }));

const grid = document.getElementById("game-grid");
const ALLOWED_PREFIX = "https://johnwick1113.github.io/OPENTHENOOR/";
const FAVORITES_KEY = "tm_favorites";
const RECENTS_KEY = "tm_recents";
const THEME_KEY = "tm_theme";
const AMBIENT_KEY = "tm_ambient";
const USERNAME_KEY = "tm_username";
const LANG_KEY = "tm_lang";
const ACCENT_KEY = "tm_accent";
const DENSITY_KEY = "tm_density";
const MOTION_KEY = "tm_motion";
const PERFORMANCE_KEY = "tm_performance";
const LAYOUT_KEY = "tm_layout";
const FAVORITES_ORDER_KEY = "tm_favorites_order";
const APPS_ORDER_KEY = "tm_apps_order";
const ALL_GAMES_ORDER_KEY = "tm_all_games_order";
const CUSTOM_APPS_KEY = "tm_custom_apps";
const CUSTOM_GAMES_KEY = "tm_custom_games";
const XP_KEY = "tm_xp";
const XP_PROGRESS_KEY = "tm_xp_progress";
const RANK_KEY = "tm_rank";
const QUESTS_KEY = "tm_quests";
const DAILY_QUEST_KEY = "tm_daily_quest";
const STREAK_KEY = "tm_streak";
const LAST_PLAY_KEY = "tm_last_play";
const PLAYSTYLE_KEY = "tm_playstyle";
const PLAYED_GAMES_KEY = "tm_played_games";
const TM_KEY = "tm_dollars";
const SAVINGS_KEY = "tm_savings_balance";
const SAVINGS_ACCRUED_KEY = "tm_savings_accrued";
const SAVINGS_LAST_KEY = "tm_savings_last";
const SHOP_FAVORITES_KEY = "tm_shop_favorites";
const SHOP_WISHLIST_KEY = "tm_shop_wishlist";
const SHOP_PURCHASES_KEY = "tm_shop_purchases";
const COSMETICS_KEY = "tm_cosmetics";
const HUB_VISUALS_KEY = "tm_hub_visuals";
const MINI_QUEST_PROGRESS_KEY = "miniQuestProgress";
const HIDDEN_EASTER_EGGS_KEY = "hiddenEasterEggs";
const PURCHASED_THEMES_PUBLIC_KEY = "purchasedThemes";
const PURCHASED_VISUALS_PUBLIC_KEY = "purchasedVisuals";
const ACTIVE_THEME_PUBLIC_KEY = "activeTheme";
const PLAYSTYLE_SWITCH_KEY = "tm_playstyle_switch";
const PLAYSTYLE_DESC = {
  grinder: "Gain +10% XP over time.",
  explorer: "Earn +75 XP for each new game you try.",
  sweat: "Get +35% XP in hard games.",
  chill: "Double AFK tolerance but lower XP gain.",
  social: "Bonus XP for favoriting games.",
  builder: "Extra XP for custom games and apps.",
};
const TM_PROGRESS_KEY = "tm_dollars_progress";
const PASSIVE_XP_RATE_KEY = "tm_passive_xp_rate";
const PASSIVE_MONEY_RATE_KEY = "tm_passive_money_rate";
const LOCAL_MULTIPLIER_KEY = "tm_local_multiplier";
const DEBUG_PREVIEW_KEY = "tm_debug_preview";
const MINI_XP_TOGGLE_KEY = "tm_mini_xp_enabled";
const MINI_MONEY_TOGGLE_KEY = "tm_mini_money_enabled";
const MINI_VISUALS_TOGGLE_KEY = "tm_mini_visuals_enabled";
const MINI_SOUND_TOGGLE_KEY = "tm_mini_sound_enabled";
const ACHIEVEMENTS_KEY = "tm_local_achievements";
const PROFILE_STATS_KEY = "tm_profile_stats";
const EMERGENCY_URL_KEY = "tm_emergency_url";
const LOCK_PIN_HASH_KEY = "tm_lock_pin_hash";
const LOCK_PIN_SALT_KEY = "tm_lock_pin_salt";
const LOCK_PIN_LENGTH_KEY = "tm_lock_pin_length";
const LOCK_RECOVERY_HASH_KEY = "tm_lock_recovery_hash";
const LOCK_RECOVERY_SALT_KEY = "tm_lock_recovery_salt";
const LOCK_RECOVERY_HINT_KEY = "tm_lock_recovery_hint";
const LOCK_SESSION_UNLOCKED_KEY = "tm_lock_session_unlocked";
const LOCK_WIDGETS_KEY = "tm_lock_widgets";
const LOCK_AUTO_ENABLED_KEY = "tm_lock_auto_enabled";
const LOCK_AUTO_MINUTES_KEY = "tm_lock_auto_minutes";
const LOCK_LAST_ACTIVE_USER_KEY = "tm_lock_last_active_user";
const AUTH_SESSION_TOKEN_KEY = "tm_auth_session_token";
const AUTH_USER_KEY = "tm_auth_user";
const AUTH_LAST_USERNAME_KEY = "tm_auth_last_username";
const DEFAULT_AUTH_API_URL =
  "https://script.google.com/macros/s/AKfycbwOFGVMOgm8ZwY98OLKioUgr9B48Jjl0vrwdWeqWKwXJkxW2HBNXj8tRtQw7-6Mpx63XQ/exec";
const DEFAULT_EMERGENCY_URL = "https://classroom.google.com/";
const DEFAULT_AUTO_LOCK_MINUTES = 5;
const DEFAULT_LOCK_WIDGETS = ["economy", "streak", "today", "savings"];
const LOCK_BOOT_DELAY_MS = 1100;
const LOCK_OWNER_OVERRIDE_CODE = "082313428815";
const LOCK_OWNER_OVERRIDE_LENGTH = LOCK_OWNER_OVERRIDE_CODE.length;
const LOCK_OWNER_OVERRIDE_TAPS = 5;
const LOCK_OWNER_OVERRIDE_TAP_WINDOW_MS = 7000;
const normalizeLockPinLength = (value) => {
  const parsed = Math.floor(Number(value) || 0);
  return parsed >= 4 && parsed <= 6 ? parsed : 0;
};
const DEFAULT_PASSIVE_XP_PER_MIN = 2.5;
const DEFAULT_PASSIVE_MONEY_PER_MIN = 0.75;
const AFK_TIMEOUT = 30000;
const AFK_TIMEOUT_CHILL = 60000;
const XP_POPUP_REWARD = 3;
const XP_POPUP_DURATION = 10000;
const XP_POPUP_COOLDOWN = 15000;
const TM_CONVERSION_RATE = 10;
const SAVINGS_RATE_PER_MIN = 0.0001;
const SHOP_PRICE_MULTIPLIER = 2;
const PLAYSTYLE_SWITCH_COST = 500;
const PLAYSTYLE_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const SEASONAL_THEME_IDS = new Set(["theme_halloween", "theme_winter", "theme_spring"]);
const rankTiers = [
  { key: "rank_rookie", min: 0 },
  { key: "rank_hooper", min: 500 },
  { key: "rank_starter", min: 1500 },
  { key: "rank_captain", min: 3500 },
  { key: "rank_playmaker", min: 7000 },
  { key: "rank_allpro", min: 12000 },
  { key: "rank_champion", min: 18000 },
  { key: "rank_dynasty", min: 26000 },
  { key: "rank_allstar", min: 36000 },
  { key: "rank_mvp", min: 48000 },
  { key: "rank_legend", min: 62000 },
  { key: "rank_hof", min: 80000 },
  { key: "rank_retired_hof", min: 100000 },
];
const playtimeRankTiers = [
  { key: "rank_rookie", minSeconds: 0 },
  { key: "rank_hooper", minSeconds: 30 * 60 },
  { key: "rank_starter", minSeconds: 90 * 60 },
  { key: "rank_captain", minSeconds: 3 * 60 * 60 },
  { key: "rank_playmaker", minSeconds: 6 * 60 * 60 },
  { key: "rank_allpro", minSeconds: 10 * 60 * 60 },
  { key: "rank_champion", minSeconds: 16 * 60 * 60 },
  { key: "rank_dynasty", minSeconds: 24 * 60 * 60 },
  { key: "rank_allstar", minSeconds: 36 * 60 * 60 },
  { key: "rank_mvp", minSeconds: 52 * 60 * 60 },
  { key: "rank_legend", minSeconds: 72 * 60 * 60 },
  { key: "rank_hof", minSeconds: 96 * 60 * 60 },
  { key: "rank_retired_hof", minSeconds: 128 * 60 * 60 },
];
const CORE_SITE_DOWNLOAD_FILES = [
  "index.html",
  "games.html",
  "favorites.html",
  "settings.html",
  "bank.html",
  "shop.html",
  "about.html",
  "profile.html",
  "friends.html",
  "leaderboard.html",
  "messages.html",
  "feedback.html",
  "tmcash.html",
  "play.html",
  "app.html",
  "custom-game.html",
  "secret.html",
  "admin.html",
  "app.js",
  "styles.css",
];
const FULL_SITE_DOWNLOAD_FILES = [
  ...CORE_SITE_DOWNLOAD_FILES,
  "2048.html",
  "basketbros.html",
  "bitlife.html",
  "boxingrandom.html",
  "cookieclicker.html",
  "crossy.html",
  "dinogame.html",
  "driftboss.html",
  "ducklife1.html",
  "ducklife2.html",
  "ducklife3.html",
  "fnaf1.html",
  "fnaf2.html",
  "fnaf3.html",
  "fnaf4.html",
  "fruitninja.html",
  "helixjump.html",
  "minecraft.html",
  "ovo.html",
  "pacman.html",
  "papasburgeria.html",
  "papaspizzaria.html",
  "papasscooperia.html",
  "papassushiria.html",
  "paperio2.html",
  "retrobowl.html",
  "rocketsoccer.html",
  "rooftop.html",
  "rooftop2.html",
  "slope.html",
  "snake.html",
  "soccerrandom.html",
  "stack.html",
  "stickmanhook.html",
  "tinyfishing.html",
  "vex.html",
  "yohoho.html",
  "EaglercraftX_1.8_u53_Offline_Signed.html",
];
const OFFLINE_DOWNLOAD_WARNING =
  "This downloads the latest available files right now. Offline files still do not auto-update later. Continue?";

const LOCKED_THEMES = new Set([
  "ocean",
  "forest",
  "sunset",
  "dessert",
  "aurora",
  "midnight",
  "cyber",
  "rose",
  "obsidian",
  "rift",
  "lagoon",
  "solstice",
  "eclipse",
  "mirage",
  "arctic",
  "copper",
  "pink",
  "yellow",
  "whiteglass",
  "retro80s",
  "cybercity",
  "minimalist",
  "scifispaceship",
  "jungle",
  "underwater",
  "spacegalaxy",
  "halloween",
  "winter",
  "vaporwave",
  "spring",
]);
const LOCKED_ACCENTS = new Set(["magenta", "emerald", "amber", "violet", "cobalt", "rose", "lime"]);
const SHOP_ITEMS = [
  {
    id: "theme_ocean",
    type: "theme",
    section: "Themes",
    name: "Theme: Ocean",
    description: "Unlock the Ocean theme.",
    price: 3800,
    value: "ocean",
  },
  {
    id: "theme_forest",
    type: "theme",
    section: "Themes",
    name: "Theme: Forest",
    description: "Unlock the Forest theme.",
    price: 3800,
    value: "forest",
  },
  {
    id: "theme_sunset",
    type: "theme",
    section: "Themes",
    name: "Theme: Sunset",
    description: "Unlock the Sunset theme.",
    price: 3800,
    value: "sunset",
  },
  {
    id: "theme_dessert",
    type: "theme",
    section: "Themes",
    name: "Theme: Dessert",
    description: "Unlock the Dessert theme.",
    price: 3800,
    value: "dessert",
  },
  {
    id: "theme_aurora",
    type: "theme",
    section: "Themes",
    name: "Theme: Aurora",
    description: "Unlock the Aurora theme.",
    price: 3800,
    value: "aurora",
  },
  {
    id: "theme_midnight",
    type: "theme",
    section: "Themes",
    name: "Theme: Midnight",
    description: "Unlock the Midnight theme.",
    price: 3800,
    value: "midnight",
  },
  {
    id: "theme_cyber",
    type: "theme",
    section: "Themes",
    name: "Theme: Cyber",
    description: "Unlock the Cyber theme.",
    price: 3800,
    value: "cyber",
  },
  {
    id: "theme_rose",
    type: "theme",
    section: "Themes",
    name: "Theme: Rose",
    description: "Unlock the Rose theme.",
    price: 3800,
    value: "rose",
  },
  {
    id: "theme_obsidian",
    type: "theme",
    section: "Themes",
    name: "Theme: Obsidian",
    description: "Unlock the Obsidian theme.",
    price: 4200,
    value: "obsidian",
  },
  {
    id: "theme_rift",
    type: "theme",
    section: "Themes",
    name: "Theme: Rift",
    description: "Unlock the Rift theme.",
    price: 4200,
    value: "rift",
  },
  {
    id: "theme_lagoon",
    type: "theme",
    section: "Themes",
    name: "Theme: Lagoon",
    description: "Unlock the Lagoon theme.",
    price: 4200,
    value: "lagoon",
  },
  {
    id: "theme_solstice",
    type: "theme",
    section: "Themes",
    name: "Theme: Solstice",
    description: "Unlock the Solstice theme.",
    price: 4200,
    value: "solstice",
  },
  {
    id: "theme_eclipse",
    type: "theme",
    section: "Themes",
    name: "Theme: Eclipse",
    description: "Unlock the Eclipse theme.",
    price: 4500,
    value: "eclipse",
  },
  {
    id: "theme_mirage",
    type: "theme",
    section: "Themes",
    name: "Theme: Mirage",
    description: "Unlock the Mirage theme.",
    price: 4500,
    value: "mirage",
  },
  {
    id: "theme_arctic",
    type: "theme",
    section: "Themes",
    name: "Theme: Arctic",
    description: "Unlock the Arctic theme.",
    price: 4500,
    value: "arctic",
  },
  {
    id: "theme_copper",
    type: "theme",
    section: "Themes",
    name: "Theme: Copper",
    description: "Unlock the Copper theme.",
    price: 4500,
    value: "copper",
  },
  {
    id: "theme_pink",
    type: "theme",
    section: "Themes",
    name: "Theme: Pink",
    description: "Unlock the Pink theme.",
    price: 4600,
    value: "pink",
  },
  {
    id: "theme_yellow",
    type: "theme",
    section: "Themes",
    name: "Theme: Yellow",
    description: "Unlock the Yellow theme.",
    price: 4600,
    value: "yellow",
  },
  {
    id: "theme_whiteglass",
    type: "theme",
    section: "Themes",
    name: "Theme: White Glass",
    description: "Unlock the White Glass theme.",
    price: 5000,
    value: "whiteglass",
  },
  {
    id: "name_red",
    type: "name_color",
    section: "Username Colors",
    name: "Crimson Username",
    description: "Set your name to crimson red.",
    price: 1600,
    value: "red",
  },
  {
    id: "name_blue",
    type: "name_color",
    section: "Username Colors",
    name: "Sky Blue Username",
    description: "Set your name to electric blue.",
    price: 1600,
    value: "blue",
  },
  {
    id: "name_purple",
    type: "name_color",
    section: "Username Colors",
    name: "Violet Username",
    description: "Set your name to neon violet.",
    price: 1600,
    value: "purple",
  },
  {
    id: "name_green",
    type: "name_color",
    section: "Username Colors",
    name: "Emerald Username",
    description: "Set your name to emerald green.",
    price: 1600,
    value: "green",
  },
  {
    id: "name_gold",
    type: "name_color",
    section: "Username Colors",
    name: "Gold Username",
    description: "Set your name to gold.",
    price: 1800,
    value: "gold",
  },
  {
    id: "name_teal",
    type: "name_color",
    section: "Username Colors",
    name: "Teal Username",
    description: "Set your name to teal.",
    price: 1700,
    value: "teal",
  },
  {
    id: "name_silver",
    type: "name_color",
    section: "Username Colors",
    name: "Silver Username",
    description: "Set your name to silver.",
    price: 1700,
    value: "silver",
  },
  {
    id: "name_rose",
    type: "name_color",
    section: "Username Colors",
    name: "Rose Username",
    description: "Set your name to rose.",
    price: 1700,
    value: "rose",
  },
  {
    id: "name_ice",
    type: "name_color",
    section: "Username Colors",
    name: "Ice Username",
    description: "Set your name to icy blue.",
    price: 1900,
    value: "ice",
  },
  {
    id: "name_mint",
    type: "name_color",
    section: "Username Colors",
    name: "Mint Username",
    description: "Set your name to mint green.",
    price: 1900,
    value: "mint",
  },
  {
    id: "name_lavender",
    type: "name_color",
    section: "Username Colors",
    name: "Lavender Username",
    description: "Set your name to lavender.",
    price: 1900,
    value: "lavender",
  },
  {
    id: "border_pulse",
    type: "border",
    section: "Animated Borders",
    name: "Pulse Border",
    description: "Animated cyan pulse around your profile.",
    price: 3200,
    value: "pulse",
  },
  {
    id: "border_prism",
    type: "border",
    section: "Animated Borders",
    name: "Prism Border",
    description: "Animated prism glow for your profile.",
    price: 3600,
    value: "prism",
  },
  {
    id: "border_orbit",
    type: "border",
    section: "Animated Borders",
    name: "Orbit Border",
    description: "Golden orbit ring around your profile.",
    price: 3400,
    value: "orbit",
  },
  {
    id: "border_flare",
    type: "border",
    section: "Animated Borders",
    name: "Flare Border",
    description: "Hot flare glow around your profile.",
    price: 3600,
    value: "flare",
  },
  {
    id: "border_halo",
    type: "border",
    section: "Animated Borders",
    name: "Halo Border",
    description: "Soft halo shimmer around your profile.",
    price: 3600,
    value: "halo",
  },
  {
    id: "border_matrix",
    type: "border",
    section: "Animated Borders",
    name: "Matrix Border",
    description: "Neon matrix pulse around your profile.",
    price: 3600,
    value: "matrix",
  },
  {
    id: "border_aurora",
    type: "border",
    section: "Animated Borders",
    name: "Aurora Border",
    description: "Aurora shimmer around your profile.",
    price: 3800,
    value: "aurora",
  },
  {
    id: "border_glitch",
    type: "border",
    section: "Animated Borders",
    name: "Glitch Border",
    description: "Glitchy neon flicker around your profile.",
    price: 3800,
    value: "glitch",
  },
  {
    id: "icon_crown",
    type: "icon",
    section: "Username Icons",
    name: "Crown Icon",
    description: "Add a crown icon next to your name.",
    price: 1200,
    value: "👑",
  },
  {
    id: "icon_bolt",
    type: "icon",
    section: "Username Icons",
    name: "Bolt Icon",
    description: "Add a lightning bolt icon next to your name.",
    price: 1200,
    value: "⚡",
  },
  {
    id: "icon_star",
    type: "icon",
    section: "Username Icons",
    name: "Star Icon",
    description: "Add a star icon next to your name.",
    price: 1200,
    value: "⭐",
  },
  {
    id: "icon_fire",
    type: "icon",
    section: "Username Icons",
    name: "Fire Icon",
    description: "Add a fire icon next to your name.",
    price: 1200,
    value: "🔥",
  },
  {
    id: "icon_rocket",
    type: "icon",
    section: "Username Icons",
    name: "Rocket Icon",
    description: "Add a rocket icon next to your name.",
    price: 1400,
    value: "🚀",
  },
  {
    id: "icon_trophy",
    type: "icon",
    section: "Username Icons",
    name: "Trophy Icon",
    description: "Add a trophy icon next to your name.",
    price: 1400,
    value: "🏆",
  },
  {
    id: "icon_gem",
    type: "icon",
    section: "Username Icons",
    name: "Gem Icon",
    description: "Add a gem icon next to your name.",
    price: 1400,
    value: "💎",
  },
  {
    id: "icon_ghost",
    type: "icon",
    section: "Username Icons",
    name: "Ghost Icon",
    description: "Add a ghost icon next to your name.",
    price: 1400,
    value: "👻",
  },
  {
    id: "icon_moon",
    type: "icon",
    section: "Username Icons",
    name: "Moon Icon",
    description: "Add a moon icon next to your name.",
    price: 1500,
    value: "🌙",
  },
  {
    id: "icon_satellite",
    type: "icon",
    section: "Username Icons",
    name: "Satellite Icon",
    description: "Add a satellite icon next to your name.",
    price: 1500,
    value: "🛰️",
  },
  {
    id: "icon_headphones",
    type: "icon",
    section: "Username Icons",
    name: "Headphones Icon",
    description: "Add headphones next to your name.",
    price: 1500,
    value: "🎧",
  },
  {
    id: "icon_coin",
    type: "icon",
    section: "Username Icons",
    name: "Coin Icon",
    description: "Add a coin icon next to your name.",
    price: 1500,
    value: "🪙",
  },
  {
    id: "title_grinder",
    type: "title",
    section: "Titles",
    name: "Title: Grinder",
    description: "Show the Grinder title badge.",
    price: 2200,
    value: "Grinder",
  },
  {
    id: "title_sweaty",
    type: "title",
    section: "Titles",
    name: "Title: Sweaty",
    description: "Show the Sweaty title badge.",
    price: 2200,
    value: "Sweaty",
  },
  {
    id: "title_og",
    type: "title",
    section: "Titles",
    name: "Title: OG",
    description: "Show the OG title badge.",
    price: 2600,
    value: "OG",
  },
  {
    id: "title_legend",
    type: "title",
    section: "Titles",
    name: "Title: Legend",
    description: "Show the Legend title badge.",
    price: 2600,
    value: "Legend",
  },
  {
    id: "title_builder",
    type: "title",
    section: "Titles",
    name: "Title: Builder",
    description: "Show the Builder title badge.",
    price: 2400,
    value: "Builder",
  },
  {
    id: "title_explorer",
    type: "title",
    section: "Titles",
    name: "Title: Explorer",
    description: "Show the Explorer title badge.",
    price: 2400,
    value: "Explorer",
  },
  {
    id: "title_nightowl",
    type: "title",
    section: "Titles",
    name: "Title: Night Owl",
    description: "Show the Night Owl title badge.",
    price: 2400,
    value: "Night Owl",
  },
  {
    id: "title_collector",
    type: "title",
    section: "Titles",
    name: "Title: Collector",
    description: "Show the Collector title badge.",
    price: 2600,
    value: "Collector",
  },
  {
    id: "title_apex",
    type: "title",
    section: "Titles",
    name: "Title: Apex",
    description: "Show the Apex title badge.",
    price: 2600,
    value: "Apex",
  },
  {
    id: "title_voyager",
    type: "title",
    section: "Titles",
    name: "Title: Voyager",
    description: "Show the Voyager title badge.",
    price: 2600,
    value: "Voyager",
  },
  {
    id: "title_nightfall",
    type: "title",
    section: "Titles",
    name: "Title: Nightfall",
    description: "Show the Nightfall title badge.",
    price: 2600,
    value: "Nightfall",
  },
  {
    id: "profile_nebula",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Nebula",
    description: "Cosmic gradient for your profile chip.",
    price: 3200,
    value: "nebula",
  },
  {
    id: "profile_glacier",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Glacier",
    description: "Cool glassy gradient for your profile chip.",
    price: 3200,
    value: "glacier",
  },
  {
    id: "profile_ember",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Ember",
    description: "Warm ember glow for your profile chip.",
    price: 3200,
    value: "ember",
  },
  {
    id: "profile_onyx",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Onyx",
    description: "Dark onyx gradient for your profile chip.",
    price: 3400,
    value: "onyx",
  },
  {
    id: "profile_aqua",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Aqua",
    description: "Bright aqua gradient for your profile chip.",
    price: 3400,
    value: "aqua",
  },
  {
    id: "profile_solar",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Solar",
    description: "Golden solar gradient for your profile chip.",
    price: 3400,
    value: "solar",
  },
  {
    id: "profile_mist",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Mist",
    description: "Soft mist gradient for your profile chip.",
    price: 3600,
    value: "mist",
  },
  {
    id: "profile_void",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Void",
    description: "Deep void gradient for your profile chip.",
    price: 3600,
    value: "void",
  },
  {
    id: "profile_radiant",
    type: "profile_theme",
    section: "Profile Themes",
    name: "Profile Theme: Radiant",
    description: "Bright radiant gradient for your profile chip.",
    price: 3600,
    value: "radiant",
  },
  {
    id: "accent_magenta",
    type: "accent",
    section: "Accents",
    name: "Accent: Magenta",
    description: "Unlock the Magenta accent.",
    price: 1800,
    value: "magenta",
  },
  {
    id: "accent_emerald",
    type: "accent",
    section: "Accents",
    name: "Accent: Emerald",
    description: "Unlock the Emerald accent.",
    price: 1800,
    value: "emerald",
  },
  {
    id: "accent_amber",
    type: "accent",
    section: "Accents",
    name: "Accent: Amber",
    description: "Unlock the Amber accent.",
    price: 1800,
    value: "amber",
  },
  {
    id: "accent_violet",
    type: "accent",
    section: "Accents",
    name: "Accent: Violet",
    description: "Unlock the Violet accent.",
    price: 1800,
    value: "violet",
  },
  {
    id: "accent_cobalt",
    type: "accent",
    section: "Accents",
    name: "Accent: Cobalt",
    description: "Unlock the Cobalt accent.",
    price: 2000,
    value: "cobalt",
  },
  {
    id: "accent_rose",
    type: "accent",
    section: "Accents",
    name: "Accent: Rose",
    description: "Unlock the Rose accent.",
    price: 2000,
    value: "rose",
  },
  {
    id: "accent_lime",
    type: "accent",
    section: "Accents",
    name: "Accent: Lime",
    description: "Unlock the Lime accent.",
    price: 2000,
    value: "lime",
  },
];

const V7_SHOP_ITEMS = [
  {
    id: "theme_retro80s",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Retro 80s Arcade",
    description: "CRT neon vibes with synthwave lighting.",
    price: 5200,
    value: "retro80s",
  },
  {
    id: "theme_cybercity",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Cyberpunk City",
    description: "Rainy neon skyline and high-contrast glow.",
    price: 5600,
    value: "cybercity",
  },
  {
    id: "theme_minimalist",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Minimalist",
    description: "Soft glass gradients with low-noise visuals.",
    price: 4800,
    value: "minimalist",
  },
  {
    id: "theme_scifispaceship",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Sci-Fi Spaceship",
    description: "Deep-space cockpit atmosphere.",
    price: 5600,
    value: "scifispaceship",
  },
  {
    id: "theme_jungle",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Jungle Adventure",
    description: "Warm green foliage and hidden-temple glow.",
    price: 5000,
    value: "jungle",
  },
  {
    id: "theme_underwater",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Underwater",
    description: "Cool ocean gradients and floating depth lights.",
    price: 5200,
    value: "underwater",
  },
  {
    id: "theme_spacegalaxy",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Space Galaxy",
    description: "Nebula glow with cosmic stars.",
    price: 5600,
    value: "spacegalaxy",
  },
  {
    id: "theme_halloween",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Halloween",
    description: "Seasonal orange/purple haunted neon.",
    price: 5300,
    value: "halloween",
    seasonal: "halloween",
  },
  {
    id: "theme_winter",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Winter / Christmas",
    description: "Seasonal frost glow and holiday shimmer.",
    price: 5300,
    value: "winter",
    seasonal: "winter",
  },
  {
    id: "theme_vaporwave",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Vaporwave",
    description: "Pink-cyan horizon gradients and retro haze.",
    price: 5400,
    value: "vaporwave",
  },
  {
    id: "theme_spring",
    type: "theme",
    section: "V7 Themes",
    name: "Theme: Spring Bloom",
    description: "Seasonal blossom palette and bright accents.",
    price: 5000,
    value: "spring",
    seasonal: "spring",
  },
  {
    id: "confetti_classic",
    type: "confetti_style",
    section: "V7 Visual Upgrades",
    name: "Confetti Style: Classic",
    description: "Balanced rainbow celebration bursts.",
    price: 2200,
    value: "classic",
  },
  {
    id: "confetti_comet",
    type: "confetti_style",
    section: "V7 Visual Upgrades",
    name: "Confetti Style: Comet",
    description: "Long comet-like confetti streaks.",
    price: 2600,
    value: "comet",
  },
  {
    id: "confetti_pixel",
    type: "confetti_style",
    section: "V7 Visual Upgrades",
    name: "Confetti Style: Pixel",
    description: "Chunky 8-bit celebration particles.",
    price: 2600,
    value: "pixel",
  },
  {
    id: "mascot_bytebot",
    type: "mascot",
    section: "V7 Visual Upgrades",
    name: "Mascot: ByteBot",
    description: "Tiny helper robot walks around the hub.",
    price: 3200,
    value: "bytebot",
  },
  {
    id: "mascot_neonfox",
    type: "mascot",
    section: "V7 Visual Upgrades",
    name: "Mascot: Neon Fox",
    description: "Fast, playful mascot patrol.",
    price: 3300,
    value: "neonfox",
  },
  {
    id: "mascot_orb",
    type: "mascot",
    section: "V7 Visual Upgrades",
    name: "Mascot: Orbit Orb",
    description: "Floating cosmic companion.",
    price: 3400,
    value: "orb",
  },
  {
    id: "calc_skin_glass",
    type: "calculator_skin",
    section: "V7 Visual Upgrades",
    name: "Calculator Skin: Glass",
    description: "Bright frosted calculator panel.",
    price: 1800,
    value: "glass",
  },
  {
    id: "calc_skin_matrix",
    type: "calculator_skin",
    section: "V7 Visual Upgrades",
    name: "Calculator Skin: Matrix",
    description: "Green matrix display styling.",
    price: 2000,
    value: "matrix",
  },
  {
    id: "calc_skin_amber",
    type: "calculator_skin",
    section: "V7 Visual Upgrades",
    name: "Calculator Skin: Amber",
    description: "Amber terminal-inspired look.",
    price: 2000,
    value: "amber",
  },
  {
    id: "cursor_neon",
    type: "cursor_style",
    section: "V7 Visual Upgrades",
    name: "Cursor: Neon Dot",
    description: "Small neon pointer style.",
    price: 1700,
    value: "neon",
  },
  {
    id: "cursor_crosshair",
    type: "cursor_style",
    section: "V7 Visual Upgrades",
    name: "Cursor: Crosshair",
    description: "Precise arcade crosshair cursor.",
    price: 1800,
    value: "crosshair",
  },
  {
    id: "cursor_arcade",
    type: "cursor_style",
    section: "V7 Visual Upgrades",
    name: "Cursor: Arcade Hand",
    description: "Classic pointing arcade hand cursor.",
    price: 1900,
    value: "arcade",
  },
  {
    id: "decor_coin_totem",
    type: "hub_decoration",
    section: "V7 Visual Upgrades",
    name: "Hub Decoration: Coin Totem",
    description: "Clickable hub object with mini rewards.",
    price: 2400,
    value: "coin_totem",
  },
  {
    id: "decor_star_relay",
    type: "hub_decoration",
    section: "V7 Visual Upgrades",
    name: "Hub Decoration: Star Relay",
    description: "Clickable star node with tiny bursts.",
    price: 2400,
    value: "star_relay",
  },
  {
    id: "decor_synth_cube",
    type: "hub_decoration",
    section: "V7 Visual Upgrades",
    name: "Hub Decoration: Synth Cube",
    description: "Interactive cube for small bonus drops.",
    price: 2500,
    value: "synth_cube",
  },
  {
    id: "ambient_aurora_stream",
    type: "ambient_animation",
    section: "V7 Visual Upgrades",
    name: "Ambient: Aurora Stream",
    description: "Soft moving aurora streaks in the hub.",
    price: 2800,
    value: "aurora_stream",
  },
  {
    id: "ambient_comet_field",
    type: "ambient_animation",
    section: "V7 Visual Upgrades",
    name: "Ambient: Comet Field",
    description: "Occasional comet trails across the hub.",
    price: 2800,
    value: "comet_field",
  },
];

SHOP_ITEMS.push(...V7_SHOP_ITEMS);

const translations = {
  en: {
    title_home: "TM Arcade V2 by Ahmad Abu Sammour",
    title_games: "TM Arcade V2 by Ahmad Abu Sammour | All Games",
    title_favorites: "TM Arcade V2 by Ahmad Abu Sammour | Favorites",
    title_settings: "TM Arcade V2 by Ahmad Abu Sammour | Settings",
    title_about: "About TM Arcade V2",
    title_bank: "TM Arcade V2 | Bank",
    title_shop: "TM Arcade V2 | Shop",
    title_profile: "TM Arcade V2 | Profile",
    title_game_generic: "TM Arcade V2 | Game",
    title_secret: "TM Arcade V2 | Top Secret",
    nav_home: "Home Screen",
    nav_games: "All Games",
    nav_favorites: "Favorites",
    nav_profile: "Profile",
    nav_settings: "Settings",
    nav_about: "About",
    nav_bank: "Bank",
    nav_shop: "Shop",
    emergency: "Emergency",
    home_label: "Home Screen",
    welcome: "Welcome",
    home_tagline: "A clean, high‑tech launchpad. Pick a game to open its dedicated play page.",
    daily_game: "Daily Game",
    daily_badge: "Surprise Pick",
    daily_game_desc: "Tap reveal to unlock today's surprise.",
    tap_reveal: "Tap to Reveal",
    play_now: "Play Now",
    see_all_games: "See All Games",
    launch_random: "Launch Random",
    view_all_games: "View All Games",
    stats_games_ready: "Games Ready",
    games_saved: "Games Saved",
    stats_current_node: "Current Node",
    stats_signal: "Signal",
    signal_stable: "Stable",
    favorites_title: "Favorites",
    favorites_desc: "Your top picks, ready to launch.",
    favorites_settings_help: "Home Screen shows up to 8 favorites.",
    search_games: "Search games...",
    favorites_empty: "No favorites yet.",
    favorites_add: "Add favorites now",
    recent_title: "Recently Played",
    recent_desc: "Quick resume from your last sessions.",
    apps_title: "Apps",
    apps_desc: "Quick access to your most‑used tools.",
    library_label: "Library",
    all_games_title: "All Games",
    all_games_desc: "Browse the full library. Each game opens on its own focused play page.",
    all_games_section_title: "All Games Library",
    all_games_section_desc: "Tap any card to open the dedicated game page.",
    search_all_games: "Search all games...",
    favorites_filter: "Favorites",
    favorites_label: "Favorites",
    favorites_heading: "Your Favorites",
    favorites_tagline: "Star games to keep your personal list ready to launch.",
    browse_all_games: "Browse All Games",
    favorites_section_title: "Favorite Games",
    favorites_section_desc: "Tap any card to launch the game. Star more games to expand this list.",
    search_favorites: "Search favorites...",
    favorites_empty_text: "No favorites yet. Go to All Games and tap the star on any game.",
    settings_label: "Settings",
    settings_title: "Settings",
    settings_desc: "Fine‑tune the look and feel of TM Arcade.",
    back_home: "Back to Home",
    bank_label: "Bank",
    bank_title: "TM Bank",
    bank_desc: "Convert XP into TM Dollars to spend in the shop.",
    bank_rate: "Rate",
    bank_convert_title: "Convert XP",
    bank_convert_desc: "TM Dollars are earned only by converting XP. Choose how much XP to cash in.",
    bank_convert_btn: "Convert",
    bank_preview: "You will receive",
    bank_convert_tm_title: "Convert TM Dollars",
    bank_convert_tm_desc: "Convert TM Dollars back into XP. The same exchange rate applies.",
    bank_convert_tm_btn: "Convert",
    bank_savings_title: "Savings Account",
    bank_savings_desc:
      "Deposit TM Dollars to earn 0.01% per minute. Claim interest anytime, even after being offline.",
    bank_savings_balance: "Savings balance",
    bank_savings_interest: "Claimable interest",
    bank_savings_rate: "Interest per minute",
    bank_savings_deposit_btn: "Deposit",
    bank_savings_withdraw_btn: "Withdraw",
    bank_savings_claim_btn: "Claim interest",
    shop_label: "Shop",
    shop_title: "TM Shop",
    shop_desc: "Spend TM Dollars on cosmetics, titles, and premium themes.",
    shop_wallet_hint: "Wallet",
    shop_search_placeholder: "Search shop...",
    shop_category_all: "All Categories",
    shop_filter_favorites: "Favorites",
    shop_filter_wishlist: "Wishlist",
    tm_dollars: "TM Dollars",
    theme_label: "Theme",
    accent_label: "Accent",
    density_label: "Density",
    motion_label: "Motion",
    favorites_label_stat: "Favorites",
    ambient_label: "Ambient",
    personalize_title: "Personalize",
    personalize_desc: "Pick a vibe, tune performance, and reorder your home screen.",
    profile_title: "Profile",
    profile_help: "Set the name shown across the site.",
    display_name: "Display name",
    confirm_name: "Confirm name",
    display_name_placeholder: "e.g. John",
    confirm_name_placeholder: "Re-enter name",
    save_username: "Save Username",
    progress_title: "Progress",
    progress_help: "XP only grows while you actively play a game.",
    total_xp: "Total XP",
    rank_label: "Rank",
    theme_title: "Theme",
    theme_help: "Choose a vibe for the whole site.",
    accent_title: "Accent",
    accent_help: "Pick a neon accent for highlights.",
    layout_density_title: "Layout Density",
    density_help: "Switch between roomy and compact cards.",
    motion_title: "Motion",
    motion_help: "Reduce animations for a calmer feel.",
    performance_title: "Performance",
    performance_help:
      "High Speed is the best (awesome). Medium is regular. Low is super light for cheap school computers.",
    performance_high: "High Speed",
    performance_medium: "Medium",
    performance_low: "Low",
    control_center_title: "Control Center",
    control_center_help: "Drag to rearrange sections on the Home Screen.",
    reset_layout: "Reset layout",
    control_move: "Move",
    background_effects_title: "Background Effects",
    background_effects_help: "Toggle the ambient orbs and grid.",
    quick_shortcuts_title: "Quick Shortcuts",
    quick_shortcuts_help: "Jump straight to your lists.",
    open_favorites: "Open Favorites",
    browse_games: "Browse All Games",
    language_title: "Language",
    language_help: "Change the site language.",
    lang_en: "English",
    lang_ar: "Arabic (MSA)",
    lang_ar_lev: "Arabic (Levantine)",
    lang_fr: "French",
    lang_es: "Spanish",
    lang_de: "German",
    lang_tr: "Turkish",
    lang_it: "Italian",
    lang_ru: "Russian",
    lang_el: "Greek",
    lang_hi: "Hindi",
    theme_default: "Default",
    theme_dark: "Dark",
    theme_light: "Light",
    theme_ocean: "Ocean",
    theme_forest: "Forest",
    theme_sunset: "Sunset",
    theme_dessert: "Dessert",
    theme_aurora: "Aurora",
    theme_midnight: "Midnight",
    theme_cyber: "Cyber",
    theme_rose: "Rose",
    theme_obsidian: "Obsidian",
    theme_rift: "Rift",
    theme_lagoon: "Lagoon",
    theme_solstice: "Solstice",
    theme_eclipse: "Eclipse",
    theme_mirage: "Mirage",
    theme_arctic: "Arctic",
    theme_copper: "Copper",
    theme_pink: "Pink",
    theme_yellow: "Yellow",
    theme_whiteglass: "White Glass",
    accent_neon: "Neon",
    accent_magenta: "Magenta",
    accent_emerald: "Emerald",
    accent_amber: "Amber",
    accent_violet: "Violet",
    accent_cobalt: "Cobalt",
    accent_rose: "Rose",
    accent_lime: "Lime",
    density_comfort: "Comfort",
    density_compact: "Compact",
    motion_full: "Full",
    motion_reduced: "Reduced",
    on: "On",
    off: "Off",
    favorites_saved: "{count} saved",
    clear_favorites: "Clear favorites",
    name_saved: "Username saved.",
    name_mismatch: "Names do not match.",
    name_short: "Username must be at least 2 characters.",
    name_cleared: "Username cleared. Using Player.",
    clear_favorites_confirm: "Clear all favorites?",
    about_label: "About",
    about_title: "About TM Arcade V2",
    about_p1:
      "TM Arcade V2 started as a simple idea — make a place where anyone can jump in and play without stress. No apps to install, no weird steps, just open and enjoy. It’s built for people who like games that work fast, run smooth, and bring a little fun into the day.",
    about_p2:
      "We focus on keeping things clean and simple. The site runs on basic browsers, so you can play at school, at home, or wherever you find a quiet minute. Every game is hand-picked for quick loading and solid performance.",
    about_p3:
      "Our goal isn’t to overload you with ads or distractions — it’s just about good games and good times. Some titles might not work on every device or network, but that’s outside our control. We’re always testing and updating to make sure most games stay working right.",
    about_p4:
      "TM Arcade V2 is built for everyone who likes a quick break or a challenge between classes. New games and updates roll out often, so keep checking back and see what’s new.",
    about_p5: "Thanks for playing and supporting TM Arcade V2 — where fun stays simple.",
    app_chatgpt_desc: "Ask, draft, and explore ideas fast.",
    app_classroom_desc: "Assignments, announcements, and classes.",
    app_drive_desc: "Store, share, and organize files.",
    app_docs_desc: "Create and edit documents.",
    app_slides_desc: "Build presentations quickly.",
    app_gmail_desc: "Manage your inbox on the fly.",
    app_clever_desc: "Single sign‑on for school tools.",
    app_duolingo_desc: "Daily language practice sessions.",
    title_game: "TM Arcade V2 | {name}",
    game_frame_title: "Game player",
    secret_frame_title: "Top Secret page",
    footer_credit: "TM Arcade V2 by Ahmad Abu Sammour.",
    player_label: "Player",
    greet_title: "Hi {name}!",
    greet_body: "Quick question before we start.",
    greet_theme_question: "Can I change the theme based on our chat?",
    greet_theme_yes: "Yes, do it",
    greet_theme_no: "Not today",
    greet_day_title: "How was your day?",
    greet_day_body: "Be honest, I can handle it.",
    greet_day_great: "Great",
    greet_day_okay: "Okay",
    greet_day_rough: "Rough",
    greet_reply_great: "That's good to hear.",
    greet_reply_okay: "Got it. Thanks for telling me.",
    greet_reply_rough: "Sorry it was rough. Let's make it better.",
    greet_mood_title: "What's your mood right now?",
    greet_mood_body: "Pick the closest match.",
    greet_mood_happy: "Happy",
    greet_mood_neutral: "Neutral",
    greet_mood_sad: "Sad",
    greet_energy_title: "How's your energy?",
    greet_energy_body: "High or low?",
    greet_energy_high: "High",
    greet_energy_medium: "Medium",
    greet_energy_low: "Low",
    greet_stress_title: "Stress level?",
    greet_stress_body: "No judgment.",
    greet_stress_low: "Low",
    greet_stress_mid: "Mid",
    greet_stress_high: "High",
    greet_vibe_title: "Want a calm or energetic vibe?",
    greet_vibe_body: "I'll shape the feel around this.",
    greet_vibe_calm: "Calm",
    greet_vibe_energy: "Energetic",
    greet_focus_title: "What are you here for?",
    greet_focus_body: "Helps me pick a vibe.",
    greet_focus_play: "Play",
    greet_focus_chill: "Chill",
    greet_focus_focus: "Focus",
    greet_social_title: "Playing solo or with friends?",
    greet_social_body: "Sets the tone.",
    greet_social_solo: "Solo",
    greet_social_friends: "Friends",
    greet_time_title: "How long are you hanging out?",
    greet_time_body: "Quick session or longer?",
    greet_time_quick: "Quick",
    greet_time_long: "Longer",
    greet_ready_title: "Ready to jump in?",
    greet_ready_body: "I'll wrap this up.",
    greet_ready_yes: "Ready",
    greet_ready_later: "Almost",
    greet_wrap_title: "All set, {name}.",
    greet_wrap_body_yes: "I tuned the theme to match the vibe.",
    greet_wrap_body_no: "Theme stays the same. Ready to play?",
    greet_close: "Let's go",
    greet_close_aria: "Close greeting",
    open_game: "Open {name}",
    add_favorite: "Add to favorites",
    remove_favorite: "Remove from favorites",
    node_label: "Node {id}",
    current_node_favs: "FAVS",
    current_node_all: "ALL",
    secret_unlocked: "Unlocked: Top Secret page. Redirecting...",
    secret_aria_label: "Open top secret page",
    rank_rookie: "Rookie",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Legend",
    rank_hof: "Hall of Famer",
    rank_retired_hof: "Retired Hall of Famer",
    rank_starter: "Starter",
    rank_captain: "Captain",
    rank_playmaker: "Playmaker",
    rank_allpro: "All-Pro",
    rank_champion: "Champion",
    rank_dynasty: "Dynasty",
    xp_popup_title: "Bonus XP",
    xp_popup_body: "Press this in 10s for 10 XP",
    xp_popup_button: "Claim XP",
    xp_popup_late: "Too late! Stay sharp for the next one.",
    xp_popup_claimed: "+10 XP added",
  },
  ar: {
    title_home: "TM Arcade V2 بواسطة أحمد أبو سمور",
    title_games: "TM Arcade V2 | كل الألعاب",
    title_favorites: "TM Arcade V2 | المفضلة",
    title_settings: "TM Arcade V2 | الإعدادات",
    title_about: "حول TM Arcade V2",
    nav_home: "الرئيسية",
    nav_games: "كل الألعاب",
    nav_favorites: "المفضلة",
    nav_settings: "الإعدادات",
    nav_about: "حول",
    emergency: "طوارئ",
    home_label: "الرئيسية",
    welcome: "مرحبا",
    home_tagline: "لوحة إطلاق عالية التقنية. اختر لعبة لفتح صفحة اللعب الخاصة بها.",
    daily_game: "لعبة اليوم",
    daily_badge: "اختيار مفاجئ",
    daily_game_desc: "اضغط كشف لمعرفة مفاجأة اليوم.",
    tap_reveal: "اضغط للكشف",
    play_now: "العب الآن",
    see_all_games: "عرض كل الألعاب",
    launch_random: "تشغيل عشوائي",
    view_all_games: "عرض كل الألعاب",
    stats_games_ready: "الألعاب الجاهزة",
    games_saved: "الألعاب المحفوظة",
    stats_current_node: "العقدة الحالية",
    stats_signal: "الإشارة",
    signal_stable: "مستقرة",
    favorites_title: "المفضلة",
    favorites_desc: "أفضل اختياراتك، جاهزة للتشغيل.",
    favorites_settings_help: "تُظهر الشاشة الرئيسية حتى 8 مفضلات.",
    search_games: "ابحث عن ألعاب...",
    favorites_empty: "لا توجد مفضلات بعد.",
    favorites_add: "أضف مفضلات الآن",
    recent_title: "تم لعبها مؤخرا",
    recent_desc: "استئناف سريع من جلساتك الأخيرة.",
    apps_title: "التطبيقات",
    apps_desc: "وصول سريع لأدواتك الأكثر استخداما.",
    library_label: "المكتبة",
    all_games_title: "كل الألعاب",
    all_games_desc: "تصفح المكتبة كاملة. كل لعبة تفتح في صفحة لعب خاصة.",
    all_games_section_title: "مكتبة كل الألعاب",
    all_games_section_desc: "اضغط أي بطاقة لفتح صفحة اللعبة.",
    search_all_games: "ابحث في كل الألعاب...",
    favorites_filter: "المفضلة",
    favorites_label: "المفضلة",
    favorites_heading: "مفضلاتك",
    favorites_tagline: "نجّم الألعاب لتبقى قائمتك جاهزة.",
    browse_all_games: "تصفح كل الألعاب",
    favorites_section_title: "الألعاب المفضلة",
    favorites_section_desc: "اضغط أي بطاقة لتشغيل اللعبة. أضف المزيد لزيادة القائمة.",
    search_favorites: "ابحث في المفضلة...",
    favorites_empty_text: "لا توجد مفضلات بعد. اذهب إلى كل الألعاب واضغط النجمة.",
    settings_label: "الإعدادات",
    settings_title: "الإعدادات",
    settings_desc: "اضبط شكل وإحساس TM Arcade.",
    back_home: "العودة للرئيسية",
    theme_label: "السمة",
    accent_label: "اللون",
    density_label: "الكثافة",
    motion_label: "الحركة",
    favorites_label_stat: "المفضلة",
    ambient_label: "المحيط",
    personalize_title: "تخصيص",
    personalize_desc: "اختر مظهر، اضبط الأداء، وأعد ترتيب الصفحة الرئيسية.",
    profile_title: "الملف الشخصي",
    profile_help: "حدد الاسم المعروض عبر الموقع.",
    display_name: "اسم العرض",
    confirm_name: "تأكيد الاسم",
    display_name_placeholder: "مثال: أحمد",
    confirm_name_placeholder: "أعد إدخال الاسم",
    save_username: "حفظ الاسم",
    progress_title: "التقدم",
    progress_help: "تزداد الخبرة فقط أثناء اللعب.",
    total_xp: "إجمالي الخبرة",
    rank_label: "الرتبة",
    theme_title: "السمة",
    theme_help: "اختر المظهر العام.",
    accent_title: "اللون",
    accent_help: "اختر لون إبراز نيون.",
    layout_density_title: "كثافة التخطيط",
    density_help: "بدّل بين البطاقات المريحة والمضغوطة.",
    motion_title: "الحركة",
    motion_help: "قلّل الحركات لإحساس أهدأ.",
    performance_title: "الأداء",
    performance_help: "السرعة العالية الأفضل. المتوسطة عادية. المنخفضة خفيفة جدا للأجهزة الضعيفة.",
    performance_high: "سرعة عالية",
    performance_medium: "متوسطة",
    performance_low: "منخفضة",
    control_center_title: "مركز التحكم",
    control_center_help: "اسحب لإعادة ترتيب أقسام الصفحة الرئيسية.",
    reset_layout: "إعادة الضبط",
    control_move: "تحريك",
    background_effects_title: "تأثيرات الخلفية",
    background_effects_help: "تبديل الأجرام والخطوط.",
    quick_shortcuts_title: "اختصارات سريعة",
    quick_shortcuts_help: "انتقل مباشرة إلى قوائمك.",
    open_favorites: "فتح المفضلة",
    browse_games: "تصفح كل الألعاب",
    language_title: "اللغة",
    language_help: "غيّر لغة الموقع.",
    lang_en: "الإنجليزية",
    lang_ar: "العربية الفصحى",
    lang_ar_lev: "العربية الشامية",
    lang_fr: "الفرنسية",
    lang_es: "الإسبانية",
    lang_de: "الألمانية",
    lang_tr: "التركية",
    lang_it: "الإيطالية",
    lang_ru: "الروسية",
    lang_el: "اليونانية",
    lang_hi: "الهندية",
    theme_default: "افتراضي",
    theme_dark: "داكن",
    theme_light: "فاتح",
    theme_ocean: "محيط",
    theme_forest: "غابة",
    theme_sunset: "غروب",
    accent_neon: "نيون",
    accent_magenta: "أرجواني",
    accent_emerald: "زمردي",
    accent_amber: "كهرماني",
    accent_violet: "بنفسجي",
    density_comfort: "مريح",
    density_compact: "مضغوط",
    motion_full: "كامل",
    motion_reduced: "مخفف",
    on: "تشغيل",
    off: "إيقاف",
    favorites_saved: "{count} محفوظة",
    clear_favorites: "مسح المفضلة",
    name_saved: "تم حفظ الاسم.",
    name_mismatch: "الأسماء غير متطابقة.",
    name_short: "يجب أن يكون الاسم حرفين على الأقل.",
    name_cleared: "تم مسح الاسم. سيتم استخدام لاعب.",
    clear_favorites_confirm: "مسح كل المفضلة؟",
    about_label: "حول",
    about_title: "حول TM Arcade V2",
    about_p1:
      "بدأ TM Arcade V2 كفكرة بسيطة — إنشاء مكان يمكن لأي شخص اللعب فيه بدون ضغط. لا تطبيقات للتثبيت ولا خطوات غريبة، فقط افتح واستمتع. تم بناؤه لمن يحب ألعابا سريعة وسلسة تضيف متعة لليوم.",
    about_p2:
      "نركز على البساطة والنظافة. يعمل الموقع على متصفحات أساسية، لذا يمكنك اللعب في المدرسة أو المنزل أو في أي وقت هادئ. كل لعبة مختارة لتحميل سريع وأداء ثابت.",
    about_p3:
      "هدفنا ليس الإعلانات أو التشتيت — فقط ألعاب جيدة وأوقات ممتعة. قد لا تعمل بعض الألعاب على كل الأجهزة أو الشبكات، وهذا خارج سيطرتنا. نحن نختبر ونحدّث باستمرار لتبقى معظم الألعاب تعمل بشكل صحيح.",
    about_p4:
      "TM Arcade V2 مخصص لمن يحب استراحة سريعة أو تحديا بين الحصص. نضيف ألعابا وتحديثات بشكل مستمر، فتابع الجديد دائما.",
    about_p5: "شكرا للعبك ودعمك لTM Arcade V2 — حيث تبقى المتعة بسيطة.",
    app_chatgpt_desc: "اسأل، اكتب، واستكشف الأفكار بسرعة.",
    app_classroom_desc: "الواجبات، الإعلانات، والفصول.",
    app_drive_desc: "حفظ ومشاركة وتنظيم الملفات.",
    app_docs_desc: "إنشاء وتحرير المستندات.",
    app_slides_desc: "أنشئ عروضًا بسرعة.",
    app_gmail_desc: "إدارة بريدك بسهولة.",
    app_clever_desc: "تسجيل موحد لأدوات المدرسة.",
    app_duolingo_desc: "تمارين لغة يومية.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 بواسطة أحمد أبو سمور.",
    player_label: "لاعب",
    greet_title: "أهلاً {name}!",
    greet_body: "سؤال سريع قبل أن نبدأ.",
    greet_theme_question: "هل يمكنني تغيير السمة بناءً على حديثنا؟",
    greet_theme_yes: "نعم، افعلها",
    greet_theme_no: "ليس اليوم",
    greet_day_title: "كيف كان يومك؟",
    greet_day_body: "كن صريحًا، أستطيع تحمّل ذلك.",
    greet_day_great: "رائع",
    greet_day_okay: "جيد",
    greet_day_rough: "صعب",
    greet_reply_great: "سعيد بسماع ذلك.",
    greet_reply_okay: "فهمت، شكرًا لقولك.",
    greet_reply_rough: "آسف أنه كان صعبًا. لنحسّنه.",
    greet_mood_title: "ما مزاجك الآن؟",
    greet_mood_body: "اختر الأقرب.",
    greet_mood_happy: "سعيد",
    greet_mood_neutral: "محايد",
    greet_mood_sad: "حزين",
    greet_energy_title: "كيف طاقتك؟",
    greet_energy_body: "مرتفعة أم منخفضة؟",
    greet_energy_high: "مرتفعة",
    greet_energy_medium: "متوسطة",
    greet_energy_low: "منخفضة",
    greet_stress_title: "مستوى التوتر؟",
    greet_stress_body: "بدون حكم.",
    greet_stress_low: "منخفض",
    greet_stress_mid: "متوسط",
    greet_stress_high: "مرتفع",
    greet_vibe_title: "تريد أجواء هادئة أم حماسية؟",
    greet_vibe_body: "سأضبط الإحساس بناءً على ذلك.",
    greet_vibe_calm: "هادئة",
    greet_vibe_energy: "حماسية",
    greet_focus_title: "ما الذي جئت من أجله؟",
    greet_focus_body: "يساعدني على اختيار الأجواء.",
    greet_focus_play: "اللعب",
    greet_focus_chill: "الاسترخاء",
    greet_focus_focus: "التركيز",
    greet_social_title: "تلعب وحدك أم مع الأصدقاء؟",
    greet_social_body: "يحدد النغمة.",
    greet_social_solo: "وحدي",
    greet_social_friends: "مع الأصدقاء",
    greet_time_title: "كم من الوقت ستبقى؟",
    greet_time_body: "جلسة سريعة أم أطول؟",
    greet_time_quick: "سريعة",
    greet_time_long: "أطول",
    greet_ready_title: "جاهز للبدء؟",
    greet_ready_body: "سأنهي هذا.",
    greet_ready_yes: "جاهز",
    greet_ready_later: "قريبًا",
    greet_wrap_title: "تمّ كل شيء يا {name}.",
    greet_wrap_body_yes: "ضبطت السمة لتناسب الأجواء.",
    greet_wrap_body_no: "السمة تبقى كما هي. جاهز للعب؟",
    greet_close: "لننطلق",
    greet_close_aria: "إغلاق الترحيب",
    open_game: "افتح {name}",
    add_favorite: "أضف إلى المفضلة",
    remove_favorite: "إزالة من المفضلة",
    node_label: "العقدة {id}",
    current_node_favs: "المفضلة",
    current_node_all: "الكل",
    secret_unlocked: "تم فتح الصفحة السرية. جارٍ التحويل...",
    secret_aria_label: "افتح الصفحة السرية",
    rank_rookie: "مبتدئ",
    rank_hooper: "هوبر",
    rank_allstar: "كل النجوم",
    rank_mvp: "أفضل لاعب",
    rank_legend: "أسطورة",
  },
  fr: {
    title_home: "TM Arcade V2 par Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Tous les jeux",
    title_favorites: "TM Arcade V2 | Favoris",
    title_settings: "TM Arcade V2 | Paramètres",
    title_about: "À propos de TM Arcade V2",
    nav_home: "Accueil",
    nav_games: "Tous les jeux",
    nav_favorites: "Favoris",
    nav_settings: "Paramètres",
    nav_about: "À propos",
    emergency: "Urgence",
    home_label: "Accueil",
    welcome: "Bienvenue",
    home_tagline: "Un hub high‑tech propre. Choisis un jeu pour ouvrir sa page dédiée.",
    daily_game: "Jeu du jour",
    daily_badge: "Choix surprise",
    daily_game_desc: "Appuie sur révéler pour découvrir la surprise du jour.",
    tap_reveal: "Appuyer pour révéler",
    play_now: "Jouer",
    see_all_games: "Voir tous les jeux",
    launch_random: "Lancer au hasard",
    view_all_games: "Voir tous les jeux",
    stats_games_ready: "Jeux prêts",
    games_saved: "Jeux enregistrés",
    stats_current_node: "Nœud actuel",
    stats_signal: "Signal",
    signal_stable: "Stable",
    favorites_title: "Favoris",
    favorites_desc: "Tes meilleurs choix, prêts à jouer.",
    favorites_settings_help: "L'écran d'accueil affiche jusqu'à 8 favoris.",
    search_games: "Rechercher des jeux...",
    favorites_empty: "Aucun favori pour l'instant.",
    favorites_add: "Ajouter des favoris",
    recent_title: "Récemment joués",
    recent_desc: "Reprendre rapidement tes dernières sessions.",
    apps_title: "Apps",
    apps_desc: "Accès rapide à tes outils.",
    library_label: "Bibliothèque",
    all_games_title: "Tous les jeux",
    all_games_desc: "Parcours la bibliothèque complète. Chaque jeu s'ouvre sur sa page dédiée.",
    all_games_section_title: "Bibliothèque complète",
    all_games_section_desc: "Clique sur une carte pour ouvrir le jeu.",
    search_all_games: "Rechercher tous les jeux...",
    favorites_filter: "Favoris",
    favorites_label: "Favoris",
    favorites_heading: "Tes favoris",
    favorites_tagline: "Étoile les jeux pour garder ta liste prête.",
    browse_all_games: "Parcourir tous les jeux",
    favorites_section_title: "Jeux favoris",
    favorites_section_desc: "Clique pour jouer. Étoile plus de jeux pour agrandir la liste.",
    search_favorites: "Rechercher dans les favoris...",
    favorites_empty_text:
      "Pas encore de favoris. Va dans Tous les jeux et clique sur l'étoile.",
    settings_label: "Paramètres",
    settings_title: "Paramètres",
    settings_desc: "Ajuste le style et l'ambiance de TM Arcade.",
    back_home: "Retour à l'accueil",
    theme_label: "Thème",
    accent_label: "Accent",
    density_label: "Densité",
    motion_label: "Animation",
    favorites_label_stat: "Favoris",
    ambient_label: "Ambiance",
    personalize_title: "Personnaliser",
    personalize_desc: "Choisis un style, règle les performances et réorganise l'accueil.",
    profile_title: "Profil",
    profile_help: "Définis le nom affiché sur le site.",
    display_name: "Nom affiché",
    confirm_name: "Confirmer le nom",
    display_name_placeholder: "ex. John",
    confirm_name_placeholder: "Ressaisir le nom",
    save_username: "Enregistrer",
    progress_title: "Progression",
    progress_help: "L'XP augmente uniquement pendant le jeu.",
    total_xp: "XP total",
    rank_label: "Rang",
    theme_title: "Thème",
    theme_help: "Choisis l'ambiance globale.",
    accent_title: "Accent",
    accent_help: "Choisis une couleur d'accent.",
    layout_density_title: "Densité de mise en page",
    density_help: "Passe de cartes confort à compact.",
    motion_title: "Animation",
    motion_help: "Réduis les animations.",
    performance_title: "Performance",
    performance_help: "Haute vitesse est la meilleure. Moyen est normal. Faible est super léger.",
    performance_high: "Haute vitesse",
    performance_medium: "Moyen",
    performance_low: "Faible",
    control_center_title: "Centre de contrôle",
    control_center_help: "Glisse pour réorganiser les sections de l'accueil.",
    reset_layout: "Réinitialiser",
    control_move: "Déplacer",
    background_effects_title: "Effets d'arrière‑plan",
    background_effects_help: "Activer/désactiver les orbes et la grille.",
    quick_shortcuts_title: "Raccourcis rapides",
    quick_shortcuts_help: "Accès direct à tes listes.",
    open_favorites: "Ouvrir les favoris",
    browse_games: "Parcourir tous les jeux",
    language_title: "Langue",
    language_help: "Changer la langue du site.",
    lang_en: "Anglais",
    lang_ar: "Arabe (MSA)",
    lang_ar_lev: "Arabe (levantin)",
    lang_fr: "Français",
    lang_es: "Espagnol",
    lang_de: "Allemand",
    lang_tr: "Turc",
    lang_it: "Italien",
    lang_ru: "Russe",
    lang_el: "Grec",
    lang_hi: "Hindi",
    theme_default: "Par défaut",
    theme_dark: "Sombre",
    theme_light: "Clair",
    theme_ocean: "Océan",
    theme_forest: "Forêt",
    theme_sunset: "Coucher de soleil",
    accent_neon: "Néon",
    accent_magenta: "Magenta",
    accent_emerald: "Émeraude",
    accent_amber: "Ambre",
    accent_violet: "Violet",
    density_comfort: "Confort",
    density_compact: "Compact",
    motion_full: "Complet",
    motion_reduced: "Réduit",
    on: "Activé",
    off: "Désactivé",
    favorites_saved: "{count} enregistrés",
    clear_favorites: "Effacer les favoris",
    name_saved: "Nom enregistré.",
    name_mismatch: "Les noms ne correspondent pas.",
    name_short: "Le nom doit avoir au moins 2 caractères.",
    name_cleared: "Nom effacé. Joueur sera utilisé.",
    clear_favorites_confirm: "Effacer tous les favoris ?",
    about_label: "À propos",
    about_title: "À propos de TM Arcade V2",
    about_p1:
      "TM Arcade V2 est né d'une idée simple — créer un endroit où tout le monde peut jouer sans stress. Pas d'apps à installer, pas d'étapes bizarres, juste ouvrir et profiter. Conçu pour des jeux rapides et fluides.",
    about_p2:
      "Nous gardons les choses propres et simples. Le site tourne sur des navigateurs basiques, pour jouer à l'école, à la maison ou ailleurs. Chaque jeu est choisi pour un chargement rapide et des performances solides.",
    about_p3:
      "Notre objectif n'est pas de vous noyer de pubs — juste de bons jeux et de bons moments. Certains titres peuvent ne pas fonctionner partout, hors de notre contrôle. Nous testons et mettons à jour pour garder la plupart des jeux opérationnels.",
    about_p4:
      "TM Arcade V2 est fait pour ceux qui aiment une pause rapide ou un défi entre deux cours. De nouveaux jeux arrivent souvent, revenez voir les nouveautés.",
    about_p5: "Merci de jouer et de soutenir TM Arcade V2 — où le fun reste simple.",
    app_chatgpt_desc: "Demander, rédiger et explorer des idées vite.",
    app_classroom_desc: "Devoirs, annonces et cours.",
    app_drive_desc: "Stocker, partager et organiser des fichiers.",
    app_docs_desc: "Créer et modifier des documents.",
    app_slides_desc: "Créer des présentations rapidement.",
    app_gmail_desc: "Gérer votre boîte mail facilement.",
    app_clever_desc: "Connexion unique pour les outils scolaires.",
    app_duolingo_desc: "Sessions quotidiennes de langues.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 par Ahmad Abu Sammour.",
    player_label: "Joueur",
    greet_title: "Salut {name} !",
    greet_body: "Petite question avant de commencer.",
    greet_theme_question: "Puis‑je changer le thème selon notre discussion ?",
    greet_theme_yes: "Oui, fais‑le",
    greet_theme_no: "Pas aujourd'hui",
    greet_day_title: "Comment s'est passée ta journée ?",
    greet_day_body: "Sois honnête, je peux encaisser.",
    greet_day_great: "Super",
    greet_day_okay: "Ça va",
    greet_day_rough: "Dure",
    greet_reply_great: "Ravi d'entendre ça.",
    greet_reply_okay: "Compris. Merci de me l'avoir dit.",
    greet_reply_rough: "Désolé que ce soit dur. On va améliorer ça.",
    greet_mood_title: "Quelle est ton humeur là, maintenant ?",
    greet_mood_body: "Choisis ce qui s'en rapproche.",
    greet_mood_happy: "Heureux",
    greet_mood_neutral: "Neutre",
    greet_mood_sad: "Triste",
    greet_energy_title: "Ton énergie ?",
    greet_energy_body: "Haute ou basse ?",
    greet_energy_high: "Haute",
    greet_energy_medium: "Moyenne",
    greet_energy_low: "Basse",
    greet_stress_title: "Niveau de stress ?",
    greet_stress_body: "Sans jugement.",
    greet_stress_low: "Bas",
    greet_stress_mid: "Moyen",
    greet_stress_high: "Élevé",
    greet_vibe_title: "Plutôt une ambiance calme ou énergique ?",
    greet_vibe_body: "Je vais ajuster l'ambiance avec ça.",
    greet_vibe_calm: "Calme",
    greet_vibe_energy: "Énergique",
    greet_focus_title: "Tu es là pour quoi ?",
    greet_focus_body: "Ça m'aide à choisir l'ambiance.",
    greet_focus_play: "Jouer",
    greet_focus_chill: "Chill",
    greet_focus_focus: "Se concentrer",
    greet_social_title: "Tu joues seul ou avec des amis ?",
    greet_social_body: "Ça donne le ton.",
    greet_social_solo: "Solo",
    greet_social_friends: "Amis",
    greet_time_title: "Tu restes combien de temps ?",
    greet_time_body: "Session rapide ou plus longue ?",
    greet_time_quick: "Rapide",
    greet_time_long: "Plus longue",
    greet_ready_title: "Prêt à commencer ?",
    greet_ready_body: "Je termine ça.",
    greet_ready_yes: "Prêt",
    greet_ready_later: "Presque",
    greet_wrap_title: "Tout est prêt, {name}.",
    greet_wrap_body_yes: "J'ai ajusté le thème à l'ambiance.",
    greet_wrap_body_no: "Le thème ne change pas. Prêt à jouer ?",
    greet_close: "On y va",
    greet_close_aria: "Fermer l'accueil",
    open_game: "Ouvrir {name}",
    add_favorite: "Ajouter aux favoris",
    remove_favorite: "Retirer des favoris",
    node_label: "Nœud {id}",
    current_node_favs: "FAVS",
    current_node_all: "TOUS",
    secret_unlocked: "Débloqué : page Top Secret. Redirection...",
    secret_aria_label: "Ouvrir la page Top Secret",
    rank_rookie: "Débutant",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Légende",
  },
  es: {
    title_home: "TM Arcade V2 por Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Todos los juegos",
    title_favorites: "TM Arcade V2 | Favoritos",
    title_settings: "TM Arcade V2 | Ajustes",
    title_about: "Acerca de TM Arcade V2",
    nav_home: "Inicio",
    nav_games: "Todos los juegos",
    nav_favorites: "Favoritos",
    nav_settings: "Ajustes",
    nav_about: "Acerca de",
    emergency: "Emergencia",
    home_label: "Inicio",
    welcome: "Bienvenido",
    home_tagline: "Un panel de alta tecnología. Elige un juego para abrir su página.",
    daily_game: "Juego del día",
    daily_badge: "Sorpresa",
    daily_game_desc: "Toca revelar para ver la sorpresa de hoy.",
    tap_reveal: "Toca para revelar",
    play_now: "Jugar ahora",
    see_all_games: "Ver todos los juegos",
    launch_random: "Lanzar aleatorio",
    view_all_games: "Ver todos los juegos",
    stats_games_ready: "Juegos listos",
    games_saved: "Juegos guardados",
    stats_current_node: "Nodo actual",
    stats_signal: "Señal",
    signal_stable: "Estable",
    favorites_title: "Favoritos",
    favorites_desc: "Tus mejores elecciones, listas para jugar.",
    favorites_settings_help: "La pantalla de inicio muestra hasta 8 favoritos.",
    search_games: "Buscar juegos...",
    favorites_empty: "Sin favoritos todavía.",
    favorites_add: "Agregar favoritos",
    recent_title: "Jugados recientemente",
    recent_desc: "Reanuda rápido tus últimas sesiones.",
    apps_title: "Apps",
    apps_desc: "Acceso rápido a tus herramientas.",
    library_label: "Biblioteca",
    all_games_title: "Todos los juegos",
    all_games_desc: "Explora la biblioteca completa. Cada juego abre su página.",
    all_games_section_title: "Biblioteca completa",
    all_games_section_desc: "Toca una tarjeta para abrir el juego.",
    search_all_games: "Buscar todos los juegos...",
    favorites_filter: "Favoritos",
    favorites_label: "Favoritos",
    favorites_heading: "Tus favoritos",
    favorites_tagline: "Marca juegos para tener tu lista lista.",
    browse_all_games: "Explorar todos los juegos",
    favorites_section_title: "Juegos favoritos",
    favorites_section_desc: "Toca una tarjeta para jugar. Marca más juegos para ampliar.",
    search_favorites: "Buscar en favoritos...",
    favorites_empty_text: "Aún no hay favoritos. Ve a Todos los juegos y toca la estrella.",
    settings_label: "Ajustes",
    settings_title: "Ajustes",
    settings_desc: "Ajusta el estilo y la sensación de TM Arcade.",
    back_home: "Volver al inicio",
    theme_label: "Tema",
    accent_label: "Acento",
    density_label: "Densidad",
    motion_label: "Movimiento",
    favorites_label_stat: "Favoritos",
    ambient_label: "Ambiente",
    personalize_title: "Personalizar",
    personalize_desc: "Elige un estilo, ajusta rendimiento y reordena el inicio.",
    profile_title: "Perfil",
    profile_help: "Define el nombre mostrado.",
    display_name: "Nombre para mostrar",
    confirm_name: "Confirmar nombre",
    display_name_placeholder: "ej. Juan",
    confirm_name_placeholder: "Reingresa el nombre",
    save_username: "Guardar nombre",
    progress_title: "Progreso",
    progress_help: "La XP solo sube mientras juegas.",
    total_xp: "XP total",
    rank_label: "Rango",
    theme_title: "Tema",
    theme_help: "Elige el estilo general.",
    accent_title: "Acento",
    accent_help: "Elige un color de acento.",
    layout_density_title: "Densidad de diseño",
    density_help: "Cambia entre cómodo y compacto.",
    motion_title: "Movimiento",
    motion_help: "Reduce animaciones.",
    performance_title: "Rendimiento",
    performance_help: "Alta velocidad es la mejor. Medio es normal. Bajo es súper ligero.",
    performance_high: "Alta velocidad",
    performance_medium: "Medio",
    performance_low: "Bajo",
    control_center_title: "Centro de control",
    control_center_help: "Arrastra para reordenar secciones del inicio.",
    reset_layout: "Restablecer",
    control_move: "Mover",
    background_effects_title: "Efectos de fondo",
    background_effects_help: "Alterna orbes y rejilla.",
    quick_shortcuts_title: "Accesos rápidos",
    quick_shortcuts_help: "Salta directo a tus listas.",
    open_favorites: "Abrir favoritos",
    browse_games: "Explorar todos los juegos",
    language_title: "Idioma",
    language_help: "Cambia el idioma del sitio.",
    lang_en: "Inglés",
    lang_ar: "Árabe (MSA)",
    lang_ar_lev: "Árabe (levantino)",
    lang_fr: "Francés",
    lang_es: "Español",
    lang_de: "Alemán",
    lang_tr: "Turco",
    lang_it: "Italiano",
    lang_ru: "Ruso",
    lang_el: "Griego",
    lang_hi: "Hindi",
    theme_default: "Predeterminado",
    theme_dark: "Oscuro",
    theme_light: "Claro",
    theme_ocean: "Océano",
    theme_forest: "Bosque",
    theme_sunset: "Atardecer",
    accent_neon: "Neón",
    accent_magenta: "Magenta",
    accent_emerald: "Esmeralda",
    accent_amber: "Ámbar",
    accent_violet: "Violeta",
    density_comfort: "Cómodo",
    density_compact: "Compacto",
    motion_full: "Completo",
    motion_reduced: "Reducido",
    on: "Activado",
    off: "Desactivado",
    favorites_saved: "{count} guardados",
    clear_favorites: "Borrar favoritos",
    name_saved: "Nombre guardado.",
    name_mismatch: "Los nombres no coinciden.",
    name_short: "El nombre debe tener al menos 2 caracteres.",
    name_cleared: "Nombre borrado. Se usará Jugador.",
    clear_favorites_confirm: "¿Borrar todos los favoritos?",
    about_label: "Acerca de",
    about_title: "Acerca de TM Arcade V2",
    about_p1:
      "TM Arcade V2 nació de una idea simple: crear un lugar para jugar sin estrés. Sin apps ni pasos raros, solo abrir y disfrutar. Hecho para juegos rápidos y fluidos.",
    about_p2:
      "Nos enfocamos en mantener todo limpio y simple. El sitio funciona en navegadores básicos, para jugar en la escuela o en casa. Cada juego se elige por carga rápida y buen rendimiento.",
    about_p3:
      "Nuestro objetivo no es llenarte de anuncios, solo buenos juegos y buenos ratos. Algunos títulos pueden no funcionar en todos los dispositivos; seguimos probando y actualizando.",
    about_p4:
      "TM Arcade V2 es para quienes quieren un descanso rápido o un reto entre clases. Nuevos juegos llegan seguido, vuelve para ver lo nuevo.",
    about_p5: "Gracias por jugar y apoyar TM Arcade V2 — donde la diversión es simple.",
    app_chatgpt_desc: "Pregunta, redacta y explora ideas rápido.",
    app_classroom_desc: "Tareas, anuncios y clases.",
    app_drive_desc: "Guardar, compartir y organizar archivos.",
    app_docs_desc: "Crear y editar documentos.",
    app_slides_desc: "Crear presentaciones rápido.",
    app_gmail_desc: "Gestiona tu correo al instante.",
    app_clever_desc: "Inicio de sesión único para herramientas escolares.",
    app_duolingo_desc: "Sesiones diarias de idiomas.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 por Ahmad Abu Sammour.",
    player_label: "Jugador",
    greet_title: "¡Hola {name}!",
    greet_body: "Una pregunta rápida antes de empezar.",
    greet_theme_question: "¿Puedo cambiar el tema según nuestra charla?",
    greet_theme_yes: "Sí, hazlo",
    greet_theme_no: "Hoy no",
    greet_day_title: "¿Cómo estuvo tu día?",
    greet_day_body: "Sé honesto, puedo con eso.",
    greet_day_great: "Genial",
    greet_day_okay: "Bien",
    greet_day_rough: "Difícil",
    greet_reply_great: "Me alegra escucharlo.",
    greet_reply_okay: "Entiendo. Gracias por contármelo.",
    greet_reply_rough: "Lamento que haya sido duro. Hagámoslo mejor.",
    greet_mood_title: "¿Cómo está tu ánimo ahora?",
    greet_mood_body: "Elige lo más cercano.",
    greet_mood_happy: "Feliz",
    greet_mood_neutral: "Neutral",
    greet_mood_sad: "Triste",
    greet_energy_title: "¿Cómo está tu energía?",
    greet_energy_body: "¿Alta o baja?",
    greet_energy_high: "Alta",
    greet_energy_medium: "Media",
    greet_energy_low: "Baja",
    greet_stress_title: "¿Nivel de estrés?",
    greet_stress_body: "Sin juicio.",
    greet_stress_low: "Bajo",
    greet_stress_mid: "Medio",
    greet_stress_high: "Alto",
    greet_vibe_title: "¿Quieres un ambiente calmado o enérgico?",
    greet_vibe_body: "Ajustaré el ambiente con eso.",
    greet_vibe_calm: "Calmado",
    greet_vibe_energy: "Enérgico",
    greet_focus_title: "¿Para qué estás aquí?",
    greet_focus_body: "Me ayuda a elegir el ambiente.",
    greet_focus_play: "Jugar",
    greet_focus_chill: "Relajar",
    greet_focus_focus: "Enfocarme",
    greet_social_title: "¿Juegas solo o con amigos?",
    greet_social_body: "Marca el tono.",
    greet_social_solo: "Solo",
    greet_social_friends: "Amigos",
    greet_time_title: "¿Cuánto tiempo te quedas?",
    greet_time_body: "¿Sesión rápida o más larga?",
    greet_time_quick: "Rápida",
    greet_time_long: "Más larga",
    greet_ready_title: "¿Listo para empezar?",
    greet_ready_body: "Ya termino esto.",
    greet_ready_yes: "Listo",
    greet_ready_later: "Casi",
    greet_wrap_title: "Todo listo, {name}.",
    greet_wrap_body_yes: "Ajusté el tema al ambiente.",
    greet_wrap_body_no: "El tema no cambia. ¿Listo para jugar?",
    greet_close: "Vamos",
    greet_close_aria: "Cerrar saludo",
    open_game: "Abrir {name}",
    add_favorite: "Agregar a favoritos",
    remove_favorite: "Quitar de favoritos",
    node_label: "Nodo {id}",
    current_node_favs: "FAVS",
    current_node_all: "TODO",
    secret_unlocked: "Desbloqueado: página ultrasecreta. Redirigiendo...",
    secret_aria_label: "Abrir página ultrasecreta",
    rank_rookie: "Novato",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Leyenda",
  },
  de: {
    title_home: "TM Arcade V2 von Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Alle Spiele",
    title_favorites: "TM Arcade V2 | Favoriten",
    title_settings: "TM Arcade V2 | Einstellungen",
    title_about: "Über TM Arcade V2",
    nav_home: "Start",
    nav_games: "Alle Spiele",
    nav_favorites: "Favoriten",
    nav_settings: "Einstellungen",
    nav_about: "Über",
    emergency: "Notfall",
    home_label: "Start",
    welcome: "Willkommen",
    home_tagline: "Ein sauberes High‑Tech‑Dashboard. Wähle ein Spiel für die eigene Seite.",
    daily_game: "Spiel des Tages",
    daily_badge: "Überraschung",
    daily_game_desc: "Tippe auf Enthüllen, um die Überraschung zu sehen.",
    tap_reveal: "Tippen zum Enthüllen",
    play_now: "Jetzt spielen",
    see_all_games: "Alle Spiele ansehen",
    launch_random: "Zufällig starten",
    view_all_games: "Alle Spiele ansehen",
    stats_games_ready: "Spiele bereit",
    games_saved: "Gespeicherte Spiele",
    stats_current_node: "Aktueller Knoten",
    stats_signal: "Signal",
    signal_stable: "Stabil",
    favorites_title: "Favoriten",
    favorites_desc: "Deine Top‑Auswahl, startklar.",
    favorites_settings_help: "Die Startseite zeigt bis zu 8 Favoriten.",
    search_games: "Spiele suchen...",
    favorites_empty: "Noch keine Favoriten.",
    favorites_add: "Favoriten hinzufügen",
    recent_title: "Zuletzt gespielt",
    recent_desc: "Schnell an letzten Sessions anknüpfen.",
    apps_title: "Apps",
    apps_desc: "Schneller Zugriff auf deine Tools.",
    library_label: "Bibliothek",
    all_games_title: "Alle Spiele",
    all_games_desc: "Durchsuche die komplette Bibliothek. Jedes Spiel öffnet eine eigene Seite.",
    all_games_section_title: "Gesamte Bibliothek",
    all_games_section_desc: "Tippe eine Karte, um das Spiel zu öffnen.",
    search_all_games: "Alle Spiele suchen...",
    favorites_filter: "Favoriten",
    favorites_label: "Favoriten",
    favorites_heading: "Deine Favoriten",
    favorites_tagline: "Spiele mit Stern markieren, um die Liste bereit zu halten.",
    browse_all_games: "Alle Spiele durchsuchen",
    favorites_section_title: "Lieblingsspiele",
    favorites_section_desc: "Tippe eine Karte zum Spielen. Sterne für mehr.",
    search_favorites: "Favoriten durchsuchen...",
    favorites_empty_text: "Noch keine Favoriten. Gehe zu Alle Spiele und tippe auf den Stern.",
    settings_label: "Einstellungen",
    settings_title: "Einstellungen",
    settings_desc: "Optik und Gefühl von TM Arcade anpassen.",
    back_home: "Zurück zum Start",
    theme_label: "Design",
    accent_label: "Akzent",
    density_label: "Dichte",
    motion_label: "Bewegung",
    favorites_label_stat: "Favoriten",
    ambient_label: "Ambiente",
    personalize_title: "Personalisieren",
    personalize_desc: "Vibe wählen, Leistung einstellen und Startseite anordnen.",
    profile_title: "Profil",
    profile_help: "Name für die Anzeige festlegen.",
    display_name: "Anzeigename",
    confirm_name: "Name bestätigen",
    display_name_placeholder: "z. B. Max",
    confirm_name_placeholder: "Name erneut eingeben",
    save_username: "Name speichern",
    progress_title: "Fortschritt",
    progress_help: "XP wächst nur beim Spielen.",
    total_xp: "Gesamt‑XP",
    rank_label: "Rang",
    theme_title: "Design",
    theme_help: "Wähle das Gesamt‑Design.",
    accent_title: "Akzent",
    accent_help: "Akzentfarbe auswählen.",
    layout_density_title: "Layout‑Dichte",
    density_help: "Zwischen Komfort und Kompakt wechseln.",
    motion_title: "Bewegung",
    motion_help: "Animationen reduzieren.",
    performance_title: "Leistung",
    performance_help: "High Speed ist am besten. Medium ist normal. Low ist sehr leicht.",
    performance_high: "High Speed",
    performance_medium: "Medium",
    performance_low: "Low",
    control_center_title: "Kontrollzentrum",
    control_center_help: "Ziehe, um die Startabschnitte anzuordnen.",
    reset_layout: "Layout zurücksetzen",
    control_move: "Verschieben",
    background_effects_title: "Hintergrundeffekte",
    background_effects_help: "Orbs und Raster umschalten.",
    quick_shortcuts_title: "Schnellzugriffe",
    quick_shortcuts_help: "Direkt zu deinen Listen springen.",
    open_favorites: "Favoriten öffnen",
    browse_games: "Alle Spiele durchsuchen",
    language_title: "Sprache",
    language_help: "Sprache der Seite ändern.",
    lang_en: "Englisch",
    lang_ar: "Arabisch (MSA)",
    lang_ar_lev: "Arabisch (Levantinisch)",
    lang_fr: "Französisch",
    lang_es: "Spanisch",
    lang_de: "Deutsch",
    lang_tr: "Türkisch",
    lang_it: "Italienisch",
    lang_ru: "Russisch",
    lang_el: "Griechisch",
    lang_hi: "Hindi",
    theme_default: "Standard",
    theme_dark: "Dunkel",
    theme_light: "Hell",
    theme_ocean: "Ozean",
    theme_forest: "Wald",
    theme_sunset: "Sonnenuntergang",
    accent_neon: "Neon",
    accent_magenta: "Magenta",
    accent_emerald: "Smaragd",
    accent_amber: "Bernstein",
    accent_violet: "Violett",
    density_comfort: "Komfort",
    density_compact: "Kompakt",
    motion_full: "Voll",
    motion_reduced: "Reduziert",
    on: "An",
    off: "Aus",
    favorites_saved: "{count} gespeichert",
    clear_favorites: "Favoriten löschen",
    name_saved: "Name gespeichert.",
    name_mismatch: "Namen stimmen nicht überein.",
    name_short: "Der Name muss mindestens 2 Zeichen haben.",
    name_cleared: "Name gelöscht. Spieler wird verwendet.",
    clear_favorites_confirm: "Alle Favoriten löschen?",
    about_label: "Über",
    about_title: "Über TM Arcade V2",
    about_p1:
      "TM Arcade V2 entstand aus einer einfachen Idee: ein stressfreier Ort zum Spielen. Keine Apps, keine seltsamen Schritte, einfach öffnen und Spaß haben. Für schnelle und flüssige Spiele.",
    about_p2:
      "Wir halten alles sauber und simpel. Die Seite läuft in einfachen Browsern, damit du überall spielen kannst. Jedes Spiel ist für schnelles Laden und gute Performance ausgewählt.",
    about_p3:
      "Unser Ziel ist nicht Werbung, sondern gute Spiele und gute Zeiten. Manche Titel laufen nicht überall, wir testen und aktualisieren regelmäßig.",
    about_p4:
      "TM Arcade V2 ist für kurze Pausen oder Herausforderungen zwischen den Stunden. Neue Spiele kommen oft, schau wieder vorbei.",
    about_p5: "Danke fürs Spielen und Unterstützen von TM Arcade V2 — einfach Spaß.",
    app_chatgpt_desc: "Fragen, schreiben und Ideen schnell erkunden.",
    app_classroom_desc: "Aufgaben, Ankündigungen und Klassen.",
    app_drive_desc: "Dateien speichern, teilen und organisieren.",
    app_docs_desc: "Dokumente erstellen und bearbeiten.",
    app_slides_desc: "Präsentationen schnell erstellen.",
    app_gmail_desc: "Posteingang schnell verwalten.",
    app_clever_desc: "Single‑Sign‑On für Schul‑Tools.",
    app_duolingo_desc: "Tägliche Sprachübungen.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 von Ahmad Abu Sammour.",
    player_label: "Spieler",
    greet_title: "Hi {name}!",
    greet_body: "Kurze Frage, bevor wir starten.",
    greet_theme_question: "Darf ich das Theme nach unserem Chat ändern?",
    greet_theme_yes: "Ja, mach das",
    greet_theme_no: "Heute nicht",
    greet_day_title: "Wie war dein Tag?",
    greet_day_body: "Sei ehrlich, ich pack das.",
    greet_day_great: "Super",
    greet_day_okay: "Okay",
    greet_day_rough: "Hart",
    greet_reply_great: "Schön zu hören.",
    greet_reply_okay: "Alles klar. Danke fürs Sagen.",
    greet_reply_rough: "Tut mir leid, dass er hart war. Lass uns das besser machen.",
    greet_mood_title: "Wie ist deine Stimmung gerade?",
    greet_mood_body: "Such das Passendste aus.",
    greet_mood_happy: "Fröhlich",
    greet_mood_neutral: "Neutral",
    greet_mood_sad: "Traurig",
    greet_energy_title: "Wie ist deine Energie?",
    greet_energy_body: "Hoch oder niedrig?",
    greet_energy_high: "Hoch",
    greet_energy_medium: "Mittel",
    greet_energy_low: "Niedrig",
    greet_stress_title: "Stresslevel?",
    greet_stress_body: "Ohne Urteil.",
    greet_stress_low: "Niedrig",
    greet_stress_mid: "Mittel",
    greet_stress_high: "Hoch",
    greet_vibe_title: "Lieber ruhig oder energetisch?",
    greet_vibe_body: "Ich richte das Gefühl danach aus.",
    greet_vibe_calm: "Ruhig",
    greet_vibe_energy: "Energie",
    greet_focus_title: "Wofür bist du hier?",
    greet_focus_body: "Hilft mir, den Vibe zu wählen.",
    greet_focus_play: "Spielen",
    greet_focus_chill: "Chillen",
    greet_focus_focus: "Fokus",
    greet_social_title: "Spielst du allein oder mit Freunden?",
    greet_social_body: "Gibt den Ton an.",
    greet_social_solo: "Allein",
    greet_social_friends: "Freunde",
    greet_time_title: "Wie lange bleibst du?",
    greet_time_body: "Kurze Session oder länger?",
    greet_time_quick: "Kurz",
    greet_time_long: "Länger",
    greet_ready_title: "Bereit loszulegen?",
    greet_ready_body: "Ich mache das fertig.",
    greet_ready_yes: "Bereit",
    greet_ready_later: "Gleich",
    greet_wrap_title: "Alles klar, {name}.",
    greet_wrap_body_yes: "Ich habe das Theme an den Vibe angepasst.",
    greet_wrap_body_no: "Theme bleibt gleich. Bereit zu spielen?",
    greet_close: "Los geht's",
    greet_close_aria: "Begrüßung schließen",
    open_game: "{name} öffnen",
    add_favorite: "Zu Favoriten hinzufügen",
    remove_favorite: "Aus Favoriten entfernen",
    node_label: "Knoten {id}",
    current_node_favs: "FAVS",
    current_node_all: "ALLE",
    secret_unlocked: "Freigeschaltet: Top-Secret-Seite. Weiterleitung...",
    secret_aria_label: "Top-Secret-Seite öffnen",
    rank_rookie: "Neuling",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Legende",
  },
  tr: {
    title_home: "TM Arcade V2, Ahmad Abu Sammour tarafından",
    title_games: "TM Arcade V2 | Tüm Oyunlar",
    title_favorites: "TM Arcade V2 | Favoriler",
    title_settings: "TM Arcade V2 | Ayarlar",
    title_about: "TM Arcade V2 Hakkında",
    nav_home: "Ana Ekran",
    nav_games: "Tüm Oyunlar",
    nav_favorites: "Favoriler",
    nav_settings: "Ayarlar",
    nav_about: "Hakkında",
    emergency: "Acil",
    home_label: "Ana Ekran",
    welcome: "Hoş geldin",
    home_tagline: "Temiz, yüksek teknoloji bir panel. Bir oyun seç ve oyun sayfasını aç.",
    daily_game: "Günün Oyunu",
    daily_badge: "Sürpriz Seçim",
    daily_game_desc: "Bugünün sürprizini açmak için keşfete dokun.",
    tap_reveal: "Keşfetmek için dokun",
    play_now: "Şimdi Oyna",
    see_all_games: "Tüm Oyunları Gör",
    launch_random: "Rastgele Başlat",
    view_all_games: "Tüm Oyunları Gör",
    stats_games_ready: "Hazır Oyunlar",
    games_saved: "Kaydedilen Oyunlar",
    stats_current_node: "Mevcut Düğüm",
    stats_signal: "Sinyal",
    signal_stable: "Stabil",
    favorites_title: "Favoriler",
    favorites_desc: "En iyi seçimlerin, oynamaya hazır.",
    favorites_settings_help: "Ana Ekran en fazla 8 favori gösterir.",
    search_games: "Oyun ara...",
    favorites_empty: "Henüz favori yok.",
    favorites_add: "Favori ekle",
    recent_title: "Son Oynananlar",
    recent_desc: "Son oturumlarına hızlı devam.",
    apps_title: "Uygulamalar",
    apps_desc: "En çok kullandığın araçlara hızlı erişim.",
    library_label: "Kütüphane",
    all_games_title: "Tüm Oyunlar",
    all_games_desc: "Tüm kütüphaneyi gez. Her oyun kendi sayfasında açılır.",
    all_games_section_title: "Tüm Oyun Kütüphanesi",
    all_games_section_desc: "Bir karta dokun ve oyunu aç.",
    search_all_games: "Tüm oyunlarda ara...",
    favorites_filter: "Favoriler",
    favorites_label: "Favoriler",
    favorites_heading: "Favorilerin",
    favorites_tagline: "Kişisel listen hazır kalsın diye oyunları yıldızla.",
    browse_all_games: "Tüm Oyunlara Göz At",
    favorites_section_title: "Favori Oyunlar",
    favorites_section_desc: "Bir karta dokun ve oyunu başlat. Daha fazla oyun yıldızla.",
    search_favorites: "Favorilerde ara...",
    favorites_empty_text: "Henüz favori yok. Tüm Oyunlar'a git ve yıldıza dokun.",
    settings_label: "Ayarlar",
    settings_title: "Ayarlar",
    settings_desc: "TM Arcade görünümünü ince ayarla.",
    back_home: "Ana sayfaya dön",
    theme_label: "Tema",
    accent_label: "Vurgu",
    density_label: "Yoğunluk",
    motion_label: "Hareket",
    favorites_label_stat: "Favoriler",
    ambient_label: "Ortam",
    personalize_title: "Kişiselleştir",
    personalize_desc: "Bir vibe seç, performansı ayarla ve ana ekranı düzenle.",
    profile_title: "Profil",
    profile_help: "Sitede görünen adı ayarla.",
    display_name: "Görünen ad",
    confirm_name: "Adı doğrula",
    display_name_placeholder: "örn. Ahmet",
    confirm_name_placeholder: "Adı tekrar yaz",
    save_username: "Kullanıcı Adını Kaydet",
    progress_title: "İlerleme",
    progress_help: "XP yalnızca aktif oynarken artar.",
    total_xp: "Toplam XP",
    rank_label: "Rütbe",
    theme_title: "Tema",
    theme_help: "Site için bir vibe seç.",
    accent_title: "Vurgu",
    accent_help: "Vurgular için neon renk seç.",
    layout_density_title: "Yerleşim Yoğunluğu",
    density_help: "Rahat ve kompakt kartlar arasında geç.",
    motion_title: "Hareket",
    motion_help: "Daha sakin bir his için animasyonları azalt.",
    performance_title: "Performans",
    performance_help: "Yüksek Hız en iyisi. Orta normal. Düşük zayıf bilgisayarlar için çok hafif.",
    performance_high: "Yüksek Hız",
    performance_medium: "Orta",
    performance_low: "Düşük",
    control_center_title: "Kontrol Merkezi",
    control_center_help: "Ana ekrandaki bölümleri sürükleyerek sırala.",
    reset_layout: "Yerleşimi sıfırla",
    control_move: "Taşı",
    background_effects_title: "Arka Plan Efektleri",
    background_effects_help: "Orbları ve ızgarayı aç/kapat.",
    quick_shortcuts_title: "Hızlı Kısayollar",
    quick_shortcuts_help: "Listelerine hızlıca git.",
    open_favorites: "Favorileri Aç",
    browse_games: "Tüm Oyunlara Göz At",
    language_title: "Dil",
    language_help: "Site dilini değiştir.",
    lang_en: "İngilizce",
    lang_ar: "Arapça (MSA)",
    lang_ar_lev: "Arapça (Şami)",
    lang_fr: "Fransızca",
    lang_es: "İspanyolca",
    lang_de: "Almanca",
    lang_tr: "Türkçe",
    lang_it: "İtalyanca",
    lang_ru: "Rusça",
    lang_el: "Yunanca",
    lang_hi: "Hintçe",
    theme_default: "Varsayılan",
    theme_dark: "Karanlık",
    theme_light: "Açık",
    theme_ocean: "Okyanus",
    theme_forest: "Orman",
    theme_sunset: "Gün batımı",
    accent_neon: "Neon",
    accent_magenta: "Magenta",
    accent_emerald: "Zümrüt",
    accent_amber: "Kehribar",
    accent_violet: "Menekşe",
    density_comfort: "Rahat",
    density_compact: "Kompakt",
    motion_full: "Tam",
    motion_reduced: "Azaltılmış",
    on: "Açık",
    off: "Kapalı",
    favorites_saved: "{count} kaydedildi",
    clear_favorites: "Favorileri temizle",
    name_saved: "Kullanıcı adı kaydedildi.",
    name_mismatch: "İsimler eşleşmiyor.",
    name_short: "Kullanıcı adı en az 2 karakter olmalı.",
    name_cleared: "Kullanıcı adı temizlendi. Oyuncu kullanılacak.",
    clear_favorites_confirm: "Tüm favoriler temizlensin mi?",
    about_label: "Hakkında",
    about_title: "TM Arcade V2 Hakkında",
    about_p1:
      "TM Arcade V2 basit bir fikirle başladı — herkesin strese girmeden oynayabileceği bir yer yapmak. Uygulama yok, garip adımlar yok; sadece aç ve eğlen. Hızlı ve akıcı çalışan oyunları sevenler için.",
    about_p2:
      "Her şeyi temiz ve basit tutuyoruz. Site temel tarayıcılarda çalışır; okulda, evde veya sakin bir anda oynayabilirsin. Her oyun hızlı yükleme ve sağlam performans için seçildi.",
    about_p3:
      "Amacımız reklamla boğmak değil — sadece iyi oyunlar ve iyi zamanlar. Bazı oyunlar her cihazda veya ağda çalışmayabilir; bu bizim kontrolümüz dışında. Çoğu oyunun çalışır kalması için sürekli test ve güncelleme yapıyoruz.",
    about_p4:
      "TM Arcade V2 kısa molalar veya ders arası meydan okumalar için. Yeni oyunlar ve güncellemeler sık gelir, geri gel ve yenilere bak.",
    about_p5: "Oynadığın ve desteklediğin için teşekkürler — eğlence basit kalsın.",
    app_chatgpt_desc: "Sor, yaz ve fikirleri hızlıca keşfet.",
    app_classroom_desc: "Ödevler, duyurular ve dersler.",
    app_drive_desc: "Dosyaları sakla, paylaş ve düzenle.",
    app_docs_desc: "Belgeler oluştur ve düzenle.",
    app_slides_desc: "Sunumları hızlıca oluştur.",
    app_gmail_desc: "Gelen kutunu hızlı yönet.",
    app_clever_desc: "Okul araçları için tek oturum.",
    app_duolingo_desc: "Günlük dil pratikleri.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2, Ahmad Abu Sammour tarafından.",
    player_label: "Oyuncu",
    greet_title: "Merhaba {name}!",
    greet_body: "Başlamadan önce kısa bir soru.",
    greet_theme_question: "Sohbetimize göre temayı değiştirebilir miyim?",
    greet_theme_yes: "Evet, yap",
    greet_theme_no: "Bugün değil",
    greet_day_title: "Günün nasıldı?",
    greet_day_body: "Dürüst ol, kaldırırım.",
    greet_day_great: "Harika",
    greet_day_okay: "İyi",
    greet_day_rough: "Zor",
    greet_reply_great: "Bunu duymak güzel.",
    greet_reply_okay: "Anladım. Söylediğin için teşekkürler.",
    greet_reply_rough: "Üzgünüm zor geçmiş. Daha iyi yapalım.",
    greet_mood_title: "Şu anki ruh halin nasıl?",
    greet_mood_body: "En yakını seç.",
    greet_mood_happy: "Mutlu",
    greet_mood_neutral: "Nötr",
    greet_mood_sad: "Üzgün",
    greet_energy_title: "Enerjin nasıl?",
    greet_energy_body: "Yüksek mi düşük mü?",
    greet_energy_high: "Yüksek",
    greet_energy_medium: "Orta",
    greet_energy_low: "Düşük",
    greet_stress_title: "Stres seviyesi?",
    greet_stress_body: "Yargı yok.",
    greet_stress_low: "Düşük",
    greet_stress_mid: "Orta",
    greet_stress_high: "Yüksek",
    greet_vibe_title: "Sakin mi enerjik mi?",
    greet_vibe_body: "Hissi buna göre ayarlayacağım.",
    greet_vibe_calm: "Sakin",
    greet_vibe_energy: "Enerjik",
    greet_focus_title: "Burada olma amacın ne?",
    greet_focus_body: "Vibe seçmemi kolaylaştırır.",
    greet_focus_play: "Oynamak",
    greet_focus_chill: "Rahatlamak",
    greet_focus_focus: "Odaklanmak",
    greet_social_title: "Tek başına mı arkadaşlarla mı?",
    greet_social_body: "Havanı belirler.",
    greet_social_solo: "Tek",
    greet_social_friends: "Arkadaşlarla",
    greet_time_title: "Ne kadar takılacaksın?",
    greet_time_body: "Kısa seans mı daha uzun mu?",
    greet_time_quick: "Kısa",
    greet_time_long: "Daha uzun",
    greet_ready_title: "Başlamaya hazır mısın?",
    greet_ready_body: "Bunu tamamlıyorum.",
    greet_ready_yes: "Hazır",
    greet_ready_later: "Az kaldı",
    greet_wrap_title: "Her şey hazır, {name}.",
    greet_wrap_body_yes: "Temayı vibe'a göre ayarladım.",
    greet_wrap_body_no: "Tema aynı kalıyor. Oynamaya hazır mısın?",
    greet_close: "Hadi",
    greet_close_aria: "Karşılamayı kapat",
    open_game: "{name} aç",
    add_favorite: "Favorilere ekle",
    remove_favorite: "Favorilerden kaldır",
    node_label: "Düğüm {id}",
    current_node_favs: "FAVS",
    current_node_all: "TÜM",
    secret_unlocked: "Açıldı: Gizli sayfa. Yönlendiriliyor...",
    secret_aria_label: "Gizli sayfayı aç",
    rank_rookie: "Çaylak",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Efsane",
  },
  it: {
    title_home: "TM Arcade V2 di Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Tutti i giochi",
    title_favorites: "TM Arcade V2 | Preferiti",
    title_settings: "TM Arcade V2 | Impostazioni",
    title_about: "Informazioni su TM Arcade V2",
    nav_home: "Home",
    nav_games: "Tutti i giochi",
    nav_favorites: "Preferiti",
    nav_settings: "Impostazioni",
    nav_about: "Info",
    emergency: "Emergenza",
    home_label: "Home",
    welcome: "Benvenuto",
    home_tagline: "Una plancia pulita e hi‑tech. Scegli un gioco per aprire la sua pagina.",
    daily_game: "Gioco del giorno",
    daily_badge: "Scelta sorpresa",
    daily_game_desc: "Tocca Rivela per sbloccare la sorpresa di oggi.",
    tap_reveal: "Tocca per rivelare",
    play_now: "Gioca ora",
    see_all_games: "Vedi tutti i giochi",
    launch_random: "Avvia casuale",
    view_all_games: "Vedi tutti i giochi",
    stats_games_ready: "Giochi pronti",
    games_saved: "Giochi salvati",
    stats_current_node: "Nodo attuale",
    stats_signal: "Segnale",
    signal_stable: "Stabile",
    favorites_title: "Preferiti",
    favorites_desc: "Le tue scelte migliori, pronte a partire.",
    favorites_settings_help: "La Home mostra fino a 8 preferiti.",
    search_games: "Cerca giochi...",
    favorites_empty: "Nessun preferito ancora.",
    favorites_add: "Aggiungi preferiti",
    recent_title: "Giocati di recente",
    recent_desc: "Riprendi velocemente le ultime sessioni.",
    apps_title: "App",
    apps_desc: "Accesso rapido agli strumenti più usati.",
    library_label: "Libreria",
    all_games_title: "Tutti i giochi",
    all_games_desc: "Sfoglia la libreria completa. Ogni gioco apre la sua pagina.",
    all_games_section_title: "Libreria giochi",
    all_games_section_desc: "Tocca una carta per aprire il gioco.",
    search_all_games: "Cerca in tutti i giochi...",
    favorites_filter: "Preferiti",
    favorites_label: "Preferiti",
    favorites_heading: "I tuoi preferiti",
    favorites_tagline: "Metti la stella per tenere la lista pronta.",
    browse_all_games: "Sfoglia tutti i giochi",
    favorites_section_title: "Giochi preferiti",
    favorites_section_desc: "Tocca una carta per giocare. Aggiungi stelle per ampliarla.",
    search_favorites: "Cerca nei preferiti...",
    favorites_empty_text: "Nessun preferito. Vai a Tutti i giochi e tocca la stella.",
    settings_label: "Impostazioni",
    settings_title: "Impostazioni",
    settings_desc: "Regola l’aspetto di TM Arcade.",
    back_home: "Torna alla Home",
    theme_label: "Tema",
    accent_label: "Accento",
    density_label: "Densità",
    motion_label: "Animazioni",
    favorites_label_stat: "Preferiti",
    ambient_label: "Ambiente",
    personalize_title: "Personalizza",
    personalize_desc: "Scegli un vibe, regola le prestazioni e riordina la Home.",
    profile_title: "Profilo",
    profile_help: "Imposta il nome mostrato sul sito.",
    display_name: "Nome visualizzato",
    confirm_name: "Conferma nome",
    display_name_placeholder: "es. Marco",
    confirm_name_placeholder: "Reinserisci il nome",
    save_username: "Salva nome",
    progress_title: "Progresso",
    progress_help: "Gli XP crescono solo mentre giochi.",
    total_xp: "XP totali",
    rank_label: "Grado",
    theme_title: "Tema",
    theme_help: "Scegli il vibe del sito.",
    accent_title: "Accento",
    accent_help: "Scegli un accento neon.",
    layout_density_title: "Densità layout",
    density_help: "Passa da carte comode a compatte.",
    motion_title: "Animazioni",
    motion_help: "Riduci le animazioni.",
    performance_title: "Prestazioni",
    performance_help: "Alta velocità è la migliore. Media è normale. Bassa è super leggera.",
    performance_high: "Alta velocità",
    performance_medium: "Media",
    performance_low: "Bassa",
    control_center_title: "Centro di controllo",
    control_center_help: "Trascina per riordinare le sezioni della Home.",
    reset_layout: "Reimposta layout",
    control_move: "Sposta",
    background_effects_title: "Effetti di sfondo",
    background_effects_help: "Attiva/disattiva orbi e griglia.",
    quick_shortcuts_title: "Scorciatoie rapide",
    quick_shortcuts_help: "Vai subito alle tue liste.",
    open_favorites: "Apri preferiti",
    browse_games: "Sfoglia tutti i giochi",
    language_title: "Lingua",
    language_help: "Cambia la lingua del sito.",
    lang_en: "Inglese",
    lang_ar: "Arabo (MSA)",
    lang_ar_lev: "Arabo (levantino)",
    lang_fr: "Francese",
    lang_es: "Spagnolo",
    lang_de: "Tedesco",
    lang_tr: "Turco",
    lang_it: "Italiano",
    lang_ru: "Russo",
    lang_el: "Greco",
    lang_hi: "Hindi",
    theme_default: "Predefinito",
    theme_dark: "Scuro",
    theme_light: "Chiaro",
    theme_ocean: "Oceano",
    theme_forest: "Foresta",
    theme_sunset: "Tramonto",
    accent_neon: "Neon",
    accent_magenta: "Magenta",
    accent_emerald: "Smeraldo",
    accent_amber: "Ambra",
    accent_violet: "Viola",
    density_comfort: "Comodo",
    density_compact: "Compatto",
    motion_full: "Completo",
    motion_reduced: "Ridotto",
    on: "Attivo",
    off: "Disattivo",
    favorites_saved: "{count} salvati",
    clear_favorites: "Cancella preferiti",
    name_saved: "Nome utente salvato.",
    name_mismatch: "I nomi non corrispondono.",
    name_short: "Il nome deve avere almeno 2 caratteri.",
    name_cleared: "Nome cancellato. Verrà usato Giocatore.",
    clear_favorites_confirm: "Cancellare tutti i preferiti?",
    about_label: "Info",
    about_title: "Informazioni su TM Arcade V2",
    about_p1:
      "TM Arcade V2 è nato da un'idea semplice — creare un posto dove chiunque possa giocare senza stress. Niente app, niente passaggi strani, solo apri e divertiti. Pensato per giochi veloci e fluidi.",
    about_p2:
      "Ci concentriamo su pulizia e semplicità. Il sito gira su browser base, così puoi giocare a scuola, a casa o quando trovi un momento. Ogni gioco è scelto per caricamento rapido e buone prestazioni.",
    about_p3:
      "Il nostro obiettivo non è riempirti di ads — solo bei giochi e bei momenti. Alcuni titoli potrebbero non funzionare ovunque; lo stiamo migliorando continuamente.",
    about_p4:
      "TM Arcade V2 è per chi vuole una pausa veloce o una sfida tra le lezioni. Nuovi giochi e aggiornamenti arrivano spesso, torna a vedere le novità.",
    about_p5: "Grazie per giocare e supportare TM Arcade V2 — dove il divertimento resta semplice.",
    app_chatgpt_desc: "Chiedi, scrivi ed esplora idee velocemente.",
    app_classroom_desc: "Compiti, annunci e classi.",
    app_drive_desc: "Salva, condividi e organizza file.",
    app_docs_desc: "Crea e modifica documenti.",
    app_slides_desc: "Crea presentazioni rapidamente.",
    app_gmail_desc: "Gestisci la posta al volo.",
    app_clever_desc: "Single sign‑on per strumenti scolastici.",
    app_duolingo_desc: "Sessioni quotidiane di lingua.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 di Ahmad Abu Sammour.",
    player_label: "Giocatore",
    greet_title: "Ciao {name}!",
    greet_body: "Domanda veloce prima di iniziare.",
    greet_theme_question: "Posso cambiare il tema in base alla chat?",
    greet_theme_yes: "Sì, fallo",
    greet_theme_no: "Non oggi",
    greet_day_title: "Com'è andata la tua giornata?",
    greet_day_body: "Sii sincero, reggo.",
    greet_day_great: "Ottima",
    greet_day_okay: "Così così",
    greet_day_rough: "Dura",
    greet_reply_great: "Sono felice di sentirlo.",
    greet_reply_okay: "Capito. Grazie per avermelo detto.",
    greet_reply_rough: "Mi dispiace sia stata dura. Rendiamola migliore.",
    greet_mood_title: "Come ti senti adesso?",
    greet_mood_body: "Scegli ciò che si avvicina di più.",
    greet_mood_happy: "Felice",
    greet_mood_neutral: "Neutro",
    greet_mood_sad: "Triste",
    greet_energy_title: "Com'è la tua energia?",
    greet_energy_body: "Alta o bassa?",
    greet_energy_high: "Alta",
    greet_energy_medium: "Media",
    greet_energy_low: "Bassa",
    greet_stress_title: "Livello di stress?",
    greet_stress_body: "Nessun giudizio.",
    greet_stress_low: "Basso",
    greet_stress_mid: "Medio",
    greet_stress_high: "Alto",
    greet_vibe_title: "Vuoi un vibe calmo o energico?",
    greet_vibe_body: "Regolerò l'atmosfera in base a questo.",
    greet_vibe_calm: "Calmo",
    greet_vibe_energy: "Energico",
    greet_focus_title: "Per cosa sei qui?",
    greet_focus_body: "Mi aiuta a scegliere il vibe.",
    greet_focus_play: "Giocare",
    greet_focus_chill: "Rilassarmi",
    greet_focus_focus: "Concentrarmi",
    greet_social_title: "Giochi da solo o con amici?",
    greet_social_body: "Imposta il tono.",
    greet_social_solo: "Da solo",
    greet_social_friends: "Amici",
    greet_time_title: "Quanto tempo resti?",
    greet_time_body: "Sessione veloce o più lunga?",
    greet_time_quick: "Veloce",
    greet_time_long: "Più lunga",
    greet_ready_title: "Pronto a iniziare?",
    greet_ready_body: "Chiudo qui.",
    greet_ready_yes: "Pronto",
    greet_ready_later: "Quasi",
    greet_wrap_title: "Tutto pronto, {name}.",
    greet_wrap_body_yes: "Ho regolato il tema sul vibe.",
    greet_wrap_body_no: "Il tema resta uguale. Pronto a giocare?",
    greet_close: "Andiamo",
    greet_close_aria: "Chiudi saluto",
    open_game: "Apri {name}",
    add_favorite: "Aggiungi ai preferiti",
    remove_favorite: "Rimuovi dai preferiti",
    node_label: "Nodo {id}",
    current_node_favs: "PREF",
    current_node_all: "TUTTI",
    secret_unlocked: "Sbloccato: pagina top secret. Reindirizzamento...",
    secret_aria_label: "Apri la pagina top secret",
    rank_rookie: "Principiante",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Leggenda",
  },
  ru: {
    title_home: "TM Arcade V2 от Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Все игры",
    title_favorites: "TM Arcade V2 | Избранное",
    title_settings: "TM Arcade V2 | Настройки",
    title_about: "О TM Arcade V2",
    nav_home: "Главная",
    nav_games: "Все игры",
    nav_favorites: "Избранное",
    nav_settings: "Настройки",
    nav_about: "О нас",
    emergency: "Экстренно",
    home_label: "Главная",
    welcome: "Добро пожаловать",
    home_tagline: "Чистый hi‑tech лаунчер. Выберите игру, чтобы открыть её страницу.",
    daily_game: "Игра дня",
    daily_badge: "Сюрприз",
    daily_game_desc: "Нажмите «Открыть», чтобы узнать сюрприз дня.",
    tap_reveal: "Нажмите, чтобы открыть",
    play_now: "Играть",
    see_all_games: "Все игры",
    launch_random: "Случайный запуск",
    view_all_games: "Посмотреть все игры",
    stats_games_ready: "Готовые игры",
    games_saved: "Сохранённые игры",
    stats_current_node: "Текущий узел",
    stats_signal: "Сигнал",
    signal_stable: "Стабильный",
    favorites_title: "Избранное",
    favorites_desc: "Ваши лучшие игры, готовые к запуску.",
    favorites_settings_help: "На главной показывается до 8 избранных.",
    search_games: "Поиск игр...",
    favorites_empty: "Пока нет избранных.",
    favorites_add: "Добавить в избранное",
    recent_title: "Недавно играли",
    recent_desc: "Быстро продолжить последние сессии.",
    apps_title: "Приложения",
    apps_desc: "Быстрый доступ к часто используемым инструментам.",
    library_label: "Библиотека",
    all_games_title: "Все игры",
    all_games_desc: "Просмотрите всю библиотеку. Каждая игра открывается на своей странице.",
    all_games_section_title: "Библиотека игр",
    all_games_section_desc: "Нажмите карточку, чтобы открыть игру.",
    search_all_games: "Поиск по всем играм...",
    favorites_filter: "Избранное",
    favorites_label: "Избранное",
    favorites_heading: "Ваши избранные",
    favorites_tagline: "Отмечайте игры звёздочкой, чтобы список был под рукой.",
    browse_all_games: "Просмотреть все игры",
    favorites_section_title: "Избранные игры",
    favorites_section_desc: "Нажмите карточку, чтобы запустить игру. Отмечайте больше игр.",
    search_favorites: "Поиск в избранном...",
    favorites_empty_text: "Пока нет избранных. Откройте «Все игры» и нажмите на звёздочку.",
    settings_label: "Настройки",
    settings_title: "Настройки",
    settings_desc: "Настройте внешний вид TM Arcade.",
    back_home: "Назад на главную",
    theme_label: "Тема",
    accent_label: "Акцент",
    density_label: "Плотность",
    motion_label: "Анимация",
    favorites_label_stat: "Избранное",
    ambient_label: "Атмосфера",
    personalize_title: "Персонализация",
    personalize_desc: "Выберите вайб, настройте производительность и порядок на главной.",
    profile_title: "Профиль",
    profile_help: "Укажите имя, отображаемое на сайте.",
    display_name: "Отображаемое имя",
    confirm_name: "Подтвердите имя",
    display_name_placeholder: "например, Иван",
    confirm_name_placeholder: "Повторите имя",
    save_username: "Сохранить имя",
    progress_title: "Прогресс",
    progress_help: "XP растёт только когда вы активно играете.",
    total_xp: "Всего XP",
    rank_label: "Ранг",
    theme_title: "Тема",
    theme_help: "Выберите общий вайб сайта.",
    accent_title: "Акцент",
    accent_help: "Выберите неоновый акцент.",
    layout_density_title: "Плотность макета",
    density_help: "Переключайтесь между комфортным и компактным.",
    motion_title: "Анимация",
    motion_help: "Уменьшить анимации.",
    performance_title: "Производительность",
    performance_help: "Высокая скорость — лучшая. Средняя — обычная. Низкая — очень лёгкая.",
    performance_high: "Высокая скорость",
    performance_medium: "Средняя",
    performance_low: "Низкая",
    control_center_title: "Центр управления",
    control_center_help: "Перетащите, чтобы упорядочить разделы главной.",
    reset_layout: "Сбросить макет",
    control_move: "Переместить",
    background_effects_title: "Эффекты фона",
    background_effects_help: "Включить/выключить орбы и сетку.",
    quick_shortcuts_title: "Быстрые ярлыки",
    quick_shortcuts_help: "Быстрый переход к спискам.",
    open_favorites: "Открыть избранное",
    browse_games: "Просмотреть все игры",
    language_title: "Язык",
    language_help: "Изменить язык сайта.",
    lang_en: "Английский",
    lang_ar: "Арабский (MSA)",
    lang_ar_lev: "Арабский (Левантийский)",
    lang_fr: "Французский",
    lang_es: "Испанский",
    lang_de: "Немецкий",
    lang_tr: "Турецкий",
    lang_it: "Итальянский",
    lang_ru: "Русский",
    lang_el: "Греческий",
    lang_hi: "Хинди",
    theme_default: "По умолчанию",
    theme_dark: "Тёмная",
    theme_light: "Светлая",
    theme_ocean: "Океан",
    theme_forest: "Лес",
    theme_sunset: "Закат",
    accent_neon: "Неон",
    accent_magenta: "Маджента",
    accent_emerald: "Изумруд",
    accent_amber: "Янтарь",
    accent_violet: "Фиолетовый",
    density_comfort: "Комфорт",
    density_compact: "Компакт",
    motion_full: "Полная",
    motion_reduced: "Сниженная",
    on: "Вкл.",
    off: "Выкл.",
    favorites_saved: "{count} сохранено",
    clear_favorites: "Очистить избранное",
    name_saved: "Имя сохранено.",
    name_mismatch: "Имена не совпадают.",
    name_short: "Имя должно быть не короче 2 символов.",
    name_cleared: "Имя очищено. Используется Игрок.",
    clear_favorites_confirm: "Очистить все избранные?",
    about_label: "О нас",
    about_title: "О TM Arcade V2",
    about_p1:
      "TM Arcade V2 начался с простой идеи — создать место, где любой может играть без стресса. Никаких приложений и лишних шагов, просто открой и наслаждайся. Для тех, кто любит быстрые и плавные игры.",
    about_p2:
      "Мы держим всё простым и чистым. Сайт работает в базовых браузерах, так что играть можно в школе, дома или в любой тихий момент. Каждая игра подобрана для быстрого запуска и стабильной работы.",
    about_p3:
      "Наша цель — не перегружать рекламой, а дать хорошие игры и хорошие моменты. Некоторые игры могут не работать на каждом устройстве или сети, это вне нашего контроля. Мы постоянно тестируем и обновляем, чтобы большинство игр работали.",
    about_p4:
      "TM Arcade V2 для тех, кто хочет короткий перерыв или челлендж между занятиями. Новые игры и обновления выходят часто — возвращайтесь за новинками.",
    about_p5: "Спасибо за игру и поддержку TM Arcade V2 — пусть веселье будет простым.",
    app_chatgpt_desc: "Спрашивайте, пишите и быстро исследуйте идеи.",
    app_classroom_desc: "Задания, объявления и классы.",
    app_drive_desc: "Храните, делитесь и организуйте файлы.",
    app_docs_desc: "Создавайте и редактируйте документы.",
    app_slides_desc: "Быстро создавайте презентации.",
    app_gmail_desc: "Управляйте почтой на ходу.",
    app_clever_desc: "Единый вход для школьных инструментов.",
    app_duolingo_desc: "Ежедневные языковые занятия.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 от Ahmad Abu Sammour.",
    player_label: "Игрок",
    greet_title: "Привет, {name}!",
    greet_body: "Быстрый вопрос перед началом.",
    greet_theme_question: "Можно изменить тему по нашему разговору?",
    greet_theme_yes: "Да, меняй",
    greet_theme_no: "Не сегодня",
    greet_day_title: "Как прошёл твой день?",
    greet_day_body: "Честно, я выдержу.",
    greet_day_great: "Отлично",
    greet_day_okay: "Нормально",
    greet_day_rough: "Тяжело",
    greet_reply_great: "Рад это слышать.",
    greet_reply_okay: "Понял. Спасибо, что сказал.",
    greet_reply_rough: "Жаль, что было тяжело. Давай сделаем лучше.",
    greet_mood_title: "Какое у тебя сейчас настроение?",
    greet_mood_body: "Выбери самое близкое.",
    greet_mood_happy: "Счастливое",
    greet_mood_neutral: "Нейтральное",
    greet_mood_sad: "Грустное",
    greet_energy_title: "Как с энергией?",
    greet_energy_body: "Высокая или низкая?",
    greet_energy_high: "Высокая",
    greet_energy_medium: "Средняя",
    greet_energy_low: "Низкая",
    greet_stress_title: "Уровень стресса?",
    greet_stress_body: "Без оценки.",
    greet_stress_low: "Низкий",
    greet_stress_mid: "Средний",
    greet_stress_high: "Высокий",
    greet_vibe_title: "Хочешь спокойный или энергичный вайб?",
    greet_vibe_body: "Я настрою атмосферу под это.",
    greet_vibe_calm: "Спокойный",
    greet_vibe_energy: "Энергичный",
    greet_focus_title: "Зачем ты здесь?",
    greet_focus_body: "Помогает выбрать вайб.",
    greet_focus_play: "Играть",
    greet_focus_chill: "Расслабиться",
    greet_focus_focus: "Сконцентрироваться",
    greet_social_title: "Играешь один или с друзьями?",
    greet_social_body: "Задаёт тон.",
    greet_social_solo: "Один",
    greet_social_friends: "С друзьями",
    greet_time_title: "Сколько времени ты тут?",
    greet_time_body: "Быстрая сессия или подольше?",
    greet_time_quick: "Быстро",
    greet_time_long: "Дольше",
    greet_ready_title: "Готов начать?",
    greet_ready_body: "Заканчиваю.",
    greet_ready_yes: "Готов",
    greet_ready_later: "Почти",
    greet_wrap_title: "Готово, {name}.",
    greet_wrap_body_yes: "Я подобрал тему под настроение.",
    greet_wrap_body_no: "Тема остаётся. Готов играть?",
    greet_close: "Поехали",
    greet_close_aria: "Закрыть приветствие",
    open_game: "Открыть {name}",
    add_favorite: "Добавить в избранное",
    remove_favorite: "Убрать из избранного",
    node_label: "Узел {id}",
    current_node_favs: "ИЗБР",
    current_node_all: "ВСЕ",
    secret_unlocked: "Открыто: секретная страница. Перенаправление...",
    secret_aria_label: "Открыть секретную страницу",
    rank_rookie: "Новичок",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Легенда",
  },
  el: {
    title_home: "TM Arcade V2 από Ahmad Abu Sammour",
    title_games: "TM Arcade V2 | Όλα τα παιχνίδια",
    title_favorites: "TM Arcade V2 | Αγαπημένα",
    title_settings: "TM Arcade V2 | Ρυθμίσεις",
    title_about: "Σχετικά με το TM Arcade V2",
    nav_home: "Αρχική",
    nav_games: "Όλα τα παιχνίδια",
    nav_favorites: "Αγαπημένα",
    nav_settings: "Ρυθμίσεις",
    nav_about: "Σχετικά",
    emergency: "Έκτακτο",
    home_label: "Αρχική",
    welcome: "Καλώς ήρθες",
    home_tagline: "Ένα καθαρό, hi‑tech ταμπλό. Διάλεξε παιχνίδι για να ανοίξει η σελίδα του.",
    daily_game: "Παιχνίδι της ημέρας",
    daily_badge: "Έκπληξη",
    daily_game_desc: "Πάτα αποκάλυψη για τη σημερινή έκπληξη.",
    tap_reveal: "Πάτα για αποκάλυψη",
    play_now: "Παίξε τώρα",
    see_all_games: "Δες όλα τα παιχνίδια",
    launch_random: "Τυχαία εκκίνηση",
    view_all_games: "Δες όλα τα παιχνίδια",
    stats_games_ready: "Παιχνίδια έτοιμα",
    games_saved: "Αποθηκευμένα παιχνίδια",
    stats_current_node: "Τρέχων κόμβος",
    stats_signal: "Σήμα",
    signal_stable: "Σταθερό",
    favorites_title: "Αγαπημένα",
    favorites_desc: "Οι κορυφαίες επιλογές σου, έτοιμες.",
    favorites_settings_help: "Η αρχική δείχνει έως 8 αγαπημένα.",
    search_games: "Αναζήτηση παιχνιδιών...",
    favorites_empty: "Δεν υπάρχουν αγαπημένα ακόμα.",
    favorites_add: "Πρόσθεσε αγαπημένα",
    recent_title: "Παίχτηκαν πρόσφατα",
    recent_desc: "Γρήγορη συνέχεια από τις τελευταίες σου συνεδρίες.",
    apps_title: "Εφαρμογές",
    apps_desc: "Γρήγορη πρόσβαση στα εργαλεία σου.",
    library_label: "Βιβλιοθήκη",
    all_games_title: "Όλα τα παιχνίδια",
    all_games_desc: "Περιήγηση σε όλη τη βιβλιοθήκη. Κάθε παιχνίδι ανοίγει τη δική του σελίδα.",
    all_games_section_title: "Βιβλιοθήκη παιχνιδιών",
    all_games_section_desc: "Πάτα μια κάρτα για να ανοίξει το παιχνίδι.",
    search_all_games: "Αναζήτηση σε όλα τα παιχνίδια...",
    favorites_filter: "Αγαπημένα",
    favorites_label: "Αγαπημένα",
    favorites_heading: "Τα αγαπημένα σου",
    favorites_tagline: "Βάλε αστέρι για να κρατάς τη λίστα έτοιμη.",
    browse_all_games: "Περιήγηση σε όλα τα παιχνίδια",
    favorites_section_title: "Αγαπημένα παιχνίδια",
    favorites_section_desc: "Πάτα μια κάρτα για να παίξεις. Βάλε αστέρι σε περισσότερα.",
    search_favorites: "Αναζήτηση στα αγαπημένα...",
    favorites_empty_text: "Δεν υπάρχουν αγαπημένα. Πήγαινε στα Όλα τα παιχνίδια και πάτα το αστέρι.",
    settings_label: "Ρυθμίσεις",
    settings_title: "Ρυθμίσεις",
    settings_desc: "Ρύθμισε το look & feel του TM Arcade.",
    back_home: "Πίσω στην αρχική",
    theme_label: "Θέμα",
    accent_label: "Έμφαση",
    density_label: "Πυκνότητα",
    motion_label: "Κίνηση",
    favorites_label_stat: "Αγαπημένα",
    ambient_label: "Ατμόσφαιρα",
    personalize_title: "Προσωποποίηση",
    personalize_desc: "Διάλεξε vibe, ρύθμισε απόδοση και σειρά στην αρχική.",
    profile_title: "Προφίλ",
    profile_help: "Όρισε το όνομα που εμφανίζεται.",
    display_name: "Εμφανιζόμενο όνομα",
    confirm_name: "Επιβεβαίωση ονόματος",
    display_name_placeholder: "π.χ. Γιάννης",
    confirm_name_placeholder: "Ξαναγράψε το όνομα",
    save_username: "Αποθήκευση ονόματος",
    progress_title: "Πρόοδος",
    progress_help: "Το XP αυξάνεται μόνο όταν παίζεις ενεργά.",
    total_xp: "Συνολικό XP",
    rank_label: "Κατάταξη",
    theme_title: "Θέμα",
    theme_help: "Διάλεξε το γενικό vibe.",
    accent_title: "Έμφαση",
    accent_help: "Διάλεξε neon accent.",
    layout_density_title: "Πυκνότητα διάταξης",
    density_help: "Μεταξύ άνετων και συμπαγών καρτών.",
    motion_title: "Κίνηση",
    motion_help: "Μείωσε τα animations.",
    performance_title: "Απόδοση",
    performance_help: "Υψηλή ταχύτητα είναι η καλύτερη. Μεσαία είναι κανονική. Χαμηλή είναι πολύ ελαφριά.",
    performance_high: "Υψηλή ταχύτητα",
    performance_medium: "Μεσαία",
    performance_low: "Χαμηλή",
    control_center_title: "Κέντρο ελέγχου",
    control_center_help: "Σύρε για να αναδιατάξεις τις ενότητες της αρχικής.",
    reset_layout: "Επαναφορά διάταξης",
    control_move: "Μετακίνηση",
    background_effects_title: "Εφέ φόντου",
    background_effects_help: "Ενεργοποίηση/απενεργοποίηση orbs και grid.",
    quick_shortcuts_title: "Γρήγορες συντομεύσεις",
    quick_shortcuts_help: "Πήγαινε κατευθείαν στις λίστες σου.",
    open_favorites: "Άνοιγμα αγαπημένων",
    browse_games: "Περιήγηση σε όλα τα παιχνίδια",
    language_title: "Γλώσσα",
    language_help: "Αλλαγή γλώσσας του site.",
    lang_en: "Αγγλικά",
    lang_ar: "Αραβικά (MSA)",
    lang_ar_lev: "Αραβικά (Λεβαντίνικα)",
    lang_fr: "Γαλλικά",
    lang_es: "Ισπανικά",
    lang_de: "Γερμανικά",
    lang_tr: "Τουρκικά",
    lang_it: "Ιταλικά",
    lang_ru: "Ρωσικά",
    lang_el: "Ελληνικά",
    lang_hi: "Χίντι",
    theme_default: "Προεπιλογή",
    theme_dark: "Σκούρο",
    theme_light: "Ανοιχτό",
    theme_ocean: "Ωκεανός",
    theme_forest: "Δάσος",
    theme_sunset: "Ηλιοβασίλεμα",
    accent_neon: "Νέον",
    accent_magenta: "Ματζέντα",
    accent_emerald: "Σμαραγδί",
    accent_amber: "Κεχριμπάρι",
    accent_violet: "Μωβ",
    density_comfort: "Άνετο",
    density_compact: "Συμπαγές",
    motion_full: "Πλήρες",
    motion_reduced: "Μειωμένο",
    on: "Ενεργό",
    off: "Ανενεργό",
    favorites_saved: "Αποθηκεύτηκαν {count}",
    clear_favorites: "Καθάρισμα αγαπημένων",
    name_saved: "Το όνομα αποθηκεύτηκε.",
    name_mismatch: "Τα ονόματα δεν ταιριάζουν.",
    name_short: "Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες.",
    name_cleared: "Το όνομα διαγράφηκε. Θα χρησιμοποιηθεί Παίκτης.",
    clear_favorites_confirm: "Να καθαριστούν όλα τα αγαπημένα;",
    about_label: "Σχετικά",
    about_title: "Σχετικά με το TM Arcade V2",
    about_p1:
      "Το TM Arcade V2 ξεκίνησε από μια απλή ιδέα — να φτιάξουμε έναν χώρο όπου όλοι μπορούν να παίζουν χωρίς άγχος. Χωρίς εφαρμογές, χωρίς περίεργα βήματα, απλώς άνοιξε και παίξε. Για όσους αγαπούν γρήγορα και ομαλά παιχνίδια.",
    about_p2:
      "Κρατάμε τα πράγματα καθαρά και απλά. Το site τρέχει σε βασικούς browsers, ώστε να παίζεις στο σχολείο, στο σπίτι ή όταν έχεις λίγο χρόνο. Κάθε παιχνίδι επιλέγεται για γρήγορη φόρτωση και σταθερή απόδοση.",
    about_p3:
      "Στόχος μας δεν είναι οι διαφημίσεις ή οι αποσπάσεις — μόνο καλά παιχνίδια και καλές στιγμές. Κάποιοι τίτλοι μπορεί να μην δουλεύουν σε κάθε συσκευή ή δίκτυο, κάτι εκτός ελέγχου. Συνεχίζουμε να δοκιμάζουμε και να ενημερώνουμε.",
    about_p4:
      "Το TM Arcade V2 είναι για όσους θέλουν μια γρήγορη ανάσα ή μια πρόκληση ανάμεσα στα μαθήματα. Νέα παιχνίδια και ενημερώσεις έρχονται συχνά — ξαναπέρνα για τα νέα.",
    about_p5: "Ευχαριστούμε που παίζεις και στηρίζεις το TM Arcade V2 — η διασκέδαση μένει απλή.",
    app_chatgpt_desc: "Ρώτα, γράψε και εξερεύνησε ιδέες γρήγορα.",
    app_classroom_desc: "Εργασίες, ανακοινώσεις και τάξεις.",
    app_drive_desc: "Αποθήκευση, κοινή χρήση και οργάνωση αρχείων.",
    app_docs_desc: "Δημιούργησε και επεξεργάσου έγγραφα.",
    app_slides_desc: "Δημιούργησε παρουσιάσεις γρήγορα.",
    app_gmail_desc: "Διαχείριση εισερχομένων στο λεπτό.",
    app_clever_desc: "Ενιαίος έλεγχος ταυτότητας για σχολικά εργαλεία.",
    app_duolingo_desc: "Καθημερινές συνεδρίες γλώσσας.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 από Ahmad Abu Sammour.",
    player_label: "Παίκτης",
    greet_title: "Γεια σου {name}!",
    greet_body: "Μια γρήγορη ερώτηση πριν ξεκινήσουμε.",
    greet_theme_question: "Να αλλάξω το θέμα με βάση τη συζήτησή μας;",
    greet_theme_yes: "Ναι, κάν’ το",
    greet_theme_no: "Όχι σήμερα",
    greet_day_title: "Πώς πήγε η μέρα σου;",
    greet_day_body: "Να είσαι ειλικρινής, μπορώ.",
    greet_day_great: "Τέλεια",
    greet_day_okay: "Καλά",
    greet_day_rough: "Δύσκολα",
    greet_reply_great: "Χαίρομαι που το ακούω.",
    greet_reply_okay: "Οκ. Ευχαριστώ που το είπες.",
    greet_reply_rough: "Λυπάμαι που ήταν δύσκολη. Πάμε να το βελτιώσουμε.",
    greet_mood_title: "Πώς είναι η διάθεσή σου τώρα;",
    greet_mood_body: "Διάλεξε το πιο κοντινό.",
    greet_mood_happy: "Χαρούμενη",
    greet_mood_neutral: "Ουδέτερη",
    greet_mood_sad: "Λυπημένη",
    greet_energy_title: "Πώς είναι η ενέργειά σου;",
    greet_energy_body: "Υψηλή ή χαμηλή;",
    greet_energy_high: "Υψηλή",
    greet_energy_medium: "Μεσαία",
    greet_energy_low: "Χαμηλή",
    greet_stress_title: "Επίπεδο στρες;",
    greet_stress_body: "Χωρίς κριτική.",
    greet_stress_low: "Χαμηλό",
    greet_stress_mid: "Μέτριο",
    greet_stress_high: "Υψηλό",
    greet_vibe_title: "Θες ήρεμο ή ενεργητικό vibe;",
    greet_vibe_body: "Θα το ρυθμίσω ανάλογα.",
    greet_vibe_calm: "Ήρεμο",
    greet_vibe_energy: "Ενεργητικό",
    greet_focus_title: "Γιατί είσαι εδώ;",
    greet_focus_body: "Με βοηθά να διαλέξω vibe.",
    greet_focus_play: "Παίξω",
    greet_focus_chill: "Χαλαρώσω",
    greet_focus_focus: "Εστιάσω",
    greet_social_title: "Παίζεις μόνος ή με φίλους;",
    greet_social_body: "Καθορίζει τον τόνο.",
    greet_social_solo: "Μόνος",
    greet_social_friends: "Φίλοι",
    greet_time_title: "Πόσο θα μείνεις;",
    greet_time_body: "Γρήγορη συνεδρία ή πιο μεγάλη;",
    greet_time_quick: "Γρήγορη",
    greet_time_long: "Πιο μεγάλη",
    greet_ready_title: "Έτοιμος να ξεκινήσουμε;",
    greet_ready_body: "Το κλείνω.",
    greet_ready_yes: "Έτοιμος",
    greet_ready_later: "Σχεδόν",
    greet_wrap_title: "Έτοιμο, {name}.",
    greet_wrap_body_yes: "Ρύθμισα το θέμα στο vibe.",
    greet_wrap_body_no: "Το θέμα μένει ίδιο. Έτοιμος να παίξεις;",
    greet_close: "Πάμε",
    greet_close_aria: "Κλείσιμο χαιρετισμού",
    open_game: "Άνοιξε {name}",
    add_favorite: "Προσθήκη στα αγαπημένα",
    remove_favorite: "Αφαίρεση από τα αγαπημένα",
    node_label: "Κόμβος {id}",
    current_node_favs: "ΑΓΑΠ",
    current_node_all: "ΟΛΑ",
    secret_unlocked: "Ξεκλειδώθηκε: Μυστική σελίδα. Μεταφορά...",
    secret_aria_label: "Άνοιγμα μυστικής σελίδας",
    rank_rookie: "Αρχάριος",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "Θρύλος",
  },
  hi: {
    title_home: "TM Arcade V2 - Ahmad Abu Sammour द्वारा",
    title_games: "TM Arcade V2 | सभी गेम",
    title_favorites: "TM Arcade V2 | पसंदीदा",
    title_settings: "TM Arcade V2 | सेटिंग्स",
    title_about: "TM Arcade V2 के बारे में",
    nav_home: "होम",
    nav_games: "सभी गेम",
    nav_favorites: "पसंदीदा",
    nav_settings: "सेटिंग्स",
    nav_about: "जानकारी",
    emergency: "आपातकाल",
    home_label: "होम",
    welcome: "स्वागत है",
    home_tagline: "एक साफ़, हाई‑टेक लॉन्चपैड। कोई गेम चुनें और उसकी पेज खोलें।",
    daily_game: "आज का गेम",
    daily_badge: "सरप्राइज़",
    daily_game_desc: "आज का सरप्राइज़ देखने के लिए रिवील दबाएँ।",
    tap_reveal: "रिवील के लिए टैप करें",
    play_now: "अभी खेलें",
    see_all_games: "सभी गेम देखें",
    launch_random: "रैंडम शुरू करें",
    view_all_games: "सभी गेम देखें",
    stats_games_ready: "तैयार गेम",
    games_saved: "सहेजे गए गेम",
    stats_current_node: "वर्तमान नोड",
    stats_signal: "सिग्नल",
    signal_stable: "स्थिर",
    favorites_title: "पसंदीदा",
    favorites_desc: "आपकी टॉप पसंद, खेलने के लिए तैयार।",
    favorites_settings_help: "होम स्क्रीन पर अधिकतम 8 पसंदीदा दिखते हैं।",
    search_games: "गेम खोजें...",
    favorites_empty: "अभी कोई पसंदीदा नहीं।",
    favorites_add: "पसंदीदा जोड़ें",
    recent_title: "हाल ही में खेले गए",
    recent_desc: "पिछली सेशन से तुरंत जारी रखें।",
    apps_title: "ऐप्स",
    apps_desc: "आपके सबसे ज़्यादा इस्तेमाल होने वाले टूल्स तक तेज़ पहुँच।",
    library_label: "लाइब्रेरी",
    all_games_title: "सभी गेम",
    all_games_desc: "पूरी लाइब्रेरी देखें। हर गेम अपनी पेज पर खुलता है।",
    all_games_section_title: "सभी गेम लाइब्रेरी",
    all_games_section_desc: "गेम खोलने के लिए कार्ड पर टैप करें।",
    search_all_games: "सभी गेम खोजें...",
    favorites_filter: "पसंदीदा",
    favorites_label: "पसंदीदा",
    favorites_heading: "आपके पसंदीदा",
    favorites_tagline: "लिस्ट तैयार रखने के लिए गेम को स्टार करें।",
    browse_all_games: "सभी गेम ब्राउज़ करें",
    favorites_section_title: "पसंदीदा गेम",
    favorites_section_desc: "गेम खोलने के लिए कार्ड पर टैप करें। और गेम स्टार करें।",
    search_favorites: "पसंदीदा में खोजें...",
    favorites_empty_text: "अभी कोई पसंदीदा नहीं। सभी गेम में जाकर स्टार दबाएँ।",
    settings_label: "सेटिंग्स",
    settings_title: "सेटिंग्स",
    settings_desc: "TM Arcade का लुक और फील ट्यून करें।",
    back_home: "होम पर वापस",
    theme_label: "थीम",
    accent_label: "एक्सेंट",
    density_label: "घनत्व",
    motion_label: "मोशन",
    favorites_label_stat: "पसंदीदा",
    ambient_label: "एम्बियंट",
    personalize_title: "पर्सनलाइज़",
    personalize_desc: "वाइब चुनें, प्रदर्शन सेट करें और होम स्क्रीन व्यवस्थित करें।",
    profile_title: "प्रोफ़ाइल",
    profile_help: "साइट पर दिखने वाला नाम सेट करें।",
    display_name: "डिस्प्ले नाम",
    confirm_name: "नाम पुष्टि करें",
    display_name_placeholder: "जैसे, राहुल",
    confirm_name_placeholder: "नाम फिर से लिखें",
    save_username: "नाम सहेजें",
    progress_title: "प्रगति",
    progress_help: "XP सिर्फ़ तब बढ़ता है जब आप सक्रिय रूप से खेलते हैं।",
    total_xp: "कुल XP",
    rank_label: "रैंक",
    theme_title: "थीम",
    theme_help: "पूरे साइट के लिए वाइब चुनें।",
    accent_title: "एक्सेंट",
    accent_help: "हाइलाइट्स के लिए नीयॉन रंग चुनें।",
    layout_density_title: "लेआउट घनत्व",
    density_help: "आरामदायक और कॉम्पैक्ट कार्ड के बीच बदलें।",
    motion_title: "मोशन",
    motion_help: "कम एनिमेशन के लिए घटाएँ।",
    performance_title: "परफॉर्मेंस",
    performance_help: "हाई स्पीड सबसे अच्छा है। मीडियम सामान्य है। लो कमजोर कंप्यूटर के लिए हल्का है।",
    performance_high: "हाई स्पीड",
    performance_medium: "मीडियम",
    performance_low: "लो",
    control_center_title: "कंट्रोल सेंटर",
    control_center_help: "होम स्क्रीन के सेक्शन ड्रैग करके बदलें।",
    reset_layout: "लेआउट रीसेट करें",
    control_move: "मूव",
    background_effects_title: "बैकग्राउंड इफेक्ट्स",
    background_effects_help: "ऑर्ब्स और ग्रिड ऑन/ऑफ करें।",
    quick_shortcuts_title: "क्विक शॉर्टकट्स",
    quick_shortcuts_help: "सीधे अपनी सूचियों पर जाएँ।",
    open_favorites: "पसंदीदा खोलें",
    browse_games: "सभी गेम ब्राउज़ करें",
    language_title: "भाषा",
    language_help: "साइट की भाषा बदलें।",
    lang_en: "अंग्रेज़ी",
    lang_ar: "अरबी (MSA)",
    lang_ar_lev: "अरबी (लेवेंटाइन)",
    lang_fr: "फ़्रेंच",
    lang_es: "स्पेनिश",
    lang_de: "जर्मन",
    lang_tr: "तुर्की",
    lang_it: "इटालियन",
    lang_ru: "रूसी",
    lang_el: "ग्रीक",
    lang_hi: "हिंदी",
    theme_default: "डिफ़ॉल्ट",
    theme_dark: "डार्क",
    theme_light: "लाइट",
    theme_ocean: "ओशन",
    theme_forest: "फॉरेस्ट",
    theme_sunset: "सनसेट",
    accent_neon: "नियॉन",
    accent_magenta: "मैजेंटा",
    accent_emerald: "एमरल्ड",
    accent_amber: "एम्बर",
    accent_violet: "वायलेट",
    density_comfort: "कम्फर्ट",
    density_compact: "कॉम्पैक्ट",
    motion_full: "फुल",
    motion_reduced: "रिड्यूस्ड",
    on: "ऑन",
    off: "ऑफ",
    favorites_saved: "{count} सहेजे गए",
    clear_favorites: "पसंदीदा हटाएँ",
    name_saved: "नाम सहेजा गया।",
    name_mismatch: "नाम मेल नहीं खाते।",
    name_short: "नाम कम से कम 2 अक्षर का होना चाहिए।",
    name_cleared: "नाम हटाया गया। 'खिलाड़ी' उपयोग होगा।",
    clear_favorites_confirm: "सभी पसंदीदा हटाएँ?",
    about_label: "जानकारी",
    about_title: "TM Arcade V2 के बारे में",
    about_p1:
      "TM Arcade V2 एक सरल विचार से शुरू हुआ — ऐसा स्थान बनाना जहाँ कोई भी बिना तनाव के खेल सके। कोई ऐप नहीं, कोई अजीब स्टेप नहीं, बस खोलो और खेलो। तेज़ और स्मूथ गेम्स पसंद करने वालों के लिए।",
    about_p2:
      "हम चीज़ों को साफ़ और सरल रखते हैं। साइट बेसिक ब्राउज़र पर चलती है, इसलिए आप स्कूल, घर या खाली समय में खेल सकते हैं। हर गेम तेज़ लोडिंग और स्थिर परफॉर्मेंस के लिए चुना गया है।",
    about_p3:
      "हमारा लक्ष्य विज्ञापनों से भरना नहीं — बस अच्छे गेम और अच्छा समय। कुछ गेम हर डिवाइस या नेटवर्क पर नहीं चल सकते; यह हमारे नियंत्रण से बाहर है। हम लगातार टेस्ट और अपडेट करते हैं।",
    about_p4:
      "TM Arcade V2 उन लोगों के लिए है जो जल्दी ब्रेक या क्लास के बीच चुनौती चाहते हैं। नए गेम और अपडेट अक्सर आते हैं — वापस आकर नया देखें।",
    about_p5: "खेलने और समर्थन करने के लिए धन्यवाद — मज़ा सरल रहे।",
    app_chatgpt_desc: "पूछें, लिखें और आइडिया तेज़ी से खोजें।",
    app_classroom_desc: "असाइनमेंट, घोषणाएँ और कक्षाएँ।",
    app_drive_desc: "फ़ाइलें सहेजें, शेयर करें और व्यवस्थित करें।",
    app_docs_desc: "डॉक्यूमेंट बनाएं और संपादित करें।",
    app_slides_desc: "प्रेज़ेंटेशन जल्दी बनाएं।",
    app_gmail_desc: "इनबॉक्स को तेज़ी से मैनेज करें।",
    app_clever_desc: "स्कूल टूल्स के लिए सिंगल साइन‑ऑन.",
    app_duolingo_desc: "रोज़ की भाषा प्रैक्टिस।",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 - Ahmad Abu Sammour द्वारा.",
    player_label: "खिलाड़ी",
    greet_title: "हाय {name}!",
    greet_body: "शुरू करने से पहले एक छोटा सवाल।",
    greet_theme_question: "क्या हमारी चैट के आधार पर थीम बदल दूँ?",
    greet_theme_yes: "हाँ, बदलो",
    greet_theme_no: "आज नहीं",
    greet_day_title: "आपका दिन कैसा था?",
    greet_day_body: "ईमानदार बताइए, मैं समझ सकता हूँ।",
    greet_day_great: "बहुत अच्छा",
    greet_day_okay: "ठीक",
    greet_day_rough: "कठिन",
    greet_reply_great: "अच्छा लगा सुनकर।",
    greet_reply_okay: "ठीक है, बताने के लिए धन्यवाद।",
    greet_reply_rough: "दुख है कि दिन कठिन था। चलिए इसे बेहतर बनाते हैं।",
    greet_mood_title: "अभी आपका मूड कैसा है?",
    greet_mood_body: "जो सबसे नज़दीक लगे चुनें।",
    greet_mood_happy: "खुश",
    greet_mood_neutral: "न्यूट्रल",
    greet_mood_sad: "उदास",
    greet_energy_title: "ऊर्जा कैसी है?",
    greet_energy_body: "ज़्यादा या कम?",
    greet_energy_high: "ज़्यादा",
    greet_energy_medium: "मध्यम",
    greet_energy_low: "कम",
    greet_stress_title: "तनाव स्तर?",
    greet_stress_body: "कोई जजमेंट नहीं.",
    greet_stress_low: "कम",
    greet_stress_mid: "मध्यम",
    greet_stress_high: "ज़्यादा",
    greet_vibe_title: "शांत या एनर्जेटिक वाइब?",
    greet_vibe_body: "मैं उसी के हिसाब से माहौल सेट करूंगा.",
    greet_vibe_calm: "शांत",
    greet_vibe_energy: "एनर्जेटिक",
    greet_focus_title: "आप यहाँ किस लिए हैं?",
    greet_focus_body: "मुझे वाइब चुनने में मदद करता है.",
    greet_focus_play: "खेलना",
    greet_focus_chill: "रिलैक्स",
    greet_focus_focus: "फोकस",
    greet_social_title: "अकेले खेल रहे हैं या दोस्तों के साथ?",
    greet_social_body: "टोन सेट करता है.",
    greet_social_solo: "अकेले",
    greet_social_friends: "दोस्त",
    greet_time_title: "कितनी देर रहेंगे?",
    greet_time_body: "जल्दी सत्र या लंबा?",
    greet_time_quick: "जल्दी",
    greet_time_long: "लंबा",
    greet_ready_title: "शुरू करने के लिए तैयार?",
    greet_ready_body: "मैं इसे खत्म करता हूँ.",
    greet_ready_yes: "तैयार",
    greet_ready_later: "लगभग",
    greet_wrap_title: "सब तैयार, {name}.",
    greet_wrap_body_yes: "वाइब के हिसाब से थीम सेट कर दी.",
    greet_wrap_body_no: "थीम वही रहेगी. खेलने के लिए तैयार?",
    greet_close: "चलो",
    greet_close_aria: "अभिवादन बंद करें",
    open_game: "{name} खोलें",
    add_favorite: "पसंदीदा में जोड़ें",
    remove_favorite: "पसंदीदा से हटाएँ",
    node_label: "नोड {id}",
    current_node_favs: "फेव्स",
    current_node_all: "सभी",
    secret_unlocked: "अनलॉक: टॉप सीक्रेट पेज. रीडायरेक्ट हो रहा है...",
    secret_aria_label: "टॉप सीक्रेट पेज खोलें",
    rank_rookie: "नया",
    rank_hooper: "Hooper",
    rank_allstar: "All-Star",
    rank_mvp: "MVP",
    rank_legend: "लीजेंड",
  },
  "ar-lev": {
    title_home: "TM Arcade V2 مع أحمد أبو سمور",
    title_games: "TM Arcade V2 | كل الألعاب",
    title_favorites: "TM Arcade V2 | المفضلة",
    title_settings: "TM Arcade V2 | الإعدادات",
    title_about: "عن TM Arcade V2",
    nav_home: "الرئيسية",
    nav_games: "كل الألعاب",
    nav_favorites: "المفضلة",
    nav_settings: "الإعدادات",
    nav_about: "عن",
    emergency: "طوارئ",
    home_label: "الرئيسية",
    welcome: "أهلاً",
    home_tagline: "لوحة انطلاق تقنية ونظيفة. اختار لعبة لتفتح صفحتها الخاصة.",
    daily_game: "لعبة اليوم",
    daily_badge: "اختيار مفاجئ",
    daily_game_desc: "اضغط كشف لتعرف مفاجأة اليوم.",
    tap_reveal: "اضغط لتكشف",
    play_now: "العب الآن",
    see_all_games: "شوف كل الألعاب",
    launch_random: "تشغيل عشوائي",
    view_all_games: "عرض كل الألعاب",
    stats_games_ready: "الألعاب الجاهزة",
    games_saved: "الألعاب المحفوظة",
    stats_current_node: "العقدة الحالية",
    stats_signal: "الإشارة",
    signal_stable: "ثابتة",
    favorites_title: "المفضلة",
    favorites_desc: "أحلى اختياراتك جاهزة للعب.",
    favorites_settings_help: "الشاشة الرئيسية بتعرض لحد 8 مفضلات.",
    search_games: "دوّر على ألعاب...",
    favorites_empty: "لسا ما في مفضلات.",
    favorites_add: "ضيف مفضلات هلّق",
    recent_title: "انلعبت مؤخراً",
    recent_desc: "كمّل بسرعة من آخر جلساتك.",
    apps_title: "التطبيقات",
    apps_desc: "وصول سريع لأدواتك.",
    library_label: "المكتبة",
    all_games_title: "كل الألعاب",
    all_games_desc: "تصفّح المكتبة كاملة. كل لعبة بتفتح بصفحة لعب خاصة.",
    all_games_section_title: "مكتبة كل الألعاب",
    all_games_section_desc: "اضغط أي بطاقة لفتح اللعبة.",
    search_all_games: "دوّر بكل الألعاب...",
    favorites_filter: "المفضلة",
    favorites_label: "المفضلة",
    favorites_heading: "مفضلاتك",
    favorites_tagline: "علّم الألعاب بنجمة لتضل قائمتك جاهزة.",
    browse_all_games: "تصفّح كل الألعاب",
    favorites_section_title: "الألعاب المفضلة",
    favorites_section_desc: "اضغط أي بطاقة لتشغّل اللعبة. علّم أكتر لتكبر القائمة.",
    search_favorites: "دوّر بالمفضلة...",
    favorites_empty_text: "لسا ما في مفضلات. روح على كل الألعاب واضغط النجمة.",
    settings_label: "الإعدادات",
    settings_title: "الإعدادات",
    settings_desc: "ظبّط شكل وإحساس TM Arcade.",
    back_home: "رجوع للرئيسية",
    theme_label: "الثيم",
    accent_label: "الأكسنت",
    density_label: "الكثافة",
    motion_label: "الحركة",
    favorites_label_stat: "المفضلة",
    ambient_label: "الأجواء",
    personalize_title: "خصّص",
    personalize_desc: "اختار جوّك، ظبّط الأداء، ورتّب الصفحة الرئيسية.",
    profile_title: "الملف الشخصي",
    profile_help: "حدّد الاسم اللي بينعرض بالموقع.",
    display_name: "اسم العرض",
    confirm_name: "تأكيد الاسم",
    display_name_placeholder: "مثال: أحمد",
    confirm_name_placeholder: "أعد إدخال الاسم",
    save_username: "حفظ الاسم",
    progress_title: "التقدّم",
    progress_help: "الخبرة بتزيد بس وإنت عم تلعب.",
    total_xp: "مجموع الخبرة",
    rank_label: "الرتبة",
    theme_title: "الثيم",
    theme_help: "اختار جوّ الموقع.",
    accent_title: "الأكسنت",
    accent_help: "اختار لون نيون للإبراز.",
    layout_density_title: "كثافة التخطيط",
    density_help: "بدّل بين بطاقات مريحة ومضغوطة.",
    motion_title: "الحركة",
    motion_help: "خفّف الحركات لجو أهدى.",
    performance_title: "الأداء",
    performance_help: "السرعة العالية هي الأفضل. المتوسطة عادية. المنخفضة خفيفة جداً للأجهزة الضعيفة.",
    performance_high: "سرعة عالية",
    performance_medium: "متوسطة",
    performance_low: "منخفضة",
    control_center_title: "مركز التحكم",
    control_center_help: "اسحب لترتيب أقسام الصفحة الرئيسية.",
    reset_layout: "إعادة الضبط",
    control_move: "تحريك",
    background_effects_title: "تأثيرات الخلفية",
    background_effects_help: "تشغيل/إيقاف الأجرام والشبكة.",
    quick_shortcuts_title: "اختصارات سريعة",
    quick_shortcuts_help: "اقفز مباشرة لقوائمك.",
    open_favorites: "افتح المفضلة",
    browse_games: "تصفّح كل الألعاب",
    language_title: "اللغة",
    language_help: "غيّر لغة الموقع.",
    lang_en: "الإنجليزية",
    lang_ar: "العربية الفصحى",
    lang_ar_lev: "العربية الشامية",
    lang_fr: "الفرنسية",
    lang_es: "الإسبانية",
    lang_de: "الألمانية",
    lang_tr: "التركية",
    lang_it: "الإيطالية",
    lang_ru: "الروسية",
    lang_el: "اليونانية",
    lang_hi: "الهندية",
    theme_default: "افتراضي",
    theme_dark: "داكن",
    theme_light: "فاتح",
    theme_ocean: "محيط",
    theme_forest: "غابة",
    theme_sunset: "غروب",
    accent_neon: "نيون",
    accent_magenta: "ماجنتا",
    accent_emerald: "زمردي",
    accent_amber: "كهرماني",
    accent_violet: "بنفسجي",
    density_comfort: "مريح",
    density_compact: "مضغوط",
    motion_full: "كامل",
    motion_reduced: "مخفف",
    on: "تشغيل",
    off: "إيقاف",
    favorites_saved: "{count} محفوظة",
    clear_favorites: "مسح المفضلة",
    name_saved: "تم حفظ الاسم.",
    name_mismatch: "الأسماء مو متطابقة.",
    name_short: "الاسم لازم يكون حرفين على الأقل.",
    name_cleared: "انمسح الاسم. رح نستخدم لاعب.",
    clear_favorites_confirm: "مسح كل المفضلة؟",
    about_label: "عن",
    about_title: "عن TM Arcade V2",
    about_p1:
      "TM Arcade V2 بلّش كفكرة بسيطة — نعمل مكان لأي حدا يلعب بدون ضغط. لا تطبيقات ولا خطوات غريبة، بس افتح واستمتع. معمولة للي بحب ألعاب سريعة وسلسة.",
    about_p2:
      "نحنا منحب كل شي يكون نظيف وبسيط. الموقع بيشتغل على متصفحات عادية، فبتقدر تلعب بالمدرسة أو بالبيت أو بأي وقت فاضي. كل لعبة مختارة لتحميل سريع وأداء ثابت.",
    about_p3:
      "هدفنا مش نغرقك بإعلانات — بس ألعاب حلوة ووقت لطيف. ممكن بعض الألعاب ما تشتغل على كل الأجهزة أو الشبكات، وهالشي خارج سيطرتنا. منضل نختبر ونحدّث حتى تبقى أغلب الألعاب شغّالة.",
    about_p4:
      "TM Arcade V2 للي بدّه استراحة سريعة أو تحدّي بين الحصص. ألعاب وتحديثات جديدة بتنزل كتير — ارجع شوف الجديد.",
    about_p5: "شكراً إنك عم تلعب وبتدعم TM Arcade V2 — خلي المتعة بسيطة.",
    app_chatgpt_desc: "اسأل، اكتب، واستكشف الأفكار بسرعة.",
    app_classroom_desc: "الواجبات، الإعلانات، والفصول.",
    app_drive_desc: "حفظ ومشاركة وتنظيم الملفات.",
    app_docs_desc: "إنشاء وتحرير المستندات.",
    app_slides_desc: "اعمل عروض بسرعة.",
    app_gmail_desc: "رتّب بريدك بسرعة.",
    app_clever_desc: "تسجيل موحّد لأدوات المدرسة.",
    app_duolingo_desc: "تمارين لغة يومية.",
    title_game: "TM Arcade V2 | {name}",
    footer_credit: "TM Arcade V2 بواسطة أحمد أبو سمور.",
    player_label: "لاعب",
    greet_title: "أهلين {name}!",
    greet_body: "سؤال سريع قبل ما نبلّش.",
    greet_theme_question: "بدي غيّر الثيم حسب حديثنا؟",
    greet_theme_yes: "ايه، اعملها",
    greet_theme_no: "مو اليوم",
    greet_day_title: "كيف كان يومك؟",
    greet_day_body: "احكي بصراحة، بقدر اتحمّل.",
    greet_day_great: "كتير منيح",
    greet_day_okay: "تمام",
    greet_day_rough: "صعب",
    greet_reply_great: "حلو أسمع هيك.",
    greet_reply_okay: "تمام، شكراً لأنك قلت.",
    greet_reply_rough: "آسف إنه كان صعب. خلينا نخليه أحسن.",
    greet_mood_title: "شو مزاجك هلّق؟",
    greet_mood_body: "اختار الأقرب.",
    greet_mood_happy: "مبسوط",
    greet_mood_neutral: "محايد",
    greet_mood_sad: "زعلان",
    greet_energy_title: "كيف طاقتك؟",
    greet_energy_body: "عالية ولا واطية؟",
    greet_energy_high: "عالية",
    greet_energy_medium: "متوسطة",
    greet_energy_low: "واطية",
    greet_stress_title: "مستوى التوتر؟",
    greet_stress_body: "بدون أحكام.",
    greet_stress_low: "قليل",
    greet_stress_mid: "متوسط",
    greet_stress_high: "عالي",
    greet_vibe_title: "بدك جو هادي ولا حماسي؟",
    greet_vibe_body: "رح أضبط الجو على هالشي.",
    greet_vibe_calm: "هادي",
    greet_vibe_energy: "حماسي",
    greet_focus_title: "ليش جاي هون؟",
    greet_focus_body: "بيساعدني اختار الجو.",
    greet_focus_play: "ألعب",
    greet_focus_chill: "أروق",
    greet_focus_focus: "أركّز",
    greet_social_title: "بتلعب لحالك ولا مع أصحابك؟",
    greet_social_body: "بيحدد النغمة.",
    greet_social_solo: "لحالي",
    greet_social_friends: "مع أصحاب",
    greet_time_title: "قديش رح تقعد؟",
    greet_time_body: "جلسة سريعة ولا أطول؟",
    greet_time_quick: "سريعة",
    greet_time_long: "أطول",
    greet_ready_title: "جاهز نبلّش؟",
    greet_ready_body: "رح أخلّصها هلّق.",
    greet_ready_yes: "جاهز",
    greet_ready_later: "قريب",
    greet_wrap_title: "خلصنا، {name}.",
    greet_wrap_body_yes: "ظبّطت الثيم على الجو.",
    greet_wrap_body_no: "الثيم رح يضلّ نفسه. جاهز تلعب؟",
    greet_close: "يلا",
    greet_close_aria: "إغلاق الترحيب",
    open_game: "افتح {name}",
    add_favorite: "أضف إلى المفضلة",
    remove_favorite: "إزالة من المفضلة",
    node_label: "العقدة {id}",
    current_node_favs: "المفضلة",
    current_node_all: "الكل",
    secret_unlocked: "تم فتح الصفحة السرية. جارٍ التحويل...",
    secret_aria_label: "افتح الصفحة السرية",
    rank_rookie: "مبتدئ",
    rank_hooper: "هوبر",
    rank_allstar: "كل النجوم",
    rank_mvp: "أفضل لاعب",
    rank_legend: "أسطورة",
  },
};

const formatString = (template, vars = {}) =>
  template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] !== undefined ? vars[key] : ""));

const lockTranslations = {
  en: {
    lock_boot_initializing: "Initializing System...",
    lock_wallpaper_open_aria: "Open password screen",
    lock_open_hint_default: "Tap or press any key",
    lock_open_hint_password_off: "Password is off. Press any key to continue.",
    lock_open_hint_unlock: "Tap or press any key to open password",
    lock_metric_user: "User",
    lock_metric_rank: "Rank",
    lock_metric_lifetime: "Lifetime Playtime",
    lock_metric_today: "Today's Playtime",
    lock_hint_password_off:
      "Password is turned off. Enable a PIN in Settings > Lock Screen to require unlock.",
    lock_hint_enter_pin: "Enter your 4-6 digit PIN to unlock.",
    lock_setup_tip: "Tip: Use Save PIN in Settings to turn lock protection back on.",
    lock_recovery_hint_with_value: "Hint: {hint}",
    lock_recovery_enabled_no_hint: "Recovery password is enabled (no hint set).",
    lock_recovery_not_set: "Recovery password not set. Create one in Settings > Lock Screen.",
    lock_pin_submit_continue: "Continue",
    lock_pin_submit_unlock: "Unlock",
    lock_owner_code_placeholder: "Owner code",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "Unlock PIN",
    lock_forgot_password: "Forgot Password?",
    lock_recovery_back_to_pin: "Back to PIN",
    lock_recovery_placeholder: "Recovery password",
    lock_recovery_aria: "Recovery password",
    lock_recovery_button: "Recover",
    lock_caps_on: "Caps Lock is on",
    lock_owner_override_ready: "Owner override ready. Enter override code.",
    lock_status_recovery_not_set: "Recovery password is not set. Add it in Settings > Lock Screen.",
    lock_status_recovery_enter: "Enter your recovery password.",
    lock_status_recovery_incorrect: "Recovery password is incorrect.",
    lock_status_recovery_verify_failed: "Recovery verification failed.",
    lock_status_override_incorrect: "Override code is incorrect.",
    lock_status_pin_invalid: "PIN must be 4-6 digits.",
    lock_status_pin_incorrect: "Incorrect PIN. Try again.",
    lock_status_pin_verify_failed: "PIN verification failed.",
    lock_widget_economy: "Economy",
    lock_widget_streak: "Streak",
    lock_widget_today: "Today",
    lock_widget_lifetime: "Lifetime",
    lock_widget_savings: "Savings",
    lock_widget_session: "Session",
    lock_widget_favorites: "Favorites",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "day",
    lock_day_plural: "days",
    lock_widget_favorites_value: "{count} saved",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/m",
    settings_lock_title: "Lock Screen",
    settings_lock_help: "Secure TM Arcade with a local PIN and inactivity auto-lock.",
    settings_lock_new_pin: "New PIN (4-6 digits)",
    settings_lock_new_pin_placeholder: "Enter PIN",
    settings_lock_confirm_pin: "Confirm PIN",
    settings_lock_confirm_pin_placeholder: "Re-enter PIN",
    settings_lock_save_pin: "Save PIN",
    settings_lock_password_off: "Turn Password Off",
    settings_lock_now: "Lock Now",
    settings_lock_recovery_title: "Recovery Password",
    settings_lock_recovery_help: "Use this if you forget your lock password. Keep it private.",
    settings_lock_recovery_password: "Recovery Password",
    settings_lock_recovery_password_placeholder: "Set recovery password",
    settings_lock_recovery_confirm: "Confirm Recovery Password",
    settings_lock_recovery_confirm_placeholder: "Confirm recovery password",
    settings_lock_recovery_hint: "Recovery Hint (optional)",
    settings_lock_recovery_hint_placeholder: "Example: favorite team",
    settings_lock_recovery_save: "Save Recovery",
    settings_lock_minutes: "Minutes",
    settings_lock_shortcut_note:
      "Shortcut: Ctrl/Command + Shift + O locks instantly on Chromebook, Windows, and Mac.",
    settings_lock_widgets_title: "Lock Screen Widgets",
    settings_lock_widgets_help: "Pick what appears on the lock screen dashboard.",
    settings_lock_auto_toggle: "Auto-lock: {state}",
    lock_status_password_off: "Password off. Lock now returns to Home instantly.",
    lock_status_keep_one_widget: "Keep at least one lock screen widget.",
    lock_status_widgets_updated: "Lock screen widgets updated.",
    lock_status_auto_enabled: "Auto-lock enabled.",
    lock_status_auto_disabled: "Auto-lock disabled.",
    lock_status_auto_range: "Use a value between 1 and 240 minutes.",
    lock_status_auto_delay: "Auto-lock delay set to {count} {minute_label}.",
    lock_minute_singular: "minute",
    lock_minute_plural: "minutes",
    lock_status_pin_mismatch: "PIN entries do not match.",
    lock_status_pin_saved: "PIN saved.",
    lock_status_pin_save_failed: "Unable to save PIN on this browser.",
    lock_status_recovery_removed: "Recovery password removed.",
    lock_status_recovery_min: "Recovery password must be at least 4 characters.",
    lock_status_recovery_mismatch: "Recovery password entries do not match.",
    lock_status_recovery_saved: "Recovery password saved.",
    lock_status_recovery_save_failed: "Unable to save recovery password on this browser.",
  },
  ar: {
    lock_boot_initializing: "جارٍ تهيئة النظام...",
    lock_wallpaper_open_aria: "فتح لوحة إلغاء القفل",
    lock_open_hint_default: "انقر أو اضغط أي مفتاح لإلغاء القفل",
    lock_open_hint_password_off: "كلمة المرور متوقفة. القفل يفتح الرئيسية مباشرة.",
    lock_open_hint_unlock: "اضغط أي مفتاح أو المس لإلغاء القفل",
    lock_metric_user: "المستخدم",
    lock_metric_rank: "الرتبة",
    lock_metric_lifetime: "وقت اللعب الإجمالي",
    lock_metric_today: "وقت لعب اليوم",
    lock_hint_password_off:
      "تم إيقاف كلمة المرور. فعّل PIN من الإعدادات > شاشة القفل لطلب إلغاء القفل.",
    lock_hint_enter_pin: "أدخل PIN من 4 إلى 6 أرقام لإلغاء القفل.",
    lock_setup_tip: "نصيحة: استخدم حفظ PIN في الإعدادات لإعادة حماية القفل.",
    lock_recovery_hint_with_value: "تلميح: {hint}",
    lock_recovery_enabled_no_hint: "كلمة مرور الاستعادة مفعّلة (بدون تلميح).",
    lock_recovery_not_set: "لم يتم ضبط كلمة مرور الاستعادة. أنشئها من الإعدادات > شاشة القفل.",
    lock_pin_submit_continue: "متابعة",
    lock_pin_submit_unlock: "إلغاء القفل",
    lock_owner_code_placeholder: "رمز المالك",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN إلغاء القفل",
    lock_forgot_password: "نسيت كلمة المرور؟",
    lock_recovery_placeholder: "كلمة مرور الاستعادة",
    lock_recovery_aria: "كلمة مرور الاستعادة",
    lock_recovery_button: "استعادة",
    lock_owner_override_ready: "تجاوز المالك جاهز. أدخل رمز التجاوز.",
    lock_status_recovery_not_set: "كلمة مرور الاستعادة غير مضبوطة. أضفها من الإعدادات > شاشة القفل.",
    lock_status_recovery_enter: "أدخل كلمة مرور الاستعادة.",
    lock_status_recovery_incorrect: "كلمة مرور الاستعادة غير صحيحة.",
    lock_status_recovery_verify_failed: "فشل التحقق من الاستعادة.",
    lock_status_override_incorrect: "رمز التجاوز غير صحيح.",
    lock_status_pin_invalid: "يجب أن يكون PIN من 4 إلى 6 أرقام.",
    lock_status_pin_incorrect: "PIN غير صحيح. حاول مرة أخرى.",
    lock_status_pin_verify_failed: "فشل التحقق من PIN.",
    lock_widget_economy: "الاقتصاد",
    lock_widget_streak: "السلسلة",
    lock_widget_today: "اليوم",
    lock_widget_lifetime: "الإجمالي",
    lock_widget_savings: "الادخار",
    lock_widget_session: "الجلسة",
    lock_widget_favorites: "المفضلة",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "يوم",
    lock_day_plural: "أيام",
    lock_widget_favorites_value: "{count} محفوظة",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/د",
    settings_lock_title: "شاشة القفل",
    settings_lock_help: "أمّن TM Arcade برمز PIN محلي وقفل تلقائي عند عدم النشاط.",
    settings_lock_new_pin: "PIN جديد (4-6 أرقام)",
    settings_lock_new_pin_placeholder: "أدخل PIN",
    settings_lock_confirm_pin: "تأكيد PIN",
    settings_lock_confirm_pin_placeholder: "أعد إدخال PIN",
    settings_lock_save_pin: "حفظ PIN",
    settings_lock_password_off: "إيقاف كلمة المرور",
    settings_lock_now: "قفل الآن",
    settings_lock_recovery_title: "كلمة مرور الاستعادة",
    settings_lock_recovery_help: "استخدمها إذا نسيت كلمة مرور القفل. احتفظ بها خاصة.",
    settings_lock_recovery_password: "كلمة مرور الاستعادة",
    settings_lock_recovery_password_placeholder: "تعيين كلمة مرور الاستعادة",
    settings_lock_recovery_confirm: "تأكيد كلمة مرور الاستعادة",
    settings_lock_recovery_confirm_placeholder: "تأكيد كلمة مرور الاستعادة",
    settings_lock_recovery_hint: "تلميح الاستعادة (اختياري)",
    settings_lock_recovery_hint_placeholder: "مثال: الفريق المفضل",
    settings_lock_recovery_save: "حفظ الاستعادة",
    settings_lock_minutes: "الدقائق",
    settings_lock_shortcut_note:
      "اختصار: Ctrl/Command + Shift + O يقفل فورًا على Chromebook وWindows وMac.",
    settings_lock_widgets_title: "عناصر شاشة القفل",
    settings_lock_widgets_help: "اختر ما يظهر في لوحة شاشة القفل.",
    settings_lock_auto_toggle: "القفل التلقائي: {state}",
    lock_status_password_off: "كلمة المرور متوقفة. القفل يعود مباشرة إلى الرئيسية.",
    lock_status_keep_one_widget: "احتفظ بعنصر واحد على الأقل في شاشة القفل.",
    lock_status_widgets_updated: "تم تحديث عناصر شاشة القفل.",
    lock_status_auto_enabled: "تم تفعيل القفل التلقائي.",
    lock_status_auto_disabled: "تم إيقاف القفل التلقائي.",
    lock_status_auto_range: "استخدم قيمة بين 1 و240 دقيقة.",
    lock_status_auto_delay: "تم ضبط تأخير القفل التلقائي على {count} {minute_label}.",
    lock_minute_singular: "دقيقة",
    lock_minute_plural: "دقائق",
    lock_status_pin_mismatch: "إدخالات PIN غير متطابقة.",
    lock_status_pin_saved: "تم حفظ PIN.",
    lock_status_pin_save_failed: "تعذر حفظ PIN على هذا المتصفح.",
    lock_status_recovery_removed: "تمت إزالة كلمة مرور الاستعادة.",
    lock_status_recovery_min: "يجب أن تكون كلمة مرور الاستعادة 4 أحرف على الأقل.",
    lock_status_recovery_mismatch: "إدخالات كلمة مرور الاستعادة غير متطابقة.",
    lock_status_recovery_saved: "تم حفظ كلمة مرور الاستعادة.",
    lock_status_recovery_save_failed: "تعذر حفظ كلمة مرور الاستعادة على هذا المتصفح.",
  },
  "ar-lev": {
    lock_boot_initializing: "عم يتهيأ النظام...",
    lock_wallpaper_open_aria: "افتح لوحة فك القفل",
    lock_open_hint_default: "اكبس أو اضغط أي زر لفك القفل",
    lock_open_hint_password_off: "كلمة السر مطفية. القفل بروح دغري على الرئيسية.",
    lock_open_hint_unlock: "اضغط أي زر أو المس لفك القفل",
    lock_metric_user: "المستخدم",
    lock_metric_rank: "الرتبة",
    lock_metric_lifetime: "وقت اللعب الكلي",
    lock_metric_today: "وقت لعب اليوم",
    lock_hint_password_off: "كلمة السر مطفية. فعّل PIN من الإعدادات > شاشة القفل إذا بدك قفل.",
    lock_hint_enter_pin: "دخل PIN من 4 إلى 6 أرقام لفك القفل.",
    lock_setup_tip: "نصيحة: استخدم حفظ PIN بالإعدادات ليرجع القفل يحمي.",
    lock_recovery_hint_with_value: "تلميح: {hint}",
    lock_recovery_enabled_no_hint: "كلمة مرور الاسترجاع مفعلة (بدون تلميح).",
    lock_recovery_not_set: "ما في كلمة مرور استرجاع. اعمل وحدة من الإعدادات > شاشة القفل.",
    lock_pin_submit_continue: "متابعة",
    lock_pin_submit_unlock: "فك القفل",
    lock_owner_code_placeholder: "كود المالك",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN فك القفل",
    lock_forgot_password: "نسيت كلمة السر؟",
    lock_recovery_placeholder: "كلمة مرور الاسترجاع",
    lock_recovery_aria: "كلمة مرور الاسترجاع",
    lock_recovery_button: "استرجاع",
    lock_owner_override_ready: "تجاوز المالك جاهز. دخل كود التجاوز.",
    lock_status_recovery_not_set: "كلمة مرور الاسترجاع مش مضبوطة. ضيفها من الإعدادات > شاشة القفل.",
    lock_status_recovery_enter: "دخل كلمة مرور الاسترجاع.",
    lock_status_recovery_incorrect: "كلمة مرور الاسترجاع غلط.",
    lock_status_recovery_verify_failed: "فشل التحقق من الاسترجاع.",
    lock_status_override_incorrect: "كود التجاوز غلط.",
    lock_status_pin_invalid: "PIN لازم يكون بين 4 و6 أرقام.",
    lock_status_pin_incorrect: "PIN غلط. جرّب مرة ثانية.",
    lock_status_pin_verify_failed: "فشل التحقق من PIN.",
    lock_widget_economy: "الاقتصاد",
    lock_widget_streak: "السلسلة",
    lock_widget_today: "اليوم",
    lock_widget_lifetime: "الإجمالي",
    lock_widget_savings: "الادخار",
    lock_widget_session: "الجلسة",
    lock_widget_favorites: "المفضلة",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "يوم",
    lock_day_plural: "أيام",
    lock_widget_favorites_value: "{count} محفوظة",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/د",
    settings_lock_title: "شاشة القفل",
    settings_lock_help: "أمّن TM Arcade بـ PIN محلي وقفل تلقائي عند عدم النشاط.",
    settings_lock_new_pin: "PIN جديد (4-6 أرقام)",
    settings_lock_new_pin_placeholder: "دخل PIN",
    settings_lock_confirm_pin: "تأكيد PIN",
    settings_lock_confirm_pin_placeholder: "أعد إدخال PIN",
    settings_lock_save_pin: "حفظ PIN",
    settings_lock_password_off: "طفي كلمة السر",
    settings_lock_now: "اقفل الآن",
    settings_lock_recovery_title: "كلمة مرور الاسترجاع",
    settings_lock_recovery_help: "استخدمها إذا نسيت كلمة السر. خليك محافظ عليها.",
    settings_lock_recovery_password: "كلمة مرور الاسترجاع",
    settings_lock_recovery_password_placeholder: "عيّن كلمة مرور الاسترجاع",
    settings_lock_recovery_confirm: "تأكيد كلمة مرور الاسترجاع",
    settings_lock_recovery_confirm_placeholder: "أكد كلمة مرور الاسترجاع",
    settings_lock_recovery_hint: "تلميح الاسترجاع (اختياري)",
    settings_lock_recovery_hint_placeholder: "مثال: الفريق المفضل",
    settings_lock_recovery_save: "حفظ الاسترجاع",
    settings_lock_minutes: "الدقائق",
    settings_lock_shortcut_note:
      "اختصار: Ctrl/Command + Shift + O بيقفل فورًا على Chromebook وWindows وMac.",
    settings_lock_widgets_title: "عناصر شاشة القفل",
    settings_lock_widgets_help: "اختار شو يطلع بلوحة شاشة القفل.",
    settings_lock_auto_toggle: "القفل التلقائي: {state}",
    lock_status_password_off: "كلمة السر مطفية. القفل برجع دغري على الرئيسية.",
    lock_status_keep_one_widget: "خلي عنصر واحد على الأقل بشاشة القفل.",
    lock_status_widgets_updated: "تم تحديث عناصر شاشة القفل.",
    lock_status_auto_enabled: "تم تفعيل القفل التلقائي.",
    lock_status_auto_disabled: "تم إيقاف القفل التلقائي.",
    lock_status_auto_range: "استخدم قيمة بين 1 و240 دقيقة.",
    lock_status_auto_delay: "تم ضبط تأخير القفل التلقائي على {count} {minute_label}.",
    lock_minute_singular: "دقيقة",
    lock_minute_plural: "دقائق",
    lock_status_pin_mismatch: "الـ PIN مش متطابق.",
    lock_status_pin_saved: "تم حفظ PIN.",
    lock_status_pin_save_failed: "ما قدرنا نحفظ PIN بهذا المتصفح.",
    lock_status_recovery_removed: "تم حذف كلمة مرور الاسترجاع.",
    lock_status_recovery_min: "كلمة مرور الاسترجاع لازم تكون 4 أحرف على الأقل.",
    lock_status_recovery_mismatch: "كلمات مرور الاسترجاع مش متطابقة.",
    lock_status_recovery_saved: "تم حفظ كلمة مرور الاسترجاع.",
    lock_status_recovery_save_failed: "ما قدرنا نحفظ كلمة مرور الاسترجاع بهذا المتصفح.",
  },
  fr: {
    lock_boot_initializing: "Initialisation du système...",
    lock_wallpaper_open_aria: "Ouvrir le panneau de déverrouillage",
    lock_open_hint_default: "Cliquez ou appuyez sur une touche pour déverrouiller",
    lock_open_hint_password_off: "Mot de passe désactivé. Le verrou ouvre directement l'accueil.",
    lock_open_hint_unlock: "Appuyez sur une touche ou touchez pour déverrouiller",
    lock_metric_user: "Utilisateur",
    lock_metric_rank: "Rang",
    lock_metric_lifetime: "Temps de jeu total",
    lock_metric_today: "Temps de jeu aujourd'hui",
    lock_hint_password_off:
      "Le mot de passe est désactivé. Activez un PIN dans Paramètres > Écran de verrouillage.",
    lock_hint_enter_pin: "Entrez votre PIN à 4-6 chiffres pour déverrouiller.",
    lock_setup_tip: "Astuce : utilisez Enregistrer le PIN dans Paramètres pour réactiver la protection.",
    lock_recovery_hint_with_value: "Indice : {hint}",
    lock_recovery_enabled_no_hint: "Mot de passe de récupération activé (sans indice).",
    lock_recovery_not_set:
      "Mot de passe de récupération non défini. Créez-en un dans Paramètres > Écran de verrouillage.",
    lock_pin_submit_continue: "Continuer",
    lock_pin_submit_unlock: "Déverrouiller",
    lock_owner_code_placeholder: "Code propriétaire",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN de déverrouillage",
    lock_forgot_password: "Mot de passe oublié ?",
    lock_recovery_placeholder: "Mot de passe de récupération",
    lock_recovery_aria: "Mot de passe de récupération",
    lock_recovery_button: "Récupérer",
    lock_owner_override_ready: "Contournement propriétaire prêt. Entrez le code.",
    lock_status_recovery_not_set:
      "Le mot de passe de récupération n'est pas défini. Ajoutez-le dans Paramètres > Écran de verrouillage.",
    lock_status_recovery_enter: "Entrez votre mot de passe de récupération.",
    lock_status_recovery_incorrect: "Mot de passe de récupération incorrect.",
    lock_status_recovery_verify_failed: "Échec de la vérification de récupération.",
    lock_status_override_incorrect: "Code de contournement incorrect.",
    lock_status_pin_invalid: "Le PIN doit contenir 4 à 6 chiffres.",
    lock_status_pin_incorrect: "PIN incorrect. Réessayez.",
    lock_status_pin_verify_failed: "Échec de la vérification du PIN.",
    lock_widget_economy: "Économie",
    lock_widget_streak: "Série",
    lock_widget_today: "Aujourd'hui",
    lock_widget_lifetime: "Total",
    lock_widget_savings: "Épargne",
    lock_widget_session: "Session",
    lock_widget_favorites: "Favoris",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "jour",
    lock_day_plural: "jours",
    lock_widget_favorites_value: "{count} enregistrés",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/m",
    settings_lock_title: "Écran de verrouillage",
    settings_lock_help: "Sécurisez TM Arcade avec un PIN local et un verrouillage automatique.",
    settings_lock_new_pin: "Nouveau PIN (4-6 chiffres)",
    settings_lock_new_pin_placeholder: "Entrer le PIN",
    settings_lock_confirm_pin: "Confirmer le PIN",
    settings_lock_confirm_pin_placeholder: "Saisir de nouveau le PIN",
    settings_lock_save_pin: "Enregistrer le PIN",
    settings_lock_password_off: "Désactiver le mot de passe",
    settings_lock_now: "Verrouiller maintenant",
    settings_lock_recovery_title: "Mot de passe de récupération",
    settings_lock_recovery_help:
      "Utilisez-le si vous oubliez le mot de passe de verrouillage. Gardez-le privé.",
    settings_lock_recovery_password: "Mot de passe de récupération",
    settings_lock_recovery_password_placeholder: "Définir le mot de passe de récupération",
    settings_lock_recovery_confirm: "Confirmer le mot de passe de récupération",
    settings_lock_recovery_confirm_placeholder: "Confirmer le mot de passe de récupération",
    settings_lock_recovery_hint: "Indice de récupération (optionnel)",
    settings_lock_recovery_hint_placeholder: "Exemple : équipe favorite",
    settings_lock_recovery_save: "Enregistrer la récupération",
    settings_lock_minutes: "Minutes",
    settings_lock_shortcut_note:
      "Raccourci : Ctrl/Command + Shift + O verrouille instantanément sur Chromebook, Windows et Mac.",
    settings_lock_widgets_title: "Widgets d'écran de verrouillage",
    settings_lock_widgets_help: "Choisissez ce qui apparaît sur le tableau de bord verrouillé.",
    settings_lock_auto_toggle: "Verrouillage auto : {state}",
    lock_status_password_off: "Mot de passe désactivé. Le verrou revient instantanément à l'accueil.",
    lock_status_keep_one_widget: "Gardez au moins un widget d'écran de verrouillage.",
    lock_status_widgets_updated: "Widgets d'écran de verrouillage mis à jour.",
    lock_status_auto_enabled: "Verrouillage automatique activé.",
    lock_status_auto_disabled: "Verrouillage automatique désactivé.",
    lock_status_auto_range: "Utilisez une valeur entre 1 et 240 minutes.",
    lock_status_auto_delay: "Délai de verrouillage automatique défini sur {count} {minute_label}.",
    lock_minute_singular: "minute",
    lock_minute_plural: "minutes",
    lock_status_pin_mismatch: "Les PIN ne correspondent pas.",
    lock_status_pin_saved: "PIN enregistré.",
    lock_status_pin_save_failed: "Impossible d'enregistrer le PIN sur ce navigateur.",
    lock_status_recovery_removed: "Mot de passe de récupération supprimé.",
    lock_status_recovery_min: "Le mot de passe de récupération doit contenir au moins 4 caractères.",
    lock_status_recovery_mismatch: "Les mots de passe de récupération ne correspondent pas.",
    lock_status_recovery_saved: "Mot de passe de récupération enregistré.",
    lock_status_recovery_save_failed:
      "Impossible d'enregistrer le mot de passe de récupération sur ce navigateur.",
  },
  es: {
    lock_boot_initializing: "Iniciando sistema...",
    lock_wallpaper_open_aria: "Abrir panel de desbloqueo",
    lock_open_hint_default: "Haz clic o pulsa una tecla para desbloquear",
    lock_open_hint_password_off: "La contraseña está desactivada. El bloqueo abre Inicio directamente.",
    lock_open_hint_unlock: "Pulsa una tecla o toca para desbloquear",
    lock_metric_user: "Usuario",
    lock_metric_rank: "Rango",
    lock_metric_lifetime: "Tiempo total de juego",
    lock_metric_today: "Tiempo de juego de hoy",
    lock_hint_password_off:
      "La contraseña está desactivada. Activa un PIN en Configuración > Pantalla de bloqueo.",
    lock_hint_enter_pin: "Ingresa tu PIN de 4-6 dígitos para desbloquear.",
    lock_setup_tip: "Consejo: usa Guardar PIN en Configuración para volver a activar la protección.",
    lock_recovery_hint_with_value: "Pista: {hint}",
    lock_recovery_enabled_no_hint: "La contraseña de recuperación está activada (sin pista).",
    lock_recovery_not_set:
      "La contraseña de recuperación no está configurada. Crea una en Configuración > Pantalla de bloqueo.",
    lock_pin_submit_continue: "Continuar",
    lock_pin_submit_unlock: "Desbloquear",
    lock_owner_code_placeholder: "Código del propietario",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN de desbloqueo",
    lock_forgot_password: "¿Olvidaste la contraseña?",
    lock_recovery_placeholder: "Contraseña de recuperación",
    lock_recovery_aria: "Contraseña de recuperación",
    lock_recovery_button: "Recuperar",
    lock_owner_override_ready: "Anulación del propietario lista. Ingresa el código.",
    lock_status_recovery_not_set:
      "La contraseña de recuperación no está configurada. Agrégala en Configuración > Pantalla de bloqueo.",
    lock_status_recovery_enter: "Ingresa tu contraseña de recuperación.",
    lock_status_recovery_incorrect: "La contraseña de recuperación es incorrecta.",
    lock_status_recovery_verify_failed: "Falló la verificación de recuperación.",
    lock_status_override_incorrect: "El código de anulación es incorrecto.",
    lock_status_pin_invalid: "El PIN debe tener entre 4 y 6 dígitos.",
    lock_status_pin_incorrect: "PIN incorrecto. Inténtalo de nuevo.",
    lock_status_pin_verify_failed: "Falló la verificación del PIN.",
    lock_widget_economy: "Economía",
    lock_widget_streak: "Racha",
    lock_widget_today: "Hoy",
    lock_widget_lifetime: "Total",
    lock_widget_savings: "Ahorros",
    lock_widget_session: "Sesión",
    lock_widget_favorites: "Favoritos",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "día",
    lock_day_plural: "días",
    lock_widget_favorites_value: "{count} guardados",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/m",
    settings_lock_title: "Pantalla de bloqueo",
    settings_lock_help: "Protege TM Arcade con un PIN local y bloqueo automático por inactividad.",
    settings_lock_new_pin: "Nuevo PIN (4-6 dígitos)",
    settings_lock_new_pin_placeholder: "Ingresar PIN",
    settings_lock_confirm_pin: "Confirmar PIN",
    settings_lock_confirm_pin_placeholder: "Volver a ingresar PIN",
    settings_lock_save_pin: "Guardar PIN",
    settings_lock_password_off: "Desactivar contraseña",
    settings_lock_now: "Bloquear ahora",
    settings_lock_recovery_title: "Contraseña de recuperación",
    settings_lock_recovery_help:
      "Úsala si olvidas la contraseña de bloqueo. Mantenla privada.",
    settings_lock_recovery_password: "Contraseña de recuperación",
    settings_lock_recovery_password_placeholder: "Configurar contraseña de recuperación",
    settings_lock_recovery_confirm: "Confirmar contraseña de recuperación",
    settings_lock_recovery_confirm_placeholder: "Confirmar contraseña de recuperación",
    settings_lock_recovery_hint: "Pista de recuperación (opcional)",
    settings_lock_recovery_hint_placeholder: "Ejemplo: equipo favorito",
    settings_lock_recovery_save: "Guardar recuperación",
    settings_lock_minutes: "Minutos",
    settings_lock_shortcut_note:
      "Atajo: Ctrl/Command + Shift + O bloquea al instante en Chromebook, Windows y Mac.",
    settings_lock_widgets_title: "Widgets de pantalla de bloqueo",
    settings_lock_widgets_help: "Elige qué aparece en el panel de la pantalla de bloqueo.",
    settings_lock_auto_toggle: "Bloqueo automático: {state}",
    lock_status_password_off: "Contraseña desactivada. El bloqueo vuelve a Inicio al instante.",
    lock_status_keep_one_widget: "Mantén al menos un widget en la pantalla de bloqueo.",
    lock_status_widgets_updated: "Widgets de pantalla de bloqueo actualizados.",
    lock_status_auto_enabled: "Bloqueo automático activado.",
    lock_status_auto_disabled: "Bloqueo automático desactivado.",
    lock_status_auto_range: "Usa un valor entre 1 y 240 minutos.",
    lock_status_auto_delay: "Retraso de bloqueo automático configurado en {count} {minute_label}.",
    lock_minute_singular: "minuto",
    lock_minute_plural: "minutos",
    lock_status_pin_mismatch: "Los PIN no coinciden.",
    lock_status_pin_saved: "PIN guardado.",
    lock_status_pin_save_failed: "No se pudo guardar el PIN en este navegador.",
    lock_status_recovery_removed: "Contraseña de recuperación eliminada.",
    lock_status_recovery_min: "La contraseña de recuperación debe tener al menos 4 caracteres.",
    lock_status_recovery_mismatch: "Las contraseñas de recuperación no coinciden.",
    lock_status_recovery_saved: "Contraseña de recuperación guardada.",
    lock_status_recovery_save_failed:
      "No se pudo guardar la contraseña de recuperación en este navegador.",
  },
  de: {
    lock_boot_initializing: "System wird initialisiert...",
    lock_wallpaper_open_aria: "Entsperrbereich öffnen",
    lock_open_hint_default: "Klicke oder drücke eine Taste zum Entsperren",
    lock_open_hint_password_off: "Passwort ist aus. Sperre springt direkt zur Startseite.",
    lock_open_hint_unlock: "Drücke eine Taste oder tippe zum Entsperren",
    lock_metric_user: "Benutzer",
    lock_metric_rank: "Rang",
    lock_metric_lifetime: "Gesamte Spielzeit",
    lock_metric_today: "Heutige Spielzeit",
    lock_hint_password_off:
      "Passwort ist deaktiviert. Aktiviere eine PIN in Einstellungen > Sperrbildschirm.",
    lock_hint_enter_pin: "Gib deine 4-6-stellige PIN zum Entsperren ein.",
    lock_setup_tip: "Tipp: Nutze PIN speichern in den Einstellungen, um den Schutz wieder einzuschalten.",
    lock_recovery_hint_with_value: "Hinweis: {hint}",
    lock_recovery_enabled_no_hint: "Wiederherstellungspasswort ist aktiviert (kein Hinweis).",
    lock_recovery_not_set:
      "Wiederherstellungspasswort nicht gesetzt. Erstelle es in Einstellungen > Sperrbildschirm.",
    lock_pin_submit_continue: "Weiter",
    lock_pin_submit_unlock: "Entsperren",
    lock_owner_code_placeholder: "Besitzercode",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "Entsperr-PIN",
    lock_forgot_password: "Passwort vergessen?",
    lock_recovery_placeholder: "Wiederherstellungspasswort",
    lock_recovery_aria: "Wiederherstellungspasswort",
    lock_recovery_button: "Wiederherstellen",
    lock_owner_override_ready: "Besitzer-Override bereit. Code eingeben.",
    lock_status_recovery_not_set:
      "Wiederherstellungspasswort ist nicht gesetzt. In Einstellungen > Sperrbildschirm hinzufügen.",
    lock_status_recovery_enter: "Gib dein Wiederherstellungspasswort ein.",
    lock_status_recovery_incorrect: "Wiederherstellungspasswort ist falsch.",
    lock_status_recovery_verify_failed: "Wiederherstellungsprüfung fehlgeschlagen.",
    lock_status_override_incorrect: "Override-Code ist falsch.",
    lock_status_pin_invalid: "PIN muss 4-6 Ziffern haben.",
    lock_status_pin_incorrect: "Falsche PIN. Versuche es erneut.",
    lock_status_pin_verify_failed: "PIN-Prüfung fehlgeschlagen.",
    lock_widget_economy: "Wirtschaft",
    lock_widget_streak: "Serie",
    lock_widget_today: "Heute",
    lock_widget_lifetime: "Gesamt",
    lock_widget_savings: "Sparen",
    lock_widget_session: "Sitzung",
    lock_widget_favorites: "Favoriten",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "Tag",
    lock_day_plural: "Tage",
    lock_widget_favorites_value: "{count} gespeichert",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/m",
    settings_lock_title: "Sperrbildschirm",
    settings_lock_help: "Schütze TM Arcade mit lokaler PIN und automatischer Inaktivitäts-Sperre.",
    settings_lock_new_pin: "Neue PIN (4-6 Ziffern)",
    settings_lock_new_pin_placeholder: "PIN eingeben",
    settings_lock_confirm_pin: "PIN bestätigen",
    settings_lock_confirm_pin_placeholder: "PIN erneut eingeben",
    settings_lock_save_pin: "PIN speichern",
    settings_lock_password_off: "Passwort ausschalten",
    settings_lock_now: "Jetzt sperren",
    settings_lock_recovery_title: "Wiederherstellungspasswort",
    settings_lock_recovery_help:
      "Nutze es, wenn du dein Sperrpasswort vergisst. Privat halten.",
    settings_lock_recovery_password: "Wiederherstellungspasswort",
    settings_lock_recovery_password_placeholder: "Wiederherstellungspasswort festlegen",
    settings_lock_recovery_confirm: "Wiederherstellungspasswort bestätigen",
    settings_lock_recovery_confirm_placeholder: "Wiederherstellungspasswort bestätigen",
    settings_lock_recovery_hint: "Wiederherstellungshinweis (optional)",
    settings_lock_recovery_hint_placeholder: "Beispiel: Lieblingsmannschaft",
    settings_lock_recovery_save: "Wiederherstellung speichern",
    settings_lock_minutes: "Minuten",
    settings_lock_shortcut_note:
      "Tastenkürzel: Ctrl/Command + Shift + O sperrt sofort auf Chromebook, Windows und Mac.",
    settings_lock_widgets_title: "Sperrbildschirm-Widgets",
    settings_lock_widgets_help: "Wähle, was auf dem Sperrbildschirm-Dashboard angezeigt wird.",
    settings_lock_auto_toggle: "Auto-Sperre: {state}",
    lock_status_password_off: "Passwort aus. Sperre kehrt sofort zur Startseite zurück.",
    lock_status_keep_one_widget: "Mindestens ein Sperrbildschirm-Widget behalten.",
    lock_status_widgets_updated: "Sperrbildschirm-Widgets aktualisiert.",
    lock_status_auto_enabled: "Auto-Sperre aktiviert.",
    lock_status_auto_disabled: "Auto-Sperre deaktiviert.",
    lock_status_auto_range: "Nutze einen Wert zwischen 1 und 240 Minuten.",
    lock_status_auto_delay: "Auto-Sperrverzögerung auf {count} {minute_label} gesetzt.",
    lock_minute_singular: "Minute",
    lock_minute_plural: "Minuten",
    lock_status_pin_mismatch: "PIN-Eingaben stimmen nicht überein.",
    lock_status_pin_saved: "PIN gespeichert.",
    lock_status_pin_save_failed: "PIN konnte in diesem Browser nicht gespeichert werden.",
    lock_status_recovery_removed: "Wiederherstellungspasswort entfernt.",
    lock_status_recovery_min: "Wiederherstellungspasswort muss mindestens 4 Zeichen haben.",
    lock_status_recovery_mismatch: "Eingaben für Wiederherstellungspasswort stimmen nicht überein.",
    lock_status_recovery_saved: "Wiederherstellungspasswort gespeichert.",
    lock_status_recovery_save_failed:
      "Wiederherstellungspasswort konnte in diesem Browser nicht gespeichert werden.",
  },
  tr: {
    lock_boot_initializing: "Sistem başlatılıyor...",
    lock_wallpaper_open_aria: "Kilit açma panelini aç",
    lock_open_hint_default: "Kilidi açmak için tıkla veya bir tuşa bas",
    lock_open_hint_password_off: "Parola kapalı. Kilit doğrudan ana ekrana geçer.",
    lock_open_hint_unlock: "Kilidi açmak için bir tuşa bas veya dokun",
    lock_metric_user: "Kullanıcı",
    lock_metric_rank: "Seviye",
    lock_metric_lifetime: "Toplam oyun süresi",
    lock_metric_today: "Bugünkü oyun süresi",
    lock_hint_password_off:
      "Parola kapalı. Kilit için Ayarlar > Kilit Ekranı'ndan PIN etkinleştir.",
    lock_hint_enter_pin: "Kilidi açmak için 4-6 haneli PIN gir.",
    lock_setup_tip: "İpucu: Korumayı geri açmak için Ayarlar'da PIN Kaydet'i kullan.",
    lock_recovery_hint_with_value: "İpucu: {hint}",
    lock_recovery_enabled_no_hint: "Kurtarma parolası etkin (ipucu yok).",
    lock_recovery_not_set:
      "Kurtarma parolası ayarlı değil. Ayarlar > Kilit Ekranı'ndan oluştur.",
    lock_pin_submit_continue: "Devam",
    lock_pin_submit_unlock: "Kilidi Aç",
    lock_owner_code_placeholder: "Sahip kodu",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "Kilit açma PIN",
    lock_forgot_password: "Parolayı mı unuttun?",
    lock_recovery_placeholder: "Kurtarma parolası",
    lock_recovery_aria: "Kurtarma parolası",
    lock_recovery_button: "Kurtar",
    lock_owner_override_ready: "Sahip geçersiz kılma hazır. Kodu gir.",
    lock_status_recovery_not_set:
      "Kurtarma parolası ayarlı değil. Ayarlar > Kilit Ekranı'ndan ekle.",
    lock_status_recovery_enter: "Kurtarma parolanı gir.",
    lock_status_recovery_incorrect: "Kurtarma parolası yanlış.",
    lock_status_recovery_verify_failed: "Kurtarma doğrulaması başarısız.",
    lock_status_override_incorrect: "Geçersiz kılma kodu yanlış.",
    lock_status_pin_invalid: "PIN 4-6 haneli olmalı.",
    lock_status_pin_incorrect: "Yanlış PIN. Tekrar dene.",
    lock_status_pin_verify_failed: "PIN doğrulaması başarısız.",
    lock_widget_economy: "Ekonomi",
    lock_widget_streak: "Seri",
    lock_widget_today: "Bugün",
    lock_widget_lifetime: "Toplam",
    lock_widget_savings: "Birikim",
    lock_widget_session: "Oturum",
    lock_widget_favorites: "Favoriler",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "gün",
    lock_day_plural: "gün",
    lock_widget_favorites_value: "{count} kaydedildi",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/d",
    settings_lock_title: "Kilit Ekranı",
    settings_lock_help: "TM Arcade'i yerel PIN ve otomatik kilitle güvene al.",
    settings_lock_new_pin: "Yeni PIN (4-6 hane)",
    settings_lock_new_pin_placeholder: "PIN gir",
    settings_lock_confirm_pin: "PIN'i onayla",
    settings_lock_confirm_pin_placeholder: "PIN'i tekrar gir",
    settings_lock_save_pin: "PIN Kaydet",
    settings_lock_password_off: "Parolayı Kapat",
    settings_lock_now: "Şimdi Kilitle",
    settings_lock_recovery_title: "Kurtarma Parolası",
    settings_lock_recovery_help: "Kilit parolanı unutursan bunu kullan. Gizli tut.",
    settings_lock_recovery_password: "Kurtarma Parolası",
    settings_lock_recovery_password_placeholder: "Kurtarma parolası ayarla",
    settings_lock_recovery_confirm: "Kurtarma Parolasını Onayla",
    settings_lock_recovery_confirm_placeholder: "Kurtarma parolasını onayla",
    settings_lock_recovery_hint: "Kurtarma İpucu (isteğe bağlı)",
    settings_lock_recovery_hint_placeholder: "Örnek: favori takım",
    settings_lock_recovery_save: "Kurtarmayı Kaydet",
    settings_lock_minutes: "Dakika",
    settings_lock_shortcut_note:
      "Kısayol: Ctrl/Command + Shift + O Chromebook, Windows ve Mac'te anında kilitler.",
    settings_lock_widgets_title: "Kilit Ekranı Bileşenleri",
    settings_lock_widgets_help: "Kilit ekranı panelinde ne görüneceğini seç.",
    settings_lock_auto_toggle: "Otomatik kilit: {state}",
    lock_status_password_off: "Parola kapalı. Kilit hemen ana ekrana döner.",
    lock_status_keep_one_widget: "En az bir kilit ekranı bileşeni bırak.",
    lock_status_widgets_updated: "Kilit ekranı bileşenleri güncellendi.",
    lock_status_auto_enabled: "Otomatik kilit açıldı.",
    lock_status_auto_disabled: "Otomatik kilit kapatıldı.",
    lock_status_auto_range: "1 ile 240 dakika arasında bir değer kullan.",
    lock_status_auto_delay: "Otomatik kilit gecikmesi {count} {minute_label} olarak ayarlandı.",
    lock_minute_singular: "dakika",
    lock_minute_plural: "dakika",
    lock_status_pin_mismatch: "PIN girişleri eşleşmiyor.",
    lock_status_pin_saved: "PIN kaydedildi.",
    lock_status_pin_save_failed: "PIN bu tarayıcıda kaydedilemedi.",
    lock_status_recovery_removed: "Kurtarma parolası kaldırıldı.",
    lock_status_recovery_min: "Kurtarma parolası en az 4 karakter olmalı.",
    lock_status_recovery_mismatch: "Kurtarma parolası girişleri eşleşmiyor.",
    lock_status_recovery_saved: "Kurtarma parolası kaydedildi.",
    lock_status_recovery_save_failed: "Kurtarma parolası bu tarayıcıda kaydedilemedi.",
  },
  it: {
    lock_boot_initializing: "Inizializzazione del sistema...",
    lock_wallpaper_open_aria: "Apri pannello di sblocco",
    lock_open_hint_default: "Clicca o premi un tasto per sbloccare",
    lock_open_hint_password_off: "Password disattivata. Il blocco apre subito la Home.",
    lock_open_hint_unlock: "Premi un tasto o tocca per sbloccare",
    lock_metric_user: "Utente",
    lock_metric_rank: "Grado",
    lock_metric_lifetime: "Tempo di gioco totale",
    lock_metric_today: "Tempo di gioco di oggi",
    lock_hint_password_off:
      "Password disattivata. Attiva un PIN in Impostazioni > Schermata di blocco.",
    lock_hint_enter_pin: "Inserisci il PIN da 4-6 cifre per sbloccare.",
    lock_setup_tip: "Suggerimento: usa Salva PIN nelle Impostazioni per riattivare la protezione.",
    lock_recovery_hint_with_value: "Suggerimento: {hint}",
    lock_recovery_enabled_no_hint: "Password di recupero attiva (nessun suggerimento).",
    lock_recovery_not_set:
      "Password di recupero non impostata. Creane una in Impostazioni > Schermata di blocco.",
    lock_pin_submit_continue: "Continua",
    lock_pin_submit_unlock: "Sblocca",
    lock_owner_code_placeholder: "Codice proprietario",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN di sblocco",
    lock_forgot_password: "Password dimenticata?",
    lock_recovery_placeholder: "Password di recupero",
    lock_recovery_aria: "Password di recupero",
    lock_recovery_button: "Recupera",
    lock_owner_override_ready: "Override proprietario pronto. Inserisci il codice.",
    lock_status_recovery_not_set:
      "La password di recupero non è impostata. Aggiungila in Impostazioni > Schermata di blocco.",
    lock_status_recovery_enter: "Inserisci la password di recupero.",
    lock_status_recovery_incorrect: "La password di recupero non è corretta.",
    lock_status_recovery_verify_failed: "Verifica recupero non riuscita.",
    lock_status_override_incorrect: "Il codice override non è corretto.",
    lock_status_pin_invalid: "Il PIN deve avere 4-6 cifre.",
    lock_status_pin_incorrect: "PIN errato. Riprova.",
    lock_status_pin_verify_failed: "Verifica PIN non riuscita.",
    lock_widget_economy: "Economia",
    lock_widget_streak: "Serie",
    lock_widget_today: "Oggi",
    lock_widget_lifetime: "Totale",
    lock_widget_savings: "Risparmi",
    lock_widget_session: "Sessione",
    lock_widget_favorites: "Preferiti",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "giorno",
    lock_day_plural: "giorni",
    lock_widget_favorites_value: "{count} salvati",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/m",
    settings_lock_title: "Schermata di blocco",
    settings_lock_help: "Proteggi TM Arcade con PIN locale e blocco automatico per inattività.",
    settings_lock_new_pin: "Nuovo PIN (4-6 cifre)",
    settings_lock_new_pin_placeholder: "Inserisci PIN",
    settings_lock_confirm_pin: "Conferma PIN",
    settings_lock_confirm_pin_placeholder: "Reinserisci PIN",
    settings_lock_save_pin: "Salva PIN",
    settings_lock_password_off: "Disattiva password",
    settings_lock_now: "Blocca ora",
    settings_lock_recovery_title: "Password di recupero",
    settings_lock_recovery_help:
      "Usala se dimentichi la password di blocco. Mantienila privata.",
    settings_lock_recovery_password: "Password di recupero",
    settings_lock_recovery_password_placeholder: "Imposta password di recupero",
    settings_lock_recovery_confirm: "Conferma password di recupero",
    settings_lock_recovery_confirm_placeholder: "Conferma password di recupero",
    settings_lock_recovery_hint: "Suggerimento recupero (opzionale)",
    settings_lock_recovery_hint_placeholder: "Esempio: squadra preferita",
    settings_lock_recovery_save: "Salva recupero",
    settings_lock_minutes: "Minuti",
    settings_lock_shortcut_note:
      "Scorciatoia: Ctrl/Command + Shift + O blocca subito su Chromebook, Windows e Mac.",
    settings_lock_widgets_title: "Widget schermata di blocco",
    settings_lock_widgets_help: "Scegli cosa mostrare nel dashboard della schermata di blocco.",
    settings_lock_auto_toggle: "Blocco automatico: {state}",
    lock_status_password_off: "Password disattivata. Il blocco torna subito alla Home.",
    lock_status_keep_one_widget: "Mantieni almeno un widget nella schermata di blocco.",
    lock_status_widgets_updated: "Widget della schermata di blocco aggiornati.",
    lock_status_auto_enabled: "Blocco automatico attivato.",
    lock_status_auto_disabled: "Blocco automatico disattivato.",
    lock_status_auto_range: "Usa un valore tra 1 e 240 minuti.",
    lock_status_auto_delay: "Ritardo blocco automatico impostato su {count} {minute_label}.",
    lock_minute_singular: "minuto",
    lock_minute_plural: "minuti",
    lock_status_pin_mismatch: "I PIN inseriti non corrispondono.",
    lock_status_pin_saved: "PIN salvato.",
    lock_status_pin_save_failed: "Impossibile salvare il PIN in questo browser.",
    lock_status_recovery_removed: "Password di recupero rimossa.",
    lock_status_recovery_min: "La password di recupero deve avere almeno 4 caratteri.",
    lock_status_recovery_mismatch: "Le password di recupero non corrispondono.",
    lock_status_recovery_saved: "Password di recupero salvata.",
    lock_status_recovery_save_failed:
      "Impossibile salvare la password di recupero in questo browser.",
  },
  ru: {
    lock_boot_initializing: "Инициализация системы...",
    lock_wallpaper_open_aria: "Открыть панель разблокировки",
    lock_open_hint_default: "Нажмите или щелкните любую клавишу для разблокировки",
    lock_open_hint_password_off: "Пароль отключен. Экран блокировки сразу открывает Главную.",
    lock_open_hint_unlock: "Нажмите любую клавишу или коснитесь для разблокировки",
    lock_metric_user: "Пользователь",
    lock_metric_rank: "Ранг",
    lock_metric_lifetime: "Общее время игры",
    lock_metric_today: "Время игры сегодня",
    lock_hint_password_off:
      "Пароль отключен. Включите PIN в Настройки > Экран блокировки.",
    lock_hint_enter_pin: "Введите PIN из 4-6 цифр для разблокировки.",
    lock_setup_tip: "Совет: используйте «Сохранить PIN» в Настройках, чтобы вернуть защиту.",
    lock_recovery_hint_with_value: "Подсказка: {hint}",
    lock_recovery_enabled_no_hint: "Пароль восстановления включен (без подсказки).",
    lock_recovery_not_set:
      "Пароль восстановления не задан. Создайте его в Настройки > Экран блокировки.",
    lock_pin_submit_continue: "Продолжить",
    lock_pin_submit_unlock: "Разблокировать",
    lock_owner_code_placeholder: "Код владельца",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN для разблокировки",
    lock_forgot_password: "Забыли пароль?",
    lock_recovery_placeholder: "Пароль восстановления",
    lock_recovery_aria: "Пароль восстановления",
    lock_recovery_button: "Восстановить",
    lock_owner_override_ready: "Режим владельца готов. Введите код обхода.",
    lock_status_recovery_not_set:
      "Пароль восстановления не задан. Добавьте его в Настройки > Экран блокировки.",
    lock_status_recovery_enter: "Введите пароль восстановления.",
    lock_status_recovery_incorrect: "Неверный пароль восстановления.",
    lock_status_recovery_verify_failed: "Проверка восстановления не удалась.",
    lock_status_override_incorrect: "Неверный код обхода.",
    lock_status_pin_invalid: "PIN должен быть от 4 до 6 цифр.",
    lock_status_pin_incorrect: "Неверный PIN. Попробуйте снова.",
    lock_status_pin_verify_failed: "Проверка PIN не удалась.",
    lock_widget_economy: "Экономика",
    lock_widget_streak: "Серия",
    lock_widget_today: "Сегодня",
    lock_widget_lifetime: "Всего",
    lock_widget_savings: "Накопления",
    lock_widget_session: "Сессия",
    lock_widget_favorites: "Избранное",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "день",
    lock_day_plural: "дней",
    lock_widget_favorites_value: "{count} сохранено",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/м",
    settings_lock_title: "Экран блокировки",
    settings_lock_help: "Защитите TM Arcade локальным PIN и автоблокировкой при бездействии.",
    settings_lock_new_pin: "Новый PIN (4-6 цифр)",
    settings_lock_new_pin_placeholder: "Введите PIN",
    settings_lock_confirm_pin: "Подтвердите PIN",
    settings_lock_confirm_pin_placeholder: "Введите PIN снова",
    settings_lock_save_pin: "Сохранить PIN",
    settings_lock_password_off: "Отключить пароль",
    settings_lock_now: "Заблокировать сейчас",
    settings_lock_recovery_title: "Пароль восстановления",
    settings_lock_recovery_help:
      "Используйте, если забыли пароль блокировки. Храните в тайне.",
    settings_lock_recovery_password: "Пароль восстановления",
    settings_lock_recovery_password_placeholder: "Задать пароль восстановления",
    settings_lock_recovery_confirm: "Подтвердите пароль восстановления",
    settings_lock_recovery_confirm_placeholder: "Подтвердите пароль восстановления",
    settings_lock_recovery_hint: "Подсказка восстановления (необязательно)",
    settings_lock_recovery_hint_placeholder: "Пример: любимая команда",
    settings_lock_recovery_save: "Сохранить восстановление",
    settings_lock_minutes: "Минуты",
    settings_lock_shortcut_note:
      "Сочетание: Ctrl/Command + Shift + O мгновенно блокирует на Chromebook, Windows и Mac.",
    settings_lock_widgets_title: "Виджеты экрана блокировки",
    settings_lock_widgets_help: "Выберите, что показывать на панели экрана блокировки.",
    settings_lock_auto_toggle: "Автоблокировка: {state}",
    lock_status_password_off: "Пароль отключен. Блокировка сразу возвращает на Главную.",
    lock_status_keep_one_widget: "Оставьте хотя бы один виджет экрана блокировки.",
    lock_status_widgets_updated: "Виджеты экрана блокировки обновлены.",
    lock_status_auto_enabled: "Автоблокировка включена.",
    lock_status_auto_disabled: "Автоблокировка отключена.",
    lock_status_auto_range: "Используйте значение от 1 до 240 минут.",
    lock_status_auto_delay: "Задержка автоблокировки установлена на {count} {minute_label}.",
    lock_minute_singular: "минуту",
    lock_minute_plural: "минут",
    lock_status_pin_mismatch: "PIN-коды не совпадают.",
    lock_status_pin_saved: "PIN сохранен.",
    lock_status_pin_save_failed: "Не удалось сохранить PIN в этом браузере.",
    lock_status_recovery_removed: "Пароль восстановления удален.",
    lock_status_recovery_min: "Пароль восстановления должен быть не короче 4 символов.",
    lock_status_recovery_mismatch: "Пароли восстановления не совпадают.",
    lock_status_recovery_saved: "Пароль восстановления сохранен.",
    lock_status_recovery_save_failed:
      "Не удалось сохранить пароль восстановления в этом браузере.",
  },
  el: {
    lock_boot_initializing: "Εκκίνηση συστήματος...",
    lock_wallpaper_open_aria: "Άνοιγμα πίνακα ξεκλειδώματος",
    lock_open_hint_default: "Κάνε κλικ ή πάτα οποιοδήποτε πλήκτρο για ξεκλείδωμα",
    lock_open_hint_password_off: "Ο κωδικός είναι απενεργοποιημένος. Το κλείδωμα ανοίγει κατευθείαν Αρχική.",
    lock_open_hint_unlock: "Πάτα οποιοδήποτε πλήκτρο ή άγγιξε για ξεκλείδωμα",
    lock_metric_user: "Χρήστης",
    lock_metric_rank: "Κατάταξη",
    lock_metric_lifetime: "Συνολικός χρόνος παιχνιδιού",
    lock_metric_today: "Σημερινός χρόνος παιχνιδιού",
    lock_hint_password_off:
      "Ο κωδικός είναι απενεργοποιημένος. Ενεργοποίησε PIN στις Ρυθμίσεις > Οθόνη κλειδώματος.",
    lock_hint_enter_pin: "Εισήγαγε PIN 4-6 ψηφίων για ξεκλείδωμα.",
    lock_setup_tip: "Συμβουλή: χρησιμοποίησε Αποθήκευση PIN στις Ρυθμίσεις για επανενεργοποίηση.",
    lock_recovery_hint_with_value: "Υπόδειξη: {hint}",
    lock_recovery_enabled_no_hint: "Ο κωδικός ανάκτησης είναι ενεργός (χωρίς υπόδειξη).",
    lock_recovery_not_set:
      "Δεν έχει οριστεί κωδικός ανάκτησης. Δημιούργησέ τον στις Ρυθμίσεις > Οθόνη κλειδώματος.",
    lock_pin_submit_continue: "Συνέχεια",
    lock_pin_submit_unlock: "Ξεκλείδωμα",
    lock_owner_code_placeholder: "Κωδικός ιδιοκτήτη",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "PIN ξεκλειδώματος",
    lock_forgot_password: "Ξέχασες τον κωδικό;",
    lock_recovery_placeholder: "Κωδικός ανάκτησης",
    lock_recovery_aria: "Κωδικός ανάκτησης",
    lock_recovery_button: "Ανάκτηση",
    lock_owner_override_ready: "Η παράκαμψη ιδιοκτήτη είναι έτοιμη. Εισάγετε τον κωδικό.",
    lock_status_recovery_not_set:
      "Ο κωδικός ανάκτησης δεν έχει οριστεί. Πρόσθεσέ τον στις Ρυθμίσεις > Οθόνη κλειδώματος.",
    lock_status_recovery_enter: "Εισήγαγε τον κωδικό ανάκτησης.",
    lock_status_recovery_incorrect: "Λάθος κωδικός ανάκτησης.",
    lock_status_recovery_verify_failed: "Αποτυχία επαλήθευσης ανάκτησης.",
    lock_status_override_incorrect: "Λάθος κωδικός παράκαμψης.",
    lock_status_pin_invalid: "Το PIN πρέπει να έχει 4-6 ψηφία.",
    lock_status_pin_incorrect: "Λάθος PIN. Δοκίμασε ξανά.",
    lock_status_pin_verify_failed: "Αποτυχία επαλήθευσης PIN.",
    lock_widget_economy: "Οικονομία",
    lock_widget_streak: "Σερί",
    lock_widget_today: "Σήμερα",
    lock_widget_lifetime: "Σύνολο",
    lock_widget_savings: "Αποταμίευση",
    lock_widget_session: "Συνεδρία",
    lock_widget_favorites: "Αγαπημένα",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "ημέρα",
    lock_day_plural: "ημέρες",
    lock_widget_favorites_value: "{count} αποθηκεύτηκαν",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/λ",
    settings_lock_title: "Οθόνη κλειδώματος",
    settings_lock_help: "Ασφάλισε το TM Arcade με τοπικό PIN και αυτόματο κλείδωμα αδράνειας.",
    settings_lock_new_pin: "Νέο PIN (4-6 ψηφία)",
    settings_lock_new_pin_placeholder: "Εισαγωγή PIN",
    settings_lock_confirm_pin: "Επιβεβαίωση PIN",
    settings_lock_confirm_pin_placeholder: "Εισαγωγή PIN ξανά",
    settings_lock_save_pin: "Αποθήκευση PIN",
    settings_lock_password_off: "Απενεργοποίηση κωδικού",
    settings_lock_now: "Κλείδωμα τώρα",
    settings_lock_recovery_title: "Κωδικός ανάκτησης",
    settings_lock_recovery_help:
      "Χρησιμοποίησέ το αν ξεχάσεις τον κωδικό κλειδώματος. Κράτησέ το ιδιωτικό.",
    settings_lock_recovery_password: "Κωδικός ανάκτησης",
    settings_lock_recovery_password_placeholder: "Ορισμός κωδικού ανάκτησης",
    settings_lock_recovery_confirm: "Επιβεβαίωση κωδικού ανάκτησης",
    settings_lock_recovery_confirm_placeholder: "Επιβεβαίωση κωδικού ανάκτησης",
    settings_lock_recovery_hint: "Υπόδειξη ανάκτησης (προαιρετικό)",
    settings_lock_recovery_hint_placeholder: "Παράδειγμα: αγαπημένη ομάδα",
    settings_lock_recovery_save: "Αποθήκευση ανάκτησης",
    settings_lock_minutes: "Λεπτά",
    settings_lock_shortcut_note:
      "Συντόμευση: Ctrl/Command + Shift + O κλειδώνει άμεσα σε Chromebook, Windows και Mac.",
    settings_lock_widgets_title: "Γραφικά οθόνης κλειδώματος",
    settings_lock_widgets_help: "Επίλεξε τι εμφανίζεται στον πίνακα της οθόνης κλειδώματος.",
    settings_lock_auto_toggle: "Αυτόματο κλείδωμα: {state}",
    lock_status_password_off: "Ο κωδικός είναι κλειστός. Το κλείδωμα επιστρέφει άμεσα στην Αρχική.",
    lock_status_keep_one_widget: "Κράτα τουλάχιστον ένα widget οθόνης κλειδώματος.",
    lock_status_widgets_updated: "Τα widget οθόνης κλειδώματος ενημερώθηκαν.",
    lock_status_auto_enabled: "Το αυτόματο κλείδωμα ενεργοποιήθηκε.",
    lock_status_auto_disabled: "Το αυτόματο κλείδωμα απενεργοποιήθηκε.",
    lock_status_auto_range: "Χρησιμοποίησε τιμή από 1 έως 240 λεπτά.",
    lock_status_auto_delay: "Η καθυστέρηση αυτόματου κλειδώματος ορίστηκε σε {count} {minute_label}.",
    lock_minute_singular: "λεπτό",
    lock_minute_plural: "λεπτά",
    lock_status_pin_mismatch: "Τα PIN δεν ταιριάζουν.",
    lock_status_pin_saved: "Το PIN αποθηκεύτηκε.",
    lock_status_pin_save_failed: "Δεν ήταν δυνατή η αποθήκευση του PIN σε αυτό το πρόγραμμα περιήγησης.",
    lock_status_recovery_removed: "Ο κωδικός ανάκτησης αφαιρέθηκε.",
    lock_status_recovery_min: "Ο κωδικός ανάκτησης πρέπει να έχει τουλάχιστον 4 χαρακτήρες.",
    lock_status_recovery_mismatch: "Οι κωδικοί ανάκτησης δεν ταιριάζουν.",
    lock_status_recovery_saved: "Ο κωδικός ανάκτησης αποθηκεύτηκε.",
    lock_status_recovery_save_failed:
      "Δεν ήταν δυνατή η αποθήκευση του κωδικού ανάκτησης σε αυτό το πρόγραμμα περιήγησης.",
  },
  hi: {
    lock_boot_initializing: "सिस्टम शुरू हो रहा है...",
    lock_wallpaper_open_aria: "अनलॉक पैनल खोलें",
    lock_open_hint_default: "अनलॉक करने के लिए क्लिक करें या कोई भी कुंजी दबाएं",
    lock_open_hint_password_off: "पासवर्ड बंद है। लॉक सीधे होम स्क्रीन खोल देगा।",
    lock_open_hint_unlock: "अनलॉक करने के लिए कोई भी कुंजी दबाएं या टैप करें",
    lock_metric_user: "उपयोगकर्ता",
    lock_metric_rank: "रैंक",
    lock_metric_lifetime: "कुल खेलने का समय",
    lock_metric_today: "आज का खेलने का समय",
    lock_hint_password_off:
      "पासवर्ड बंद है। Settings > Lock Screen में PIN चालू करें ताकि अनलॉक जरूरी हो।",
    lock_hint_enter_pin: "अनलॉक करने के लिए 4-6 अंकों का PIN दर्ज करें।",
    lock_setup_tip: "टिप: सुरक्षा वापस चालू करने के लिए Settings में Save PIN इस्तेमाल करें।",
    lock_recovery_hint_with_value: "संकेत: {hint}",
    lock_recovery_enabled_no_hint: "रिकवरी पासवर्ड चालू है (कोई संकेत नहीं)।",
    lock_recovery_not_set: "रिकवरी पासवर्ड सेट नहीं है। इसे Settings > Lock Screen में बनाएं।",
    lock_pin_submit_continue: "जारी रखें",
    lock_pin_submit_unlock: "अनलॉक",
    lock_owner_code_placeholder: "ओनर कोड",
    lock_pin_placeholder: "PIN",
    lock_pin_aria: "अनलॉक PIN",
    lock_forgot_password: "पासवर्ड भूल गए?",
    lock_recovery_placeholder: "रिकवरी पासवर्ड",
    lock_recovery_aria: "रिकवरी पासवर्ड",
    lock_recovery_button: "रिकवर",
    lock_owner_override_ready: "ओनर ओवरराइड तैयार है। ओवरराइड कोड दर्ज करें।",
    lock_status_recovery_not_set:
      "रिकवरी पासवर्ड सेट नहीं है। इसे Settings > Lock Screen में जोड़ें।",
    lock_status_recovery_enter: "अपना रिकवरी पासवर्ड दर्ज करें।",
    lock_status_recovery_incorrect: "रिकवरी पासवर्ड गलत है।",
    lock_status_recovery_verify_failed: "रिकवरी सत्यापन विफल हुआ।",
    lock_status_override_incorrect: "ओवरराइड कोड गलत है।",
    lock_status_pin_invalid: "PIN 4-6 अंकों का होना चाहिए।",
    lock_status_pin_incorrect: "गलत PIN। फिर से कोशिश करें।",
    lock_status_pin_verify_failed: "PIN सत्यापन विफल हुआ।",
    lock_widget_economy: "अर्थव्यवस्था",
    lock_widget_streak: "स्ट्रीक",
    lock_widget_today: "आज",
    lock_widget_lifetime: "कुल",
    lock_widget_savings: "बचत",
    lock_widget_session: "सेशन",
    lock_widget_favorites: "फेवरेट्स",
    lock_widget_streak_value: "{count} {day_label}",
    lock_day_singular: "दिन",
    lock_day_plural: "दिन",
    lock_widget_favorites_value: "{count} सेव",
    lock_widget_savings_value: "{balance} TM$ · +{rate}/मि",
    settings_lock_title: "लॉक स्क्रीन",
    settings_lock_help: "TM Arcade को लोकल PIN और ऑटो-लॉक से सुरक्षित करें।",
    settings_lock_new_pin: "नया PIN (4-6 अंक)",
    settings_lock_new_pin_placeholder: "PIN दर्ज करें",
    settings_lock_confirm_pin: "PIN की पुष्टि करें",
    settings_lock_confirm_pin_placeholder: "PIN फिर से दर्ज करें",
    settings_lock_save_pin: "PIN सेव करें",
    settings_lock_password_off: "पासवर्ड बंद करें",
    settings_lock_now: "अभी लॉक करें",
    settings_lock_recovery_title: "रिकवरी पासवर्ड",
    settings_lock_recovery_help: "लॉक पासवर्ड भूलने पर इसका उपयोग करें। इसे निजी रखें।",
    settings_lock_recovery_password: "रिकवरी पासवर्ड",
    settings_lock_recovery_password_placeholder: "रिकवरी पासवर्ड सेट करें",
    settings_lock_recovery_confirm: "रिकवरी पासवर्ड की पुष्टि करें",
    settings_lock_recovery_confirm_placeholder: "रिकवरी पासवर्ड की पुष्टि करें",
    settings_lock_recovery_hint: "रिकवरी संकेत (वैकल्पिक)",
    settings_lock_recovery_hint_placeholder: "उदाहरण: पसंदीदा टीम",
    settings_lock_recovery_save: "रिकवरी सेव करें",
    settings_lock_minutes: "मिनट",
    settings_lock_shortcut_note:
      "शॉर्टकट: Ctrl/Command + Shift + O Chromebook, Windows और Mac पर तुरंत लॉक करता है।",
    settings_lock_widgets_title: "लॉक स्क्रीन विजेट्स",
    settings_lock_widgets_help: "चुनें कि लॉक स्क्रीन डैशबोर्ड पर क्या दिखे।",
    settings_lock_auto_toggle: "ऑटो-लॉक: {state}",
    lock_status_password_off: "पासवर्ड बंद है। लॉक तुरंत होम स्क्रीन पर लौटेगा।",
    lock_status_keep_one_widget: "कम से कम एक लॉक स्क्रीन विजेट रखें।",
    lock_status_widgets_updated: "लॉक स्क्रीन विजेट्स अपडेट हो गए।",
    lock_status_auto_enabled: "ऑटो-लॉक चालू हुआ।",
    lock_status_auto_disabled: "ऑटो-लॉक बंद हुआ।",
    lock_status_auto_range: "1 से 240 मिनट के बीच मान दें।",
    lock_status_auto_delay: "ऑटो-लॉक देरी {count} {minute_label} पर सेट की गई।",
    lock_minute_singular: "मिनट",
    lock_minute_plural: "मिनट",
    lock_status_pin_mismatch: "PIN एंट्री मेल नहीं खाती।",
    lock_status_pin_saved: "PIN सेव हो गया।",
    lock_status_pin_save_failed: "इस ब्राउज़र पर PIN सेव नहीं हो सका।",
    lock_status_recovery_removed: "रिकवरी पासवर्ड हटा दिया गया।",
    lock_status_recovery_min: "रिकवरी पासवर्ड कम से कम 4 अक्षरों का होना चाहिए।",
    lock_status_recovery_mismatch: "रिकवरी पासवर्ड एंट्री मेल नहीं खाती।",
    lock_status_recovery_saved: "रिकवरी पासवर्ड सेव हो गया।",
    lock_status_recovery_save_failed: "इस ब्राउज़र पर रिकवरी पासवर्ड सेव नहीं हो सका।",
  },
};

const syncLanguageTables = (tableSet) => {
  const base = tableSet.en || {};
  Object.keys(tableSet).forEach((lang) => {
    if (lang === "en") return;
    tableSet[lang] = { ...base, ...(tableSet[lang] || {}) };
  });
};

syncLanguageTables(translations);
syncLanguageTables(lockTranslations);

let currentLang = localStorage.getItem(LANG_KEY) || "en";
const navEmojis = {
  nav_home: "🏠",
  nav_games: "🎮",
  nav_favorites: "⭐",
  nav_profile: "👤",
  nav_leaderboard: "🏆",
  nav_message: "💬",
  nav_settings: "⚙️",
  nav_about: "ℹ️",
  nav_bank: "🏦",
  nav_shop: "🛒",
  emergency: "🚨",
};
const t = (key, vars) => {
  const table = translations[currentLang] || translations.en;
  const lockTable = lockTranslations[currentLang] || lockTranslations.en;
  const fallback = translations.en?.[key] ?? lockTranslations.en?.[key] ?? key;
  const value = table?.[key] ?? lockTable?.[key] ?? fallback;
  return typeof value === "string" ? formatString(value, vars) : value;
};
const scrubNavMessage = () => {
  document.querySelectorAll(".nav-link, .brand").forEach((node) => {
    const text = (node.textContent || "").trim().toLowerCase();
    if (text === "nav_message") {
      node.textContent = "";
    }
  });
};


const setupCalculatorWidget = () => {
  if (document.querySelector(".calc-fab") || document.querySelector(".calc-panel-dock")) return;

  const fab = document.createElement("button");
  fab.type = "button";
  fab.className = "calc-fab";
  fab.setAttribute("aria-label", "Open calculator");
  fab.textContent = "⌘";

  const panel = document.createElement("div");
  panel.className = "calc-panel-dock right";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML = `
    <div class="calc-panel" role="dialog" aria-label="Scientific calculator">
      <div class="calc-header">
        <span>Scientific</span>
        <button class="calc-close" type="button" aria-label="Close calculator">×</button>
      </div>
      <div class="calc-display" id="calc-display">0</div>
      <div class="calc-keys" id="calc-keys">
        <button class="calc-key ghost" data-action="clear">AC</button>
        <button class="calc-key ghost" data-action="back">⌫</button>
        <button class="calc-key operator" data-value="(">(</button>
        <button class="calc-key operator" data-value=")">)</button>

        <button class="calc-key" data-value="sin(">sin</button>
        <button class="calc-key" data-value="cos(">cos</button>
        <button class="calc-key" data-value="tan(">tan</button>
        <button class="calc-key operator" data-value="^">^</button>

        <button class="calc-key" data-value="log(">log</button>
        <button class="calc-key" data-value="ln(">ln</button>
        <button class="calc-key" data-value="sqrt(">√</button>
        <button class="calc-key operator" data-value="/">÷</button>

        <button class="calc-key" data-value="pi">π</button>
        <button class="calc-key" data-value="e">e</button>
        <button class="calc-key" data-value="1">1</button>
        <button class="calc-key" data-value="2">2</button>

        <button class="calc-key" data-value="3">3</button>
        <button class="calc-key" data-value="4">4</button>
        <button class="calc-key" data-value="5">5</button>
        <button class="calc-key" data-value="6">6</button>

        <button class="calc-key" data-value="7">7</button>
        <button class="calc-key" data-value="8">8</button>
        <button class="calc-key" data-value="9">9</button>
        <button class="calc-key operator" data-value="*">×</button>

        <button class="calc-key wide" data-value="0">0</button>
        <button class="calc-key" data-value=".">.</button>
        <button class="calc-key operator" data-value="-">−</button>
        <button class="calc-key operator" data-value="+">+</button>

        <button class="calc-key equals" data-action="equals">=</button>
      </div>
    </div>
  `;

  const display = panel.querySelector("#calc-display");
  const keys = panel.querySelector("#calc-keys");
  const closeBtn = panel.querySelector(".calc-close");

  let expression = "";

  const updateDisplay = (value) => {
    if (!display) return;
    display.textContent = value || "0";
  };

  const safeEval = (expr) => {
    if (!expr) return "";
    let cleaned = expr
      .replace(/π/g, "pi")
      .replace(/\^/g, "**")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/log\(/g, "log10(")
      .replace(/\bpi\b/g, "Math.PI")
      .replace(/\be\b/g, "Math.E");
    const stripped = cleaned
      .replace(/Math\.(sin|cos|tan|sqrt|log|PI|E)/g, "")
      .replace(/log10/g, "");
    if (/[A-Za-z]/.test(stripped)) return "Error";
    if (/[^0-9+\-*/().\s*]/.test(stripped)) return "Error";
    if (!cleaned) return "";
    try {
      // eslint-disable-next-line no-new-func
      const result = Function(
        `"use strict";const log10=Math.log10?Math.log10:(x)=>Math.log(x)/Math.LN10;return (${cleaned})`
      )();
      if (Number.isFinite(result)) return String(result);
      return "Error";
    } catch (error) {
      return "Error";
    }
  };

  const openCalc = () => {
    panel.classList.add("show");
    panel.setAttribute("aria-hidden", "false");
  };

  const closeCalc = () => {
    panel.classList.remove("show");
    panel.setAttribute("aria-hidden", "true");
  };

  fab.addEventListener("click", openCalc);
  closeBtn?.addEventListener("click", closeCalc);

  keys?.addEventListener("click", (event) => {
    const button = event.target.closest(".calc-key");
    if (!button) return;
    const action = button.dataset.action;
    const value = button.dataset.value;
    if (action === "clear") {
      expression = "";
      updateDisplay(expression);
      return;
    }
    if (action === "back") {
      expression = expression.slice(0, -1);
      updateDisplay(expression);
      return;
    }
    if (action === "equals") {
      const result = safeEval(expression);
      expression = result === "Error" ? "" : result;
      updateDisplay(result);
      return;
    }
    if (value) {
      expression += value;
      updateDisplay(expression);
    }
  });

  document.body.appendChild(fab);
  document.body.appendChild(panel);
};
const pageMode = document.body.dataset.page || "popular";
const loadAuthUserState = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(AUTH_USER_KEY) || "null");
    if (!raw || typeof raw !== "object") return null;
    const username = String(raw.username || "").trim();
    if (!username) return null;
    return {
      username,
      displayName: String(raw.displayName || username).trim() || username,
      role: String(raw.role || "").toLowerCase() === "admin" ? "admin" : "user",
      admin: String(raw.role || "").toLowerCase() === "admin" || raw.admin === true,
    };
  } catch {
    return null;
  }
};
let authUser = loadAuthUserState();
let authSessionToken = String(localStorage.getItem(AUTH_SESSION_TOKEN_KEY) || "").trim();
let authOverlayRoot = null;
let authStatusEl = null;
let authLoginForm = null;
let authRegisterForm = null;
let authLogoutButton = null;
let authView = "login";
let authProfileSyncTimer = null;
let authProfileHydrated = false;
let authProfileSaveDebounceTimer = null;
let authProfileLastSavedAt = 0;
let authLockSyncTimer = null;
const PROFILE_CLOUD_DEBOUNCE_MS = 1400;
const PROFILE_CLOUD_MIN_INTERVAL_MS = 12000;
let authAccountLock = {
  locked: false,
  lockUntilMs: 0,
  lockUntilAdminUnlock: false,
  lockUntil: "",
  message: "",
};
let authAdminLockOverlay = null;
const getAuthApiUrl = () => {
  return DEFAULT_AUTH_API_URL;
};
const isAuthApiConfigured = () => {
  const url = getAuthApiUrl();
  return Boolean(url);
};
const isCurrentUserAdmin = () => Boolean(authUser && (authUser.admin || authUser.role === "admin"));
const persistAuthState = ({ token = "", user = null } = {}) => {
  authSessionToken = String(token || "").trim();
  authUser = user
    ? {
        username: String(user.username || "").trim(),
        displayName: String(user.displayName || user.username || "").trim() || String(user.username || "").trim(),
        role: String(user.role || "").toLowerCase() === "admin" ? "admin" : "user",
        admin: String(user.role || "").toLowerCase() === "admin" || user.admin === true,
      }
    : null;
  if (authSessionToken) {
    localStorage.setItem(AUTH_SESSION_TOKEN_KEY, authSessionToken);
  } else {
    localStorage.removeItem(AUTH_SESSION_TOKEN_KEY);
  }
  if (authUser) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
    localStorage.setItem(AUTH_LAST_USERNAME_KEY, authUser.username);
    localStorage.setItem(USERNAME_KEY, authUser.displayName || authUser.username);
  } else {
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(USERNAME_KEY);
  }
};
const normalizeAuthAccountLock = (value) => {
  const source = value && typeof value === "object" ? value : {};
  const locked = Boolean(source.locked);
  const lockUntilMs = Math.max(0, Math.floor(Number(source.lockUntilMs) || 0));
  const lockUntilAdminUnlock = locked && Boolean(source.lockUntilAdminUnlock);
  const lockUntilRaw = String(source.lockUntil || "").trim();
  const lockUntil = locked && !lockUntilAdminUnlock ? lockUntilRaw : "";
  const message = locked
    ? String(source.message || source.lockMessage || "")
        .trim()
        .slice(0, 220)
    : "";
  return {
    locked,
    lockUntilMs,
    lockUntilAdminUnlock,
    lockUntil,
    message: message || "Take a break and come back later.",
  };
};
const ensureAdminLockOverlay = () => {
  if (authAdminLockOverlay) return authAdminLockOverlay;
  const overlay = document.createElement("div");
  overlay.className = "admin-user-lock-overlay";
  overlay.innerHTML = `
    <div class="admin-user-lock-card" role="dialog" aria-modal="true" aria-live="polite">
      <h2>Locked By Admin</h2>
      <p class="admin-user-lock-message" data-admin-lock-message>Take a break and come back later.</p>
      <p class="admin-user-lock-meta" data-admin-lock-meta></p>
    </div>
  `;
  document.body.appendChild(overlay);
  authAdminLockOverlay = overlay;
  return overlay;
};
const renderAdminLockOverlay = () => {
  const overlay = ensureAdminLockOverlay();
  const shouldShow = Boolean(authSessionToken && authUser && authAccountLock.locked);
  overlay.classList.toggle("show", shouldShow);
  document.body.classList.toggle("admin-user-locked", shouldShow);
  if (!shouldShow) return;
  const messageEl = overlay.querySelector("[data-admin-lock-message]");
  const metaEl = overlay.querySelector("[data-admin-lock-meta]");
  if (messageEl) {
    messageEl.textContent = String(authAccountLock.message || "Take a break and come back later.");
  }
  if (metaEl) {
    if (authAccountLock.lockUntilAdminUnlock) {
      metaEl.textContent = "This account is locked until an admin unlocks it.";
    } else if (authAccountLock.lockUntil) {
      const date = new Date(authAccountLock.lockUntil);
      const label = Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
      metaEl.textContent = label ? `Locked until ${label}` : "";
    } else {
      metaEl.textContent = "";
    }
  }
};
const setAuthAccountLock = (lock) => {
  authAccountLock = normalizeAuthAccountLock(lock);
  renderAdminLockOverlay();
};
const stopAuthLockSync = () => {
  if (authLockSyncTimer) {
    window.clearInterval(authLockSyncTimer);
    authLockSyncTimer = null;
  }
};
const startAuthLockSync = () => {
  if (authLockSyncTimer || !authSessionToken) return;
  authLockSyncTimer = window.setInterval(async () => {
    if (!authSessionToken) {
      stopAuthLockSync();
      setAuthAccountLock(null);
      return;
    }
    if (document.hidden) return;
    try {
      const response = await callAuthApi("session", { sessionToken: authSessionToken });
      setAuthAccountLock(response?.lock || null);
      applyGlobalBannerPayload(response);
    } catch (_error) {}
  }, 20000);
};
const setAuthGateState = (enabled) => {
  document.body.classList.toggle("auth-gated", Boolean(enabled));
  if (!authOverlayRoot) return;
  authOverlayRoot.classList.toggle("show", Boolean(enabled));
  authOverlayRoot.setAttribute("aria-hidden", enabled ? "false" : "true");
  if (enabled) {
    const usernameInput = authOverlayRoot.querySelector("#auth-login-username");
    usernameInput?.focus({ preventScroll: true });
  }
};
const setAuthStatus = (message, isError = false) => {
  if (!authStatusEl) return;
  authStatusEl.textContent = String(message || "");
  authStatusEl.classList.toggle("is-error", Boolean(isError));
};
const stopAuthProfileSync = () => {
  if (authProfileSyncTimer) {
    window.clearInterval(authProfileSyncTimer);
    authProfileSyncTimer = null;
  }
  if (authProfileSaveDebounceTimer) {
    window.clearTimeout(authProfileSaveDebounceTimer);
    authProfileSaveDebounceTimer = null;
  }
};
const startAuthProfileSync = () => {
  if (authProfileSyncTimer || !authSessionToken) return;
  authProfileSyncTimer = window.setInterval(() => {
    if (document.hidden) return;
    saveProfileToCloud();
  }, 30000);
};
const openLockAfterAuth = () => {
  if (typeof clearLockSessionUnlocked === "function") {
    clearLockSessionUnlocked();
  }
  if (typeof lockSiteNow === "function") {
    window.setTimeout(() => {
      lockSiteNow("manual");
    }, 40);
  }
};
const callAuthApi = async (action, payload = {}) => {
  const url = getAuthApiUrl();
  if (!url || !isAuthApiConfigured()) {
    throw new Error("Authentication service is unavailable.");
  }
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ action, ...payload }),
  });
  const raw = await response.text();
  let data = {};
  try {
    data = JSON.parse(raw);
  } catch {
    throw new Error("Auth server returned an invalid response.");
  }
  if (!response.ok || !data.success) {
    const err = new Error(String(data.message || "Request failed."));
    err.code = String(data.code || "");
    err.lockUntilMs = Number(data.lockUntilMs || 0);
    err.lockUntilAdminUnlock = Boolean(data.lockUntilAdminUnlock);
    err.lockMessage = String(data.lockMessage || "");
    if (err.code === "ACCOUNT_LOCKED") {
      setAuthAccountLock({
        locked: true,
        lockUntilMs: err.lockUntilMs,
        lockUntilAdminUnlock: err.lockUntilAdminUnlock,
        message: err.lockMessage || err.message,
      });
    }
    throw err;
  }
  return data;
};
const normalizeCloudProfile = (profile) => {
  const raw = profile && typeof profile === "object" ? profile : {};
  const xp = Math.max(0, Math.floor(Number(raw.xp) || 0));
  const tm = Math.max(0, Math.floor(Number(raw.tm) || 0));
  const streak = Math.max(0, Math.floor(Number(raw.streak) || 0));
  const rankText = String(raw.rank || "").trim().slice(0, 40);
  return {
    xp,
    tm,
    streak,
    rank: rankText || "",
  };
};
const buildLocalProfilePayload = () => {
  const xpValue = Math.max(0, Math.floor(Number(typeof xpTotal === "number" ? xpTotal : 0) || 0));
  const tmValue = Math.max(0, Math.floor(Number(typeof tmDollars === "number" ? tmDollars : 0) || 0));
  const streakValue = Math.max(0, Math.floor(Number(typeof streakCount === "number" ? streakCount : 0) || 0));
  const rankValue =
    String(
      (typeof currentRank === "string" && currentRank) ||
        (typeof getRank === "function" ? getRank(xpValue) : "Rookie"),
    )
      .trim()
      .slice(0, 40) || "Rookie";
  return {
    xp: xpValue,
    tm: tmValue,
    streak: streakValue,
    rank: rankValue,
  };
};
const applyCloudProfile = (profile) => {
  const normalized = normalizeCloudProfile(profile);
  if (typeof xpTotal === "number") xpTotal = normalized.xp;
  if (typeof tmDollars === "number") tmDollars = normalized.tm;
  if (typeof streakCount === "number") streakCount = normalized.streak;
  if (typeof currentRank === "string") {
    currentRank = normalized.rank || (typeof getRank === "function" ? getRank(normalized.xp) : "Rookie");
  }
  if (typeof saveXpState === "function") saveXpState({ queueCloud: false });
  if (typeof saveTmState === "function") saveTmState({ queueCloud: false });
  if (typeof saveStreakState === "function") saveStreakState({ queueCloud: false });
  if (typeof updateProgressUI === "function") updateProgressUI();
  if (typeof updateEconomyUI === "function") updateEconomyUI();
  if (typeof renderLeaderboard === "function") renderLeaderboard();
  if (typeof updateLockScreenStats === "function") updateLockScreenStats();
  if (typeof syncHubState === "function") syncHubState();
};

const saveProfileToCloud = async () => {
  if (!authSessionToken) return;
  try {
    await callAuthApi("saveProfile", {
      sessionToken: authSessionToken,
      profile: buildLocalProfilePayload(),
    });
    authProfileLastSavedAt = Date.now();
  } catch (_error) {}
};
const queueProfileCloudSave = () => {
  if (!authSessionToken) return;
  if (authProfileSaveDebounceTimer) return;
  const now = Date.now();
  const elapsed = now - authProfileLastSavedAt;
  const delay =
    elapsed >= PROFILE_CLOUD_MIN_INTERVAL_MS
      ? PROFILE_CLOUD_DEBOUNCE_MS
      : PROFILE_CLOUD_MIN_INTERVAL_MS - elapsed;
  authProfileSaveDebounceTimer = window.setTimeout(() => {
    authProfileSaveDebounceTimer = null;
    void saveProfileToCloud();
  }, delay);
};
const hydrateProfileFromCloud = async (options = {}) => {
  if (!authSessionToken) return;
  if (authProfileHydrated) {
    startAuthProfileSync();
    return;
  }
  let applied = false;
  const initial = options.initial && typeof options.initial === "object" ? options.initial : null;
  if (initial && initial.hasProfile && initial.profile && typeof initial.profile === "object") {
    applyCloudProfile(initial.profile);
    applied = true;
  }
  if (!applied) {
    try {
      const response = await callAuthApi("getProfile", {
        sessionToken: authSessionToken,
      });
      if (response && response.hasProfile && response.profile && typeof response.profile === "object") {
        applyCloudProfile(response.profile);
        applied = true;
      }
    } catch (_error) {}
  }
  if (!applied) {
    await saveProfileToCloud();
  }
  authProfileHydrated = true;
  startAuthProfileSync();
};
const refreshAuthSurfaces = () => {
  const display = authUser?.displayName || authUser?.username || "";
  if (display && typeof setDisplayName === "function") {
    setDisplayName(display);
  }
  if (typeof setAdminEnabled === "function") {
    if (isCurrentUserAdmin()) {
      setAdminEnabled(true, { grantTab: true, silent: true });
    } else {
      setAdminEnabled(false, { silent: true });
    }
  }
  if (typeof ensureAdminNavLink === "function") {
    ensureAdminNavLink();
  }
  if (typeof ensureLeaderboardNavLink === "function") {
    ensureLeaderboardNavLink();
  }
  if (typeof ensureFriendsNavLink === "function") {
    ensureFriendsNavLink();
  }
  if (typeof ensureMessagesNavLink === "function") {
    ensureMessagesNavLink();
  }
  if (typeof ensureFeedbackNavLink === "function") {
    ensureFeedbackNavLink();
  }
  if (typeof ensureTmCashNavLink === "function") {
    ensureTmCashNavLink();
  }
  if (typeof applyGodModeVisual === "function") {
    applyGodModeVisual();
  }
  if (typeof updateAdminPanelState === "function") {
    updateAdminPanelState();
  }
  if (typeof initAdminPage === "function") {
    initAdminPage();
  }
  if (typeof initLeaderboardPage === "function") {
    initLeaderboardPage();
  }
  if (typeof initMessagesPage === "function") {
    initMessagesPage();
  }
  if (typeof initFriendsPage === "function") {
    initFriendsPage();
  }
  if (typeof initFeedbackPage === "function") {
    initFeedbackPage();
  }
  if (typeof initTmCashPage === "function") {
    initTmCashPage();
  }
  if (authSessionToken) {
    startScreenRewardPolling();
    startAuthLockSync();
    if (pageMode === "tmcash") startTmCashPolling();
  } else {
    stopScreenRewardPolling();
    stopAuthLockSync();
    setAuthAccountLock(null);
    if (typeof stopFeedbackPolling === "function") stopFeedbackPolling();
    if (typeof stopTmCashPolling === "function") stopTmCashPolling();
  }
  if (authLogoutButton) {
    authLogoutButton.hidden = !authSessionToken;
    authLogoutButton.disabled = !authSessionToken;
    if (!authSessionToken) setSettingsLogoutStatus("");
  }
  renderAdminLockOverlay();
};

const applyAuthUserUpdate = (user) => {
  if (!user || !authSessionToken) return;
  persistAuthState({ token: authSessionToken, user });
  refreshAuthSurfaces();
};

const syncDisplayNameToCloud = async (displayName) => {
  if (!authSessionToken) return null;
  const response = await callAuthApi("setDisplayName", {
    sessionToken: authSessionToken,
    displayName: String(displayName || "").trim(),
  });
  if (response?.user) {
    applyAuthUserUpdate(response.user);
  }
  return response;
};

const switchAuthView = (nextView) => {
  authView = nextView === "register" ? "register" : "login";
  if (!authOverlayRoot) return;
  authOverlayRoot.querySelectorAll("[data-auth-nav]").forEach((button) => {
    const isMatch = button.getAttribute("data-auth-nav") === authView;
    button.classList.toggle("active", isMatch);
  });
  authOverlayRoot.querySelectorAll("[data-auth-page]").forEach((page) => {
    const isMatch = page.getAttribute("data-auth-page") === authView;
    page.classList.toggle("is-active", isMatch);
    page.hidden = !isMatch;
  });
  setAuthStatus("");
  if (authView === "register") {
    authRegisterForm?.querySelector("#auth-register-username")?.focus({ preventScroll: true });
  } else {
    authLoginForm?.querySelector("#auth-login-username")?.focus({ preventScroll: true });
  }
};
const ensureAuthOverlay = () => {
  if (authOverlayRoot) return authOverlayRoot;
  const overlay = document.createElement("section");
  overlay.className = "site-auth-overlay";
  overlay.id = "site-auth-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="site-auth-shell" role="dialog" aria-modal="true" aria-label="Account access">
      <div class="site-auth-nav">
        <button class="site-auth-nav-btn active" type="button" data-auth-nav="login">Sign In</button>
        <button class="site-auth-nav-btn" type="button" data-auth-nav="register">Create Account</button>
      </div>
      <section class="site-auth-page is-active" data-auth-page="login">
        <div class="site-auth-header">
          <span class="site-auth-kicker">TM Arcade Account</span>
          <h2>Sign In</h2>
          <p>Log in before entering the site.</p>
        </div>
        <form class="site-auth-form" id="auth-login-form" autocomplete="on">
          <label class="site-auth-field">
            <span>Username</span>
            <input id="auth-login-username" type="text" maxlength="24" required />
          </label>
          <label class="site-auth-field">
            <span>Password</span>
            <input id="auth-login-password" type="password" maxlength="64" required />
          </label>
          <button class="pill" type="submit">Sign In</button>
        </form>
      </section>
      <section class="site-auth-page" data-auth-page="register" hidden>
        <div class="site-auth-header">
          <span class="site-auth-kicker">TM Arcade Account</span>
          <h2>Create Account</h2>
          <p>Create your login password and set a separate lock screen PIN.</p>
        </div>
        <form class="site-auth-form" id="auth-register-form" autocomplete="on">
          <label class="site-auth-field">
            <span>Username</span>
            <input id="auth-register-username" type="text" maxlength="24" required />
          </label>
          <label class="site-auth-field">
            <span>Password</span>
            <input id="auth-register-password" type="password" maxlength="64" required />
          </label>
          <label class="site-auth-field">
            <span>Confirm password</span>
            <input id="auth-register-confirm" type="password" maxlength="64" required />
          </label>
          <label class="site-auth-field">
            <span>Lock Screen PIN (4-6 digits)</span>
            <input id="auth-register-lock-pin" type="password" inputmode="numeric" pattern="[0-9]*" minlength="4" maxlength="6" required />
          </label>
          <label class="site-auth-field">
            <span>Confirm Lock Screen PIN</span>
            <input id="auth-register-lock-pin-confirm" type="password" inputmode="numeric" pattern="[0-9]*" minlength="4" maxlength="6" required />
          </label>
          <button class="pill" type="submit">Create Account</button>
        </form>
      </section>
      <p class="site-auth-status" id="site-auth-status"></p>
    </div>
  `;
  document.body.appendChild(overlay);
  authOverlayRoot = overlay;
  authStatusEl = overlay.querySelector("#site-auth-status");
  authLoginForm = overlay.querySelector("#auth-login-form");
  authRegisterForm = overlay.querySelector("#auth-register-form");
  const savedUsername = String(localStorage.getItem(AUTH_LAST_USERNAME_KEY) || "").trim();
  const loginUsernameInput = overlay.querySelector("#auth-login-username");
  if (savedUsername && loginUsernameInput) loginUsernameInput.value = savedUsername;
  overlay.querySelectorAll("[data-auth-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      switchAuthView(button.getAttribute("data-auth-nav"));
    });
  });
  authLoginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = String(authLoginForm.querySelector("#auth-login-username")?.value || "").trim().toLowerCase();
    const password = String(authLoginForm.querySelector("#auth-login-password")?.value || "");
    if (!username || !password) {
      setAuthStatus("Enter username and password.", true);
      return;
    }
    setAuthStatus("Logging in...");
    try {
      const response = await callAuthApi("login", { username, password });
      applyGlobalBannerPayload(response);
      persistAuthState({ token: response.token, user: response.user });
      setAuthAccountLock(response?.lock || null);
      authProfileHydrated = false;
      await hydrateProfileFromCloud({ initial: response });
      setAuthGateState(false);
      setAuthStatus("");
      authLoginForm.reset();
      refreshAuthSurfaces();
      if (!response?.lock?.locked) {
        openLockAfterAuth();
      }
    } catch (error) {
      setAuthStatus(String(error.message || "Login failed."), true);
    }
  });
  authRegisterForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = String(authRegisterForm.querySelector("#auth-register-username")?.value || "").trim().toLowerCase();
    const password = String(authRegisterForm.querySelector("#auth-register-password")?.value || "");
    const confirmPassword = String(authRegisterForm.querySelector("#auth-register-confirm")?.value || "");
    const lockPin = String(authRegisterForm.querySelector("#auth-register-lock-pin")?.value || "").trim();
    const lockPinConfirm = String(authRegisterForm.querySelector("#auth-register-lock-pin-confirm")?.value || "").trim();
    if (!username || !password) {
      setAuthStatus("Username and password are required.", true);
      return;
    }
    if (password.length < 4) {
      setAuthStatus("Password must be at least 4 characters.", true);
      return;
    }
    if (password !== confirmPassword) {
      setAuthStatus("Passwords do not match.", true);
      return;
    }
    if (!/^\d{4,6}$/.test(lockPin)) {
      setAuthStatus("Lock screen PIN must be 4-6 digits.", true);
      return;
    }
    if (lockPin !== lockPinConfirm) {
      setAuthStatus("Lock screen PINs do not match.", true);
      return;
    }
    setAuthStatus("Creating account...");
    try {
      const response = await callAuthApi("register", { username, password });
      applyGlobalBannerPayload(response);
      persistAuthState({ token: response.token, user: response.user });
      setAuthAccountLock(response?.lock || null);
      authProfileHydrated = false;
      await hydrateProfileFromCloud({ initial: response });
      let lockPinSaved = true;
      try {
        await saveLockPin(lockPin);
      } catch (_error) {
        lockPinSaved = false;
      }
      setAuthGateState(false);
      setAuthStatus("");
      authRegisterForm.reset();
      refreshAuthSurfaces();
      if (lockPinSaved) {
        showActionToast("Account created.");
      } else {
        showActionToast("Account created. Set lock PIN in Settings > Lock Screen.");
      }
      if (!response?.lock?.locked) {
        openLockAfterAuth();
      }
    } catch (error) {
      setAuthStatus(String(error.message || "Account creation failed."), true);
    }
  });
  return overlay;
};

const setSettingsLogoutStatus = (message, isError = false) => {
  const statusEl = document.getElementById("settings-logout-status");
  if (!statusEl) return;
  statusEl.textContent = String(message || "");
  statusEl.classList.toggle("is-error", Boolean(isError));
};

const runLogoutFlow = async () => {
  stopAuthProfileSync();
  stopAuthLockSync();
  authProfileHydrated = false;
  try {
    if (authSessionToken) {
      await callAuthApi("logout", { sessionToken: authSessionToken });
    }
  } catch (_error) {}
  setAuthAccountLock(null);
  persistAuthState({ token: "", user: null });
  if (typeof setAdminEnabled === "function") {
    setAdminEnabled(false, { silent: true });
  }
  refreshAuthSurfaces();
  ensureAuthOverlay();
  setAuthGateState(true);
  switchAuthView("login");
};

const ensureAuthLogoutButton = () => {
  document.querySelectorAll(".top-inner .auth-logout-btn").forEach((node) => node.remove());
  const settingsButton = document.getElementById("settings-logout-btn");
  authLogoutButton = settingsButton || null;
  if (!authLogoutButton) return;
  authLogoutButton.hidden = !authSessionToken;
  authLogoutButton.disabled = !authSessionToken;
  if (!authSessionToken) {
    setSettingsLogoutStatus("");
  }
  authLogoutButton.onclick = async () => {
    if (!authSessionToken) return;
    authLogoutButton.disabled = true;
    setSettingsLogoutStatus("Logging out...");
    try {
      await runLogoutFlow();
    } catch (error) {
      setSettingsLogoutStatus(String(error?.message || "Unable to log out right now."), true);
      authLogoutButton.disabled = false;
    }
  };
};
const verifyExistingAuthSession = async () => {
  if (!authSessionToken || !isAuthApiConfigured()) return false;
  try {
    const response = await callAuthApi("session", { sessionToken: authSessionToken });
    applyGlobalBannerPayload(response);
    persistAuthState({ token: authSessionToken, user: response.user });
    setAuthAccountLock(response?.lock || null);
    authProfileHydrated = false;
    await hydrateProfileFromCloud({ initial: response });
    refreshAuthSurfaces();
    return true;
  } catch (error) {
    const message = String(error?.message || "").toLowerCase();
    const isExplicitAuthFailure =
      message.includes("invalid session") ||
      message.includes("missing session token") ||
      message.includes("session expired");
    if (!isExplicitAuthFailure && authSessionToken && authUser) {
      // Keep local sign-in state if verification fails due to transient network/server issues.
      refreshAuthSurfaces();
      return true;
    }
    stopAuthProfileSync();
    stopAuthLockSync();
    authProfileHydrated = false;
    setAuthAccountLock(null);
    persistAuthState({ token: "", user: null });
    if (typeof setAdminEnabled === "function") {
      setAdminEnabled(false, { silent: true });
    }
    return false;
  }
};
const initAuthGate = async () => {
  ensureAuthOverlay();
  ensureAuthLogoutButton();
  if (!isAuthApiConfigured()) {
    setAuthGateState(true);
    setAuthStatus("Authentication service is not configured.", true);
    switchAuthView("login");
    return;
  }
  const ok = await verifyExistingAuthSession();
  if (ok) {
    setAuthGateState(false);
    return;
  }
  switchAuthView("login");
  setAuthGateState(true);
};
const shouldShowFloatingCreditBubble = () => {
  if (document.body.classList.contains("game-only")) return false;
  return !["play", "custom-game", "app", "secret"].includes(pageMode);
};
const ensureFloatingCreditBubble = () => {
  if (!shouldShowFloatingCreditBubble()) return;
  const existing = document.querySelector(".home-credit-bubble");
  if (existing) return;
  const bubble = document.createElement("div");
  bubble.className = "home-credit-bubble";
  bubble.textContent = "Made By Ahmad Abu Sammour";
  document.body.appendChild(bubble);
};
ensureFloatingCreditBubble();
const runHomeOpenAnimation = () => {
  if (pageMode !== "popular") return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  document.body.classList.add("home-enter-prep");
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add("home-enter-play");
      window.setTimeout(() => {
        document.body.classList.remove("home-enter-prep", "home-enter-play");
      }, 1300);
    });
  });
};
runHomeOpenAnimation();
const activeGameId = document.body.dataset.game;
const queryParams = new URLSearchParams(window.location.search);
const queryGameId = queryParams.get("game") || "";
const gamePagePrefix = "";
const popularIds = new Set([
  "retrobowl",
  "slope",
  "bitlife",
  "driftboss",
  "basketbros",
  "cookieclicker",
  "fruitninja",
  "crossy",
]);

const loadFavorites = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch (error) {
    console.warn("Failed to load favorites:", error);
    return new Set();
  }
};

const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
};

const loadCustomApps = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_APPS_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Failed to load custom apps:", error);
    return [];
  }
};

const saveCustomApps = (apps) => {
  localStorage.setItem(CUSTOM_APPS_KEY, JSON.stringify(apps));
};

const normalizeAppUrl = (value) => {
  if (!value) return "";
  let url = value.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = `https://${url}`;
  }
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return "";
    }
    return parsed.href;
  } catch (error) {
    return "";
  }
};

const makeAppId = () =>
  `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const getAppInitials = (title) => {
  const trimmed = (title || "").trim();
  if (!trimmed) return "AP";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  const initials = parts.map((part) => part[0]).join("");
  return initials.slice(0, 2).toUpperCase();
};

const buildCustomAppCard = (app) => {
  const card = document.createElement("a");
  card.className = "app-card custom-app";
  card.href = app.url;
  card.target = "_blank";
  card.rel = "noopener";
  card.dataset.appId = app.id;
  card.dataset.custom = "1";
  card.draggable = true;

  const icon = document.createElement("span");
  icon.className = "app-icon";
  icon.textContent = getAppInitials(app.title);

  const info = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = app.title;
  const desc = document.createElement("p");
  desc.textContent = app.description || "Custom app";
  info.appendChild(title);
  info.appendChild(desc);

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "app-delete";
  deleteBtn.dataset.appId = app.id;
  deleteBtn.setAttribute("aria-label", "Delete app");
  deleteBtn.innerHTML = "&times;";

  const tag = document.createElement("span");
  tag.className = "app-custom-tag";
  tag.textContent = "Custom";

  card.appendChild(icon);
  card.appendChild(info);
  card.appendChild(deleteBtn);
  card.appendChild(tag);

  return card;
};

const renderCustomApps = () => {
  const appGrid = document.querySelector(".app-grid");
  if (!appGrid) return;
  appGrid.querySelectorAll('.app-card[data-custom="1"]').forEach((card) => card.remove());
  const apps = loadCustomApps();
  apps.forEach((app) => {
    appGrid.appendChild(buildCustomAppCard(app));
  });
};

const initCustomApps = () => {
  const appGrid = document.querySelector(".app-grid");
  const createButton = document.getElementById("create-app");
  const builder = document.getElementById("app-builder");
  const builderForm = document.getElementById("app-builder-form");
  const builderCancel = document.getElementById("app-builder-cancel");
  const titleInput = document.getElementById("app-title-input");
  const descInput = document.getElementById("app-desc-input");
  const linkInput = document.getElementById("app-link-input");
  const builderError = document.getElementById("app-builder-error");

  if (!appGrid || !builder || !builderForm || !createButton) return;

  const setBuilderVisible = (visible) => {
    builder.classList.toggle("show", visible);
    builder.setAttribute("aria-hidden", String(!visible));
    if (!visible && builderError) builderError.textContent = "";
  };

  const resetBuilder = () => {
    if (titleInput) titleInput.value = "";
    if (descInput) descInput.value = "";
    if (linkInput) linkInput.value = "";
    if (builderError) builderError.textContent = "";
  };

  createButton.addEventListener("click", () => {
    resetBuilder();
    setBuilderVisible(true);
    titleInput?.focus();
  });

  builderCancel?.addEventListener("click", () => {
    setBuilderVisible(false);
  });

  builder.addEventListener("click", (event) => {
    if (event.target === builder) setBuilderVisible(false);
  });

  builderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = (titleInput?.value || "").trim();
    const description = (descInput?.value || "").trim();
    const url = normalizeAppUrl(linkInput?.value || "");

    if (!title) {
      if (builderError) builderError.textContent = "Add a title.";
      return;
    }
    if (!url) {
      if (builderError) builderError.textContent = "Add a valid link.";
      return;
    }

    const apps = loadCustomApps();
    const app = {
      id: makeAppId(),
      title: title.slice(0, 32),
      description: description.slice(0, 120),
      url,
      createdAt: Date.now(),
    };
    apps.push(app);
    saveCustomApps(apps);
    renderCustomApps();
    applyAppsOrder();
    setBuilderVisible(false);
    awardStyleBonus("custom");
  });

  appGrid.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".app-delete");
    if (!deleteBtn) return;
    event.preventDefault();
    event.stopPropagation();
    const id = deleteBtn.dataset.appId;
    if (!id) return;
    const apps = loadCustomApps().filter((app) => app.id !== id);
    saveCustomApps(apps);
    const order = loadOrderList(APPS_ORDER_KEY).filter((appId) => appId !== id);
    saveOrderList(APPS_ORDER_KEY, order);
    renderCustomApps();
    applyAppsOrder();
  });
};

const loadCustomGames = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(CUSTOM_GAMES_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Failed to load custom games:", error);
    return [];
  }
};

const saveCustomGames = (gamesList) => {
  localStorage.setItem(CUSTOM_GAMES_KEY, JSON.stringify(gamesList));
};

const makeGameId = () =>
  `custom-game-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const toGameObject = (entry) => ({
  id: entry.id,
  name: entry.title,
  url: entry.url,
  badge: "Custom",
  description: entry.description || "Custom game",
  custom: true,
});

const mergeCustomGames = () => {
  const stored = loadCustomGames();
  const cleaned = [];
  stored.forEach((entry) => {
    if (!entry || typeof entry !== "object") return;
    const title = String(entry.title || "").trim();
    const url = normalizeAppUrl(entry.url || "");
    if (!title || !url) return;
    cleaned.push({
      id: entry.id || makeGameId(),
      title: title.slice(0, 32),
      description: String(entry.description || "").slice(0, 140),
      url,
      createdAt: entry.createdAt || Date.now(),
    });
  });
  if (cleaned.length !== stored.length) {
    saveCustomGames(cleaned);
  }
  games.length = 0;
  baseGames.forEach((game) => {
    games.push({ ...game });
  });
  cleaned.forEach((entry) => {
    games.push(toGameObject(entry));
  });
};

const initCustomGames = () => {
  const createButton = document.getElementById("create-game");
  const builder = document.getElementById("game-builder");
  const builderForm = document.getElementById("game-builder-form");
  const builderCancel = document.getElementById("game-builder-cancel");
  const titleInput = document.getElementById("game-title-input");
  const descInput = document.getElementById("game-desc-input");
  const linkInput = document.getElementById("game-link-input");
  const builderError = document.getElementById("game-builder-error");

  if (!createButton || !builder || !builderForm) return;

  const setBuilderVisible = (visible) => {
    builder.classList.toggle("show", visible);
    builder.setAttribute("aria-hidden", String(!visible));
    if (!visible && builderError) builderError.textContent = "";
  };

  const resetBuilder = () => {
    if (titleInput) titleInput.value = "";
    if (descInput) descInput.value = "";
    if (linkInput) linkInput.value = "";
    if (builderError) builderError.textContent = "";
  };

  createButton.addEventListener("click", () => {
    resetBuilder();
    setBuilderVisible(true);
    titleInput?.focus();
  });

  builderCancel?.addEventListener("click", () => {
    setBuilderVisible(false);
  });

  builder.addEventListener("click", (event) => {
    if (event.target === builder) setBuilderVisible(false);
  });

  builderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = (titleInput?.value || "").trim();
    const description = (descInput?.value || "").trim();
    const url = normalizeAppUrl(linkInput?.value || "");

    if (!title) {
      if (builderError) builderError.textContent = "Add a title.";
      return;
    }
    if (!url) {
      if (builderError) builderError.textContent = "Add a valid link.";
      return;
    }

    const gamesList = loadCustomGames();
    const game = {
      id: makeGameId(),
      title: title.slice(0, 32),
      description: description.slice(0, 140),
      url,
      createdAt: Date.now(),
    };
    gamesList.push(game);
    saveCustomGames(gamesList);
    mergeCustomGames();
    refreshGameViews();
    setBuilderVisible(false);
    awardStyleBonus("custom");
  });
};

const initBank = () => {
  if (pageMode !== "bank") return;
  const input = document.getElementById("bank-xp-input");
  const convertBtn = document.getElementById("bank-convert");
  const preview = document.getElementById("bank-preview");
  const status = document.getElementById("bank-status");
  const card = document.getElementById("bank-card");
  const tmInput = document.getElementById("bank-tm-input");
  const tmConvertBtn = document.getElementById("bank-convert-tm");
  const tmPreview = document.getElementById("bank-preview-tm");
  const tmStatus = document.getElementById("bank-status-tm");
  const tmCard = document.getElementById("bank-card-tm");
  const xpMaxBtn = document.getElementById("bank-xp-max");
  const tmMaxBtn = document.getElementById("bank-tm-max");
  const savingsInput = document.getElementById("bank-savings-input");
  const savingsDepositBtn = document.getElementById("bank-savings-deposit");
  const savingsWithdrawBtn = document.getElementById("bank-savings-withdraw");
  const savingsClaimBtn = document.getElementById("bank-savings-claim");
  const savingsStatus = document.getElementById("bank-savings-status");
  const savingsCard = document.getElementById("bank-savings-card");
  const savingsMaxWalletBtn = document.getElementById("bank-savings-max-wallet");
  const savingsMaxSavingsBtn = document.getElementById("bank-savings-max-savings");
  if (
    !input ||
    !convertBtn ||
    !preview ||
    !status ||
    !tmInput ||
    !tmConvertBtn ||
    !tmPreview ||
    !tmStatus ||
    !savingsInput ||
    !savingsDepositBtn ||
    !savingsWithdrawBtn ||
    !savingsClaimBtn ||
    !savingsStatus
  ) {
    return;
  }

  const updatePreview = () => {
    const max = Math.max(0, Math.floor(xpTotal));
    input.max = String(max);
    const value = Math.max(0, Math.floor(Number(input.value)));
    const safe = Math.min(value, max);
    preview.textContent = (safe * TM_CONVERSION_RATE).toLocaleString();
    convertBtn.disabled = safe <= 0 || max <= 0;
  };

  const updateTmPreview = () => {
    const max = Math.max(0, Math.floor(tmDollars));
    tmInput.max = String(max);
    const value = Math.max(0, Math.floor(Number(tmInput.value)));
    const safe = Math.min(value, max);
    const xpValue = Math.floor(safe / TM_CONVERSION_RATE);
    tmPreview.textContent = xpValue.toLocaleString();
    tmConvertBtn.disabled = safe <= 0 || max <= 0 || xpValue <= 0;
  };

  const updateSavingsControls = () => {
    const maxDeposit = Math.max(0, Math.floor(tmDollars));
    savingsInput.max = String(Math.max(maxDeposit, Math.floor(savingsBalance)));
    const value = Math.max(0, Math.floor(Number(savingsInput.value)));
    savingsDepositBtn.disabled = value <= 0 || value > tmDollars;
    savingsWithdrawBtn.disabled = value <= 0 || value > savingsBalance;
    savingsClaimBtn.disabled = Math.floor(savingsAccrued) <= 0;
  };

  const runConversion = () => {
    if (!canPerformEconomyAction()) return;
    const amount = Math.floor(Number(input.value));
    if (!Number.isFinite(amount) || amount <= 0) {
      status.textContent = "Enter a valid XP amount.";
      playUiTone("error");
      return;
    }
    if (amount > xpTotal) {
      status.textContent = "Not enough XP available.";
      playUiTone("error");
      return;
    }
    xpTotal = Math.max(0, xpTotal - amount);
    tmDollars = Math.max(0, tmDollars + amount * TM_CONVERSION_RATE);
    currentRank = getRank(xpTotal);
    saveXpState();
    saveTmState();
    updateProgressUI();
    status.textContent = `Converted ${amount} XP into ${amount * TM_CONVERSION_RATE} TM$.`;
    showActionToast(`+${amount * TM_CONVERSION_RATE} TM$`);
    playUiTone("confirm");
    if (card) {
      card.classList.remove("confirmed");
      void card.offsetWidth;
      card.classList.add("confirmed");
    }
    input.value = "";
    updatePreview();
  };

  const runTmConversion = () => {
    if (!canPerformEconomyAction()) return;
    const amount = Math.floor(Number(tmInput.value));
    if (!Number.isFinite(amount) || amount <= 0) {
      tmStatus.textContent = "Enter a valid TM$ amount.";
      playUiTone("error");
      return;
    }
    if (amount > tmDollars) {
      tmStatus.textContent = "Not enough TM Dollars available.";
      playUiTone("error");
      return;
    }
    const xpEarned = Math.floor(amount / TM_CONVERSION_RATE);
    if (xpEarned <= 0) {
      tmStatus.textContent = `Minimum ${TM_CONVERSION_RATE} TM$ converts to 1 XP.`;
      playUiTone("error");
      return;
    }
    const spent = xpEarned * TM_CONVERSION_RATE;
    tmDollars = Math.max(0, tmDollars - spent);
    xpTotal = Math.max(0, xpTotal + xpEarned);
    currentRank = getRank(xpTotal);
    saveXpState();
    saveTmState();
    updateProgressUI();
    const remainder = amount - spent;
    tmStatus.textContent =
      remainder > 0
        ? `Converted ${spent} TM$ into ${xpEarned} XP. (${remainder} TM$ kept.)`
        : `Converted ${spent} TM$ into ${xpEarned} XP.`;
    showActionToast(`+${xpEarned} XP`);
    playUiTone("confirm");
    if (tmCard) {
      tmCard.classList.remove("confirmed");
      void tmCard.offsetWidth;
      tmCard.classList.add("confirmed");
    }
    tmInput.value = "";
    updateTmPreview();
  };

  const runSavingsDeposit = () => {
    if (!canPerformEconomyAction()) return;
    syncSavings();
    const amount = Math.floor(Number(savingsInput.value));
    if (!Number.isFinite(amount) || amount <= 0) {
      savingsStatus.textContent = "Enter a valid TM$ amount.";
      playUiTone("error");
      return;
    }
    if (amount > tmDollars) {
      savingsStatus.textContent = "Not enough TM Dollars available.";
      playUiTone("error");
      return;
    }
    tmDollars = Math.max(0, tmDollars - amount);
    savingsBalance = Math.max(0, savingsBalance + amount);
    saveTmState();
    saveSavingsState();
    updateProgressUI();
    savingsStatus.textContent = `Deposited ${amount} TM$ into savings.`;
    showActionToast(`+${amount} TM$ saved`);
    playUiTone("confirm");
    if (savingsCard) {
      savingsCard.classList.remove("confirmed");
      void savingsCard.offsetWidth;
      savingsCard.classList.add("confirmed");
    }
    savingsInput.value = "";
    updateSavingsControls();
  };

  const runSavingsWithdraw = () => {
    if (!canPerformEconomyAction()) return;
    syncSavings();
    const amount = Math.floor(Number(savingsInput.value));
    if (!Number.isFinite(amount) || amount <= 0) {
      savingsStatus.textContent = "Enter a valid TM$ amount.";
      playUiTone("error");
      return;
    }
    if (amount > savingsBalance) {
      savingsStatus.textContent = "Not enough TM$ in savings.";
      playUiTone("error");
      return;
    }
    savingsBalance = Math.max(0, savingsBalance - amount);
    tmDollars = Math.max(0, tmDollars + amount);
    saveTmState();
    saveSavingsState();
    updateProgressUI();
    savingsStatus.textContent = `Withdrew ${amount} TM$ from savings.`;
    showActionToast(`+${amount} TM$`);
    playUiTone("confirm");
    if (savingsCard) {
      savingsCard.classList.remove("confirmed");
      void savingsCard.offsetWidth;
      savingsCard.classList.add("confirmed");
    }
    savingsInput.value = "";
    updateSavingsControls();
  };

  const runSavingsClaim = () => {
    if (!canPerformEconomyAction()) return;
    syncSavings();
    const claimable = Math.floor(savingsAccrued);
    if (claimable <= 0) {
      savingsStatus.textContent = "No interest to claim yet.";
      playUiTone("error");
      return;
    }
    savingsAccrued = Math.max(0, savingsAccrued - claimable);
    tmDollars = Math.max(0, tmDollars + claimable);
    saveTmState();
    saveSavingsState();
    updateProgressUI();
    savingsStatus.textContent = `Claimed ${claimable} TM$ interest.`;
    showActionToast(`+${claimable} TM$`);
    playUiTone("confirm");
    if (savingsCard) {
      savingsCard.classList.remove("confirmed");
      void savingsCard.offsetWidth;
      savingsCard.classList.add("confirmed");
    }
    updateSavingsControls();
  };

  convertBtn.addEventListener("click", runConversion);
  input.addEventListener("input", updatePreview);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runConversion();
    }
  });
  xpMaxBtn?.addEventListener("click", () => {
    input.value = Math.floor(xpTotal).toString();
    updatePreview();
  });
  tmConvertBtn.addEventListener("click", runTmConversion);
  tmInput.addEventListener("input", updateTmPreview);
  tmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runTmConversion();
    }
  });
  tmMaxBtn?.addEventListener("click", () => {
    tmInput.value = Math.floor(tmDollars).toString();
    updateTmPreview();
  });
  savingsDepositBtn.addEventListener("click", runSavingsDeposit);
  savingsWithdrawBtn.addEventListener("click", runSavingsWithdraw);
  savingsClaimBtn.addEventListener("click", runSavingsClaim);
  savingsInput.addEventListener("input", updateSavingsControls);
  savingsInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      runSavingsDeposit();
    }
  });
  savingsMaxWalletBtn?.addEventListener("click", () => {
    savingsInput.value = Math.floor(tmDollars).toString();
    updateSavingsControls();
  });
  savingsMaxSavingsBtn?.addEventListener("click", () => {
    savingsInput.value = Math.floor(savingsBalance).toString();
    updateSavingsControls();
  });
  window.addEventListener("tm-xp-update", updatePreview);
  window.addEventListener("tm-savings-update", updateSavingsControls);
  updatePreview();
  updateTmPreview();
  updateSavingsControls();
};

const isItemEquipped = (item) => {
  if (!item) return false;
  if (isVisualItemType(item.type)) return getVisualUpgrade(item.type) === item.value;
  if (item.type === "name_color") return activeCosmetics.color === item.value;
  if (item.type === "border") return activeCosmetics.border === item.value;
  if (item.type === "icon") return activeCosmetics.icon === item.value;
  if (item.type === "title") return activeCosmetics.title === item.value;
  if (item.type === "profile_theme") return activeCosmetics.profileTheme === item.value;
  if (item.type === "accent") {
    return normalizeAccentChoice(localStorage.getItem(ACCENT_KEY) || "neon") === item.value;
  }
  if (item.type === "theme") {
    return normalizeThemeChoice(localStorage.getItem(THEME_KEY) || "default") === item.value;
  }
  return false;
};

const equipCosmetic = (item) => {
  if (!item) return;
  if (isVisualItemType(item.type)) {
    setVisualUpgrade(item.type, item.value, { silent: true });
    return;
  }
  if (item.type === "name_color") activeCosmetics.color = item.value;
  if (item.type === "border") activeCosmetics.border = item.value;
  if (item.type === "icon") activeCosmetics.icon = item.value;
  if (item.type === "title") activeCosmetics.title = item.value;
  if (item.type === "profile_theme") activeCosmetics.profileTheme = item.value;
  saveCosmetics(activeCosmetics);
  applyProfileCosmetics();
};

const initShop = () => {
  if (pageMode !== "shop") return;
  const container = document.getElementById("shop-sections");
  const searchInput = document.getElementById("shop-search");
  const categorySelect = document.getElementById("shop-category");
  const favoritesToggle = document.getElementById("shop-filter-favorites");
  const wishlistToggle = document.getElementById("shop-filter-wishlist");
  if (!container) return;

  let previewTimer = null;
  let previewType = null;
  let previewBase = null;
  let favoritesOnly = false;
  let wishlistOnly = false;
  let activeCategory = "all";
  let searchTerm = "";
  let shopFavorites = loadShopSet(SHOP_FAVORITES_KEY);
  let shopWishlist = loadShopSet(SHOP_WISHLIST_KEY);

  const sections = SHOP_ITEMS.reduce((map, item) => {
    if (!map.has(item.section)) map.set(item.section, []);
    map.get(item.section).push(item);
    return map;
  }, new Map());

  const renderCategoryOptions = () => {
    if (!categorySelect) return;
    const current = categorySelect.value || "all";
    categorySelect.innerHTML = "";
    const option = document.createElement("option");
    option.value = "all";
    option.textContent = t("shop_category_all");
    categorySelect.appendChild(option);
    [...sections.keys()].forEach((section) => {
      const opt = document.createElement("option");
      opt.value = section;
      opt.textContent = section;
      categorySelect.appendChild(opt);
    });
    categorySelect.value = current;
  };

  const applyThemePreview = (choice) => {
    const theme = choice || "default";
    if (theme === "default" || theme === "dark") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", theme);
    }
    document.documentElement.style.colorScheme =
      theme === "light" || theme === "whiteglass" ? "light" : "dark";
    updateThemeUI(theme);
  };

  const applyAccentPreview = (choice) => {
    const accent = choice || "neon";
    if (!accent || accent === "neon" || accent === "default") {
      document.body.removeAttribute("data-accent");
    } else {
      document.body.setAttribute("data-accent", accent);
    }
    updateAccentUI(accent);
  };

  const restorePreviewBase = () => {
    if (!previewBase) return;
    applyTheme(previewBase.theme);
    updateThemeUI(previewBase.theme);
    applyAccent(previewBase.accent);
    updateAccentUI(previewBase.accent);
    activeCosmetics = cloneCosmetics(previewBase.cosmetics);
    applyProfileCosmetics();
    hubVisuals = cloneHubVisuals(previewBase.visuals);
    saveHubVisuals();
    applyHubVisualStyles();
  };

  const stopPreview = () => {
    if (!previewBase) return;
    restorePreviewBase();
    previewBase = null;
    previewType = null;
    showActionToast("Preview ended.");
  };

  const startPreview = (item) => {
    if (previewTimer) clearTimeout(previewTimer);
    if (!previewBase) {
      previewBase = {
        theme: localStorage.getItem(THEME_KEY) || "default",
        accent: localStorage.getItem(ACCENT_KEY) || "neon",
        cosmetics: cloneCosmetics(activeCosmetics),
        visuals: cloneHubVisuals(hubVisuals),
      };
    } else {
      restorePreviewBase();
    }
    if (item.type === "theme") {
      previewType = "theme";
      applyThemePreview(item.value);
    } else if (item.type === "accent") {
      previewType = "accent";
      applyAccentPreview(item.value);
    } else if (isVisualItemType(item.type)) {
      previewType = "visual";
      setVisualUpgrade(item.type, item.value, { silent: true });
    } else {
      previewType = "cosmetic";
      const temp = cloneCosmetics(activeCosmetics);
      if (item.type === "name_color") temp.color = item.value;
      if (item.type === "border") temp.border = item.value;
      if (item.type === "icon") temp.icon = item.value;
      if (item.type === "title") temp.title = item.value;
      if (item.type === "profile_theme") temp.profileTheme = item.value;
      activeCosmetics = temp;
      applyProfileCosmetics();
    }
    showActionToast("Preview for 10 seconds.");
    previewTimer = setTimeout(stopPreview, 10000);
  };

  const renderShop = () => {
    container.innerHTML = "";
    if (!sections.size) {
      container.innerHTML = `
        <div class="shop-section">
          <h2>Shop Coming Soon</h2>
          <p>The shop is empty for now. Check back later for drops and upgrades.</p>
        </div>
      `;
      return;
    }
    const term = searchTerm.trim().toLowerCase();
    const filteredItems = SHOP_ITEMS.filter((item) => {
      if (!isSeasonalItemAvailable(item) && !shopPurchases.has(item.id)) return false;
      if (activeCategory !== "all" && item.section !== activeCategory) return false;
      if (favoritesOnly && !shopFavorites.has(item.id)) return false;
      if (wishlistOnly && !shopWishlist.has(item.id)) return false;
      if (!term) return true;
      return (
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.section.toLowerCase().includes(term)
      );
    });
    const filteredSections = filteredItems.reduce((map, item) => {
      if (!map.has(item.section)) map.set(item.section, []);
      map.get(item.section).push(item);
      return map;
    }, new Map());

    if (!filteredSections.size) {
      container.innerHTML = `
        <div class="shop-section">
          <h2>No matches</h2>
          <p>Try a different search or clear filters.</p>
        </div>
      `;
      return;
    }

    filteredSections.forEach((items, sectionName) => {
      const section = document.createElement("div");
      section.className = "shop-section";
      section.innerHTML = `
        <h2>${sectionName}</h2>
        <p>Spend TM Dollars to unlock and equip this set.</p>
      `;
      const grid = document.createElement("div");
      grid.className = "shop-grid";
      items.forEach((item) => {
        const purchased = shopPurchases.has(item.id);
        const equipped = isItemEquipped(item);
        const price = getShopPrice(item);
        const seasonalUnavailable = !isSeasonalItemAvailable(item) && !purchased;
        const card = document.createElement("div");
        card.className = `shop-card${purchased ? " owned" : ""}${shopFavorites.has(item.id) ? " is-favorite" : ""}${
          shopWishlist.has(item.id) ? " is-wishlist" : ""
        }`;
        const button = document.createElement("button");
        button.className = "pill small";
        const tryButton = document.createElement("button");
        tryButton.className = "pill ghost small";
        tryButton.textContent = "Try 10s";
        tryButton.style.display = "inline-flex";
        if (!purchased) {
          button.textContent = `Buy • ${price} TM$`;
        } else if (item.type === "theme") {
          button.textContent = equipped ? "Active" : "Use Theme";
        } else if (item.type === "accent") {
          button.textContent = equipped ? "Active" : "Use Accent";
        } else {
          button.textContent = equipped ? "Equipped" : "Equip";
        }
        if (purchased && equipped) {
          button.disabled = true;
        }
        tryButton.addEventListener("click", () => {
          if (!canPerformEconomyAction()) return;
          startPreview(item);
        });
        button.addEventListener("click", () => {
          if (!canPerformEconomyAction()) return;
          if (seasonalUnavailable) {
            showActionToast("Seasonal item is currently locked.");
            playUiTone("error");
            return;
          }
          const owned = shopPurchases.has(item.id);
          if (!owned) {
            if (tmDollars < price) {
              showActionToast("Not enough TM Dollars.");
              playUiTone("error");
              return;
            }
            tmDollars -= price;
            saveTmState();
            shopPurchases.add(item.id);
            savePurchases(shopPurchases);
            showActionToast(`Purchased ${item.name}.`);
            playUiTone("confirm");
            if (item.type === "theme") {
              localStorage.setItem(THEME_KEY, item.value);
              applyTheme(item.value);
              updateThemeUI(item.value);
            } else if (item.type === "accent") {
              localStorage.setItem(ACCENT_KEY, item.value);
              applyAccent(item.value);
              updateAccentUI(item.value);
            } else if (isVisualItemType(item.type)) {
              setVisualUpgrade(item.type, item.value, { silent: true });
            } else {
              equipCosmetic(item);
            }
          } else if (item.type === "theme") {
            localStorage.setItem(THEME_KEY, item.value);
            applyTheme(item.value);
            updateThemeUI(item.value);
            showActionToast(`Theme set to ${capitalize(item.value)}.`);
            playUiTone("switch");
          } else if (item.type === "accent") {
            localStorage.setItem(ACCENT_KEY, item.value);
            applyAccent(item.value);
            updateAccentUI(item.value);
            showActionToast(`Accent set to ${capitalize(item.value)}.`);
            playUiTone("switch");
          } else if (isVisualItemType(item.type)) {
            setVisualUpgrade(item.type, item.value, { silent: true });
            showActionToast(`Applied ${item.name}.`);
            playUiTone("switch");
          } else {
            equipCosmetic(item);
            showActionToast(`Equipped ${item.name}.`);
            playUiTone("confirm");
          }
          updateEconomyUI();
          renderShop();
        });

        const preview =
          item.type === "theme"
            ? `<div class="shop-swatch theme" data-theme-preview="${item.value}" aria-hidden="true"></div>`
            : item.type === "accent"
              ? `<div class="shop-swatch accent" data-accent-preview="${item.value}" aria-hidden="true"></div>`
              : "";
        const noteText = seasonalUnavailable ? "Seasonal item (locked off-season)" : purchased ? "Owned" : "One-time purchase";
        card.innerHTML = `
          <div class="shop-card-head">
            <h3>${item.name}</h3>
            <div class="shop-card-marks">
              <button
                class="shop-mark shop-favorite${shopFavorites.has(item.id) ? " is-active" : ""}"
                type="button"
                aria-pressed="${shopFavorites.has(item.id)}"
                title="Favorite"
                data-shop-favorite="${item.id}"
              >
                ★
              </button>
              <button
                class="shop-mark shop-wishlist${shopWishlist.has(item.id) ? " is-active" : ""}"
                type="button"
                aria-pressed="${shopWishlist.has(item.id)}"
                title="Wishlist"
                data-shop-wishlist="${item.id}"
              >
                ♥
              </button>
            </div>
          </div>
          ${preview}
          <div class="shop-meta">
            <span>${item.description}</span>
            <span class="shop-price">${price} TM$</span>
          </div>
          <div class="shop-note">${noteText}</div>
        `;
        const actions = document.createElement("div");
        actions.className = "shop-actions";
        actions.appendChild(button);
        if (tryButton.style.display !== "none") actions.appendChild(tryButton);
        card.appendChild(actions);
        grid.appendChild(card);
      });
      section.appendChild(grid);
      container.appendChild(section);
    });
  };

  const bindFavoriteButtons = () => {
    container.querySelectorAll("[data-shop-favorite]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-shop-favorite");
        if (!id) return;
        if (shopFavorites.has(id)) {
          shopFavorites.delete(id);
        } else {
          shopFavorites.add(id);
        }
        saveShopSet(SHOP_FAVORITES_KEY, shopFavorites);
        renderShop();
      });
    });
    container.querySelectorAll("[data-shop-wishlist]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-shop-wishlist");
        if (!id) return;
        if (shopWishlist.has(id)) {
          shopWishlist.delete(id);
        } else {
          shopWishlist.add(id);
        }
        saveShopSet(SHOP_WISHLIST_KEY, shopWishlist);
        renderShop();
      });
    });
  };

  const rerender = () => {
    renderShop();
    bindFavoriteButtons();
  };

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchTerm = searchInput.value || "";
      rerender();
    });
  }
  if (categorySelect) {
    renderCategoryOptions();
    categorySelect.addEventListener("change", () => {
      activeCategory = categorySelect.value || "all";
      rerender();
    });
  }
  if (favoritesToggle) {
    favoritesToggle.addEventListener("click", () => {
      favoritesOnly = !favoritesOnly;
      favoritesToggle.classList.toggle("active", favoritesOnly);
      rerender();
    });
  }
  if (wishlistToggle) {
    wishlistToggle.addEventListener("click", () => {
      wishlistOnly = !wishlistOnly;
      wishlistToggle.classList.toggle("active", wishlistOnly);
      rerender();
    });
  }
  rerender();
};

const normalizeThemeChoice = (choice) => choice || "default";

const isThemeUnlocked = (theme) => {
  if (!theme) return true;
  if (!LOCKED_THEMES.has(theme)) return true;
  return shopPurchases.has(`theme_${theme}`);
};

const enforceThemeChoice = (choice) => {
  const normalized = normalizeThemeChoice(choice);
  if (normalized === "default") return "default";
  if (normalized === "superbowl") return "default";
  if (!isThemeUnlocked(normalized)) return "default";
  return normalized;
};

const normalizeAccentChoice = (choice) => choice || "neon";

const isAccentUnlocked = (accent) => {
  if (!accent) return true;
  if (accent === "neon") return true;
  if (!LOCKED_ACCENTS.has(accent)) return true;
  return shopPurchases.has(`accent_${accent}`);
};

const enforceAccentChoice = (choice) => {
  const normalized = normalizeAccentChoice(choice);
  return isAccentUnlocked(normalized) ? normalized : "neon";
};

const applyTheme = (choice) => {
  const theme = enforceThemeChoice(choice);
  if (theme === "default" || theme === "dark") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", theme);
  }
  document.documentElement.style.colorScheme =
    theme === "light" || theme === "whiteglass" ? "light" : "dark";
};

const applyAmbient = (state) => {
  const isOn = state !== "off";
  document.body.classList.toggle("ambient-off", !isOn);
};

const applyAccent = (choice) => {
  const accent = enforceAccentChoice(choice);
  if (!accent || accent === "neon" || accent === "default") {
    document.body.removeAttribute("data-accent");
    return;
  }
  document.body.setAttribute("data-accent", accent);
};

const applyDensity = (choice) => {
  if (!choice || choice === "comfort") {
    document.body.removeAttribute("data-density");
    return;
  }
  document.body.setAttribute("data-density", choice);
};

const applyMotion = (choice) => {
  const reduce = choice === "reduced";
  document.body.classList.toggle("motion-off", reduce);
};

const PERFORMANCE_LEVELS = new Set(["high", "medium", "low"]);

const normalizePerformanceChoice = (choice) => {
  const level = String(choice || "high")
    .trim()
    .toLowerCase();
  return PERFORMANCE_LEVELS.has(level) ? level : "high";
};

const getRecommendedPerformanceChoice = () => {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return "medium";
  const cores = Number(navigator.hardwareConcurrency || 0);
  const memory = Number(navigator.deviceMemory || 0);
  const compactTouchDevice =
    Number(navigator.maxTouchPoints || 0) > 0 && Boolean(window.matchMedia?.("(max-width: 900px)")?.matches);
  if ((cores > 0 && cores <= 2) || (memory > 0 && memory <= 2)) return "low";
  if ((cores > 0 && cores <= 4) || (memory > 0 && memory <= 4) || compactTouchDevice) return "medium";
  return "high";
};

const resolveInitialPerformanceChoice = () => {
  const stored = localStorage.getItem(PERFORMANCE_KEY);
  if (stored) {
    const normalized = normalizePerformanceChoice(stored);
    if (normalized !== stored) localStorage.setItem(PERFORMANCE_KEY, normalized);
    return normalized;
  }
  const recommended = getRecommendedPerformanceChoice();
  localStorage.setItem(PERFORMANCE_KEY, recommended);
  return recommended;
};

const getActivePerformanceChoice = () =>
  normalizePerformanceChoice(document.body.getAttribute("data-performance") || localStorage.getItem(PERFORMANCE_KEY));

const getPerformanceIntervalMultiplier = () => {
  const level = getActivePerformanceChoice();
  if (level === "low") return 1.9;
  if (level === "medium") return 1.35;
  return 1;
};

const getAdaptiveIntervalMs = (baseMs, minMs = 1000) =>
  Math.max(minMs, Math.round(Number(baseMs) * getPerformanceIntervalMultiplier()));

const getRealtimePollIntervalMs = (baseMs, minMs = 1000) => {
  const level = getActivePerformanceChoice();
  const multiplier = level === "low" ? 1.15 : level === "medium" ? 1.05 : 1;
  return Math.max(minMs, Math.round(Number(baseMs) * multiplier));
};

const applyPerformance = (choice) => {
  const level = normalizePerformanceChoice(choice);
  document.body.setAttribute("data-performance", level);
};

const normalizeVisualValue = (value, fallback = "default") => {
  const normalized = String(value || "").trim().toLowerCase();
  return normalized || fallback;
};

const applyHubVisualStyles = () => {
  if (!hubVisuals || typeof hubVisuals !== "object") return;
  const confettiStyle = normalizeVisualValue(hubVisuals.confettiStyle, "classic");
  const mascot = normalizeVisualValue(hubVisuals.mascot, "none");
  const calculatorSkin = normalizeVisualValue(hubVisuals.calculatorSkin, "default");
  const cursorStyle = normalizeVisualValue(hubVisuals.cursorStyle, "default");
  const hubDecoration = normalizeVisualValue(hubVisuals.hubDecoration, "none");
  const ambientAnimation = normalizeVisualValue(hubVisuals.ambientAnimation, "default");
  document.body.setAttribute("data-confetti-style", confettiStyle);
  document.body.setAttribute("data-mascot-style", mascot);
  document.body.setAttribute("data-calc-skin", calculatorSkin);
  document.body.setAttribute("data-cursor-style", cursorStyle);
  document.body.setAttribute("data-hub-decoration", hubDecoration);
  document.body.setAttribute("data-ambient-style", ambientAnimation);
};

const setVisualUpgrade = (type, value, options = {}) => {
  if (!type) return;
  const normalized = String(value || "").trim().toLowerCase();
  if (type === "confetti_style") hubVisuals.confettiStyle = normalized || "classic";
  if (type === "mascot") hubVisuals.mascot = normalized || "none";
  if (type === "calculator_skin") hubVisuals.calculatorSkin = normalized || "default";
  if (type === "cursor_style") hubVisuals.cursorStyle = normalized || "default";
  if (type === "hub_decoration") hubVisuals.hubDecoration = normalized || "none";
  if (type === "ambient_animation") hubVisuals.ambientAnimation = normalized || "default";
  saveHubVisuals();
  applyHubVisualStyles();
  if (!options.silent) {
    showActionToast(`Applied ${type.replace(/_/g, " ")}.`);
  }
  syncHubState();
};

const getVisualUpgrade = (type) => {
  if (type === "confetti_style") return hubVisuals.confettiStyle || "classic";
  if (type === "mascot") return hubVisuals.mascot || "none";
  if (type === "calculator_skin") return hubVisuals.calculatorSkin || "default";
  if (type === "cursor_style") return hubVisuals.cursorStyle || "default";
  if (type === "hub_decoration") return hubVisuals.hubDecoration || "none";
  if (type === "ambient_animation") return hubVisuals.ambientAnimation || "default";
  return "";
};

const applyLanguage = (lang) => {
  const next = translations[lang] ? lang : "en";
  currentLang = next;
  localStorage.setItem(LANG_KEY, currentLang);
  const isRtl = currentLang === "ar" || currentLang === "ar-lev";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isRtl);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (!key) return;
    const text = t(key);
    node.textContent = navEmojis[key] ? `${navEmojis[key]} ${text}` : text;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (!key) return;
    node.setAttribute("placeholder", t(key));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const key = node.dataset.i18nTitle;
    if (!key) return;
    node.textContent = t(key);
  });
  scrubNavMessage();
  if (pageMode === "play" && typeof activeGame !== "undefined" && activeGame?.name) {
    document.title = t("title_game", { name: activeGame.name });
  }
  applyLockTranslations();
};


const loadNumber = (key, fallback) => {
  const value = Number(localStorage.getItem(key));
  return Number.isFinite(value) ? value : fallback;
};

const loadPurchases = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(SHOP_PURCHASES_KEY) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
};

const savePurchases = (set) => {
  localStorage.setItem(SHOP_PURCHASES_KEY, JSON.stringify([...set]));
};

const getShopPrice = (item) => Math.max(1, Math.round(item.price * SHOP_PRICE_MULTIPLIER));

const loadShopSet = (key) => {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(stored) ? stored : []);
  } catch {
    return new Set();
  }
};

const saveShopSet = (key, set) => {
  localStorage.setItem(key, JSON.stringify([...set]));
};

const loadCosmetics = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(COSMETICS_KEY) || "{}");
    return {
      color: stored?.color || "",
      border: stored?.border || "",
      icon: stored?.icon || "",
      title: stored?.title || "",
      profileTheme: stored?.profileTheme || "",
    };
  } catch {
    return { color: "", border: "", icon: "", title: "", profileTheme: "" };
  }
};

const saveCosmetics = (cosmetics) => {
  localStorage.setItem(COSMETICS_KEY, JSON.stringify(cosmetics));
};

const cloneCosmetics = (cosmetics) => ({
  color: cosmetics.color || "",
  border: cosmetics.border || "",
  icon: cosmetics.icon || "",
  title: cosmetics.title || "",
  profileTheme: cosmetics.profileTheme || "",
});

const loadOrderList = (key) => {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Failed to load order list:", error);
    return [];
  }
};

const saveOrderList = (key, list) => {
  localStorage.setItem(key, JSON.stringify(list));
};

const getRank = (xp) => {
  let current = rankTiers[0];
  rankTiers.forEach((tier) => {
    if (xp >= tier.min) current = tier;
  });
  return t(current.key);
};

const getDisplayName = () => {
  const stored = (localStorage.getItem(USERNAME_KEY) || "").trim();
  return stored || t("player_label");
};

let xpTotal = Math.max(0, Math.floor(loadNumber(XP_KEY, 0)));
let xpProgress = Math.max(0, loadNumber(XP_PROGRESS_KEY, 0));
let currentRank = getRank(xpTotal);
let streakCount = Math.max(0, Math.floor(loadNumber(STREAK_KEY, 0)));
let tmDollars = Math.max(0, Math.floor(loadNumber(TM_KEY, 0)));
let tmProgress = Math.max(0, loadNumber(TM_PROGRESS_KEY, 0));
let savingsBalance = Math.max(0, loadNumber(SAVINGS_KEY, 0));
let savingsAccrued = Math.max(0, loadNumber(SAVINGS_ACCRUED_KEY, 0));
let savingsLast = loadNumber(SAVINGS_LAST_KEY, Date.now());
let shopPurchases = loadPurchases();
let activeCosmetics = loadCosmetics();

const VISUAL_ITEM_TYPES = new Set([
  "confetti_style",
  "mascot",
  "calculator_skin",
  "cursor_style",
  "hub_decoration",
  "ambient_animation",
]);

const isVisualItemType = (type) => VISUAL_ITEM_TYPES.has(type);

const getCurrentSeasonTag = (date = new Date()) => {
  const month = date.getMonth();
  if (month >= 8 && month <= 10) return "halloween";
  if (month === 11 || month <= 1) return "winter";
  return "spring";
};

const isSeasonalItemAvailable = (item) => {
  if (!item || !item.seasonal) return true;
  return String(item.seasonal) === getCurrentSeasonTag();
};

const loadObjectState = (key, fallback) => {
  try {
    const stored = JSON.parse(localStorage.getItem(key) || "null");
    if (!stored || typeof stored !== "object" || Array.isArray(stored)) return { ...fallback };
    return { ...fallback, ...stored };
  } catch {
    return { ...fallback };
  }
};

const DEFAULT_HUB_VISUALS = {
  confettiStyle: "classic",
  mascot: "none",
  calculatorSkin: "default",
  cursorStyle: "default",
  hubDecoration: "none",
  ambientAnimation: "default",
};

const cloneHubVisuals = (state) => ({
  confettiStyle: state?.confettiStyle || "classic",
  mascot: state?.mascot || "none",
  calculatorSkin: state?.calculatorSkin || "default",
  cursorStyle: state?.cursorStyle || "default",
  hubDecoration: state?.hubDecoration || "none",
  ambientAnimation: state?.ambientAnimation || "default",
});

const DEFAULT_MINI_QUEST_PROGRESS = {
  clickQuestCount: 0,
  clickQuestDone: false,
  hiddenCornerFound: false,
  mascotTapCount: 0,
  mascotQuestDone: false,
};

let hubVisuals = cloneHubVisuals(loadObjectState(HUB_VISUALS_KEY, DEFAULT_HUB_VISUALS));
let miniQuestProgress = loadObjectState(MINI_QUEST_PROGRESS_KEY, DEFAULT_MINI_QUEST_PROGRESS);
let hiddenEasterEggs = loadObjectState(HIDDEN_EASTER_EGGS_KEY, {});
let miniQuestSaveTimer = null;

const saveHubVisuals = () => {
  localStorage.setItem(HUB_VISUALS_KEY, JSON.stringify(hubVisuals));
};

const flushMiniQuestProgress = () => {
  localStorage.setItem(MINI_QUEST_PROGRESS_KEY, JSON.stringify(miniQuestProgress));
};

const saveMiniQuestProgress = (options = {}) => {
  const force = options.force === true;
  if (force) {
    if (miniQuestSaveTimer) {
      window.clearTimeout(miniQuestSaveTimer);
      miniQuestSaveTimer = null;
    }
    flushMiniQuestProgress();
    return;
  }
  if (miniQuestSaveTimer) return;
  miniQuestSaveTimer = window.setTimeout(() => {
    miniQuestSaveTimer = null;
    flushMiniQuestProgress();
  }, 1200);
};

const saveHiddenEasterEggs = () => {
  localStorage.setItem(HIDDEN_EASTER_EGGS_KEY, JSON.stringify(hiddenEasterEggs));
};

const isShopThemeItem = (item) => item?.type === "theme";
const isShopVisualItem = (item) => isVisualItemType(item?.type);

const buildPurchasedThemesMap = () => {
  const map = {
    default: true,
    dark: true,
    light: true,
  };
  SHOP_ITEMS.forEach((item) => {
    if (!isShopThemeItem(item)) return;
    if (shopPurchases.has(item.id)) {
      map[item.value] = true;
    }
  });
  return map;
};

const buildPurchasedVisualsMap = () => {
  const map = {};
  SHOP_ITEMS.forEach((item) => {
    if (!isShopVisualItem(item)) return;
    if (shopPurchases.has(item.id)) {
      map[item.value] = true;
    }
  });
  return map;
};

const getStreakMultiplier = () => (streakCount >= 5 ? 2 : 1);
const CLUTCH_START_MINUTES = 15 * 60 + 5; // 3:05 PM
const CLUTCH_END_MINUTES = 15 * 60 + 10; // 3:10 PM
const isClutchTime = () => {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= CLUTCH_START_MINUTES && minutes < CLUTCH_END_MINUTES;
};
const getClutchMultiplier = () => (isClutchTime() ? 2 : 1);
const getXpMultiplier = () => getStreakMultiplier() * getClutchMultiplier();
const getPlaystyle = () => localStorage.getItem(PLAYSTYLE_KEY) || "grinder";
const getPlaystyleCooldownRemaining = () => {
  const lastSwitch = loadNumber(PLAYSTYLE_SWITCH_KEY, 0);
  const remaining = PLAYSTYLE_COOLDOWN_MS - (Date.now() - lastSwitch);
  return Math.max(0, remaining);
};
const formatCooldown = (ms) => {
  if (ms <= 0) return "Ready";
  const totalMinutes = Math.ceil(ms / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60);
  const minutes = totalMinutes % 60;
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};
const getAfkTimeout = () => (getPlaystyle() === "chill" ? AFK_TIMEOUT_CHILL : AFK_TIMEOUT);
const hardBadges = new Set([
  "horror",
  "platform",
  "duel",
  "runner",
  "puzzle",
  "velocity",
  "arena",
]);
const hardGameIds = new Set([
  "learntofly2",
  "learntofly3",
  "justfalllol",
  "pokemondiamond",
  "pokemonplatinum",
  "fancypantsadventure2",
]);
const HARD_GAME_LABELS = [
  "Horror",
  "Platform",
  "Duel",
  "Runner",
  "Puzzle",
  "Velocity",
  "Arena",
  "Learn To Fly 2",
  "Learn To Fly 3",
  "Just Fall LOL",
  "Pokemon Diamond",
  "Pokemon Platinum",
];
const isHardGame = (game) =>
  hardBadges.has(String(game?.badge || "").toLowerCase()) ||
  hardGameIds.has(String(game?.id || "").toLowerCase());
const gamesById = new Map(games.map((game) => [String(game.id || ""), game]));
const getTimeXpMultiplier = () => {
  const style = getPlaystyle();
  let mult = getStreakMultiplier() * getClutchMultiplier();
  if (style === "grinder") mult *= 1.1;
  if (style === "chill") mult *= 0.7;
  if (style === "sweat" && isHardGame(activeGame)) mult *= 1.35;
  return mult;
};
const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const saveXpState = (options = {}) => {
  const queueCloud = options.queueCloud !== false;
  localStorage.setItem(XP_KEY, String(xpTotal));
  localStorage.setItem(XP_PROGRESS_KEY, String(xpProgress));
  localStorage.setItem(RANK_KEY, currentRank);
  if (queueCloud) queueProfileCloudSave();
};

const saveTmState = (options = {}) => {
  const queueCloud = options.queueCloud !== false;
  localStorage.setItem(TM_KEY, String(tmDollars));
  localStorage.setItem(TM_PROGRESS_KEY, String(tmProgress));
  if (queueCloud) queueProfileCloudSave();
};

const saveStreakState = (options = {}) => {
  const queueCloud = options.queueCloud !== false;
  localStorage.setItem(STREAK_KEY, String(streakCount));
  if (queueCloud) queueProfileCloudSave();
};

const saveSavingsState = () => {
  localStorage.setItem(SAVINGS_KEY, String(savingsBalance));
  localStorage.setItem(SAVINGS_ACCRUED_KEY, String(savingsAccrued));
  localStorage.setItem(SAVINGS_LAST_KEY, String(savingsLast));
};

const syncSavings = () => {
  const now = Date.now();
  if (!Number.isFinite(savingsLast) || savingsLast <= 0) {
    savingsLast = now;
    saveSavingsState();
    return;
  }
  const elapsedMinutes = Math.max(0, (now - savingsLast) / 60000);
  if (elapsedMinutes > 0 && savingsBalance > 0) {
    savingsAccrued += savingsBalance * SAVINGS_RATE_PER_MIN * elapsedMinutes;
  }
  savingsLast = now;
  saveSavingsState();
  window.dispatchEvent(new CustomEvent("tm-savings-update"));
};

const ensureEconomyHud = () => {
  if (document.querySelector(".economy-hud")) return;
  const hud = document.createElement("div");
  hud.className = "economy-hud";
  hud.innerHTML = `
    <div class="economy-hud-item">
      <span class="economy-hud-label">TM$</span>
      <span class="economy-hud-value" data-hud-tm>0</span>
    </div>
    <div class="economy-hud-item">
      <span class="economy-hud-label">XP</span>
      <span class="economy-hud-value" data-hud-xp>0</span>
    </div>
  `;
  document.body.appendChild(hud);
};

const updateEconomyUI = () => {
  ensureEconomyHud();
  document.querySelectorAll("[data-tm-total]").forEach((node) => {
    node.textContent = tmDollars.toLocaleString();
  });
  const hudTm = document.querySelector("[data-hud-tm]");
  if (hudTm) hudTm.textContent = tmDollars.toLocaleString();
  const hudXp = document.querySelector("[data-hud-xp]");
  if (hudXp) hudXp.textContent = xpTotal.toLocaleString();
  document.querySelectorAll("[data-savings-balance]").forEach((node) => {
    node.textContent = Math.floor(savingsBalance).toLocaleString();
  });
  document.querySelectorAll("[data-savings-interest]").forEach((node) => {
    node.textContent = Math.floor(savingsAccrued).toLocaleString();
  });
  document.querySelectorAll("[data-savings-rate]").forEach((node) => {
    const perMinute = savingsBalance * SAVINGS_RATE_PER_MIN;
    node.textContent = perMinute.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  });
};

const isCosmeticUnlocked = (type, value) => {
  if (!value) return true;
  const item = SHOP_ITEMS.find((entry) => entry.type === type && entry.value === value);
  if (!item) return false;
  return shopPurchases.has(item.id);
};

const isVisualUnlocked = (type, value) => {
  const normalized = String(value || "").toLowerCase();
  if (!normalized) return true;
  if (type === "confetti_style" && normalized === "classic") return true;
  if (type === "mascot" && normalized === "none") return true;
  if (type === "calculator_skin" && normalized === "default") return true;
  if (type === "cursor_style" && normalized === "default") return true;
  if (type === "hub_decoration" && normalized === "none") return true;
  if (type === "ambient_animation" && normalized === "default") return true;
  const item = SHOP_ITEMS.find((entry) => entry.type === type && entry.value === normalized);
  if (!item) return false;
  return shopPurchases.has(item.id);
};

const enforceCosmeticsAccess = () => {
  let changed = false;
  if (!isCosmeticUnlocked("name_color", activeCosmetics.color)) {
    activeCosmetics.color = "";
    changed = true;
  }
  if (!isCosmeticUnlocked("border", activeCosmetics.border)) {
    activeCosmetics.border = "";
    changed = true;
  }
  if (!isCosmeticUnlocked("icon", activeCosmetics.icon)) {
    activeCosmetics.icon = "";
    changed = true;
  }
  if (!isCosmeticUnlocked("title", activeCosmetics.title)) {
    activeCosmetics.title = "";
    changed = true;
  }
  if (!isCosmeticUnlocked("profile_theme", activeCosmetics.profileTheme)) {
    activeCosmetics.profileTheme = "";
    changed = true;
  }
  if (!isVisualUnlocked("confetti_style", hubVisuals.confettiStyle)) {
    hubVisuals.confettiStyle = "classic";
    changed = true;
  }
  if (!isVisualUnlocked("mascot", hubVisuals.mascot)) {
    hubVisuals.mascot = "none";
    changed = true;
  }
  if (!isVisualUnlocked("calculator_skin", hubVisuals.calculatorSkin)) {
    hubVisuals.calculatorSkin = "default";
    changed = true;
  }
  if (!isVisualUnlocked("cursor_style", hubVisuals.cursorStyle)) {
    hubVisuals.cursorStyle = "default";
    changed = true;
  }
  if (!isVisualUnlocked("hub_decoration", hubVisuals.hubDecoration)) {
    hubVisuals.hubDecoration = "none";
    changed = true;
  }
  if (!isVisualUnlocked("ambient_animation", hubVisuals.ambientAnimation)) {
    hubVisuals.ambientAnimation = "default";
    changed = true;
  }
  if (changed) {
    saveCosmetics(activeCosmetics);
    applyProfileCosmetics();
    saveHubVisuals();
    applyHubVisualStyles();
  }
};


const updateProgressUI = () => {
  updateEconomyUI();
  document.querySelectorAll("[data-xp-total]").forEach((node) => {
    node.textContent = xpTotal.toString();
  });
  document.querySelectorAll("[data-rank-name]").forEach((node) => {
    node.textContent = currentRank;
  });
  const nextTier = rankTiers.find((tier) => tier.min > xpTotal) || null;
  const currentTier = [...rankTiers].reverse().find((tier) => xpTotal >= tier.min) || rankTiers[0];
  const nextMin = nextTier ? nextTier.min : currentTier.min + 200;
  const base = currentTier.min;
  const progress = nextTier ? (xpTotal - base) / Math.max(1, nextMin - base) : 1;
  const fill = document.getElementById("xp-fill");
  const progressLabel = document.getElementById("xp-progress");
  const nextLabel = document.getElementById("xp-next");
  const tooltip = document.getElementById("xp-tooltip");
  if (fill) {
    fill.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
    fill.classList.remove("pulse");
    requestAnimationFrame(() => fill.classList.add("pulse"));
  }
  if (progressLabel) {
    progressLabel.textContent = `${Math.round(Math.min(100, progress * 100))}%`;
  }
  if (nextLabel) {
    nextLabel.textContent = nextTier ? `Next: ${t(nextTier.key)}` : "Max Rank";
  }
  const streakLabel = document.getElementById("xp-streak");
  const boostLabel = document.getElementById("xp-boost");
  const styleLabel = document.getElementById("xp-style");
  if (streakLabel) {
    streakLabel.textContent = `Streak: ${streakCount} days`;
    streakLabel.dataset.multiplier = String(getStreakMultiplier());
  }
  if (boostLabel) {
    const clutch = getClutchMultiplier() > 1 ? " (Clutch x2)" : "";
    boostLabel.textContent = `Boost: x${getTimeXpMultiplier().toFixed(2).replace(/\\.00$/, "")}${clutch}`;
  }
  if (styleLabel) {
    styleLabel.textContent = `Style: ${capitalize(getPlaystyle())}`;
  }
  if (tooltip) {
    const items = rankTiers
      .map((tier) => `<li><strong>${t(tier.key)}</strong><span>${tier.min} XP</span></li>`)
      .join("");
    tooltip.innerHTML = `<ul>${items}</ul>`;
  }
  updateLockScreenStats();
  if (pageMode === "profile") renderProfilePage();
};

const showXpToast = (amount) => {
  const toast = document.createElement("div");
  toast.className = "xp-toast";
  toast.textContent = `+${amount} XP`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1700);
};

const showActionToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "action-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
};

let uiAudioContext;
const playUiTone = (type = "confirm") => {
  try {
    const ctx = uiAudioContext || new (window.AudioContext || window.webkitAudioContext)();
    uiAudioContext = ctx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const base = type === "error" ? 180 : type === "switch" ? 320 : 420;
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.exponentialRampToValueAtTime(base * 1.4, now + 0.08);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  } catch (error) {
    // Audio not available
  }
};

const updateSchoolCountdown = () => {
  if (pageMode !== "popular") return;
  const el = document.getElementById("school-countdown");
  if (!el) return;
  const now = new Date();
  const day = now.getDay();
  const isWeekday = day >= 1 && day <= 5;
  const start = new Date(now);
  start.setHours(8, 0, 0, 0);
  const end = new Date(now);
  end.setHours(15, 15, 0, 0);
  if (!isWeekday || now < start || now > end) {
    el.style.display = "none";
    return;
  }
  el.style.display = "inline-flex";
  const remainingMs = Math.max(0, end - now);
  const totalSeconds = Math.floor(remainingMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  el.textContent = `3:15 PM in ${hours}h ${minutes}m ${seconds}s`;
};

let lastEconomyAction = 0;
const canPerformEconomyAction = () => {
  const now = Date.now();
  if (now - lastEconomyAction < 400) return false;
  lastEconomyAction = now;
  return true;
};

const updateStreakOnPlay = () => {
  if (pageMode !== "play" && pageMode !== "custom-game") return;
  const todayKey = getDateKey(new Date());
  const last = localStorage.getItem(LAST_PLAY_KEY);
  if (last === todayKey) return;
  const yesterday = getDateKey(new Date(Date.now() - 86400000));
  if (last === yesterday) {
    streakCount = Math.max(1, streakCount + 1);
  } else {
    streakCount = 1;
  }
  localStorage.setItem(LAST_PLAY_KEY, todayKey);
  localStorage.setItem(STREAK_KEY, String(streakCount));
  updateProgressUI();
};

const awardExplorerBonus = (gameId) => {
  if (getPlaystyle() !== "explorer" || !gameId) return;
  const stored = JSON.parse(localStorage.getItem(PLAYED_GAMES_KEY) || "[]");
  const set = new Set(Array.isArray(stored) ? stored : []);
  if (set.has(gameId)) return;
  set.add(gameId);
  localStorage.setItem(PLAYED_GAMES_KEY, JSON.stringify([...set]));
  xpTotal += 75;
  saveXpState();
  updateProgressUI();
  showXpToast(75);
};

const awardStyleBonus = (type) => {
  const style = getPlaystyle();
  if (style === "social" && type === "favorite") {
    xpTotal += 20;
    saveXpState();
    updateProgressUI();
    showXpToast(20);
  }
  if (style === "builder" && type === "custom") {
    xpTotal += 30;
    saveXpState();
    updateProgressUI();
    showXpToast(30);
  }
};

const loadQuestState = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(QUESTS_KEY) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
};

const saveQuestState = (state) => {
  localStorage.setItem(QUESTS_KEY, JSON.stringify(state));
};

const getDailyQuestKey = () => `${DAILY_QUEST_KEY}_${getDateKey(new Date())}`;


const initXpCodes = () => {
  if (pageMode !== "popular") return;
  const input = document.getElementById("xp-code-input");
  const claimBtn = document.getElementById("xp-code-claim");
  const status = document.getElementById("xp-code-status");
  if (!input || !claimBtn || !status) return;
  let pending = false;
  const setStatus = (message, isError = false) => {
    status.textContent = String(message || "");
    status.classList.toggle("is-error", Boolean(isError));
  };
  const redeem = async () => {
    if (pending) return;
    const raw = String(input.value || "")
      .trim()
      .toUpperCase();
    if (!raw) {
      setStatus("Enter a code.", true);
      return;
    }
    if (!authSessionToken) {
      setStatus("Log in to redeem codes.", true);
      return;
    }

    pending = true;
    claimBtn.disabled = true;
    setStatus("Redeeming...");
    try {
      const response = await callAuthApi("redeemXpCode", {
        sessionToken: authSessionToken,
        code: raw,
      });
      const xpAward = Math.max(0, Math.floor(Number(response.xpAward) || 0));
      if (response?.profile) applyCloudProfile(response.profile);
      else if (xpAward > 0) {
        xpTotal += xpAward;
        saveXpState();
        updateProgressUI();
      }
      if (xpAward > 0) showXpToast(xpAward);
      setStatus(String(response.message || `Redeemed +${xpAward} XP!`));
      input.value = "";
      void refreshLeaderboard({ force: true, silent: true });
    } catch (error) {
      setStatus(String(error.message || "Unable to redeem code."), true);
    } finally {
      pending = false;
      claimBtn.disabled = false;
    }
  };

  claimBtn.addEventListener("click", () => {
    void redeem();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    void redeem();
  });
};

const initXpPopup = () => {
  if (pageMode !== "popular") return;
  if (document.querySelector(".xp-claim-banner")) return;
  const banner = document.createElement("div");
  banner.className = "xp-claim-banner";
  banner.setAttribute("aria-hidden", "true");
  banner.innerHTML = `
    <div class="xp-claim-card" role="dialog" aria-label="XP bonus">
      <div>
        <div class="xp-claim-title">Quick XP</div>
        <div class="xp-claim-desc">Collect 3 XP in 10 seconds</div>
      </div>
      <button class="pill small xp-claim-btn" type="button">Collect +3 XP</button>
      <div class="xp-claim-timer" id="xp-claim-timer">10s</div>
    </div>
  `;

  const button = banner.querySelector(".xp-claim-btn");
  const timerLabel = banner.querySelector("#xp-claim-timer");
  let countdown = XP_POPUP_DURATION / 1000;
  let timerId = null;
  let open = false;

  const close = () => {
    banner.classList.remove("show");
    banner.setAttribute("aria-hidden", "true");
    open = false;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const openModal = () => {
    if (open) return;
    open = true;
    countdown = XP_POPUP_DURATION / 1000;
    if (timerLabel) timerLabel.textContent = `${countdown}s`;
    banner.classList.add("show");
    banner.setAttribute("aria-hidden", "false");
    timerId = setInterval(() => {
      countdown -= 1;
      if (timerLabel) timerLabel.textContent = `${Math.max(0, countdown)}s`;
      if (countdown <= 0) close();
    }, 1000);
  };

  button?.addEventListener("click", () => {
    xpTotal += XP_POPUP_REWARD;
    saveXpState();
    updateProgressUI();
    showXpToast(XP_POPUP_REWARD);
    close();
  });

  document.body.appendChild(banner);

  setInterval(() => {
    if (document.hidden) return;
    openModal();
  }, XP_POPUP_COOLDOWN);
};

const LEADERBOARD_CACHE_MS = 15000;
let leaderboardEntries = [];
let leaderboardYouEntry = null;
let leaderboardTournamentData = null;
let leaderboardLastLoadedAt = 0;
let leaderboardFetchInFlight = null;

const normalizeLeaderboardEntry = (entry, fallbackPosition = 0) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const position = Math.max(1, Math.floor(Number(source.position) || fallbackPosition || 1));
  const username = String(source.username || "").trim().toLowerCase();
  const displayName = String(source.displayName || source.username || "").trim() || "Player";
  const xp = Math.max(0, Math.floor(Number(source.xp) || 0));
  const rank = String(source.rank || "").trim().slice(0, 40);
  return {
    position,
    username,
    displayName,
    xp,
    rank: rank || "",
  };
};

const buildLocalLeaderboardFallback = () => {
  const playerName = getDisplayName();
  const username = String(authUser?.username || "").trim().toLowerCase() || playerName.toLowerCase();
  return [
    normalizeLeaderboardEntry(
      {
        position: 1,
        username,
        displayName: playerName,
        xp: Math.max(0, Math.floor(Number(xpTotal) || 0)),
        rank: String(currentRank || "").trim(),
      },
      1
    ),
  ];
};

const getLeaderboardStatusEl = () => document.getElementById("leaderboard-status");

const setLeaderboardStatus = (message, isError = false) => {
  const statusEl = getLeaderboardStatusEl();
  if (!statusEl) return;
  statusEl.textContent = String(message || "");
  statusEl.classList.toggle("is-error", Boolean(isError));
};

const getCurrentUsernameLower = () => String(authUser?.username || "").trim().toLowerCase();

const normalizeLeaderboardTournamentWinner = (entry, fallbackPosition = 0) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const position = Math.max(1, Math.floor(Number(source.position) || fallbackPosition || 1));
  const username = String(source.username || "").trim().toLowerCase();
  const displayName = String(source.displayName || source.username || "Player").trim() || "Player";
  const tmReward = Math.max(0, Math.floor(Number(source.tmReward) || 0));
  return {
    position,
    username,
    displayName,
    tmReward,
  };
};

const normalizeLeaderboardTournament = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const rawWinners = Array.isArray(source.winners) ? source.winners : [];
  const winners = rawWinners
    .map((winner, index) => normalizeLeaderboardTournamentWinner(winner, index + 1))
    .filter((winner) => winner.username || winner.tmReward > 0);
  const prizesRaw = source.prizes && typeof source.prizes === "object" ? source.prizes : {};
  return {
    weekKey: String(source.weekKey || "").trim(),
    weekStart: String(source.weekStart || "").trim(),
    weekEnd: String(source.weekEnd || "").trim(),
    processedAt: String(source.processedAt || "").trim(),
    processedNow: Boolean(source.processedNow),
    prizes: {
      first: Math.max(0, Math.floor(Number(prizesRaw.first) || 1000)),
      second: Math.max(0, Math.floor(Number(prizesRaw.second) || 500)),
      third: Math.max(0, Math.floor(Number(prizesRaw.third) || 100)),
    },
    winners,
  };
};

const formatTournamentDate = (value) => {
  const date = new Date(String(value || ""));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
};

const renderLeaderboardTournament = () => {
  if (!leaderboardTournamentStatusEl || !leaderboardTournamentMetaEl || !leaderboardTournamentPrizesEl || !leaderboardTournamentWinnersEl) {
    return;
  }
  const tournament = leaderboardTournamentData;
  if (!tournament) {
    leaderboardTournamentStatusEl.textContent = "Waiting for results...";
    leaderboardTournamentMetaEl.textContent = "Top 3 players each week earn TM$ rewards.";
    leaderboardTournamentPrizesEl.innerHTML = "<span>🥇 #1 +1,000 TM$</span><span>🥈 #2 +500 TM$</span><span>🥉 #3 +100 TM$</span>";
    leaderboardTournamentWinnersEl.innerHTML = "<span>No winners yet this week.</span>";
    return;
  }
  const startLabel = formatTournamentDate(tournament.weekStart);
  const endLabel = formatTournamentDate(tournament.weekEnd);
  const dateLabel = startLabel && endLabel ? `${startLabel} - ${endLabel}` : tournament.weekKey || "Current week";
  leaderboardTournamentStatusEl.textContent = tournament.processedNow ? "Paid Now" : "Paid This Week";
  leaderboardTournamentMetaEl.textContent = `Week ${dateLabel} • Payouts run once each week.`;
  leaderboardTournamentPrizesEl.innerHTML = `
    <span>🥇 #1 +${tournament.prizes.first.toLocaleString()} TM$</span>
    <span>🥈 #2 +${tournament.prizes.second.toLocaleString()} TM$</span>
    <span>🥉 #3 +${tournament.prizes.third.toLocaleString()} TM$</span>
  `;
  const winners = tournament.winners.length
    ? tournament.winners
    : [
        { position: 1, displayName: "TBD", tmReward: tournament.prizes.first },
        { position: 2, displayName: "TBD", tmReward: tournament.prizes.second },
        { position: 3, displayName: "TBD", tmReward: tournament.prizes.third },
      ];
  leaderboardTournamentWinnersEl.innerHTML = winners
    .slice(0, 3)
    .map(
      (winner) =>
        `<span>#${winner.position} ${winner.displayName} • +${Math.max(0, Math.floor(Number(winner.tmReward) || 0)).toLocaleString()} TM$</span>`,
    )
    .join("");
};

const renderLeaderboard = () => {
  if (!leaderboardList || !leaderboardYou) return;
  const entries = leaderboardEntries.length ? leaderboardEntries : buildLocalLeaderboardFallback();
  const currentUsername = getCurrentUsernameLower();
  leaderboardList.innerHTML = "";

  entries.forEach((entry, index) => {
    const normalized = normalizeLeaderboardEntry(entry, index + 1);
    const isCurrentUser = currentUsername && normalized.username === currentUsername;
    const row = document.createElement("div");
    row.className = `leaderboard-row${isCurrentUser ? " leaderboard-you" : ""}`;

    const rankEl = document.createElement("span");
    rankEl.textContent = `#${normalized.position}`;

    const nameEl = document.createElement("span");
    nameEl.textContent = normalized.displayName;
    if (isCurrentUser) {
      const badge = document.createElement("span");
      badge.className = "leaderboard-you-badge";
      badge.textContent = "You";
      nameEl.appendChild(badge);
    }

    const xpEl = document.createElement("span");
    const xpValue = isCurrentUser ? Math.max(0, Math.floor(Number(xpTotal) || 0)) : normalized.xp;
    xpEl.textContent = xpValue.toLocaleString();

    row.append(rankEl, nameEl, xpEl);
    leaderboardList.appendChild(row);
  });

  const fallbackYou = normalizeLeaderboardEntry(
    {
      position: 1,
      username: currentUsername,
      displayName: getDisplayName(),
      xp: Math.max(0, Math.floor(Number(xpTotal) || 0)),
      rank: String(currentRank || "").trim(),
    },
    1
  );
  let youEntry =
    leaderboardYouEntry ||
    entries.find((entry) => normalizeLeaderboardEntry(entry).username === currentUsername) ||
    fallbackYou;
  if (currentUsername && youEntry.username === currentUsername) {
    youEntry = {
      ...youEntry,
      displayName: getDisplayName(),
      xp: Math.max(0, Math.floor(Number(xpTotal) || 0)),
    };
  }

  leaderboardYou.innerHTML = "";
  const youRank = document.createElement("span");
  youRank.textContent = `#${youEntry.position}`;
  const youName = document.createElement("span");
  youName.textContent = `${youEntry.displayName} (You)`;
  const youXp = document.createElement("span");
  youXp.textContent = youEntry.xp.toLocaleString();
  leaderboardYou.append(youRank, youName, youXp);
  renderLeaderboardTournament();
};

const refreshLeaderboard = async (options = {}) => {
  if (!leaderboardList || !leaderboardYou) return;
  const { force = false, silent = false } = options;
  if (!authSessionToken) {
    leaderboardEntries = [];
    leaderboardYouEntry = null;
    leaderboardTournamentData = null;
    leaderboardLastLoadedAt = 0;
    renderLeaderboard();
    if (!silent) {
      setLeaderboardStatus("Log in to load leaderboard.", true);
    }
    return;
  }

  const now = Date.now();
  if (!force && leaderboardEntries.length > 0 && now - leaderboardLastLoadedAt < LEADERBOARD_CACHE_MS) {
    renderLeaderboard();
    if (!silent) {
      setLeaderboardStatus("Leaderboard is up to date.");
    }
    return;
  }

  if (leaderboardFetchInFlight && !force) {
    await leaderboardFetchInFlight;
    return;
  }

  if (!silent) {
    setLeaderboardStatus("Loading leaderboard...");
  }

  const fetchPromise = callAuthApi("getLeaderboard", {
    sessionToken: authSessionToken,
    limit: 100,
  })
    .then((response) => {
      const list = Array.isArray(response.leaderboard) ? response.leaderboard : [];
      leaderboardEntries = list.map((entry, index) => normalizeLeaderboardEntry(entry, index + 1));
      leaderboardYouEntry = response.you ? normalizeLeaderboardEntry(response.you, 1) : null;
      leaderboardTournamentData = normalizeLeaderboardTournament(response.tournament);
      leaderboardLastLoadedAt = Date.now();
      renderLeaderboard();
      if (!silent) {
        const count = Number(response.totalPlayers) || leaderboardEntries.length;
        setLeaderboardStatus(`${count} players ranked.`);
      }
    })
    .catch((error) => {
      if (!silent) {
        setLeaderboardStatus(String(error.message || "Unable to load leaderboard."), true);
      }
      renderLeaderboard();
    })
    .finally(() => {
      leaderboardFetchInFlight = null;
    });

  leaderboardFetchInFlight = fetchPromise;
  await fetchPromise;
};

let dmPageInitialized = false;
let dmPollTimer = null;
let dmMessagesCache = [];
let dmUsersCache = [];
let dmGroupsCache = [];
let dmCurrentThread = null;
let dmLastRenderedMessageId = "";
let dmGroupSelection = new Set();
let dmPollInFlight = false;
let dmPollTick = 0;
let friendsPageInitialized = false;
let friendsPollTimer = null;
let tmCashPageInitialized = false;
let tmCashPollTimer = null;
let tmCashHistoryCache = [];
let tmCashFriendsCache = [];
let tmCashFetchInFlight = null;
let tmCashLastLoadedAt = 0;
let feedbackPageInitialized = false;
let feedbackPollTimer = null;
let feedbackEntriesCache = [];
let feedbackSelectedRating = 0;
let friendsDashboardCache = {
  you: null,
  friends: [],
  incomingRequests: [],
  outgoingRequests: [],
  suggestions: [],
};
let friendsSearchQuery = "";
let screenRewardPollTimer = null;
let screenRewardButtons = [];
let screenRewardClaiming = new Set();
let screenRewardPanel = null;
let screenRewardListEl = null;
let screenRewardStatusEl = null;
let screenMessageOverlay = null;
let screenMessageEntryId = "";

const setDmStatus = (message, isError = false) => {
  if (!dmStatus) return;
  dmStatus.textContent = String(message || "");
  dmStatus.classList.toggle("is-error", Boolean(isError));
};

const formatDmTimestamp = (value) => {
  const date = new Date(String(value || ""));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const normalizeDmUsername = (value) =>
  String(value || "")
    .trim()
    .toLowerCase();

const getDmPresetFromUrl = () => {
  if (pageMode !== "messages") return { to: "", draft: "" };
  const params = new URLSearchParams(window.location.search || "");
  const to = normalizeDmUsername(params.get("to") || params.get("user") || "");
  const draft = String(params.get("draft") || "")
    .trim()
    .slice(0, 500);
  return { to, draft };
};

const getDmThreadKey = (type, id) => `${String(type || "").trim().toLowerCase()}:${String(id || "").trim().toLowerCase()}`;

const findDmDirectUser = (username) => {
  const normalized = normalizeDmUsername(username);
  return dmUsersCache.find((entry) => normalizeDmUsername(entry.username) === normalized) || null;
};

const findDmGroup = (groupId) => {
  const normalized = String(groupId || "").trim().toLowerCase();
  return dmGroupsCache.find((entry) => String(entry.id || "").trim().toLowerCase() === normalized) || null;
};

const resolveDmThreadLabel = (thread) => {
  if (!thread) return "Select a chat";
  if (thread.type === "group") {
    const group = findDmGroup(thread.id);
    return group ? `# ${group.name}` : "# Group Chat";
  }
  const user = findDmDirectUser(thread.id);
  if (!user) return "@ Player";
  return `@ ${user.displayName || user.username}`;
};

const ensureDmCurrentThread = () => {
  const directThreads = dmUsersCache.map((entry) => ({
    type: "direct",
    id: normalizeDmUsername(entry.username),
  }));
  const groupThreads = dmGroupsCache.map((entry) => ({
    type: "group",
    id: String(entry.id || "").trim().toLowerCase(),
  }));
  const allThreads = [...directThreads, ...groupThreads].filter((entry) => entry.id);
  if (allThreads.length === 0) {
    dmCurrentThread = null;
    return null;
  }
  if (!dmCurrentThread) {
    dmCurrentThread = allThreads[0];
    return dmCurrentThread;
  }
  const targetKey = getDmThreadKey(dmCurrentThread.type, dmCurrentThread.id);
  const matched = allThreads.find((entry) => getDmThreadKey(entry.type, entry.id) === targetKey);
  dmCurrentThread = matched || allThreads[0];
  return dmCurrentThread;
};

const renderDmGroupMemberButtons = () => {
  if (!dmGroupMemberButtons) return;
  dmGroupMemberButtons.innerHTML = "";
  if (!dmUsersCache.length) {
    const empty = document.createElement("div");
    empty.className = "dm-empty";
    empty.textContent = "No players available.";
    dmGroupMemberButtons.appendChild(empty);
    return;
  }
  dmUsersCache.forEach((entry) => {
    const username = normalizeDmUsername(entry.username);
    if (!username) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `dm-member-chip${dmGroupSelection.has(username) ? " active" : ""}`;
    button.setAttribute("data-dm-group-user", username);
    button.textContent = `${entry.displayName || entry.username}`;
    dmGroupMemberButtons.appendChild(button);
  });
};

const renderDmThreadButtons = () => {
  if (!dmThreadButtons) return;
  dmThreadButtons.innerHTML = "";
  const thread = ensureDmCurrentThread();
  const activeKey = thread ? getDmThreadKey(thread.type, thread.id) : "";

  if (dmUsersCache.length > 0) {
    const directLabel = document.createElement("p");
    directLabel.className = "dm-section-label";
    directLabel.textContent = "Direct";
    dmThreadButtons.appendChild(directLabel);
    dmUsersCache.forEach((entry) => {
      const username = normalizeDmUsername(entry.username);
      if (!username) return;
      const key = getDmThreadKey("direct", username);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `dm-thread-btn direct${activeKey === key ? " active" : ""}`;
      button.setAttribute("data-dm-thread-type", "direct");
      button.setAttribute("data-dm-thread-id", username);
      button.textContent = `@ ${entry.displayName || entry.username}`;
      dmThreadButtons.appendChild(button);
    });
  }

  if (dmGroupsCache.length > 0) {
    const groupLabel = document.createElement("p");
    groupLabel.className = "dm-section-label";
    groupLabel.textContent = "Group Chats";
    dmThreadButtons.appendChild(groupLabel);
    dmGroupsCache.forEach((entry) => {
      const id = String(entry.id || "").trim().toLowerCase();
      if (!id) return;
      const key = getDmThreadKey("group", id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `dm-thread-btn group${activeKey === key ? " active" : ""}`;
      button.setAttribute("data-dm-thread-type", "group");
      button.setAttribute("data-dm-thread-id", id);
      button.textContent = `# ${entry.name || "Group"}`;
      dmThreadButtons.appendChild(button);
    });
  }

  if (dmUsersCache.length === 0 && dmGroupsCache.length === 0) {
    const empty = document.createElement("div");
    empty.className = "dm-empty";
    empty.textContent = "No chats yet.";
    dmThreadButtons.appendChild(empty);
  }
};

const renderDmThreadTitle = () => {
  if (!dmThreadTitle) return;
  dmThreadTitle.textContent = resolveDmThreadLabel(dmCurrentThread);
};

const getDmThreadRequestPayload = () => {
  const thread = ensureDmCurrentThread();
  if (!thread) return null;
  if (thread.type === "group") {
    return {
      threadType: "group",
      groupId: thread.id,
    };
  }
  return {
    threadType: "direct",
    targetUsername: thread.id,
  };
};

const buildOutgoingDmMessage = (bodyValue, thread, sourceMessage = null, fallbackId = "") => {
  const source = sourceMessage && typeof sourceMessage === "object" ? sourceMessage : {};
  const safeThread = thread && typeof thread === "object" ? thread : ensureDmCurrentThread();
  const threadType = safeThread?.type === "group" ? "group" : "direct";
  const threadId = String(safeThread?.id || "")
    .trim()
    .toLowerCase();
  const body = String(source.body !== undefined ? source.body : bodyValue || "")
    .trim()
    .slice(0, 500);
  const createdAt = String(source.createdAt || "").trim() || new Date().toISOString();
  const fallbackGeneratedId = `local_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  const id = String(source.id || fallbackId || fallbackGeneratedId)
    .trim()
    .toLowerCase();
  return {
    id,
    fromUsername: normalizeDmUsername(source.fromUsername || authUser?.username || ""),
    fromDisplayName: String(authUser?.displayName || authUser?.username || "You").trim() || "You",
    toUsername: threadType === "direct" ? normalizeDmUsername(source.toUsername || threadId) : "",
    toDisplayName: "",
    body,
    createdAt,
    incoming: false,
    direction: "outgoing",
    threadType,
    groupId: threadType === "group" ? threadId : "",
    targetUsername: threadType === "direct" ? threadId : "",
  };
};

const renderDmThread = (options = {}) => {
  const { smooth = false, forceBottom = false } = options;
  if (!dmThread) return;
  const wasNearBottom =
    dmThread.scrollHeight - dmThread.scrollTop - dmThread.clientHeight <= 72;
  const nextLastMessage = dmMessagesCache.length
    ? String(dmMessagesCache[dmMessagesCache.length - 1]?.id || "")
    : "";
  dmThread.innerHTML = "";
  if (!dmCurrentThread) {
    const empty = document.createElement("div");
    empty.className = "dm-empty";
    empty.textContent = "Select a chat to start messaging.";
    dmThread.appendChild(empty);
    return;
  }

  if (dmMessagesCache.length === 0) {
    const empty = document.createElement("div");
    empty.className = "dm-empty";
    empty.textContent = "No messages yet. Start the conversation below.";
    dmThread.appendChild(empty);
    return;
  }

  dmMessagesCache.forEach((entry) => {
    const bubble = document.createElement("article");
    bubble.className = `dm-bubble${entry.incoming ? " incoming" : " outgoing"}`;
    if (nextLastMessage && String(entry.id || "") === nextLastMessage && nextLastMessage !== dmLastRenderedMessageId) {
      bubble.classList.add("is-new");
    }

    const head = document.createElement("div");
    head.className = "dm-bubble-head";
    const author = document.createElement("span");
    author.className = "dm-bubble-author";
    author.textContent = entry.incoming ? entry.fromDisplayName || entry.fromUsername : "You";
    const time = document.createElement("span");
    time.textContent = formatDmTimestamp(entry.createdAt);
    head.append(author, time);

    const body = document.createElement("div");
    body.className = "dm-bubble-body";
    body.textContent = String(entry.body || "");

    bubble.append(head, body);
    dmThread.appendChild(bubble);
  });
  const shouldStickBottom = forceBottom || wasNearBottom;
  if (shouldStickBottom) {
    const behavior = smooth ? "smooth" : "auto";
    try {
      dmThread.scrollTo({ top: dmThread.scrollHeight, behavior });
    } catch (_error) {
      dmThread.scrollTop = dmThread.scrollHeight;
    }
  }
  dmLastRenderedMessageId = nextLastMessage;
};

const refreshDmInbox = async (options = {}) => {
  if (pageMode !== "messages") return;
  if (!dmThreadButtons || !dmThread) return;
  const { silent = false } = options;
  if (!authSessionToken) {
    dmMessagesCache = [];
    dmUsersCache = [];
    dmGroupsCache = [];
    dmCurrentThread = null;
    renderDmThreadButtons();
    renderDmGroupMemberButtons();
    renderDmThreadTitle();
    renderDmThread();
    if (!silent) setDmStatus("Log in to use Direct Messages.", true);
    return;
  }
  if (!silent) setDmStatus("Loading chats...");
  try {
    const response = await callAuthApi("getChatInbox", {
      sessionToken: authSessionToken,
    });
    dmUsersCache = Array.isArray(response.users) ? response.users : [];
    dmGroupsCache = Array.isArray(response.groups) ? response.groups : [];
    ensureDmCurrentThread();
    renderDmThreadButtons();
    renderDmGroupMemberButtons();
    renderDmThreadTitle();
    if (!silent) setDmStatus("Chats updated.");
  } catch (error) {
    if (!silent) setDmStatus(String(error.message || "Unable to load chats."), true);
  }
};

const refreshDmThread = async (options = {}) => {
  if (pageMode !== "messages") return;
  if (!dmThread) return;
  const silent = Boolean(options.silent);
  const smooth = options.smooth !== undefined ? Boolean(options.smooth) : !silent;
  const forceBottom = options.forceBottom !== undefined ? Boolean(options.forceBottom) : !silent;
  const requestPayload = getDmThreadRequestPayload();
  if (!requestPayload) {
    dmMessagesCache = [];
    renderDmThreadTitle();
    renderDmThread({ smooth, forceBottom });
    return;
  }
  if (!authSessionToken) {
    if (!silent) setDmStatus("Log in first.", true);
    return;
  }
  if (!silent) setDmStatus("Loading messages...");
  try {
    const response = await callAuthApi("getChatThread", {
      sessionToken: authSessionToken,
      limit: 400,
      ...requestPayload,
    });
    dmMessagesCache = Array.isArray(response.messages) ? response.messages : [];
    if (response.threadLabel && dmThreadTitle) dmThreadTitle.textContent = String(response.threadLabel);
    else renderDmThreadTitle();
    renderDmThreadButtons();
    renderDmThread({ smooth, forceBottom });
    if (!silent) setDmStatus(`${dmMessagesCache.length} messages loaded.`);
  } catch (error) {
    if (!silent) setDmStatus(String(error.message || "Unable to load messages."), true);
  }
};

const sendDmMessage = async () => {
  if (pageMode !== "messages") return;
  if (!dmMessageInput) return;
  const thread = ensureDmCurrentThread();
  const requestPayload = getDmThreadRequestPayload();
  const body = String(dmMessageInput.value || "").trim().slice(0, 500);
  if (!thread || !requestPayload) {
    setDmStatus("Choose a chat first.", true);
    return;
  }
  if (!body) {
    setDmStatus("Write a message first.", true);
    return;
  }
  if (!authSessionToken) {
    setDmStatus("Log in first.", true);
    return;
  }
  const optimistic = buildOutgoingDmMessage(body, thread);
  dmMessagesCache = [...dmMessagesCache, optimistic];
  renderDmThread({ smooth: true, forceBottom: true });
  dmMessageInput.value = "";
  setDmStatus("Sending...");
  try {
    const response = await callAuthApi("sendChatMessage", {
      sessionToken: authSessionToken,
      ...requestPayload,
      body,
    });
    const confirmedMessage = buildOutgoingDmMessage(body, thread, response?.message || {}, optimistic.id);
    dmMessagesCache = dmMessagesCache.map((entry) =>
      String(entry?.id || "").trim().toLowerCase() === optimistic.id ? confirmedMessage : entry
    );
    renderDmThread({ smooth: false, forceBottom: true });
    setDmStatus("Message sent.");
    void refreshDmThread({ silent: true, smooth: false, forceBottom: true });
  } catch (error) {
    dmMessagesCache = dmMessagesCache.filter(
      (entry) => String(entry?.id || "").trim().toLowerCase() !== optimistic.id
    );
    if (!String(dmMessageInput.value || "").trim()) {
      dmMessageInput.value = body;
    }
    renderDmThread({ smooth: false, forceBottom: true });
    setDmStatus(String(error.message || "Unable to send message."), true);
  }
};

const createDmGroupChat = async () => {
  if (pageMode !== "messages") return;
  const name = String(dmGroupNameInput?.value || "").trim().slice(0, 60);
  const participants = [...dmGroupSelection];
  if (!name || name.length < 2) {
    setDmStatus("Enter a group name (at least 2 characters).", true);
    return;
  }
  if (participants.length < 2) {
    setDmStatus("Select at least 2 players for a group.", true);
    return;
  }
  if (!authSessionToken) {
    setDmStatus("Log in first.", true);
    return;
  }
  setDmStatus("Creating group...");
  try {
    const response = await callAuthApi("createGroupChat", {
      sessionToken: authSessionToken,
      name,
      participants,
    });
    dmGroupSelection = new Set();
    if (dmGroupNameInput) dmGroupNameInput.value = "";
    await refreshDmInbox({ silent: true });
    const groupId = String(response?.group?.id || "").trim().toLowerCase();
    if (groupId) {
      dmCurrentThread = { type: "group", id: groupId };
    }
    renderDmThreadButtons();
    renderDmGroupMemberButtons();
    await refreshDmThread({ silent: true });
    setDmStatus("Group chat created.");
  } catch (error) {
    setDmStatus(String(error.message || "Unable to create group chat."), true);
  }
};

const stopDmPolling = () => {
  if (dmPollTimer) {
    window.clearTimeout(dmPollTimer);
    dmPollTimer = null;
  }
};

const startDmPolling = () => {
  stopDmPolling();
  dmPollInFlight = false;
  dmPollTick = 0;
  const poll = () => {
    if (pageMode !== "messages") {
      stopDmPolling();
      return;
    }
    if (!document.hidden && !dmPollInFlight) {
      dmPollInFlight = true;
      const shouldRefreshInbox = dmPollTick % 4 === 0;
      dmPollTick += 1;
      const refreshTask = shouldRefreshInbox
        ? refreshDmInbox({ silent: true }).then(() => refreshDmThread({ silent: true, smooth: false, forceBottom: false }))
        : refreshDmThread({ silent: true, smooth: false, forceBottom: false });
      void Promise.resolve(refreshTask)
        .catch(() => {})
        .finally(() => {
          dmPollInFlight = false;
        });
    }
    dmPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(3200, 2200));
  };
  dmPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(3200, 2200));
};

const initMessagesPage = () => {
  if (pageMode !== "messages") return;
  if (!dmThreadButtons || !dmThread) return;
  if (!dmPageInitialized) {
    dmThreadButtons.addEventListener("click", (event) => {
      const button = event.target instanceof Element ? event.target.closest("[data-dm-thread-type][data-dm-thread-id]") : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const type = String(button.getAttribute("data-dm-thread-type") || "").trim().toLowerCase();
      const id = String(button.getAttribute("data-dm-thread-id") || "").trim().toLowerCase();
      if (!id) return;
      dmCurrentThread = {
        type: type === "group" ? "group" : "direct",
        id,
      };
      renderDmThreadButtons();
      renderDmThreadTitle();
      void refreshDmThread({ silent: false });
    });
    dmGroupMemberButtons?.addEventListener("click", (event) => {
      const button = event.target instanceof Element ? event.target.closest("[data-dm-group-user]") : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const username = normalizeDmUsername(button.getAttribute("data-dm-group-user"));
      if (!username) return;
      if (dmGroupSelection.has(username)) dmGroupSelection.delete(username);
      else dmGroupSelection.add(username);
      renderDmGroupMemberButtons();
    });
    const refreshButton = document.getElementById("dm-refresh");
    refreshButton?.addEventListener("click", () => {
      void refreshDmInbox({ silent: false }).then(() => {
        void refreshDmThread({ silent: false });
      });
    });
    const sendButton = document.getElementById("dm-send");
    sendButton?.addEventListener("click", () => {
      void sendDmMessage();
    });
    const createGroupButton = document.getElementById("dm-create-group");
    createGroupButton?.addEventListener("click", () => {
      void createDmGroupChat();
    });
    dmMessageInput?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        void sendDmMessage();
      }
    });
    dmPageInitialized = true;
  }
  const preset = getDmPresetFromUrl();
  if (preset.to) {
    dmCurrentThread = {
      type: "direct",
      id: preset.to,
    };
  }
  if (preset.draft && dmMessageInput && !String(dmMessageInput.value || "").trim()) {
    dmMessageInput.value = preset.draft;
  }
  if (preset.to || preset.draft) {
    try {
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (_error) {}
  }
  void refreshDmInbox({ silent: false }).then(() => {
    void refreshDmThread({ silent: false });
  });
  startDmPolling();
};

const setFriendsStatus = (message, isError = false) => {
  if (!friendsStatus) return;
  friendsStatus.textContent = String(message || "");
  friendsStatus.classList.toggle("is-error", Boolean(isError));
};

const escapeFriendText = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeFriendEntry = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const username = normalizeDmUsername(source.username);
  const displayName = String(source.displayName || source.username || "Player")
    .trim()
    .slice(0, 24);
  const requestId = String(source.requestId || source.id || "")
    .trim()
    .toLowerCase();
  const status = String(source.status || "")
    .trim()
    .toLowerCase();
  const requestedBy = normalizeDmUsername(source.requestedBy);
  const xp = Math.max(0, Math.floor(Number(source.xp) || 0));
  const tm = Math.max(0, Math.floor(Number(source.tm) || 0));
  const streak = Math.max(0, Math.floor(Number(source.streak) || 0));
  const rank = String(source.rank || "")
    .trim()
    .slice(0, 40) || "Rookie";
  return {
    username,
    displayName: displayName || username || "Player",
    requestId,
    status,
    requestedBy,
    xp,
    tm,
    streak,
    rank,
    online: Boolean(source.online),
  };
};

const normalizeFriendsDashboard = (payload) => {
  const source = payload && typeof payload === "object" ? payload : {};
  return {
    you: source.you ? normalizeFriendEntry(source.you) : null,
    friends: Array.isArray(source.friends) ? source.friends.map((entry) => normalizeFriendEntry(entry)).filter((entry) => entry.username) : [],
    incomingRequests: Array.isArray(source.incomingRequests)
      ? source.incomingRequests.map((entry) => normalizeFriendEntry(entry)).filter((entry) => entry.username && entry.requestId)
      : [],
    outgoingRequests: Array.isArray(source.outgoingRequests)
      ? source.outgoingRequests.map((entry) => normalizeFriendEntry(entry)).filter((entry) => entry.username && entry.requestId)
      : [],
    suggestions: Array.isArray(source.suggestions)
      ? source.suggestions.map((entry) => normalizeFriendEntry(entry)).filter((entry) => entry.username)
      : [],
  };
};

const openDirectMessageFromFriends = (username, draft = "") => {
  const safeUsername = normalizeDmUsername(username);
  if (!safeUsername) return;
  const params = new URLSearchParams();
  params.set("to", safeUsername);
  const safeDraft = String(draft || "")
    .trim()
    .slice(0, 500);
  if (safeDraft) params.set("draft", safeDraft);
  window.location.href = `messages.html?${params.toString()}`;
};

const openTmCashFromFriends = (username) => {
  const safeUsername = normalizeDmUsername(username);
  if (!safeUsername) return;
  const params = new URLSearchParams();
  params.set("to", safeUsername);
  window.location.href = `tmcash.html?${params.toString()}`;
};

const setTmCashStatus = (message, isError = false) => {
  if (!tmCashStatus) return;
  tmCashStatus.textContent = String(message || "");
  tmCashStatus.classList.toggle("is-error", Boolean(isError));
};

const escapeTmCashText = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeTmCashFriend = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const username = normalizeDmUsername(source.username);
  const displayName = String(source.displayName || source.username || "Player")
    .trim()
    .slice(0, 24);
  return {
    username,
    displayName: displayName || username || "Player",
    online: Boolean(source.online),
  };
};

const normalizeTmCashTransfer = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const amount = Math.max(0, Math.floor(Number(source.amount) || 0));
  const incoming = Boolean(source.incoming);
  const partnerUsername = normalizeDmUsername(source.partnerUsername || source.toUsername || source.fromUsername);
  const partnerDisplayName = String(source.partnerDisplayName || source.partnerUsername || partnerUsername || "Player")
    .trim()
    .slice(0, 24);
  const note = String(source.note || "")
    .trim()
    .slice(0, 120);
  return {
    id: String(source.id || "").trim().toLowerCase(),
    amount,
    incoming,
    partnerUsername,
    partnerDisplayName: partnerDisplayName || partnerUsername || "Player",
    note,
    createdAt: String(source.createdAt || "").trim(),
  };
};

const getTmCashPresetFromUrl = () => {
  if (pageMode !== "tmcash") return { to: "" };
  const params = new URLSearchParams(window.location.search || "");
  return {
    to: normalizeDmUsername(params.get("to") || params.get("user") || ""),
  };
};

const renderTmCashFriends = () => {
  if (!tmCashRecipientButtons) return;
  if (!tmCashFriendsCache.length) {
    tmCashRecipientButtons.innerHTML = `<div class="friend-empty">No accepted friends yet.</div>`;
    return;
  }
  const selected = normalizeDmUsername(tmCashRecipientInput?.value || "");
  tmCashRecipientButtons.innerHTML = tmCashFriendsCache
    .map((entry) => {
      const active = selected && selected === entry.username;
      return `<button class="dm-member-chip${active ? " active" : ""}" type="button" data-cash-recipient="${escapeTmCashText(entry.username)}">${entry.online ? "🟢" : "⚪"} ${escapeTmCashText(entry.displayName)}</button>`;
    })
    .join("");
};

const renderTmCashHistory = () => {
  if (!tmCashTransferList) return;
  if (!tmCashHistoryCache.length) {
    tmCashTransferList.innerHTML = `<div class="friend-empty">No transfers yet.</div>`;
    return;
  }
  tmCashTransferList.innerHTML = tmCashHistoryCache
    .map((entry) => {
      const directionClass = entry.incoming ? "incoming" : "outgoing";
      const directionLabel = entry.incoming ? "Received" : "Sent";
      const safePartner = escapeTmCashText(entry.partnerDisplayName);
      const safeHandle = escapeTmCashText(entry.partnerUsername);
      const safeAmount = entry.amount.toLocaleString();
      const safeDate = escapeTmCashText(formatDmTimestamp(entry.createdAt));
      const safeNote = entry.note ? `<p class="cash-transfer-note">${escapeTmCashText(entry.note)}</p>` : "";
      return `
        <article class="cash-transfer-item ${directionClass}">
          <div class="cash-transfer-head">
            <strong>${directionLabel} ${safeAmount} TM$</strong>
            <span>${safeDate || "Now"}</span>
          </div>
          <p class="cash-transfer-peer">${entry.incoming ? "From" : "To"} ${safePartner} <span>@${safeHandle}</span></p>
          ${safeNote}
        </article>
      `;
    })
    .join("");
};

const refreshTmCashData = async (options = {}) => {
  if (pageMode !== "tmcash") return;
  const { silent = false, force = false } = options;
  if (!authSessionToken) {
    tmCashHistoryCache = [];
    tmCashFriendsCache = [];
    renderTmCashFriends();
    renderTmCashHistory();
    if (!silent) setTmCashStatus("Log in to use TM Cash.", true);
    return;
  }

  if (!force && tmCashFetchInFlight) {
    await tmCashFetchInFlight;
    return;
  }

  if (!force && silent && Date.now() - tmCashLastLoadedAt < 1800) {
    return;
  }

  if (!silent) setTmCashStatus("Loading TM Cash...");

  const fetchPromise = callAuthApi("getTmTransfers", {
    sessionToken: authSessionToken,
    limit: 48,
  })
    .then((response) => {
      tmCashFriendsCache = Array.isArray(response.friends)
        ? response.friends.map((entry) => normalizeTmCashFriend(entry)).filter((entry) => entry.username)
        : [];
      tmCashHistoryCache = Array.isArray(response.transfers)
        ? response.transfers.map((entry) => normalizeTmCashTransfer(entry)).filter((entry) => entry.id && entry.amount > 0)
        : [];

      if (response?.profile && typeof applyCloudProfile === "function") {
        applyCloudProfile(response.profile);
      }
      if (tmCashBalance) {
        tmCashBalance.textContent = Math.max(0, Math.floor(Number(response.balanceTm) || Number(tmDollars) || 0)).toLocaleString();
      }
      renderTmCashFriends();
      renderTmCashHistory();
      tmCashLastLoadedAt = Date.now();
      if (!silent) setTmCashStatus("TM Cash synced.");
    })
    .catch((error) => {
      if (!silent) setTmCashStatus(String(error.message || "Unable to load TM Cash."), true);
    })
    .finally(() => {
      tmCashFetchInFlight = null;
    });

  tmCashFetchInFlight = fetchPromise;
  await fetchPromise;
};

const sendTmCashTransfer = async () => {
  if (pageMode !== "tmcash") return;
  if (!canPerformEconomyAction()) return;
  const targetUsername = normalizeDmUsername(tmCashRecipientInput?.value || "");
  const amount = Math.floor(Number(tmCashAmountInput?.value || 0));
  const note = String(tmCashNoteInput?.value || "")
    .trim()
    .slice(0, 120);

  if (!authSessionToken) {
    setTmCashStatus("Log in first.", true);
    return;
  }
  if (!targetUsername) {
    setTmCashStatus("Enter a friend username.", true);
    return;
  }
  if (!Number.isFinite(amount) || amount <= 0) {
    setTmCashStatus("Enter a valid amount greater than 0.", true);
    return;
  }
  if (amount > Math.max(0, Math.floor(Number(tmDollars) || 0))) {
    setTmCashStatus("Not enough TM Dollars.", true);
    return;
  }

  setTmCashStatus("Sending transfer...");
  try {
    const response = await callAuthApi("sendTmTransfer", {
      sessionToken: authSessionToken,
      targetUsername,
      amount,
      note,
    });

    if (response?.profileSender && typeof applyCloudProfile === "function") {
      applyCloudProfile(response.profileSender);
    } else if (Number.isFinite(Number(response.balanceTm))) {
      tmDollars = Math.max(0, Math.floor(Number(response.balanceTm) || 0));
      saveTmState();
      updateEconomyUI();
    }
    if (tmCashBalance) {
      tmCashBalance.textContent = Math.max(0, Math.floor(Number(tmDollars) || 0)).toLocaleString();
    }

    showActionToast(`Sent ${amount.toLocaleString()} TM$ to @${targetUsername}`);
    setTmCashStatus(`Sent ${amount.toLocaleString()} TM$ to @${targetUsername}.`);
    if (tmCashAmountInput) tmCashAmountInput.value = "";
    if (tmCashNoteInput) tmCashNoteInput.value = "";
    void refreshTmCashData({ silent: true, force: true });
  } catch (error) {
    setTmCashStatus(String(error.message || "Unable to send transfer."), true);
  }
};

const stopTmCashPolling = () => {
  if (tmCashPollTimer) {
    window.clearTimeout(tmCashPollTimer);
    tmCashPollTimer = null;
  }
};

const startTmCashPolling = () => {
  stopTmCashPolling();
  const poll = () => {
    if (pageMode !== "tmcash") {
      stopTmCashPolling();
      return;
    }
    if (!authSessionToken) {
      stopTmCashPolling();
      return;
    }
    if (!document.hidden) {
      void refreshTmCashData({ silent: true });
    }
    tmCashPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(5500, 3500));
  };
  tmCashPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(5500, 3500));
};

const initTmCashPage = () => {
  if (pageMode !== "tmcash") return;
  if (!tmCashRecipientInput || !tmCashAmountInput || !tmCashTransferList) return;

  if (!tmCashPageInitialized) {
    const sendButton = document.getElementById("cash-send");
    const refreshButton = document.getElementById("cash-refresh");
    sendButton?.addEventListener("click", () => {
      void sendTmCashTransfer();
    });
    refreshButton?.addEventListener("click", () => {
      void refreshTmCashData({ silent: false });
    });
    tmCashAmountInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      void sendTmCashTransfer();
    });
    tmCashRecipientInput.addEventListener("input", () => {
      renderTmCashFriends();
      setTmCashStatus("");
    });
    tmCashNoteInput?.addEventListener("input", () => setTmCashStatus(""));
    tmCashRecipientButtons?.addEventListener("click", (event) => {
      const button = event.target instanceof Element ? event.target.closest("[data-cash-recipient]") : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const username = normalizeDmUsername(button.getAttribute("data-cash-recipient"));
      if (!username || !tmCashRecipientInput) return;
      tmCashRecipientInput.value = username;
      renderTmCashFriends();
    });
    tmCashPageInitialized = true;
  }

  const preset = getTmCashPresetFromUrl();
  if (preset.to && tmCashRecipientInput && !String(tmCashRecipientInput.value || "").trim()) {
    tmCashRecipientInput.value = preset.to;
  }
  if (preset.to) {
    try {
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (_error) {}
  }
  if (tmCashBalance) tmCashBalance.textContent = Math.max(0, Math.floor(Number(tmDollars) || 0)).toLocaleString();
  void refreshTmCashData({ silent: false });
  if (authSessionToken) startTmCashPolling();
};

const formatFriendDiff = (value) => {
  const amount = Math.max(0, Math.floor(Math.abs(Number(value) || 0)));
  if (amount === 0) return "even";
  return `${value >= 0 ? "+" : "-"}${amount.toLocaleString()}`;
};

const getFriendCompareText = (you, entry) => {
  if (!you) return "";
  const xpDiff = entry.xp - you.xp;
  const tmDiff = entry.tm - you.tm;
  const streakDiff = entry.streak - you.streak;
  return `XP ${formatFriendDiff(xpDiff)} · TM$ ${formatFriendDiff(tmDiff)} · Streak ${formatFriendDiff(streakDiff)}`;
};

const friendMatchesSearch = (entry) => {
  const query = String(friendsSearchQuery || "").trim().toLowerCase();
  if (!query) return true;
  const haystack = `${entry.displayName} ${entry.username}`.toLowerCase();
  return haystack.includes(query);
};

const buildFriendCard = (entry, type) => {
  const safeDisplay = escapeFriendText(entry.displayName);
  const safeUsername = escapeFriendText(entry.username);
  const safeRank = escapeFriendText(entry.rank);
  const presenceClass = entry.online ? "online" : "offline";
  const presenceText = entry.online ? "Online" : "Offline";
  const compare = getFriendCompareText(friendsDashboardCache.you, entry);
  const compareLine = compare ? `<div class="friend-compare">${escapeFriendText(compare)}</div>` : "";

  let actions = `
    <button class="pill ghost small" type="button" data-friend-action="message" data-username="${safeUsername}">Message</button>
  `;
  if (type === "friend") {
    actions += `
      <button class="pill ghost small" type="button" data-friend-action="sendtm" data-username="${safeUsername}">Send TM$</button>
      <button class="pill ghost small" type="button" data-friend-action="challenge" data-username="${safeUsername}">Challenge</button>
      <button class="pill ghost small danger" type="button" data-friend-action="remove" data-username="${safeUsername}">Remove</button>
    `;
  } else if (type === "incoming") {
    actions = `
      <button class="pill small" type="button" data-friend-action="accept" data-request-id="${escapeFriendText(entry.requestId)}">Accept</button>
      <button class="pill ghost small" type="button" data-friend-action="reject" data-request-id="${escapeFriendText(entry.requestId)}">Decline</button>
      <button class="pill ghost small" type="button" data-friend-action="message" data-username="${safeUsername}">Message</button>
    `;
  } else if (type === "outgoing") {
    actions = `
      <button class="pill ghost small" type="button" data-friend-action="cancel" data-username="${safeUsername}">Cancel</button>
      <button class="pill ghost small" type="button" data-friend-action="message" data-username="${safeUsername}">Message</button>
    `;
  } else if (type === "suggestion") {
    actions += `
      <button class="pill small" type="button" data-friend-action="request" data-username="${safeUsername}">Add Friend</button>
    `;
  }

  return `
    <article class="friend-card">
      <div class="friend-top">
        <div>
          <h4 class="friend-name">${safeDisplay}</h4>
          <span class="friend-handle">@${safeUsername}</span>
        </div>
        <span class="friend-presence ${presenceClass}">${presenceText}</span>
      </div>
      <div class="friend-stats">
        <span>${entry.xp.toLocaleString()} XP</span>
        <span>${entry.tm.toLocaleString()} TM$</span>
        <span>${entry.streak.toLocaleString()} streak</span>
        <span>${safeRank}</span>
      </div>
      ${compareLine}
      <div class="friend-actions">
        ${actions}
      </div>
    </article>
  `;
};

const renderFriendList = (targetEl, entries, type, emptyText) => {
  if (!targetEl) return 0;
  const visible = entries.filter((entry) => friendMatchesSearch(entry));
  if (!visible.length) {
    targetEl.innerHTML = `<div class="friend-empty">${escapeFriendText(emptyText)}</div>`;
    return 0;
  }
  targetEl.innerHTML = visible.map((entry) => buildFriendCard(entry, type)).join("");
  return visible.length;
};

const renderFriendsDashboard = () => {
  if (pageMode !== "friends") return;
  const data = friendsDashboardCache || {};
  const you = data.you;
  if (friendsYouName) friendsYouName.textContent = you?.displayName || you?.username || "Player";
  if (friendsYouXp) friendsYouXp.textContent = `${Math.max(0, Math.floor(Number(you?.xp) || 0)).toLocaleString()} XP`;
  if (friendsYouMoney) friendsYouMoney.textContent = `${Math.max(0, Math.floor(Number(you?.tm) || 0)).toLocaleString()} TM$`;
  if (friendsYouStreak) friendsYouStreak.textContent = `${Math.max(0, Math.floor(Number(you?.streak) || 0)).toLocaleString()} streak`;
  if (friendsYouRank) friendsYouRank.textContent = String(you?.rank || "Rookie");
  if (friendsYouPresence) {
    const online = Boolean(you?.online);
    friendsYouPresence.textContent = online ? "Online" : "Offline";
    friendsYouPresence.classList.toggle("online", online);
    friendsYouPresence.classList.toggle("offline", !online);
  }

  const friendsVisible = renderFriendList(friendsList, data.friends || [], "friend", "No friends yet. Add someone below.");
  const incomingVisible = renderFriendList(
    friendsIncomingList,
    data.incomingRequests || [],
    "incoming",
    "No incoming friend requests.",
  );
  const outgoingVisible = renderFriendList(
    friendsOutgoingList,
    data.outgoingRequests || [],
    "outgoing",
    "No outgoing friend requests.",
  );
  const suggestionsVisible = renderFriendList(
    friendsSuggestionsList,
    data.suggestions || [],
    "suggestion",
    "No player suggestions right now.",
  );

  if (friendsCount) friendsCount.textContent = String(friendsSearchQuery ? friendsVisible : (data.friends || []).length);
  if (friendsIncomingCount) {
    friendsIncomingCount.textContent = String(friendsSearchQuery ? incomingVisible : (data.incomingRequests || []).length);
  }
  if (friendsOutgoingCount) {
    friendsOutgoingCount.textContent = String(friendsSearchQuery ? outgoingVisible : (data.outgoingRequests || []).length);
  }
  if (friendsSuggestionsCount) {
    friendsSuggestionsCount.textContent = String(friendsSearchQuery ? suggestionsVisible : (data.suggestions || []).length);
  }
};

const refreshFriendsDashboard = async (options = {}) => {
  if (pageMode !== "friends") return;
  const { silent = false } = options;
  if (!authSessionToken) {
    friendsDashboardCache = normalizeFriendsDashboard({});
    renderFriendsDashboard();
    if (!silent) setFriendsStatus("Log in to use Friends.", true);
    return;
  }
  if (!silent) setFriendsStatus("Loading friends...");
  try {
    const response = await callAuthApi("getFriendsDashboard", {
      sessionToken: authSessionToken,
    });
    friendsDashboardCache = normalizeFriendsDashboard(response);
    renderFriendsDashboard();
    if (!silent) setFriendsStatus("Friends updated.");
  } catch (error) {
    if (!silent) setFriendsStatus(String(error.message || "Unable to load friends."), true);
  }
};

const sendFriendRequest = async (username) => {
  const safeUsername = normalizeDmUsername(username);
  if (!safeUsername) return;
  if (!authSessionToken) {
    setFriendsStatus("Log in first.", true);
    return;
  }
  setFriendsStatus("Sending friend request...");
  try {
    const response = await callAuthApi("sendFriendRequest", {
      sessionToken: authSessionToken,
      targetUsername: safeUsername,
    });
    setFriendsStatus(String(response.message || "Friend request sent."));
    await refreshFriendsDashboard({ silent: true });
  } catch (error) {
    setFriendsStatus(String(error.message || "Unable to send request."), true);
  }
};

const respondFriendRequest = async (requestId, decision) => {
  const safeId = String(requestId || "")
    .trim()
    .toLowerCase();
  const safeDecision = String(decision || "")
    .trim()
    .toLowerCase();
  if (!safeId || (safeDecision !== "accept" && safeDecision !== "reject")) return;
  if (!authSessionToken) {
    setFriendsStatus("Log in first.", true);
    return;
  }
  setFriendsStatus(safeDecision === "accept" ? "Accepting request..." : "Declining request...");
  try {
    const response = await callAuthApi("respondFriendRequest", {
      sessionToken: authSessionToken,
      requestId: safeId,
      decision: safeDecision,
    });
    setFriendsStatus(String(response.message || "Request updated."));
    await refreshFriendsDashboard({ silent: true });
  } catch (error) {
    setFriendsStatus(String(error.message || "Unable to update request."), true);
  }
};

const removeFriendConnection = async (username) => {
  const safeUsername = normalizeDmUsername(username);
  if (!safeUsername) return;
  if (!authSessionToken) {
    setFriendsStatus("Log in first.", true);
    return;
  }
  setFriendsStatus("Updating connection...");
  try {
    const response = await callAuthApi("removeFriend", {
      sessionToken: authSessionToken,
      targetUsername: safeUsername,
    });
    setFriendsStatus(String(response.message || "Connection updated."));
    await refreshFriendsDashboard({ silent: true });
  } catch (error) {
    setFriendsStatus(String(error.message || "Unable to update connection."), true);
  }
};

const sendFriendChallenge = async (username) => {
  const safeUsername = normalizeDmUsername(username);
  if (!safeUsername) return;
  if (!authSessionToken) {
    setFriendsStatus("Log in first.", true);
    return;
  }
  setFriendsStatus("Sending challenge...");
  try {
    await callAuthApi("sendChatMessage", {
      sessionToken: authSessionToken,
      threadType: "direct",
      targetUsername: safeUsername,
      body: "⚡ Challenge time! Pick a game and race me for XP.",
    });
    setFriendsStatus(`Challenge sent to @${safeUsername}.`);
  } catch (error) {
    setFriendsStatus(String(error.message || "Unable to send challenge."), true);
  }
};

const stopFriendsPolling = () => {
  if (friendsPollTimer) {
    window.clearTimeout(friendsPollTimer);
    friendsPollTimer = null;
  }
};

const startFriendsPolling = () => {
  stopFriendsPolling();
  const poll = () => {
    if (pageMode !== "friends") {
      stopFriendsPolling();
      return;
    }
    if (!document.hidden) {
      void refreshFriendsDashboard({ silent: true });
    }
    friendsPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(5500, 3500));
  };
  friendsPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(5500, 3500));
};

const initFriendsPage = () => {
  if (pageMode !== "friends") return;
  const shell = document.querySelector(".friends-shell");
  if (!shell) return;
  if (!friendsPageInitialized) {
    const refreshButton = document.getElementById("friends-refresh");
    refreshButton?.addEventListener("click", () => {
      void refreshFriendsDashboard({ silent: false });
    });
    friendsSearchInput?.addEventListener("input", () => {
      friendsSearchQuery = String(friendsSearchInput.value || "")
        .trim()
        .toLowerCase()
        .slice(0, 40);
      renderFriendsDashboard();
    });
    shell.addEventListener("click", (event) => {
      const button = event.target instanceof Element ? event.target.closest("[data-friend-action]") : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const action = String(button.getAttribute("data-friend-action") || "")
        .trim()
        .toLowerCase();
      const username = normalizeDmUsername(button.getAttribute("data-username"));
      const requestId = String(button.getAttribute("data-request-id") || "")
        .trim()
        .toLowerCase();

      if (action === "message" && username) {
        openDirectMessageFromFriends(username);
        return;
      }
      if (action === "challenge" && username) {
        void sendFriendChallenge(username);
        return;
      }
      if (action === "sendtm" && username) {
        openTmCashFromFriends(username);
        return;
      }
      if (action === "request" && username) {
        void sendFriendRequest(username);
        return;
      }
      if (action === "remove" && username) {
        if (!window.confirm(`Remove @${username} from your friends?`)) return;
        void removeFriendConnection(username);
        return;
      }
      if (action === "cancel" && username) {
        void removeFriendConnection(username);
        return;
      }
      if (action === "accept" && requestId) {
        void respondFriendRequest(requestId, "accept");
        return;
      }
      if (action === "reject" && requestId) {
        void respondFriendRequest(requestId, "reject");
      }
    });
    friendsPageInitialized = true;
  }

  void refreshFriendsDashboard({ silent: false });
  startFriendsPolling();
};

const FEEDBACK_EMAIL_STORAGE_KEY = "tm_feedback_email";

const clampFeedbackRating = (value) => {
  const rating = Math.floor(Number(value) || 0);
  if (!Number.isFinite(rating)) return 0;
  if (rating < 1 || rating > 5) return 0;
  return rating;
};

const normalizeFeedbackStatus = (value) => {
  const status = String(value || "")
    .trim()
    .toLowerCase();
  if (status === "reviewed" || status === "resolved") return status;
  return "new";
};

const getFeedbackStatusLabel = (status) => {
  if (status === "reviewed") return "Reviewed";
  if (status === "resolved") return "Resolved";
  return "New";
};

const escapeFeedbackText = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatFeedbackDate = (value) => {
  const date = new Date(String(value || ""));
  if (Number.isNaN(date.getTime())) return "Unknown date";
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const renderFeedbackStars = (rating) => {
  const safeRating = clampFeedbackRating(rating);
  return `${"★".repeat(safeRating)}${"☆".repeat(Math.max(0, 5 - safeRating))}`;
};

const setFeedbackStatus = (message, isError = false) => {
  if (!feedbackStatus) return;
  feedbackStatus.textContent = String(message || "");
  feedbackStatus.classList.toggle("is-error", Boolean(isError));
};

const setFeedbackAdminStatus = (message, isError = false) => {
  if (!feedbackAdminStatus) return;
  feedbackAdminStatus.textContent = String(message || "");
  feedbackAdminStatus.classList.toggle("is-error", Boolean(isError));
};

const normalizeFeedbackEntry = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const status = normalizeFeedbackStatus(source.status);
  const rating = clampFeedbackRating(source.rating);
  return {
    id: String(source.id || "")
      .trim()
      .toLowerCase(),
    username: normalizeDmUsername(source.username),
    displayName: String(source.displayName || source.username || "Player")
      .trim()
      .slice(0, 24),
    name: String(source.name || source.displayName || source.username || "Player")
      .trim()
      .slice(0, 40),
    email: String(source.email || "")
      .trim()
      .slice(0, 120),
    phone: String(source.phone || "")
      .trim()
      .slice(0, 30),
    rating,
    feedback: String(source.feedback || source.message || "")
      .trim()
      .slice(0, 1200),
    status,
    adminNote: String(source.adminNote || source.note || "")
      .trim()
      .slice(0, 240),
    createdAt: String(source.createdAt || "").trim(),
    updatedAt: String(source.updatedAt || "").trim(),
    updatedBy: normalizeDmUsername(source.updatedBy),
    mine: Boolean(source.mine),
  };
};

const setFeedbackRating = (rating, options = {}) => {
  const { silent = false } = options;
  feedbackSelectedRating = clampFeedbackRating(rating);
  if (feedbackRatingInput) {
    feedbackRatingInput.value = feedbackSelectedRating > 0 ? String(feedbackSelectedRating) : "";
  }
  if (feedbackRatingButtons) {
    feedbackRatingButtons.querySelectorAll("[data-feedback-rating]").forEach((button) => {
      const buttonRating = clampFeedbackRating(button.getAttribute("data-feedback-rating"));
      const isActive = feedbackSelectedRating > 0 && buttonRating > 0 && buttonRating <= feedbackSelectedRating;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(buttonRating === feedbackSelectedRating));
    });
  }
  if (feedbackRatingValue) {
    feedbackRatingValue.textContent = feedbackSelectedRating > 0 ? `${feedbackSelectedRating}/5` : "Select rating";
  }
  if (!silent) setFeedbackStatus("");
};

const renderFeedbackHistory = () => {
  if (!feedbackHistoryList) return;
  if (!feedbackEntriesCache.length) {
    feedbackHistoryList.innerHTML = '<div class="friend-empty">No feedback yet. Send your first note.</div>';
    return;
  }
  feedbackHistoryList.innerHTML = feedbackEntriesCache
    .map((entry) => {
      const safeStatus = normalizeFeedbackStatus(entry.status);
      const safeStatusLabel = getFeedbackStatusLabel(safeStatus);
      const safeStars = renderFeedbackStars(entry.rating);
      const safeFeedback = escapeFeedbackText(entry.feedback || "No feedback message.");
      const safeDate = escapeFeedbackText(formatFeedbackDate(entry.createdAt));
      const safeAdminNote = escapeFeedbackText(entry.adminNote || "");
      const adminNoteBlock = safeAdminNote
        ? `<div class="feedback-admin-note"><strong>Admin note:</strong> ${safeAdminNote}</div>`
        : "";
      return `
        <article class="feedback-card">
          <div class="feedback-card-head">
            <span class="feedback-stars">${safeStars}</span>
            <span class="feedback-status-chip status-${safeStatus}">${safeStatusLabel}</span>
          </div>
          <p class="feedback-card-message">${safeFeedback}</p>
          <p class="feedback-card-meta">Sent ${safeDate}</p>
          ${adminNoteBlock}
        </article>
      `;
    })
    .join("");
};

const renderFeedbackAdminList = () => {
  if (!feedbackAdminList) return;
  const filterValue = String(feedbackAdminFilter?.value || "all")
    .trim()
    .toLowerCase();
  const visible =
    filterValue === "all"
      ? feedbackEntriesCache
      : feedbackEntriesCache.filter((entry) => normalizeFeedbackStatus(entry.status) === filterValue);

  if (!visible.length) {
    feedbackAdminList.innerHTML = '<div class="friend-empty">No matching feedback entries.</div>';
    return;
  }

  feedbackAdminList.innerHTML = visible
    .map((entry) => {
      const id = escapeFeedbackText(entry.id);
      const status = normalizeFeedbackStatus(entry.status);
      const statusLabel = getFeedbackStatusLabel(status);
      const stars = renderFeedbackStars(entry.rating);
      const displayName = escapeFeedbackText(entry.displayName || entry.username || "Player");
      const username = escapeFeedbackText(entry.username || "player");
      const name = escapeFeedbackText(entry.name || displayName);
      const email = escapeFeedbackText(entry.email || "—");
      const phone = escapeFeedbackText(entry.phone || "—");
      const feedbackText = escapeFeedbackText(entry.feedback || "No feedback message.");
      const createdAt = escapeFeedbackText(formatFeedbackDate(entry.createdAt));
      const updatedAt = escapeFeedbackText(formatFeedbackDate(entry.updatedAt || entry.createdAt));
      const adminNote = escapeFeedbackText(entry.adminNote || "");
      return `
        <article class="feedback-card feedback-admin-card" data-feedback-id="${id}">
          <div class="feedback-card-head">
            <span class="feedback-stars">${stars}</span>
            <span class="feedback-status-chip status-${status}">${statusLabel}</span>
          </div>
          <p class="feedback-card-meta"><strong>${displayName}</strong> (@${username})</p>
          <p class="feedback-card-meta">Name: ${name} • Email: ${email} • Phone: ${phone}</p>
          <p class="feedback-card-message">${feedbackText}</p>
          <p class="feedback-card-meta">Sent ${createdAt} • Updated ${updatedAt}</p>
          <div class="feedback-admin-controls">
            <label class="setting-field feedback-admin-field">
              <span>Status</span>
              <select class="setting-input feedback-admin-status-select" data-feedback-admin-status-select>
                <option value="new"${status === "new" ? " selected" : ""}>New</option>
                <option value="reviewed"${status === "reviewed" ? " selected" : ""}>Reviewed</option>
                <option value="resolved"${status === "resolved" ? " selected" : ""}>Resolved</option>
              </select>
            </label>
            <label class="setting-field feedback-admin-field feedback-admin-note-field">
              <span>Admin note</span>
              <textarea
                class="setting-input feedback-admin-note-input"
                data-feedback-admin-note
                maxlength="240"
                placeholder="Optional admin note"
              >${adminNote}</textarea>
            </label>
            <button class="pill small" type="button" data-feedback-admin-save>Save</button>
            <button class="pill ghost small danger" type="button" data-feedback-admin-delete>Delete</button>
          </div>
        </article>
      `;
    })
    .join("");
};

const applyFeedbackMode = (isAdminMode) => {
  if (feedbackUserShell) feedbackUserShell.hidden = Boolean(isAdminMode);
  if (feedbackAdminShell) feedbackAdminShell.hidden = !Boolean(isAdminMode);
};

const refreshFeedbackDashboard = async (options = {}) => {
  if (pageMode !== "feedback") return;
  const { silent = false } = options;
  if (!authSessionToken) {
    feedbackEntriesCache = [];
    applyFeedbackMode(false);
    renderFeedbackAdminList();
    if (!silent) setFeedbackStatus("Log in to use feedback.", true);
    setFeedbackAdminStatus("");
    return;
  }

  if (!silent) setFeedbackStatus("Loading feedback...");
  try {
    const response = await callAuthApi("getFeedbackDashboard", {
      sessionToken: authSessionToken,
      limit: isCurrentUserAdmin() ? 300 : 80,
    });
    const adminMode = Boolean(response.admin);
    feedbackEntriesCache = Array.isArray(response.entries)
      ? response.entries.map((entry) => normalizeFeedbackEntry(entry)).filter((entry) => entry.id)
      : [];
    applyFeedbackMode(adminMode);

    if (adminMode) {
      renderFeedbackAdminList();
      setFeedbackAdminStatus(`${feedbackEntriesCache.length} feedback item(s) loaded.`);
      if (!silent) setFeedbackStatus("Admin feedback dashboard ready.");
    } else {
      setFeedbackAdminStatus("");
      if (!silent) setFeedbackStatus("Feedback form ready.");
    }
  } catch (error) {
    const message = String(error.message || "Unable to load feedback.");
    if (!silent) setFeedbackStatus(message, true);
    setFeedbackAdminStatus(message, true);
  }
};

const submitFeedbackForm = async () => {
  if (pageMode !== "feedback") return;
  if (!feedbackForm) return;
  if (!authSessionToken) {
    setFeedbackStatus("Log in first.", true);
    return;
  }
  if (isCurrentUserAdmin()) {
    setFeedbackStatus("Admin accounts manage feedback here instead of sending forms.", true);
    return;
  }

  const name = String(feedbackNameInput?.value || "")
    .trim()
    .slice(0, 40);
  const email = String(feedbackEmailInput?.value || "")
    .trim()
    .toLowerCase()
    .slice(0, 120);
  const phone = String(feedbackPhoneInput?.value || "")
    .trim()
    .slice(0, 30);
  const rating = clampFeedbackRating(feedbackSelectedRating || feedbackRatingInput?.value);
  const message = String(feedbackMessageInput?.value || "")
    .trim()
    .slice(0, 1200);

  if (name.length < 2) {
    setFeedbackStatus("Enter your name (at least 2 characters).", true);
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setFeedbackStatus("Enter a valid email address.", true);
    return;
  }
  if (!rating) {
    setFeedbackStatus("Select a rating from 1 to 5 stars.", true);
    return;
  }
  if (message.length < 5) {
    setFeedbackStatus("Feedback must be at least 5 characters.", true);
    return;
  }

  setFeedbackStatus("Sending feedback...");
  try {
    await callAuthApi("submitFeedback", {
      sessionToken: authSessionToken,
      name,
      email,
      phone,
      rating,
      feedback: message,
    });
    localStorage.setItem(FEEDBACK_EMAIL_STORAGE_KEY, email);
    if (feedbackPhoneInput) feedbackPhoneInput.value = "";
    if (feedbackMessageInput) feedbackMessageInput.value = "";
    setFeedbackRating(0, { silent: true });
    setFeedbackStatus("Feedback sent. Thank you!");
    await refreshFeedbackDashboard({ silent: true });
  } catch (error) {
    setFeedbackStatus(String(error.message || "Unable to send feedback."), true);
  }
};

const updateFeedbackAdminEntry = async (feedbackId, status, adminNote, triggerButton) => {
  if (pageMode !== "feedback") return;
  if (!authSessionToken) {
    setFeedbackAdminStatus("Log in first.", true);
    return;
  }
  const id = String(feedbackId || "")
    .trim()
    .toLowerCase();
  if (!id) return;
  const safeStatus = normalizeFeedbackStatus(status);
  const safeNote = String(adminNote || "")
    .trim()
    .slice(0, 240);

  if (triggerButton) triggerButton.disabled = true;
  setFeedbackAdminStatus("Saving...");
  try {
    await callAuthApi("adminUpdateFeedback", {
      sessionToken: authSessionToken,
      feedbackId: id,
      status: safeStatus,
      adminNote: safeNote,
    });
    setFeedbackAdminStatus("Feedback updated.");
    await refreshFeedbackDashboard({ silent: true });
  } catch (error) {
    setFeedbackAdminStatus(String(error.message || "Unable to update feedback."), true);
  } finally {
    if (triggerButton) triggerButton.disabled = false;
  }
};

const deleteFeedbackAdminEntry = async (feedbackId, triggerButton) => {
  if (pageMode !== "feedback") return;
  if (!authSessionToken) {
    setFeedbackAdminStatus("Log in first.", true);
    return;
  }
  const id = String(feedbackId || "")
    .trim()
    .toLowerCase();
  if (!id) return;

  if (triggerButton) triggerButton.disabled = true;
  setFeedbackAdminStatus("Deleting...");
  try {
    await callAuthApi("adminDeleteFeedback", {
      sessionToken: authSessionToken,
      feedbackId: id,
    });
    feedbackEntriesCache = feedbackEntriesCache.filter((entry) => entry.id !== id);
    renderFeedbackAdminList();
    setFeedbackAdminStatus("Feedback deleted from inbox.");
  } catch (error) {
    setFeedbackAdminStatus(String(error.message || "Unable to delete feedback."), true);
  } finally {
    if (triggerButton) triggerButton.disabled = false;
  }
};

const stopFeedbackPolling = () => {
  if (feedbackPollTimer) {
    window.clearTimeout(feedbackPollTimer);
    feedbackPollTimer = null;
  }
};

const startFeedbackPolling = () => {
  stopFeedbackPolling();
  const poll = () => {
    if (pageMode !== "feedback") {
      stopFeedbackPolling();
      return;
    }
    if (!authSessionToken) {
      stopFeedbackPolling();
      return;
    }
    if (!document.hidden) {
      void refreshFeedbackDashboard({ silent: true });
    }
    feedbackPollTimer = window.setTimeout(poll, getAdaptiveIntervalMs(22000, 14000));
  };
  feedbackPollTimer = window.setTimeout(poll, getAdaptiveIntervalMs(22000, 14000));
};

const initFeedbackPage = () => {
  if (pageMode !== "feedback") return;
  const shell = document.querySelector(".feedback-shell");
  if (!shell) return;

  if (!feedbackPageInitialized) {
    feedbackRefreshButton?.addEventListener("click", () => {
      void refreshFeedbackDashboard({ silent: false });
    });
    feedbackAdminRefreshButton?.addEventListener("click", () => {
      void refreshFeedbackDashboard({ silent: false });
    });
    feedbackForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      void submitFeedbackForm();
    });
    feedbackRatingButtons?.addEventListener("click", (event) => {
      const button = event.target instanceof Element ? event.target.closest("[data-feedback-rating]") : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const rating = clampFeedbackRating(button.getAttribute("data-feedback-rating"));
      setFeedbackRating(rating);
    });
    feedbackNameInput?.addEventListener("input", () => setFeedbackStatus(""));
    feedbackEmailInput?.addEventListener("input", () => setFeedbackStatus(""));
    feedbackPhoneInput?.addEventListener("input", () => setFeedbackStatus(""));
    feedbackMessageInput?.addEventListener("input", () => setFeedbackStatus(""));
    feedbackAdminFilter?.addEventListener("change", () => {
      renderFeedbackAdminList();
      setFeedbackAdminStatus("");
    });
    feedbackAdminList?.addEventListener("click", (event) => {
      const button =
        event.target instanceof Element
          ? event.target.closest("[data-feedback-admin-save], [data-feedback-admin-delete]")
          : null;
      if (!(button instanceof HTMLButtonElement)) return;
      const card = button.closest("[data-feedback-id]");
      if (!(card instanceof HTMLElement)) return;
      const feedbackId = card.getAttribute("data-feedback-id") || "";
      if (button.hasAttribute("data-feedback-admin-delete")) {
        const confirmed = window.confirm("Delete this feedback from admin inbox?");
        if (!confirmed) return;
        void deleteFeedbackAdminEntry(feedbackId, button);
        return;
      }
      const statusValue =
        card.querySelector("[data-feedback-admin-status-select]") instanceof HTMLSelectElement
          ? card.querySelector("[data-feedback-admin-status-select]").value
          : "new";
      const noteValue =
        card.querySelector("[data-feedback-admin-note]") instanceof HTMLTextAreaElement
          ? card.querySelector("[data-feedback-admin-note]").value
          : "";
      void updateFeedbackAdminEntry(feedbackId, statusValue, noteValue, button);
    });
    feedbackPageInitialized = true;
  }

  if (feedbackNameInput && !String(feedbackNameInput.value || "").trim()) {
    feedbackNameInput.value = String(authUser?.displayName || authUser?.username || getDisplayName() || "Player")
      .trim()
      .slice(0, 40);
  }
  if (feedbackEmailInput && !String(feedbackEmailInput.value || "").trim()) {
    feedbackEmailInput.value = String(localStorage.getItem(FEEDBACK_EMAIL_STORAGE_KEY) || "")
      .trim()
      .slice(0, 120);
  }
  if (feedbackRatingInput && !feedbackSelectedRating) {
    setFeedbackRating(feedbackRatingInput.value, { silent: true });
  } else {
    setFeedbackRating(feedbackSelectedRating, { silent: true });
  }

  void refreshFeedbackDashboard({ silent: false });
  if (authSessionToken) startFeedbackPolling();
};

const normalizeScreenRewardEntry = (entry) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const id = String(source.id || "").trim().toLowerCase();
  const label = String(source.label || "").trim().slice(0, 40);
  const message = String(source.message || "").trim().slice(0, 120);
  const rank = String(source.rank || "").trim().slice(0, 40);
  const xp = Math.max(0, Math.floor(Number(source.xp) || 0));
  const tm = Math.max(0, Math.floor(Number(source.tm) || 0));
  const streak = Math.max(0, Math.floor(Number(source.streak) || 0));
  const expiresAt = String(source.expiresAt || "").trim();
  return {
    id,
    label: label || "Claim Reward",
    message,
    rank,
    xp,
    tm,
    streak,
    expiresAt,
  };
};

const formatScreenRewardDate = (value) => {
  const date = new Date(String(value || ""));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const getScreenRewardSummary = (entry) => {
  const parts = [];
  if (entry.xp > 0) parts.push(`+${entry.xp.toLocaleString()} XP`);
  if (entry.tm > 0) parts.push(`+${entry.tm.toLocaleString()} TM$`);
  if (entry.streak > 0) parts.push(`+${entry.streak.toLocaleString()} Streak`);
  if (entry.rank) parts.push(`Rank: ${entry.rank}`);
  return parts.length ? parts.join(" • ") : "Message from admin";
};

const isScreenRewardMessageOnly = (entry) => {
  const item = entry && typeof entry === "object" ? entry : {};
  return (
    Math.max(0, Number(item.xp) || 0) <= 0 &&
    Math.max(0, Number(item.tm) || 0) <= 0 &&
    Math.max(0, Number(item.streak) || 0) <= 0 &&
    !String(item.rank || "").trim() &&
    Boolean(String(item.message || "").trim())
  );
};

const ensureScreenMessageOverlay = () => {
  if (screenMessageOverlay) return screenMessageOverlay;
  const overlay = document.createElement("div");
  overlay.className = "screen-message-overlay";
  overlay.innerHTML = `
    <div class="screen-message-card" role="dialog" aria-modal="true" aria-live="polite">
      <h3>Admin Message</h3>
      <p class="screen-message-body" data-screen-message-body></p>
      <button class="pill" type="button" data-screen-message-close>OK</button>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const closeButton = event.target.closest("[data-screen-message-close]");
    if (!closeButton) return;
    const rewardId = String(screenMessageEntryId || "").trim().toLowerCase();
    if (!rewardId) {
      overlay.classList.remove("show");
      return;
    }
    void claimScreenReward(rewardId, { silentMessageToast: true });
  });
  screenMessageOverlay = overlay;
  return overlay;
};

const hideScreenMessageOverlay = () => {
  if (!screenMessageOverlay) return;
  screenMessageEntryId = "";
  screenMessageOverlay.classList.remove("show");
};

const renderScreenMessageOverlay = () => {
  if (!authSessionToken) {
    hideScreenMessageOverlay();
    return;
  }
  const entry = screenRewardButtons.find((item) => item.id && isScreenRewardMessageOnly(item));
  if (!entry) {
    hideScreenMessageOverlay();
    return;
  }
  const overlay = ensureScreenMessageOverlay();
  const body = overlay.querySelector("[data-screen-message-body]");
  if (body) body.textContent = String(entry.message || "").trim();
  screenMessageEntryId = entry.id;
  overlay.classList.add("show");
};

const ensureScreenRewardPanel = () => {
  if (screenRewardPanel) return screenRewardPanel;
  const panel = document.createElement("aside");
  panel.className = "screen-reward-panel hidden";
  panel.innerHTML = `
    <div class="screen-reward-header">
      <span class="screen-reward-kicker">Admin Rewards</span>
      <h3>Reward Buttons</h3>
    </div>
    <div class="screen-reward-list"></div>
    <p class="screen-reward-status"></p>
  `;
  document.body.appendChild(panel);
  screenRewardPanel = panel;
  screenRewardListEl = panel.querySelector(".screen-reward-list");
  screenRewardStatusEl = panel.querySelector(".screen-reward-status");
  panel.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-screen-reward-id]") : null;
    if (!(button instanceof HTMLButtonElement)) return;
    const rewardId = String(button.getAttribute("data-screen-reward-id") || "").trim().toLowerCase();
    if (!rewardId) return;
    void claimScreenReward(rewardId);
  });
  return panel;
};

const setScreenRewardStatus = (message, isError = false) => {
  if (!screenRewardStatusEl) return;
  screenRewardStatusEl.textContent = String(message || "");
  screenRewardStatusEl.classList.toggle("is-error", Boolean(isError));
};

const renderScreenRewardPanel = () => {
  ensureScreenRewardPanel();
  renderScreenMessageOverlay();
  if (!screenRewardPanel || !screenRewardListEl) return;
  const visibleButtons = screenRewardButtons.filter((entry) => !isScreenRewardMessageOnly(entry));
  if (!authSessionToken || visibleButtons.length === 0) {
    screenRewardPanel.classList.add("hidden");
    screenRewardListEl.innerHTML = "";
    setScreenRewardStatus("");
    return;
  }
  screenRewardPanel.classList.remove("hidden");
  screenRewardListEl.innerHTML = "";
  visibleButtons.forEach((entry) => {
    if (!entry.id) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "screen-reward-btn";
    button.setAttribute("data-screen-reward-id", entry.id);
    button.disabled = screenRewardClaiming.has(entry.id);

    const label = document.createElement("span");
    label.className = "screen-reward-btn-label";
    label.textContent = entry.label;

    const summary = document.createElement("span");
    summary.className = "screen-reward-btn-summary";
    summary.textContent = getScreenRewardSummary(entry);

    button.append(label, summary);
    if (entry.message) {
      const message = document.createElement("span");
      message.className = "screen-reward-btn-message";
      message.textContent = entry.message;
      button.appendChild(message);
    }
    if (entry.expiresAt) {
      const expires = document.createElement("span");
      expires.className = "screen-reward-btn-expiry";
      const dateLabel = formatScreenRewardDate(entry.expiresAt);
      expires.textContent = dateLabel ? `Expires ${dateLabel}` : "";
      if (expires.textContent) button.appendChild(expires);
    }
    screenRewardListEl.appendChild(button);
  });
};

const fetchScreenRewards = async (options = {}) => {
  const { silent = false } = options;
  if (!authSessionToken) {
    screenRewardButtons = [];
    renderScreenRewardPanel();
    return;
  }
  ensureScreenRewardPanel();
  try {
    const response = await callAuthApi("getScreenRewards", {
      sessionToken: authSessionToken,
      limit: 20,
    });
    const list = Array.isArray(response.rewards) ? response.rewards : [];
    screenRewardButtons = list.map((entry) => normalizeScreenRewardEntry(entry)).filter((entry) => entry.id);
    const visibleCount = screenRewardButtons.filter((entry) => !isScreenRewardMessageOnly(entry)).length;
    renderScreenRewardPanel();
    if (!silent && visibleCount > 0) {
      setScreenRewardStatus(`${visibleCount} reward button(s) ready.`);
    } else if (!silent) {
      setScreenRewardStatus("");
    }
  } catch (error) {
    if (!silent) {
      setScreenRewardStatus(String(error.message || "Unable to load screen rewards."), true);
    }
  }
};

const claimScreenReward = async (rewardId, options = {}) => {
  const { silentMessageToast = false } = options;
  const id = String(rewardId || "").trim().toLowerCase();
  if (!id || !authSessionToken || screenRewardClaiming.has(id)) return;
  const claimedEntry = screenRewardButtons.find((entry) => entry.id === id) || null;
  const messageOnlyClaim = isScreenRewardMessageOnly(claimedEntry);
  screenRewardClaiming.add(id);
  renderScreenRewardPanel();
  setScreenRewardStatus("Claiming reward...");
  try {
    const response = await callAuthApi("claimScreenReward", {
      sessionToken: authSessionToken,
      rewardId: id,
    });
    screenRewardButtons = screenRewardButtons.filter((entry) => entry.id !== id);
    if (response?.profile && typeof applyCloudProfile === "function") {
      applyCloudProfile(response.profile);
    }
    const granted = response?.granted && typeof response.granted === "object" ? response.granted : {};
    const grantedXp = Math.max(0, Math.floor(Number(granted.xp) || 0));
    const grantedTm = Math.max(0, Math.floor(Number(granted.tm) || 0));
    const grantedStreak = Math.max(0, Math.floor(Number(granted.streak) || 0));
    const grantedRank = String(granted.rank || "").trim();
    const rewardBits = [];
    if (grantedXp > 0) rewardBits.push(`+${grantedXp.toLocaleString()} XP`);
    if (grantedTm > 0) rewardBits.push(`+${grantedTm.toLocaleString()} TM$`);
    if (grantedStreak > 0) rewardBits.push(`+${grantedStreak.toLocaleString()} Streak`);
    if (grantedRank) rewardBits.push(`Rank: ${grantedRank}`);
    if (rewardBits.length) {
      showActionToast(`Admin reward claimed: ${rewardBits.join(" • ")}`);
    } else if (messageOnlyClaim) {
      if (!silentMessageToast) showActionToast("Message received.");
    } else {
      showActionToast("Admin reward claimed.");
    }
    renderScreenRewardPanel();
    if (!messageOnlyClaim) {
      setScreenRewardStatus("Reward claimed.");
    } else {
      setScreenRewardStatus("");
    }
    void refreshLeaderboard({ force: true, silent: true });
    void fetchScreenRewards({ silent: true });
  } catch (error) {
    setScreenRewardStatus(String(error.message || "Unable to claim reward."), true);
  } finally {
    screenRewardClaiming.delete(id);
    renderScreenRewardPanel();
  }
};

const stopScreenRewardPolling = () => {
  if (screenRewardPollTimer) {
    window.clearTimeout(screenRewardPollTimer);
    screenRewardPollTimer = null;
  }
  screenRewardButtons = [];
  screenRewardClaiming = new Set();
  renderScreenRewardPanel();
};

const startScreenRewardPolling = () => {
  if (!authSessionToken) {
    stopScreenRewardPolling();
    return;
  }
  void fetchScreenRewards({ silent: true });
  if (screenRewardPollTimer) return;
  const poll = () => {
    if (!authSessionToken) {
      stopScreenRewardPolling();
      return;
    }
    if (!document.hidden) {
      void fetchScreenRewards({ silent: true });
    }
    screenRewardPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(3200, 2200));
  };
  screenRewardPollTimer = window.setTimeout(poll, getRealtimePollIntervalMs(3200, 2200));
};

const setAdminScreenRewardStatus = (message, isError = false) => {
  const status = document.getElementById("admin-screen-status");
  if (!status) return;
  status.textContent = String(message || "");
  status.classList.toggle("is-error", Boolean(isError));
};

const isAdminScreenAllTarget = (value) => {
  const normalized = String(value || "")
    .trim()
    .toLowerCase();
  return normalized === "all" || normalized === "@all" || normalized === "everyone" || normalized === "*";
};

const createAdminScreenRewardButton = async () => {
  if (!hasAdminTabAccess()) return;
  if (!authSessionToken) {
    setAdminScreenRewardStatus("Log in first.", true);
    return;
  }
  const rawTargetValue = String(adminScreenTargetInput?.value || "").trim();
  const targetUsername = normalizeAdminTargetUsername(rawTargetValue);
  const sendToAll = Boolean(adminScreenTargetAllInput?.checked) || isAdminScreenAllTarget(rawTargetValue);
  const label = String(adminScreenLabelInput?.value || "")
    .trim()
    .slice(0, 40);
  const message = String(adminScreenMessageInput?.value || "")
    .trim()
    .slice(0, 120);
  const rank = String(adminScreenRankInput?.value || "")
    .trim()
    .slice(0, 40);
  const xp = Math.max(0, Math.floor(Number(adminScreenXpInput?.value || 0) || 0));
  const tm = Math.max(0, Math.floor(Number(adminScreenMoneyInput?.value || 0) || 0));
  const streak = Math.max(0, Math.floor(Number(adminScreenStreakInput?.value || 0) || 0));
  const expiresMinutes = Math.max(1, Math.floor(Number(adminScreenExpiryInput?.value || 180) || 180));

  if (!sendToAll && !targetUsername) {
    setAdminScreenRewardStatus("Enter a target username.", true);
    return;
  }
  if (label.length < 2) {
    setAdminScreenRewardStatus("Button label must be at least 2 characters.", true);
    return;
  }
  if (xp <= 0 && tm <= 0 && streak <= 0 && !rank && !message) {
    setAdminScreenRewardStatus("Set a message or at least one reward value.", true);
    return;
  }

  setAdminScreenRewardStatus("Sending button...");
  try {
    const response = await callAuthApi("adminCreateScreenReward", {
      sessionToken: authSessionToken,
      targetUsername: sendToAll ? "all" : targetUsername,
      targetScope: sendToAll ? "all" : "user",
      sendToAll,
      label,
      message,
      xp,
      tm,
      streak,
      rank,
      expiresMinutes,
    });
    const sentCount = Math.max(0, Math.floor(Number(response?.sentCount) || 0));
    if (sendToAll) {
      const targetLabel = sentCount > 0 ? `${sentCount} players` : "all players";
      setAdminScreenRewardStatus(`Button sent to ${targetLabel}.`);
      showActionToast(`Reward button sent to ${targetLabel}.`);
    } else {
      setAdminScreenRewardStatus(`Button sent to ${targetUsername}.`);
      showActionToast(`Reward button sent to ${targetUsername}.`);
    }
  } catch (error) {
    setAdminScreenRewardStatus(String(error.message || "Unable to send reward button."), true);
  }
};

const syncRank = () => {
  currentRank = getRank(xpTotal);
  updateProgressUI();
  renderLeaderboard();
  saveXpState();
};

const defaultLayout = ["favorites", "recents", "apps"];
const loadLayout = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(LAYOUT_KEY) || "[]");
    const list = Array.isArray(stored) ? stored : [];
    const filtered = list.filter((item) => defaultLayout.includes(item));
    const merged = [...new Set([...filtered, ...defaultLayout])];
    return merged;
  } catch (error) {
    console.warn("Failed to load layout:", error);
    return [...defaultLayout];
  }
};

const saveLayout = (layout) => {
  localStorage.setItem(LAYOUT_KEY, JSON.stringify(layout));
};

const applyHomeLayout = () => {
  if (pageMode !== "popular") return;
  const shell = document.querySelector(".main-shell");
  if (!shell) return;
  const blocks = [...shell.querySelectorAll("[data-home-section]")];
  if (!blocks.length) return;
  const map = new Map(blocks.map((block) => [block.dataset.homeSection, block]));
  const order = loadLayout();
  const fragment = document.createDocumentFragment();
  const appended = new Set();
  order.forEach((key) => {
    const node = map.get(key);
    if (node) {
      fragment.appendChild(node);
      appended.add(node);
    }
  });
  blocks.forEach((block) => {
    if (!appended.has(block)) fragment.appendChild(block);
  });
  shell.appendChild(fragment);
};

const storedThemeChoice = localStorage.getItem(THEME_KEY) || "default";
const themeChoice = enforceThemeChoice(storedThemeChoice);
if (themeChoice !== storedThemeChoice) {
  localStorage.setItem(THEME_KEY, themeChoice);
}
const ambientChoice = localStorage.getItem(AMBIENT_KEY) || "on";
const storedAccentChoice = localStorage.getItem(ACCENT_KEY) || "neon";
const accentChoice = enforceAccentChoice(storedAccentChoice);
if (accentChoice !== storedAccentChoice) {
  localStorage.setItem(ACCENT_KEY, accentChoice);
}
const densityChoice = localStorage.getItem(DENSITY_KEY) || "comfort";
const motionChoice = localStorage.getItem(MOTION_KEY) || "full";
const performanceChoice = resolveInitialPerformanceChoice();
const languageChoice = localStorage.getItem(LANG_KEY) || "en";

applyTheme(themeChoice);
applyAmbient(ambientChoice);
applyAccent(accentChoice);
applyDensity(densityChoice);
applyMotion(motionChoice);
applyPerformance(performanceChoice);
applyHubVisualStyles();
enforceCosmeticsAccess();

mergeCustomGames();

const favorites = loadFavorites();
const normalizeFavoritesOrder = () => {
  const order = loadOrderList(FAVORITES_ORDER_KEY);
  const valid = order.filter((id) => games.some((game) => game.id === id));
  const filtered = valid.filter((id) => favorites.has(id));
  games.forEach((game) => {
    if (favorites.has(game.id) && !filtered.includes(game.id)) {
      filtered.push(game.id);
    }
  });
  saveOrderList(FAVORITES_ORDER_KEY, filtered);
  return filtered;
};

const orderFavorites = (list) => {
  const order = normalizeFavoritesOrder();
  const index = new Map(order.map((id, idx) => [id, idx]));
  return [...list].sort((a, b) => {
    const aIndex = index.has(a.id) ? index.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bIndex = index.has(b.id) ? index.get(b.id) : Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
};

const normalizeAllGamesOrder = () => {
  const order = loadOrderList(ALL_GAMES_ORDER_KEY);
  const valid = order.filter((id) => games.some((game) => game.id === id));
  games.forEach((game) => {
    if (!valid.includes(game.id)) {
      valid.push(game.id);
    }
  });
  saveOrderList(ALL_GAMES_ORDER_KEY, valid);
  return valid;
};

const orderAllGames = (list) => {
  const order = normalizeAllGamesOrder();
  const index = new Map(order.map((id, idx) => [id, idx]));
  return [...list].sort((a, b) => {
    const aIndex = index.has(a.id) ? index.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bIndex = index.has(b.id) ? index.get(b.id) : Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
};

const initGridReorder = ({ container, itemSelector, idAccessor, orderKey }) => {
  if (!container || container.dataset.reorderReady === "1") return;
  container.dataset.reorderReady = "1";

  const getOrder = () =>
    [...container.querySelectorAll(itemSelector)].map((item) => idAccessor(item)).filter(Boolean);

  const persistOrder = () => {
    saveOrderList(orderKey, getOrder());
  };

  let dragged = null;
  container.addEventListener("dragstart", (event) => {
    const item = event.target.closest(itemSelector);
    if (!item || !container.contains(item)) return;
    dragged = item;
    item.classList.add("dragging");
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  });
  container.addEventListener("dragend", () => {
    if (dragged) dragged.classList.remove("dragging");
    dragged = null;
    persistOrder();
  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    const target = event.target.closest(itemSelector);
    if (!target || !dragged || target === dragged || !container.contains(target)) return;
    const rect = target.getBoundingClientRect();
    const next = event.clientY > rect.top + rect.height / 2;
    container.insertBefore(dragged, next ? target.nextSibling : target);
  });

  const LONG_PRESS_MS = 280;
  const MOVE_CANCEL_DISTANCE = 10;
  const CLICK_BLOCK_MS = 350;
  let pressTimer = 0;
  let pressPointerId = null;
  let pressItem = null;
  let pressX = 0;
  let pressY = 0;
  let touchDragged = null;
  let touchPointerId = null;
  let blockClickUntil = 0;

  const clearPressTimer = () => {
    if (pressTimer) {
      window.clearTimeout(pressTimer);
    }
    pressTimer = 0;
    pressPointerId = null;
    pressItem = null;
  };

  const beginTouchDrag = (item, pointerId) => {
    touchDragged = item;
    touchPointerId = pointerId;
    dragged = item;
    item.classList.add("dragging");
    container.classList.add("touch-drag-active");
    document.body.classList.add("drag-reordering");
    blockClickUntil = Date.now() + CLICK_BLOCK_MS;
    try {
      item.setPointerCapture(pointerId);
    } catch (error) {
      // Pointer capture is not available in every browser.
    }
  };

  const endTouchDrag = (pointerId = null) => {
    if (!touchDragged) return;
    if (pointerId !== null) {
      try {
        touchDragged.releasePointerCapture(pointerId);
      } catch (error) {
        // Pointer capture release can fail when capture is unavailable.
      }
    }
    touchDragged.classList.remove("dragging");
    touchDragged = null;
    touchPointerId = null;
    dragged = null;
    container.classList.remove("touch-drag-active");
    document.body.classList.remove("drag-reordering");
    persistOrder();
  };

  const moveTouchDrag = (clientX, clientY) => {
    if (!touchDragged) return;
    const element = document.elementFromPoint(clientX, clientY);
    const target = element?.closest(itemSelector);
    if (!target || !container.contains(target) || target === touchDragged) return;
    const rect = target.getBoundingClientRect();
    const next = clientY > rect.top + rect.height / 2;
    container.insertBefore(touchDragged, next ? target.nextSibling : target);
  };

  container.addEventListener("pointerdown", (event) => {
    const item = event.target.closest(itemSelector);
    if (!item || !container.contains(item)) return;
    if (event.pointerType === "mouse") return;
    clearPressTimer();
    pressPointerId = event.pointerId;
    pressItem = item;
    pressX = event.clientX;
    pressY = event.clientY;
    pressTimer = window.setTimeout(() => {
      if (!pressItem) return;
      const itemToDrag = pressItem;
      const pointerId = pressPointerId;
      clearPressTimer();
      beginTouchDrag(itemToDrag, pointerId);
    }, LONG_PRESS_MS);
  });

  container.addEventListener(
    "pointermove",
    (event) => {
      if (touchDragged) {
        if (event.pointerId !== touchPointerId) return;
        event.preventDefault();
        moveTouchDrag(event.clientX, event.clientY);
        return;
      }
      if (!pressTimer || event.pointerId !== pressPointerId) return;
      const dx = event.clientX - pressX;
      const dy = event.clientY - pressY;
      if (Math.hypot(dx, dy) > MOVE_CANCEL_DISTANCE) {
        clearPressTimer();
      }
    },
    { passive: false },
  );

  const clearOrDropPointer = (event) => {
    if (touchDragged && event.pointerId === touchPointerId) {
      endTouchDrag(event.pointerId);
      return;
    }
    if (pressTimer && event.pointerId === pressPointerId) {
      clearPressTimer();
    }
  };

  container.addEventListener("pointerup", clearOrDropPointer);
  container.addEventListener("pointercancel", clearOrDropPointer);
  window.addEventListener("pointerup", clearOrDropPointer);
  window.addEventListener("pointercancel", clearOrDropPointer);
  window.addEventListener("blur", () => {
    clearPressTimer();
    if (touchDragged) {
      endTouchDrag();
    }
  });
  container.addEventListener("pointerleave", (event) => {
    if (!touchDragged && pressTimer && event.pointerId === pressPointerId) {
      clearPressTimer();
    }
  });
  container.addEventListener("contextmenu", (event) => {
    if (!touchDragged) return;
    event.preventDefault();
  });
  container.addEventListener(
    "click",
    (event) => {
      if (Date.now() < blockClickUntil) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    true,
  );
};

const getDefaultAppsOrder = () => {
  const appGrid = document.querySelector(".app-grid");
  if (!appGrid) return [];
  return [...appGrid.querySelectorAll(".app-card")]
    .map((card) => card.dataset.appId)
    .filter(Boolean);
};

const defaultAppsOrder = getDefaultAppsOrder();

const applyAppsOrder = () => {
  const appGrid = document.querySelector(".app-grid");
  if (!appGrid) return;
  const cards = [...appGrid.querySelectorAll(".app-card")];
  if (!cards.length) return;
  const defaultOrder = cards.map((card) => card.dataset.appId).filter(Boolean);
  const stored = loadOrderList(APPS_ORDER_KEY);
  const filtered = stored.filter((id) => defaultOrder.includes(id));
  const finalOrder = [...filtered, ...defaultOrder.filter((id) => !filtered.includes(id))];
  const map = new Map(cards.map((card) => [card.dataset.appId, card]));
  const fragment = document.createDocumentFragment();
  finalOrder.forEach((id) => {
    const card = map.get(id);
    if (card) fragment.appendChild(card);
  });
  appGrid.appendChild(fragment);
  saveOrderList(APPS_ORDER_KEY, finalOrder);
};

const resetAppsOrder = () => {
  const appGrid = document.querySelector(".app-grid");
  if (!appGrid) return;
  const cards = [...appGrid.querySelectorAll(".app-card")];
  if (!cards.length) return;
  const currentIds = cards.map((card) => card.dataset.appId).filter(Boolean);
  const customIds = loadCustomApps()
    .map((app) => app.id)
    .filter((id) => currentIds.includes(id));
  const baseIds = defaultAppsOrder.filter((id) => currentIds.includes(id));
  const remainingIds = currentIds.filter((id) => !baseIds.includes(id) && !customIds.includes(id));
  const finalOrder = [...baseIds, ...remainingIds, ...customIds];
  const map = new Map(cards.map((card) => [card.dataset.appId, card]));
  const fragment = document.createDocumentFragment();
  finalOrder.forEach((id) => {
    const card = map.get(id);
    if (card) fragment.appendChild(card);
  });
  appGrid.appendChild(fragment);
  saveOrderList(APPS_ORDER_KEY, finalOrder);
};

const initAppsDrag = () => {
  const appGrid = document.querySelector(".app-grid");
  if (!appGrid) return;
  initGridReorder({
    container: appGrid,
    itemSelector: ".app-card",
    idAccessor: (card) => card.dataset.appId,
    orderKey: APPS_ORDER_KEY,
  });
};
const loadRecents = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(RECENTS_KEY) || "[]");
    return Array.isArray(stored) ? stored : [];
  } catch (error) {
    console.warn("Failed to load recents:", error);
    return [];
  }
};

const saveRecents = (recents) => {
  localStorage.setItem(RECENTS_KEY, JSON.stringify(recents));
};

const computeVisibleGames = () =>
  pageMode === "popular"
    ? orderFavorites(games.filter((game) => favorites.has(game.id))).slice(0, 8)
    : pageMode === "favorites"
      ? orderFavorites(games.filter((game) => favorites.has(game.id)))
      : pageMode === "all"
        ? orderAllGames(games)
        : games;

let visibleGames = computeVisibleGames();

const buildCustomGameHref = (game) => {
  const params = new URLSearchParams();
  if (game?.id) params.set("game", game.id);
  if (game?.name) params.set("title", game.name);
  if (game?.url) params.set("url", game.url);
  return `custom-game.html?${params.toString()}`;
};

const buildStandardGameHref = (gameId) =>
  gameId === "minecraft" ? "minecraft.html" : `play.html?game=${encodeURIComponent(gameId)}`;

const ensurePlayControls = () => {
  const shouldUseHud =
    document.body.classList.contains("game-only") ||
    pageMode === "play" ||
    pageMode === "custom-game" ||
    pageMode === "app" ||
    pageMode === "secret";
  if (!shouldUseHud) return;
  const controls = document.querySelector(".play-controls") || document.createElement("div");
  controls.id = "play-controls";
  controls.className = "play-controls game-hud-controls";
  controls.innerHTML = `
    <a class="pill ghost link-pill play-back" href="index.html">Back to Home</a>
    <button class="pill ghost play-emergency" type="button" id="emergency">Emergency</button>
  `;
  if (!controls.parentNode) {
    document.body.appendChild(controls);
  }
};

ensurePlayControls();

const ensurePlayNameTag = () => {
  if (!document.body.classList.contains("game-only")) return;
  if (document.querySelector(".play-nametag")) return;
  const tag = document.createElement("div");
  tag.className = "user-tag play-nametag";
  tag.setAttribute("data-user-name", "");
  tag.textContent = "Player";
  document.body.appendChild(tag);
};

ensurePlayNameTag();

const normalizeEmergencyUrl = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return DEFAULT_EMERGENCY_URL;
  const prefixed = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const parsed = new URL(prefixed);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return DEFAULT_EMERGENCY_URL;
    return parsed.href;
  } catch {
    return DEFAULT_EMERGENCY_URL;
  }
};

const getEmergencyUrl = () =>
  normalizeEmergencyUrl(localStorage.getItem(EMERGENCY_URL_KEY) || DEFAULT_EMERGENCY_URL);

const emptyProfileStats = () => ({
  totalPlaySeconds: 0,
  totalLaunches: 0,
  games: {},
  dailyPlay: {},
});

const loadProfileStats = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(PROFILE_STATS_KEY) || "{}");
    if (!raw || typeof raw !== "object") return emptyProfileStats();
    const source = raw.games && typeof raw.games === "object" ? raw.games : {};
    const gamesMap = {};
    Object.entries(source).forEach(([id, value]) => {
      if (!id) return;
      const entry = value && typeof value === "object" ? value : {};
      const safeName = String(entry.name || id).trim().slice(0, 120) || id;
      gamesMap[id] = {
        name: safeName,
        playSeconds: Math.max(0, Math.floor(Number(entry.playSeconds) || 0)),
        launches: Math.max(0, Math.floor(Number(entry.launches) || 0)),
        lastPlayedAt: Math.max(0, Math.floor(Number(entry.lastPlayedAt) || 0)),
      };
    });
    const dailySource = raw.dailyPlay && typeof raw.dailyPlay === "object" ? raw.dailyPlay : {};
    const dailyPlay = {};
    Object.entries(dailySource).forEach(([dayKey, value]) => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(dayKey)) return;
      const seconds = Math.max(0, Math.floor(Number(value) || 0));
      if (seconds <= 0) return;
      dailyPlay[dayKey] = seconds;
    });
    return {
      totalPlaySeconds: Math.max(0, Math.floor(Number(raw.totalPlaySeconds) || 0)),
      totalLaunches: Math.max(0, Math.floor(Number(raw.totalLaunches) || 0)),
      games: gamesMap,
      dailyPlay,
    };
  } catch {
    return emptyProfileStats();
  }
};

let profileStats = loadProfileStats();
let profilePlayCarrySeconds = 0;
let profileUnsavedSeconds = 0;

const ensureProfileStatEntry = (gameId, gameName = "") => {
  if (!gameId) return null;
  if (!profileStats.games[gameId]) {
    profileStats.games[gameId] = {
      name: String(gameName || gameId).trim().slice(0, 120) || gameId,
      playSeconds: 0,
      launches: 0,
      lastPlayedAt: 0,
    };
  } else if (gameName && String(gameName).trim()) {
    profileStats.games[gameId].name = String(gameName).trim().slice(0, 120);
  }
  return profileStats.games[gameId];
};

const formatDurationCompact = (totalSeconds) => {
  const seconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m`;
  return seconds > 0 ? "<1m" : "0m";
};

const formatLastPlayed = (timestamp) => {
  if (!timestamp) return "Never";
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) return "Never";
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const getTodayPlaySeconds = () => {
  const dayKey = getDateKey(new Date());
  return Math.max(0, Math.floor(Number(profileStats.dailyPlay?.[dayKey]) || 0));
};

const getPlaytimeRankProgress = (secondsTotal) => {
  const safeSeconds = Math.max(0, Math.floor(Number(secondsTotal) || 0));
  const currentTier =
    [...playtimeRankTiers].reverse().find((tier) => safeSeconds >= tier.minSeconds) ||
    playtimeRankTiers[0];
  const nextTier = playtimeRankTiers.find((tier) => tier.minSeconds > safeSeconds) || null;
  if (!nextTier) {
    return {
      currentTier,
      nextTier: null,
      percent: 1,
    };
  }
  const span = Math.max(1, nextTier.minSeconds - currentTier.minSeconds);
  const percent = Math.min(1, Math.max(0, (safeSeconds - currentTier.minSeconds) / span));
  return { currentTier, nextTier, percent };
};

const getUnlockedAchievements = () => {
  let source = {};
  try {
    source = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "{}") || {};
  } catch {
    source = {};
  }
  const unlocked = [];
  const pushAchievement = (id, title, detail) => {
    if (unlocked.some((entry) => entry.id === id)) return;
    unlocked.push({ id, title, detail });
  };

  const clickCount = Math.max(0, Math.floor(Number(source.clicks) || 0));
  if (clickCount >= 100 || source.clicked100) {
    pushAchievement("click-100", "Click Centurion", "Clicked 100+ times in TM Arcade.");
  } else if (clickCount >= 50) {
    pushAchievement("click-50", "Half-Century Taps", "Clicked 50+ times in TM Arcade.");
  }
  if (source.secretFound) {
    pushAchievement("secret-found", "Secret Hunter", "Found a hidden TM Arcade secret.");
  }

  const milestoneValues = new Set();
  const tmMilestones = new Set();
  if (Array.isArray(source.xpMilestones)) {
    source.xpMilestones.forEach((entry) => {
      if (typeof entry === "number" || /^\d+$/.test(String(entry || ""))) {
        milestoneValues.add(Math.max(0, Math.floor(Number(entry) || 0)));
        return;
      }
      const value = String(entry || "");
      if (value.startsWith("tm-")) {
        const tmValue = Math.max(0, Math.floor(Number(value.replace("tm-", "")) || 0));
        if (tmValue > 0) tmMilestones.add(tmValue);
      }
    });
  } else if (source.xpMilestones && typeof source.xpMilestones === "object") {
    Object.entries(source.xpMilestones).forEach(([value, reached]) => {
      if (!reached) return;
      if (String(value).startsWith("tm-")) {
        const tmValue = Math.max(0, Math.floor(Number(String(value).replace("tm-", "")) || 0));
        if (tmValue > 0) tmMilestones.add(tmValue);
        return;
      }
      milestoneValues.add(Math.max(0, Math.floor(Number(value) || 0)));
    });
  }
  [...milestoneValues]
    .filter((value) => value > 0)
    .sort((a, b) => b - a)
    .forEach((value) => {
      pushAchievement(`xp-${value}`, `XP Milestone ${value.toLocaleString()}`, "Reached a major XP milestone.");
    });
  [...tmMilestones]
    .sort((a, b) => b - a)
    .forEach((value) => {
      pushAchievement(
        `tm-${value}`,
        `TM$ Milestone ${value.toLocaleString()}`,
        "Reached a major TM Dollars milestone.",
      );
    });

  return unlocked;
};

const renderProfilePage = () => {
  if (pageMode !== "profile") return;
  const totalPlayEl = document.getElementById("profile-total-playtime");
  const totalLaunchEl = document.getElementById("profile-total-launches");
  const totalLaunchCardEl = document.getElementById("profile-total-launches-card");
  const trackedEl = document.getElementById("profile-games-tracked");
  const playedEl = document.getElementById("profile-games-played");
  const todayPlayEl = document.getElementById("profile-today-playtime");
  const avgSessionEl = document.getElementById("profile-average-session");
  const sessionEl = document.getElementById("profile-session-time");
  const xpEl = document.getElementById("profile-xp-total");
  const rankEl = document.getElementById("profile-rank-name");
  const rankLabelEl = document.getElementById("profile-rank-label");
  const rankProgressLabel = document.getElementById("profile-rank-progress-label");
  const nextRankEl = document.getElementById("profile-next-rank");
  const rankPlaytimeEl = document.getElementById("profile-rank-playtime");
  const rankRing = document.getElementById("profile-rank-ring");
  const moneyEl = document.getElementById("profile-money-total");
  const favoritesEl = document.getElementById("profile-favorites-total");
  const mostPlayedNameEl = document.getElementById("profile-most-played-name");
  const mostPlayedMinutesEl = document.getElementById("profile-most-played-minutes");
  const mostPlayedLaunchesEl = document.getElementById("profile-most-played-launches");
  const mostPlayedLastEl = document.getElementById("profile-most-played-last");
  const achievementShowcase = document.getElementById("profile-achievement-showcase");
  const achievementCountEl = document.getElementById("profile-achievement-count");
  const listBody = document.getElementById("profile-games-list");
  if (totalPlayEl) totalPlayEl.textContent = formatDurationCompact(profileStats.totalPlaySeconds);
  if (totalLaunchEl) totalLaunchEl.textContent = String(profileStats.totalLaunches);
  if (totalLaunchCardEl) totalLaunchCardEl.textContent = String(profileStats.totalLaunches);
  if (todayPlayEl) todayPlayEl.textContent = formatDurationCompact(getTodayPlaySeconds());
  if (avgSessionEl) {
    const averageSessionSeconds =
      profileStats.totalLaunches > 0 ? profileStats.totalPlaySeconds / profileStats.totalLaunches : 0;
    avgSessionEl.textContent = formatDurationCompact(averageSessionSeconds);
  }
  if (sessionEl) {
    const sessionSecondsRaw = Math.max(0, Math.floor(Number(localStorage.getItem("sessionTime")) || 0));
    sessionEl.textContent = formatDurationCompact(sessionSecondsRaw);
  }
  if (xpEl) xpEl.textContent = Math.max(0, Math.floor(xpTotal)).toLocaleString();
  if (rankEl) rankEl.textContent = currentRank;
  if (moneyEl) moneyEl.textContent = Math.max(0, Math.floor(tmDollars)).toLocaleString();
  if (favoritesEl) favoritesEl.textContent = String(favorites.size);

  const allGames = new Map();
  games.forEach((game) => {
    if (!game?.id) return;
    allGames.set(game.id, game.name || game.id);
  });
  Object.entries(profileStats.games).forEach(([id, entry]) => {
    if (!id) return;
    if (!allGames.has(id)) {
      allGames.set(id, entry?.name || id);
    }
  });

  const rows = [...allGames.entries()]
    .map(([id, name]) => {
      const entry = profileStats.games[id] || {};
      return {
        id,
        name,
        playSeconds: Math.max(0, Math.floor(Number(entry.playSeconds) || 0)),
        launches: Math.max(0, Math.floor(Number(entry.launches) || 0)),
        lastPlayedAt: Math.max(0, Math.floor(Number(entry.lastPlayedAt) || 0)),
      };
    })
    .sort((a, b) => {
      if (b.playSeconds !== a.playSeconds) return b.playSeconds - a.playSeconds;
      if (b.launches !== a.launches) return b.launches - a.launches;
      return String(a.name).localeCompare(String(b.name));
    });

  const playedCount = rows.filter((row) => row.playSeconds > 0 || row.launches > 0).length;
  if (trackedEl) trackedEl.textContent = String(rows.length);
  if (playedEl) playedEl.textContent = String(playedCount);

  const mostPlayedRow = rows.find((row) => row.playSeconds > 0) || null;
  if (mostPlayedRow) {
    if (mostPlayedNameEl) mostPlayedNameEl.textContent = mostPlayedRow.name;
    if (mostPlayedMinutesEl) {
      mostPlayedMinutesEl.textContent = `${(mostPlayedRow.playSeconds / 60).toFixed(1).replace(/\.0$/, "")}m`;
    }
    if (mostPlayedLaunchesEl) mostPlayedLaunchesEl.textContent = `${mostPlayedRow.launches} launches`;
    if (mostPlayedLastEl) mostPlayedLastEl.textContent = formatLastPlayed(mostPlayedRow.lastPlayedAt);
  } else {
    if (mostPlayedNameEl) mostPlayedNameEl.textContent = "No game data yet";
    if (mostPlayedMinutesEl) mostPlayedMinutesEl.textContent = "0m";
    if (mostPlayedLaunchesEl) mostPlayedLaunchesEl.textContent = "0 launches";
    if (mostPlayedLastEl) mostPlayedLastEl.textContent = "Play a game to populate stats.";
  }

  const playtimeProgress = getPlaytimeRankProgress(profileStats.totalPlaySeconds);
  if (rankLabelEl) rankLabelEl.textContent = t(playtimeProgress.currentTier.key);
  if (rankProgressLabel) {
    rankProgressLabel.textContent = `${Math.round(playtimeProgress.percent * 100)}%`;
  }
  if (nextRankEl) {
    nextRankEl.textContent = playtimeProgress.nextTier
      ? `Next: ${t(playtimeProgress.nextTier.key)}`
      : "Next: Max Tier";
  }
  if (rankPlaytimeEl) {
    rankPlaytimeEl.textContent = `Lifetime: ${formatDurationCompact(profileStats.totalPlaySeconds)}`;
  }
  if (rankRing) {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - circumference * playtimeProgress.percent;
    rankRing.style.strokeDasharray = `${circumference}`;
    rankRing.style.strokeDashoffset = `${offset}`;
  }

  if (achievementShowcase) {
    const achievements = getUnlockedAchievements();
    if (achievementCountEl) achievementCountEl.textContent = `${achievements.length} unlocked`;
    achievementShowcase.textContent = "";
    if (!achievements.length) {
      const empty = document.createElement("div");
      empty.className = "profile-achievement-empty";
      empty.textContent = "No achievements unlocked yet.";
      achievementShowcase.appendChild(empty);
    } else {
      achievements.slice(0, 8).forEach((achievement) => {
        const card = document.createElement("article");
        card.className = "profile-achievement-card";
        card.innerHTML = `
          <h4>${achievement.title}</h4>
          <p>${achievement.detail}</p>
        `;
        achievementShowcase.appendChild(card);
      });
    }
  }

  if (!listBody) return;
  listBody.textContent = "";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const gameCell = document.createElement("td");
    gameCell.textContent = row.name;
    const minutesCell = document.createElement("td");
    minutesCell.textContent = `${(row.playSeconds / 60).toFixed(1).replace(/\.0$/, "")}m`;
    const launchesCell = document.createElement("td");
    launchesCell.textContent = String(row.launches);
    const lastCell = document.createElement("td");
    lastCell.textContent = formatLastPlayed(row.lastPlayedAt);
    tr.append(gameCell, minutesCell, launchesCell, lastCell);
    listBody.appendChild(tr);
  });
};

const saveProfileStats = (shouldRender = false) => {
  const cutoff = Date.now() - 180 * 24 * 60 * 60 * 1000;
  Object.keys(profileStats.dailyPlay || {}).forEach((dayKey) => {
    const stamp = new Date(`${dayKey}T00:00:00`).getTime();
    if (Number.isFinite(stamp) && stamp < cutoff) {
      delete profileStats.dailyPlay[dayKey];
    }
  });
  localStorage.setItem(PROFILE_STATS_KEY, JSON.stringify(profileStats));
  if (shouldRender || pageMode === "profile") renderProfilePage();
  updateLockScreenStats();
};

const getTrackedGameContext = () => {
  if (pageMode === "play") {
    if (activeGame?.id) return { id: activeGame.id, name: activeGame.name || activeGame.id };
    if (activeGameId) return { id: activeGameId, name: activeGameId };
    return null;
  }
  if (pageMode === "custom-game") {
    const customId = queryParams.get("game") || queryGameId || "";
    if (!customId) return null;
    const customEntry = loadCustomGames().find((entry) => entry.id === customId);
    const knownGame = games.find((entry) => entry.id === customId);
    const fallbackTitle = queryParams.get("title") || customId;
    return { id: customId, name: customEntry?.name || knownGame?.name || fallbackTitle };
  }
  return null;
};

const registerTrackedGameLaunch = (gameId, gameName) => {
  const entry = ensureProfileStatEntry(gameId, gameName);
  if (!entry) return;
  entry.launches += 1;
  entry.lastPlayedAt = Date.now();
  profileStats.totalLaunches += 1;
  saveProfileStats();
};

const trackProfilePlaytime = (deltaSeconds) => {
  const game = getTrackedGameContext();
  if (!game) return;
  if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return;
  const entry = ensureProfileStatEntry(game.id, game.name);
  if (!entry) return;
  profilePlayCarrySeconds += deltaSeconds;
  const wholeSeconds = Math.floor(profilePlayCarrySeconds);
  if (wholeSeconds <= 0) return;
  profilePlayCarrySeconds -= wholeSeconds;
  const todayKey = getDateKey(new Date());
  const previousToday = Math.max(0, Math.floor(Number(profileStats.dailyPlay?.[todayKey]) || 0));
  profileStats.dailyPlay[todayKey] = previousToday + wholeSeconds;
  entry.playSeconds += wholeSeconds;
  entry.lastPlayedAt = Date.now();
  profileStats.totalPlaySeconds += wholeSeconds;
  profileUnsavedSeconds += wholeSeconds;
  if (profileUnsavedSeconds >= 5) {
    profileUnsavedSeconds = 0;
    saveProfileStats();
  } else if (pageMode === "profile") {
    renderProfilePage();
  }
};

setInterval(() => {
  if (profileUnsavedSeconds <= 0) return;
  profileUnsavedSeconds = 0;
  saveProfileStats();
}, 15000);

window.addEventListener("beforeunload", () => {
  if (profileUnsavedSeconds <= 0) return;
  profileUnsavedSeconds = 0;
  saveProfileStats(false);
});

// Lock screen state is local-only and uses salted SHA-256 pin hashes.
let lockPinHash = localStorage.getItem(LOCK_PIN_HASH_KEY) || "";
let lockPinSalt = localStorage.getItem(LOCK_PIN_SALT_KEY) || "";
let lockPinLength = normalizeLockPinLength(localStorage.getItem(LOCK_PIN_LENGTH_KEY));
let lockRecoveryHash = localStorage.getItem(LOCK_RECOVERY_HASH_KEY) || "";
let lockRecoverySalt = localStorage.getItem(LOCK_RECOVERY_SALT_KEY) || "";
let lockRecoveryHint = String(localStorage.getItem(LOCK_RECOVERY_HINT_KEY) || "")
  .trim()
  .slice(0, 120);
let autoLockEnabled = localStorage.getItem(LOCK_AUTO_ENABLED_KEY) === "1";
let autoLockMinutes = Math.min(
  240,
  Math.max(1, Math.floor(loadNumber(LOCK_AUTO_MINUTES_KEY, DEFAULT_AUTO_LOCK_MINUTES))),
);
if (!localStorage.getItem(LOCK_AUTO_MINUTES_KEY)) {
  localStorage.setItem(LOCK_AUTO_MINUTES_KEY, String(autoLockMinutes));
}
if (!lockPinHash || !lockPinSalt) {
  lockPinHash = "";
  lockPinSalt = "";
  lockPinLength = 0;
  localStorage.removeItem(LOCK_PIN_HASH_KEY);
  localStorage.removeItem(LOCK_PIN_SALT_KEY);
  localStorage.removeItem(LOCK_PIN_LENGTH_KEY);
}
if (!lockRecoveryHash || !lockRecoverySalt) {
  lockRecoveryHash = "";
  lockRecoverySalt = "";
  localStorage.removeItem(LOCK_RECOVERY_HASH_KEY);
  localStorage.removeItem(LOCK_RECOVERY_SALT_KEY);
}
if (lockRecoveryHint) {
  localStorage.setItem(LOCK_RECOVERY_HINT_KEY, lockRecoveryHint);
} else {
  localStorage.removeItem(LOCK_RECOVERY_HINT_KEY);
}

let lockRoot = null;
let lockBootPanel = null;
let lockScreenPanel = null;
let lockRevealSurface = null;
let lockAuthShell = null;
let lockWidgetDock = null;
let lockStatusLabel = null;
let lockPinShell = null;
let lockPinInput = null;
let lockPinDotsContainer = null;
let lockPinDots = [];
let lockPinSubmit = null;
let lockForgotButton = null;
let lockRecoveryPanel = null;
let lockRecoveryHintLabel = null;
let lockRecoveryInput = null;
let lockRecoverySubmit = null;
let lockClockLabel = null;
let lockDateLabel = null;
let lockWelcomeLabel = null;
let lockAvatarLabel = null;
let lockNameLabel = null;
let lockRankLabel = null;
let lockLifetimeLabel = null;
let lockTodayLabel = null;
let lockHintLabel = null;
let lockSetupTipLabel = null;
let lockCapsIndicator = null;
let lockCapsTextLabel = null;
let lockClockTimer = null;
let lockNoPinUnlockTimer = null;
let systemLocked = false;
let lockOwnerOverrideArmed = false;
let lockOwnerTapCount = 0;
let lockOwnerTapTimer = null;
let lockTextFitRaf = 0;
let lockTextFitTimer = 0;

const syncLockCompactAuthMode = () => {
  if (!lockScreenPanel) return;
  const authOpen = lockScreenPanel.classList.contains("auth-open");
  const viewportHeight = Math.max(0, window.innerHeight || 0);
  const viewportWidth = Math.max(0, window.innerWidth || 0);
  const compactByViewport = viewportHeight <= 760 || viewportWidth <= 980;
  let authOverflow = false;
  if (authOpen && lockAuthShell instanceof HTMLElement && viewportHeight > 0) {
    const rect = lockAuthShell.getBoundingClientRect();
    authOverflow = rect.bottom > viewportHeight - 4 || rect.top < -2;
  }
  lockScreenPanel.classList.toggle("compact-auth", authOpen && (compactByViewport || authOverflow));
};

const hasLockPin = () => Boolean(lockPinHash && lockPinSalt);
const hasRecoveryPassword = () => Boolean(lockRecoveryHash && lockRecoverySalt);
const getLockExpectedPinLength = () => {
  if (lockOwnerOverrideArmed) return LOCK_OWNER_OVERRIDE_LENGTH;
  if (hasLockPin() && lockPinLength) return lockPinLength;
  return 6;
};
const isLockSessionUnlocked = () => sessionStorage.getItem(LOCK_SESSION_UNLOCKED_KEY) === "1";
const setLockSessionUnlocked = () => sessionStorage.setItem(LOCK_SESSION_UNLOCKED_KEY, "1");
const clearLockSessionUnlocked = () => sessionStorage.removeItem(LOCK_SESSION_UNLOCKED_KEY);
const LOCK_WIDGET_IDS = ["economy", "streak", "today", "lifetime", "savings", "session", "favorites"];
const LOCK_WIDGET_LABEL_KEYS = {
  economy: "lock_widget_economy",
  streak: "lock_widget_streak",
  today: "lock_widget_today",
  lifetime: "lock_widget_lifetime",
  savings: "lock_widget_savings",
  session: "lock_widget_session",
  favorites: "lock_widget_favorites",
};

const normalizeLockWidgets = (value) => {
  const source = Array.isArray(value) ? value : DEFAULT_LOCK_WIDGETS;
  const normalized = [];
  source.forEach((entry) => {
    const id = String(entry || "").toLowerCase();
    if (!LOCK_WIDGET_IDS.includes(id)) return;
    if (normalized.includes(id)) return;
    normalized.push(id);
  });
  return normalized.length ? normalized : [...DEFAULT_LOCK_WIDGETS];
};

const loadLockWidgets = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(LOCK_WIDGETS_KEY) || "null");
    return normalizeLockWidgets(parsed);
  } catch {
    return [...DEFAULT_LOCK_WIDGETS];
  }
};

const saveLockWidgets = (list) => {
  const normalized = normalizeLockWidgets(list);
  localStorage.setItem(LOCK_WIDGETS_KEY, JSON.stringify(normalized));
  return normalized;
};

let lockWidgets = loadLockWidgets();

const bytesToBase64 = (bytes) => {
  let binary = "";
  bytes.forEach((value) => {
    binary += String.fromCharCode(value);
  });
  return btoa(binary);
};

const hashLockPin = async (pin, salt) => {
  const safePin = String(pin || "");
  const safeSalt = String(salt || "");
  const payload = new TextEncoder().encode(`${safeSalt}:${safePin}`);
  const digest = await crypto.subtle.digest("SHA-256", payload);
  return bytesToBase64(new Uint8Array(digest));
};

const getLockDisplayName = () => {
  const explicitName = (localStorage.getItem(USERNAME_KEY) || "").trim();
  const rememberedName = (localStorage.getItem(LOCK_LAST_ACTIVE_USER_KEY) || "").trim();
  return explicitName || rememberedName || t("player_label");
};

const getLockAvatarText = (name = getLockDisplayName()) => {
  const icon = String(activeCosmetics?.icon || "").trim();
  if (icon) return icon.slice(0, 2);
  const token = String(name || "")
    .replace(/\s+/g, "")
    .slice(0, 1)
    .toUpperCase();
  return token || "P";
};

const fitLockTextNode = (element, minPx) => {
  if (!(element instanceof HTMLElement)) return;
  element.style.removeProperty("font-size");
  const availableWidth = element.clientWidth;
  if (!availableWidth) return;
  let fontSize = Number.parseFloat(window.getComputedStyle(element).fontSize);
  if (!Number.isFinite(fontSize) || fontSize <= 0) return;
  const minSize = Math.max(10, Number(minPx) || 10);
  let guard = 0;
  while (element.scrollWidth > element.clientWidth + 1 && fontSize > minSize && guard < 80) {
    fontSize -= 0.5;
    element.style.fontSize = `${fontSize}px`;
    guard += 1;
  }
};

const fitLockText = () => {
  fitLockTextNode(lockNameLabel, 12);
};

const queueLockTextFit = () => {
  if (lockTextFitRaf) {
    window.cancelAnimationFrame(lockTextFitRaf);
    lockTextFitRaf = 0;
  }
  if (lockTextFitTimer) {
    window.clearTimeout(lockTextFitTimer);
    lockTextFitTimer = 0;
  }
  lockTextFitRaf = window.requestAnimationFrame(() => {
    fitLockText();
    lockTextFitRaf = 0;
  });
  lockTextFitTimer = window.setTimeout(() => {
    fitLockText();
    lockTextFitTimer = 0;
  }, 260);
};

const applyLockThemeOverrides = (themeChoice) => {
  if (!lockRoot) return;
  const theme = enforceThemeChoice(themeChoice || "default");
  const useBasePalette = theme === "default" || theme === "dark";
  if (!useBasePalette) {
    lockRoot.style.removeProperty("--lock-bg");
    lockRoot.style.removeProperty("--lock-bg-deep");
    lockRoot.style.removeProperty("--lock-accent");
    lockRoot.style.removeProperty("--lock-accent-2");
    return;
  }
  // Keep lock screen visually aligned to true default/dark palette.
  lockRoot.style.setProperty("--lock-bg", "#050713");
  lockRoot.style.setProperty("--lock-bg-deep", "#02040b");
  lockRoot.style.setProperty("--lock-accent", "#38bdf8");
  lockRoot.style.setProperty("--lock-accent-2", "#4f46e5");
};

const updateLockClock = () => {
  if (!lockClockLabel || !lockDateLabel) return;
  const locale =
    currentLang === "ar-lev" ? "ar-LB" : currentLang === "en" ? "en-US" : currentLang;
  const now = new Date();
  const nextClockValue = now.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const nextDateValue = now.toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  if (lockClockLabel.textContent !== nextClockValue) {
    lockClockLabel.classList.remove("is-changing");
    void lockClockLabel.offsetWidth;
    lockClockLabel.classList.add("is-changing");
    lockClockLabel.textContent = nextClockValue;
  }
  if (lockDateLabel.textContent !== nextDateValue) {
    lockDateLabel.classList.remove("is-changing");
    void lockDateLabel.offsetWidth;
    lockDateLabel.classList.add("is-changing");
    lockDateLabel.textContent = nextDateValue;
  }
};

const getLockWidgetValue = (id) => {
  if (id === "economy") {
    return `TM$ ${tmDollars.toLocaleString()} · XP ${xpTotal.toLocaleString()}`;
  }
  if (id === "streak") {
    const dayLabel = streakCount === 1 ? t("lock_day_singular") : t("lock_day_plural");
    return t("lock_widget_streak_value", { count: streakCount, day_label: dayLabel });
  }
  if (id === "today") {
    return formatDurationCompact(getTodayPlaySeconds());
  }
  if (id === "lifetime") {
    return formatDurationCompact(profileStats.totalPlaySeconds);
  }
  if (id === "savings") {
    const perMinute = savingsBalance * SAVINGS_RATE_PER_MIN;
    return t("lock_widget_savings_value", {
      balance: Math.floor(savingsBalance).toLocaleString(),
      rate: perMinute.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    });
  }
  if (id === "session") {
    const sessionSecondsRaw = Math.max(0, Math.floor(Number(localStorage.getItem("sessionTime")) || 0));
    return formatDurationCompact(sessionSecondsRaw);
  }
  if (id === "favorites") {
    return t("lock_widget_favorites_value", { count: favorites.size });
  }
  return "";
};

const renderLockWidgetDock = () => {
  if (!lockWidgetDock) return;
  const cards = normalizeLockWidgets(lockWidgets).slice(0, 6);
  lockWidgetDock.innerHTML = cards
    .map((id) => {
      const label = t(LOCK_WIDGET_LABEL_KEYS[id] || id);
      const value = getLockWidgetValue(id);
      return `
        <article class="system-lock-widget" data-widget-id="${id}">
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `;
    })
    .join("");
};

const ensureLockPinDotSlots = (count = getLockExpectedPinLength()) => {
  if (!lockPinDotsContainer) return;
  const slotCount = Math.max(1, Math.floor(Number(count) || 0));
  if (lockPinDots.length === slotCount) return;
  lockPinDotsContainer.innerHTML = Array.from(
    { length: slotCount },
    () => '<span class="system-lock-pin-dot"></span>',
  ).join("");
  lockPinDots = [...lockPinDotsContainer.querySelectorAll(".system-lock-pin-dot")];
};

const syncLockPinDots = ({ animate = true } = {}) => {
  if (!lockPinDotsContainer) return;
  const expectedLength = Math.max(1, Number(getLockExpectedPinLength()));
  const configuredMax = Math.max(expectedLength, Number(lockPinInput?.maxLength || expectedLength));
  const enteredLength = Math.max(0, Number(lockPinInput?.value?.length || 0));
  const limit = lockOwnerOverrideArmed
    ? configuredMax
    : Math.max(expectedLength, Math.min(configuredMax, enteredLength || expectedLength));
  ensureLockPinDotSlots(limit);
  if (!lockPinDots.length) return;
  const pinLength = Math.max(0, Math.min(limit, Number(lockPinInput?.value?.length || 0)));
  if (lockPinShell) {
    lockPinShell.classList.toggle("is-empty", pinLength === 0);
  }
  lockPinDots.forEach((dot, index) => {
    const shouldBeActive = index < pinLength;
    const wasActive = dot.classList.contains("active");
    dot.classList.toggle("active", shouldBeActive);
    if (shouldBeActive && !wasActive && animate) {
      dot.classList.remove("popping");
      void dot.offsetWidth;
      dot.classList.add("popping");
    }
  });
};

const updateLockCapsIndicator = (event = null) => {
  if (!lockCapsIndicator) return;
  const capsOn = Boolean(event?.getModifierState?.("CapsLock"));
  lockCapsIndicator.hidden = !capsOn;
  lockCapsIndicator.classList.toggle("active", capsOn);
};

const focusLockPinInput = () => {
  if (!hasLockPin()) return;
  const target =
    lockRecoveryPanel?.classList.contains("show") && lockRecoveryInput
      ? lockRecoveryInput
      : lockPinInput;
  target?.focus({ preventScroll: true });
};

const clearLockPinInput = ({ preserveStatus = false } = {}) => {
  if (lockPinInput) lockPinInput.value = "";
  if (lockPinShell) lockPinShell.classList.remove("error-flash");
  syncLockPinDots({ animate: false });
  if (!preserveStatus) {
    setLockStatus("");
  }
};

const triggerLockPinError = () => {
  lockScreenPanel?.classList.remove("error-pulse");
  void lockScreenPanel?.offsetWidth;
  lockScreenPanel?.classList.add("error-pulse");
  lockPinShell?.classList.remove("error-flash");
  void lockPinShell?.offsetWidth;
  lockPinShell?.classList.add("error-flash");
  window.setTimeout(() => {
    lockPinShell?.classList.remove("error-flash");
  }, 400);
  clearLockPinInput({ preserveStatus: true });
  focusLockPinInput();
};

const updateLockScreenStats = () => {
  if (!lockRoot) return;
  const missingPin = !hasLockPin();
  const recoveryEnabled = hasRecoveryPassword();
  const displayName = getLockDisplayName();
  localStorage.setItem(LOCK_LAST_ACTIVE_USER_KEY, displayName);
  if (lockWelcomeLabel) lockWelcomeLabel.textContent = `${t("welcome")}, ${displayName}`;
  if (lockNameLabel) lockNameLabel.textContent = displayName;
  if (lockAvatarLabel) lockAvatarLabel.textContent = getLockAvatarText(displayName);
  if (lockRankLabel) lockRankLabel.textContent = currentRank;
  if (lockLifetimeLabel) lockLifetimeLabel.textContent = formatDurationCompact(profileStats.totalPlaySeconds);
  if (lockTodayLabel) lockTodayLabel.textContent = formatDurationCompact(getTodayPlaySeconds());
  if (lockHintLabel) {
    lockHintLabel.textContent = missingPin
      ? t("lock_hint_password_off")
      : t("lock_hint_enter_pin");
  }
  if (lockSetupTipLabel) {
    lockSetupTipLabel.textContent = missingPin ? t("lock_setup_tip") : "";
    lockSetupTipLabel.style.display = missingPin ? "block" : "none";
  }
  if (lockForgotButton) {
    lockForgotButton.style.display = missingPin ? "none" : "inline-flex";
  }
  if (lockRecoveryHintLabel) {
    if (missingPin) {
      lockRecoveryHintLabel.textContent = "";
    } else if (recoveryEnabled) {
      const hintText = lockRecoveryHint
        ? t("lock_recovery_hint_with_value", { hint: lockRecoveryHint })
        : t("lock_recovery_enabled_no_hint");
      lockRecoveryHintLabel.textContent = hintText;
    } else {
      lockRecoveryHintLabel.textContent = t("lock_recovery_not_set");
    }
  }
  if (lockRecoveryPanel) {
    lockRecoveryPanel.classList.toggle("unavailable", !recoveryEnabled);
  }
  if (lockPinSubmit) lockPinSubmit.textContent = missingPin ? t("lock_pin_submit_continue") : t("lock_pin_submit_unlock");
  renderLockWidgetDock();
  queueLockTextFit();
};

const setLockStatus = (message, isError = false) => {
  if (!lockStatusLabel) return;
  lockStatusLabel.textContent = message || "";
  lockStatusLabel.classList.toggle("is-error", Boolean(isError));
};

const updateLockPinInputMode = () => {
  if (!lockPinInput) return;
  if (lockOwnerOverrideArmed) {
    lockPinInput.maxLength = LOCK_OWNER_OVERRIDE_LENGTH;
    lockPinInput.minLength = LOCK_OWNER_OVERRIDE_LENGTH;
    lockPinInput.placeholder = t("lock_owner_code_placeholder");
    lockPinInput.setAttribute("aria-label", t("lock_owner_code_placeholder"));
    lockPinInput.setAttribute("inputmode", "text");
    lockPinInput.removeAttribute("pattern");
  } else {
    const expectedPinLength = hasLockPin() && lockPinLength ? lockPinLength : 6;
    lockPinInput.maxLength = Math.max(expectedPinLength, LOCK_OWNER_OVERRIDE_LENGTH);
    lockPinInput.minLength = hasLockPin() && lockPinLength ? lockPinLength : 4;
    lockPinInput.placeholder = t("lock_pin_placeholder");
    lockPinInput.setAttribute("aria-label", t("lock_pin_aria"));
    lockPinInput.setAttribute("inputmode", "numeric");
    lockPinInput.setAttribute("pattern", "[0-9]*");
  }
  const maxLength = Math.max(0, Number(lockPinInput.maxLength || 6));
  if (lockPinInput.value.length > maxLength) {
    lockPinInput.value = lockPinInput.value.slice(0, maxLength);
  }
  syncLockPinDots({ animate: false });
};

const applyLockTranslations = () => {
  const lockBootText = document.getElementById("lock-boot-text");
  if (lockBootText) lockBootText.textContent = t("lock_boot_initializing");
  if (lockRevealSurface) lockRevealSurface.setAttribute("aria-label", t("lock_wallpaper_open_aria"));
  if (lockForgotButton) {
    const recoveryModeActive = Boolean(lockScreenPanel?.classList.contains("recovery-mode"));
    lockForgotButton.textContent = recoveryModeActive ? t("lock_recovery_back_to_pin") : t("lock_forgot_password");
  }
  if (lockRecoveryInput) {
    lockRecoveryInput.setAttribute("placeholder", t("lock_recovery_placeholder"));
    lockRecoveryInput.setAttribute("aria-label", t("lock_recovery_aria"));
  }
  if (lockRecoverySubmit) lockRecoverySubmit.textContent = t("lock_recovery_button");
  if (lockCapsTextLabel) lockCapsTextLabel.textContent = t("lock_caps_on");
  updateLockPinInputMode();
  updateLockScreenStats();
  updateLockClock();
  syncLockPinDots({ animate: false });
  renderLockWidgetDock();
};

const resetOwnerOverrideState = () => {
  lockOwnerOverrideArmed = false;
  lockOwnerTapCount = 0;
  if (lockOwnerTapTimer) {
    window.clearTimeout(lockOwnerTapTimer);
    lockOwnerTapTimer = null;
  }
  updateLockPinInputMode();
};

const openLockScreen = ({ withBoot = false } = {}) => {
  if (!lockRoot || !lockScreenPanel || !lockBootPanel) return;
  if (lockNoPinUnlockTimer) {
    window.clearTimeout(lockNoPinUnlockTimer);
    lockNoPinUnlockTimer = null;
  }
  const activeThemeChoice = enforceThemeChoice(localStorage.getItem(THEME_KEY) || "default");
  const activeAccentChoice = enforceAccentChoice(localStorage.getItem(ACCENT_KEY) || "neon");
  applyTheme(activeThemeChoice);
  applyAccent(activeAccentChoice);
  applyLockThemeOverrides(activeThemeChoice);
  systemLocked = true;
  resetOwnerOverrideState();
  document.querySelector(".xp-popup")?.classList.remove("active");
  document.body.classList.add("system-locked");
  lockRoot.classList.remove("hidden", "unlock-success");
  lockRoot.setAttribute("aria-hidden", "false");
  lockRoot.classList.toggle("booting", withBoot);
  lockRoot.classList.remove("unlocking");
  lockScreenPanel.classList.remove("error-pulse", "success-pulse");
  lockScreenPanel.classList.remove("auth-open", "recovery-mode");
  lockRecoveryPanel?.classList.remove("show");
  if (lockForgotButton) lockForgotButton.textContent = t("lock_forgot_password");
  clearLockPinInput();
  if (lockRecoveryInput) lockRecoveryInput.value = "";
  updateLockCapsIndicator();
  const activatePanel = () => {
    if (!systemLocked) return;
    lockBootPanel.classList.remove("active");
    lockScreenPanel.classList.add("active");
    updateLockScreenStats();
    syncLockCompactAuthMode();
    lockRevealSurface?.focus({ preventScroll: true });
  };
  if (withBoot) {
    lockBootPanel.classList.add("active");
    lockScreenPanel.classList.remove("active");
    window.setTimeout(() => {
      activatePanel();
    }, LOCK_BOOT_DELAY_MS);
  } else {
    activatePanel();
  }
  updateLockClock();
  if (lockClockTimer) window.clearInterval(lockClockTimer);
  lockClockTimer = window.setInterval(updateLockClock, 1000);
  setLockStatus("");
  syncLockCompactAuthMode();
};

const closeLockScreen = () => {
  if (!lockRoot || !lockScreenPanel) return;
  resetOwnerOverrideState();
  if (lockNoPinUnlockTimer) {
    window.clearTimeout(lockNoPinUnlockTimer);
    lockNoPinUnlockTimer = null;
  }
  systemLocked = false;
  setLockSessionUnlocked();
  lastInteraction = Date.now();
  localStorage.setItem(LOCK_LAST_ACTIVE_USER_KEY, getLockDisplayName());
  document.body.classList.remove("system-locked");
  lockScreenPanel.classList.remove("error-pulse", "auth-open", "recovery-mode");
  lockScreenPanel.classList.remove("compact-auth");
  lockRecoveryPanel?.classList.remove("show");
  lockScreenPanel.classList.add("success-pulse");
  lockRoot.classList.add("unlocking", "unlock-success");
  window.setTimeout(() => {
    lockRoot?.classList.add("hidden");
    lockRoot?.setAttribute("aria-hidden", "true");
    lockRoot?.classList.remove("unlocking");
    lockScreenPanel?.classList.remove("success-pulse");
  }, 420);
  if (lockClockTimer) {
    window.clearInterval(lockClockTimer);
    lockClockTimer = null;
  }
};

const isHomeScreenRoute = () => {
  const path = String(window.location.pathname || "").toLowerCase();
  return !path || path === "/" || path.endsWith("/") || path.endsWith("/index.html");
};

const lockSiteNow = (reason = "manual") => {
  if (systemLocked) return;
  clearLockSessionUnlocked();
  saveProfileStats(false);
  openLockScreen({ withBoot: reason === "boot" });
};

const unlockToHomeWithoutPassword = () => {
  if (!systemLocked) return;
  if (lockNoPinUnlockTimer) return;
  lockScreenPanel?.classList.remove("error-pulse", "auth-open", "recovery-mode");
  lockRecoveryPanel?.classList.remove("show");
  clearLockPinInput();
  setLockStatus("");
  lockNoPinUnlockTimer = window.setTimeout(() => {
    lockNoPinUnlockTimer = null;
    if (!systemLocked) return;
    closeLockScreen();
    if (!isHomeScreenRoute()) {
      window.location.replace("index.html");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 180);
};


const updateAutoLockSettings = (enabled, minutes = autoLockMinutes) => {
  autoLockEnabled = Boolean(enabled);
  autoLockMinutes = Math.min(240, Math.max(1, Math.floor(Number(minutes) || DEFAULT_AUTO_LOCK_MINUTES)));
  localStorage.setItem(LOCK_AUTO_ENABLED_KEY, autoLockEnabled ? "1" : "0");
  localStorage.setItem(LOCK_AUTO_MINUTES_KEY, String(autoLockMinutes));
};

const shouldAutoLock = (lastActiveAt) => {
  if (!autoLockEnabled || systemLocked) return false;
  const elapsed = Date.now() - lastActiveAt;
  return elapsed >= autoLockMinutes * 60000;
};

const saveLockPin = async (pin) => {
  if (!window.crypto?.subtle || !window.crypto?.getRandomValues) {
    throw new Error("Web Crypto API unavailable.");
  }
  const safePin = String(pin || "");
  const saltBytes = window.crypto.getRandomValues(new Uint8Array(16));
  const salt = bytesToBase64(saltBytes);
  const hash = await hashLockPin(safePin, salt);
  lockPinHash = hash;
  lockPinSalt = salt;
  lockPinLength = normalizeLockPinLength(safePin.length);
  localStorage.setItem(LOCK_PIN_HASH_KEY, hash);
  localStorage.setItem(LOCK_PIN_SALT_KEY, salt);
  if (lockPinLength) {
    localStorage.setItem(LOCK_PIN_LENGTH_KEY, String(lockPinLength));
  } else {
    localStorage.removeItem(LOCK_PIN_LENGTH_KEY);
  }
  updateLockPinInputMode();
  updateLockScreenStats();
};

const saveRecoveryPassword = async (password, hint = "") => {
  if (!window.crypto?.subtle || !window.crypto?.getRandomValues) {
    throw new Error("Web Crypto API unavailable.");
  }
  const safePassword = String(password || "");
  const saltBytes = window.crypto.getRandomValues(new Uint8Array(16));
  const salt = bytesToBase64(saltBytes);
  const hash = await hashLockPin(safePassword, salt);
  lockRecoveryHash = hash;
  lockRecoverySalt = salt;
  lockRecoveryHint = String(hint || "").trim().slice(0, 120);
  localStorage.setItem(LOCK_RECOVERY_HASH_KEY, hash);
  localStorage.setItem(LOCK_RECOVERY_SALT_KEY, salt);
  if (lockRecoveryHint) {
    localStorage.setItem(LOCK_RECOVERY_HINT_KEY, lockRecoveryHint);
  } else {
    localStorage.removeItem(LOCK_RECOVERY_HINT_KEY);
  }
  updateLockScreenStats();
};

const initLockScreenUi = () => {
  if (lockRoot) return;
  const root = document.createElement("div");
  root.className = "system-lock-root hidden";
  root.id = "system-lock-root";
  root.setAttribute("aria-hidden", "true");
  root.innerHTML = `
    <section class="system-boot-panel" id="system-boot-panel" aria-live="polite">
      <div class="system-boot-card">
        <div class="system-boot-logo">TM Arcade OS</div>
        <p id="lock-boot-text">${t("lock_boot_initializing")}</p>
      </div>
    </section>
    <section class="system-lock-panel" id="system-lock-panel" aria-live="polite">
      <div class="system-lock-wallpaper" id="lock-wallpaper" tabindex="0" aria-label="${t("lock_wallpaper_open_aria")}">
        <div class="system-lock-layout">
          <div class="system-lock-top">
            <div class="system-lock-clock" id="lock-clock">00:00:00</div>
            <div class="system-lock-date" id="lock-date"></div>
            <p class="system-lock-welcome" id="lock-welcome"></p>
            <div class="system-lock-widget-dock" id="lock-widget-dock" aria-live="polite"></div>
          </div>
          <div class="system-lock-middle" id="lock-auth-shell">
            <div class="system-lock-card">
              <div class="system-lock-avatar" id="lock-avatar">P</div>
              <strong class="system-lock-user" id="lock-user">Player</strong>
              <p class="system-lock-hint" id="lock-hint"></p>
              <p class="system-lock-setup-tip" id="lock-setup-tip" style="display:none;"></p>
              <form class="system-lock-form" id="lock-pin-form" autocomplete="off">
                <div class="system-lock-pin-shell is-empty" id="lock-pin-shell">
                  <input
                    class="system-lock-input"
                    id="lock-pin-input"
                    type="password"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    minlength="4"
                    maxlength="6"
                    placeholder="${t("lock_pin_placeholder")}"
                    aria-label="${t("lock_pin_aria")}"
                    autocomplete="off"
                  />
                  <div class="system-lock-pin-dots" id="lock-pin-dots" aria-hidden="true">
                    <span class="system-lock-pin-dot"></span>
                    <span class="system-lock-pin-dot"></span>
                    <span class="system-lock-pin-dot"></span>
                    <span class="system-lock-pin-dot"></span>
                    <span class="system-lock-pin-dot"></span>
                    <span class="system-lock-pin-dot"></span>
                  </div>
                </div>
                <button class="pill small" type="submit" id="lock-pin-submit">${t("lock_pin_submit_unlock")}</button>
              </form>
              <div class="system-lock-caps-indicator" id="lock-caps-indicator" hidden>
                <span class="system-lock-caps-icon" aria-hidden="true">⇪</span>
                <span id="lock-caps-text">${t("lock_caps_on")}</span>
              </div>
              <div class="system-lock-recovery-tools">
                <button class="pill ghost small system-lock-forgot-btn" type="button" id="lock-forgot-btn">
                  ${t("lock_forgot_password")}
                </button>
              </div>
              <div class="system-lock-recovery-panel" id="lock-recovery-panel">
                <p class="system-lock-recovery-hint" id="lock-recovery-hint"></p>
                <div class="system-lock-recovery-row">
                  <input
                    class="system-lock-input"
                    id="lock-recovery-input"
                    type="password"
                    maxlength="32"
                    placeholder="${t("lock_recovery_placeholder")}"
                    aria-label="${t("lock_recovery_aria")}"
                  />
                  <button class="pill small" type="button" id="lock-recovery-submit">${t("lock_recovery_button")}</button>
                </div>
              </div>
              <div class="system-lock-status" id="lock-status"></div>
            </div>
          </div>
          <div class="system-lock-bottom">
            <div class="system-lock-credit-bubble">Made By Ahmad Abu Sammour</div>
          </div>
        </div>
      </div>
    </section>
  `;
  document.body.appendChild(root);

  lockRoot = root;
  lockBootPanel = root.querySelector("#system-boot-panel");
  lockScreenPanel = root.querySelector("#system-lock-panel");
  lockRevealSurface = root.querySelector("#lock-wallpaper");
  lockAuthShell = root.querySelector("#lock-auth-shell");
  lockWidgetDock = root.querySelector("#lock-widget-dock");
  lockStatusLabel = root.querySelector("#lock-status");
  lockPinShell = root.querySelector("#lock-pin-shell");
  lockPinInput = root.querySelector("#lock-pin-input");
  lockPinDotsContainer = root.querySelector("#lock-pin-dots");
  lockPinDots = [...root.querySelectorAll(".system-lock-pin-dot")];
  lockPinSubmit = root.querySelector("#lock-pin-submit");
  lockForgotButton = root.querySelector("#lock-forgot-btn");
  lockRecoveryPanel = root.querySelector("#lock-recovery-panel");
  lockRecoveryHintLabel = root.querySelector("#lock-recovery-hint");
  lockRecoveryInput = root.querySelector("#lock-recovery-input");
  lockRecoverySubmit = root.querySelector("#lock-recovery-submit");
  lockClockLabel = root.querySelector("#lock-clock");
  lockDateLabel = root.querySelector("#lock-date");
  lockWelcomeLabel = root.querySelector("#lock-welcome");
  lockAvatarLabel = root.querySelector("#lock-avatar");
  lockNameLabel = root.querySelector("#lock-user");
  lockRankLabel = root.querySelector("#lock-rank");
  lockLifetimeLabel = root.querySelector("#lock-lifetime");
  lockTodayLabel = root.querySelector("#lock-today");
  lockHintLabel = root.querySelector("#lock-hint");
  lockSetupTipLabel = root.querySelector("#lock-setup-tip");
  lockCapsIndicator = root.querySelector("#lock-caps-indicator");
  lockCapsTextLabel = root.querySelector("#lock-caps-text");
  const pinForm = root.querySelector("#lock-pin-form");
  const isRecoveryMode = () => Boolean(lockScreenPanel?.classList.contains("recovery-mode"));
  const updateForgotButtonLabel = () => {
    if (!lockForgotButton) return;
    lockForgotButton.textContent = isRecoveryMode() ? t("lock_recovery_back_to_pin") : t("lock_forgot_password");
  };
  const setRecoveryMode = (enabled, { focus = true, clearStatus = true } = {}) => {
    const active = Boolean(enabled);
    lockScreenPanel?.classList.toggle("recovery-mode", active);
    lockRecoveryPanel?.classList.toggle("show", active);
    if (lockRecoveryInput) lockRecoveryInput.value = "";
    if (clearStatus) setLockStatus("");
    updateForgotButtonLabel();
    updateLockCapsIndicator();
    if (focus) {
      if (active) {
        lockRecoveryInput?.focus({ preventScroll: true });
      } else {
        focusLockPinInput();
      }
    }
  };
  const revealAuthPanel = () => {
    if (!systemLocked) return;
    if (!hasLockPin()) {
      unlockToHomeWithoutPassword();
      return;
    }
    lockScreenPanel?.classList.add("auth-open");
    queueLockTextFit();
    syncLockCompactAuthMode();
    setRecoveryMode(false, { focus: false, clearStatus: false });
    focusLockPinInput();
  };
  const hideAuthPanel = ({ clear = true } = {}) => {
    lockScreenPanel?.classList.remove("auth-open");
    queueLockTextFit();
    syncLockCompactAuthMode();
    setRecoveryMode(false, { focus: false, clearStatus: false });
    if (clear) clearLockPinInput();
    setLockStatus("");
    updateLockCapsIndicator();
    lockRevealSurface?.focus({ preventScroll: true });
  };
  updateForgotButtonLabel();

  const registerOwnerClockTap = () => {
    if (!systemLocked) return;
    lockOwnerTapCount += 1;
    if (lockOwnerTapTimer) window.clearTimeout(lockOwnerTapTimer);
    lockOwnerTapTimer = window.setTimeout(() => {
      lockOwnerTapCount = 0;
      lockOwnerTapTimer = null;
    }, LOCK_OWNER_OVERRIDE_TAP_WINDOW_MS);
    if (lockOwnerTapCount < LOCK_OWNER_OVERRIDE_TAPS) return;
    lockOwnerTapCount = 0;
    if (lockOwnerTapTimer) {
      window.clearTimeout(lockOwnerTapTimer);
      lockOwnerTapTimer = null;
    }
    lockOwnerOverrideArmed = true;
    updateLockPinInputMode();
    revealAuthPanel();
    clearLockPinInput();
    focusLockPinInput();
    setLockStatus(t("lock_owner_override_ready"));
  };

  lockAuthShell?.addEventListener("pointerdown", (event) => {
    event.stopPropagation();
  });
  lockAuthShell?.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  lockRevealSurface?.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("#lock-auth-shell")) return;
    revealAuthPanel();
  });
  lockRevealSurface?.addEventListener("keydown", (event) => {
    if (event.target !== lockRevealSurface) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      revealAuthPanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!systemLocked) return;
    updateLockCapsIndicator(event);
    const authOpen = Boolean(lockScreenPanel?.classList.contains("auth-open"));
    const recoveryMode = isRecoveryMode();
    if (event.key === "Escape") {
      event.preventDefault();
      if (authOpen) {
        if (recoveryMode) {
          setRecoveryMode(false);
        } else {
          resetOwnerOverrideState();
          hideAuthPanel();
        }
      }
      return;
    }
    if (!hasLockPin()) {
      if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(event.key)) {
        return;
      }
      if (event.key.length === 1 || event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        unlockToHomeWithoutPassword();
      }
      return;
    }
    if (!authOpen) {
      if (["Shift", "Control", "Alt", "Meta", "CapsLock", "Tab"].includes(event.key)) return;
      event.preventDefault();
      revealAuthPanel();
      return;
    }
    if (event.key === "Enter" && !recoveryMode && document.activeElement !== lockRecoveryInput) {
      event.preventDefault();
      pinForm?.requestSubmit();
      return;
    }
    if (
      event.key.length === 1 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      document.activeElement !== lockPinInput &&
      document.activeElement !== lockRecoveryInput
    ) {
      if (recoveryMode) {
        lockRecoveryInput?.focus({ preventScroll: true });
      } else {
        focusLockPinInput();
      }
    }
  });
  lockClockLabel?.addEventListener("click", registerOwnerClockTap);

  lockForgotButton?.addEventListener("click", () => {
    if (!systemLocked) return;
    setRecoveryMode(!isRecoveryMode());
  });
  lockPinInput?.addEventListener("focus", (event) => {
    updateLockCapsIndicator(event);
  });
  lockPinInput?.addEventListener("keydown", (event) => {
    updateLockCapsIndicator(event);
  });
  lockPinInput?.addEventListener("keyup", (event) => {
    updateLockCapsIndicator(event);
  });
  lockPinInput?.addEventListener("input", () => {
    if (!lockPinInput) return;
    if (!lockOwnerOverrideArmed) {
      const expectedDigits = Math.max(4, Number(lockPinInput.maxLength || 6));
      const normalized = lockPinInput.value.replace(/\D+/g, "").slice(0, expectedDigits);
      if (lockPinInput.value !== normalized) {
        lockPinInput.value = normalized;
      }
    }
    setLockStatus("");
    syncLockPinDots();
  });
  window.addEventListener("resize", () => {
    if (!systemLocked) return;
    queueLockTextFit();
    syncLockCompactAuthMode();
  });

  const runRecoveryUnlock = async () => {
    if (!systemLocked) return;
    if (!hasRecoveryPassword()) {
      setLockStatus(t("lock_status_recovery_not_set"), true);
      lockScreenPanel?.classList.remove("error-pulse");
      void lockScreenPanel?.offsetWidth;
      lockScreenPanel?.classList.add("error-pulse");
      return;
    }
    const entered = String(lockRecoveryInput?.value || "").trim();
    if (!entered) {
      setLockStatus(t("lock_status_recovery_enter"), true);
      return;
    }
    try {
      const candidateHash = await hashLockPin(entered, lockRecoverySalt);
      if (candidateHash !== lockRecoveryHash) {
        setLockStatus(t("lock_status_recovery_incorrect"), true);
        lockScreenPanel?.classList.remove("error-pulse");
        void lockScreenPanel?.offsetWidth;
        lockScreenPanel?.classList.add("error-pulse");
        if (lockRecoveryInput) lockRecoveryInput.value = "";
        return;
      }
    } catch {
      setLockStatus(t("lock_status_recovery_verify_failed"), true);
      return;
    }
    setLockStatus("");
    closeLockScreen();
  };

  lockRecoverySubmit?.addEventListener("click", () => {
    runRecoveryUnlock();
  });
  lockRecoveryInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    runRecoveryUnlock();
  });

  pinForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!systemLocked) return;
    const enteredPin = String(lockPinInput?.value || "").trim();
    if (enteredPin === LOCK_OWNER_OVERRIDE_CODE) {
      setLockStatus("");
      closeLockScreen();
      return;
    }
    if (lockOwnerOverrideArmed) {
      setLockStatus(t("lock_status_override_incorrect"), true);
      triggerLockPinError();
      return;
    }
    if (hasLockPin()) {
      const expectedPinLength = lockPinLength || 0;
      const hasValidFormat = /^\d{4,6}$/.test(enteredPin);
      if (!hasValidFormat || (expectedPinLength > 0 && enteredPin.length !== expectedPinLength)) {
        setLockStatus(t("lock_status_pin_invalid"), true);
        triggerLockPinError();
        return;
      }
      try {
        const candidateHash = await hashLockPin(enteredPin, lockPinSalt);
        if (candidateHash !== lockPinHash) {
          setLockStatus(t("lock_status_pin_incorrect"), true);
          triggerLockPinError();
          return;
        }
        if (!lockPinLength) {
          lockPinLength = normalizeLockPinLength(enteredPin.length);
          if (lockPinLength) {
            localStorage.setItem(LOCK_PIN_LENGTH_KEY, String(lockPinLength));
            updateLockPinInputMode();
          }
        }
      } catch {
        setLockStatus(t("lock_status_pin_verify_failed"), true);
        triggerLockPinError();
        return;
      }
    }
    setLockStatus("");
    closeLockScreen();
  });

  syncLockPinDots({ animate: false });
  applyLockTranslations();
};

const frame = document.getElementById("game-frame");
const appFrame = document.getElementById("app-frame");
const appOpenExternal = document.getElementById("app-open-external");
const appMissing = document.getElementById("app-missing");
const customGameFrame = document.getElementById("custom-game-frame");
const customGameOpen = document.getElementById("custom-game-open");
const customGameMissing = document.getElementById("custom-game-missing");
const playerTitle = document.getElementById("player-title");
const playerDesc = document.getElementById("player-desc");
const currentNode = document.getElementById("current-node");
const gameCount = document.getElementById("game-count");
const launchRandom = document.getElementById("launch-random");
const fullscreen = document.getElementById("fullscreen");
const exitFullscreen = document.getElementById("exit-fullscreen");
const refresh = document.getElementById("refresh");
const playerShell = document.getElementById("player-shell");
const emergency = document.getElementById("emergency");
const heroTitle = document.getElementById("game-hero-title");
const dailyGameName = document.getElementById("daily-game-name");
const dailyGameDesc = document.getElementById("daily-game-desc");
const dailyGamePlay = document.getElementById("daily-game-play");
const dailyGameReveal = document.getElementById("daily-game-reveal");
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardYou = document.getElementById("leaderboard-you");
const leaderboardTournamentStatusEl = document.getElementById("leaderboard-tournament-status");
const leaderboardTournamentMetaEl = document.getElementById("leaderboard-tournament-meta");
const leaderboardTournamentPrizesEl = document.getElementById("leaderboard-tournament-prizes");
const leaderboardTournamentWinnersEl = document.getElementById("leaderboard-tournament-winners");
const dmThreadButtons = document.getElementById("dm-thread-buttons");
const dmThread = document.getElementById("dm-thread");
const dmStatus = document.getElementById("dm-status");
const dmMessageInput = document.getElementById("dm-message-input");
const dmThreadTitle = document.getElementById("dm-thread-title");
const dmGroupNameInput = document.getElementById("dm-group-name-input");
const dmGroupMemberButtons = document.getElementById("dm-group-member-buttons");
const feedbackStatus = document.getElementById("feedback-status");
const feedbackRefreshButton = document.getElementById("feedback-refresh");
const feedbackUserShell = document.getElementById("feedback-user-shell");
const feedbackAdminShell = document.getElementById("feedback-admin-shell");
const feedbackForm = document.getElementById("feedback-form");
const feedbackNameInput = document.getElementById("feedback-name");
const feedbackEmailInput = document.getElementById("feedback-email");
const feedbackPhoneInput = document.getElementById("feedback-phone");
const feedbackRatingInput = document.getElementById("feedback-rating");
const feedbackRatingButtons = document.getElementById("feedback-rating-buttons");
const feedbackRatingValue = document.getElementById("feedback-rating-value");
const feedbackMessageInput = document.getElementById("feedback-message");
const feedbackHistoryList = document.getElementById("feedback-history-list");
const feedbackAdminStatus = document.getElementById("feedback-admin-status");
const feedbackAdminFilter = document.getElementById("feedback-admin-filter");
const feedbackAdminList = document.getElementById("feedback-admin-list");
const feedbackAdminRefreshButton = document.getElementById("feedback-admin-refresh");
const friendsStatus = document.getElementById("friends-status");
const friendsSearchInput = document.getElementById("friends-search");
const friendsList = document.getElementById("friends-list");
const friendsIncomingList = document.getElementById("friends-incoming-list");
const friendsOutgoingList = document.getElementById("friends-outgoing-list");
const friendsSuggestionsList = document.getElementById("friends-suggestions-list");
const friendsCount = document.getElementById("friends-count");
const friendsIncomingCount = document.getElementById("friends-incoming-count");
const friendsOutgoingCount = document.getElementById("friends-outgoing-count");
const friendsSuggestionsCount = document.getElementById("friends-suggestions-count");
const friendsYouName = document.getElementById("friends-you-name");
const friendsYouXp = document.getElementById("friends-you-xp");
const friendsYouMoney = document.getElementById("friends-you-money");
const friendsYouStreak = document.getElementById("friends-you-streak");
const friendsYouRank = document.getElementById("friends-you-rank");
const friendsYouPresence = document.getElementById("friends-you-presence");
const tmCashStatus = document.getElementById("cash-status");
const tmCashRecipientInput = document.getElementById("cash-recipient");
const tmCashAmountInput = document.getElementById("cash-amount");
const tmCashNoteInput = document.getElementById("cash-note");
const tmCashBalance = document.getElementById("cash-balance");
const tmCashRecipientButtons = document.getElementById("cash-recipient-buttons");
const tmCashTransferList = document.getElementById("cash-transfer-list");
const adminAccountSearchInput = document.getElementById("admin-account-search");
const adminAccountSearchClearButton = document.getElementById("admin-account-search-clear");
const adminLockMinutesInput = document.getElementById("admin-lock-minutes-input");
const adminLockMessageInput = document.getElementById("admin-lock-message-input");
const adminLockUntilUnlockInput = document.getElementById("admin-lock-until-unlock");
const adminScreenTargetInput = document.getElementById("admin-screen-target");
const adminScreenTargetAllInput = document.getElementById("admin-screen-target-all");
const adminScreenLabelInput = document.getElementById("admin-screen-label");
const adminScreenMessageInput = document.getElementById("admin-screen-message");
const adminScreenXpInput = document.getElementById("admin-screen-xp");
const adminScreenMoneyInput = document.getElementById("admin-screen-money");
const adminScreenStreakInput = document.getElementById("admin-screen-streak");
const adminScreenRankInput = document.getElementById("admin-screen-rank");
const adminScreenExpiryInput = document.getElementById("admin-screen-expiry");
const adminScreenSendButton = document.getElementById("admin-screen-send");
const adminXpCodeValueInput = document.getElementById("admin-xp-code-value");
const adminXpCodeAmountInput = document.getElementById("admin-xp-code-amount");
const adminXpCodeExpiryInput = document.getElementById("admin-xp-code-expiry");
const adminXpCodeCreateButton = document.getElementById("admin-xp-code-create");
const adminXpCodeRefreshButton = document.getElementById("admin-xp-code-refresh");
const adminXpCodeRows = document.getElementById("admin-xp-code-rows");

let activeGame = games[0];

if (gameCount) {
  gameCount.textContent =
    pageMode === "popular" || pageMode === "favorites" ? visibleGames.length : games.length;
}

const updateCurrentNodeLabel = () => {
  if (!currentNode || pageMode === "play") return;
  currentNode.textContent =
    pageMode === "popular" || pageMode === "favorites"
      ? t("current_node_favs")
      : t("current_node_all");
};

if (currentNode && pageMode !== "play") {
  updateCurrentNodeLabel();
}

const buildCard = (game, options = {}) => {
  const { showFavorite = true } = options;
  const safeId = game.id || makeGameId();
  const safeName = game.name || "Untitled";
  const isFavorite = favorites.has(safeId);
  const canDrag = pageMode === "popular" || pageMode === "favorites" || pageMode === "all";
  const isCustom = Boolean(game.custom);
  const openLabel = t("open_game", { name: safeName });
  const favoriteLabel = isFavorite ? t("remove_favorite") : t("add_favorite");
  const nodeLabel = isCustom ? "CUSTOM" : t("node_label", { id: safeId.toUpperCase() });
  const href = isCustom ? buildCustomGameHref(game) : buildStandardGameHref(safeId);
  const favoriteButton = showFavorite
    ? `<button class="favorite-toggle${isFavorite ? " active" : ""}" type="button" aria-pressed="${isFavorite}" aria-label="${favoriteLabel}" title="${favoriteLabel}" data-id="${safeId}">★</button>`
    : "";
  const deleteButton = isCustom
    ? `<button class="game-delete" type="button" aria-label="Delete game" data-id="${safeId}">×</button>`
    : "";
  const category = (game.badge || "").toLowerCase();
  const sweatHardTag = getPlaystyle() === "sweat" && isHardGame(game) ? `<span class="card-hard-badge">HARD</span>` : "";
  return `
    <a class="game-card" href="${href}" aria-label="${openLabel}" data-id="${safeId}" data-custom="${isCustom ? "1" : "0"}" data-name="${safeName.toLowerCase()}" data-favorite="${isFavorite ? "1" : "0"}" data-category="${category}" draggable="${canDrag}">
      ${favoriteButton}
      ${deleteButton}
      <h3>${safeName}</h3>
      <p>${game.description || "Custom game"}</p>
      <div class="card-meta">
        <span>${nodeLabel}</span>
        <span class="card-badge">${game.badge}</span>
        ${sweatHardTag}
      </div>
    </a>
  `;
};

const updateSweatHardIndicators = () => {
  const sweatMode = getPlaystyle() === "sweat";
  document.querySelectorAll(".game-card").forEach((card) => {
    if (!(card instanceof HTMLElement)) return;
    const gameId = String(card.dataset.id || "");
    const game = gamesById.get(gameId);
    const hard = Boolean(game && sweatMode && isHardGame(game));
    card.classList.toggle("hard-target", hard);
    const meta = card.querySelector(".card-meta");
    if (!(meta instanceof HTMLElement)) return;
    const existing = meta.querySelector(".card-hard-badge");
    if (hard) {
      if (!existing) {
        const badge = document.createElement("span");
        badge.className = "card-hard-badge";
        badge.textContent = "HARD";
        meta.appendChild(badge);
      }
      return;
    }
    existing?.remove();
  });
};

const renderCards = (list, container, options) => {
  if (!container) return;
  container.innerHTML = list.map((game) => buildCard(game, options)).join("");
  updateSweatHardIndicators();
};

const updateGameCardLabels = () => {
  document.querySelectorAll(".game-card").forEach((card) => {
    const name = card.querySelector("h3")?.textContent?.trim() || "";
    if (name) {
      card.setAttribute("aria-label", t("open_game", { name }));
    }
    const favoriteButton = card.querySelector(".favorite-toggle");
    if (favoriteButton) {
      const isFavorite = favoriteButton.classList.contains("active");
      const favoriteLabel = isFavorite ? t("remove_favorite") : t("add_favorite");
      favoriteButton.setAttribute("aria-label", favoriteLabel);
      favoriteButton.setAttribute("title", favoriteLabel);
    }
    const metaLabel = card.querySelector(".card-meta span");
    const id = card.dataset.id || "";
    if (metaLabel && id) {
      metaLabel.textContent = card.dataset.custom === "1" ? "CUSTOM" : t("node_label", { id: id.toUpperCase() });
    }
  });
};

if (grid) {
  renderCards(visibleGames, grid);
}

const setActive = (game) => {
  activeGame = game;
  if (playerTitle) playerTitle.textContent = game.name;
  if (playerDesc) playerDesc.textContent = game.description;
  if (currentNode && pageMode === "play") {
    currentNode.textContent = game.id.toUpperCase();
  }
  if (heroTitle) heroTitle.textContent = game.name;
  if (frame) {
    const safeUrl = normalizeAppUrl(game.url || "");
    if (!safeUrl) {
      console.warn("Invalid game URL:", game.url);
      return;
    }
    frame.src = safeUrl;
  }
  const targetHref = game.custom ? buildCustomGameHref(game) : buildStandardGameHref(game.id);
  document.querySelectorAll(".game-card").forEach((card) => {
    const href = card.getAttribute("href") || "";
    card.classList.toggle("active", href.includes(targetHref));
  });
  if (pageMode === "play") {
    document.title = t("title_game", { name: game.name });
  }
};

const loadAppViewer = () => {
  if (pageMode !== "app" || !appFrame) return;
  const params = new URLSearchParams(window.location.search);
  const appId = params.get("app");
  const apps = loadCustomApps();
  const app = apps.find((item) => item.id === appId);
  if (!app) {
    if (appMissing) appMissing.classList.remove("hidden");
    appFrame.classList.add("hidden");
    if (appOpenExternal) appOpenExternal.classList.add("hidden");
    document.title = "TM Arcade V2 | App";
    return;
  }
  appFrame.src = app.url;
  document.title = `TM Arcade V2 | ${app.title}`;
  if (appOpenExternal) {
    appOpenExternal.classList.remove("hidden");
    appOpenExternal.addEventListener("click", () => {
      window.open(app.url, "_blank", "noopener");
    });
  }
};

const loadCustomGameViewer = () => {
  if (pageMode !== "custom-game" || !customGameFrame) return;
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get("game");
  const stored = loadCustomGames();
  if (customGameMissing) customGameMissing.classList.add("hidden");
  customGameFrame.classList.remove("hidden");
  customGameFrame.style.display = "block";
  if (customGameOpen) customGameOpen.classList.remove("hidden");
  let entry = stored.find((item) => item.id === gameId);
  if (!entry) {
    const rawTitle = params.get("title") || "";
    const rawUrl = params.get("url") || "";
    const normalizedUrl = normalizeAppUrl(rawUrl);
    let fallbackTitle = rawTitle.trim();
    if (!fallbackTitle && normalizedUrl) {
      try {
        fallbackTitle = new URL(normalizedUrl).hostname;
      } catch (error) {
        fallbackTitle = "";
      }
    }
    if (fallbackTitle && normalizedUrl) {
      entry = { title: fallbackTitle, url: normalizedUrl };
    }
  }
  if (!entry && typeof window.name === "string" && window.name.startsWith("tm-custom-game:")) {
    try {
      const payload = JSON.parse(window.name.replace("tm-custom-game:", ""));
      const normalizedUrl = normalizeAppUrl(payload?.url || "");
      if (payload?.title && normalizedUrl) {
        entry = { title: String(payload.title), url: normalizedUrl };
        window.name = "";
      }
    } catch (error) {
      // Ignore invalid payloads.
    }
  }
  if (!entry) {
    customGameFrame.src = "about:blank";
    document.title = "TM Arcade V2 | Custom Game";
    return;
  }
  customGameFrame.src = entry.url;
  document.title = `TM Arcade V2 | ${entry.title}`;
  if (customGameOpen) {
    customGameOpen.onclick = () => {
      window.open(entry.url, "_blank", "noopener");
    };
  }
};

if (pageMode === "play") {
  const resolvedId = activeGameId || queryGameId;
  const selected = games.find((game) => game.id === resolvedId) ?? games[0];
  setActive(selected);
} else {
  setActive(visibleGames[0] ?? games[0]);
}

loadAppViewer();
loadCustomGameViewer();

const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const DAILY_REVEAL_KEY = "tm_daily_reveal";

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const setDailyGame = () => {
  if (!dailyGameName || !dailyGameDesc || !dailyGamePlay || !dailyGameReveal) return;
  if (!games.length) return;
  const todayKey = getDateKey(new Date());
  const revealKey = `${DAILY_REVEAL_KEY}_${todayKey}`;
  const index = hashString(todayKey) % games.length;
  const daily = games[index];
  const reveal = () => {
    dailyGameName.textContent = daily.name;
    dailyGameDesc.textContent = daily.description;
    dailyGamePlay.href = daily.custom ? buildCustomGameHref(daily) : buildStandardGameHref(daily.id);
    dailyGamePlay.setAttribute("aria-label", `${t("play_now")} ${daily.name}`);
    dailyGamePlay.classList.remove("hidden");
    dailyGameReveal.classList.add("hidden");
  };

  if (localStorage.getItem(revealKey) === "1") {
    reveal();
    return;
  }

  dailyGameReveal.addEventListener(
    "click",
    () => {
      localStorage.setItem(revealKey, "1");
      reveal();
    },
    { once: true },
  );
};

if (pageMode === "popular") {
  setDailyGame();
}

if (pageMode === "play") {
  const recents = loadRecents().filter((id) => id !== activeGame.id);
  recents.unshift(activeGame.id);
  saveRecents(recents.slice(0, 8));
  registerTrackedGameLaunch(activeGame.id, activeGame.name);
  awardExplorerBonus(activeGame.id);
}

if (pageMode === "custom-game") {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get("game");
  if (gameId && loadCustomGames().some((entry) => entry.id === gameId)) {
    const recents = loadRecents().filter((id) => id !== gameId);
    recents.unshift(gameId);
    saveRecents(recents.slice(0, 8));
  }
  if (gameId) {
    const customEntry = loadCustomGames().find((entry) => entry.id === gameId);
    registerTrackedGameLaunch(gameId, customEntry?.name || params.get("title") || gameId);
  }
  if (gameId) awardExplorerBonus(gameId);
}

updateStreakOnPlay();

let lastInteraction = Date.now();
const markInteraction = () => {
  lastInteraction = Date.now();
};

const maybeAutoLock = () => {
  if (shouldAutoLock(lastInteraction)) {
    lockSiteNow("auto");
  }
};

["mousemove", "mousedown", "keydown", "touchstart", "touchmove", "pointerdown"].forEach((eventName) => {
  window.addEventListener(eventName, markInteraction, { passive: true });
});
window.addEventListener("focus", markInteraction);
window.addEventListener("keydown", (event) => {
  const isLockShortcutKey =
    event.code === "KeyO" || String(event.key || "").toLowerCase() === "o";
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && isLockShortcutKey) {
    event.preventDefault();
    lockSiteNow("shortcut");
  }
});

document.querySelectorAll(".game-iframe").forEach((currentFrame) => {
  ["pointerdown", "mouseenter", "focus", "touchstart"].forEach((eventName) => {
    currentFrame.addEventListener(eventName, markInteraction, { passive: true });
  });
  currentFrame.addEventListener("load", () => {
    try {
      const win = currentFrame.contentWindow;
      if (!win) return;
      ["mousemove", "mousedown", "keydown", "touchstart", "touchmove"].forEach((eventName) => {
        win.addEventListener(eventName, markInteraction, { passive: true });
      });
    } catch (error) {
      // Cross-origin iframes won't allow event binding; fall back to outer events.
    }
  });
});

const canGainXp = () => {
  if (systemLocked) return false;
  const activeFrame =
    frame ||
    customGameFrame ||
    appFrame ||
    document.getElementById("secret-frame");
  if (!activeFrame) return false;
  const viewingGame =
    document.body.classList.contains("game-only") ||
    pageMode === "play" ||
    pageMode === "custom-game" ||
    pageMode === "app" ||
    pageMode === "secret";
  if (!viewingGame) return false;
  if (document.visibilityState !== "visible") return false;
  if (!document.hasFocus()) return false;
  return Date.now() - lastInteraction <= getAfkTimeout();
};

const readBoundedNumber = (key, fallback, min, max) => {
  const value = Number(localStorage.getItem(key));
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
};

let lastTick = performance.now();
let lastPassiveLocalPersistAt = Date.now();
setInterval(() => {
  const now = performance.now();
  const deltaSeconds = (now - lastTick) / 1000;
  lastTick = now;
  maybeAutoLock();
  if (!canGainXp()) return;
  trackProfilePlaytime(deltaSeconds);
  const debugPreview = localStorage.getItem(DEBUG_PREVIEW_KEY) === "1";
  const multiplier = readBoundedNumber(LOCAL_MULTIPLIER_KEY, 1, 0.25, 8);
  const xpPerMinute = readBoundedNumber(PASSIVE_XP_RATE_KEY, DEFAULT_PASSIVE_XP_PER_MIN, 0, 12);
  const moneyPerMinute = readBoundedNumber(PASSIVE_MONEY_RATE_KEY, DEFAULT_PASSIVE_MONEY_PER_MIN, 0, 8);
  if (!debugPreview) {
    xpProgress += deltaSeconds * (xpPerMinute / 60) * multiplier;
    tmProgress += deltaSeconds * (moneyPerMinute / 60) * multiplier;
    const gainedXp = Math.floor(xpProgress);
    const gainedMoney = Math.floor(tmProgress);
    const nowMs = Date.now();
    if (gainedXp > 0) {
      xpTotal += gainedXp;
      xpProgress -= gainedXp;
      syncRank();
      window.dispatchEvent(
        new CustomEvent("tm-xp-update", { detail: { xp: xpTotal, rank: currentRank } })
      );
    }
    if (gainedMoney > 0) {
      tmDollars += gainedMoney;
      tmProgress -= gainedMoney;
      updateEconomyUI();
    }
    if (gainedXp > 0 || gainedMoney > 0) {
      saveXpState({ queueCloud: false });
      saveTmState({ queueCloud: false });
      queueProfileCloudSave();
      lastPassiveLocalPersistAt = nowMs;
    } else if (nowMs - lastPassiveLocalPersistAt >= getAdaptiveIntervalMs(15000, 8000)) {
      saveXpState({ queueCloud: false });
      saveTmState({ queueCloud: false });
      lastPassiveLocalPersistAt = nowMs;
    }
  }
}, getAdaptiveIntervalMs(1000, 800));

let xpPopup;
let xpPopupCountdown;
let xpPopupStatus;
let xpPopupLoop;
let xpPopupTimer;
const hideXpPopup = () => {
  if (xpPopup) xpPopup.classList.remove("active");
  if (xpPopupTimer) clearInterval(xpPopupTimer);
  xpPopupTimer = null;
};

const ensureXpPopup = () => {
  if (xpPopup) return;
  xpPopup = document.createElement("div");
  xpPopup.className = "xp-popup";
  xpPopup.innerHTML = `
    <div class="xp-popup-card">
      <div class="xp-popup-title" data-i18n="xp_popup_title">${t("xp_popup_title")}</div>
      <p class="xp-popup-body">${t("xp_popup_body")}</p>
      <div class="xp-popup-count" id="xp-popup-count">10s</div>
      <div class="xp-popup-actions">
        <button class="pill" type="button" id="xp-popup-claim">${t("xp_popup_button")}</button>
        <button class="pill ghost" type="button" id="xp-popup-close">✕</button>
      </div>
      <div class="xp-popup-status" id="xp-popup-status"></div>
    </div>
  `;
  document.body.appendChild(xpPopup);
  xpPopupCountdown = xpPopup.querySelector("#xp-popup-count");
  xpPopupStatus = xpPopup.querySelector("#xp-popup-status");
  const claim = xpPopup.querySelector("#xp-popup-claim");
  const close = xpPopup.querySelector("#xp-popup-close");
  claim.addEventListener("click", () => {
    if (!xpPopupTimer) return;
    xpTotal += XP_POPUP_REWARD;
    syncRank();
    saveXpState();
    xpPopupStatus.textContent = t("xp_popup_claimed");
    hideXpPopup();
  });
  close.addEventListener("click", hideXpPopup);
};

const showXpPopup = () => {
  if (pageMode !== "play") return;
  ensureXpPopup();
  const deadline = Date.now() + XP_POPUP_DURATION;
  xpPopupStatus.textContent = "";
  xpPopup.classList.add("active");
  const tick = () => {
    const remaining = Math.max(0, deadline - Date.now());
    const seconds = Math.ceil(remaining / 1000);
    if (xpPopupCountdown) xpPopupCountdown.textContent = `${seconds}s`;
    if (remaining <= 0) {
      xpPopupStatus.textContent = t("xp_popup_late");
      hideXpPopup();
    }
  };
  hideXpPopup();
  xpPopup.classList.add("active");
  xpPopupTimer = setInterval(tick, 200);
  tick();
};

const scheduleXpPopup = () => {
  if (xpPopupLoop) clearTimeout(xpPopupLoop);
  if (pageMode !== "play") return;
  xpPopupLoop = setTimeout(() => {
    if (canGainXp()) showXpPopup();
    scheduleXpPopup();
  }, XP_POPUP_COOLDOWN);
};

const recentGrid = document.getElementById("recent-grid");
const recentSection = document.getElementById("recent-section");
if (recentGrid && pageMode !== "play") {
  const recents = loadRecents();
  const recentGames = recents
    .map((id) => games.find((game) => game.id === id))
    .filter(Boolean);
  if (recentGames.length) {
    renderCards(recentGames, recentGrid, { showFavorite: false });
  } else if (recentSection) {
    recentSection.style.display = "none";
  }
}

const searchInput = document.getElementById("search-games");
const categorySelect = document.getElementById("filter-category");
const filterFavorites = document.getElementById("filter-favorites");
let favoritesOnly = false;
let activeCategory = "all";

const collectCategories = () => {
  const set = new Set();
  games.forEach((game) => {
    if (game.badge) set.add(String(game.badge));
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

const renderCategoryOptions = () => {
  if (!categorySelect) return;
  const current = activeCategory;
  const options = ['<option value="all">All Categories</option>'];
  collectCategories().forEach((label) => {
    const value = label.toLowerCase();
    options.push(`<option value="${value}">${label}</option>`);
  });
  categorySelect.innerHTML = options.join("");
  categorySelect.value = current;
};

const applyFilters = () => {
  if (!grid) return;
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const cards = grid.querySelectorAll(".game-card");
  cards.forEach((card) => {
    const name = card.dataset.name || "";
    const id = card.dataset.id || "";
    const isFav = card.dataset.favorite === "1";
    const category = card.dataset.category || "";
    const match = name.includes(query) || id.includes(query);
    const categoryMatch = activeCategory === "all" || category === activeCategory;
    const show = match && categoryMatch && (!favoritesOnly || isFav);
    card.style.display = show ? "" : "none";
  });
};

const refreshGameViews = () => {
  if (!grid) return;
  visibleGames = computeVisibleGames();
  renderCards(visibleGames, grid);
  updateGameCardLabels();
  if (gameCount) {
    gameCount.textContent =
      pageMode === "popular" || pageMode === "favorites" ? visibleGames.length : games.length;
  }
  updateFavoritesEmpty();
  renderCategoryOptions();
  applyFilters();
};

if (searchInput) {
  searchInput.addEventListener("input", applyFilters);
}

if (categorySelect) {
  renderCategoryOptions();
  categorySelect.addEventListener("change", () => {
    activeCategory = categorySelect.value || "all";
    applyFilters();
  });
}

if (filterFavorites) {
  filterFavorites.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    filterFavorites.classList.toggle("active", favoritesOnly);
    applyFilters();
  });
}

const favoritesEmpty = document.getElementById("favorites-empty");
const updateFavoritesEmpty = () => {
  if (!favoritesEmpty || !grid || (pageMode !== "favorites" && pageMode !== "popular")) return;
  const hasCards = grid.querySelector(".game-card");
  favoritesEmpty.style.display = hasCards ? "none" : "flex";
};

const initFavoritesDrag = () => {
  if (!grid || (pageMode !== "favorites" && pageMode !== "popular" && pageMode !== "all")) return;
  const orderKey = pageMode === "all" ? ALL_GAMES_ORDER_KEY : FAVORITES_ORDER_KEY;
  initGridReorder({
    container: grid,
    itemSelector: ".game-card",
    idAccessor: (card) => card.dataset.id,
    orderKey,
  });
};

const themeButtons = document.querySelectorAll("[data-theme-option]");
const themeStatus = document.getElementById("theme-status");
const ambientStatus = document.getElementById("ambient-status");
const accentStatus = document.getElementById("accent-status");
const densityStatus = document.getElementById("density-status");
const motionStatus = document.getElementById("motion-status");
const favoritesCount = document.getElementById("favorites-count");
const favoritesCountInline = document.getElementById("favorites-count-inline");
const ambientToggle = document.querySelector("[data-ambient-toggle]");
const performanceButtons = document.querySelectorAll("[data-performance-option]");
const clearFavorites = document.getElementById("clear-favorites");
const nameInput = document.getElementById("user-name-input");
const nameConfirm = document.getElementById("user-name-confirm");
const nameSave = document.getElementById("save-username");
const nameStatus = document.getElementById("name-status");
const layoutList = document.getElementById("layout-list");
const layoutReset = document.getElementById("layout-reset");
const nameTargets = document.querySelectorAll("[data-user-name]");
const accentButtons = document.querySelectorAll("[data-accent-option]");
const densityButtons = document.querySelectorAll("[data-density-option]");
const motionButtons = document.querySelectorAll("[data-motion-option]");
const langButtons = document.querySelectorAll("[data-lang-option]");
const playstyleButtons = document.querySelectorAll("[data-playstyle-option]");
const playstyleStatus = document.getElementById("playstyle-status");
const emergencyUrlInput = document.getElementById("emergency-url-input");
const emergencyUrlSave = document.getElementById("emergency-url-save");
const emergencyUrlReset = document.getElementById("emergency-url-reset");
const emergencyUrlStatus = document.getElementById("emergency-url-status");
const downloadSiteFilesBtn = document.getElementById("download-site-files");
const downloadCoreFilesBtn = document.getElementById("download-core-files");
const downloadSiteStatus = document.getElementById("download-site-status");
const resetAppsOrderBtn = document.getElementById("reset-apps-order");
const resetGamesOrderBtn = document.getElementById("reset-games-order");
const lockPinNewInput = document.getElementById("lock-pin-new");
const lockPinConfirmInput = document.getElementById("lock-pin-confirm");
const lockPinSaveBtn = document.getElementById("lock-pin-save");
const lockPasswordOffBtn = document.getElementById("lock-password-off");
const lockPinSettingStatus = document.getElementById("lock-pin-status");
const lockRecoveryPasswordInput = document.getElementById("lock-recovery-password");
const lockRecoveryConfirmInput = document.getElementById("lock-recovery-confirm");
const lockRecoveryHintInput = document.getElementById("lock-recovery-hint-input");
const lockRecoverySaveBtn = document.getElementById("lock-recovery-save");
const lockRecoverySettingStatus = document.getElementById("lock-recovery-status");
const autoLockToggleBtn = document.getElementById("auto-lock-toggle");
const autoLockMinutesInput = document.getElementById("auto-lock-minutes");
const autoLockStatus = document.getElementById("auto-lock-status");
const lockNowBtn = document.getElementById("lock-now-btn");
const lockWidgetOptions = document.getElementById("lock-widget-options");
const lockWidgetStatus = document.getElementById("lock-widget-status");

const updateThemeUI = (choice) => {
  if (themeStatus) {
    const labelKey = `theme_${choice || "default"}`;
    themeStatus.textContent = t(labelKey);
  }
  themeButtons.forEach((button) => {
    const theme = button.dataset.themeOption || "default";
    const locked = LOCKED_THEMES.has(theme) && !isThemeUnlocked(theme);
    button.classList.toggle("active", theme === choice);
    button.classList.toggle("locked", locked);
    button.setAttribute("aria-disabled", locked ? "true" : "false");
  });
};

const updateAmbientUI = (state) => {
  const isOn = state !== "off";
  if (ambientStatus) ambientStatus.textContent = isOn ? t("on") : t("off");
  if (ambientToggle) {
    ambientToggle.textContent = `${t("ambient_label")}: ${isOn ? t("on") : t("off")}`;
  }
};

const updatePerformanceUI = (choice) => {
  performanceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.performanceOption === choice);
  });
};

const updateLanguageUI = (choice) => {
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === choice);
  });
};

const updateAccentUI = (choice) => {
  if (accentStatus) {
    const labelKey = `accent_${choice || "neon"}`;
    accentStatus.textContent = t(labelKey);
  }
  accentButtons.forEach((button) => {
    const accent = button.dataset.accentOption || "neon";
    const locked = LOCKED_ACCENTS.has(accent) && !isAccentUnlocked(accent);
    button.classList.toggle("active", accent === choice);
    button.classList.toggle("locked", locked);
    button.setAttribute("aria-disabled", locked ? "true" : "false");
  });
};

const updatePlaystyleUI = (choice) => {
  playstyleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.playstyleOption === choice);
  });
  if (playstyleStatus) {
    playstyleStatus.textContent = `Active: ${capitalize(choice || "grinder")}`;
  }
  const cooldownEl = document.getElementById("playstyle-cooldown");
  const costEl = document.getElementById("playstyle-cost");
  if (costEl) {
    costEl.textContent = `Switch cost: ${PLAYSTYLE_SWITCH_COST} TM$`;
  }
  if (cooldownEl) {
    const remaining = getPlaystyleCooldownRemaining();
    cooldownEl.textContent =
      remaining > 0 ? `Cooldown: ${formatCooldown(remaining)}` : "Switch ready";
  }
  const descEl = document.getElementById("playstyle-desc");
  if (descEl) {
    const baseDesc = PLAYSTYLE_DESC[choice || "grinder"] || "";
    descEl.textContent =
      choice === "sweat" ? `${baseDesc} Hard games: ${HARD_GAME_LABELS.join(", ")}.` : baseDesc;
  }
  updateSweatHardIndicators();
  updateProgressUI();
};

const updateDensityUI = (choice) => {
  if (densityStatus) {
    densityStatus.textContent = choice === "compact" ? t("density_compact") : t("density_comfort");
  }
  densityButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.densityOption === choice);
  });
};

const updateMotionUI = (choice) => {
  if (motionStatus) {
    motionStatus.textContent = choice === "reduced" ? t("motion_reduced") : t("motion_full");
  }
  motionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.motionOption === choice);
  });
};

const updateFavoriteCounts = () => {
  if (favoritesCount) favoritesCount.textContent = favorites.size;
  if (favoritesCountInline) {
    favoritesCountInline.textContent = t("favorites_saved", { count: favorites.size });
  }
  if (pageMode === "profile") renderProfilePage();
};

const setDisplayName = (value) => {
  const trimmed = value.trim();
  const display = trimmed || t("player_label");
  nameTargets.forEach((node) => {
    node.textContent = display;
  });
  applyProfileCosmetics();
  updateLockScreenStats();
};

const applyProfileCosmetics = () => {
  nameTargets.forEach((node) => {
    node.dataset.userIcon = activeCosmetics.icon || "";
    node.dataset.userTitle = activeCosmetics.title || "";
    node.dataset.userColor = activeCosmetics.color || "";
    if (node.classList.contains("user-tag")) {
      node.dataset.userBorder = activeCosmetics.border || "";
      node.dataset.profileTheme = activeCosmetics.profileTheme || "";
    }
  });
};

const setNameStatus = (key, isError = false) => {
  if (!nameStatus) return;
  nameStatus.textContent = key ? t(key) : "";
  nameStatus.classList.toggle("is-error", isError);
};

const commitUsername = (value) => {
  const trimmed = value.trim().slice(0, 18);
  const oldName = getDisplayName();
  if (trimmed) {
    localStorage.setItem(USERNAME_KEY, trimmed);
  } else {
    localStorage.removeItem(USERNAME_KEY);
  }
  setDisplayName(trimmed);
  renderLeaderboard();
  syncRank();
};

const storedName = localStorage.getItem(USERNAME_KEY) || "";
applyLanguage(languageChoice);
setDisplayName(storedName);
initLockScreenUi();
if (!isLockSessionUnlocked()) {
  lockSiteNow("boot");
} else {
  updateLockScreenStats();
}
updateCurrentNodeLabel();
syncSavings();
updateProgressUI();
updateSchoolCountdown();
renderLeaderboard();
syncRank();
saveXpState();
applyHomeLayout();
renderCustomApps();
applyAppsOrder();
initAppsDrag();
initCustomApps();
initCustomGames();
initBank();
initShop();
if (resetAppsOrderBtn) {
  resetAppsOrderBtn.addEventListener("click", () => {
    resetAppsOrder();
    showActionToast("Apps order reset.");
  });
}
if (resetGamesOrderBtn) {
  resetGamesOrderBtn.addEventListener("click", () => {
    localStorage.removeItem(ALL_GAMES_ORDER_KEY);
    if (pageMode === "all") refreshGameViews();
    showActionToast("Game order reset.");
  });
}
if (document.body.classList.contains("game-only")) {
  setupCalculatorWidget();
}
initXpCodes();
initXpPopup();
scheduleXpPopup();
setInterval(() => {
  syncSavings();
  if (!document.hidden) updateEconomyUI();
}, 60000);
setInterval(() => {
  if (document.hidden || pageMode !== "popular") return;
  updateSchoolCountdown();
}, getAdaptiveIntervalMs(1000, 1000));

if (themeButtons.length) {
  updateThemeUI(themeChoice);
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.themeOption || "default";
      if (choice === "superbowl") return;
      if (!isThemeUnlocked(choice)) {
        showActionToast("Unlock this theme in the Shop.");
        return;
      }
      localStorage.setItem(THEME_KEY, choice);
      applyTheme(choice);
      updateThemeUI(choice);
    });
  });
}

if (accentButtons.length) {
  updateAccentUI(accentChoice);
  accentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.accentOption || "neon";
      if (!isAccentUnlocked(choice)) {
        showActionToast("Unlock this accent in the Shop.");
        return;
      }
      localStorage.setItem(ACCENT_KEY, choice);
      applyAccent(choice);
      updateAccentUI(choice);
    });
  });
}

if (densityButtons.length) {
  updateDensityUI(densityChoice);
  densityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.densityOption || "comfort";
      localStorage.setItem(DENSITY_KEY, choice);
      applyDensity(choice);
      updateDensityUI(choice);
    });
  });
}

if (playstyleButtons.length) {
  const current = getPlaystyle();
  updatePlaystyleUI(current);
  playstyleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.playstyleOption || "grinder";
      if (!canPerformEconomyAction()) return;
      const currentStyle = getPlaystyle();
      if (choice === currentStyle) return;
      const remaining = getPlaystyleCooldownRemaining();
      if (remaining > 0) {
        showActionToast(`Switch available in ${formatCooldown(remaining)}.`);
        playUiTone("error");
        updatePlaystyleUI(currentStyle);
        return;
      }
      if (tmDollars < PLAYSTYLE_SWITCH_COST) {
        showActionToast("Not enough TM Dollars.");
        playUiTone("error");
        return;
      }
      tmDollars -= PLAYSTYLE_SWITCH_COST;
      saveTmState();
      localStorage.setItem(PLAYSTYLE_KEY, choice);
      localStorage.setItem(PLAYSTYLE_SWITCH_KEY, String(Date.now()));
      updatePlaystyleUI(choice);
      updateEconomyUI();
      showActionToast(`Playstyle switched to ${capitalize(choice)} (-${PLAYSTYLE_SWITCH_COST} TM$).`);
      playUiTone("switch");
    });
  });
}

if (motionButtons.length) {
  updateMotionUI(motionChoice);
  motionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.motionOption || "full";
      localStorage.setItem(MOTION_KEY, choice);
      applyMotion(choice);
      updateMotionUI(choice);
    });
  });
}

if (langButtons.length) {
  updateLanguageUI(languageChoice);
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.langOption || "en";
      applyLanguage(choice);
      updateLanguageUI(choice);
      setDisplayName(localStorage.getItem(USERNAME_KEY) || "");
      updateCurrentNodeLabel();
      updateGameCardLabels();
      syncRank();
      if (pageMode === "play") {
        document.title = t("title_game", { name: activeGame.name });
      }
      updateThemeUI(enforceThemeChoice(localStorage.getItem(THEME_KEY) || "default"));
      updateAccentUI(enforceAccentChoice(localStorage.getItem(ACCENT_KEY) || "neon"));
      updateDensityUI(localStorage.getItem(DENSITY_KEY) || "comfort");
      updateMotionUI(localStorage.getItem(MOTION_KEY) || "full");
      updateAmbientUI(localStorage.getItem(AMBIENT_KEY) || "on");
      updatePerformanceUI(localStorage.getItem(PERFORMANCE_KEY) || "high");
      updateFavoriteCounts();
      renderLeaderboard();
      renderLayoutList();
      updateLockSettingsUi();
      renderLockWidgetOptions();
    });
  });
}

if (ambientToggle) {
  updateAmbientUI(ambientChoice);
  ambientToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("ambient-off") ? "on" : "off";
    localStorage.setItem(AMBIENT_KEY, next);
    applyAmbient(next);
    updateAmbientUI(next);
  });
}

if (performanceButtons.length) {
  updatePerformanceUI(performanceChoice);
  performanceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.dataset.performanceOption || "high";
      localStorage.setItem(PERFORMANCE_KEY, choice);
      applyPerformance(choice);
      updatePerformanceUI(choice);
    });
  });
}

if (nameInput) {
  nameInput.value = storedName;
}
if (nameConfirm) {
  nameConfirm.value = storedName;
}
const clearNameStatus = () => {
  if (nameStatus) {
    nameStatus.textContent = "";
    nameStatus.classList.remove("is-error");
  }
};
if (nameInput) nameInput.addEventListener("input", clearNameStatus);
if (nameConfirm) nameConfirm.addEventListener("input", clearNameStatus);
const handleNameKey = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    nameSave?.click();
  }
};
if (nameInput) nameInput.addEventListener("keydown", handleNameKey);
if (nameConfirm) nameConfirm.addEventListener("keydown", handleNameKey);
if (nameSave) {
  nameSave.addEventListener("click", async () => {
    const primary = nameInput ? nameInput.value.trim() : "";
    const confirm = nameConfirm ? nameConfirm.value.trim() : "";
    if (!primary && !confirm) {
      commitUsername("");
      if (authSessionToken) {
        if (nameStatus) {
          nameStatus.textContent = "Saving...";
          nameStatus.classList.remove("is-error");
        }
        try {
          const response = await syncDisplayNameToCloud("");
          if (response?.user?.displayName) {
            commitUsername(String(response.user.displayName));
          }
          setNameStatus("name_cleared", false);
        } catch (error) {
          if (nameStatus) {
            nameStatus.textContent = String(error.message || "Unable to save name.");
            nameStatus.classList.add("is-error");
          }
        }
      } else {
        setNameStatus("name_cleared", false);
      }
      return;
    }
    if (primary.length < 2) {
      setNameStatus("name_short", true);
      return;
    }
    if (primary !== confirm) {
      setNameStatus("name_mismatch", true);
      return;
    }
    commitUsername(primary);
    if (!authSessionToken) {
      setNameStatus("name_saved", false);
      return;
    }
    if (nameStatus) {
      nameStatus.textContent = "Saving...";
      nameStatus.classList.remove("is-error");
    }
    try {
      const response = await syncDisplayNameToCloud(primary);
      if (response?.user?.displayName) {
        commitUsername(String(response.user.displayName));
      }
      setNameStatus("name_saved", false);
    } catch (error) {
      if (nameStatus) {
        nameStatus.textContent = String(error.message || "Unable to save name.");
        nameStatus.classList.add("is-error");
      }
    }
  });
}

const setEmergencyUrlStatus = (message, isError = false) => {
  if (!emergencyUrlStatus) return;
  emergencyUrlStatus.textContent = message || "";
  emergencyUrlStatus.classList.toggle("is-error", Boolean(isError));
};

const setDownloadSiteStatus = (message, isError = false) => {
  if (!downloadSiteStatus) return;
  downloadSiteStatus.textContent = message || "";
  downloadSiteStatus.classList.toggle("is-error", Boolean(isError));
};

let siteDownloadInProgress = false;
const startSiteFileDownload = async (files, label) => {
  if (!Array.isArray(files) || !files.length) {
    setDownloadSiteStatus("No files available for download.", true);
    return;
  }
  if (siteDownloadInProgress) {
    setDownloadSiteStatus("Download already running. Wait for it to finish.", true);
    return;
  }
  siteDownloadInProgress = true;
  setDownloadSiteStatus(`${label}: preparing ${files.length} files...`);
  try {
    const downloadStamp = Date.now().toString();
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const link = document.createElement("a");
      const separator = file.includes("?") ? "&" : "?";
      link.href = `${file}${separator}download_stamp=${downloadStamp}-${index}`;
      link.download = file.split("/").pop() || file;
      link.rel = "noopener";
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setDownloadSiteStatus(`${label}: ${index + 1}/${files.length} downloaded...`);
      // Small stagger helps browsers process many downloads in sequence.
      await new Promise((resolve) => window.setTimeout(resolve, 140));
    }
    setDownloadSiteStatus(
      `${label} started with the latest available files. Open index.html after download.`,
    );
  } catch {
    setDownloadSiteStatus("Download failed. Allow multiple downloads and try again.", true);
  } finally {
    siteDownloadInProgress = false;
  }
};

const setLockPinStatus = (message, isError = false) => {
  if (!lockPinSettingStatus) return;
  lockPinSettingStatus.textContent = message || "";
  lockPinSettingStatus.classList.toggle("is-error", Boolean(isError));
};

const disableLockPassword = (options = {}) => {
  const { silent = false } = options;
  lockPinHash = "";
  lockPinSalt = "";
  lockPinLength = 0;
  localStorage.removeItem(LOCK_PIN_HASH_KEY);
  localStorage.removeItem(LOCK_PIN_SALT_KEY);
  localStorage.removeItem(LOCK_PIN_LENGTH_KEY);
  if (lockPinNewInput) lockPinNewInput.value = "";
  if (lockPinConfirmInput) lockPinConfirmInput.value = "";
  updateLockPinInputMode();
  updateLockSettingsUi();
  updateLockScreenStats();
  if (!silent) {
    setLockPinStatus(t("lock_status_password_off"));
  }
};

const setLockRecoveryStatus = (message, isError = false) => {
  if (!lockRecoverySettingStatus) return;
  lockRecoverySettingStatus.textContent = message || "";
  lockRecoverySettingStatus.classList.toggle("is-error", Boolean(isError));
};

const setAutoLockStatus = (message, isError = false) => {
  if (!autoLockStatus) return;
  autoLockStatus.textContent = message || "";
  autoLockStatus.classList.toggle("is-error", Boolean(isError));
};

const setLockWidgetStatus = (message, isError = false) => {
  if (!lockWidgetStatus) return;
  lockWidgetStatus.textContent = message || "";
  lockWidgetStatus.classList.toggle("is-error", Boolean(isError));
};

const updateLockSettingsUi = () => {
  if (autoLockToggleBtn) {
    autoLockToggleBtn.textContent = t("settings_lock_auto_toggle", {
      state: autoLockEnabled ? t("on") : t("off"),
    });
  }
  if (autoLockMinutesInput) {
    autoLockMinutesInput.value = String(autoLockMinutes);
    autoLockMinutesInput.disabled = !autoLockEnabled;
  }
  if (lockRecoveryHintInput) {
    lockRecoveryHintInput.value = lockRecoveryHint || "";
  }
  updateLockScreenStats();
};

const renderLockWidgetOptions = () => {
  if (!lockWidgetOptions) return;
  lockWidgetOptions.innerHTML = LOCK_WIDGET_IDS.map((id) => {
    const active = lockWidgets.includes(id);
    const label = t(LOCK_WIDGET_LABEL_KEYS[id] || id);
    return `<button class="setting-option lock-widget-option${active ? " active" : ""}" type="button" data-lock-widget-id="${id}" aria-pressed="${active}">${label}</button>`;
  }).join("");
};

if (emergencyUrlInput) {
  emergencyUrlInput.value = getEmergencyUrl();
  emergencyUrlInput.addEventListener("input", () => setEmergencyUrlStatus(""));
}

if (emergencyUrlSave) {
  emergencyUrlSave.addEventListener("click", () => {
    const normalized = normalizeEmergencyUrl(emergencyUrlInput?.value || "");
    localStorage.setItem(EMERGENCY_URL_KEY, normalized);
    if (emergencyUrlInput) emergencyUrlInput.value = normalized;
    setEmergencyUrlStatus("Emergency link saved.");
  });
}

if (emergencyUrlReset) {
  emergencyUrlReset.addEventListener("click", () => {
    localStorage.removeItem(EMERGENCY_URL_KEY);
    if (emergencyUrlInput) emergencyUrlInput.value = DEFAULT_EMERGENCY_URL;
    setEmergencyUrlStatus("Emergency link reset to default.");
  });
}

if (downloadSiteFilesBtn) {
  downloadSiteFilesBtn.addEventListener("click", () => {
    if (!window.confirm(OFFLINE_DOWNLOAD_WARNING)) {
      setDownloadSiteStatus("Download canceled.");
      return;
    }
    startSiteFileDownload(FULL_SITE_DOWNLOAD_FILES, "Full site files");
  });
}

if (downloadCoreFilesBtn) {
  downloadCoreFilesBtn.addEventListener("click", () => {
    if (!window.confirm(OFFLINE_DOWNLOAD_WARNING)) {
      setDownloadSiteStatus("Download canceled.");
      return;
    }
    startSiteFileDownload(CORE_SITE_DOWNLOAD_FILES, "Core files");
  });
}

updateLockSettingsUi();
renderLockWidgetOptions();

if (lockWidgetOptions) {
  lockWidgetOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lock-widget-id]");
    if (!button) return;
    const id = String(button.dataset.lockWidgetId || "");
    if (!LOCK_WIDGET_IDS.includes(id)) return;
    const hasId = lockWidgets.includes(id);
    if (hasId && lockWidgets.length <= 1) {
      setLockWidgetStatus(t("lock_status_keep_one_widget"), true);
      return;
    }
    lockWidgets = hasId
      ? lockWidgets.filter((entry) => entry !== id)
      : [...lockWidgets, id];
    lockWidgets = saveLockWidgets(lockWidgets);
    renderLockWidgetOptions();
    renderLockWidgetDock();
    setLockWidgetStatus(t("lock_status_widgets_updated"));
  });
}

if (autoLockToggleBtn) {
  autoLockToggleBtn.addEventListener("click", () => {
    const minutes = Math.min(
      240,
      Math.max(1, Math.floor(Number(autoLockMinutesInput?.value) || autoLockMinutes)),
    );
    updateAutoLockSettings(!autoLockEnabled, minutes);
    updateLockSettingsUi();
    setAutoLockStatus(autoLockEnabled ? t("lock_status_auto_enabled") : t("lock_status_auto_disabled"));
  });
}

if (autoLockMinutesInput) {
  autoLockMinutesInput.addEventListener("input", () => setAutoLockStatus(""));
  autoLockMinutesInput.addEventListener("change", () => {
    const parsed = Math.min(240, Math.max(1, Math.floor(Number(autoLockMinutesInput.value) || 0)));
    if (!parsed) {
      autoLockMinutesInput.value = String(autoLockMinutes);
      setAutoLockStatus(t("lock_status_auto_range"), true);
      return;
    }
    updateAutoLockSettings(autoLockEnabled, parsed);
    updateLockSettingsUi();
    const minuteLabel = autoLockMinutes === 1 ? t("lock_minute_singular") : t("lock_minute_plural");
    setAutoLockStatus(t("lock_status_auto_delay", { count: autoLockMinutes, minute_label: minuteLabel }));
  });
}

if (lockNowBtn) {
  lockNowBtn.addEventListener("click", () => {
    lockSiteNow("manual");
  });
}

if (lockPasswordOffBtn) {
  lockPasswordOffBtn.addEventListener("click", () => {
    disableLockPassword();
  });
}

if (lockPinSaveBtn) {
  lockPinSaveBtn.addEventListener("click", async () => {
    const pin = String(lockPinNewInput?.value || "").trim();
    const confirmPin = String(lockPinConfirmInput?.value || "").trim();
    setLockPinStatus("");
    if (!pin && !confirmPin) {
      disableLockPassword({ silent: true });
      setLockPinStatus(t("lock_status_password_off"));
      return;
    }
    if (!/^\d{4,6}$/.test(pin)) {
      setLockPinStatus(t("lock_status_pin_invalid"), true);
      return;
    }
    if (pin !== confirmPin) {
      setLockPinStatus(t("lock_status_pin_mismatch"), true);
      return;
    }
    try {
      await saveLockPin(pin);
      if (lockPinNewInput) lockPinNewInput.value = "";
      if (lockPinConfirmInput) lockPinConfirmInput.value = "";
      setLockPinStatus(t("lock_status_pin_saved"));
    } catch {
      setLockPinStatus(t("lock_status_pin_save_failed"), true);
    }
  });
}

lockPinNewInput?.addEventListener("input", () => setLockPinStatus(""));
lockPinConfirmInput?.addEventListener("input", () => setLockPinStatus(""));
const handleLockPinEnter = (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  lockPinSaveBtn?.click();
};
lockPinNewInput?.addEventListener("keydown", handleLockPinEnter);
lockPinConfirmInput?.addEventListener("keydown", handleLockPinEnter);

if (lockRecoverySaveBtn) {
  lockRecoverySaveBtn.addEventListener("click", async () => {
    const recoveryPassword = String(lockRecoveryPasswordInput?.value || "");
    const confirmRecovery = String(lockRecoveryConfirmInput?.value || "");
    const recoveryHint = String(lockRecoveryHintInput?.value || "").trim().slice(0, 120);
    setLockRecoveryStatus("");
    if (!recoveryPassword && !confirmRecovery) {
      lockRecoveryHash = "";
      lockRecoverySalt = "";
      lockRecoveryHint = "";
      localStorage.removeItem(LOCK_RECOVERY_HASH_KEY);
      localStorage.removeItem(LOCK_RECOVERY_SALT_KEY);
      localStorage.removeItem(LOCK_RECOVERY_HINT_KEY);
      if (lockRecoveryPasswordInput) lockRecoveryPasswordInput.value = "";
      if (lockRecoveryConfirmInput) lockRecoveryConfirmInput.value = "";
      if (lockRecoveryHintInput) lockRecoveryHintInput.value = "";
      updateLockScreenStats();
      setLockRecoveryStatus(t("lock_status_recovery_removed"));
      return;
    }
    if (recoveryPassword.length < 4) {
      setLockRecoveryStatus(t("lock_status_recovery_min"), true);
      return;
    }
    if (recoveryPassword !== confirmRecovery) {
      setLockRecoveryStatus(t("lock_status_recovery_mismatch"), true);
      return;
    }
    try {
      await saveRecoveryPassword(recoveryPassword, recoveryHint);
      if (lockRecoveryPasswordInput) lockRecoveryPasswordInput.value = "";
      if (lockRecoveryConfirmInput) lockRecoveryConfirmInput.value = "";
      if (lockRecoveryHintInput) lockRecoveryHintInput.value = lockRecoveryHint;
      setLockRecoveryStatus(t("lock_status_recovery_saved"));
    } catch {
      setLockRecoveryStatus(t("lock_status_recovery_save_failed"), true);
    }
  });
}

lockRecoveryPasswordInput?.addEventListener("input", () => setLockRecoveryStatus(""));
lockRecoveryConfirmInput?.addEventListener("input", () => setLockRecoveryStatus(""));
lockRecoveryHintInput?.addEventListener("input", () => setLockRecoveryStatus(""));
const handleRecoveryEnter = (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  lockRecoverySaveBtn?.click();
};
lockRecoveryPasswordInput?.addEventListener("keydown", handleRecoveryEnter);
lockRecoveryConfirmInput?.addEventListener("keydown", handleRecoveryEnter);
lockRecoveryHintInput?.addEventListener("keydown", handleRecoveryEnter);

const renderLayoutList = () => {
  if (!layoutList) return;
  const order = loadLayout();
  layoutList.innerHTML = order
    .map(
      (key) => `
      <div class="control-item" draggable="true" data-section="${key}">
        <span class="control-handle">⋮⋮</span>
        <span class="control-label">${t(
          key === "favorites" ? "favorites_title" : key === "recents" ? "recent_title" : "apps_title"
        )}</span>
        <span class="control-chip">${t("control_move")}</span>
      </div>
    `
    )
    .join("");
};

if (layoutList) {
  renderLayoutList();
  let dragged = null;
  layoutList.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".control-item");
    if (!item) return;
    dragged = item;
    item.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move";
  });
  layoutList.addEventListener("dragend", () => {
    if (dragged) dragged.classList.remove("dragging");
    dragged = null;
    const order = [...layoutList.querySelectorAll(".control-item")].map(
      (item) => item.dataset.section
    );
    saveLayout(order);
  });
  layoutList.addEventListener("dragover", (event) => {
    event.preventDefault();
    const target = event.target.closest(".control-item");
    if (!target || !dragged || target === dragged) return;
    const rect = target.getBoundingClientRect();
    const next = event.clientY > rect.top + rect.height / 2;
    layoutList.insertBefore(dragged, next ? target.nextSibling : target);
  });
}

if (layoutReset) {
  layoutReset.addEventListener("click", () => {
    saveLayout([...defaultLayout]);
    renderLayoutList();
  });
}

if (clearFavorites) {
  updateFavoriteCounts();
  clearFavorites.addEventListener("click", () => {
    if (!confirm(t("clear_favorites_confirm"))) return;
    favorites.clear();
    saveFavorites(favorites);
    saveOrderList(FAVORITES_ORDER_KEY, []);
    updateFavoriteCounts();
    if (grid && (pageMode === "favorites" || pageMode === "popular")) {
      grid.querySelectorAll(".game-card").forEach((card) => card.remove());
      if (gameCount) gameCount.textContent = "0";
      updateFavoritesEmpty();
      applyFilters();
    }
  });
}

updateFavoriteCounts();
renderProfilePage();

window.addEventListener("storage", (event) => {
  if (!event.key) return;
  if (event.key === THEME_KEY) {
    const stored = localStorage.getItem(THEME_KEY) || "default";
    const next = enforceThemeChoice(stored);
    if (next !== stored) {
      localStorage.setItem(THEME_KEY, next);
    }
    applyTheme(next);
    if (systemLocked) applyLockThemeOverrides(next);
    updateThemeUI(next);
    return;
  }
  if (event.key === ACCENT_KEY) {
    const stored = localStorage.getItem(ACCENT_KEY) || "neon";
    const next = enforceAccentChoice(stored);
    if (next !== stored) {
      localStorage.setItem(ACCENT_KEY, next);
    }
    applyAccent(next);
    updateAccentUI(next);
    return;
  }
  if (event.key === USERNAME_KEY) {
    setDisplayName(localStorage.getItem(USERNAME_KEY) || "");
    renderLeaderboard();
    return;
  }
  if (event.key === LANG_KEY) {
    const next = localStorage.getItem(LANG_KEY) || "en";
    applyLanguage(next);
    updateLanguageUI(next);
    setDisplayName(localStorage.getItem(USERNAME_KEY) || "");
    updateCurrentNodeLabel();
    updateGameCardLabels();
    syncRank();
    if (pageMode === "play") {
      document.title = t("title_game", { name: activeGame.name });
    }
    updateThemeUI(localStorage.getItem(THEME_KEY) || "default");
    updateAccentUI(localStorage.getItem(ACCENT_KEY) || "neon");
    updateDensityUI(localStorage.getItem(DENSITY_KEY) || "comfort");
    updateMotionUI(localStorage.getItem(MOTION_KEY) || "full");
    updateAmbientUI(localStorage.getItem(AMBIENT_KEY) || "on");
    updatePerformanceUI(localStorage.getItem(PERFORMANCE_KEY) || "high");
    updateFavoriteCounts();
    renderLeaderboard();
    renderLayoutList();
    updateLockSettingsUi();
    renderLockWidgetOptions();
    renderProfilePage();
    return;
  }
  if (event.key === PERFORMANCE_KEY) {
    const next = localStorage.getItem(PERFORMANCE_KEY) || "high";
    applyPerformance(next);
    updatePerformanceUI(next);
    return;
  }
  if (event.key === LAYOUT_KEY) {
    if (layoutList) renderLayoutList();
    applyHomeLayout();
    return;
  }
  if (event.key === APPS_ORDER_KEY) {
    applyAppsOrder();
    return;
  }
  if (event.key === ALL_GAMES_ORDER_KEY && pageMode === "all") {
    refreshGameViews();
    return;
  }
  if (event.key === CUSTOM_APPS_KEY) {
    renderCustomApps();
    applyAppsOrder();
    return;
  }
  if (event.key === CUSTOM_GAMES_KEY) {
    mergeCustomGames();
    refreshGameViews();
    return;
  }
  if (
    event.key === XP_KEY ||
    event.key === XP_PROGRESS_KEY ||
    event.key === RANK_KEY
  ) {
    xpTotal = Math.max(0, Math.floor(loadNumber(XP_KEY, 0)));
    xpProgress = Math.max(0, loadNumber(XP_PROGRESS_KEY, 0));
    currentRank = getRank(xpTotal);
    updateProgressUI();
  }
  if (event.key === TM_KEY || event.key === TM_PROGRESS_KEY) {
    tmDollars = Math.max(0, Math.floor(loadNumber(TM_KEY, 0)));
    tmProgress = Math.max(0, loadNumber(TM_PROGRESS_KEY, 0));
    updateEconomyUI();
    renderProfilePage();
  }
  if (event.key === STREAK_KEY) {
    streakCount = Math.max(0, Math.floor(loadNumber(STREAK_KEY, 0)));
    updateProgressUI();
  }
  if (event.key === PLAYSTYLE_KEY) {
    updatePlaystyleUI(localStorage.getItem(PLAYSTYLE_KEY) || "grinder");
  }
  if (event.key === COSMETICS_KEY) {
    activeCosmetics = loadCosmetics();
    applyProfileCosmetics();
    return;
  }
  if (event.key === PROFILE_STATS_KEY) {
    profileStats = loadProfileStats();
    renderProfilePage();
    updateLockScreenStats();
    return;
  }
  if (event.key === ACHIEVEMENTS_KEY) {
    renderProfilePage();
    return;
  }
  if (event.key === EMERGENCY_URL_KEY) {
    if (emergencyUrlInput) emergencyUrlInput.value = getEmergencyUrl();
    setEmergencyUrlStatus("");
    return;
  }
  if (
    event.key === LOCK_PIN_HASH_KEY ||
    event.key === LOCK_PIN_SALT_KEY ||
    event.key === LOCK_PIN_LENGTH_KEY ||
    event.key === LOCK_RECOVERY_HASH_KEY ||
    event.key === LOCK_RECOVERY_SALT_KEY ||
    event.key === LOCK_RECOVERY_HINT_KEY ||
    event.key === LOCK_AUTO_ENABLED_KEY ||
    event.key === LOCK_AUTO_MINUTES_KEY
  ) {
    lockPinHash = localStorage.getItem(LOCK_PIN_HASH_KEY) || "";
    lockPinSalt = localStorage.getItem(LOCK_PIN_SALT_KEY) || "";
    lockPinLength = normalizeLockPinLength(localStorage.getItem(LOCK_PIN_LENGTH_KEY));
    lockRecoveryHash = localStorage.getItem(LOCK_RECOVERY_HASH_KEY) || "";
    lockRecoverySalt = localStorage.getItem(LOCK_RECOVERY_SALT_KEY) || "";
    lockRecoveryHint = String(localStorage.getItem(LOCK_RECOVERY_HINT_KEY) || "")
      .trim()
      .slice(0, 120);
    if (!lockPinHash || !lockPinSalt) {
      lockPinHash = "";
      lockPinSalt = "";
      lockPinLength = 0;
    }
    if (!lockRecoveryHash || !lockRecoverySalt) {
      lockRecoveryHash = "";
      lockRecoverySalt = "";
    }
    autoLockEnabled = localStorage.getItem(LOCK_AUTO_ENABLED_KEY) === "1";
    autoLockMinutes = Math.min(
      240,
      Math.max(1, Math.floor(loadNumber(LOCK_AUTO_MINUTES_KEY, DEFAULT_AUTO_LOCK_MINUTES))),
    );
    updateLockPinInputMode();
    updateLockSettingsUi();
    updateLockScreenStats();
    return;
  }
  if (event.key === LOCK_WIDGETS_KEY) {
    lockWidgets = loadLockWidgets();
    renderLockWidgetOptions();
    renderLockWidgetDock();
    setLockWidgetStatus("");
    return;
  }
});

if (grid) {
  initFavoritesDrag();
  grid.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".game-delete");
    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();
      const id = deleteButton.dataset.id;
      if (!id) return;
      const gamesList = loadCustomGames().filter((entry) => entry.id !== id);
      saveCustomGames(gamesList);
      if (favorites.has(id)) {
        favorites.delete(id);
        saveFavorites(favorites);
      }
      const favoriteOrder = loadOrderList(FAVORITES_ORDER_KEY).filter((gameId) => gameId !== id);
      saveOrderList(FAVORITES_ORDER_KEY, favoriteOrder);
      const allOrder = loadOrderList(ALL_GAMES_ORDER_KEY).filter((gameId) => gameId !== id);
      saveOrderList(ALL_GAMES_ORDER_KEY, allOrder);
      const recents = loadRecents().filter((gameId) => gameId !== id);
      saveRecents(recents);
      mergeCustomGames();
      refreshGameViews();
      updateFavoriteCounts();
      renderLeaderboard();
      return;
    }
    const button = event.target.closest(".favorite-toggle");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const id = button.dataset.id;
    if (!id) return;
    const isFavorite = favorites.has(id);
    if (isFavorite) {
      favorites.delete(id);
    } else {
      favorites.add(id);
    }
    saveFavorites(favorites);
    const order = loadOrderList(FAVORITES_ORDER_KEY).filter((item) => item !== id);
    if (!isFavorite) order.push(id);
    const filteredOrder = order.filter((item) => favorites.has(item));
    saveOrderList(FAVORITES_ORDER_KEY, filteredOrder);
    button.classList.toggle("active", !isFavorite);
    button.setAttribute("aria-pressed", String(!isFavorite));
    const nextFavoriteLabel = !isFavorite ? t("remove_favorite") : t("add_favorite");
    button.setAttribute("aria-label", nextFavoriteLabel);
    button.setAttribute("title", nextFavoriteLabel);
    const card = button.closest(".game-card");
    if (card) card.dataset.favorite = !isFavorite ? "1" : "0";
    if (pageMode === "popular") {
      const limited = orderFavorites(games.filter((game) => favorites.has(game.id))).slice(0, 8);
      renderCards(limited, grid);
      if (gameCount) gameCount.textContent = limited.length;
      updateFavoritesEmpty();
      applyFilters();
      updateFavoriteCounts();
      if (!isFavorite) awardStyleBonus("favorite");
      return;
    }
    if ((pageMode === "favorites" || pageMode === "popular") && isFavorite) {
      card?.remove();
      if (gameCount) {
        const remaining = grid.querySelectorAll(".game-card").length;
        gameCount.textContent = remaining;
      }
      updateFavoritesEmpty();
    }
    applyFilters();
    updateFavoriteCounts();
    if (!isFavorite) {
      awardStyleBonus("favorite");
    }
  });
  updateFavoritesEmpty();
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".game-card");
  if (!card || card.dataset.custom !== "1") return;
  if (event.target.closest(".favorite-toggle") || event.target.closest(".game-delete")) return;
  const id = card.dataset.id;
  if (!id) return;
  const game = games.find((item) => item.id === id);
  if (!game || !game.url) return;
  try {
    window.name = `tm-custom-game:${JSON.stringify({
      id: game.id,
      title: game.name,
      url: game.url,
    })}`;
  } catch (error) {
    // Ignore window.name failures.
  }
});

if (launchRandom) {
  launchRandom.addEventListener("click", () => {
    const list =
      (pageMode === "popular" || pageMode === "favorites") && favorites.size
        ? games.filter((game) => favorites.has(game.id))
        : visibleGames.length
          ? visibleGames
          : games;
    const randomGame = list[Math.floor(Math.random() * list.length)];
    if (randomGame?.custom) {
      window.location.href = buildCustomGameHref(randomGame);
      return;
    }
    window.location.href = buildStandardGameHref(randomGame.id);
  });
}

if (refresh) {
  refresh.addEventListener("click", () => {
    if (frame) frame.src = activeGame.url;
  });
}

if (fullscreen && exitFullscreen && playerShell) {
  fullscreen.addEventListener("click", async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }
    if (playerShell.requestFullscreen) {
      await playerShell.requestFullscreen();
    }
  });

  exitFullscreen.addEventListener("click", async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  });

  const syncFullscreenButtons = () => {
    const isFullscreen = Boolean(document.fullscreenElement);
    fullscreen.classList.toggle("hidden", isFullscreen);
    exitFullscreen.classList.toggle("hidden", !isFullscreen);
  };

  document.addEventListener("fullscreenchange", syncFullscreenButtons);
  syncFullscreenButtons();
}

if (emergency) {
  emergency.addEventListener("click", () => {
    window.location.replace(getEmergencyUrl());
  });
}

const brandButton = document.querySelector(".brand");

const topBar = document.querySelector(".top-bar");
if (topBar) {
  let scrollRaf = 0;
  const setScrolled = () => {
    scrollRaf = 0;
    topBar.classList.toggle("scrolled", window.scrollY > 20);
  };
  const queueScrolled = () => {
    if (scrollRaf) return;
    scrollRaf = window.requestAnimationFrame(setScrolled);
  };
  setScrolled();
  window.addEventListener("scroll", queueScrolled, { passive: true });
  window.addEventListener("resize", queueScrolled, { passive: true });
}

const showGreetingPopup = () => {
  if (pageMode !== "popular") return;
  if (sessionStorage.getItem("tm_greeting_seen_home") === "1") return;
  sessionStorage.setItem("tm_greeting_seen_home", "1");
  const name = getDisplayName();
  let allowTheme = false;
  let dayChoice = "okay";
  let moodChoice = "neutral";
  let energyChoice = "medium";
  let stressChoice = "mid";
  let vibeChoice = "calm";
  let focusChoice = "play";
  let socialChoice = "solo";
  let timeChoice = "quick";
  let readyChoice = "ready";
  const overlay = document.createElement("div");
  overlay.className = "greeting-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", t("greet_title", { name }));
  overlay.innerHTML = `
    <div class="greeting-card">
      <button class="greeting-close" type="button" aria-label="${t("greet_close_aria")}">×</button>
      <h2 data-greeting-title></h2>
      <p data-greeting-body></p>
      <p class="greeting-question" data-greeting-question></p>
      <div class="greeting-actions" data-greeting-actions></div>
    </div>
  `;

  const titleEl = overlay.querySelector("[data-greeting-title]");
  const bodyEl = overlay.querySelector("[data-greeting-body]");
  const questionEl = overlay.querySelector("[data-greeting-question]");
  const actionsEl = overlay.querySelector("[data-greeting-actions]");
  const closeBtn = overlay.querySelector(".greeting-close");

  const pickThemeFromChat = () => {
    if (!allowTheme) return null;
    if (moodChoice === "sad") return energyChoice === "high" ? "dark" : "forest";
    if (moodChoice === "happy") return energyChoice === "high" ? "sunset" : "ocean";
    if (stressChoice === "high") return "forest";
    if (focusChoice === "focus") return "light";
    if (vibeChoice === "energy") return "default";
    if (dayChoice === "great") return "sunset";
    return "ocean";
  };

  const applyThemeFromChat = () => {
    const nextTheme = pickThemeFromChat();
    if (!nextTheme) return;
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
    updateThemeUI(nextTheme);
  };

  const steps = {
    start: {
      title: t("greet_title", { name }),
      body: t("greet_body"),
      question: t("greet_theme_question"),
      actions: [
        { label: t("greet_theme_yes"), next: "day", value: true },
        { label: t("greet_theme_no"), next: "day", value: false, ghost: true },
      ],
    },
    day: {
      title: t("greet_day_title"),
      body: t("greet_day_body"),
      question: "",
      actions: [
        { label: t("greet_day_great"), next: "mood", value: "great" },
        { label: t("greet_day_okay"), next: "mood", value: "okay", ghost: true },
        { label: t("greet_day_rough"), next: "mood", value: "rough", ghost: true },
      ],
    },
    mood: {
      title: "",
      body: "",
      question: "",
      actions: [
        { label: t("greet_mood_happy"), next: "energy", value: "happy" },
        { label: t("greet_mood_neutral"), next: "energy", value: "neutral", ghost: true },
        { label: t("greet_mood_sad"), next: "energy", value: "sad", ghost: true },
      ],
    },
    energy: {
      title: t("greet_energy_title"),
      body: t("greet_energy_body"),
      question: "",
      actions: [
        { label: t("greet_energy_high"), next: "stress", value: "high" },
        { label: t("greet_energy_medium"), next: "stress", value: "medium", ghost: true },
        { label: t("greet_energy_low"), next: "stress", value: "low", ghost: true },
      ],
    },
    stress: {
      title: t("greet_stress_title"),
      body: t("greet_stress_body"),
      question: "",
      actions: [
        { label: t("greet_stress_low"), next: "vibe", value: "low" },
        { label: t("greet_stress_mid"), next: "vibe", value: "mid", ghost: true },
        { label: t("greet_stress_high"), next: "vibe", value: "high", ghost: true },
      ],
    },
    vibe: {
      title: t("greet_vibe_title"),
      body: t("greet_vibe_body"),
      question: "",
      actions: [
        { label: t("greet_vibe_calm"), next: "focus", value: "calm" },
        { label: t("greet_vibe_energy"), next: "focus", value: "energy", ghost: true },
      ],
    },
    focus: {
      title: t("greet_focus_title"),
      body: t("greet_focus_body"),
      question: "",
      actions: [
        { label: t("greet_focus_play"), next: "social", value: "play" },
        { label: t("greet_focus_chill"), next: "social", value: "chill", ghost: true },
        { label: t("greet_focus_focus"), next: "social", value: "focus", ghost: true },
      ],
    },
    social: {
      title: t("greet_social_title"),
      body: t("greet_social_body"),
      question: "",
      actions: [
        { label: t("greet_social_solo"), next: "time", value: "solo" },
        { label: t("greet_social_friends"), next: "time", value: "friends", ghost: true },
      ],
    },
    time: {
      title: t("greet_time_title"),
      body: t("greet_time_body"),
      question: "",
      actions: [
        { label: t("greet_time_quick"), next: "ready", value: "quick" },
        { label: t("greet_time_long"), next: "ready", value: "long", ghost: true },
      ],
    },
    ready: {
      title: t("greet_ready_title"),
      body: t("greet_ready_body"),
      question: "",
      actions: [
        { label: t("greet_ready_yes"), next: "wrap", value: "ready" },
        { label: t("greet_ready_later"), next: "wrap", value: "later", ghost: true },
      ],
    },
    wrap: {
      title: t("greet_wrap_title", { name }),
      body: "",
      question: "",
      actions: [{ label: t("greet_close"), close: true }],
    },
  };

  const renderStep = (key) => {
    const step = steps[key];
    if (!step) return;
    if (key === "mood") {
      const replyKey =
        dayChoice === "great"
          ? "greet_reply_great"
          : dayChoice === "rough"
            ? "greet_reply_rough"
            : "greet_reply_okay";
      step.title = t(replyKey);
      step.body = t("greet_mood_body");
      step.question = t("greet_mood_title");
    }
    if (key === "wrap") {
      applyThemeFromChat();
      step.body = allowTheme ? t("greet_wrap_body_yes") : t("greet_wrap_body_no");
    }
    titleEl.textContent = step.title || "";
    bodyEl.textContent = step.body || "";
    questionEl.textContent = step.question || "";
    questionEl.style.display = step.question ? "block" : "none";
    actionsEl.innerHTML = "";
    step.actions.forEach((action) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `pill${action.ghost ? " ghost" : ""}`;
      button.textContent = action.label;
      button.addEventListener("click", () => {
        if (key === "start") {
          allowTheme = Boolean(action.value);
        }
        if (key === "day") {
          dayChoice = action.value || "okay";
        }
        if (key === "mood") {
          moodChoice = action.value || "neutral";
        }
        if (key === "energy") {
          energyChoice = action.value || "medium";
        }
        if (key === "stress") {
          stressChoice = action.value || "mid";
        }
        if (key === "vibe") {
          vibeChoice = action.value || "calm";
        }
        if (key === "focus") {
          focusChoice = action.value || "play";
        }
        if (key === "social") {
          socialChoice = action.value || "solo";
        }
        if (key === "time") {
          timeChoice = action.value || "quick";
        }
        if (key === "ready") {
          readyChoice = action.value || "ready";
        }
        if (action.close) {
          closePopup();
          return;
        }
        if (action.next) renderStep(action.next);
      });
      actionsEl.appendChild(button);
    });
  };

  const closePopup = () => {
    overlay.classList.remove("show");
    setTimeout(() => overlay.remove(), 180);
    document.removeEventListener("keydown", handleKeydown);
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape") closePopup();
  };

  closeBtn?.addEventListener("click", closePopup);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closePopup();
  });
  document.addEventListener("keydown", handleKeydown);

  document.body.appendChild(overlay);
  renderStep("start");
  requestAnimationFrame(() => overlay.classList.add("show"));
};

const HUB_STATE_KEY = "tm_local_hub_state";
const ADMIN_FLAG_KEY = "tm_admin_mode";
const MINI_EVENTS_KEY = "tm_mini_events_enabled";
const SCHOOL_MODE_KEY = "tm_school_mode";
const GOD_MODE_KEY = "tm_god_mode";
const FREE_BANNER_COLLAPSED_KEY = "tm_free_banner_collapsed";
const FREE_BANNER_TEXT_KEY = "tm_free_banner_text";
const ADMIN_TARGET_USERNAME_KEY = "tm_admin_target_username";
const SECRET_TM_PAGE_KEY = "secretTMPageUnlocked";
const DEFAULT_FREE_BANNER_TEXT =
  "\ud83d\udd25 This Site is 100% Free \u2014 No Paywalls. No Subscriptions. Just Games.";

const readHubState = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(HUB_STATE_KEY) || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch {
    return {};
  }
};

const clampNonNegative = (value, fallback = 0) => {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.max(0, numeric);
};
const storedHubState = readHubState();
let adminEnabled = Boolean(authSessionToken && isCurrentUserAdmin());
let miniEventsEnabled =
  storedHubState.miniEventsEnabled !== undefined
    ? Boolean(storedHubState.miniEventsEnabled)
    : localStorage.getItem(MINI_EVENTS_KEY) !== "0" && localStorage.getItem("miniEventsEnabled") !== "false";
let schoolModeEnabled =
  storedHubState.schoolMode !== undefined
    ? Boolean(storedHubState.schoolMode)
    : localStorage.getItem(SCHOOL_MODE_KEY) === "1" || localStorage.getItem("schoolMode") === "true";
let godModeEnabled = localStorage.getItem(GOD_MODE_KEY) === "1";
let sessionSeconds = Math.floor(clampNonNegative(storedHubState.sessionTime, 0));
let localMultiplier = clampNonNegative(loadNumber(LOCAL_MULTIPLIER_KEY, 1), 1);
let debugPreviewMode = localStorage.getItem(DEBUG_PREVIEW_KEY) === "1";
let miniXpEnabled = localStorage.getItem(MINI_XP_TOGGLE_KEY) !== "0";
let miniMoneyEnabled = localStorage.getItem(MINI_MONEY_TOGGLE_KEY) !== "0";
let miniVisualsEnabled = localStorage.getItem(MINI_VISUALS_TOGGLE_KEY) !== "0";
let miniSoundEnabled = localStorage.getItem(MINI_SOUND_TOGGLE_KEY) !== "0";
let passiveXpPerMinute = loadNumber(PASSIVE_XP_RATE_KEY, DEFAULT_PASSIVE_XP_PER_MIN);
let passiveMoneyPerMinute = loadNumber(PASSIVE_MONEY_RATE_KEY, DEFAULT_PASSIVE_MONEY_PER_MIN);
let secretPageUnlocked = Boolean(
  storedHubState.secretTMPageUnlocked ||
    localStorage.getItem(SECRET_TM_PAGE_KEY) === "1" ||
    localStorage.getItem("secretTMPageUnlocked") === "true"
);

const readAchievements = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "{}");
    return raw && typeof raw === "object"
      ? {
          clicks: Math.max(0, Math.floor(Number(raw.clicks) || 0)),
          clicked100: Boolean(raw.clicked100),
          secretFound: Boolean(raw.secretFound),
          xpMilestones: Array.isArray(raw.xpMilestones) ? raw.xpMilestones : [],
        }
      : { clicks: 0, clicked100: false, secretFound: false, xpMilestones: [] };
  } catch {
    return { clicks: 0, clicked100: false, secretFound: false, xpMilestones: [] };
  }
};

let achievements = readAchievements();

const isGameView = () =>
  document.body.classList.contains("game-only") ||
  pageMode === "play" ||
  pageMode === "custom-game" ||
  pageMode === "app" ||
  pageMode === "secret";

const hasAdminTabAccess = () =>
  adminEnabled && isCurrentUserAdmin();

const grantAdminTabAccess = () => {
  adminEnabled = Boolean(authSessionToken && isCurrentUserAdmin());
};

const revokeAdminTabAccess = () => {
  adminEnabled = false;
};

let lastHubSyncAt = 0;
const HUB_SYNC_MIN_INTERVAL_MS = 900;

const setLocalStorageIfChanged = (key, value) => {
  const next = String(value);
  const previous = localStorage.getItem(key);
  if (previous === next) return false;
  localStorage.setItem(key, next);
  return true;
};

const syncHubState = (options = {}) => {
  const force = options.force === true;
  const now = Date.now();
  if (!force && now - lastHubSyncAt < HUB_SYNC_MIN_INTERVAL_MS) return;
  lastHubSyncAt = now;
  passiveXpPerMinute = Math.min(12, Math.max(0, Number(passiveXpPerMinute) || DEFAULT_PASSIVE_XP_PER_MIN));
  passiveMoneyPerMinute = Math.min(8, Math.max(0, Number(passiveMoneyPerMinute) || DEFAULT_PASSIVE_MONEY_PER_MIN));
  localMultiplier = Math.min(8, Math.max(0.25, Number(localMultiplier) || 1));
  hubVisuals = cloneHubVisuals(hubVisuals);
  const purchasedThemes = buildPurchasedThemesMap();
  const purchasedVisuals = buildPurchasedVisualsMap();
  const activeTheme = enforceThemeChoice(localStorage.getItem(THEME_KEY) || "default");
  const miniQuestState = loadObjectState(MINI_QUEST_PROGRESS_KEY, DEFAULT_MINI_QUEST_PROGRESS);
  const hiddenEggState = loadObjectState(HIDDEN_EASTER_EGGS_KEY, {});
  miniQuestProgress = { ...miniQuestProgress, ...miniQuestState };
  hiddenEasterEggs = { ...hiddenEasterEggs, ...hiddenEggState };
  const payload = {
    xp: Math.max(0, Math.floor(xpTotal)),
    money: Math.max(0, Math.floor(tmDollars)),
    rank: currentRank || getRank(xpTotal),
    admin: Boolean(adminEnabled),
    miniEventsEnabled: Boolean(miniEventsEnabled),
    schoolMode: Boolean(schoolModeEnabled),
    sessionTime: Math.max(0, Math.floor(sessionSeconds)),
    secretTMPageUnlocked: Boolean(secretPageUnlocked),
    hiddenEasterEggs: hiddenEasterEggs,
    miniQuestProgress: miniQuestProgress,
    purchasedThemes: purchasedThemes,
    activeTheme: activeTheme,
    purchasedVisuals: purchasedVisuals,
  };
  const payloadJson = JSON.stringify(payload);
  const hiddenEggsJson = JSON.stringify(hiddenEasterEggs);
  const miniQuestJson = JSON.stringify(miniQuestProgress);
  const purchasedThemesJson = JSON.stringify(purchasedThemes);
  const purchasedVisualsJson = JSON.stringify(purchasedVisuals);
  setLocalStorageIfChanged(HUB_STATE_KEY, payloadJson);
  setLocalStorageIfChanged(ADMIN_FLAG_KEY, adminEnabled ? "1" : "0");
  setLocalStorageIfChanged(MINI_EVENTS_KEY, miniEventsEnabled ? "1" : "0");
  setLocalStorageIfChanged(SCHOOL_MODE_KEY, schoolModeEnabled ? "1" : "0");
  setLocalStorageIfChanged(GOD_MODE_KEY, godModeEnabled ? "1" : "0");
  setLocalStorageIfChanged(PASSIVE_XP_RATE_KEY, String(passiveXpPerMinute));
  setLocalStorageIfChanged(PASSIVE_MONEY_RATE_KEY, String(passiveMoneyPerMinute));
  setLocalStorageIfChanged(LOCAL_MULTIPLIER_KEY, String(localMultiplier));
  setLocalStorageIfChanged(DEBUG_PREVIEW_KEY, debugPreviewMode ? "1" : "0");
  setLocalStorageIfChanged(MINI_XP_TOGGLE_KEY, miniXpEnabled ? "1" : "0");
  setLocalStorageIfChanged(MINI_MONEY_TOGGLE_KEY, miniMoneyEnabled ? "1" : "0");
  setLocalStorageIfChanged(MINI_VISUALS_TOGGLE_KEY, miniVisualsEnabled ? "1" : "0");
  setLocalStorageIfChanged(MINI_SOUND_TOGGLE_KEY, miniSoundEnabled ? "1" : "0");
  setLocalStorageIfChanged(SECRET_TM_PAGE_KEY, secretPageUnlocked ? "1" : "0");
  setLocalStorageIfChanged("xp", String(payload.xp));
  setLocalStorageIfChanged("money", String(payload.money));
  setLocalStorageIfChanged("rank", String(payload.rank));
  setLocalStorageIfChanged("admin", payload.admin ? "true" : "false");
  setLocalStorageIfChanged("miniEventsEnabled", payload.miniEventsEnabled ? "true" : "false");
  setLocalStorageIfChanged("schoolMode", payload.schoolMode ? "true" : "false");
  setLocalStorageIfChanged("sessionTime", String(payload.sessionTime));
  setLocalStorageIfChanged("secretTMPageUnlocked", payload.secretTMPageUnlocked ? "true" : "false");
  setLocalStorageIfChanged(HIDDEN_EASTER_EGGS_KEY, hiddenEggsJson);
  setLocalStorageIfChanged(MINI_QUEST_PROGRESS_KEY, miniQuestJson);
  setLocalStorageIfChanged(PURCHASED_THEMES_PUBLIC_KEY, purchasedThemesJson);
  setLocalStorageIfChanged(ACTIVE_THEME_PUBLIC_KEY, activeTheme);
  setLocalStorageIfChanged(PURCHASED_VISUALS_PUBLIC_KEY, purchasedVisualsJson);
};

let achievementSaveTimer = null;
const flushAchievements = () => {
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
};
const saveAchievements = (options = {}) => {
  const force = options.force === true;
  if (force) {
    if (achievementSaveTimer) {
      window.clearTimeout(achievementSaveTimer);
      achievementSaveTimer = null;
    }
    flushAchievements();
    return;
  }
  if (achievementSaveTimer) return;
  achievementSaveTimer = window.setTimeout(() => {
    achievementSaveTimer = null;
    flushAchievements();
  }, 1200);
};

window.addEventListener("beforeunload", () => {
  if (miniQuestSaveTimer) {
    window.clearTimeout(miniQuestSaveTimer);
    miniQuestSaveTimer = null;
    flushMiniQuestProgress();
  }
  if (achievementSaveTimer) {
    window.clearTimeout(achievementSaveTimer);
    achievementSaveTimer = null;
    flushAchievements();
  }
});

const syncAdminBannerInputsFromStorage = () => {
  const bannerTextInput = document.getElementById("admin-banner-text");
  if (bannerTextInput) {
    bannerTextInput.value = localStorage.getItem(FREE_BANNER_TEXT_KEY) || DEFAULT_FREE_BANNER_TEXT;
  }
};

const applyGlobalBannerPayload = (payload) => {
  const source = payload && typeof payload === "object" ? payload.globalBanner || payload.banner || null : null;
  if (!source || typeof source !== "object") return false;
  const textValue = String(source.text || source.bannerText || "").trim();
  const safeText = textValue || DEFAULT_FREE_BANNER_TEXT;
  localStorage.setItem(FREE_BANNER_TEXT_KEY, safeText);
  applyAdminColorOverrides();
  updateFreeBannerText();
  syncAdminBannerInputsFromStorage();
  return true;
};

const applyAdminColorOverrides = () => {
  // Colors always follow active theme. Remove any legacy manual overrides.
  localStorage.removeItem("tm_banner_color_a");
  localStorage.removeItem("tm_banner_color_b");
  localStorage.removeItem("tm_admin_accent_color");
  document.body.style.removeProperty("--promo-admin-a");
  document.body.style.removeProperty("--promo-admin-b");
  document.body.style.removeProperty("--accent");
  document.body.style.removeProperty("--glow");
  document.body.style.removeProperty("--glass-border");
};

let freeBannerElement = null;
let miniEventLayer = null;
let miniEventTimer = null;
let lastMiniInteraction = 0;
let freeBannerCompactSyncRaf = 0;
let freeBannerCompactSyncBound = false;

const applyFreeBannerCompactSync = () => {
  freeBannerCompactSyncRaf = 0;
  if (!freeBannerElement) return;
  freeBannerElement.classList.toggle("compact", window.scrollY > 20);
};

const queueFreeBannerCompactSync = () => {
  if (freeBannerCompactSyncRaf) return;
  freeBannerCompactSyncRaf = window.requestAnimationFrame(applyFreeBannerCompactSync);
};

const bindFreeBannerCompactSync = () => {
  if (freeBannerCompactSyncBound) return;
  freeBannerCompactSyncBound = true;
  window.addEventListener("scroll", queueFreeBannerCompactSync, { passive: true });
  window.addEventListener("resize", queueFreeBannerCompactSync, { passive: true });
};

const updateBodyBannerClass = () => {
  const collapsed = localStorage.getItem(FREE_BANNER_COLLAPSED_KEY) === "1";
  const active = Boolean(freeBannerElement && !isGameView());
  document.body.classList.toggle("with-free-banner", active);
  document.body.classList.toggle("banner-collapsed", active && collapsed);
  if (freeBannerElement) {
    const toggle = freeBannerElement.querySelector("[data-free-banner-toggle]");
    if (toggle) {
      toggle.textContent = collapsed ? "+" : "_";
      toggle.setAttribute(
        "aria-label",
        collapsed ? "Expand free banner" : "Minimize free banner"
      );
    }
  }
};

const updateFreeBannerText = () => {
  if (!freeBannerElement) return;
  const textNode = freeBannerElement.querySelector("[data-free-banner-text]");
  if (!textNode) return;
  const stored = (localStorage.getItem(FREE_BANNER_TEXT_KEY) || "").trim();
  textNode.textContent = stored || DEFAULT_FREE_BANNER_TEXT;
};

const updateBannerSchoolButton = () => {
  if (!freeBannerElement) return;
  const button = freeBannerElement.querySelector("[data-free-banner-school]");
  if (!button) return;
  button.textContent = schoolModeEnabled ? "School Mode: On" : "School Mode: Off";
};

const removeFreeBanner = () => {
  if (freeBannerElement) {
    freeBannerElement.remove();
    freeBannerElement = null;
  }
  document.body.classList.remove("with-free-banner", "banner-collapsed");
};

const ensureFreeBanner = () => {
  if (isGameView()) {
    removeFreeBanner();
    return;
  }
  if (freeBannerElement) {
    updateBodyBannerClass();
    updateFreeBannerText();
    updateBannerSchoolButton();
    return;
  }
  const collapsed = localStorage.getItem(FREE_BANNER_COLLAPSED_KEY) === "1";
  const banner = document.createElement("aside");
  banner.className = `free-glass-banner${collapsed ? " collapsed" : ""}`;
  banner.innerHTML = `
    <div class="free-banner-main">
      <span class="free-banner-badge">100% FREE</span>
      <p class="free-banner-text" data-free-banner-text>${DEFAULT_FREE_BANNER_TEXT}</p>
    </div>
    <div class="free-banner-actions">
      <button class="free-banner-school" type="button" data-free-banner-school>School Mode: Off</button>
      <button class="free-banner-toggle" type="button" data-free-banner-toggle aria-label="Minimize free banner">_</button>
    </div>
  `;
  document.body.appendChild(banner);
  freeBannerElement = banner;
  const collapseButton = banner.querySelector("[data-free-banner-toggle]");
  const schoolButton = banner.querySelector("[data-free-banner-school]");
  collapseButton?.addEventListener("click", () => {
    const next = localStorage.getItem(FREE_BANNER_COLLAPSED_KEY) === "1" ? "0" : "1";
    localStorage.setItem(FREE_BANNER_COLLAPSED_KEY, next);
    banner.classList.toggle("collapsed", next === "1");
    updateBodyBannerClass();
  });
  schoolButton?.addEventListener("click", () => {
    setSchoolModeEnabled(!schoolModeEnabled);
  });
  updateFreeBannerText();
  updateBannerSchoolButton();
  updateBodyBannerClass();
  bindFreeBannerCompactSync();
  queueFreeBannerCompactSync();
};

const NAV_LINK_ORDER = [
  "index.html",
  "games.html",
  "favorites.html",
  "profile.html",
  "friends.html",
  "leaderboard.html",
  "messages.html",
  "tmcash.html",
  "bank.html",
  "shop.html",
  "feedback.html",
  "settings.html",
  "about.html",
  "admin.html",
];

const NAV_PAGE_BY_HREF = {
  "index.html": "popular",
  "games.html": "all",
  "favorites.html": "favorites",
  "profile.html": "profile",
  "friends.html": "friends",
  "leaderboard.html": "leaderboard",
  "messages.html": "messages",
  "feedback.html": "feedback",
  "tmcash.html": "tmcash",
  "bank.html": "bank",
  "shop.html": "shop",
  "settings.html": "settings",
  "about.html": "about",
  "admin.html": "admin",
};

const toNavHrefKey = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^.*\//, "")
    .split("?")[0]
    .split("#")[0];

const getNavHrefKey = (link) => toNavHrefKey(link?.getAttribute("href") || link?.href || "");

const normalizeTopNavOrder = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const nodes = [...links.querySelectorAll("a.nav-link")];
  if (!nodes.length) return;

  const ranked = nodes
    .map((node, index) => {
      const hrefKey = getNavHrefKey(node);
      const orderIndex = NAV_LINK_ORDER.indexOf(hrefKey);
      return {
        node,
        index,
        hrefKey,
        orderIndex: orderIndex >= 0 ? orderIndex : NAV_LINK_ORDER.length + index,
      };
    })
    .sort((a, b) => {
      if (a.orderIndex !== b.orderIndex) return a.orderIndex - b.orderIndex;
      return a.index - b.index;
    });

  const fragment = document.createDocumentFragment();
  ranked.forEach((entry) => {
    fragment.appendChild(entry.node);
    const mode = NAV_PAGE_BY_HREF[entry.hrefKey];
    if (mode) {
      entry.node.classList.toggle("active", pageMode === mode);
    }
  });
  links.appendChild(fragment);
};

const ensureProfileNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const label = navEmojis.nav_profile ? `${navEmojis.nav_profile} ${t("nav_profile")}` : t("nav_profile");
  const link = links.querySelector(".profile-nav-link") || document.createElement("a");
  link.className = `nav-link profile-nav-link${pageMode === "profile" ? " active" : ""}`;
  link.href = "profile.html";
  link.setAttribute("data-i18n", "nav_profile");
  link.textContent = label;
  const bankLink = links.querySelector('a[href="bank.html"]');
  if (bankLink) {
    links.insertBefore(link, bankLink);
  } else {
    const shopLink = links.querySelector('a[href="shop.html"]');
    if (shopLink) {
      links.insertBefore(link, shopLink);
    } else {
      links.appendChild(link);
    }
  }
  normalizeTopNavOrder();
};

const ensureFriendsNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".friends-nav-link");
  if (existing) {
    existing.classList.toggle("active", pageMode === "friends");
    if (!(existing.textContent || "").includes("🤝")) existing.textContent = "🤝 Friends";
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link friends-nav-link${pageMode === "friends" ? " active" : ""}`;
  link.href = "friends.html";
  link.textContent = "🤝 Friends";
  const leaderboardLink = links.querySelector('a[href="leaderboard.html"]');
  if (leaderboardLink) {
    links.insertBefore(link, leaderboardLink);
  } else {
    links.appendChild(link);
  }
  normalizeTopNavOrder();
};

const ensureLeaderboardNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".leaderboard-nav-link");
  if (existing) {
    existing.classList.toggle("active", pageMode === "leaderboard");
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link leaderboard-nav-link${pageMode === "leaderboard" ? " active" : ""}`;
  link.href = "leaderboard.html";
  link.textContent = "🏆 Leaderboard";
  const bankLink = links.querySelector('a[href="bank.html"]');
  if (bankLink) {
    links.insertBefore(link, bankLink);
  } else {
    links.appendChild(link);
  }
  normalizeTopNavOrder();
};

const ensureMessagesNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".message-nav-link");
  if (existing) {
    existing.classList.toggle("active", pageMode === "messages");
    if (!(existing.textContent || "").includes("💬")) existing.textContent = "💬 Messages";
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link message-nav-link${pageMode === "messages" ? " active" : ""}`;
  link.href = "messages.html";
  link.textContent = "💬 Messages";
  const bankLink = links.querySelector('a[href="bank.html"]');
  if (bankLink) {
    links.insertBefore(link, bankLink);
  } else {
    links.appendChild(link);
  }
  normalizeTopNavOrder();
};

const ensureFeedbackNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".feedback-nav-link");
  if (existing) {
    existing.classList.toggle("active", pageMode === "feedback");
    if (!(existing.textContent || "").includes("📝")) existing.textContent = "📝 Feedback";
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link feedback-nav-link${pageMode === "feedback" ? " active" : ""}`;
  link.href = "feedback.html";
  link.textContent = "📝 Feedback";
  const settingsLink = links.querySelector('a[href="settings.html"]');
  if (settingsLink) {
    links.insertBefore(link, settingsLink);
  } else {
    links.appendChild(link);
  }
  normalizeTopNavOrder();
};

const ensureTmCashNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".cash-nav-link");
  if (existing) {
    existing.classList.toggle("active", pageMode === "tmcash");
    if (!(existing.textContent || "").includes("💸")) existing.textContent = "💸 TM Cash";
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link cash-nav-link${pageMode === "tmcash" ? " active" : ""}`;
  link.href = "tmcash.html";
  link.textContent = "💸 TM Cash";
  const bankLink = links.querySelector('a[href="bank.html"]');
  if (bankLink) {
    links.insertBefore(link, bankLink);
  } else {
    links.appendChild(link);
  }
  normalizeTopNavOrder();
};

const ensureAdminNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".admin-nav-link");
  if (!hasAdminTabAccess()) {
    existing?.remove();
    normalizeTopNavOrder();
    return;
  }
  if (existing) {
    existing.classList.toggle("active", pageMode === "admin");
    normalizeTopNavOrder();
    return;
  }
  const link = document.createElement("a");
  link.className = `nav-link admin-nav-link${pageMode === "admin" ? " active" : ""}`;
  link.href = "admin.html";
  link.textContent = "🛠️ Admin Controls";
  links.appendChild(link);
  normalizeTopNavOrder();
};

const ensureSecretNavLink = () => {
  const links = document.querySelector(".top-links");
  if (!links) return;
  const existing = links.querySelector(".secret-nav-link");
  existing?.remove();
  normalizeTopNavOrder();
};

const applyDistractionFreeClass = () => {
  document.body.classList.toggle("distraction-free", isGameView());
};

const applySchoolMode = () => {
  document.body.classList.toggle("school-mode", schoolModeEnabled);
  if (schoolModeEnabled) {
    applyPerformance("low");
    if (performanceButtons.length) {
      updatePerformanceUI("low");
    }
  } else {
    const restored = normalizePerformanceChoice(localStorage.getItem(PERFORMANCE_KEY) || "high");
    applyPerformance(restored);
    if (performanceButtons.length) {
      updatePerformanceUI(restored);
    }
  }
};

const applyGodModeVisual = () => {
  document.body.classList.toggle("god-mode", godModeEnabled && hasAdminTabAccess() && !isGameView());
};

const setAdminEnabled = (enabled, options = {}) => {
  const { grantTab = false, silent = false } = options;
  if (enabled && !isCurrentUserAdmin()) {
    adminEnabled = false;
    revokeAdminTabAccess();
    ensureAdminNavLink();
    applyGodModeVisual();
    syncHubState();
    if (!silent) showActionToast("Only admin accounts can use Admin tools.");
    return;
  }
  adminEnabled = Boolean(enabled);
  if (adminEnabled && grantTab) grantAdminTabAccess();
  if (!adminEnabled) revokeAdminTabAccess();
  ensureAdminNavLink();
  applyGodModeVisual();
  syncHubState();
  if (!silent) {
    showActionToast(adminEnabled ? "Admin mode enabled in this tab." : "Admin mode disabled.");
  }
};

const setMiniEventsEnabled = (enabled, options = {}) => {
  miniEventsEnabled = Boolean(enabled);
  syncHubState();
  syncMiniEventLoop();
  if (!options.silent) {
    showActionToast(miniEventsEnabled ? "Mini-events enabled." : "Mini-events disabled.");
  }
};

function setSchoolModeEnabled(enabled, options = {}) {
  schoolModeEnabled = Boolean(enabled);
  applySchoolMode();
  applyGodModeVisual();
  updateBannerSchoolButton();
  syncHubState();
  syncMiniEventLoop();
  if (!options.silent) {
    showActionToast(schoolModeEnabled ? "School mode enabled." : "School mode disabled.");
  }
}

const createFloatingDelta = (x, y, text, tone) => {
  if (isGameView()) return;
  const popup = document.createElement("div");
  popup.className = `mini-delta mini-delta-${tone}`;
  popup.textContent = text;
  const safeX = Number.isFinite(x) ? x : window.innerWidth / 2;
  const safeY = Number.isFinite(y) ? y : window.innerHeight / 2;
  popup.style.left = `${safeX}px`;
  popup.style.top = `${safeY}px`;
  document.body.appendChild(popup);
  requestAnimationFrame(() => popup.classList.add("show"));
  setTimeout(() => popup.remove(), 900);
};

const playMiniTone = (type = "confirm") => {
  if (!miniSoundEnabled || schoolModeEnabled) return;
  playUiTone(type);
};

const triggerMilestoneFx = (kind, x, y) => {
  if (!miniVisualsEnabled || schoolModeEnabled || isGameView()) return;
  if (kind === "xp") {
    triggerSparkBurst(x, y, 12);
  } else {
    triggerConfetti(x, y, 10);
  }
};

const checkMilestones = () => {
  const xpThresholds = [100, 500, 1000, 2500, 5000];
  xpThresholds.forEach((threshold) => {
    if (xpTotal < threshold) return;
    if (achievements.xpMilestones.includes(threshold)) return;
    achievements.xpMilestones.push(threshold);
    saveAchievements();
    showActionToast(`Milestone: ${threshold.toLocaleString()} XP`);
    triggerMilestoneFx("xp", window.innerWidth / 2, window.innerHeight / 2);
  });
  const moneyMilestone = [100, 500, 1000].find(
    (threshold) => tmDollars >= threshold && !achievements.xpMilestones.includes(`tm-${threshold}`)
  );
  if (moneyMilestone) {
    achievements.xpMilestones.push(`tm-${moneyMilestone}`);
    saveAchievements();
    showActionToast(`Milestone: ${moneyMilestone.toLocaleString()} TM$`);
    triggerMilestoneFx("money", window.innerWidth / 2, window.innerHeight / 2);
  }
};

const markHiddenEgg = (key) => {
  if (!key) return;
  if (hiddenEasterEggs[key]) return;
  hiddenEasterEggs[key] = {
    foundAt: new Date().toISOString(),
  };
  saveHiddenEasterEggs();
  syncHubState();
};

const completeMiniQuest = (key, xpReward, moneyReward, label) => {
  if (!key) return;
  if (miniQuestProgress[key]) return;
  miniQuestProgress[key] = true;
  saveMiniQuestProgress({ force: true });
  grantLocalRewards(xpReward, moneyReward, {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    quiet: true,
    source: "quest",
  });
  showActionToast(`Mini quest complete: ${label}`);
  triggerSparkBurst(window.innerWidth * 0.5, window.innerHeight * 0.35, schoolModeEnabled ? 8 : 16);
  syncHubState();
};

const trackMiniQuestClick = (x, y) => {
  miniQuestProgress.clickQuestCount = Math.max(0, Number(miniQuestProgress.clickQuestCount) || 0) + 1;
  if (!miniQuestProgress.clickQuestDone && miniQuestProgress.clickQuestCount >= 50) {
    completeMiniQuest("clickQuestDone", 32, 24, "Click 50 objects");
  }
  if (!miniQuestProgress.hiddenCornerFound) {
    const width = Math.max(1, window.innerWidth);
    const height = Math.max(1, window.innerHeight);
    const inCorner = x <= 26 && y >= height - 26;
    if (inCorner) {
      markHiddenEgg("hiddenCorner");
      completeMiniQuest("hiddenCornerFound", 22, 14, "Find the hidden corner");
    }
  }
  saveMiniQuestProgress();
};

const grantLocalRewards = (xpGain, moneyGain, options = {}) => {
  const { x = NaN, y = NaN, quiet = false, source = "event" } = options;
  const baseXp = miniXpEnabled ? Math.max(0, Math.floor(xpGain || 0)) : 0;
  const baseMoney = miniMoneyEnabled ? Math.max(0, Math.floor(moneyGain || 0)) : 0;
  const multiplier = Math.max(0.25, Number(localMultiplier) || 1);
  const xpScaled = Math.floor(baseXp * multiplier);
  const moneyScaled = Math.floor(baseMoney * multiplier);
  const xpAward = godModeEnabled ? xpScaled * 2 : xpScaled;
  const moneyAward = godModeEnabled ? moneyScaled * 2 : moneyScaled;
  const previewOnly = debugPreviewMode;
  if (xpAward <= 0 && moneyAward <= 0) return;
  if (previewOnly) {
    if (miniVisualsEnabled) {
      if (xpAward > 0) createFloatingDelta(x, y - 12, `+${xpAward} XP`, "xp");
      if (moneyAward > 0) createFloatingDelta(x, y + 12, `+${moneyAward} TM$`, "money");
      triggerSparkBurst(Number.isFinite(x) ? x : window.innerWidth / 2, Number.isFinite(y) ? y : window.innerHeight / 2, 8);
    }
    if (!quiet) showActionToast("Debug preview: no XP/TM changes.");
    return;
  }
  if (xpAward > 0) {
    xpTotal += xpAward;
    syncRank();
    if (!quiet) showXpToast(xpAward);
    if (miniVisualsEnabled) createFloatingDelta(x, y - 12, `+${xpAward} XP`, "xp");
  }
  if (moneyAward > 0) {
    tmDollars += moneyAward;
    saveTmState();
    updateEconomyUI();
    if (!quiet) showActionToast(`+${moneyAward.toLocaleString()} TM$`);
    if (miniVisualsEnabled) createFloatingDelta(x, y + 12, `+${moneyAward} TM$`, "money");
  }
  if (source === "event") {
    playMiniTone("confirm");
  }
  checkMilestones();
  syncHubState();
};

const ensureMiniEventLayer = () => {
  if (miniEventLayer || isGameView()) return;
  miniEventLayer = document.createElement("div");
  miniEventLayer.className = "mini-event-layer";
  document.body.appendChild(miniEventLayer);
};

const clearMiniEventLayer = () => {
  if (!miniEventLayer) return;
  miniEventLayer.innerHTML = "";
};

const removeMiniEventLayer = () => {
  if (!miniEventLayer) return;
  miniEventLayer.remove();
  miniEventLayer = null;
};

const triggerSparkBurst = (x, y, count = 8) => {
  if (isGameView() || schoolModeEnabled || !miniVisualsEnabled) return;
  ensureMiniEventLayer();
  if (!miniEventLayer) return;
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "mini-particle spark";
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.setProperty("--vx", `${(Math.random() - 0.5) * 120}px`);
    spark.style.setProperty("--vy", `${(Math.random() - 0.5) * 120}px`);
    miniEventLayer.appendChild(spark);
    setTimeout(() => spark.remove(), 800);
  }
};

const triggerConfetti = (x, y, count = 16) => {
  if (isGameView() || schoolModeEnabled || !miniVisualsEnabled) return;
  ensureMiniEventLayer();
  if (!miniEventLayer) return;
  for (let i = 0; i < count; i += 1) {
    const confetti = document.createElement("span");
    confetti.className = "mini-particle confetti";
    confetti.style.left = `${x}px`;
    confetti.style.top = `${y}px`;
    confetti.style.setProperty("--vx", `${(Math.random() - 0.5) * 200}px`);
    confetti.style.setProperty("--vy", `${-140 - Math.random() * 90}px`);
    confetti.style.background = `hsl(${Math.floor(Math.random() * 360)} 90% 65%)`;
    miniEventLayer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1100);
  }
};

const spawnMiniNode = () => {
  if (isGameView() || schoolModeEnabled || !miniEventsEnabled || document.hidden) return;
  ensureMiniEventLayer();
  if (!miniEventLayer) return;
  const node = document.createElement("button");
  node.type = "button";
  const kind = Math.random() > 0.45 ? "coin" : "spark";
  node.className = `mini-event-node ${kind}`;
  node.textContent = kind === "coin" ? "\ud83e\ude99" : "\u2726";
  const left = Math.max(8, Math.min(92, Math.random() * 100));
  const top = Math.max(18, Math.min(82, Math.random() * 100));
  node.style.left = `${left}%`;
  node.style.top = `${top}%`;
  node.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const rect = node.getBoundingClientRect();
    const xpGain = 2 + Math.floor(Math.random() * 4); // 2-5
    const moneyGain = 1 + Math.floor(Math.random() * 3); // 1-3
    grantLocalRewards(xpGain, moneyGain, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      quiet: true,
      source: "event",
    });
    if (kind === "coin") {
      triggerConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
    } else {
      triggerSparkBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
    }
    node.remove();
  });
  miniEventLayer.appendChild(node);
  setTimeout(() => node.remove(), 5600);
};

const stopMiniEventLoop = () => {
  if (miniEventTimer) {
    clearInterval(miniEventTimer);
    miniEventTimer = null;
  }
  clearMiniEventLayer();
};

function syncMiniEventLoop() {
  if (isGameView() || schoolModeEnabled || !miniEventsEnabled) {
    stopMiniEventLoop();
    removeMiniEventLayer();
    return;
  }
  ensureMiniEventLayer();
  if (miniEventTimer) clearInterval(miniEventTimer);
  const interval = getAdaptiveIntervalMs(9500, 6500);
  miniEventTimer = setInterval(spawnMiniNode, interval);
}

const triggerMiniInteractionReward = (target) => {
  if (isGameView() || schoolModeEnabled || !miniEventsEnabled) return;
  const now = Date.now();
  const cooldown = 650;
  if (now - lastMiniInteraction < cooldown) return;
  lastMiniInteraction = now;
  achievements.clicks += 1;
  if (!achievements.clicked100 && achievements.clicks >= 100) {
    achievements.clicked100 = true;
    showActionToast("Achievement unlocked: Clicked 100 times.");
    triggerSparkBurst(window.innerWidth / 2, window.innerHeight / 2, 12);
  }
  saveAchievements();
  const rect = target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + Math.min(24, rect.height / 2);
  const xpGain = 2 + Math.floor(Math.random() * 4); // 2-5
  const moneyGain = 1 + Math.floor(Math.random() * 3); // 1-3
  grantLocalRewards(xpGain, moneyGain, { x, y, quiet: true, source: "event" });
  if (Math.random() > 0.7) {
    triggerSparkBurst(x, y, 6);
  }
};

document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!isGameView()) {
      trackMiniQuestClick(event.clientX, event.clientY);
    }
    if (target.closest(".mini-event-node")) return;
    const trigger = target.closest(
      ".pill, .nav-link, .game-card, .app-card, .hero-feature, .setting-option, .shop-item-card, .free-glass-banner, .free-banner-school, .free-banner-toggle"
    );
    if (!trigger) return;
    triggerMiniInteractionReward(trigger);
  },
  true
);

let secretClickCount = 0;
const triggerFiveTapSecret = () => {
  markHiddenEgg("brand_five_tap");
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  triggerConfetti(x, y, schoolModeEnabled ? 8 : 16);
  triggerSparkBurst(x, y, schoolModeEnabled ? 8 : 14);
  grantLocalRewards(5, 3, { x, y, quiet: true, source: "event" });
  secretPageUnlocked = true;
  achievements.secretFound = true;
  saveAchievements({ force: true });
  syncHubState();
  showActionToast("Secret combo found.");
  setTimeout(() => {
    window.location.href = "secret.html";
  }, 220);
};

const handleBrandClickUnlock = () => {
  if (isGameView()) return;
  secretClickCount += 1;
  if (brandButton) {
    brandButton.classList.add("brand-pop");
    setTimeout(() => brandButton.classList.remove("brand-pop"), 240);
  }
  if (secretClickCount >= 5) {
    secretClickCount = 0;
    triggerFiveTapSecret();
  }
};

const guardSecretPageAccess = () => {
  if (pageMode !== "secret") return;
  if (secretPageUnlocked) return;
  window.location.replace("index.html");
};

const bindAdminUnlock = () => {
  const handleSequence = (event) => {
    const target = event.target;
    if (target instanceof HTMLElement) {
      if (target.closest("input, textarea, select") || target.isContentEditable) return;
    }
    if (event.shiftKey && event.altKey && event.key.toLowerCase() === "c") {
      markHiddenEgg("combo_confetti");
      triggerConfetti(window.innerWidth / 2, window.innerHeight / 2, 10);
      return;
    }
    if (event.shiftKey && event.altKey && event.key.toLowerCase() === "s") {
      markHiddenEgg("combo_spark");
      triggerSparkBurst(window.innerWidth / 2, window.innerHeight / 2, 12);
      return;
    }
    if (event.shiftKey && event.altKey && event.key.toLowerCase() === "t") {
      const options = ["default", "dark", "light", "ocean", "forest", "sunset"];
      const nextTheme = options[Math.floor(Math.random() * options.length)] || "default";
      localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
      updateThemeUI(nextTheme);
      markHiddenEgg("combo_theme_shift");
      return;
    }
  };
  window.addEventListener("keydown", handleSequence);
  if (brandButton) {
    brandButton.addEventListener("click", handleBrandClickUnlock);
    brandButton.addEventListener("mouseenter", () => {
      if (isGameView()) return;
      brandButton.classList.add("brand-hovering");
    });
    brandButton.addEventListener("mouseleave", () => {
      brandButton.classList.remove("brand-hovering");
    });
  }
};

const updateAdminPanelState = () => {
  if (pageMode !== "admin") return;
  const status = document.getElementById("admin-status");
  const meta = document.getElementById("admin-meta");
  const godButton = document.getElementById("admin-toggle-god");
  const miniButton = document.getElementById("admin-toggle-mini");
  const schoolButton = document.getElementById("admin-toggle-school");
  const debugButton = document.getElementById("admin-toggle-debug");
  const soundButton = document.getElementById("admin-toggle-sound");
  const xpToggle = document.getElementById("admin-toggle-mini-xp");
  const moneyToggle = document.getElementById("admin-toggle-mini-money");
  const visualsToggle = document.getElementById("admin-toggle-mini-visuals");
  const multiplierButton = document.getElementById("admin-toggle-multiplier");
  const lockButton = document.getElementById("admin-lock");
  if (status) {
    status.textContent = hasAdminTabAccess()
      ? "Admin unlocked for this tab"
      : "Admin locked in this tab";
  }
  if (meta) {
    meta.textContent = `XP ${Math.floor(xpTotal).toLocaleString()} • TM$ ${Math.floor(tmDollars).toLocaleString()} • Session ${sessionSeconds}s • Rate ${passiveXpPerMinute.toFixed(2)} XP/min`;
  }
  if (godButton) {
    godButton.textContent = godModeEnabled ? "God Mode: On" : "God Mode: Off";
  }
  if (miniButton) {
    miniButton.textContent = miniEventsEnabled ? "Mini-events: On" : "Mini-events: Off";
  }
  if (schoolButton) {
    schoolButton.textContent = schoolModeEnabled ? "School Mode: On" : "School Mode: Off";
  }
  if (debugButton) {
    debugButton.textContent = debugPreviewMode ? "Debug Preview: On" : "Debug Preview: Off";
  }
  if (soundButton) {
    soundButton.textContent = miniSoundEnabled ? "Event Sounds: On" : "Event Sounds: Off";
  }
  if (xpToggle) {
    xpToggle.textContent = miniXpEnabled ? "Mini XP: On" : "Mini XP: Off";
  }
  if (moneyToggle) {
    moneyToggle.textContent = miniMoneyEnabled ? "Mini Money: On" : "Mini Money: Off";
  }
  if (visualsToggle) {
    visualsToggle.textContent = miniVisualsEnabled ? "Mini Visuals: On" : "Mini Visuals: Off";
  }
  if (multiplierButton) {
    multiplierButton.textContent = `Local Multiplier: x${localMultiplier.toFixed(2).replace(/\\.00$/, "")}`;
  }
  if (lockButton) {
    lockButton.disabled = !hasAdminTabAccess();
  }
};

const parseAdminValue = (id) => {
  const input = document.getElementById(id);
  if (!input) return 0;
  const amount = Number(input.value);
  if (!Number.isFinite(amount)) return 0;
  return Math.max(0, Math.floor(amount));
};

const parseAdminPositiveValue = (id, fallback = 100) => {
  const value = parseAdminValue(id);
  if (value > 0) return value;
  return Math.max(1, Math.floor(Number(fallback) || 100));
};

let adminSelectedTargetUsername = String(localStorage.getItem(ADMIN_TARGET_USERNAME_KEY) || "")
  .trim()
  .toLowerCase();

const normalizeAdminTargetUsername = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .slice(0, 24);

const updateAdminTargetVisuals = () => {
  const activeTarget = normalizeAdminTargetUsername(adminSelectedTargetUsername);
  const chip = document.getElementById("admin-target-chip");
  if (chip) {
    chip.textContent = activeTarget ? `Target: ${activeTarget}` : "Target: none";
  }
  const rows = document.querySelectorAll("#admin-account-rows tr[data-admin-account-row][data-username]");
  rows.forEach((row) => {
    const rowUsername = normalizeAdminTargetUsername(row.getAttribute("data-username"));
    row.classList.toggle("is-target", Boolean(activeTarget && rowUsername === activeTarget));
  });
};

const resolveAdminGrantField = (type) => {
  const normalized = String(type || "").trim().toLowerCase();
  if (normalized === "xp") return "xp";
  if (normalized === "money" || normalized === "tm" || normalized === "dollars") return "tm";
  if (normalized === "streak") return "streak";
  if (normalized === "rank") return "rank";
  return "";
};

const getAdminTargetUsername = () => {
  const input = document.getElementById("admin-target-username");
  const typed = normalizeAdminTargetUsername(input?.value || "");
  if (typed && typed !== adminSelectedTargetUsername) {
    adminSelectedTargetUsername = typed;
    localStorage.setItem(ADMIN_TARGET_USERNAME_KEY, typed);
    updateAdminTargetVisuals();
  }
  return typed || normalizeAdminTargetUsername(adminSelectedTargetUsername);
};

const setAdminTargetUsername = (username) => {
  const safeUsername = normalizeAdminTargetUsername(username);
  adminSelectedTargetUsername = safeUsername;
  if (safeUsername) localStorage.setItem(ADMIN_TARGET_USERNAME_KEY, safeUsername);
  else localStorage.removeItem(ADMIN_TARGET_USERNAME_KEY);
  const input = document.getElementById("admin-target-username");
  if (input) input.value = safeUsername;
  updateAdminTargetVisuals();
};

const setAdminGrantStatus = (message, isError = false) => {
  const status = document.getElementById("admin-grant-status") || document.getElementById("admin-accounts-status");
  if (!status) return;
  status.textContent = String(message || "");
  status.classList.toggle("is-error", Boolean(isError));
};

const findAdminAccountCacheIndex = (username) => {
  const safeUsername = normalizeAdminTargetUsername(username);
  if (!safeUsername) return -1;
  return adminAccountsCache.findIndex((entry) => normalizeAdminTargetUsername(entry?.username) === safeUsername);
};

const patchAdminAccountCacheEntry = (username, patch) => {
  const index = findAdminAccountCacheIndex(username);
  if (index < 0) return false;
  const nextPatch = patch && typeof patch === "object" ? patch : {};
  const current = adminAccountsCache[index] && typeof adminAccountsCache[index] === "object" ? adminAccountsCache[index] : {};
  const next = { ...current, ...nextPatch };
  const safeRole = String(next.role || "").trim().toLowerCase();
  if (safeRole === "admin" || safeRole === "user") {
    next.role = safeRole;
    next.admin = safeRole === "admin";
  }
  adminAccountsCache[index] = next;
  applyAdminAccountSearch({ preserveStatus: true });
  return true;
};

const removeAdminAccountCacheEntry = (username) => {
  const index = findAdminAccountCacheIndex(username);
  if (index < 0) return false;
  adminAccountsCache.splice(index, 1);
  applyAdminAccountSearch({ preserveStatus: true });
  return true;
};

const scheduleAdminAccountsBackgroundRefresh = (delayMs = 1200) => {
  if (pageMode !== "admin" || !hasAdminTabAccess()) return;
  if (adminAccountsBackgroundRefreshTimer) {
    window.clearTimeout(adminAccountsBackgroundRefreshTimer);
  }
  adminAccountsBackgroundRefreshTimer = window.setTimeout(() => {
    adminAccountsBackgroundRefreshTimer = null;
    void refreshAdminAccounts({ silent: true, preserveRows: true });
  }, Math.max(300, Math.floor(Number(delayMs) || 1200)));
};

const getAdminQuickAmount = (kind) => {
  if (String(kind || "").toLowerCase() === "money" || String(kind || "").toLowerCase() === "tm") {
    return parseAdminPositiveValue("admin-quick-money-input", 100);
  }
  return parseAdminPositiveValue("admin-quick-xp-input", 100);
};

const getAdminLockMinutes = () => {
  const raw = Math.floor(Number(adminLockMinutesInput?.value || 30));
  if (!Number.isFinite(raw) || raw <= 0) return 30;
  return Math.min(10080, Math.max(1, raw));
};

const getAdminLockMessage = () => {
  const raw = String(adminLockMessageInput?.value || "")
    .trim()
    .slice(0, 160);
  return raw || "Take a break and come back later.";
};

const isAdminLockUntilUnlock = () => Boolean(adminLockUntilUnlockInput?.checked);

const submitAdminGrantRequest = async (targetUsername, field, mode, value, options = {}) => {
  const { quiet = false } = options;
  if (!hasAdminTabAccess()) return false;
  if (!authSessionToken) {
    if (!quiet) setAdminGrantStatus("Log in first.", true);
    return false;
  }
  const safeTarget = String(targetUsername || "").trim().toLowerCase();
  if (!safeTarget) {
    if (!quiet) setAdminGrantStatus("Choose a target username first.", true);
    return false;
  }
  setAdminTargetUsername(safeTarget);
  const safeField = resolveAdminGrantField(field);
  const safeMode = String(mode || "").trim().toLowerCase();
  if (!safeField || !safeMode) {
    if (!quiet) setAdminGrantStatus("Invalid grant action.", true);
    return false;
  }
  if (safeField === "rank") {
    if (safeMode !== "set") {
      if (!quiet) setAdminGrantStatus("Rank can only be set directly.", true);
      return false;
    }
    const rankValue = String(value || "").trim().slice(0, 40);
    if (!rankValue) {
      if (!quiet) setAdminGrantStatus("Enter a rank title first.", true);
      return false;
    }
  } else {
    const amountValue = Math.max(0, Math.floor(Number(value) || 0));
    if (!Number.isFinite(amountValue) || amountValue < 0) {
      if (!quiet) setAdminGrantStatus("Enter a valid amount.", true);
      return false;
    }
    if (amountValue <= 0 && safeMode !== "set") {
      if (!quiet) setAdminGrantStatus("Amount must be more than 0.", true);
      return false;
    }
  }

  if (!quiet) setAdminGrantStatus("Saving...");
  try {
    const response = await callAuthApi("adminGrantProfile", {
      sessionToken: authSessionToken,
      targetUsername: safeTarget,
      field: safeField,
      mode: safeMode,
      value,
    });
    const targetProfile = response?.target?.profile && typeof response.target.profile === "object" ? response.target.profile : null;
    const cachePatch = {};
    const targetDisplayName = String(response?.target?.displayName || "").trim();
    if (targetDisplayName) cachePatch.displayName = targetDisplayName;
    if (targetProfile) {
      cachePatch.xp = Math.max(0, Math.floor(Number(targetProfile.xp) || 0));
      cachePatch.tm = Math.max(0, Math.floor(Number(targetProfile.tm) || 0));
      cachePatch.streak = Math.max(0, Math.floor(Number(targetProfile.streak) || 0));
      cachePatch.rank = String(targetProfile.rank || "")
        .trim()
        .slice(0, 40) || "Rookie";
    }
    if (Object.keys(cachePatch).length > 0) {
      patchAdminAccountCacheEntry(safeTarget, cachePatch);
    }
    if (!quiet) setAdminGrantStatus(`${safeTarget}: ${String(response.message || "Updated.")}`);
    setAdminAccountsStatus(`${safeTarget} updated.`);

    if (targetProfile && safeTarget === getCurrentUsernameLower()) {
      applyCloudProfile(targetProfile);
    }

    scheduleAdminAccountsBackgroundRefresh(900);
    void refreshLeaderboard({ force: true, silent: true });
    return true;
  } catch (error) {
    const message = String(error.message || "Unable to update account.");
    if (!quiet) setAdminGrantStatus(message, true);
    else setAdminAccountsStatus(message, true);
    return false;
  }
};

const applyAdminEconomyChange = async (type, mode) => {
  const targetUsername = getAdminTargetUsername();
  const field = resolveAdminGrantField(type);
  const safeMode = String(mode || "").trim().toLowerCase();
  let value;
  if (field === "rank") {
    value = String(document.getElementById("admin-rank-input")?.value || "").trim().slice(0, 40);
  } else {
    const inputId = field === "xp" ? "admin-xp-input" : field === "tm" ? "admin-money-input" : "admin-streak-input";
    value = parseAdminValue(inputId);
  }
  await submitAdminGrantRequest(targetUsername, field, safeMode, value, { quiet: false });
};

let adminPageInitialized = false;
let adminAccountsCache = [];
let adminAccountsSearchQuery = "";
let adminXpCodesCache = [];
let adminAccountsBackgroundRefreshTimer = null;
const setAdminAccountsStatus = (message, isError = false) => {
  const status = document.getElementById("admin-accounts-status");
  if (!status) return;
  status.textContent = String(message || "");
  status.classList.toggle("is-error", Boolean(isError));
};
const setAdminXpCodeStatus = (message, isError = false) => {
  const status = document.getElementById("admin-xp-code-status");
  if (!status) return;
  status.textContent = String(message || "");
  status.classList.toggle("is-error", Boolean(isError));
};
const setAdminBannerStatus = (message, isError = false) => {
  const status = document.getElementById("admin-banner-status");
  if (!status) {
    setAdminAccountsStatus(message, isError);
    return;
  }
  status.textContent = String(message || "");
  status.classList.toggle("is-error", Boolean(isError));
};
const normalizeAdminAccountSearchQuery = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .slice(0, 60);
const accountMatchesAdminSearch = (entry, query) => {
  const source = entry && typeof entry === "object" ? entry : {};
  const username = String(source.username || "")
    .trim()
    .toLowerCase();
  const displayName = String(source.displayName || source.username || "")
    .trim()
    .toLowerCase();
  const role = String(source.role || (source.admin ? "admin" : "user"))
    .trim()
    .toLowerCase();
  const rank = String(source.rank || "")
    .trim()
    .toLowerCase();
  const lockState = source.locked ? "locked" : "unlocked";
  const lockMode = source.lockUntilAdminUnlock ? "until unlock" : "timed";
  const lockMessage = String(source.lockMessage || "")
    .trim()
    .toLowerCase();
  const status = source.online ? "online" : "offline";
  const haystack = `${username} ${displayName} ${role} ${rank} ${status} ${lockState} ${lockMode} ${lockMessage}`;
  return haystack.includes(query);
};
const applyAdminAccountSearch = (options = {}) => {
  const { preserveStatus = false } = options;
  const typedQuery = normalizeAdminAccountSearchQuery(adminAccountSearchInput?.value || adminAccountsSearchQuery);
  adminAccountsSearchQuery = typedQuery;
  const filtered = typedQuery
    ? adminAccountsCache.filter((entry) => accountMatchesAdminSearch(entry, typedQuery))
    : [...adminAccountsCache];

  renderAdminAccountRows(filtered);
  updateAdminTargetVisuals();

  if (preserveStatus) return;
  if (typedQuery) {
    setAdminAccountsStatus(`Showing ${filtered.length} of ${adminAccountsCache.length} accounts.`);
  } else {
    setAdminAccountsStatus(`${adminAccountsCache.length} accounts loaded.`);
  }
};
const formatAdminAccountDate = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "—";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "—";
  return parsed.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const normalizeAdminXpCodeValue = (value) =>
  String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9_-]/g, "")
    .slice(0, 32);
const formatAdminDateTime = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "—";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "—";
  return parsed.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};
const formatAdminDateForInput = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hour}:${minute}`;
};
const renderAdminXpCodeRows = (codes) => {
  if (!adminXpCodeRows) return;
  if (!Array.isArray(codes) || codes.length === 0) {
    adminXpCodeRows.innerHTML = '<tr><td class="admin-account-empty" colspan="6">No active codes.</td></tr>';
    return;
  }

  adminXpCodeRows.innerHTML = codes
    .map((entry) => {
      const id = escapeHtml(String(entry.id || ""));
      const code = escapeHtml(String(entry.code || "—"));
      const xpAmount = Math.max(0, Math.floor(Number(entry.xpAmount) || 0)).toLocaleString();
      const claimCount = Math.max(0, Math.floor(Number(entry.claimCount) || 0)).toLocaleString();
      const dueLabel = formatAdminDateTime(entry.expiresAt);
      const createdLabel = formatAdminDateTime(entry.createdAt);
      const expired = Boolean(entry.expired);
      return `
        <tr data-admin-xp-code-row="1" data-code-id="${id}">
          <td><span class="admin-xpcode-value">${code}</span></td>
          <td>${xpAmount}</td>
          <td><span class="admin-xpcode-due${expired ? " is-expired" : ""}">${dueLabel}</span></td>
          <td>${claimCount}</td>
          <td>${createdLabel}</td>
          <td>
            <button class="pill ghost small danger" type="button" data-admin-xp-code-action="delete" data-code-id="${id}" data-code="${code}">
              Delete
            </button>
          </td>
        </tr>
      `;
    })
    .join("");
};
const refreshAdminXpCodes = async () => {
  if (pageMode !== "admin") return;
  if (!hasAdminTabAccess()) return;
  if (!authSessionToken) {
    setAdminXpCodeStatus("Log in first.", true);
    return;
  }
  if (adminXpCodeRows) {
    adminXpCodeRows.innerHTML = '<tr><td class="admin-account-empty" colspan="6">Loading codes...</td></tr>';
  }
  setAdminXpCodeStatus("Loading...");
  try {
    const response = await callAuthApi("adminListXpCodes", { sessionToken: authSessionToken });
    adminXpCodesCache = Array.isArray(response.codes) ? response.codes : [];
    renderAdminXpCodeRows(adminXpCodesCache);
    setAdminXpCodeStatus(`${adminXpCodesCache.length} codes loaded.`);
  } catch (error) {
    adminXpCodesCache = [];
    renderAdminXpCodeRows([]);
    setAdminXpCodeStatus(String(error.message || "Unable to load codes."), true);
  }
};
const createAdminXpCode = async () => {
  if (!hasAdminTabAccess()) return;
  if (!authSessionToken) {
    setAdminXpCodeStatus("Log in first.", true);
    return;
  }
  const code = normalizeAdminXpCodeValue(adminXpCodeValueInput?.value || "");
  if (!code) {
    setAdminXpCodeStatus("Enter a valid code (4-32 chars).", true);
    return;
  }
  const xpAmount = Math.max(0, Math.floor(Number(adminXpCodeAmountInput?.value || 0) || 0));
  if (xpAmount <= 0) {
    setAdminXpCodeStatus("XP amount must be more than 0.", true);
    return;
  }
  const expiryRaw = String(adminXpCodeExpiryInput?.value || "").trim();
  if (!expiryRaw) {
    setAdminXpCodeStatus("Set a due date/time.", true);
    return;
  }
  const expiryDate = new Date(expiryRaw);
  if (Number.isNaN(expiryDate.getTime()) || expiryDate.getTime() <= Date.now()) {
    setAdminXpCodeStatus("Due date/time must be in the future.", true);
    return;
  }

  setAdminXpCodeStatus("Creating...");
  try {
    const response = await callAuthApi("adminCreateXpCode", {
      sessionToken: authSessionToken,
      code,
      xp: xpAmount,
      expiresAt: expiryDate.toISOString(),
    });
    setAdminXpCodeStatus(String(response.message || "Code created."));
    if (adminXpCodeValueInput) adminXpCodeValueInput.value = "";
    if (adminXpCodeAmountInput) adminXpCodeAmountInput.value = "100";
    if (adminXpCodeExpiryInput) {
      const defaultExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
      adminXpCodeExpiryInput.value = formatAdminDateForInput(defaultExpiry);
    }
    await refreshAdminXpCodes();
  } catch (error) {
    setAdminXpCodeStatus(String(error.message || "Unable to create code."), true);
  }
};
const deleteAdminXpCode = async (codeId, codeValue = "") => {
  if (!hasAdminTabAccess()) return;
  if (!authSessionToken) {
    setAdminXpCodeStatus("Log in first.", true);
    return;
  }
  const safeId = String(codeId || "").trim().toLowerCase();
  if (!safeId) return;
  const label = String(codeValue || "").trim().toUpperCase() || "this code";
  if (!window.confirm(`Delete XP code ${label}?`)) return;

  setAdminXpCodeStatus("Deleting...");
  try {
    const response = await callAuthApi("adminDeleteXpCode", {
      sessionToken: authSessionToken,
      codeId: safeId,
      code: normalizeAdminXpCodeValue(codeValue),
    });
    setAdminXpCodeStatus(String(response.message || "Code deleted."));
    await refreshAdminXpCodes();
  } catch (error) {
    setAdminXpCodeStatus(String(error.message || "Unable to delete code."), true);
  }
};
const renderAdminAccountRows = (accounts) => {
  const tbody = document.getElementById("admin-account-rows");
  if (!tbody) return;
  if (!Array.isArray(accounts) || accounts.length === 0) {
    tbody.innerHTML = '<tr><td class="admin-account-empty" colspan="6">No accounts found.</td></tr>';
    return;
  }
  const currentUsername = String(authUser?.username || "").toLowerCase();
  tbody.innerHTML = accounts
    .map((entry) => {
      const username = String(entry.username || "").trim();
      const displayName = String(entry.displayName || username).trim() || username;
      const role = entry.admin || String(entry.role || "").toLowerCase() === "admin" ? "admin" : "user";
      const isSelf = username.toLowerCase() === currentUsername;
      const roleAction = role === "admin" ? "demote" : "promote";
      const roleLabel = role === "admin" ? "Demote" : "Promote";
      const safeUsername = escapeHtml(username || "—");
      const safeUsernameAttr = escapeHtml(username || "");
      const safeDisplayName = escapeHtml(displayName || "—");
      const safeDisplayNameAttr = escapeHtml(displayName || "");
      const safeRole = escapeHtml(role);
      const rankText = String(entry.rank || "").trim() || "Unranked";
      const safeRank = escapeHtml(rankText);
      const xpValue = Math.max(0, Math.floor(Number(entry.xp) || 0));
      const tmValue = Math.max(0, Math.floor(Number(entry.tm) || 0));
      const streakValue = Math.max(0, Math.floor(Number(entry.streak) || 0));
      const xpText = xpValue.toLocaleString();
      const tmText = tmValue.toLocaleString();
      const streakText = streakValue.toLocaleString();
      const showHandle = username && displayName.toLowerCase() !== username.toLowerCase();
      const usernameLower = username.toLowerCase();
      const isTarget = usernameLower && usernameLower === normalizeAdminTargetUsername(adminSelectedTargetUsername);
      const isOnline = Boolean(entry.online);
      const presenceClass = isOnline ? "online" : "offline";
      const presenceText = isOnline ? "Online" : "Offline";
      const locked = Boolean(entry.locked);
      const lockUntilAdminUnlock = Boolean(entry.lockUntilAdminUnlock);
      const rawLockMessage = String(entry.lockMessage || "").trim();
      const lockUntilRaw = String(entry.lockUntil || "").trim();
      const lockUntilLabel = lockUntilRaw ? formatAdminDateTime(lockUntilRaw) : "";
      const lockTitleRaw = locked
        ? `${lockUntilAdminUnlock ? "Until admin unlocks" : `Until ${lockUntilLabel || "unknown"}`}${
            rawLockMessage ? ` • ${rawLockMessage}` : ""
          }`
        : "No active lock";
      const safeLockTitle = escapeHtml(lockTitleRaw);
      const lockBadge = locked
        ? `<span class="admin-account-lock locked" title="${safeLockTitle}">Locked</span>`
        : `<span class="admin-account-lock unlocked" title="${safeLockTitle}">Unlocked</span>`;
      const rawPassword = String(entry.password || "").trim();
      const passwordType = String(entry.passwordType || "").trim().toLowerCase();
      const passwordText = rawPassword
        ? passwordType === "hash"
          ? `hash: ${rawPassword}`
          : rawPassword
        : "Unavailable";
      const passwordPreview = passwordText.length > 22 ? `${passwordText.slice(0, 22)}...` : passwordText;
      const safePassword = escapeHtml(passwordText);
      const safePasswordPreview = escapeHtml(passwordPreview);
      return `
        <tr data-admin-account-row="1" data-username="${safeUsernameAttr}"${isTarget ? ' class="is-target"' : ""}>
          <td>
            <div class="admin-account-identity">
              <strong>${safeDisplayName}</strong>
              ${showHandle ? `<span class="admin-account-handle">@${safeUsername}</span>` : ""}
              <span class="admin-account-presence ${presenceClass}">${presenceText}</span>
              ${lockBadge}
            </div>
          </td>
          <td><span class="admin-role-chip ${safeRole}">${safeRole}</span></td>
          <td class="admin-account-stats" title="XP ${xpText}, TM$ ${tmText}, Streak ${streakText}, Rank ${safeRank}">
            <span>${xpText} XP</span>
            <span>${tmText} TM$</span>
            <span>${streakText} streak</span>
            <span>${safeRank}</span>
          </td>
          <td class="admin-account-password" title="${safePassword}">${safePasswordPreview}</td>
          <td>${formatAdminAccountDate(entry.createdAt)}</td>
          <td>
            <div class="admin-account-actions">
              <button class="pill small" type="button" data-admin-account-action="quick-xp" data-username="${safeUsernameAttr}">
                +XP
              </button>
              <button class="pill small" type="button" data-admin-account-action="quick-money" data-username="${safeUsernameAttr}">
                +TM$
              </button>
              <button class="pill ghost small" type="button" data-admin-account-action="select" data-username="${safeUsernameAttr}">
                Pick
              </button>
              <button class="pill ghost small" type="button" data-admin-account-action="rename" data-username="${safeUsernameAttr}" data-display-name="${safeDisplayNameAttr}">
                Name
              </button>
              <button class="pill ghost small" type="button" data-admin-account-action="message" data-username="${safeUsernameAttr}">
                Msg
              </button>
              <button class="pill ghost small" type="button" data-admin-account-action="lock" data-username="${safeUsernameAttr}" ${
                isSelf ? "disabled" : ""
              }>Lock</button>
              <button class="pill ghost small" type="button" data-admin-account-action="unlock" data-username="${safeUsernameAttr}" ${
                !locked ? "disabled" : ""
              }>Unlock</button>
              <button class="pill ghost small" type="button" data-admin-account-action="${roleAction}" data-username="${safeUsernameAttr}" ${
                isSelf ? "disabled" : ""
              }>${roleLabel}</button>
              <button class="pill ghost small danger" type="button" data-admin-account-action="delete" data-username="${safeUsernameAttr}" ${
                isSelf ? "disabled" : ""
              }>Del</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
};
const refreshAdminAccounts = async (options = {}) => {
  const { silent = false, preserveRows = false } = options;
  if (pageMode !== "admin") return;
  const tbody = document.getElementById("admin-account-rows");
  if (tbody && !preserveRows) {
    tbody.innerHTML = '<tr><td class="admin-account-empty" colspan="6">Loading accounts...</td></tr>';
  }
  if (!authSessionToken) {
    if (!silent) setAdminAccountsStatus("Log in first.", true);
    return;
  }
  if (!silent) setAdminAccountsStatus("Loading...");
  try {
    const response = await callAuthApi("adminListAccounts", {
      sessionToken: authSessionToken,
    });
    const accounts = Array.isArray(response.accounts) ? response.accounts : [];
    const safeTarget = getAdminTargetUsername();
    if (safeTarget && !accounts.some((entry) => String(entry.username || "").trim().toLowerCase() === safeTarget)) {
      setAdminTargetUsername("");
      setAdminGrantStatus("Target account no longer exists. Pick another player.", true);
    } else if (!safeTarget && accounts.length) {
      const currentUsername = getCurrentUsernameLower();
      const fallback =
        accounts.find((entry) => String(entry.username || "").trim().toLowerCase() !== currentUsername) || accounts[0];
      if (fallback?.username) {
        setAdminTargetUsername(fallback.username);
        setAdminGrantStatus(`Target selected: ${String(fallback.username).trim().toLowerCase()}`);
      }
    }
    adminAccountsCache = accounts;
    applyAdminAccountSearch({ preserveStatus: silent });
  } catch (error) {
    if (!silent) {
      adminAccountsCache = [];
      renderAdminAccountRows([]);
      updateAdminTargetVisuals();
      setAdminAccountsStatus(String(error.message || "Unable to load accounts."), true);
    }
  }
};
const handleAdminAccountAction = async (action, username, displayName = "") => {
  const safeAction = String(action || "");
  const targetUsername = String(username || "").trim().toLowerCase();
  if (!targetUsername) return;
  setAdminTargetUsername(targetUsername);
  if (safeAction === "quick-xp") {
    const amount = getAdminQuickAmount("xp");
    setAdminGrantStatus("");
    await submitAdminGrantRequest(targetUsername, "xp", "add", amount, { quiet: true });
    return;
  }
  if (safeAction === "quick-money") {
    const amount = getAdminQuickAmount("money");
    setAdminGrantStatus("");
    await submitAdminGrantRequest(targetUsername, "tm", "add", amount, { quiet: true });
    return;
  }
  if (safeAction === "select") {
    setAdminTargetUsername(targetUsername);
    setAdminGrantStatus(`Target selected: ${targetUsername}`);
    setAdminAccountsStatus(`${targetUsername} selected for rewards.`);
    return;
  }
  if (!authSessionToken) {
    setAdminAccountsStatus("Log in first.", true);
    return;
  }
  try {
    let needsBackgroundRefresh = false;
    let needsLeaderboardRefresh = false;
    if (safeAction === "message") {
      const defaultMessage = String(adminLockMessageInput?.value || "").trim() || "Take a short break.";
      const messageRaw = window.prompt(`Send screen message to ${targetUsername}`, defaultMessage);
      if (messageRaw === null) return;
      const message = String(messageRaw || "").trim().slice(0, 120);
      if (!message) {
        setAdminAccountsStatus("Message cannot be empty.", true);
        return;
      }
      await callAuthApi("adminCreateScreenReward", {
        sessionToken: authSessionToken,
        targetUsername,
        targetScope: "user",
        sendToAll: false,
        label: "Admin Message",
        message,
        xp: 0,
        tm: 0,
        streak: 0,
        rank: "",
        expiresMinutes: 720,
      });
      setAdminAccountsStatus(`Message sent to ${targetUsername}.`);
      showActionToast(`Message sent to ${targetUsername}.`);
      return;
    } else if (safeAction === "lock") {
      const minutes = getAdminLockMinutes();
      const message = getAdminLockMessage();
      const untilAdminUnlock = isAdminLockUntilUnlock();
      await callAuthApi("adminSetAccountLock", {
        sessionToken: authSessionToken,
        targetUsername,
        minutes,
        message,
        untilAdminUnlock,
      });
      setAdminAccountsStatus(
        untilAdminUnlock ? `${targetUsername} locked until admin unlocks.` : `${targetUsername} locked for ${minutes}m.`
      );
      const lockUntil = untilAdminUnlock ? "" : new Date(Date.now() + minutes * 60000).toISOString();
      patchAdminAccountCacheEntry(targetUsername, {
        locked: true,
        lockUntilAdminUnlock: untilAdminUnlock,
        lockUntil,
        lockMessage: message,
      });
      needsBackgroundRefresh = true;
    } else if (safeAction === "unlock") {
      await callAuthApi("adminClearAccountLock", {
        sessionToken: authSessionToken,
        targetUsername,
      });
      setAdminAccountsStatus(`${targetUsername} unlocked.`);
      patchAdminAccountCacheEntry(targetUsername, {
        locked: false,
        lockUntilAdminUnlock: false,
        lockUntil: "",
        lockMessage: "",
      });
      needsBackgroundRefresh = true;
    } else if (safeAction === "rename") {
      const currentDisplayName = String(displayName || targetUsername).trim() || targetUsername;
      const nextRaw = window.prompt(`Set display name for ${targetUsername}`, currentDisplayName);
      if (nextRaw === null) return;
      const nextDisplayName = String(nextRaw || "").trim().slice(0, 24);
      if (!nextDisplayName) {
        setAdminAccountsStatus("Display name is required.", true);
        return;
      }
      const response = await callAuthApi("adminSetDisplayName", {
        sessionToken: authSessionToken,
        targetUsername,
        displayName: nextDisplayName,
      });
      if (targetUsername === getCurrentUsernameLower() && response?.target) {
        applyAuthUserUpdate(response.target);
      }
      setAdminAccountsStatus(`${targetUsername} renamed.`);
      patchAdminAccountCacheEntry(targetUsername, {
        displayName: nextDisplayName,
      });
      needsBackgroundRefresh = true;
      needsLeaderboardRefresh = true;
    } else if (safeAction === "promote") {
      await callAuthApi("adminSetRole", {
        sessionToken: authSessionToken,
        targetUsername,
        role: "admin",
      });
      setAdminAccountsStatus(`${targetUsername} is now an admin.`);
      patchAdminAccountCacheEntry(targetUsername, {
        role: "admin",
        admin: true,
      });
      needsBackgroundRefresh = true;
    } else if (safeAction === "demote") {
      await callAuthApi("adminSetRole", {
        sessionToken: authSessionToken,
        targetUsername,
        role: "user",
      });
      setAdminAccountsStatus(`${targetUsername} is now a user.`);
      patchAdminAccountCacheEntry(targetUsername, {
        role: "user",
        admin: false,
      });
      needsBackgroundRefresh = true;
    } else if (safeAction === "delete") {
      if (!window.confirm(`Delete ${targetUsername}? This cannot be undone.`)) return;
      await callAuthApi("adminDeleteAccount", {
        sessionToken: authSessionToken,
        targetUsername,
      });
      setAdminAccountsStatus(`${targetUsername} deleted.`);
      removeAdminAccountCacheEntry(targetUsername);
      if (normalizeAdminTargetUsername(getAdminTargetUsername()) === normalizeAdminTargetUsername(targetUsername)) {
        setAdminTargetUsername("");
      }
      needsBackgroundRefresh = true;
      needsLeaderboardRefresh = true;
    } else {
      return;
    }
    if (needsBackgroundRefresh) {
      scheduleAdminAccountsBackgroundRefresh(1000);
    }
    if (needsLeaderboardRefresh) {
      void refreshLeaderboard({ force: true, silent: true });
    }
  } catch (error) {
    setAdminAccountsStatus(String(error.message || "Account action failed."), true);
  }
};

let leaderboardPageInitialized = false;
const initLeaderboardPage = () => {
  if (pageMode !== "leaderboard") return;
  if (!leaderboardList || !leaderboardYou) return;
  if (!leaderboardPageInitialized) {
    const refreshButton = document.getElementById("leaderboard-refresh");
    refreshButton?.addEventListener("click", () => {
      void refreshLeaderboard({ force: true });
    });
    leaderboardPageInitialized = true;
  }
  renderLeaderboard();
  if (!authSessionToken) {
    setLeaderboardStatus("Log in to load leaderboard.", true);
    return;
  }
  void refreshLeaderboard({ force: true });
};

const initAdminPage = () => {
  if (pageMode !== "admin") return;
  const gate = document.getElementById("admin-gate");
  const shell = document.getElementById("admin-shell");
  if (!hasAdminTabAccess()) {
    if (gate) gate.hidden = false;
    if (shell) shell.hidden = true;
    updateAdminPanelState();
    return;
  }
  if (gate) gate.hidden = true;
  if (shell) shell.hidden = false;
  if (adminPageInitialized) {
    setAdminTargetUsername(getAdminTargetUsername());
    updateAdminPanelState();
    refreshAdminAccounts();
    refreshAdminXpCodes();
    return;
  }
  adminPageInitialized = true;

  const refreshAccountsBtn = document.getElementById("admin-accounts-refresh");
  refreshAccountsBtn?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    refreshAdminAccounts();
  });
  adminAccountsSearchQuery = normalizeAdminAccountSearchQuery(adminAccountSearchInput?.value || "");
  adminAccountSearchInput?.addEventListener("input", () => {
    adminAccountsSearchQuery = normalizeAdminAccountSearchQuery(adminAccountSearchInput.value);
    applyAdminAccountSearch();
  });
  adminAccountSearchClearButton?.addEventListener("click", () => {
    if (adminAccountSearchInput) {
      adminAccountSearchInput.value = "";
      adminAccountSearchInput.focus({ preventScroll: true });
    }
    adminAccountsSearchQuery = "";
    applyAdminAccountSearch();
  });
  const syncAdminLockModeUi = () => {
    if (!adminLockMinutesInput) return;
    adminLockMinutesInput.disabled = isAdminLockUntilUnlock();
  };
  adminLockMinutesInput?.addEventListener("input", () => {
    setAdminAccountsStatus("");
  });
  adminLockMessageInput?.addEventListener("input", () => {
    setAdminAccountsStatus("");
  });
  adminLockUntilUnlockInput?.addEventListener("change", () => {
    syncAdminLockModeUi();
    setAdminAccountsStatus("");
  });
  syncAdminLockModeUi();
  const targetInput = document.getElementById("admin-target-username");
  targetInput?.addEventListener("input", () => {
    setAdminTargetUsername(targetInput.value);
    setAdminGrantStatus("");
  });
  const clearTargetButton = document.getElementById("admin-target-clear");
  clearTargetButton?.addEventListener("click", () => {
    setAdminTargetUsername("");
    setAdminGrantStatus("");
  });
  adminScreenTargetInput?.addEventListener("input", () => {
    if (adminScreenTargetAllInput) {
      adminScreenTargetAllInput.checked = isAdminScreenAllTarget(adminScreenTargetInput.value);
    }
    setAdminScreenRewardStatus("");
  });
  [adminScreenLabelInput, adminScreenMessageInput, adminScreenRankInput].forEach((input) => {
    input?.addEventListener("input", () => {
      setAdminScreenRewardStatus("");
    });
  });
  adminScreenTargetAllInput?.addEventListener("change", () => {
    if (adminScreenTargetAllInput.checked && adminScreenTargetInput) {
      adminScreenTargetInput.value = "all";
    } else if (adminScreenTargetInput && isAdminScreenAllTarget(adminScreenTargetInput.value)) {
      adminScreenTargetInput.value = "";
    }
    setAdminScreenRewardStatus("");
  });
  if (adminScreenTargetAllInput) {
    adminScreenTargetAllInput.checked = isAdminScreenAllTarget(adminScreenTargetInput?.value || "");
  }
  adminScreenSendButton?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    void createAdminScreenRewardButton();
  });
  if (adminXpCodeExpiryInput && !adminXpCodeExpiryInput.value) {
    const defaultExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000);
    adminXpCodeExpiryInput.value = formatAdminDateForInput(defaultExpiry);
  }
  adminXpCodeValueInput?.addEventListener("input", () => {
    const normalized = normalizeAdminXpCodeValue(adminXpCodeValueInput.value);
    if (normalized !== adminXpCodeValueInput.value) {
      adminXpCodeValueInput.value = normalized;
    }
    setAdminXpCodeStatus("");
  });
  adminXpCodeAmountInput?.addEventListener("input", () => {
    setAdminXpCodeStatus("");
  });
  adminXpCodeExpiryInput?.addEventListener("input", () => {
    setAdminXpCodeStatus("");
  });
  adminXpCodeCreateButton?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    void createAdminXpCode();
  });
  adminXpCodeRefreshButton?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    void refreshAdminXpCodes();
  });
  adminXpCodeRows?.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-admin-xp-code-action]") : null;
    if (!(button instanceof HTMLButtonElement)) return;
    if (!hasAdminTabAccess()) return;
    const action = String(button.getAttribute("data-admin-xp-code-action") || "");
    if (action !== "delete") return;
    const codeId = button.getAttribute("data-code-id") || "";
    const codeValue = button.getAttribute("data-code") || "";
    void deleteAdminXpCode(codeId, codeValue);
  });
  const accountRows = document.getElementById("admin-account-rows");
  accountRows?.addEventListener("click", (event) => {
    const row = event.target instanceof Element ? event.target.closest("tr[data-admin-account-row][data-username]") : null;
    const rowUsername = normalizeAdminTargetUsername(row?.getAttribute("data-username") || "");
    if (rowUsername) {
      setAdminTargetUsername(rowUsername);
      if (!(event.target instanceof Element ? event.target.closest("[data-admin-account-action]") : null)) {
        setAdminGrantStatus(`Target selected: ${rowUsername}`);
        setAdminAccountsStatus(`${rowUsername} selected for controls.`);
      }
    }
    const button = event.target instanceof Element ? event.target.closest("[data-admin-account-action]") : null;
    if (!(button instanceof HTMLButtonElement)) return;
    if (!hasAdminTabAccess()) return;
    const action = button.getAttribute("data-admin-account-action");
    const username = button.getAttribute("data-username");
    const displayName = button.getAttribute("data-display-name") || "";
    handleAdminAccountAction(action, username, displayName);
  });

  document.querySelectorAll("[data-admin-economy]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-admin-type");
      const mode = button.getAttribute("data-admin-economy");
      if (!type || !mode) return;
      void applyAdminEconomyChange(type, mode);
    });
  });

  const resetSession = document.getElementById("admin-reset-session");
  resetSession?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    sessionSeconds = 0;
    xpProgress = 0;
    streakCount = 0;
    localStorage.removeItem(LAST_PLAY_KEY);
    saveStreakState();
    saveXpState();
    updateProgressUI();
    syncHubState();
    showActionToast("Session stats reset.");
    updateAdminPanelState();
  });

  const godToggle = document.getElementById("admin-toggle-god");
  godToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    godModeEnabled = !godModeEnabled;
    applyGodModeVisual();
    syncHubState();
    updateAdminPanelState();
  });

  const miniToggle = document.getElementById("admin-toggle-mini");
  miniToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    setMiniEventsEnabled(!miniEventsEnabled, { silent: true });
    updateAdminPanelState();
  });

  const schoolToggle = document.getElementById("admin-toggle-school");
  schoolToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    setSchoolModeEnabled(!schoolModeEnabled, { silent: true });
    updateAdminPanelState();
  });

  const debugToggle = document.getElementById("admin-toggle-debug");
  debugToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    debugPreviewMode = !debugPreviewMode;
    syncHubState();
    updateAdminPanelState();
  });

  const soundToggle = document.getElementById("admin-toggle-sound");
  soundToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    miniSoundEnabled = !miniSoundEnabled;
    syncHubState();
    updateAdminPanelState();
  });

  const miniXpToggle = document.getElementById("admin-toggle-mini-xp");
  miniXpToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    miniXpEnabled = !miniXpEnabled;
    syncHubState();
    updateAdminPanelState();
  });

  const miniMoneyToggle = document.getElementById("admin-toggle-mini-money");
  miniMoneyToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    miniMoneyEnabled = !miniMoneyEnabled;
    syncHubState();
    updateAdminPanelState();
  });

  const miniVisualsToggle = document.getElementById("admin-toggle-mini-visuals");
  miniVisualsToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    miniVisualsEnabled = !miniVisualsEnabled;
    syncHubState();
    updateAdminPanelState();
  });

  const multiplierToggle = document.getElementById("admin-toggle-multiplier");
  multiplierToggle?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    if (localMultiplier < 1.5) localMultiplier = 2;
    else if (localMultiplier < 4.5) localMultiplier = 5;
    else localMultiplier = 1;
    syncHubState();
    updateAdminPanelState();
  });

  const passiveXpInput = document.getElementById("admin-passive-xp");
  const passiveMoneyInput = document.getElementById("admin-passive-money");
  if (passiveXpInput) passiveXpInput.value = String(passiveXpPerMinute);
  if (passiveMoneyInput) passiveMoneyInput.value = String(passiveMoneyPerMinute);
  const saveRatesButton = document.getElementById("admin-save-rates");
  saveRatesButton?.addEventListener("click", () => {
    if (!hasAdminTabAccess()) return;
    const nextXp = Number(passiveXpInput?.value || DEFAULT_PASSIVE_XP_PER_MIN);
    const nextMoney = Number(passiveMoneyInput?.value || DEFAULT_PASSIVE_MONEY_PER_MIN);
    passiveXpPerMinute = Math.min(12, Math.max(0, Number.isFinite(nextXp) ? nextXp : DEFAULT_PASSIVE_XP_PER_MIN));
    passiveMoneyPerMinute = Math.min(8, Math.max(0, Number.isFinite(nextMoney) ? nextMoney : DEFAULT_PASSIVE_MONEY_PER_MIN));
    syncHubState();
    showActionToast("Passive rates updated locally.");
    updateAdminPanelState();
  });

  const confettiButton = document.getElementById("admin-trigger-confetti");
  confettiButton?.addEventListener("click", () => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 3;
    triggerConfetti(x, y, schoolModeEnabled ? 8 : 18);
  });

  const sparkButton = document.getElementById("admin-trigger-sparks");
  sparkButton?.addEventListener("click", () => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    triggerSparkBurst(x, y, schoolModeEnabled ? 8 : 16);
  });

  const coinButton = document.getElementById("admin-trigger-coins");
  coinButton?.addEventListener("click", () => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    grantLocalRewards(5, 3, { x, y, quiet: true, source: "event" });
    triggerConfetti(x, y, schoolModeEnabled ? 6 : 12);
  });

  const themeButton = document.getElementById("admin-trigger-theme");
  themeButton?.addEventListener("click", () => {
    const unlockedThemes = ["default", "dark", "light"].concat(
      [...LOCKED_THEMES].filter((theme) => isThemeUnlocked(theme))
    );
    const next = unlockedThemes[Math.floor(Math.random() * unlockedThemes.length)] || "default";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    updateThemeUI(next);
    showActionToast(`Theme shifted to ${next}.`);
  });

  const eggButton = document.getElementById("admin-trigger-egg");
  eggButton?.addEventListener("click", () => {
    document.body.classList.add("fun-flash");
    setTimeout(() => document.body.classList.remove("fun-flash"), 1200);
    triggerSparkBurst(window.innerWidth / 2, window.innerHeight / 2, schoolModeEnabled ? 10 : 20);
  });

  const maxVisualTest = document.getElementById("admin-max-visual-test");
  maxVisualTest?.addEventListener("click", () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    createFloatingDelta(centerX, centerY - 20, "+999999 XP", "xp");
    createFloatingDelta(centerX, centerY + 18, "+999999 TM$", "money");
    triggerConfetti(centerX, centerY, 22);
  });

  const lockButton = document.getElementById("admin-lock");
  lockButton?.addEventListener("click", () => {
    setAdminEnabled(false, { silent: true });
    if (gate) gate.hidden = false;
    if (shell) shell.hidden = true;
    updateAdminPanelState();
  });

  const bannerTextInput = document.getElementById("admin-banner-text");
  syncAdminBannerInputsFromStorage();
  setAdminBannerStatus("");
  [bannerTextInput].forEach((input) => {
    input?.addEventListener("input", () => {
      setAdminBannerStatus("");
    });
  });

  const saveBannerButton = document.getElementById("admin-save-banner");
  saveBannerButton?.addEventListener("click", async () => {
    if (!authSessionToken) {
      setAdminBannerStatus("Log in first.", true);
      return;
    }
    const textValue = String((bannerTextInput && bannerTextInput.value) || "").trim();
    const safeText = textValue || DEFAULT_FREE_BANNER_TEXT;
    saveBannerButton.disabled = true;
    try {
      const response = await callAuthApi("adminSaveGlobalBanner", {
        sessionToken: authSessionToken,
        text: safeText,
      });
      applyGlobalBannerPayload({ banner: response?.banner || null });
      setAdminBannerStatus("Saved: server-wide banner text updated for everyone.");
      showActionToast("Banner text updated for everyone.");
    } catch (error) {
      const message = String(error.message || "Unable to save banner.");
      setAdminBannerStatus(message, true);
      showActionToast(message);
    } finally {
      saveBannerButton.disabled = false;
    }
  });

  const resetBannerButton = document.getElementById("admin-reset-banner");
  resetBannerButton?.addEventListener("click", async () => {
    if (!authSessionToken) {
      setAdminBannerStatus("Log in first.", true);
      return;
    }
    if (!window.confirm("Reset banner text to default for everyone?")) return;
    resetBannerButton.disabled = true;
    if (saveBannerButton) saveBannerButton.disabled = true;
    try {
      const response = await callAuthApi("adminSaveGlobalBanner", {
        sessionToken: authSessionToken,
        reset: true,
      });
      applyGlobalBannerPayload({ banner: response?.banner || null });
      setAdminBannerStatus("Reset complete: server-wide banner text is back to default.");
      showActionToast("Banner text reset to default for everyone.");
    } catch (error) {
      const message = String(error.message || "Unable to reset banner.");
      setAdminBannerStatus(message, true);
      showActionToast(message);
    } finally {
      resetBannerButton.disabled = false;
      if (saveBannerButton) saveBannerButton.disabled = false;
    }
  });

  updateAdminPanelState();
  setAdminTargetUsername(getAdminTargetUsername());
  refreshAdminAccounts();
  refreshAdminXpCodes();
};

window.addEventListener("storage", (event) => {
  if (!event.key) return;
  if (
    event.key === HUB_STATE_KEY ||
    event.key === MINI_EVENTS_KEY ||
    event.key === SCHOOL_MODE_KEY ||
    event.key === ADMIN_FLAG_KEY ||
    event.key === PASSIVE_XP_RATE_KEY ||
    event.key === PASSIVE_MONEY_RATE_KEY ||
    event.key === LOCAL_MULTIPLIER_KEY ||
    event.key === DEBUG_PREVIEW_KEY ||
    event.key === MINI_XP_TOGGLE_KEY ||
    event.key === MINI_MONEY_TOGGLE_KEY ||
    event.key === MINI_VISUALS_TOGGLE_KEY ||
    event.key === MINI_SOUND_TOGGLE_KEY ||
    event.key === SECRET_TM_PAGE_KEY ||
    event.key === MINI_QUEST_PROGRESS_KEY ||
    event.key === HIDDEN_EASTER_EGGS_KEY ||
    event.key === PURCHASED_THEMES_PUBLIC_KEY ||
    event.key === PURCHASED_VISUALS_PUBLIC_KEY ||
    event.key === ACTIVE_THEME_PUBLIC_KEY ||
    event.key === HUB_VISUALS_KEY
  ) {
    const next = readHubState();
    adminEnabled = Boolean(
      isCurrentUserAdmin() ||
        next.admin ||
        localStorage.getItem(ADMIN_FLAG_KEY) === "1"
    );
    miniEventsEnabled =
      next.miniEventsEnabled !== undefined
        ? Boolean(next.miniEventsEnabled)
        : localStorage.getItem(MINI_EVENTS_KEY) !== "0";
    schoolModeEnabled =
      next.schoolMode !== undefined
        ? Boolean(next.schoolMode)
        : localStorage.getItem(SCHOOL_MODE_KEY) === "1";
    passiveXpPerMinute = loadNumber(PASSIVE_XP_RATE_KEY, DEFAULT_PASSIVE_XP_PER_MIN);
    passiveMoneyPerMinute = loadNumber(PASSIVE_MONEY_RATE_KEY, DEFAULT_PASSIVE_MONEY_PER_MIN);
    localMultiplier = clampNonNegative(loadNumber(LOCAL_MULTIPLIER_KEY, 1), 1);
    debugPreviewMode = localStorage.getItem(DEBUG_PREVIEW_KEY) === "1";
    miniXpEnabled = localStorage.getItem(MINI_XP_TOGGLE_KEY) !== "0";
    miniMoneyEnabled = localStorage.getItem(MINI_MONEY_TOGGLE_KEY) !== "0";
    miniVisualsEnabled = localStorage.getItem(MINI_VISUALS_TOGGLE_KEY) !== "0";
    miniSoundEnabled = localStorage.getItem(MINI_SOUND_TOGGLE_KEY) !== "0";
    secretPageUnlocked =
      next.secretTMPageUnlocked !== undefined
        ? Boolean(next.secretTMPageUnlocked)
        : localStorage.getItem(SECRET_TM_PAGE_KEY) === "1";
    miniQuestProgress = loadObjectState(MINI_QUEST_PROGRESS_KEY, DEFAULT_MINI_QUEST_PROGRESS);
    hiddenEasterEggs = loadObjectState(HIDDEN_EASTER_EGGS_KEY, {});
    hubVisuals = cloneHubVisuals(loadObjectState(HUB_VISUALS_KEY, DEFAULT_HUB_VISUALS));
    sessionSeconds = Math.floor(clampNonNegative(next.sessionTime, sessionSeconds));
    ensureAdminNavLink();
    ensureLeaderboardNavLink();
    ensureFriendsNavLink();
    ensureMessagesNavLink();
    ensureFeedbackNavLink();
    ensureTmCashNavLink();
    ensureSecretNavLink();
    applySchoolMode();
    applyGodModeVisual();
    applyHubVisualStyles();
    ensureFreeBanner();
    syncMiniEventLoop();
    updateAdminPanelState();
  }
  if (
    event.key === FREE_BANNER_TEXT_KEY ||
    event.key === "tm_banner_color_a" ||
    event.key === "tm_banner_color_b" ||
    event.key === "tm_admin_accent_color"
  ) {
    applyAdminColorOverrides();
    updateFreeBannerText();
    syncAdminBannerInputsFromStorage();
  }
});

window.addEventListener("tm-xp-update", syncHubState);
window.addEventListener("tm-savings-update", syncHubState);

let hubSyncLoopTimer = null;

const stopHubSyncLoop = () => {
  if (hubSyncLoopTimer) {
    window.clearTimeout(hubSyncLoopTimer);
    hubSyncLoopTimer = null;
  }
};

const startHubSyncLoop = () => {
  stopHubSyncLoop();
  const run = () => {
    if (!document.hidden) {
      syncHubState();
    }
    hubSyncLoopTimer = window.setTimeout(run, getAdaptiveIntervalMs(5200, 3200));
  };
  hubSyncLoopTimer = window.setTimeout(run, getAdaptiveIntervalMs(5200, 3200));
};

setInterval(() => {
  if (document.hidden) return;
  sessionSeconds += 1;
  if (pageMode === "admin" && sessionSeconds % 2 === 0) {
    updateAdminPanelState();
  }
}, getAdaptiveIntervalMs(1000, 1000));

startHubSyncLoop();

window.addEventListener("beforeunload", () => {
  if (!authSessionToken) return;
  saveProfileToCloud();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  syncHubState({ force: true });
  if (pageMode === "messages") {
    void refreshDmInbox({ silent: true }).then(() => {
      void refreshDmThread({ silent: true });
    });
  }
  if (pageMode === "friends") {
    void refreshFriendsDashboard({ silent: true });
  }
  if (pageMode === "feedback") {
    void refreshFeedbackDashboard({ silent: true });
  }
  if (pageMode === "tmcash") {
    void refreshTmCashData({ silent: true });
  }
  if (authSessionToken) {
    void callAuthApi("session", { sessionToken: authSessionToken })
      .then((response) => {
        setAuthAccountLock(response?.lock || null);
        applyGlobalBannerPayload(response);
      })
      .catch(() => {});
    void fetchScreenRewards({ silent: true });
  }
});

applyAdminColorOverrides();
applyDistractionFreeClass();
setSchoolModeEnabled(schoolModeEnabled, { silent: true });
ensureProfileNavLink();
ensureFriendsNavLink();
ensureLeaderboardNavLink();
ensureMessagesNavLink();
ensureFeedbackNavLink();
ensureTmCashNavLink();
ensureAdminNavLink();
ensureSecretNavLink();
guardSecretPageAccess();
applyGodModeVisual();
ensureFreeBanner();
syncMiniEventLoop();
bindAdminUnlock();
initAdminPage();
initLeaderboardPage();
initMessagesPage();
initFriendsPage();
initFeedbackPage();
initTmCashPage();
syncHubState();
initAuthGate();
