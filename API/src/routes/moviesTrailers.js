const express = require('express')
const moviesTrailersRouter = express.Router()
const axios = require('axios')


//GEThome
moviesTrailersRouter.get('',  async(req, res) => {
    try {
        const homeAPI = await axios.get(`https://api.themoviedb.org/3/movie/545609?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe`)
        res.render('home', { home : homeAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('home', { home : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('home', { home : null })
            console.log(err.requiest)
        } else {
            res.render('home', { home : null })
            console.error('Error', err.message)
        }
    } 
})

//GETpopular
moviesTrailersRouter.get('/latest', async(req, res) => {
    try {
        const latestMovieAPI = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe`)
        res.render('latestMovie', { latest : latestMovieAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('latestMovie', { latest : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('latestMovie', { latest : null })
            console.log(err.requiest)
        } else {
            res.render('latestMovie', { latest : null })
            console.error('Error', err.message)
        }
    } 
})

//GETpopular
moviesTrailersRouter.get('/popular', async(req, res) => {
    try {
        const popularAPI = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe`)
        res.render('popular', { populars : popularAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('popular', { populars : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('popular', { populars : null })
            console.log(err.requiest)
        } else {
            res.render('popular', { populars : null })
            console.error('Error', err.message)
        }
    } 
})

//GETsinglemovie
moviesTrailersRouter.get('/popular/movie/:id', async(req, res) => {
    let articleID = req.params.id

    try {
        const movieAPI = await axios.get(`https://api.themoviedb.org/3/movie/${articleID}?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe`)
        res.render('movieSingle', { movie : movieAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('movieSingle', { movie : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('movieSingle', { movie : null })
            console.log(err.requiest)
        } else {
            res.render('movieSingle', { movie : null })
            console.error('Error', err.message)
        }
    } 
})

//GETsearch
moviesTrailersRouter.post('', async(req, res) => {
    let query = req.body.search
    try {
        const movieAPI = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe&query=${query}`)
       console.log(movieAPI);
        res.render('movieSearch', { movies : movieAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('movieSearch', { movies : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('movieSearch', { movies : null })
            console.log(err.requiest)
        } else {
            res.render('movieSearch', { movies : null })
            console.error('Error', err.message)
        }
    } 
})

//GETsearchmovie
moviesTrailersRouter.get('/movie/:id', async(req, res) => {
    let articleID = req.params.id

    try {
        const movieAPI = await axios.get(`https://api.themoviedb.org/3/movie/${articleID}?api_key=42059ca2ab4f0ac6bb66c2ab66768fbe`)
        res.render('movieSingle', { movie : movieAPI.data })
    } catch (err) {
        if(err.response) {
            res.render('movieSingle', { movie : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('movieSingle', { movie : null })
            console.log(err.requiest)
        } else {
            res.render('movieSingle', { movie : null })
            console.error('Error', err.message)
        }
    } 
})

//POSTsignIn
// moviesTrailersRouter.post('/signIn', async(req, res) => {
//     let query = req.body.search
//     try {
//         const movieAPI = await axios.get(``)
//        console.log(movieAPI);
//         res.render('signInSignUp', { movies : movieAPI.data })
//     } catch (err) {
//         if(err.response) {
//             res.render('signInSignUp', { movies : null })
//             console.log(err.response.data)
//             console.log(err.response.status)
//             console.log(err.response.headers)
//         } else if(err.requiest) {
//             res.render('signInSignUp', { movies : null })
//             console.log(err.requiest)
//         } else {
//             res.render('signInSignUp', { movies : null })
//             console.error('Error', err.message)
//         }
//     } 
// })
module.exports=moviesTrailersRouter