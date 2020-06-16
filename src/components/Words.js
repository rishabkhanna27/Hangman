var sports = [
  "archery",
  "badminton",
  "cricket",
  "bowling",
  "boxing",
  "tennis",
  "hockey",
  "yoga",
  "karate",
  "volleyball",
  "basketball",
  "baseball",
  "rugby",
  "wrestling",
  "cycling",
  "running",
  "fishing",
  "judo",
  "climbing",
  "pool",
  "shooting",
  "golf",
  "football"
]

function randomWord() {
  return sports[Math.floor(Math.random() * sports.length)]
}

export { randomWord }