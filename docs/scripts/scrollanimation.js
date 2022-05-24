const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.spk1`)
sr.reveal(`.spk2`, {delay: 500, origin: 'bottom'})
sr.reveal(`.spk3`, {delay: 500, origin: 'left'})
sr.reveal(`.spk4`, {delay: 500, origin: 'right'})