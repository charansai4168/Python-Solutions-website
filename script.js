
document.getElementById('darkmode-toggle').addEventListener('change', function() {
document.body.classList.toggle('dark-mode', this.checked);
});

document.addEventListener('DOMContentLoaded', () => {
    const preElements = document.querySelectorAll('pre');

    preElements.forEach(pre => {
        let content = pre.innerText;

        // Basic syntax highlighting using regex

        content = content.replace(/(".*?")/g, '<span class="string">$1</span>');
        content = content.replace(/\b(function|var|let|const|return)\b/g, '<span class="keyword">$1</span>');
        content = content.replace(/\b(\d+|from | import|if|else|while|for|elif|in|is|break|continue|pass|try|except|finally|raise|Class)\b/g, '<span class="number">$&</span>');
        content = content.replace(/\b(\w+)\s*\(/g, '<span class="function">$1</span>(');

        content = content.replace(/(#.*$)/gm, '<span class="comment">$1</span>'); // Comments
        // Update the pre element's content
        pre.innerHTML = content;
    });
});

function copyCode(button) {
    // Find the closest <div> with the class 'code-container' to the clicked button
    const codeContainer = button.closest('.code-container');
    
    // Find the <pre> tag within this container
    const codeBlock = codeContainer.querySelector('pre.python-code');
    
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement('textarea');
    textarea.value = codeBlock.textContent; // Get the text content of <pre>
    document.body.appendChild(textarea);
    
    // Select and copy the text
    textarea.select();
    document.execCommand('copy');
    
    // Remove the temporary textarea
    document.body.removeChild(textarea);
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var my_button = document.getElementById("myBtn");

    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
        my_button.style.display = "block";
    } else {
        my_button.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For other browsers
}

function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}