let init = false

function appendScript(path) {
    return new Promise((resolve, reject) => {
        let myScript = document.createElement("script")
        myScript.src = path

        myScript.onload = () => {
            resolve(myScript)
        }

        myScript.on
        document.body.appendChild(myScript)
    })
}

exportBtn.onclick = async function () {
    if (!init) {
        let script = await appendScript("./AlibabaPuHuiTi-2-55-Regular-normal.js")
        console.log(script)

        jspdf.jsPDF.API.events.push(['addFonts', callAddFont])

        init = true
        document.body.removeChild(script)
    }


    // v1
    // var doc = new jsPDF();
    // v2
    var doc = new jspdf.jsPDF();



    // 添加并设置字体
    // doc.addFont('SourceHanSans-Normal.ttf', 'SourceHanSans-Normal', 'normal');
    // doc.addFont('AlibabaPuHuiTi-2-55-Regular-normal.ttf', 'AlibabaPuHuiTi-2-55-Regular-normal', 'normal');
    console.log(doc.getFontList())
    // doc.setFont('SourceHanSans-Normal');

    // doc.addFont('AlibabaPuHuiTi-2-55-Regular-normal.ttf', 'AlibabaPuHuiTi-2-55-Regular', 'normal');
    doc.setFont('AlibabaPuHuiTi-2-55-Regular', 'normal');

    doc.text(20, 20, '简体中文、繁體体中文、English、ジャパン、한국어');
    doc.save('my.pdf');
}
