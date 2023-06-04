const templateForm = document.getElementById('templateForm');
const templateResult = document.getElementById('templateResult');
const copyButton = document.getElementById('copyButton');

templateForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const field1Value = document.getElementById('field1').value;
    const field2Value = document.getElementById('field2').value;
    const field3Value = document.getElementById('field3').value;
    const field4Value = document.getElementById('field4').value;
    const checkbox1Checked = document.getElementById('checkbox1').checked;
    const checkbox2Checked = document.getElementById('checkbox2').checked;
    const checkbox3Checked = document.getElementById('checkbox3').checked;
    const checkbox4Checked = document.getElementById('checkbox4').checked;
    const checkbox5Checked = document.getElementById('checkbox5').checked;
    const checkbox6Checked = document.getElementById('checkbox6').checked;
    const checkbox7Checked = document.getElementById('checkbox7').checked;
    const checkbox8Checked = document.getElementById('checkbox8').checked;
    const checkbox9Checked = document.getElementById('checkbox9').checked;


    let template = '';

    if (checkbox1Checked) {
        template += `בת ${field1Value}\n`;
    }

    if (checkbox2Checked) {
        template += `${field2Value}\n`;
    }

    if (checkbox3Checked) {
        template += `בשבוע ${field3Value}\n`;
    }

    if (checkbox4Checked) {
        template += `פנתה בשל ${field4Value}\n`;
    }

    if (checkbox5Checked) {
        template += 'בריאה בדר״כ\n';
    }

    if (checkbox6Checked) {
        template += 'ללא ניתוחים\n';
    }

    if (checkbox7Checked) {
        template += 'ללא רגישות\n';
    }

    if (checkbox8Checked) {
        template += 'במשפחה אמ״ל\n';
    }

    if (checkbox9Checked) {
        template += 'במשפחה אמ״ל\n';
    }

    templateResult.value = template;
});

copyButton.addEventListener('click', function () {
    templateResult.select();
    document.execCommand('copy');
    alert('התבנית הועתקה ללוח!');
});
