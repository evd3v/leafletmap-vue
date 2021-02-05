import Api from '@/api/api'

const FAKE_API_URL = '/'

/** Fake Api class */
export default class FakeRequest extends Api {
    constructor() {
        super()
        this.client.defaults.baseURL = FAKE_API_URL
    }

    async makeRequest() {
        console.log('fake requesting....')
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
                console.log('done!')
            }, 2000)
        })
    }
}
