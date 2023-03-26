
import { TokenServices } from '@/services/token/token';
import axios from 'axios';
export const getServices = {
    getData,
    getIdData,
    deleteData,
    addData,
    updateData,
    updateIdStatusData,
    getDatatest,
};

const HTTPStatusCode = {
    Created: 201,
    OK: 200,
    BadRequest: 400,
    NoContent: 204
}

function getData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.get(db.url, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.OK) {
            return data.data;
        } else {
            return data;
        }
    })
};

function addData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.post(db.url, db.data, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.OK) {
            return data.data;
        } else {
            return data;
        }
    })
};

function updateData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.put(db.url, db.data, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.OK) {
            return data.data;
        } else {
            return data;
        }
    })
};

function updateIdStatusData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.put(db.url, db.data, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.OK) {
            return data.data;
        } else {
            return data;
        }
    })
};

function getIdData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.get(db.url + '?id=' + db.dataId.id, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.OK) {
            return data.data;
        } else {
            return data;
        }
    })
};

function deleteData(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.delete(db.url + '?id=' + db.dataId.id, { headers: HEADERS }).then((data) => {
        if (data.status === HTTPStatusCode.NoContent) {
            return true;
        } else {
            return false;
        }
    })
};


function getDatatest(db: any) {
    const HEADERS = TokenServices.getrdToken();
    return axios.get(db.url, { headers: HEADERS })
};

function getActionFilter(filterData: string, value: string) {
    let spiltedVal = '';
    switch (value) {
        case '1':
            spiltedVal = `${filterData}&filter[is_ocr_verified]=0&filter[is_po_verified]=0&filter[is_contact_customer]=0`;
            break;
        case '2':
            spiltedVal = `${filterData}&filter[is_ocr_verified]=0&filter[is_po_verified]=1&filter[is_contact_customer]=0`;
            break;
        case '3':
            spiltedVal = `${filterData}&filter[is_ocr_verified]=1&filter[is_po_verified]=0&filter[is_contact_customer]=0`;
            break;
        case '4':
            spiltedVal = `${filterData}&filter[is_ocr_verified]=1&filter[is_po_verified]=1&filter[is_contact_customer]=0`;
            break;
        case '5':
            spiltedVal = `${filterData}&filter[is_contact_customer]=1`;
            break;
    }
    return spiltedVal;
}