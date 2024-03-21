import axios from 'axios';

const getIpInfo = async (ip: string) => {
    return axios(`http://ip-api.com/json/${ip}`);
};
export {
    getIpInfo
};