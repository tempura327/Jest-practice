export default (name: String, amount: Number) => {
    if (name != '' && amount > 0) {
        return 'now we have ' + amount + ' ' + name + '.';
    } else if (name === '') {
        return 'i have no idea what books we have.';
    } else {
        return 'we have no any book.'
    }
}