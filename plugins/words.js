export default ({ app }, inject) => {
    
    inject('words',(str,limit,separator=' ') => {
        return str.substr(0, str.lastIndexOf(separator, limit)) + '...'
    } )

  }