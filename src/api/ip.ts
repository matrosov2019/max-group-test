const getIpInfo = async (ip: string) => {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    console.log('response: ', response);
};
export {
    getIpInfo
};