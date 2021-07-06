import paladin from './images/paladin.jpeg'
import rogue from './images/rogue.jpg'
import sorcerer from './images/sorcerer.jpeg'
import fighter from './images/fighter.jpeg'
import ranger from './images/ranger.jpeg'
import warlock from './images/warlock.jpeg'




export const characters = [
    {
        id: 1,
        qty: 1,
        name: 'Aryte',
        gender: 'Male',
        race: 'Human',
        class: 'Paladin',
        age: 37,
        height: `5'9''`,
        description: 'Man standing with sword',
        strength: 'Can take a beating',
        weakness: 'Interacting with people',
        price: 8,
        img: paladin
        //img: 'paladin.jpeg'
    },
    {
        id: 2,
        qty: 1,
        name: 'Esvele Tallstag',
        gender: 'Female',
        race: 'Human',
        class: 'Rogue',
        age: 18,
        height: `5'4''`,
        description: 'Woman standing with dagger',
        strength: 'Very Strong',
        weakness: 'Not very wise',
        price: 5,
        img: rogue
    },
    {
        id: 3,
        qty: 1,
        name: 'Ander Leagallow',
        gender: 'Male',
        race: 'Human',
        class: 'Sorcerer',
        age: 56,
        height: `5'10''`,
        description: 'Old Man creating fireball',
        strength: 'Extremely wise',
        weakness: 'Very weak',
        price: 14,
        img: sorcerer
    },
    {
        id: 4,
        qty: 1,
        name: 'Darastrix',
        gender: 'Male',
        race: 'Human',
        class: 'Fighter',
        age: 67,
        height: `6'3''`,
        description: 'Old man in suit of armor',
        strength: 'A born leader',
        weakness: 'Not as fast as he once was',
        price: 10,
        img: fighter
    },
    {
        id: 5,
        qty: 1,
        name: 'Caelynn Horineth',
        gender: 'Female',
        race: 'Elf',
        class: 'Ranger',
        age: 371,
        height: `5'3''`,
        description: 'Woman drawing her bow',
        strength: 'Very perceptive',
        weakness: 'Quick to anger',
        price: 9,
        img: ranger
    },
    {
        id: 6,
        qty: 1,
        name: 'Quespa Turnuroth',
        gender: 'Female',
        race: 'Dragonborn',
        class: 'Warlock',
        age: 43,
        height: `6'1''`,
        description: 'Dragon zapping their sword',
        strength: 'Highly intellectual',
        weakness: 'Not very charismatic',
        price: 11,
        img: warlock
    }
]