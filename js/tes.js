function hitungHARS() {
    const totalScore = parseInt(document.querySelector('input[name="question1"]:checked').value) +
        parseInt(document.querySelector('input[name="question2"]:checked').value) +
        parseInt(document.querySelector('input[name="question3"]:checked').value) +
        parseInt(document.querySelector('input[name="question4"]:checked').value) +
        parseInt(document.querySelector('input[name="question5"]:checked').value) +
        parseInt(document.querySelector('input[name="question6"]:checked').value) +
        parseInt(document.querySelector('input[name="question7"]:checked').value) +
        parseInt(document.querySelector('input[name="question8"]:checked').value) +
        parseInt(document.querySelector('input[name="question9"]:checked').value) +
        parseInt(document.querySelector('input[name="question10"]:checked').value) +
        parseInt(document.querySelector('input[name="question11"]:checked').value) +
        parseInt(document.querySelector('input[name="question12"]:checked').value) +
        parseInt(document.querySelector('input[name="question13"]:checked').value) +
        parseInt(document.querySelector('input[name="question14"]:checked').value);

    document.getElementById('totalScore').textContent = totalScore;

    let anxietyStatus;
    if (totalScore >= 0 && totalScore <= 14) {
        anxietyStatus = "Tidak ada kecemasan";
    } else if (totalScore >= 14 && totalScore <= 20) {
        anxietyStatus = "Kecemasan ringan";
    } else if (totalScore >= 21 && totalScore <= 27) {
        anxietyStatus = "Kecemasan sedang";
    } else if (totalScore >= 28 && totalScore <= 41) {
        anxietyStatus = "Kecemasan berat";
    } else {
        anxietyStatus = "Kecemasan berat sekali";
    }

    document.getElementById('anxietyStatus').textContent = anxietyStatus;

    // hasil akhir
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}
