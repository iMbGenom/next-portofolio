const prod = process.env.NODE_ENV === 'production'

module.exports = {
    'process.env.BASE_URL': prod ? 'https://tambuah.com' : 'http://localhost:4000',
    'process.env.NAMESPACE': 'https://tambuah.com',
    'process.env.CLIENT_ID': 12345
}