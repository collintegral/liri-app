require("dotenv").config();

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
// This allows us to connect to Spotify without sharing our API info

// Read the user command to figure out what API to reference
const liriCommand = process.argv[2].toLowerCase();

function grabSearchQuery(input) {
    // Read the user's search item
    return input.slice(3).join(' ').toLowerCase;
}

runLiri(liriCommand, grabSearchQuery(process.argv));

function runLiri(selection, searched) {
    if (selection === 'concert-this') {
        //search through the BandsinTown API for this artist, and console.log the resulting venues, dates, and locations to the user.
    }
    else if (selection === 'spotify-this-song') {
        //search through the Spotify API for this song, and console.log the artist, song's name, Spotify link, and album.
        //If Spotify returns without finding the song, grab this info for "The Sign" by Ace of Base as a default return.
    }
    else if (selection === 'movie-this') {
        //search through the OMDB API for this movie, and console.log the title, release year, IMDB rating,
        // Rotten Tomatoes rating, country of origin, languag, plot summary, and important actors.

        axios.get("http://www.omdbapi.com/?t=" + searched + "&y=&plot=full&tomatoes=true&apikey=trilogy").then(res => {
            //console log the pertinent res.data here
        }).catch(
            axios.get("http://www.omdbapi.com/?t=" + 'Mr. Nobody' + "&y=&plot=full&tomatoes=true&apikey=trilogy").then(res => {
                // If the initial axios fails to find a movie, search for a default value, Mr. Nobody.
            }))

    }
    else if (selection === 'do-what-it-says') {
        // Retrieve text from random.txt and set it equal to a string
        false.readFile('random.txt', 'utf8', (err, randomText) => {
            runLiri(randomText[2].toLowerCase, grabSearchQuery(randomText));
        }).catch(console.log(err));

        // Then run the Liri function again, using random.txt's command instead

    }
    else {
        console.log("Invalid request. Options are 'concert-this', 'spotify-this-song', 'movie-this', and 'do-what-it-says'.");
    }
}