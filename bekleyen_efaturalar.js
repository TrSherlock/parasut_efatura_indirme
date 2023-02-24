const $year = 2023;
const $month = 0;

fetch("https://uygulama.parasut.com/302587/e_invoices")
.then(fjson => fjson.json())
.then(f => {
    f.e_invoices
    .filter(inv=>new Date(inv.issue_date).getFullYear() == $year && new Date(inv.issue_date).getMonth() == $month)
    .forEach(ubl=>console.log("https://uygulama.parasut.com"+ubl.signed_ubl_url))
})
