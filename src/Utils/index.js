import { register } from 'register-service-worker'

const logLevel = 'debug'
const prefix = 'SW: '

/* Registers service-worker */
export const register_service_worker = () => {
    if (process.env.NODE_ENV === 'production'){
        register(`${process.env.BASE_URL}service-worker.js`, {
            ready(){
                console[logLevel](prefix, 'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB')
            },
            registered(){
                console[logLevel](prefix, 'Service worker has been registered.')
            },
            cached(){
                console[logLevel](prefix, 'Content has been cached for offline use.')
            },
            updatefound(){
                console[logLevel](prefix, 'New content is downloading.')
            },
            updated(){
                console[logLevel](prefix, 'New content is available; please refresh.')
            },
            offline(){
                console[logLevel](prefix, 'No internet connection found. App is running in offline mode.')
            },
            error(error){
                console.error(prefix, 'Error during service worker registration:', error)
            }
        })
    }
}