'use strict';
const btnClear = document.querySelector("#clear-button");
const btnCalc = document.querySelector("#calc-button");
const txtMarriageYear = document.querySelector("#marriage-date");

const txtRequestYear = document.querySelector("#request-year");
const txtAmountOnDocument = document.querySelector("#documnet-amount");
const lblCalculatedAmount = document.querySelector("#claculated-amount");
const tgIsAlive = document.querySelector("#isAlive");
const lblRequestYear = document.querySelector("#request-year-label");
//

const shekhes = (year) => {
    let dic = {};

    dic[1315] = 0.004;
    dic[1316] = 0.004;
    dic[1317] = 0.004;
    dic[1318] = 0.004;
    dic[1319] = 0.004;
    dic[1320] = 0.008;
    dic[1321] = 0.012;
    dic[1322] = 0.028;
    dic[1323] = 0.028;
    dic[1324] = 0.024;
    dic[1325] = 0.02;
    dic[1326] = 0.024;
    dic[1327] = 0.024;
    dic[1328] = 0.028;
    dic[1329] = 0.02;
    dic[1330] = 0.024;
    dic[1331] = 0.024;
    dic[1332] = 0.028;
    dic[1333] = 0.032;
    dic[1334] = 0.032;
    dic[1335] = 0.036;
    dic[1336] = 0.036;
    dic[1337] = 0.036;
    dic[1338] = 0.044;
    dic[1339] = 0.048;
    dic[1340] = 0.048;
    dic[1341] = 0.048;
    dic[1342] = 0.048;
    dic[1343] = 0.052;
    dic[1344] = 0.052;
    dic[1345] = 0.052;
    dic[1346] = 0.052;
    dic[1347] = 0.052;
    dic[1348] = 0.052;
    dic[1349] = 0.056;
    dic[1350] = 0.056;
    dic[1351] = 0.06;
    dic[1352] = 0.069;
    dic[1353] = 0.077;
    dic[1354] = 0.085;
    dic[1355] = 0.101;
    dic[1356] = 0.125;
    dic[1357] = 0.137;
    dic[1358] = 0.153;
    dic[1359] = 0.19;
    dic[1360] = 0.234;
    dic[1361] = 0.278;
    dic[1362] = 0.319;
    dic[1363] = 0.355;
    dic[1364] = 0.379
    dic[1365] = 0.468;
    dic[1366] = 0.597;
    dic[1367] = 0.77;
    dic[1368] = 0.903;
    dic[1369] = 0.984;
    dic[1370] = 1.189;
    dic[1371] = 1.48;
    dic[1372] = 1.814;
    dic[1373] = 2.456;
    dic[1374] = 3.665;
    dic[1375] = 4.52;
    dic[1376] = 5.298;
    dic[1377] = 6.258;
    dic[1378] = 7.516;
    dic[1379] = 8.463;
    dic[1380] = 9.427;
    dic[1381] = 10.915;
    dic[1382] = 12.624;
    dic[1383] = 14.544;
    dic[1384] = 16.048;
    dic[1385] = 17.955;
    dic[1386] = 21.265;
    dic[1387] = 26.66;
    dic[1388] = 29.527;
    dic[1389] = 33.188;
    dic[1390] = 40.321;
    dic[1391] = 52.635;
    dic[1392] = 70.916;
    dic[1393] = 81.948;
    dic[1394] = 91.714;
    dic[1395] = 100;
    dic[1396] = 109.6;



    return dic[year];
}



const clear = () => {

    txtMarriageYear.value = '';
    txtAmountOnDocument.value = '';
    lblCalculatedAmount.innerText = "-----------";
    txtRequestYear.value = '1397';


}
const isValid = () => {

    if (txtMarriageYear.value.trim().length <= 0 ||
        txtAmountOnDocument.value.trim().length <= 0 ||
        txtRequestYear.value.trim().length <= 0 ||
        txtRequestYear.value > 1397

    ) {

        presentAlert();
        return false;
    }
    // alert(txtMarriageYear.value.length);
    return true;
}
const calc = () => {

    //  alert(isValid());
    if (isValid()) {
        // alert(txtAmountOnDocument.value);

        let m = (+txtAmountOnDocument.value * shekhes(+txtRequestYear.value - 1)) / shekhes(+txtMarriageYear.value);
        // alert(Math.round(m));
        lblCalculatedAmount.innerText = Math.round(m).toLocaleString();
    }


}


async function presentAlert() {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'خطا',

        message: 'لطفاً اطلاعات را تکمیل نمائید.',
        buttons: [{
                text: 'OK',
                cssClass: 'primary'

            }

        ]
    });
    return await alert.present();
}

btnClear.addEventListener('click', clear);
btnCalc.addEventListener('click', calc);
tgIsAlive.addEventListener('ionChange', function () {

    if (!tgIsAlive.checked) {
        lblRequestYear.innerText = "سال فوت همسر";
    } else {
        lblRequestYear.innerText = "سال درخواست مهریه";
    }
});