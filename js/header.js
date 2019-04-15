const TypeWriter = function(txtElement, word, wait = 3000) {
    this.txtElement = txtElement;
    this.word = word;
    this.txt = '';
    this.wait = parseInt(wait, 10);
    this.type();
}

// Type method
TypeWriter.prototype.type = function() {
    // Get full text of current word
    const fullTxt = this.word;

    this.txt = fullTxt.substring(0, this.txt.length + 1);

    // Initial Type Speed
    let typeSpeed = 300;

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    setTimeout(() => this.type(), typeSpeed);
}

// Init On Dom Load
document.addEventListener('DOMContentLoaded', init);
// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const word = txtElement.getAttribute('data-word');
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, word, wait);
}