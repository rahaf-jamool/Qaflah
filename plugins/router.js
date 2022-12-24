import axios from 'axios';
import moment from 'moment';

export default ({ app }) => {
    // Every time the route changes (fired on initialization too)
    
    app.router.beforeResolve((to, from, next) => {
        if(!localStorage.getItem('Token') || localStorage.getItem('Token') == 'null' || localStorage.getItem('Token') == ''){
            axios.post(`http://api.kmqlegal.net/Auth/Login`,{
                "email": "Application@app.com",
                "userName": "Application",
                "password": "to_j7tu3%"
            })
            .then(response => {
                localStorage.setItem('Token', response.data.token)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                localStorage.setItem('tokenDate', new Date())
                next();
            })
            .catch(e => {
                console.log(e)
            })
        }else if( moment(new Date()).diff(moment(localStorage.getItem('tokenDate'))) >= 21600000){
                axios.post(`http://api.kmqlegal.net/Auth/Refresh`,{
                    "token": localStorage.getItem('Token'),
                    "refreshToken": localStorage.getItem('refreshToken')
                })
                .then(response => {
                    localStorage.setItem('Token', response.data.token)
                    localStorage.setItem('refreshToken', response.data.refreshToken)
                    localStorage.setItem('tokenDate', new Date())
                    next();
                })
                .catch(e => {
                    console.log(e)
                })
        }else{
            next();
        }
    })
 }