import { Constants } from '@/common/constants/Constants';
import { TokenServices } from '@/services/token/token';
import axios from 'axios';
export const getServices = {
    getData,
    getIdData,
    filterPartition,
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

function filterPartition(data: object, index: number) {
    const keys = ["username", "host", "vendor_name", "customer_name", "filename",
        "created_at", "invoice_number"];
    if (data) {
        var partitionData = '';
        for (const [key, value] of Object.entries(data)) {
            partitionData =
                value !== ''
                    ? keys.includes(key)
                        ? `${partitionData}&filter[${key}][like]=${value}`
                        : index && (key === 'gte' || key === 'lte')
                            ? `${partitionData}&filter[invoice_date][${key}]=${value}`
                            : !index && key === 'gte'
                                ? `${partitionData}&filter[created_at][${key}]=${value} 00:00:00`
                                : !index && key === 'lte'
                                    ? `${partitionData}&filter[created_at][${key}]=${value} 23:59:59`
                                    : key === Constants.assignedTo && value === Constants.all
                                        ? `${partitionData}&filter[${key}][neq]NULL`
                                        : key === Constants.actionItem ? getActionFilter(partitionData, value)
                                            : `${partitionData}&filter[${key}]=${value}`
                    : partitionData;
        }
        return partitionData;
    } else {
        return '';
    }
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