function cardlookup()
  {
        document.getElementById(resultsCardname).innerHTML = 'info'
    let info =fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon'
)
    .then(res => res.json)
    .then(data => console.log(data))
    document.getElementById(resultsCardname).innerHTML = 'info'
    console.log(info.data)
  }