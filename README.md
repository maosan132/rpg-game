![](https://img.shields.io/badge/Microverse-blueviolet)

# JavaScript capstone project - VULCANO

This capstone's goal is to create a turn-based RPG game using JavaScript ES6, Webpack and the Phaser 3 game engine.

## Table of Contents

- [Objective](#Objective)
- [Gameplay](#Gameplay)
- [How to Play](#How-to-Play)
- [Live Version](#Live-version)
- [Install and Run](#How-to-Install-and-Run-in-Your-Computer)
- [Acknowledgments](#Acknowledgments)

### Objective

> Main purpose of this project is practicing game development with Javascript. I am using Phaser as the framework. Parcel as the bundler, picked it over webpack as it has fewer configuration (0 in fact), and I will be using JS modern features as modules. API management for scores will also be concerned.

[Up](#Table-of-Contents)

## Built With

- HTML5
- Javascript ES6
- ES6 modules
- Webpack 4
- Phaser 3.54
- Microverse Leaderboard API

### Gameplay

Use the arrow keys to control a knight character on the vulcan terrain. You start on the top left corner and you have to navigate through the map to find the exit on the opposite side.

You will run into hidden spots where you will be attacked by two enemies during your journey.

When find a hidden spot, the battle screen starts where you decide which enemy to attack each time. Use arrow keys again to select an enemy and left key / space key to attack. This is a turn-based RPG so each of your team members attacks only once. The enemies will attack you when at their turn. The battle continues until you defeat all monsters or be defeated by them.

After each battle your health will be restored.

If you reach the exit at the opposite side, your good to go and you won the game.

[Up](#Table-of-Contents)

### How to Play

1. #### Start Screen

<p align="center">
<img src="assets/screens/input.png">
</p>

Enter your name or avatar on the first screen and click on 'Play Now' button.

<p align="center">
<img src="assets/screens/menu.png">
</p>

Next screen is where you control the game. You have 4 options:

2. #### Play

<p align="center">
<img src="assets/screens/play.png">
</p>

Here is where the fun begins. By clicking 'Play' you are transferred to the forest. You move your character on the screen by using the four arrow keys. You can move up, down, left, right, and even diagonally if you keep to arrows pressed simultaneously.

- #### Battlefield

<p align="center">
<img src="assets/screens/battle.png">
</p>

When attacked by foes you are transferred to the Battlefield. On the left side of the screen appear the attacking enemies. On the right side is your team. You, the Warrior, the Knight, and the Beast. Below them are three blue areas. The left area lists the names of the enemies, the right area the names of your team, and in the middle are the available commands. Currently, the only available command is 'Attack'.

Your team starts attacking first, one at a time. The attacker's name is in yellow letters. By pressing the up and down arrow you can select which foe to attack. After selecting press space to commence the attack.

If you kill all the enemies you return to the forest and you can proceed with your quest. If you lose all your team it is 'Game Over' and you are transferred to the 'Game Over' scene.

Your score is updated after each battle. If you get out of the forest you will see the 'Victory' scene and your score.

3. #### Options

<p align="center">
<img src="assets/screens/options.png">
</p>

'Music Enabled' checkbox controls whether you will have music during playing or not.

'Sound Enabled' button is not operational yet.

4. #### Credits

<p align="center">
<img src="assets/screens/credits.png">
</p>

Credits for this game.

5. #### LeaderBoard

<p align="center">
<img src="assets/screens/leaders.png">
</p>

Hall of fame players are listed on the LeaderBoard.

[Up](#Table-of-Contents)

### Live version

- [**Vulcano**](http://mauriciosantos.paternit.com/io/vulcano/)

### How to Install and Run in Your Computer

To run the scripts **npm** is required. To get npm you have to install [Node.js](https://nodejs.org). Follow the installation instructions for your system Mac, Linux or Windows.

Use your terminal and run the commands after each instruction.

| Command                                             | Description                                           |
| --------------------------------------------------- | ----------------------------------------------------- |
| `git clone https://github.com/macnick/RPG-game.git` | Clone the repository to you computer                  |
| `cd rpg-game`                                       | Navigate to the newly created folder                  |
| `npm install`                                       | Install dependencies and launch browser with examples |
| `npm start`                                         | Makes the build and starts the development server     |
|                                                     | Press `Ctrl + c` to kill **http-server** process      |
| `http://localhost:8000`                             | Visit this link to play the game                      |

[Up](#Table-of-Contents)

## Acknowledgements

- Dark Forest Background image By Google Images
- Background music from Duke Nukem 2 Game
- Player images by [OpenGameArt](https://opengameart.com)
- Hat tip to anyone whose code was used


[Up](#Table-of-Contents)

## Upcoming features

- Randomize where the enemy ambushes
- Weighted hit power, not always the same. Each character will have minimum and maximum hit power and will hit randomly between their limits.
- Player characters will not restore full power after each battle.
- Add power-ups inside the forest to restore user power.
- Fix the health bug.

## 👤 Author

👤 **Mauricio Santos**

- Github: [@maosan132](https://github.com/maosan132)
- Twitter: [@maosan132](https://twitter.com/maosan132)
- Linkedin: [maurisantos](https://www.linkedin.com/in/mauricsantos)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/maosan132/rpg-game/issues).

1. Fork it (https://github.com/maosan132/rpg-game/fork)
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
