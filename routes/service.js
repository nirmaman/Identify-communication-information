const fs = require('fs')
const axios = require('axios').default

// helper methods
const data = {} // the main data
let i = 0
let phone = []
let email = []
let is_free = []
let country_name = []

//return the data from backend to client

const submitAdvanced = async (req, res) => {
  try {
    phone.push(req.query.phone)
    email.push(req.query.mail)
    originalUrl = req.originalUrl
    is_free
    country_name

    for (let e = 0; e < phone[0].length; e++) {
      await axios
        .get('http://apilayer.net/api/validate?access_key=8e91669f9200d9e135ae10ddfded7830&number=' + phone[0][e])
        .then(function (res) {
          country_name = res.data.country_name
          // console.log(country_name)
        })
        .catch(function (res) {
          console.log(res)
        })

      await axios
        .get('http://apilayer.net/api/check?access_key=09060ffe2424ed22387d358f2fb1b3fa&email=' + email[0][e] + '&smtp=1&format=1')
        .then(function (res) {
          is_free = res.data.free
          // console.log(is_free)
        })
        .catch(function (res) {
          console.log(res)
        })
      data[i] = { originalUrl, country_name, is_free }
      i = i + 1
    }
    console.log(data)
    res.status(200).send(JSON.stringify(data))
  } catch (error) {
    console.log(err)
    res.sendStatus(500)
  }
}

const submitSimple = async (req, res) => {
  try {
    let phone = req.query.phone
    let email = req.query.mail
    let originalUrl = req.originalUrl
    let is_free
    let country_name
    //+972507747030

    await axios
      .get('http://apilayer.net/api/validate?access_key=8e91669f9200d9e135ae10ddfded7830&number=' + phone)
      .then(function (res) {
        country_name = res.data.country_name
        //console.log(country_name)
      })
      .catch(function (res) {
        console.log(res)
      })

    await axios
      .get('http://apilayer.net/api/check?access_key=09060ffe2424ed22387d358f2fb1b3fa&email=' + email + '&smtp=1&format=1')
      .then(function (res) {
        is_free = res.data.free
        //console.log(is_free)
      })
      .catch(function (res) {
        console.log(res)
      })

    data[i] = { originalUrl, country_name, is_free }

    i = i + 1
    console.log(data)
    res.status(200).send(JSON.stringify(data))
  } catch (error) {
    res.sendStatus(500)
    console.log(err)
  }
}

module.exports = {
  submitSimple,
  submitAdvanced,
}
