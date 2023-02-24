const $year = 2023;
const $month = 0;
const url_firmaID = document.URL; // 'https://uygulama.parasut.com/{firmaID}/'

fetch(`${url_firmaID}e_invoices`)
.then(fjson => fjson.json())
.then(f => {
    f.e_invoices
    .filter(inv=>new Date(inv.issue_date).getFullYear() == $year && new Date(inv.issue_date).getMonth() == $month)
    .forEach((ubl, i)=>console.log(i, "https://uygulama.parasut.com"+ubl.signed_ubl_url))
})
