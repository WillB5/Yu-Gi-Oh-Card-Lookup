<script type="text/javascript">

  var card;

  function cardlookup()
  {
    //let info = document.getElementById('resultsCardname')
    const ygoxhr= new XMLHttpRequest
    ygoxhr.open('GET','https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon')
    ygoxhr.onload = function () {
      let info = ygoxhr.response
      console.log(info)
      let printinfo = JSON.parse(info)
      console.log(printinfo.data)

      card = info
      document

    }
    ygoxhr.send()
  
  }

</script>