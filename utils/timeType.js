// function to find if time format is unix or utc
function isUnixTime(time) {
    // if time contains - return false
    if (time.indexOf("-") > -1) {
        return false;
    }
    // if time is number, it is unix time
    if (Number.isInteger(parseInt(time))) {
            return true;

    }
    else{
        return err;
    }
}   
export {isUnixTime}