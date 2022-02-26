let i = 1
let advancedMail = []
let advancedPhone = []

function offBtn() {
  document.getElementById('submitSimple').disabled = true
  document.getElementById('submitAdvanced').disabled = true
}

function valdidatesimple() {
  let simpleMail = document.getElementById('exampleInputEmail').value
  let simplephone = document.getElementById('exampleInputphone').value

  if (!document.getElementById('exampleInputEmail').value.match(/\S+@\S+\.\S+/)) {
    document.getElementById('submitSimple').disabled = true
    return
  } else if (document.getElementById('exampleInputEmail').value.indexOf(' ') != -1 || document.getElementById('exampleInputEmail').value.indexOf('..') != -1) {
    document.getElementById('submitSimple').disabled = true
    return
  } else if (document.getElementById('exampleInputphone').value.length < 9) {
    document.getElementById('submitAdvanced').disabled = true
    return
  } else {
    document.getElementById('submitSimple').disabled = false
    return
  }

  document.getElementById('submitSimple').disabled = true
}
function valdidateAdvanced() {
  //console.log(document.getElementById('exampleInputphone' + i).value.length)
  //console.log(document.getElementById('exampleInputEmail' + i).value)
  for (temp = 1; temp <= i; temp++) {
    if (!document.getElementById('exampleInputEmail' + i).value.match(/\S+@\S+\.\S+/)) {
      document.getElementById('submitAdvanced').disabled = true
      //console.log('2')
      return
    } else if (document.getElementById('exampleInputEmail' + i).value.indexOf(' ') != -1 || document.getElementById('exampleInputEmail' + i).value.indexOf('..') != -1) {
      document.getElementById('submitAdvanced').disabled = true
      //console.log('3')
      return
    } else if (document.getElementById('exampleInputphone' + i).value.length < 9) {
      document.getElementById('submitAdvanced').disabled = true
      return
    } else {
      document.getElementById('submitAdvanced').disabled = false
      //console.log('4')
      return
    }
  }
}
function addBtn() {
  document.getElementById('submitAdvanced').disabled = true

  if (i < 10) {
    i = i + 1
    console.log(i)
    var new_input =
      '<div class="form-group"><label for="exampleInputEmail' +
      i +
      '">Email address</label><input type="email" style="width: 200px;" class="form-control" id="exampleInputEmail' +
      i +
      '" aria-describedby="emailHelp" placeholder="Enter email" onkeyup = "valdidateAdvanced()" required></div><div class="form-group"><label for="exampleInputphone' +
      i +
      '">phone</label><input type="number" style="width: 200px;" class="form-control" id="exampleInputphone' +
      i +
      '" placeholder="Phone: +972..." onkeyup = "valdidateAdvanced()" required></div>'
    $('#advancedAdd').append(new_input)
  }
}

async function submitSimple1() {
  let simpleMail = document.getElementById('exampleInputEmail').value
  let simplephone = document.getElementById('exampleInputphone').value
  a = b= 5;
  
  //+972507747030
  // const res = await axios({
  //   url: 'http://localhost:3001/submitSimple',
  //   method: 'get',
  //   params: {
  //     mail: simpleMail,
  //     phone: simplephone,
  //   },
  // })
  // // console.log(Object.keys(res.data).length)
  // dataSize = Object.keys(res.data).length
  // let print_country = res.data[dataSize - 1].country_name
  // let free = res.data[dataSize - 1].is_free
  // if (print_country == '') {
  //   print_country = 'Unknown'
  // }
  // if (free == '') {
  //   free = 'Unknown'
  // }
  // var new_input = 'This phone is from: ' + print_country + ' is this mail free ? ' + res.data[dataSize - 1].is_free + '<br>'
  // $('#resultSimple').append(new_input)
}

async function submitAdvanced1() {
  numOfinputs = i
  let new_input
  for (let index = 1; index <= numOfinputs; index++) {
    advancedMail.push(document.getElementById('exampleInputEmail' + index).value)
    advancedPhone.push(document.getElementById('exampleInputphone' + index).value)
  }

  //+972507747030
  const res = await axios({
    url: 'http://localhost:3001/submitAdvanced',
    method: 'get',
    params: {
      mail: advancedMail,
      phone: advancedPhone,
    },
  })
  dataSize = Object.keys(res.data).length
  let count = dataSize - numOfinputs
  for (let k = count; k < dataSize; k++) {
    let print_country = res.data[k].country_name
    let free = res.data[k].is_free
    if (print_country == '') {
      print_country = 'Unknown'
    }
    if (free == '') {
      free = 'Unknown'
    }
    new_input += 'This phone is from: ' + print_country + ' is this mail free ? ' + free + '<br>'
  }
  $('#resultAdvanced').append(new_input)
}
