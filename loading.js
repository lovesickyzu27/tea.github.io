// loading.js
const start = document.getElementById('start');
const loading = document.getElementById('loading');
const indexview = document.getElementById('indexview');
const card = document.getElementById('card');
const star = document.getElementsByClassName('star');


const QAoneElement = document.getElementById('QAone');
const QAtwoElement = document.getElementById('QAtwo');
const QAthrElement = document.getElementById('QAthr');
const QAfouElement = document.getElementById('QAfou');
const QAfivElement = document.getElementById('QAfiv');
const QAsixElement = document.getElementById('QAsix');

const namehtml = document.getElementById('name');
const finalpage = document.getElementById('final');
start.addEventListener('click', function () {
    indexview.style.display = 'none';
    setTimeout(function () {
        loading.style.display = 'block';
        setTimeout(function () {
            loading.style.display = 'none';
            QAoneElement.style.display = 'block';
        }, 800);
    }, 100);
});
window.onload = function () {
    //QAone
    // 監聽 QAonea 按鈕的點擊事件
    document.getElementById('QAonea').addEventListener('click', function () {
        onea++;
        console.log("onea :", onea);
        setTimeout(function () {
            QAoneElement.style.display = 'none';
            QAtwoElement.style.display = 'block';
        }, 100);
    });

    // 監聽 QAoneb 按鈕的點擊事件
    document.getElementById('QAoneb').addEventListener('click', function () {
        oneb++;
        console.log("oneb :", oneb);
        setTimeout(function () {
            QAoneElement.style.display = 'none';
            QAtwoElement.style.display = 'block';
        }, 100);
    });


    // QAtwo
    // 監聽 QAtwoa 按鈕的點擊事件
    document.getElementById('QAtwoa').addEventListener('click', function () {
        twoa++;
        console.log("twoa :", twoa);
        setTimeout(function () {
            QAtwoElement.style.display = 'none';
            QAthrElement.style.display = 'block';
        }, 100);
    });

    // 監聽 QAtwob 按鈕的點擊事件
    document.getElementById('QAtwob').addEventListener('click', function () {
        twob++;
        console.log("twob :", twob);
        setTimeout(function () {
            QAtwoElement.style.display = 'none';
            QAthrElement.style.display = 'block';
        }, 100);
    });

    // QAthr
    // 監聽 QAthra 按鈕的點擊事件
    document.getElementById('QAthra').addEventListener('click', function () {
        setTimeout(function () {
            QAthrElement.style.display = 'none';
            QAfouElement.style.display = 'block';
        }, 100);
    });

    // 監聽 QAthrb 按鈕的點擊事件
    document.getElementById('QAthrb').addEventListener('click', function () {
        setTimeout(function () {
            QAthrElement.style.display = 'none';
            QAfouElement.style.display = 'block';
        }, 100);
    });

    // QAfou
    // 監聽 QAfoua 按鈕的點擊事件
    document.getElementById('QAfoua').addEventListener('click', function () {
        setTimeout(function () {
            QAfouElement.style.display = 'none';
            QAfivElement.style.display = 'block';
        }, 100);
    });

    // 監聽 QAfoub 按鈕的點擊事件
    document.getElementById('QAfoub').addEventListener('click', function () {
        setTimeout(function () {
            QAfouElement.style.display = 'none';
            QAfivElement.style.display = 'block';
        }, 100);
    });

    // QAfiv
    // 監聽 QAfiva 按鈕的點擊事件
    document.getElementById('QAfiva').addEventListener('click', function () {
        fiva++;
        console.log("fiva :", fiva);
        setTimeout(function () {
            QAfivElement.style.display = 'none';
            QAsixElement.style.display = 'block';
        }, 100);
    });

    // 監聽 QAfivb 按鈕的點擊事件
    document.getElementById('QAfivb').addEventListener('click', function () {
        fivb++;
        console.log("fivb :", fivb);
        setTimeout(function () {
            QAfivElement.style.display = 'none';
            QAsixElement.style.display = 'block';
        }, 100);
    });
    document.getElementById('QAsixa').addEventListener('click', function () {
        setTimeout(function () {
            QAsixElement.style.display = 'none';
            namehtml.style.display = 'block';
        }, 100);
    });

    // 監聽 QAfoub 按鈕的點擊事件
    document.getElementById('QAsixb').addEventListener('click', function () {
        setTimeout(function () {
            QAsixElement.style.display = 'none';
            namehtml.style.display = 'block';
        }, 100);
    });




    //輸入姓名後顯示結果
    // 監聽 QAsixa 按鈕的點擊事件
    document.getElementById('nameget').addEventListener('click', function () {
        console.log("onea :", onea);
        console.log("oneb :", oneb);
        console.log("twoa :", twoa);
        console.log("twob :", twob);
        console.log("fiva :", fiva);
        console.log("fivb :", fivb);
        namehtml.style.display = 'none';
        setTimeout(function () {
            loading.style.display = 'block';
            setTimeout(function () {
                loading.style.display = 'none';
                finalpage.style.display = 'block';
                updateNameShow();
            }, 800);
        }, 100);
    });

    const ans1 = document.getElementById('ans1'); //極白
    const ans2 = document.getElementById('ans2'); //嘿嘿黑
    const ans3 = document.getElementById('ans3'); //消光黑
    const ans4 = document.getElementById('ans4'); //槁木死灰
    const ans5 = document.getElementById('ans5'); //島灰
    const ans6 = document.getElementById('ans6'); //皂甘納灰
    const ans7 = document.getElementById('ans7'); //慕尼黑
    const ans8 = document.getElementById('ans8'); //不明不白

    var onea = 0;
    var oneb = 0;
    var twoa = 0;
    var twob = 0;
    var fiva = 0;
    var fivb = 0;

    function updateNameShow() {
        if (finalpage.style.display === 'block') {
            if (onea == 1 && twoa == 1 && fivb == 1) { //嘿嘿黑
                card.style.display = 'none';
                ans2.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = "rgb(255, 255, 255)";
                }
            } else if (onea == 1 && twob == 1 && fivb == 1) { //慕尼黑
                card.style.display = 'none';
                ans7.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(200, 200, 200)";
                }
            } else if (oneb == 1 && twoa == 1 && fivb == 1) { //皂甘納灰
                card.style.display = 'none';
                ans6.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(100, 100, 100)";
                }
            } else if (oneb == 1 && twob == 1 && fivb == 1) { //消光黑
                card.style.display = 'none';
                ans3.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = "rgb(255, 255, 255)";
                }
            } else if (oneb == 1 && twob == 1 && fiva == 1) { //槁木死灰
                card.style.display = 'none';
                ans4.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(100, 100, 100)";
                }
            } else if (onea == 1 && twob == 1 && fiva == 1) { //島灰
                card.style.display = 'none';
                ans5.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(100, 100, 100)";
                }
            } else if (oneb == 1 && twoa == 1 && fiva == 1) { //不明不白
                card.style.display = 'none';
                ans8.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(50, 50, 50)";
                }
            } else if (onea == 1 && twoa == 1 && fiva == 1) { //極白
                card.style.display = 'none';
                ans1.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(50, 50, 50)";
                }
            } else {
                card.style.display = 'none';
                ans1.style.display = 'block';
                for (var i = 0; i < star.length; i++) {
                    star[i].style.color = " rgb(200, 200, 200)";
                }
            }
        }
    }
};
//結果呈現