export default(data) => {
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let date = data.getDate();

    if(!isNaN(year) && !isNaN(month) && !isNaN(date)){
        return year + ' / ' + month + ' / ' + date;
    }else{
        return 'failed';
    }
}