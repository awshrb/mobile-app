import BigNumber from "bignumber.js";

export const numberFixedDecimal = (val, decimal) => {
    return Math.round(val * decimal) / decimal;
};
export const countDecimals = (value) => {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
};
export const decimalChecker = (value, decimal) => {
    if (Math.floor(value).toString() === value || value === "") return true;
    const re = new RegExp("^\\d+\\.\\d{0," + decimal + "}$", "g");
    return re.test(value);
};

export const parsePriceString = (value) => {
    if (!value) {
        return 0;
    }
    return parseFloat(value.replace(/[^0-9.-]+/g, ""));
};

export const validateEmail = (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
}

export const encodeQueryData = (params) => {
    const ret = [];
    for (let d in params)
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(params[d]));
    return ret.join('&');
}

export const BN = BigNumber.clone({
    FORMAT: {
        groupSize: 3,
        groupSeparator: ',',
        decimalSeparator: '.',
    }
})

export const isEn = str => /^[a-zA-Z ]*$/.test(str);

export const isValidNationalCode = input => {
    if (!/^\d{10}$/.test(input)) return false;
    const check = +input[9];
    const sum = input.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
    return sum < 2 ? check === sum : check + sum === 11;
}

export const isValidPassportCode = input => {
    return /^[A-Z][0-9]{8}$/.test(input);
}

export const toEnglishNum = str => {
    const persianNumberArr = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
    const arabicNumberArr = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

    if (typeof str === 'string') {
        for (let i = 0; i < 10; i++) {
            str = str.replace(persianNumberArr[i], i).replace(arabicNumberArr[i], i);
        }
    }
    return str;
}

export const toAbsoluteUrl = (path) => process.env.PUBLIC_URL + path


export const shortenHash = (hash) => {
    if (!hash || hash.length < 10) {
        return hash;
    }
    return `${hash.substring(0, 6)} - - - ${hash.substring(hash.length - 4)}`;
}