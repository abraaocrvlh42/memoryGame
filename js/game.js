// Script to create the animation of the cards

const grid = document.querySelector('.grid')

const characters = [
  'beth',
  'jerry',
  'jessica',
  'meeseeks',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'scroopy',
  'summer'
]

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
} 

const createCard = () => {
  const card = createElement('div', 'card')
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  card.appendChild(front)
  card.appendChild(back)

  return card
}

const loadGame = () => {
  characters.forEach((character) => {
    const card = createCard()
    grid.appendChild(card)
  })
}

loadGame()