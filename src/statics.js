export const initialState = {
  'Menu': {
    'items': ['Jamaican', 'Irish', 'Spanish', 'Small Plate', 'Breakfast'],
    'display': 'none'
  },
  'Reservations': {
    'items': [],
    'display': 'none'
  },
  'Contact Us': {
    'items': ['Email', 'Write me a fuckin letter'],
    'display': 'none'
  },
  'Locations': {
    'items': ['East Berlin circa 1988', 'Cheyenne Mountain Complex', 'Inside the Statue of Liberty\'s Torch'],
    'display': 'none'
  },
  'History': {
    'items': ['Story', 'Follow Us'],
    'display': 'none'
  }
}

export const query = body => {
  const url = 'https://api.graph.cool/simple/v1/cj2hpn26v8fx70187k7f75y1o'
  window.fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/JSON' },
    body: {'query': `query ${body}`}})
  .then(r => r.json())
}
