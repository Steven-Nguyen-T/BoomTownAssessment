<h1 align="center">
  <br>
    <img src='https://avatars.githubusercontent.com/u/1214096?v=4'/>
    <br>
  BoomTown Assessment
  <br>
</h1>

# Getting Started
- Clone this repository: `https://github.com/Steven-Nguyen-T/BoomTownAssessment.git`
- Install dependecies that the project requires: run `npm i`
- Run: `npm start`
- To view in the browser please redirect to: [http://localhost:3000](http://localhost:3000).

# Discussion of Solution
The challenge was very open ended in terms of how to present the data, the main task at hand seemed to be to fetch the data and to render it on a screen. Some challenges that I faced early on was deciding the best way to fetch the data. I initially fetched the data at the top level component using the given endpoint and prop drilled down the URLs needed to fetch the data for each component (Organization, Repos, Events, Hooks, Issues, Members, and Public Members). Instead, I used react router in order to navigate to different pages using a navbar. On that component page, it would only fetch the necessary data that it needed and did not require lots of prop drilling.

From looking at the data, I noticed that all components had their respective URLS so I decided to make a custom hook to fetch data at the component level whenever it deemed necessary. In my `helper` folder, I had lots of resuable functions that I used for my first solution while fetching and prop drilling down URLs. I noticed that the members and public members had additional characters in them so I handled it appropriately. Rather, for my final solution I simply added the correct ending of the URL at the end of each custom hook call. I also noticed that the Hooks and Issues URL did not return any information so I decided to use a modal to display the error information that I received. To handle the task of comparing dates at the organization level, I used a turnary operator to decide on the className where it would highlight the newer date to be a different color. For error handling, I used a try-catch block to log the errors in the modal.

I used a very simple SCSS layout utilizing Material UI for simplicity and a responsive UI.


